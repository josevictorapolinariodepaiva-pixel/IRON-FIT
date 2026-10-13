import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Link, NavLink } from "react-router-dom";
import "./ExerciciosAdmin.css";

type Exercicio = {
  id: number;
  nome: string;
  grupoMuscular: string;
  equipamento: string;
  nivel: string;
  descricao: string;
};

const exerciciosIniciais: Exercicio[] = [
  {
    id: 1,
    nome: "Supino reto",
    grupoMuscular: "Peito",
    equipamento: "Barra",
    nivel: "Iniciante",
    descricao: "Exercício para desenvolvimento do peitoral.",
  },
  {
    id: 2,
    nome: "Agachamento livre",
    grupoMuscular: "Pernas",
    equipamento: "Barra",
    nivel: "Intermediário",
    descricao: "Exercício composto para membros inferiores.",
  },
  {
    id: 3,
    nome: "Puxada frontal",
    grupoMuscular: "Costas",
    equipamento: "Máquina",
    nivel: "Iniciante",
    descricao: "Exercício para dorsais e região superior das costas.",
  },
  {
    id: 4,
    nome: "Rosca direta",
    grupoMuscular: "Bíceps",
    equipamento: "Barra",
    nivel: "Iniciante",
    descricao: "Exercício para fortalecimento dos bíceps.",
  },
  {
    id: 5,
    nome: "Desenvolvimento de ombros",
    grupoMuscular: "Ombros",
    equipamento: "Halteres",
    nivel: "Intermediário",
    descricao: "Exercício para desenvolvimento dos deltoides.",
  },
];

const gruposMusculares = [
  "Peito",
  "Costas",
  "Pernas",
  "Bíceps",
  "Tríceps",
  "Ombros",
  "Abdômen",
  "Glúteos",
];

const equipamentos = [
  "Barra",
  "Halteres",
  "Máquina",
  "Cabo",
  "Peso corporal",
  "Kettlebell",
];

const niveis = ["Iniciante", "Intermediário", "Avançado"];

function ExerciciosAdmin() {
  const [exercicios, setExercicios] =
    useState<Exercicio[]>(exerciciosIniciais);

  const [busca, setBusca] = useState("");
  const [grupoFiltro, setGrupoFiltro] = useState("Todos");
  const [nivelFiltro, setNivelFiltro] = useState("Todos");

  const [nome, setNome] = useState("");
  const [grupoMuscular, setGrupoMuscular] = useState("Peito");
  const [equipamento, setEquipamento] = useState("Barra");
  const [nivel, setNivel] = useState("Iniciante");
  const [descricao, setDescricao] = useState("");

  const exerciciosFiltrados = useMemo(() => {
    const termo = busca.toLowerCase().trim();

    return exercicios.filter((exercicio) => {
      const correspondeBusca =
        exercicio.nome.toLowerCase().includes(termo) ||
        exercicio.grupoMuscular.toLowerCase().includes(termo);

      const correspondeGrupo =
        grupoFiltro === "Todos" ||
        exercicio.grupoMuscular === grupoFiltro;

      const correspondeNivel =
        nivelFiltro === "Todos" || exercicio.nivel === nivelFiltro;

      return correspondeBusca && correspondeGrupo && correspondeNivel;
    });
  }, [exercicios, busca, grupoFiltro, nivelFiltro]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!nome.trim()) return;

    const novoExercicio: Exercicio = {
      id: Date.now(),
      nome: nome.trim(),
      grupoMuscular,
      equipamento,
      nivel,
      descricao: descricao.trim() || "Sem descrição cadastrada.",
    };

    setExercicios((listaAtual) => [novoExercicio, ...listaAtual]);

    setNome("");
    setDescricao("");
    setGrupoMuscular("Peito");
    setEquipamento("Barra");
    setNivel("Iniciante");
  };

  const removerExercicio = (id: number) => {
    setExercicios((listaAtual) =>
      listaAtual.filter((exercicio) => exercicio.id !== id),
    );
  };

  const totalPeito = exercicios.filter(
    (item) => item.grupoMuscular === "Peito",
  ).length;

  const totalPernas = exercicios.filter(
    (item) => item.grupoMuscular === "Pernas",
  ).length;

  const totalIniciantes = exercicios.filter(
    (item) => item.nivel === "Iniciante",
  ).length;

  return (
    <main className="iron-admin">
      <aside className="iron-sidebar">
        <Link to="/admin" className="iron-logo">
          <span className="iron-logo-mark">I</span>
          <span>IRONFIT</span>
        </Link>

        <span className="iron-sidebar-label">MENU PRINCIPAL</span>

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
            <span className="iron-promo-icon">✦</span>
            <strong>IRONFIT PRO</strong>
            <p>Gerencie sua academia em um só lugar.</p>
          </div>

          <Link to="/" className="iron-logout">
            <span className="iron-nav-icon">↪</span>
            Sair do painel
          </Link>
        </div>
      </aside>

      <section className="iron-workspace">
        <header className="iron-topbar">
          <div className="iron-breadcrumb">
            <span>Administração</span>
            <span className="iron-breadcrumb-separator">/</span>
            <span>Exercícios</span>
          </div>

          <div className="iron-top-profile">
            <span className="iron-online-dot" />

            <div className="iron-admin-avatar">A</div>

            <div className="iron-admin-info">
              <strong>Administrador</strong>
              <span>Gestão da academia</span>
            </div>

            <span className="iron-profile-chevron">⌄</span>
          </div>
        </header>

        <div className="iron-page-content">
          <div className="iron-page-heading">
            <div>
              <span className="iron-overline">
                IRONFIT / BIBLIOTECA DE EXERCÍCIOS
              </span>
              <h1>Exercícios</h1>
              <p>
                Cadastre, pesquise e organize os exercícios disponíveis na
                plataforma.
              </p>
            </div>
          </div>

          <section className="iron-metrics">
            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">Total de exercícios</span>
                <span className="iron-metric-icon purple">✦</span>
              </div>
              <strong className="iron-metric-number">
                {exercicios.length}
              </strong>
              <span className="iron-metric-caption">
                Exercícios cadastrados
              </span>
              <div className="iron-metric-line purple-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">Peito</span>
                <span className="iron-metric-icon green">↗</span>
              </div>
              <strong className="iron-metric-number">{totalPeito}</strong>
              <span className="iron-metric-caption">
                Exercícios para peitoral
              </span>
              <div className="iron-metric-line green-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">Pernas</span>
                <span className="iron-metric-icon red">↗</span>
              </div>
              <strong className="iron-metric-number">{totalPernas}</strong>
              <span className="iron-metric-caption">
                Exercícios para membros inferiores
              </span>
              <div className="iron-metric-line red-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">Iniciantes</span>
                <span className="iron-metric-icon purple">♙</span>
              </div>
              <strong className="iron-metric-number">{totalIniciantes}</strong>
              <span className="iron-metric-caption">
                Exercícios de nível iniciante
              </span>
              <div className="iron-metric-line purple-line" />
            </article>
          </section>

          <section className="exercise-admin-grid">
            <article className="exercise-form-card">
              <div className="exercise-section-heading">
                <span>NOVO EXERCÍCIO</span>
                <h2>Cadastrar exercício</h2>
                <p>Preencha os dados para adicionar à biblioteca.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="exercise-form-field">
                  <label htmlFor="nome-exercicio">Nome do exercício</label>
                  <input
                    id="nome-exercicio"
                    type="text"
                    placeholder="Ex.: Supino inclinado"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    required
                  />
                </div>

                <div className="exercise-form-row">
                  <div className="exercise-form-field">
                    <label htmlFor="grupo-exercicio">Grupo muscular</label>
                    <select
                      id="grupo-exercicio"
                      value={grupoMuscular}
                      onChange={(event) =>
                        setGrupoMuscular(event.target.value)
                      }
                    >
                      {gruposMusculares.map((grupo) => (
                        <option key={grupo} value={grupo}>
                          {grupo}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="exercise-form-field">
                    <label htmlFor="equipamento-exercicio">Equipamento</label>
                    <select
                      id="equipamento-exercicio"
                      value={equipamento}
                      onChange={(event) => setEquipamento(event.target.value)}
                    >
                      {equipamentos.map((item) => (
                        <option key={item} value={item}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="exercise-form-field">
                  <label htmlFor="nivel-exercicio">Nível</label>
                  <select
                    id="nivel-exercicio"
                    value={nivel}
                    onChange={(event) => setNivel(event.target.value)}
                  >
                    {niveis.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="exercise-form-field">
                  <label htmlFor="descricao-exercicio">Descrição</label>
                  <textarea
                    id="descricao-exercicio"
                    placeholder="Explique brevemente como o exercício é realizado."
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                    rows={4}
                  />
                </div>

                <button type="submit" className="exercise-submit-button">
                  + Adicionar exercício
                </button>
              </form>
            </article>

            <section className="exercise-list-section">
              <div className="exercise-list-header">
                <div className="exercise-section-heading">
                  <span>BIBLIOTECA</span>
                  <h2>Exercícios cadastrados</h2>
                </div>

                <span className="exercise-count">
                  {exerciciosFiltrados.length} resultado(s)
                </span>
              </div>

              <div className="exercise-filters">
                <input
                  type="search"
                  placeholder="Buscar exercício..."
                  aria-label="Buscar exercício"
                  value={busca}
                  onChange={(event) => setBusca(event.target.value)}
                />

                <select
                  aria-label="Filtrar por grupo muscular"
                  value={grupoFiltro}
                  onChange={(event) => setGrupoFiltro(event.target.value)}
                >
                  <option value="Todos">Todos os grupos</option>
                  {gruposMusculares.map((grupo) => (
                    <option key={grupo} value={grupo}>
                      {grupo}
                    </option>
                  ))}
                </select>

                <select
                  aria-label="Filtrar por nível"
                  value={nivelFiltro}
                  onChange={(event) => setNivelFiltro(event.target.value)}
                >
                  <option value="Todos">Todos os níveis</option>
                  {niveis.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <div className="exercise-list">
                {exerciciosFiltrados.length === 0 ? (
                  <div className="exercise-empty">
                    <strong>Nenhum exercício encontrado.</strong>
                    <span>
                      Tente alterar a busca ou os filtros selecionados.
                    </span>
                  </div>
                ) : (
                  exerciciosFiltrados.map((exercicio) => (
                    <article
                      className="exercise-admin-card"
                      key={exercicio.id}
                    >
                      <div className="exercise-icon">
                        {exercicio.grupoMuscular.charAt(0)}
                      </div>

                      <div className="exercise-info">
                        <div className="exercise-title-row">
                          <h3>{exercicio.nome}</h3>
                          <span className="exercise-level">
                            {exercicio.nivel}
                          </span>
                        </div>

                        <div className="exercise-meta">
                          <span>{exercicio.grupoMuscular}</span>
                          <span>•</span>
                          <span>{exercicio.equipamento}</span>
                        </div>

                        <p>{exercicio.descricao}</p>
                      </div>

                      <button
                        type="button"
                        className="exercise-delete-button"
                        onClick={() => removerExercicio(exercicio.id)}
                        aria-label={`Excluir ${exercicio.nome}`}
                      >
                        Excluir
                      </button>
                    </article>
                  ))
                )}
              </div>
            </section>
          </section>

          <footer className="iron-page-footer">
            <span>IRONFIT © {new Date().getFullYear()}</span>
            <span>Painel administrativo</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default ExerciciosAdmin;