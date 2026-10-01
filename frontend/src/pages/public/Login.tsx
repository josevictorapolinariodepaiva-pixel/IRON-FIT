import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import "./Login.css";
import { ErroApi, entrarAluno } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [enviando, setEnviando] = useState(false);
  const mensagemSucesso = typeof location.state === "object" && location.state !== null
    && "mensagem" in location.state && typeof location.state.mensagem === "string"
    ? location.state.mensagem
    : "";

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setMensagemErro("");

    if (!email || !senha) {
      setMensagemErro("Preencha e-mail e senha para continuar.");
      return;
    }

    setEnviando(true);

    try {
      const resposta = await entrarAluno(email, senha);
      login(resposta);

      if (resposta.usuario.tipo === "administrador") {
        navigate("/admin", { replace: true });
      } else if (resposta.usuario.tipo === "aluno") {
        navigate("/aluno", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } catch (error) {
      setMensagemErro(
        error instanceof ErroApi
          ? error.message
          : "Não foi possível entrar. Tente novamente."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-logo">IRON<span>FIT</span></div>

        <div className="login-header">
          <span>ACESSO À PLATAFORMA</span>
          <h1>Bem-vindo<strong> de volta.</strong></h1>
          <p>Entre na sua conta para acessar sua área do IRONFIT.</p>
        </div>

        {mensagemSucesso && (
          <p className="form-feedback form-feedback-success" role="status">
            {mensagemSucesso}
          </p>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" placeholder="seu@email.com"
              value={email} onChange={(event) => setEmail(event.target.value)}
              autoComplete="email" required />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input id="senha" type="password" placeholder="Digite sua senha"
              value={senha} onChange={(event) => setSenha(event.target.value)}
              autoComplete="current-password" minLength={6} required />
          </div>

          {mensagemErro && (
            <p className="form-feedback form-feedback-error" role="alert">
              {mensagemErro}
            </p>
          )}

          <div className="login-options"><Link to="#">Esqueci minha senha</Link></div>

          <button type="submit" className="login-button" disabled={enviando}>
            {enviando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div className="login-register">
          <span>Ainda não possui uma conta?</span>
          <Link to="/cadastro">Criar cadastro</Link>
        </div>

        <Link to="/" className="login-back">← Voltar para o início</Link>
      </section>
    </main>
  );
}

export default Login;
