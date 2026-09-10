import { Link } from "react-router-dom";
import "./Videos.css";

function Videos() {
  return (
    <main className="videos-page">
      <header className="videos-header">
        <div>
          <span>VÃDEOS</span>
          <h1>Aprenda. <strong>Evolua.</strong></h1>
          <p>
            ConteÃºdos para melhorar sua tÃ©cnica e potencializar seus treinos.
          </p>
        </div>

        <Link to="/aluno" className="videos-back">
          â† Voltar
        </Link>
      </header>

      <section className="videos-featured">
        <div className="video-featured-content">
          <span>DESTAQUE DA SEMANA</span>
          <h2>Como executar os exercÃ­cios corretamente</h2>
          <p>
            Aprenda os principais cuidados para executar seus exercÃ­cios
            com seguranÃ§a e eficiÃªncia.
          </p>

          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noreferrer"
            className="video-button"
          >
            â–¶ Assistir vÃ­deo
          </a>
        </div>

        <div className="video-featured-play">
          â–¶
        </div>
      </section>

      <section className="videos-section">
        <div className="videos-section-header">
          <div>
            <span>BIBLIOTECA</span>
            <h2>ConteÃºdos para vocÃª</h2>
          </div>
        </div>

        <div className="videos-grid">
          <article className="video-card">
            <div className="video-thumbnail">
              <span>â–¶</span>
            </div>

            <div className="video-card-content">
              <span>PEITO</span>
              <h3>Supino reto: execuÃ§Ã£o correta</h3>
              <p>Aprenda a tÃ©cnica correta do exercÃ­cio.</p>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                Assistir â†’
              </a>
            </div>
          </article>

          <article className="video-card">
            <div className="video-thumbnail">
              <span>â–¶</span>
            </div>

            <div className="video-card-content">
              <span>TRÃCEPS</span>
              <h3>TrÃ­ceps pulley</h3>
              <p>Veja como executar o movimento corretamente.</p>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                Assistir â†’
              </a>
            </div>
          </article>

          <article className="video-card">
            <div className="video-thumbnail">
              <span>â–¶</span>
            </div>

            <div className="video-card-content">
              <span>COSTAS</span>
              <h3>Puxada frontal</h3>
              <p>Aprenda os principais pontos da execuÃ§Ã£o.</p>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                Assistir â†’
              </a>
            </div>
          </article>

          <article className="video-card">
            <div className="video-thumbnail">
              <span>â–¶</span>
            </div>

            <div className="video-card-content">
              <span>PERNAS</span>
              <h3>Agachamento livre</h3>
              <p>Cuidados importantes durante o exercÃ­cio.</p>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
              >
                Assistir â†’
              </a>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Videos;