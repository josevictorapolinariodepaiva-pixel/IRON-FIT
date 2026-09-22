import { db } from "../prisma/db";
import bcrypt from "bcrypt";
import { gerarToken } from "../config/auth";
import type { Models } from "../prisma/contract.d";
import { normalizarTipoUsuario, type TipoUsuario } from "../types/auth";

type UsuarioBanco = Models.public_Usuario;

export interface UsuarioPublico {
  id: number;
  nome: string;
  email: string;
  tipo: TipoUsuario;
  createdAt: string;
  updatedAt: string;
}

function paraUsuarioPublico(usuario: UsuarioBanco): UsuarioPublico {
  const tipo = normalizarTipoUsuario(usuario.tipo);

  if (!tipo) {
    throw new Error("TIPO_USUARIO_INVALIDO");
  }

  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    tipo,
    createdAt: usuario.createdAt,
    updatedAt: usuario.updatedAt
  };
}

// LISTAR TODOS OS ALUNOS
export async function buscarAlunos() {
  const usuarios = await db.orm.public.Usuario.all();
  return usuarios.map(paraUsuarioPublico);
}

// CADASTRAR ALUNO
export async function criarAluno(
  nome: string,
  email: string,
  senha: string
) {
  const usuarioExistente = await buscarUsuarioPorEmail(email);

  if (usuarioExistente) {
    throw new Error("EMAIL_DUPLICADO");
  }

  const senhaHash = await bcrypt.hash(senha, 10);

  const usuario = await db.orm.public.Usuario.create({
    nome,
    email,
    senha: senhaHash,
    tipo: "aluno"
  });

  return paraUsuarioPublico(usuario);
}

// BUSCAR ALUNO POR ID
export async function buscarAlunoPorId(id: number) {
  const usuario = await db.orm.public.Usuario.where({ id }).first();
  return usuario ? paraUsuarioPublico(usuario) : null;
}

async function buscarUsuarioPorEmail(email: string) {
  return await db.orm.public.Usuario.where({ email }).first();
}

// ATUALIZAR ALUNO
export async function atualizarAluno(
  id: number,
  nome: string,
  email: string
) {
  const usuarioComMesmoEmail = await buscarUsuarioPorEmail(email);

  if (usuarioComMesmoEmail && usuarioComMesmoEmail.id !== id) {
    throw new Error("EMAIL_DUPLICADO");
  }

  const usuario = await db.orm.public.Usuario.where({ id }).update({
    nome,
    email
  });

  if (!usuario) {
    throw new Error("USUARIO_NAO_ENCONTRADO");
  }

  return paraUsuarioPublico(usuario);
}

// EXCLUIR ALUNO
export async function excluirAluno(id: number) {
  return await db.orm.public.Usuario.where({ id }).delete();
}

// LOGIN DO ALUNO

export async function loginAluno(
  email: string,
  senha: string
) {
  // 1. Buscar o usuário pelo e-mail
  const usuario = await buscarUsuarioPorEmail(email);

  // 2. Verificar se o usuário existe
  if (!usuario) {
    throw new Error("CREDENCIAIS_INVALIDAS");
  }

  // 3. Comparar a senha digitada com o hash
  const senhaValida = await bcrypt.compare(
    senha,
    usuario.senha
  );

  if (!senhaValida) {
    throw new Error("CREDENCIAIS_INVALIDAS");
  }

  // 4. Gerar o token JWT
  const token = gerarToken(
    usuario.id,
    usuario.tipo
  );
  const usuarioPublico = paraUsuarioPublico(usuario);

  // 5. Retornar os dados necessários
  return {
    token,
    usuario: {
      id: usuarioPublico.id,
      nome: usuarioPublico.nome,
      email: usuarioPublico.email,
      tipo: usuarioPublico.tipo
    }
  };
}
