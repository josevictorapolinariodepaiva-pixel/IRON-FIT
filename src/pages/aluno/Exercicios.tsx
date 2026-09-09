import Navbar from "../../components/Navbar";

function Exercicios() {
  return (
    <>
      <Navbar tipo="aluno" />

      <main>
        <h1>Exercícios</h1>
        <p>Biblioteca de exercícios da academia.</p>

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

          <article className="card">
            <h2>Puxada Frontal</h2>
            <p>Costas</p>
          </article>

        </div>
      </main>
    </>
  );
}

export default Exercicios;
