import Navbar from "../../components/Navbar";

function ExerciciosAdmin() {
  return (
    <>
      <Navbar tipo="admin" />

      <main>

        <h1>Exercícios</h1>

        <p>
          Gerencie a biblioteca de exercícios.
        </p>

        <div className="card-grid">

          <article className="card">
            <h2>Supino Reto</h2>
            <p>Peito</p>
          </article>

          <article className="card">
            <h2>Agachamento</h2>
            <p>Pernas</p>
          </article>

          <article className="card">
            <h2>Rosca Direta</h2>
            <p>Bíceps</p>
          </article>

        </div>

      </main>
    </>
  );
}

export default ExerciciosAdmin;
