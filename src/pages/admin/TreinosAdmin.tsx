import Navbar from "../../components/Navbar";

function TreinosAdmin() {
  return (
    <>
      <Navbar tipo="admin" />

      <main>

        <h1>Treinos</h1>

        <p>
          Gerencie os treinos da academia.
        </p>

        <div className="card-grid">

          <article className="card">
            <h2>Treino A</h2>
            <p>Peito e Tríceps</p>
          </article>

          <article className="card">
            <h2>Treino B</h2>
            <p>Costas e Bíceps</p>
          </article>

          <article className="card">
            <h2>Treino C</h2>
            <p>Pernas</p>
          </article>

        </div>

      </main>
    </>
  );
}

export default TreinosAdmin;
