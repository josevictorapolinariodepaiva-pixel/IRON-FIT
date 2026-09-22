import type { Request, Response } from "express";

import {
  buscarAlunos,
  criarAluno,
  buscarAlunoPorId,
  atualizarAluno as atualizarAlunoService,
  excluirAluno as excluirAlunoService,
  loginAluno
} from "../services/aluno.service";

import {
  criarAlunoSchema,
  atualizarAlunoSchema,
  loginSchema
} from "../schemas/aluno.schema";
import { z } from "zod";

const idSchema = z.coerce.number().int().positive();

function obterId(req: Request, res: Response): number | null {
  const resultado = idSchema.safeParse(req.params.id);

  if (!resultado.success) {
    res.status(400).json({ mensagem: "ID inválido" });
    return null;
  }

  return resultado.data;
}
function podeAcessarUsuario(req: Request, id: number) {
  return req.usuario?.tipo === "administrador" || req.usuario?.id === id;
}

// LISTAR TODOS OS ALUNOS
export async function listarAlunos(
  req: Request,
  res: Response
) {
  try {
    const alunos = await buscarAlunos();

    res.json(alunos);
  } catch (error) {
    console.error("Erro ao buscar alunos:", error);

    res.status(500).json({
      mensagem: "Erro ao buscar alunos"
    });
  }
}

// CADASTRAR ALUNO
export async function cadastrarAluno(
  req: Request,
  res: Response
) {
  try {
    const resultado = criarAlunoSchema.safeParse(req.body);

    if (!resultado.success) {
      return res.status(400).json({
        erros: resultado.error.issues
      });
    }

    const { nome, email, senha } = resultado.data;

    const aluno = await criarAluno(
      nome,
      email,
      senha
    );

    res.status(201).json(aluno);
  } catch (error) {
    if (error instanceof Error && error.message === "EMAIL_DUPLICADO") {
      return res.status(409).json({ mensagem: "E-mail já cadastrado" });
    }

    console.error("Erro ao cadastrar aluno:", error);

    res.status(500).json({
      mensagem: "Erro ao cadastrar aluno"
    });
  }
}

// CONSULTAR ALUNO POR ID
export async function consultarAluno(
  req: Request,
  res: Response
) {
  try {
    const id = obterId(req, res);

    if (!id) return;

    if (!podeAcessarUsuario(req, id)) {
      return res.status(403).json({
        mensagem: "Você não tem permissão para acessar este usuário"
      });
    }

    const aluno = await buscarAlunoPorId(id);

    if (!aluno) {
      return res.status(404).json({
        mensagem: "Aluno não encontrado"
      });
    }

    res.json(aluno);
  } catch (error) {
    console.error("Erro ao consultar aluno:", error);

    res.status(500).json({
      mensagem: "Erro ao consultar aluno"
    });
  }
}

// ATUALIZAR ALUNO
export async function atualizarAluno(
  req: Request,
  res: Response
) {
  try {
    const id = obterId(req, res);

    if (!id) return;

    if (!podeAcessarUsuario(req, id)) {
      return res.status(403).json({
        mensagem: "Você não tem permissão para alterar este usuário"
      });
    }

    const alunoExistente = await buscarAlunoPorId(id);

    if (!alunoExistente) {
      return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    const resultado = atualizarAlunoSchema.safeParse(
      req.body
    );

    if (!resultado.success) {
      return res.status(400).json({
        erros: resultado.error.issues
      });
    }

    const { nome, email } = resultado.data;

    const aluno = await atualizarAlunoService(
      id,
      nome,
      email
    );

    res.json(aluno);
  } catch (error) {
    if (error instanceof Error && error.message === "EMAIL_DUPLICADO") {
      return res.status(409).json({ mensagem: "E-mail já cadastrado" });
    }

    if (error instanceof Error && error.message === "USUARIO_NAO_ENCONTRADO") {
      return res.status(404).json({ mensagem: "Aluno não encontrado" });
    }

    console.error("Erro ao atualizar aluno:", error);

    res.status(500).json({
      mensagem: "Erro ao atualizar aluno"
    });
  }
}

// EXCLUIR ALUNO
export async function deletarAluno(
  req: Request,
  res: Response
) {
  try {
    const id = obterId(req, res);

    if (!id) return;

    const aluno = await buscarAlunoPorId(id);

    if (!aluno) {
      return res.status(404).json({
        mensagem: "Aluno não encontrado"
      });
    }

    await excluirAlunoService(id);

    res.json({
      mensagem: "Aluno excluído com sucesso"
    });
  } catch (error) {
    console.error("Erro ao excluir aluno:", error);

    res.status(500).json({
      mensagem: "Erro ao excluir aluno"
    });
  }
}

// LOGIN DO ALUNO
export async function entrarAluno(
  req: Request,
  res: Response
) {
  try {
    // 1. Validar os dados recebidos
    const resultado = loginSchema.safeParse(req.body);

    if (!resultado.success) {
      return res.status(400).json({
        erros: resultado.error.issues
      });
    }

    // 2. Pegar e-mail e senha validados
    const { email, senha } = resultado.data;

    // 3. Chamar o Service
    const resultadoLogin = await loginAluno(
      email,
      senha
    );

    // 4. Retornar o token
    return res.status(200).json(resultadoLogin);

  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "CREDENCIAIS_INVALIDAS"
    ) {
      return res.status(401).json({
        mensagem: "E-mail ou senha incorretos"
      });
    }

    console.error("Erro ao realizar login:", error);

    return res.status(500).json({
      mensagem: "Erro interno ao realizar login"
    });
  }
}

