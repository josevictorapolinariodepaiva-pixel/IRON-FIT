import Navbar from "../../components/Navbar";

function Progresso() {
  return (
    <>
      <Navbar tipo="aluno" />

      <main>

        <h1>Meu Progresso</h1>

        <p>
          Acompanhe sua evolução.
        </p>

        <div className="card-grid">

          <article className="card">
            <h2>Peso</h2>
            <strong>78 kg</strong>
            <p>Peso atual</p>
          </article>

          <article className="card">
            <h2>Treinos</h2>
            <strong>24</strong>
            <p>Treinos realizados</p>
          </article>

          <article className="card">
            <h2>Evolução</h2>
            <strong>+12%</strong>
            <p>Progresso estimado</p>
          </article>

        </div>

      </main>
    </>
  );
}

export default Progresso;
