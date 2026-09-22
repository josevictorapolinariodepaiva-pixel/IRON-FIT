import express = require("express");

import {
  listarAlunos,
  cadastrarAluno,
  consultarAluno,
  atualizarAluno,
  deletarAluno,
  entrarAluno
} from "../controllers/aluno.controller";
import { autenticar, autorizar } from "../middlewares/auth.middleware";

const router = express.Router();

router.post("/", cadastrarAluno);

// LOGIN — deve ficar antes de /:id
router.post("/login", entrarAluno);

router.get("/", autenticar, autorizar("administrador"), listarAlunos);

router.get("/:id", autenticar, consultarAluno);

router.put("/:id", autenticar, atualizarAluno);

router.delete("/:id", autenticar, autorizar("administrador"), deletarAluno);

export = router;
