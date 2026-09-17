import express = require("express");
import alunoController = require("../controllers/aluno.controller");

const router = express.Router();

router.get("/", (alunoController as any).listarAlunos);

export = router;