import { useState } from "react";
import type { SubmitEvent } from "react";
import { Link } from "react-router-dom";
import "./TreinosAdmin.css";

type TreinoAdmin = {
  id: number;
  nome: string;
  grupo: string;
  nivel: string;
  duracao: string;
  exercicios: number;
};

function TreinosAdmin() {
  const [treinos, setTreinos] = useState<TreinoAdmin[]>([
    {
      id: 1,
      nome: "Peito + Tríceps",
      grupo: "Peito",
      nivel: "Intermediário",
      duracao: "60 min",
      exercicios: 6,
    },
    {
      id: 2,
      nome: "Costas + Bíceps",
      grupo: "Costas",
      nivel: "Intermediário",
      duracao: "55 min",
      exercicios: 7,
    },
    {
      id: 3,
      nome: "Pernas completo",
      grupo: "Pernas",
      nivel: "Avançado",
      duracao: "70 min",
      exercicios: 8,
    },
  ]);

  const [nome, setNome] = useState("");
  const [grupo, setGrupo] = useState("Peito");
  const [nivel, setNivel] = useState("Iniciante");
  const [duracao, setDuracao] = useState("");
  const [exercicios, setExercicios] = useState("");

  const handleSubmit = (event: SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();

    const novoTreino: TreinoAdmin = {
      id: Date.now(),
      nome,
      grupo,
      nivel,
      duracao: `${duracao} min`,
      exercicios: Number(exercicios),
    };

    setTreinos((treinosAtuais) => [novoTreino, ...treinosAtuais]);

    setNome("");
    setGrupo("Peito");
    setNivel("Iniciante");
    setDuracao("");
    setExercicios("");
  };

  const removerTreino = (id: number) => {
    setTreinos((treinosAtuais) =>
      treinosAtuais.filter((treino) => treino.id !== id)
    );
  };

  return (
    <main className="treinos-admin-page">
      <header className="treinos-admin-header">
        <div>
          <span>GERENCIAMENTO</span>
          <h1>Seus <strong>treinos.</strong></h1>
          <p>
            Crie e organize as rotinas de treinamento disponíveis para os
            alunos da IRONFIT.
          </p>
        </div>

        <Link to="/admin" className="treinos-admin-back">
          ← Dashboard
        </Link>
      </header>

      <section className="treinos-admin-layout">
        <section className="treinos-admin-form-panel">
          <div className="treinos-admin-section-header">
            <span>NOVA ROTINA</span>
            <h2>Criar treino</h2>
            <p>
              Cadastre uma nova rotina de treinamento para seus alunos.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="treinos-admin-form">
            <div className="treinos-admin-form-group">
              <label htmlFor="nomeTreino">Nome do treino</label>
              <input
                id="nomeTreino"
                type="text"
                placeholder="Ex.: Peito + Tríceps"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
              />
            </div>

            <div className="treinos-admin-form-group">
              <label htmlFor="grupoTreino">Grupo muscular principal</label>
              <select
                id="grupoTreino"
                value={grupo}
                onChange={(event) => setGrupo(event.target.value)}
              >
                <option>Peito</option>
                <option>Costas</option>
                <option>Pernas</option>
                <option>Ombros</option>
                <option>Bíceps</option>
                <option>Tríceps</option>
                <option>Abdômen</option>
                <option>Full Body</option>
              </select>
            </div>

            <div className="treinos-admin-form-row">
              <div className="treinos-admin-form-group">
                <label htmlFor="nivelTreino">Nível</label>
                <select
                  id="nivelTreino"
                  value={nivel}
                  onChange={(event) => setNivel(event.target.value)}
                >
                  <option>Iniciante</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                </select>
              </div>

              <div className="treinos-admin-form-group">
                <label htmlFor="duracaoTreino">Duração</label>
                <input
                  id="duracaoTreino"
                  type="number"
                  min="1"
                  placeholder="60"
                  value={duracao}
                  onChange={(event) => setDuracao(event.target.value)}
                  required
                />
              </div>
            </div>

            <div className="treinos-admin-form-group">
              <label htmlFor="exerciciosTreino">Quantidade de exercícios</label>
              <input
                id="exerciciosTreino"
                type="number"
                min="1"
                placeholder="06"
                value={exercicios}
                onChange={(event) => setExercicios(event.target.value)}
                required
              />
            </div>

            <button type="submit" className="treinos-admin-submit">
              + Criar treino
            </button>
          </form>
        </section>

        <section className="treinos-admin-list-panel">
          <div className="treinos-admin-list-header">
            <div>
              <span>ROTINAS</span>
              <h2>Treinos cadastrados</h2>
            </div>

            <strong>{treinos.length}</strong>
          </div>

          <div className="treinos-admin-list">
            {treinos.map((treino) => (
              <article className="treino-admin-card" key={treino.id}>
                <div className="treino-admin-number">
                  {String(treino.id).slice(-2)}
                </div>

                <div className="treino-admin-info">
                  <div className="treino-admin-tags">
                    <span>{treino.grupo}</span>
                    <span>{treino.nivel}</span>
                  </div>

                  <h3>{treino.nome}</h3>

                  <div className="treino-admin-meta">
                    <span>⏱ {treino.duracao}</span>
                    <span>⚡ {treino.exercicios} exercícios</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="treino-admin-delete"
                  onClick={() => removerTreino(treino.id)}
                >
                  Excluir
                </button>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}

export default TreinosAdmin;
