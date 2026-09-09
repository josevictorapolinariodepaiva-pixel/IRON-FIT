import { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { useAuth } from "../../context/AuthContext";
import type { TipoUsuario } from "../../types/Auth";

function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const [tipo, setTipo] =
    useState<TipoUsuario>("aluno");

  const handleSubmit = (
    event: FormEvent<HTMLFormElement>
  ) => {

    event.preventDefault();

    login(email, senha, tipo);

    navigate(
      tipo === "admin"
        ? "/admin"
        : "/aluno"
    );
  };

  return (
    <main>

      <div className="form-container">

        <div className="login-header">

          <div className="login-icon">
            ???
          </div>

          <h1>Bem-vindo</h1>

          <p>
            Entre na sua conta da academia.
          </p>

        </div>

        <form onSubmit={handleSubmit}>

          <div className="form-group">

            <label>
              Tipo de acesso
            </label>

            <div className="role-selector">

              <button
                type="button"
                className={
                  tipo === "aluno"
                    ? "role-button active"
                    : "role-button"
                }
                onClick={() => setTipo("aluno")}
              >
                ?? Aluno
              </button>

              <button
                type="button"
                className={
                  tipo === "admin"
                    ? "role-button active"
                    : "role-button"
                }
                onClick={() => setTipo("admin")}
              >
                ??? Administrador
              </button>

            </div>

          </div>

          <div className="form-group">

            <label htmlFor="email">
              E-mail
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) =>
                setEmail(event.target.value)
              }
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
              onChange={(event) =>
                setSenha(event.target.value)
              }
              placeholder="Digite sua senha"
              required
            />

          </div>

          <button
            className="form-submit"
            type="submit"
          >
            Entrar
          </button>

        </form>

        <p className="form-footer">
          Ainda não possui uma conta?{" "}
          <Link to="/cadastro">
            Criar conta
          </Link>
        </p>

      </div>

    </main>
  );
}

export default Login;
