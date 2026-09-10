import { Link } from "react-router-dom";

import "./DashboardAluno.css";

function DashboardAluno() {
  return (
    <main className="aluno-dashboard">

      {/* SIDEBAR */}

      <aside className="aluno-sidebar">

        <div className="aluno-logo">
          IRON<span>FIT</span>
        </div>

        <nav className="aluno-menu">

          <Link
            to="/aluno"
            className="active"
          >
            <span>âŒ‚</span>
            InÃ­cio
          </Link>

          <Link to="/aluno/treinos">
            <span>âš¡</span>
            Meus treinos
          </Link>

          <Link to="/aluno/videos">
            <span>â–¶</span>
            VÃ­deos
          </Link>

          <Link to="/aluno/dieta">
            <span>â—ˆ</span>
            Dieta
          </Link>

          <Link to="/aluno/progresso">
            <span>â†—</span>
            Progresso
          </Link>

          <Link to="/aluno/perfil">
            <span>â—</span>
            Meu perfil
          </Link>

        </nav>

        <Link
          to="/"
          className="aluno-logout"
        >
          â† Sair
        </Link>

      </aside>


      {/* CONTEÃšDO */}

      <section className="aluno-content">

        {/* HEADER */}

        <header className="aluno-header">

          <div>
            <span className="aluno-header-label">
              ÃREA DO ALUNO
            </span>

            <h1>
              OlÃ¡, <strong>Victor.</strong>
            </h1>

            <p>
              Pronto para mais um treino?
            </p>
          </div>

          <div className="aluno-profile">

            <div className="aluno-avatar">
              V
            </div>

            <div>
              <strong>
                Victor
              </strong>

              <span>
                Aluno
              </span>
            </div>

          </div>

        </header>


        {/* STATUS */}

        <section className="aluno-status-grid">

          <article className="status-card">

            <span className="status-icon">
              âš¡
            </span>

            <div>
              <span>
                TREINO ATUAL
              </span>

              <strong>
                Hipertrofia
              </strong>
            </div>

          </article>


          <article className="status-card">

            <span className="status-icon">
              âœ“
            </span>

            <div>
              <span>
                TREINOS ESTA SEMANA
              </span>

              <strong>
                04 / 05
              </strong>
            </div>

          </article>


          <article className="status-card">

            <span className="status-icon">
              â†—
            </span>

            <div>
              <span>
                PROGRESSO
              </span>

              <strong>
                +12%
              </strong>
            </div>

          </article>

        </section>


        {/* TREINO */}

        <section className="aluno-section">

          <div className="aluno-section-header">

            <div>

              <span>
                SEU TREINO
              </span>

              <h2>
                Treino de hoje
              </h2>

            </div>

            <Link to="/aluno/treinos">
              Ver treino completo â†’
            </Link>

          </div>


          <div className="treino-card">

            <div className="treino-number">
              01
            </div>

            <div className="treino-info">

              <span>
                TREINO A
              </span>

              <h3>
                Peito + TrÃ­ceps
              </h3>

              <p>
                06 exercÃ­cios â€¢ Aproximadamente
                60 minutos
              </p>

            </div>

            <Link
              to="/aluno/treinos"
              className="treino-button"
            >
              ComeÃ§ar treino
            </Link>

          </div>

        </section>


        {/* ATALHOS */}

        <section className="aluno-section">

          <div className="aluno-section-header">

            <div>

              <span>
                ACESSO RÃPIDO
              </span>

              <h2>
                Explore sua Ã¡rea
              </h2>

            </div>

          </div>


          <div className="aluno-shortcuts">

            <Link
              to="/aluno/videos"
              className="shortcut-card"
            >

              <span>
                â–¶
              </span>

              <div>
                <strong>
                  VÃ­deos
                </strong>

                <small>
                  Aprenda novos exercÃ­cios
                </small>
              </div>

            </Link>


            <Link
              to="/aluno/dieta"
              className="shortcut-card"
            >

              <span>
                â—ˆ
              </span>

              <div>
                <strong>
                  Minha dieta
                </strong>

                <small>
                  Consulte sua alimentaÃ§Ã£o
                </small>
              </div>

            </Link>


            <Link
              to="/aluno/progresso"
              className="shortcut-card"
            >

              <span>
                â†—
              </span>

              <div>
                <strong>
                  Meu progresso
                </strong>

                <small>
                  Acompanhe sua evoluÃ§Ã£o
                </small>
              </div>

            </Link>

          </div>

        </section>

      </section>

    </main>
  );
}

export default DashboardAluno;