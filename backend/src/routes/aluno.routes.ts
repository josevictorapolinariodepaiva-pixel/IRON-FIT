import express = require("express");

import {
  listarAlunos,
  cadastrarAluno,
  consultarAluno,
  atualizarAluno,
  deletarAluno
} from "../controllers/aluno.controller";

const router = express.Router();

router.get("/", listarAlunos);

router.post("/", cadastrarAluno);

router.get("/:id", consultarAluno);

router.put("/:id", atualizarAluno);

router.delete("/:id", deletarAluno);

export = router;