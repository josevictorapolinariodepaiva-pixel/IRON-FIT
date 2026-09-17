import type { Request, Response } from "express";

function listarAlunos(_req: Request, res: Response): void {
  res.json({
    mensagem: "Controller de alunos funcionando!"
  });
}

module.exports = { listarAlunos };
