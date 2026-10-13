
import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Turnstile } from "@marsidev/react-turnstile";

import "./Login.css";
import { ErroApi, entrarAluno } from "../../services/api";
import { useAuth } from "../../context/AuthContext";

const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const mensagemSucesso =
    typeof location.state === "object" &&
    location.state !== null &&
    "mensagem" in location.state &&
    typeof location.state.mensagem === "string"
      ? location.state.mensagem
      : "";

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setMensagemErro("");

    if (!email.trim() || !senha) {
      setMensagemErro("Preencha e-mail e senha para continuar.");
      return;
    }

    if (!turnstileToken) {
      setMensagemErro("Conclua a verificação de segurança.");
      return;
    }

    setEnviando(true);

    try {
      const resposta = await entrarAluno(
        email.trim(),
        senha,
        turnstileToken
      );

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

      setTurnstileToken("");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="login-page">
      <section className="login-card">
        <div className="login-logo">
          IRON<span>FIT</span>
        </div>

        <div className="login-header">
          <span>ACESSO À PLATAFORMA</span>
          <h1>
            Bem-vindo<strong> de volta.</strong>
          </h1>
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
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              id="senha"
              type="password"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              autoComplete="current-password"
              minLength={6}
              required
            />
          </div>

          <div className="turnstile-container">
            {turnstileSiteKey ? (
              <Turnstile
                siteKey={turnstileSiteKey}
                options={{
                  language: "pt-br",
                  theme: "dark"
                }}  
               
                onSuccess={(token) => {
                  setTurnstileToken(token);
                  setMensagemErro("");
                }}
                onExpire={() => setTurnstileToken("")}
                onError={() => {
                  setTurnstileToken("");
                  setMensagemErro(
                    "Falha na verificação de segurança. Tente novamente."
                  );
                }}
              />
            ) : (
              <p className="form-feedback form-feedback-error" role="alert">
                A chave pública do Cloudflare não está configurada.
              </p>
            )}
          </div>

          {mensagemErro && (
            <p className="form-feedback form-feedback-error" role="alert">
              {mensagemErro}
            </p>
          )}

          <div className="login-options">
            <Link to="#">Esqueci minha senha</Link>
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={enviando || !turnstileToken || !turnstileSiteKey}
          >
            {enviando ? "Entrando..." : "Entrar"}
          </button>
        </form>

        <div className="login-register">
          <span>Ainda não possui uma conta?</span>
          <Link to="/cadastro">Criar cadastro</Link>
        </div>

        <Link to="/" className="login-back">
          ← Voltar para o início
        </Link>
      </section>
    </main>
  );
}

export default Login;
