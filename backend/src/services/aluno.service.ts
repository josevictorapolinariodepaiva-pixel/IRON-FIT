import { db } from "../prisma/db";
import bcrypt from "bcrypt";

// LISTAR TODOS OS ALUNOS
export async function buscarAlunos() {
  return await db.orm.public.Usuario.all();
}

// CADASTRAR ALUNO
export async function criarAluno(
  nome: string,
  email: string,
  senha: string
) {
  const senhaHash = await bcrypt.hash(senha, 10);

  return await db.orm.public.Usuario.create({
    nome,
    email,
    senha: senhaHash,
    tipo: "aluno"
  });
}

// BUSCAR ALUNO POR ID
export async function buscarAlunoPorId(id: number) {
  const alunos = await db.orm.public.Usuario.all();

  return alunos.find((aluno) => aluno.id === id);
}

// ATUALIZAR ALUNO
export async function atualizarAluno(
  id: number,
  nome: string,
  email: string
) {
  return await (db.orm.public.Usuario.update as any)({
    id,
    nome,
    email
  });
}

// EXCLUIR ALUNO
export async function excluirAluno(id: number) {
  return await (db.orm.public.Usuario
    .where({ id })
    .delete as any)();
}