import Navbar from "../../components/Navbar";

function DietasAdmin() {
  return (
    <>
      <Navbar tipo="admin" />

      <main>

        <h1>Dietas</h1>

        <p>
          Gerencie as dietas dos alunos.
        </p>

        <div className="card-grid">

          <article className="card">
            <h2>Hipertrofia</h2>
            <p>Plano alimentar para ganho de massa.</p>
          </article>

          <article className="card">
            <h2>Emagrecimento</h2>
            <p>Plano alimentar para redução de gordura.</p>
          </article>

          <article className="card">
            <h2>Manutenção</h2>
            <p>Plano alimentar para manutenção.</p>
          </article>

        </div>

      </main>
    </>
  );
}

export default DietasAdmin;
