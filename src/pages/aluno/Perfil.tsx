import Navbar from "../../components/Navbar";

function Perfil() {
  return (
    <>
      <Navbar tipo="aluno" />

      <main>

        <h1>Meu Perfil</h1>

        <p>
          Informações da sua conta.
        </p>

        <div className="card">

          <h2>Informações pessoais</h2>

          <p>
            <strong>Nome:</strong> Aluno
          </p>

          <p>
            <strong>E-mail:</strong> aluno@email.com
          </p>

          <p>
            <strong>Objetivo:</strong> Hipertrofia
          </p>

        </div>

      </main>
    </>
  );
}

export default Perfil;
