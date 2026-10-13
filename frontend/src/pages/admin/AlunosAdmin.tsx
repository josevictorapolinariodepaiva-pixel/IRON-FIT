
import { useMemo, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./AlunosAdmin.css";

type Aluno = {
  id: number;
  nome: string;
  email: string;
  plano: string;
  objetivo: string;
  status: "Ativo" | "Inativo";
};

const alunos: Aluno[] = [
  { id: 1, nome: "Victor", email: "victor@email.com", plano: "Mensal", objetivo: "Hipertrofia", status: "Ativo" },
  { id: 2, nome: "João Silva", email: "joao@email.com", plano: "Mensal", objetivo: "Emagrecimento", status: "Ativo" },
  { id: 3, nome: "Mariana Costa", email: "mariana@email.com", plano: "Trimestral", objetivo: "Hipertrofia", status: "Ativo" },
  { id: 4, nome: "Lucas Oliveira", email: "lucas@email.com", plano: "Mensal", objetivo: "Condicionamento", status: "Inativo" },
  { id: 5, nome: "Ana Paula", email: "ana@email.com", plano: "Anual", objetivo: "Hipertrofia", status: "Ativo" },
  { id: 6, nome: "Pedro Henrique", email: "pedro@email.com", plano: "Trimestral", objetivo: "Emagrecimento", status: "Ativo" },
];

const normalizar = (valor: string) =>
  valor
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();

function AlunosAdmin() {
  const [busca, setBusca] = useState("");
  const [selecionado, setSelecionado] = useState<Aluno | null>(null);

  const filtrados = useMemo(() => {
    const termo = normalizar(busca);

    return alunos.filter((aluno) =>
      [
        aluno.nome,
        aluno.email,
        aluno.plano,
        aluno.objetivo,
        aluno.status,
      ].some((valor) => normalizar(valor).includes(termo))
    );
  }, [busca]);

  const ativos = alunos.filter((aluno) => aluno.status === "Ativo").length;
  const inativos = alunos.length - ativos;
  const anuais = alunos.filter((aluno) => aluno.plano === "Anual").length;
  const percentual = alunos.length
    ? ((ativos / alunos.length) * 100).toLocaleString("pt-BR", {
        maximumFractionDigits: 1,
      })
    : "0";

  return (
    <main className="iron-admin">
      <aside className="iron-sidebar">
        <Link to="/admin" className="iron-logo">
          <span className="iron-logo-mark">I</span>
          <span>IRON<b>FIT</b></span>
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
            <span className="iron-nav-current">●</span>
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
            <strong>Alunos</strong>
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
                <span /> GESTÃO DE MEMBROS
              </div>
              <h1>Alunos<span>.</span></h1>
              <p>
                Acompanhe sua comunidade, monitore os planos e gerencie
                os membros da IRONFIT.
              </p>
            </div>

            <Link to="/admin" className="iron-secondary-button">
              <span>←</span> Voltar ao painel
            </Link>
          </section>

          <section className="iron-metrics">
            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">TOTAL DE ALUNOS</span>
                <span className="iron-metric-icon purple">♟</span>
              </div>
              <strong className="iron-metric-number">{alunos.length}</strong>
              <span className="iron-metric-caption">Membros cadastrados</span>
              <div className="iron-metric-line purple-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">MEMBROS ATIVOS</span>
                <span className="iron-metric-icon green">✓</span>
              </div>
              <strong className="iron-metric-number">{ativos}</strong>
              <span className="iron-metric-caption">
                <b className="iron-green-text">{percentual}%</b> da base atual
              </span>
              <div className="iron-metric-line green-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">MEMBROS INATIVOS</span>
                <span className="iron-metric-icon red">!</span>
              </div>
              <strong className="iron-metric-number">{inativos}</strong>
              <span className="iron-metric-caption">Precisam de atenção</span>
              <div className="iron-metric-line red-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">PLANOS ANUAIS</span>
                <span className="iron-metric-icon purple">↗</span>
              </div>
              <strong className="iron-metric-number">{anuais}</strong>
              <span className="iron-metric-caption">Assinaturas anuais</span>
              <div className="iron-metric-line purple-line" />
            </article>
          </section>

          <section className="iron-members-panel">
            <div className="iron-members-heading">
              <div>
                <div className="iron-overline">BASE DE MEMBROS</div>
                <h2>Todos os alunos</h2>
                <p>Consulte os perfis e acompanhe a situação de cada membro.</p>
              </div>

              <label className="iron-search">
                <span className="iron-search-icon">⌕</span>
                <input
                  type="search"
                  placeholder="Buscar aluno..."
                  value={busca}
                  onChange={(event) => setBusca(event.target.value)}
                  aria-label="Buscar alunos por nome, e-mail, plano, objetivo ou status"
                />
                {busca && (
                  <button
                    type="button"
                    onClick={() => setBusca("")}
                    aria-label="Limpar pesquisa"
                  >
                    ×
                  </button>
                )}
              </label>
            </div>

            <div className="iron-table-wrap">
              <table className="iron-table">
                <thead>
                  <tr>
                    <th>MEMBRO</th>
                    <th>PLANO</th>
                    <th>OBJETIVO</th>
                    <th>SITUAÇÃO</th>
                    <th className="iron-action-column">DETALHES</th>
                  </tr>
                </thead>

                <tbody>
                  {filtrados.map((aluno, index) => (
                    <tr key={aluno.id}>
                      <td>
                        <div className="iron-member">
                          <div className={`iron-member-avatar avatar-${index % 4}`}>
                            {aluno.nome
                              .split(" ")
                              .map((parte) => parte[0])
                              .slice(0, 2)
                              .join("")
                              .toUpperCase()}
                          </div>
                          <div className="iron-member-text">
                            <strong>{aluno.nome}</strong>
                            <span>{aluno.email}</span>
                          </div>
                        </div>
                      </td>

                      <td>
                        <span className={`iron-plan iron-plan-${normalizar(aluno.plano)}`}>
                          {aluno.plano}
                        </span>
                      </td>

                      <td>{aluno.objetivo}</td>

                      <td>
                        <span
                          className={`iron-status ${
                            aluno.status === "Ativo" ? "status-active" : "status-inactive"
                          }`}
                        >
                          <i />
                          {aluno.status}
                        </span>
                      </td>

                      <td className="iron-action-column">
                        <button
                          type="button"
                          className="iron-view-button"
                          onClick={() => setSelecionado(aluno)}
                        >
                          <span>◎</span> Ver perfil
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {filtrados.length === 0 && (
                <div className="iron-empty-state">
                  <div className="iron-empty-icon">⌕</div>
                  <strong>Nenhum membro encontrado</strong>
                  <p>Experimente outro nome, e-mail ou termo de pesquisa.</p>
                  <button type="button" onClick={() => setBusca("")}>
                    Limpar pesquisa
                  </button>
                </div>
              )}
            </div>

            <footer className="iron-table-footer">
              <span>
                Exibindo <b>{filtrados.length}</b> de <b>{alunos.length}</b> membros
              </span>
              <span className="iron-footer-status">
                <i /> Dados demonstrativos
              </span>
            </footer>
          </section>

          <footer className="iron-page-footer">
            <span>IRONFIT <b>ADMIN</b></span>
            <span>Gestão de membros · Plataforma de fitness</span>
          </footer>
        </div>
      </section>

      {selecionado && (
        <div
          className="iron-modal-overlay"
          onClick={() => setSelecionado(null)}
        >
          <section
            className="iron-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="iron-modal-title"
            onClick={(event) => event.stopPropagation()}
          >
            <header className="iron-modal-header">
              <div>
                <div className="iron-overline">PERFIL DO MEMBRO</div>
                <h2 id="iron-modal-title">Detalhes do aluno</h2>
              </div>
              <button
                type="button"
                className="iron-modal-close"
                onClick={() => setSelecionado(null)}
                aria-label="Fechar detalhes"
              >
                ×
              </button>
            </header>

            <div className="iron-modal-member">
              <div className="iron-modal-avatar">
                {selecionado.nome
                  .split(" ")
                  .map((parte) => parte[0])
                  .slice(0, 2)
                  .join("")
                  .toUpperCase()}
              </div>
              <div>
                <h3>{selecionado.nome}</h3>
                <p>{selecionado.email}</p>
                <span
                  className={`iron-status ${
                    selecionado.status === "Ativo" ? "status-active" : "status-inactive"
                  }`}
                >
                  <i />
                  {selecionado.status}
                </span>
              </div>
            </div>

            <div className="iron-modal-details">
              <div>
                <span>IDENTIFICAÇÃO</span>
                <strong>#{selecionado.id.toString().padStart(4, "0")}</strong>
              </div>
              <div>
                <span>PLANO CONTRATADO</span>
                <strong>{selecionado.plano}</strong>
              </div>
              <div>
                <span>OBJETIVO FITNESS</span>
                <strong>{selecionado.objetivo}</strong>
              </div>
              <div>
                <span>SITUAÇÃO ATUAL</span>
                <strong>{selecionado.status}</strong>
              </div>
            </div>

            <button
              type="button"
              className="iron-modal-confirm"
              onClick={() => setSelecionado(null)}
            >
              Concluir
            </button>
          </section>
        </div>
      )}
    </main>
  );
}

export default AlunosAdmin;