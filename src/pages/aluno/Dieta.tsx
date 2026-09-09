import Navbar from "../../components/Navbar";

function Dieta() {
  return (
    <>
      <Navbar tipo="aluno" />

      <main>

        <h1>Minha Dieta</h1>

        <p>
          Acompanhe sua alimentação e seus objetivos.
        </p>

        <div className="card-grid">

          <article className="card">
            <h2>?? Calorias</h2>
            <strong>2.400 kcal</strong>
            <p>Meta diária</p>
          </article>

          <article className="card">
            <h2>?? Proteínas</h2>
            <strong>180g</strong>
            <p>Meta diária</p>
          </article>

          <article className="card">
            <h2>?? Carboidratos</h2>
            <strong>280g</strong>
            <p>Meta diária</p>
          </article>

        </div>

      </main>
    </>
  );
}

export default Dieta;
