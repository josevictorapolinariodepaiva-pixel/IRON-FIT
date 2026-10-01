import { Link } from "react-router-dom";
import "./Treino.css";

function Treino() {
  return (
    <main className="treino-page">
      <header className="treino-page-header">
        <div>
          <span>MEUS TREINOS</span>
          <h1>Seu <strong>treino.</strong></h1>
          <p>Acompanhe sua rotina e execute cada exercÃ­cio com foco.</p>
        </div>

        <Link to="/aluno" className="treino-back">
          â† Voltar
        </Link>
      </header>

      <section className="treino-highlight">
        <div className="treino-highlight-number">A</div>

        <div className="treino-highlight-info">
          <span>TREINO ATUAL</span>
          <h2>Peito + TrÃ­ceps</h2>
          <p>06 exercÃ­cios â€¢ Aproximadamente 60 minutos</p>
        </div>

        <div className="treino-highlight-status">
          <span>STATUS</span>
          <strong>DisponÃ­vel</strong>
        </div>
      </section>

      <section className="exercicios-section">
        <div className="exercicios-header">
          <div>
            <span>ROTINA</span>
            <h2>ExercÃ­cios de hoje</h2>
          </div>

          <span className="exercicios-count">06 exercÃ­cios</span>
        </div>

        <div className="exercicios-list">
          <article className="exercicio-card">
            <div className="exercicio-number">01</div>
            <div className="exercicio-info">
              <span>PEITO</span>
              <h3>Supino reto</h3>
              <p>4 sÃ©ries â€¢ 10 repetiÃ§Ãµes</p>
            </div>
            <button type="button">Iniciar</button>
          </article>

          <article className="exercicio-card">
            <div className="exercicio-number">02</div>
            <div className="exercicio-info">
              <span>PEITO</span>
              <h3>Supino inclinado</h3>
              <p>4 sÃ©ries â€¢ 10 repetiÃ§Ãµes</p>
            </div>
            <button type="button">Iniciar</button>
          </article>

          <article className="exercicio-card">
            <div className="exercicio-number">03</div>
            <div className="exercicio-info">
              <span>PEITO</span>
              <h3>Crucifixo</h3>
              <p>3 sÃ©ries â€¢ 12 repetiÃ§Ãµes</p>
            </div>
            <button type="button">Iniciar</button>
          </article>

          <article className="exercicio-card">
            <div className="exercicio-number">04</div>
            <div className="exercicio-info">
              <span>TRÃCEPS</span>
              <h3>TrÃ­ceps pulley</h3>
              <p>4 sÃ©ries â€¢ 12 repetiÃ§Ãµes</p>
            </div>
            <button type="button">Iniciar</button>
          </article>

          <article className="exercicio-card">
            <div className="exercicio-number">05</div>
            <div className="exercicio-info">
              <span>TRÃCEPS</span>
              <h3>TrÃ­ceps francÃªs</h3>
              <p>3 sÃ©ries â€¢ 10 repetiÃ§Ãµes</p>
            </div>
            <button type="button">Iniciar</button>
          </article>

          <article className="exercicio-card">
            <div className="exercicio-number">06</div>
            <div className="exercicio-info">
              <span>TRÃCEPS</span>
              <h3>TrÃ­ceps testa</h3>
              <p>3 sÃ©ries â€¢ 12 repetiÃ§Ãµes</p>
            </div>
            <button type="button">Iniciar</button>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Treino;