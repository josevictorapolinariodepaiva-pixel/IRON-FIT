import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Link, NavLink } from "react-router-dom";
import "./DietasAdmin.css";

type Dieta = {
  id: number;
  nome: string;
  objetivo: string;
  nivel: string;
  calorias: number;
  refeicoes: number;
  descricao: string;
};

const dietasIniciais: Dieta[] = [
  {
    id: 1,
    nome: "Hipertrofia básica",
    objetivo: "Ganho de massa muscular",
    nivel: "Iniciante",
    calorias: 2800,
    refeicoes: 5,
    descricao:
      "Plano alimentar geral voltado para suporte ao ganho de massa.",
  },
  {
    id: 2,
    nome: "Definição",
    objetivo: "Redução de gordura",
    nivel: "Intermediário",
    calorias: 2100,
    refeicoes: 5,
    descricao:
      "Plano com foco em controle calórico e manutenção de massa muscular.",
  },
  {
    id: 3,
    nome: "Alta performance",
    objetivo: "Performance",
    nivel: "Avançado",
    calorias: 3200,
    refeicoes: 6,
    descricao:
      "Plano alimentar destinado a alunos com maior demanda energética.",
  },
];

const objetivos = [
  "Ganho de massa muscular",
  "Redução de gordura",
  "Performance",
  "Manutenção",
];

const niveis = ["Iniciante", "Intermediário", "Avançado"];

function DietasAdmin() {
  const [dietas, setDietas] = useState<Dieta[]>(dietasIniciais);
  const [busca, setBusca] = useState("");
  const [objetivoFiltro, setObjetivoFiltro] = useState("Todos");
  const [nivelFiltro, setNivelFiltro] = useState("Todos");

  const [nome, setNome] = useState("");
  const [objetivo, setObjetivo] = useState(objetivos[0]);
  const [nivel, setNivel] = useState(niveis[0]);
  const [calorias, setCalorias] = useState("");
  const [refeicoes, setRefeicoes] = useState("5");
  const [descricao, setDescricao] = useState("");

  const dietasFiltradas = useMemo(() => {
    const termo = busca.toLowerCase().trim();

    return dietas.filter((dieta) => {
      const correspondeBusca =
        dieta.nome.toLowerCase().includes(termo) ||
        dieta.objetivo.toLowerCase().includes(termo);

      const correspondeObjetivo =
        objetivoFiltro === "Todos" || dieta.objetivo === objetivoFiltro;

      const correspondeNivel =
        nivelFiltro === "Todos" || dieta.nivel === nivelFiltro;

      return (
        correspondeBusca &&
        correspondeObjetivo &&
        correspondeNivel
      );
    });
  }, [dietas, busca, objetivoFiltro, nivelFiltro]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const caloriasNumericas = Number(calorias);
    const refeicoesNumericas = Number(refeicoes);

    if (
      !nome.trim() ||
      !calorias ||
      !Number.isFinite(caloriasNumericas) ||
      caloriasNumericas <= 0 ||
      !Number.isFinite(refeicoesNumericas) ||
      refeicoesNumericas <= 0
    ) {
      return;
    }

    const novaDieta: Dieta = {
      id: Date.now(),
      nome: nome.trim(),
      objetivo,
      nivel,
      calorias: caloriasNumericas,
      refeicoes: refeicoesNumericas,
      descricao: descricao.trim() || "Sem descrição cadastrada.",
    };

    setDietas((listaAtual) => [novaDieta, ...listaAtual]);

    setNome("");
    setCalorias("");
    setRefeicoes("5");
    setDescricao("");
    setObjetivo(objetivos[0]);
    setNivel(niveis[0]);
  };

  const removerDieta = (id: number) => {
    setDietas((listaAtual) =>
      listaAtual.filter((dieta) => dieta.id !== id)
    );
  };

  const totalHipertrofia = dietas.filter(
    (dieta) => dieta.objetivo === "Ganho de massa muscular"
  ).length;

  const totalDefinicao = dietas.filter(
    (dieta) => dieta.objetivo === "Redução de gordura"
  ).length;

  const totalPerformance = dietas.filter(
    (dieta) => dieta.objetivo === "Performance"
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
            <span>Dietas</span>
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
              <span className="iron-overline">IRONFIT / NUTRIÇÃO</span>
              <h1>Dietas</h1>
              <p>
                Cadastre, pesquise e organize os planos alimentares da
                plataforma.
              </p>
            </div>
          </div>

          <section className="iron-metrics">
            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">Total de dietas</span>
                <span className="iron-metric-icon purple">♡</span>
              </div>
              <strong className="iron-metric-number">{dietas.length}</strong>
              <span className="iron-metric-caption">
                Planos cadastrados
              </span>
              <div className="iron-metric-line purple-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">Hipertrofia</span>
                <span className="iron-metric-icon green">↗</span>
              </div>
              <strong className="iron-metric-number">
                {totalHipertrofia}
              </strong>
              <span className="iron-metric-caption">
                Planos para ganho de massa
              </span>
              <div className="iron-metric-line green-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">Definição</span>
                <span className="iron-metric-icon red">↘</span>
              </div>
              <strong className="iron-metric-number">
                {totalDefinicao}
              </strong>
              <span className="iron-metric-caption">
                Planos para redução de gordura
              </span>
              <div className="iron-metric-line red-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">Performance</span>
                <span className="iron-metric-icon purple">⚡</span>
              </div>
              <strong className="iron-metric-number">
                {totalPerformance}
              </strong>
              <span className="iron-metric-caption">
                Planos focados em desempenho
              </span>
              <div className="iron-metric-line purple-line" />
            </article>
          </section>

          <section className="dietas-admin-grid">
            <article className="dieta-form-card">
              <div className="dieta-section-heading">
                <span>NOVO PLANO</span>
                <h2>Cadastrar dieta</h2>
                <p>Preencha os dados do plano alimentar.</p>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="dieta-form-field">
                  <label htmlFor="nome-dieta">Nome da dieta</label>
                  <input
                    id="nome-dieta"
                    type="text"
                    placeholder="Ex.: Hipertrofia avançada"
                    value={nome}
                    onChange={(event) => setNome(event.target.value)}
                    required
                  />
                </div>

                <div className="dieta-form-field">
                  <label htmlFor="objetivo-dieta">Objetivo</label>
                  <select
                    id="objetivo-dieta"
                    value={objetivo}
                    onChange={(event) => setObjetivo(event.target.value)}
                  >
                    {objetivos.map((item) => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="dieta-form-row">
                  <div className="dieta-form-field">
                    <label htmlFor="nivel-dieta">Nível</label>
                    <select
                      id="nivel-dieta"
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

                  <div className="dieta-form-field">
                    <label htmlFor="calorias-dieta">Calorias</label>
                    <input
                      id="calorias-dieta"
                      type="number"
                      min="1"
                      step="1"
                      placeholder="2800"
                      value={calorias}
                      onChange={(event) => setCalorias(event.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="dieta-form-field">
                  <label htmlFor="refeicoes-dieta">
                    Número de refeições
                  </label>
                  <select
                    id="refeicoes-dieta"
                    value={refeicoes}
                    onChange={(event) => setRefeicoes(event.target.value)}
                  >
                    {[3, 4, 5, 6, 7].map((quantidade) => (
                      <option key={quantidade} value={quantidade}>
                        {quantidade} refeições
                      </option>
                    ))}
                  </select>
                </div>

                <div className="dieta-form-field">
                  <label htmlFor="descricao-dieta">Descrição</label>
                  <textarea
                    id="descricao-dieta"
                    rows={4}
                    placeholder="Descreva brevemente o objetivo da dieta."
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                  />
                </div>

                <button type="submit" className="dieta-submit-button">
                  + Adicionar dieta
                </button>
              </form>
            </article>

            <section className="dieta-list-section">
              <div className="dieta-list-header">
                <div className="dieta-section-heading">
                  <span>BIBLIOTECA</span>
                  <h2>Dietas cadastradas</h2>
                </div>

                <span className="dieta-count">
                  {dietasFiltradas.length} resultado(s)
                </span>
              </div>

              <div className="dieta-filters">
                <input
                  type="search"
                  placeholder="Buscar dieta..."
                  aria-label="Buscar dieta"
                  value={busca}
                  onChange={(event) => setBusca(event.target.value)}
                />

                <select
                  aria-label="Filtrar por objetivo"
                  value={objetivoFiltro}
                  onChange={(event) => setObjetivoFiltro(event.target.value)}
                >
                  <option value="Todos">Todos os objetivos</option>
                  {objetivos.map((item) => (
                    <option key={item} value={item}>
                      {item}
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

              <div className="dieta-list">
                {dietasFiltradas.length === 0 ? (
                  <div className="dietas-empty">
                    <strong>Nenhuma dieta encontrada.</strong>
                    <span>Tente alterar a busca ou os filtros.</span>
                  </div>
                ) : (
                  dietasFiltradas.map((dieta) => (
                    <article className="dieta-admin-card" key={dieta.id}>
                      <div className="dieta-icon">D</div>

                      <div className="dieta-info">
                        <div className="dieta-title-row">
                          <h3>{dieta.nome}</h3>
                          <span className="dieta-level">{dieta.nivel}</span>
                        </div>

                        <div className="dieta-meta">
                          <span>{dieta.objetivo}</span>
                          <span>•</span>
                          <span>{dieta.calorias} kcal</span>
                          <span>•</span>
                          <span>{dieta.refeicoes} refeições</span>
                        </div>

                        <p>{dieta.descricao}</p>
                      </div>

                      <button
                        type="button"
                        className="dieta-delete-button"
                        onClick={() => removerDieta(dieta.id)}
                        aria-label={`Excluir ${dieta.nome}`}
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

export default DietasAdmin;