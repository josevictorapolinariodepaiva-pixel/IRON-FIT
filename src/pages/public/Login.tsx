import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Login.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    console.log("Login:", {
      email,
      senha
    });

    // Temporariamente
    navigate("/aluno");
  };

  return (
    <main className="login-page">

      <section className="login-card">

        <div className="login-logo">
          IRON<span>FIT</span>
        </div>

        <div className="login-header">

          <span>
            ACESSO Ã€ PLATAFORMA
          </span>

          <h1>
            Bem-vindo
            <strong> de volta.</strong>
          </h1>

          <p>
            Entre na sua conta para acessar
            sua Ã¡rea do IRONFIT.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
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
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) =>
                setSenha(event.target.value)
              }
              required
            />

          </div>

          <div className="login-options">

            <Link to="#">
              Esqueci minha senha
            </Link>

          </div>

          <button
            type="submit"
            className="login-button"
          >
            Entrar
          </button>

        </form>

        <div className="login-register">

          <span>
            Ainda nÃ£o possui uma conta?
          </span>

          <Link to="/cadastro">
            Criar cadastro
          </Link>

        </div>

        <Link
          to="/"
          className="login-back"
        >
          â† Voltar para o inÃ­cio
        </Link>

      </section>

    </main>
  );
}

export default Login;