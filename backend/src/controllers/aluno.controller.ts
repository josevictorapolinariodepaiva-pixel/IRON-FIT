import type { Request, Response } from "express";
import { z } from "zod";

import {
  buscarAlunos,
  criarAluno,
  buscarAlunoPorId,
  atualizarAluno as atualizarAlunoService,
  excluirAluno as excluirAlunoService,
  loginAluno
} from "../services/aluno.service";

import { validarTurnstile } from "../services/turnstile.service";

import {
  criarAlunoSchema,
  atualizarAlunoSchema,
  loginSchema
} from "../schemas/aluno.schema";

const idSchema = z.coerce.number().int().positive();

function obterId(req: Request, res: Response): number | null {
  const resultado = idSchema.safeParse(req.params.id);

  if (!resultado.success) {
    res.status(400).json({ mensagem: "ID inválido" });
    return null;
  }

  return resultado.data;
}

function podeAcessarUsuario(req: Request, id: number): boolean {
  return (
    req.usuario?.tipo === "administrador" ||
    req.usuario?.id === id
  );
}

// LISTAR TODOS OS ALUNOS
export async function listarAlunos(
  req: Request,
  res: Response
) {
  try {
    const alunos = await buscarAlunos();
    return res.json(alunos);
  } catch (error) {
    console.error("Erro ao buscar alunos:", error);

    return res.status(500).json({
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
    // 1. Validar os dados recebidos
    const resultado = criarAlunoSchema.safeParse(req.body);

    if (!resultado.success) {
      return res.status(400).json({
        erros: resultado.error.issues
      });
    }

    const { nome, email, senha, turnstileToken } = resultado.data;

    // 2. Validar o Turnstile no servidor
    const tokenValido = await validarTurnstile(turnstileToken);

    if (!tokenValido) {
      return res.status(400).json({
        mensagem:
          "Falha na verificação de segurança. Atualize a página e tente novamente."
      });
    }

    // 3. Cadastrar o aluno
    const aluno = await criarAluno(nome, email, senha);

    return res.status(201).json(aluno);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "EMAIL_DUPLICADO"
    ) {
      return res.status(409).json({
        mensagem: "E-mail já cadastrado"
      });
    }

    console.error("Erro ao cadastrar aluno:", error);

    return res.status(500).json({
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

    if (id === null) return;

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

    return res.json(aluno);
  } catch (error) {
    console.error("Erro ao consultar aluno:", error);

    return res.status(500).json({
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

    if (id === null) return;

    if (!podeAcessarUsuario(req, id)) {
      return res.status(403).json({
        mensagem: "Você não tem permissão para alterar este usuário"
      });
    }

    const alunoExistente = await buscarAlunoPorId(id);

    if (!alunoExistente) {
      return res.status(404).json({
        mensagem: "Aluno não encontrado"
      });
    }

    const resultado = atualizarAlunoSchema.safeParse(req.body);

    if (!resultado.success) {
      return res.status(400).json({
        erros: resultado.error.issues
      });
    }

    const { nome, email } = resultado.data;

    const aluno = await atualizarAlunoService(id, nome, email);

    return res.json(aluno);
  } catch (error) {
    if (
      error instanceof Error &&
      error.message === "EMAIL_DUPLICADO"
    ) {
      return res.status(409).json({
        mensagem: "E-mail já cadastrado"
      });
    }

    if (
      error instanceof Error &&
      error.message === "USUARIO_NAO_ENCONTRADO"
    ) {
      return res.status(404).json({
        mensagem: "Aluno não encontrado"
      });
    }

    console.error("Erro ao atualizar aluno:", error);

    return res.status(500).json({
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

    if (id === null) return;

    const aluno = await buscarAlunoPorId(id);

    if (!aluno) {
      return res.status(404).json({
        mensagem: "Aluno não encontrado"
      });
    }

    await excluirAlunoService(id);

    return res.json({
      mensagem: "Aluno excluído com sucesso"
    });
  } catch (error) {
    console.error("Erro ao excluir aluno:", error);

    return res.status(500).json({
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

    const { email, senha, turnstileToken } = resultado.data;

    // 2. Validar o Turnstile no servidor
    const tokenValido = await validarTurnstile(turnstileToken);

    if (!tokenValido) {
      return res.status(400).json({
        mensagem:
          "Falha na verificação de segurança. Atualize a página e tente novamente."
      });
    }

    // 3. Realizar login
    const resultadoLogin = await loginAluno(email, senha);

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