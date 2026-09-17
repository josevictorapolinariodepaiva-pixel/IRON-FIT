import express = require("express");
import alunoRoutes = require("./routes/aluno.routes");

const app = express();

app.use(express.json());

// Rotas
app.use("/alunos", alunoRoutes);

const PORT = 3000;

app.get("/", (req, res) => {
  res.json({
    mensagem: "API do IRONFIT funcionando!"
  });
});

app.listen(PORT, () => {
  console.log(`Servidor IRONFIT rodando na porta ${PORT}`);
});