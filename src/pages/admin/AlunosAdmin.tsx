import Navbar from "../../components/Navbar";

function AlunosAdmin() {
  return (
    <>
      <Navbar tipo="admin" />

      <main>
        <h1>Alunos</h1>
        <p>Gerenciamento dos alunos.</p>

        <div className="list">

          <article className="list-item">
            <h2>Exemplo de aluno</h2>
            <p>aluno@email.com</p>
            <p>Objetivo: Hipertrofia</p>
          </article>

        </div>
      </main>
    </>
  );
}

export default AlunosAdmin;
