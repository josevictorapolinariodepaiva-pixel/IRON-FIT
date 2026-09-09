"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const PORT = 3000;
app.get("/", (req, res) => {
    res.json({
        mensagem: "API do JobConnect funcionando!"
    });
});
app.get("/vagas", (req, res) => {
    res.json([
        {
            id: 1,
            titulo: "Desenvolvedor Front-end",
            empresa: "Empresa X",
            localizacao: "Barbacena - MG"
        },
        {
            id: 2,
            titulo: "Desenvolvedor Back-end",
            empresa: "Empresa Y",
            localizacao: "Juiz de Fora - MG"
        }
    ]);
});
app.post("/vagas", (req, res) => {
    const novaVaga = req.body;
    res.json({
        mensagem: "Vaga cadastrada com sucesso!",
        vaga: novaVaga
    });
});
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
//# sourceMappingURL=server.js.map