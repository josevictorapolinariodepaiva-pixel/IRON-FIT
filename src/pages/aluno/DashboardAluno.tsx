import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function DashboardAluno() {
  return (
    <>
      <Navbar tipo="aluno" />

      <main>

        <h1>Olá, aluno! ??</h1>

        <p>
          Acompanhe seus treinos e sua evolução.
        </p>

        <div className="card-grid">

          <article className="card">
            <h2>??? Treino</h2>
            <p>
              Veja suas videoaulas e treinos disponíveis.
            </p>

            <Link className="card-link" to="/aluno/treino">
              Acessar
            </Link>
          </article>

          <article className="card">
            <h2>?? Exercícios</h2>
            <p>
              Consulte a biblioteca de exercícios.
            </p>

            <Link className="card-link" to="/aluno/exercicios">
              Acessar
            </Link>
          </article>

          <article className="card">
            <h2>?? Dieta</h2>
            <p>
              Consulte sua alimentação.
            </p>

            <Link className="card-link" to="/aluno/dieta">
              Acessar
            </Link>
          </article>

          <article className="card">
            <h2>?? Progresso</h2>
            <p>
              Veja sua evolução.
            </p>

            <Link className="card-link" to="/aluno/progresso">
              Acessar
            </Link>
          </article>

          <article className="card">
            <h2>?? Perfil</h2>
            <p>
              Gerencie suas informações.
            </p>

            <Link className="card-link" to="/aluno/perfil">
              Acessar
            </Link>
          </article>

        </div>

      </main>
    </>
  );
}

export default DashboardAluno;
