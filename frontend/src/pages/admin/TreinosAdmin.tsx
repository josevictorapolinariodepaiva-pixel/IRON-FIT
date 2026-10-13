import { useState } from "react";
import type { FormEvent } from "react";
import { Link, NavLink } from "react-router-dom";
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

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const novoTreino: TreinoAdmin = {
      id: Date.now(),
      nome: nome.trim(),
      grupo,
      nivel,
      duracao: `${duracao} min`,
      exercicios: Number(exercicios),
    };

    setTreinos((atuais) => [novoTreino, ...atuais]);

    setNome("");
    setGrupo("Peito");
    setNivel("Iniciante");
    setDuracao("");
    setExercicios("");
  };

  const removerTreino = (id: number) => {
    setTreinos((atuais) => atuais.filter((treino) => treino.id !== id));
  };

  return (
    <main className="iron-admin">
      <aside className="iron-sidebar">
        <Link to="/admin" className="iron-logo">
          <span className="iron-logo-mark">I</span>
          <span>
            IRON<b>FIT</b>
          </span>
        </Link>

        <div className="iron-sidebar-label">ESPAÇO ADMINISTRATIVO</div>

        <nav className="iron-nav" aria-label="Navegação administrativa">
          <NavLink to="/admin" end>
            <span className="iron-nav-icon">⌂</span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/admin/alunos">
            <span className="iron-nav-icon">♟</span>
            <span>Alunos</span>
          </NavLink>

          <NavLink to="/admin/videos">
            <span className="iron-nav-icon">▷</span>
            <span>Vídeos</span>
          </NavLink>

          <NavLink to="/admin/treinos">
            <span className="iron-nav-icon">ϟ</span>
            <span>Treinos</span>
            <span className="iron-nav-current">●</span>
          </NavLink>

          <NavLink to="/admin/exercicios">
            <span className="iron-nav-icon">◇</span>
            <span>Exercícios</span>
          </NavLink>

          <NavLink to="/admin/dietas">
            <span className="iron-nav-icon">◈</span>
            <span>Dietas</span>
          </NavLink>
        </nav>

        <div className="iron-sidebar-bottom">
          <div className="iron-sidebar-promo">
            <span className="iron-promo-icon">ϟ</span>
            <strong>FOCO NO RESULTADO</strong>
            <p>Gestão inteligente. Evolução constante.</p>
          </div>

          <Link to="/" className="iron-logout">
            <span>↪</span> Sair da administração
          </Link>
        </div>
      </aside>

      <section className="iron-workspace">
        <header className="iron-topbar">
          <div className="iron-breadcrumb">
            <span>IRONFIT</span>
            <span className="iron-breadcrumb-separator">/</span>
            <span>Administração</span>
            <span className="iron-breadcrumb-separator">/</span>
            <strong>Treinos</strong>
          </div>

          <div className="iron-top-profile">
            <span className="iron-online-dot" />
            <div className="iron-admin-avatar">A</div>
            <div className="iron-admin-info">
              <strong>Administrador</strong>
              <span>Gestão da plataforma</span>
            </div>
            <span className="iron-profile-chevron">⌄</span>
          </div>
        </header>

        <div className="iron-page-content">
          <section className="iron-page-heading">
            <div>
              <div className="iron-overline">
                <span /> GESTÃO DE TREINAMENTO
              </div>

              <h1>
                Treinos<span>.</span>
              </h1>

              <p>
                Crie, organize e gerencie as rotinas de treinamento
                disponibilizadas aos alunos da IRONFIT.
              </p>
            </div>

            <Link to="/admin" className="iron-secondary-button">
              <span>←</span> Voltar ao painel
            </Link>
          </section>

          <section className="iron-metrics">
            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">TOTAL DE TREINOS</span>
                <span className="iron-metric-icon purple">ϟ</span>
              </div>
              <strong className="iron-metric-number">{treinos.length}</strong>
              <span className="iron-metric-caption">Rotinas cadastradas</span>
              <div className="iron-metric-line purple-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">GRUPOS MUSCULARES</span>
                <span className="iron-metric-icon green">◇</span>
              </div>
              <strong className="iron-metric-number">
                {new Set(treinos.map((treino) => treino.grupo)).size}
              </strong>
              <span className="iron-metric-caption">Grupos contemplados</span>
              <div className="iron-metric-line green-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">INICIANTES</span>
                <span className="iron-metric-icon purple">↗</span>
              </div>
              <strong className="iron-metric-number">
                {treinos.filter((treino) => treino.nivel === "Iniciante").length}
              </strong>
              <span className="iron-metric-caption">Treinos para iniciantes</span>
              <div className="iron-metric-line purple-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">EXERCÍCIOS</span>
                <span className="iron-metric-icon green">✓</span>
              </div>
              <strong className="iron-metric-number">
                {treinos.reduce((total, treino) => total + treino.exercicios, 0)}
              </strong>
              <span className="iron-metric-caption">
                Exercícios nas rotinas cadastradas
              </span>
              <div className="iron-metric-line green-line" />
            </article>
          </section>

          <section className="treinos-admin-layout">
            <section className="treinos-admin-form-panel">
              <div className="treinos-admin-section-header">
                <div className="iron-overline">NOVA ROTINA</div>
                <h2>Criar treino</h2>
                <p>Cadastre uma nova rotina de treinamento.</p>
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
                    <label htmlFor="duracaoTreino">Duração (minutos)</label>
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
                  <label htmlFor="exerciciosTreino">
                    Quantidade de exercícios
                  </label>
                  <input
                    id="exerciciosTreino"
                    type="number"
                    min="1"
                    placeholder="6"
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
                  <div className="iron-overline">ROTINAS</div>
                  <h2>Treinos cadastrados</h2>
                  <p>Consulte e gerencie as rotinas de treinamento.</p>
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

                {treinos.length === 0 && (
                  <div className="iron-empty-state">
                    <div className="iron-empty-icon">ϟ</div>
                    <strong>Nenhum treino cadastrado</strong>
                    <p>Use o formulário para criar a primeira rotina.</p>
                  </div>
                )}
              </div>

              <footer className="iron-table-footer">
                <span>
                  Exibindo <b>{treinos.length}</b> treinos cadastrados
                </span>
                <span className="iron-footer-status">
                  <i /> Dados demonstrativos
                </span>
              </footer>
            </section>
          </section>

          <footer className="iron-page-footer">
            <span>
              IRONFIT <b>ADMIN</b>
            </span>
            <span>Gestão de treinamento · Plataforma de fitness</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default TreinosAdmin;