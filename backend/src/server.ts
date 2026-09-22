import express = require("express");
import cors = require("cors");
import alunoRoutes = require("./routes/aluno.routes");

const app = express();
const origemFrontend = process.env.FRONTEND_URL || "http://localhost:5173";

app.use(cors({
  origin: origemFrontend,
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));
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
