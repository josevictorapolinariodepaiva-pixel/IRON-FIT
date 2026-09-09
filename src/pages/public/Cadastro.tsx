import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      nome,
      email,
      senha
    });

    alert("Conta criada com sucesso!");

    navigate("/login");
  };

  return (
    <main>

      <div className="form-container">

        <h1>Criar conta</h1>

        <p>
          Cadastre-se para começar seus treinos.
        </p>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label htmlFor="nome">
              Nome completo
            </label>

            <input
              id="nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder="Seu nome"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="seu@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">
              Senha
            </label>

            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              placeholder="Crie uma senha"
              required
            />
          </div>

          <button className="form-submit" type="submit">
            Criar conta
          </button>

        </form>

        <p style={{ marginTop: "20px" }}>
          Já possui uma conta?{" "}
          <Link to="/login">
            Entrar
          </Link>
        </p>

      </div>

    </main>
  );
}

export default Cadastro;
