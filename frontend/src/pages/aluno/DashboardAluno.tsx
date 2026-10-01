import { Link } from "react-router-dom";
import "./DashboardAluno.css";

function DashboardAluno() {
  const nome = "Victor";

  return (
    <main className="aluno-dashboard">
      {/* MENU LATERAL */}
      <aside className="aluno-sidebar">
        <Link to="/aluno" className="aluno-logo">
          IRON<span>FIT</span>
        </Link>

        <div className="sidebar-label">MENU PRINCIPAL</div>

        <nav className="aluno-menu">
          <Link to="/aluno" className="active">
            <span className="menu-icon">⌂</span>
            <span>Início</span>
          </Link>

          <Link to="/aluno/treinos">
            <span className="menu-icon">⚡</span>
            <span>Meus treinos</span>
          </Link>

          <Link to="/aluno/videos">
            <span className="menu-icon">▶</span>
            <span>Vídeos</span>
          </Link>

          <Link to="/aluno/dieta">
            <span className="menu-icon">◈</span>
            <span>Dieta</span>
          </Link>

          <Link to="/aluno/progresso">
            <span className="menu-icon">↗</span>
            <span>Progresso</span>
          </Link>

          <Link to="/aluno/perfil">
            <span className="menu-icon">●</span>
            <span>Meu perfil</span>
          </Link>
        </nav>

        <div className="sidebar-bottom">
          <div className="sidebar-help">
            <div className="help-icon">?</div>
            <div>
              <strong>Precisa de ajuda?</strong>
              <span>Estamos aqui para você.</span>
            </div>
          </div>

          <Link to="/" className="aluno-logout">
            <span className="menu-icon">↪</span>
            Sair
          </Link>
        </div>
      </aside>

      {/* CONTEÚDO PRINCIPAL */}
      <section className="aluno-content">
        {/* CABEÇALHO */}
        <header className="aluno-header">
          <div className="header-title">
            <span className="aluno-header-label">ÁREA DO ALUNO</span>
            <h1>
              Olá, <strong>{nome}!</strong>
            </h1>
            <p>Seu próximo objetivo começa com o treino de hoje.</p>
          </div>

          <div className="aluno-profile">
            <div className="profile-avatar">
              {nome.charAt(0).toUpperCase()}
            </div>

            <div className="profile-info">
              <strong>{nome}</strong>
              <span>Aluno</span>
            </div>

            <span className="profile-arrow">⌄</span>
          </div>
        </header>

        {/* DESTAQUE */}
        <section className="welcome-banner">
          <div className="welcome-content">
            <span className="welcome-tag">SEU FOCO, SUA EVOLUÇÃO</span>

            <h2>
              Cada treino é
              <br />
              um passo à frente.
            </h2>

            <p>
              Mantenha a consistência e acompanhe sua evolução.
              Seu esforço de hoje constrói seus resultados de amanhã.
            </p>

            <Link to="/aluno/treinos" className="welcome-button">
              Ver meus treinos <span>→</span>
            </Link>
          </div>

          <div className="welcome-decoration" aria-hidden="true">
            <div className="decoration-circle">
              <span>IRON</span>
              <strong>FIT</strong>
            </div>
          </div>
        </section>

        {/* ESTATÍSTICAS */}
        <section className="aluno-stats">
          <article className="stat-card">
            <div className="stat-top">
              <span className="stat-icon purple">⚡</span>
              <span className="stat-period">Esta semana</span>
            </div>

            <span className="stat-label">Treinos concluídos</span>

            <div className="stat-value">
              <strong>04</strong>
              <span>/ 05</span>
            </div>

            <div className="stat-progress">
              <div className="stat-progress-fill" style={{ width: "80%" }} />
            </div>

            <span className="stat-footnote">80% da meta semanal</span>
          </article>

          <article className="stat-card">
            <div className="stat-top">
              <span className="stat-icon orange">◷</span>
              <span className="stat-period">Total acumulado</span>
            </div>

            <span className="stat-label">Horas de treino</span>

            <div className="stat-value">
              <strong>24</strong>
              <span> horas</span>
            </div>

            <div className="stat-description">
              Continue mantendo sua rotina.
            </div>
          </article>

          <article className="stat-card">
            <div className="stat-top">
              <span className="stat-icon green">↗</span>
              <span className="stat-period">Seu desempenho</span>
            </div>

            <span className="stat-label">Evolução</span>

            <div className="stat-value">
              <strong>+12%</strong>
            </div>

            <div className="stat-description">
              Indicador ilustrativo de progresso.
            </div>
          </article>
        </section>

        {/* TREINO DE HOJE */}
        <section className="aluno-section">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">SUA ROTINA</span>
              <h2>Treino de hoje</h2>
              <p>Prepare-se para mais uma sessão.</p>
            </div>

            <Link to="/aluno/treinos" className="section-link">
              Ver todos os treinos <span>→</span>
            </Link>
          </div>

          <article className="today-workout">
            <div className="workout-number">A</div>

            <div className="workout-details">
              <div className="workout-tags">
                <span className="workout-tag">TREINO A</span>
                <span className="workout-status">
                  <span className="status-dot" />
                  Disponível
                </span>
              </div>

              <h3>Peito + Tríceps</h3>

              <p>
                Trabalhe força e resistência com seu treino de hoje.
              </p>

              <div className="workout-meta">
                <span>▤ 06 exercícios</span>
                <span>◷ 60 minutos</span>
                <span>⌁ Intermediário</span>
              </div>
            </div>

            <Link to="/aluno/treinos" className="workout-button">
              Começar treino <span>→</span>
            </Link>
          </article>
        </section>

        {/* ACESSO RÁPIDO */}
        <section className="aluno-section shortcuts-section">
          <div className="section-heading">
            <div>
              <span className="section-eyebrow">EXPLORE</span>
              <h2>Sua área de treino</h2>
              <p>Encontre tudo o que precisa para sua rotina.</p>
            </div>
          </div>

          <div className="aluno-shortcuts">
            <Link to="/aluno/videos" className="shortcut-card">
              <div className="shortcut-icon purple">▶</div>
              <div className="shortcut-info">
                <strong>Vídeos</strong>
                <span>Aprenda a executar exercícios.</span>
              </div>
              <span className="shortcut-arrow">→</span>
            </Link>

            <Link to="/aluno/dieta" className="shortcut-card">
              <div className="shortcut-icon orange">◈</div>
              <div className="shortcut-info">
                <strong>Minha dieta</strong>
                <span>Consulte seu planejamento alimentar.</span>
              </div>
              <span className="shortcut-arrow">→</span>
            </Link>

            <Link to="/aluno/progresso" className="shortcut-card">
              <div className="shortcut-icon green">↗</div>
              <div className="shortcut-info">
                <strong>Meu progresso</strong>
                <span>Acompanhe sua evolução.</span>
              </div>
              <span className="shortcut-arrow">→</span>
            </Link>
          </div>
        </section>

        <footer className="aluno-footer">
          <span>IRONFIT</span>
          <span>Treine com propósito. Evolua todos os dias.</span>
        </footer>
      </section>
    </main>
  );
}

export default DashboardAluno;