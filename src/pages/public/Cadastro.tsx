import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";

import "./Cadastro.css";

function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] =
    useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (senha !== confirmarSenha) {
      alert("As senhas nÃ£o sÃ£o iguais.");
      return;
    }

    console.log("Cadastro:", {
      nome,
      email,
      senha
    });

    navigate("/login");
  };

  return (
    <main className="cadastro-page">

      <section className="cadastro-card">

        {/* LOGO */}

        <div className="cadastro-logo">
          IRON<span>FIT</span>
        </div>


        {/* CABEÃ‡ALHO */}

        <div className="cadastro-header">

          <span>
            CRIE SUA CONTA
          </span>

          <h1>
            Comece sua
            <strong> evoluÃ§Ã£o.</strong>
          </h1>

          <p>
            Crie sua conta para acessar
            a plataforma IRONFIT.
          </p>

        </div>


        {/* FORMULÃRIO */}

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label htmlFor="nome">
              Nome completo
            </label>

            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(event) =>
                setNome(event.target.value)
              }
              required
            />

          </div>


          <div className="form-group">

            <label htmlFor="cadastro-email">
              E-mail
            </label>

            <input
              id="cadastro-email"
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

            <label htmlFor="cadastro-senha">
              Senha
            </label>

            <input
              id="cadastro-senha"
              type="password"
              placeholder="Crie uma senha"
              value={senha}
              onChange={(event) =>
                setSenha(event.target.value)
              }
              required
              minLength={6}
            />

          </div>


          <div className="form-group">

            <label htmlFor="confirmar-senha">
              Confirmar senha
            </label>

            <input
              id="confirmar-senha"
              type="password"
              placeholder="Digite a senha novamente"
              value={confirmarSenha}
              onChange={(event) =>
                setConfirmarSenha(
                  event.target.value
                )
              }
              required
              minLength={6}
            />

          </div>


          <button
            type="submit"
            className="cadastro-button"
          >
            Criar minha conta
          </button>

        </form>


        {/* LOGIN */}

        <div className="cadastro-login">

          <span>
            JÃ¡ possui uma conta?
          </span>

          <Link to="/login">
            Entrar
          </Link>

        </div>


        {/* VOLTAR */}

        <Link
          to="/"
          className="cadastro-back"
        >
          â† Voltar para o inÃ­cio
        </Link>

      </section>

    </main>
  );
}

export default Cadastro;