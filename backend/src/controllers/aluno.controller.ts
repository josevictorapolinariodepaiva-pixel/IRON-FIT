import type { Request, Response } from "express";

import {
  buscarAlunos,
  criarAluno,
  buscarAlunoPorId,
  atualizarAluno as atualizarAlunoService,
  excluirAluno as excluirAlunoService
} from "../services/aluno.service";

import {
  criarAlunoSchema,
  atualizarAlunoSchema
} from "../schemas/aluno.schema";

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
    const id = Number(req.params.id);

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
    const id = Number(req.params.id);

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
    const id = Number(req.params.id);

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