import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";

function DashboardAdmin() {
  return (
    <>
      <Navbar tipo="admin" />

      <main>

        <h1>Dashboard Administrativo</h1>

        <p>
          Gerencie o sistema da academia.
        </p>

        <div className="admin-grid">

          <div className="admin-stat">
            <p>Alunos</p>
            <strong>0</strong>
          </div>

          <div className="admin-stat">
            <p>Vídeos</p>
            <strong>0</strong>
          </div>

          <div className="admin-stat">
            <p>Treinos</p>
            <strong>0</strong>
          </div>

          <div className="admin-stat">
            <p>Exercícios</p>
            <strong>0</strong>
          </div>

          <div className="admin-stat">
            <p>Dietas</p>
            <strong>0</strong>
          </div>

        </div>

        <div className="card-grid">

          <article className="card">
            <h2>?? Alunos</h2>
            <p>Gerencie os alunos cadastrados.</p>
            <Link className="card-link" to="/admin/alunos">
              Gerenciar
            </Link>
          </article>

          <article className="card">
            <h2>?? Vídeos</h2>
            <p>Cadastre videoaulas para os alunos.</p>
            <Link className="card-link" to="/admin/videos">
              Gerenciar
            </Link>
          </article>

          <article className="card">
            <h2>??? Treinos</h2>
            <p>Gerencie os treinos.</p>
            <Link className="card-link" to="/admin/treinos">
              Gerenciar
            </Link>
          </article>

          <article className="card">
            <h2>?? Exercícios</h2>
            <p>Gerencie os exercícios.</p>
            <Link className="card-link" to="/admin/exercicios">
              Gerenciar
            </Link>
          </article>

          <article className="card">
            <h2>?? Dietas</h2>
            <p>Gerencie as dietas.</p>
            <Link className="card-link" to="/admin/dietas">
              Gerenciar
            </Link>
          </article>

        </div>

      </main>
    </>
  );
}

export default DashboardAdmin;
