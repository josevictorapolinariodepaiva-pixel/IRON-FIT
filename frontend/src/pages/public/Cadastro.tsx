
import { useState } from "react";
import type { FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Turnstile } from "@marsidev/react-turnstile";

import "./Cadastro.css";
import { cadastrarAluno, ErroApi } from "../../services/api";

const turnstileSiteKey = import.meta.env.VITE_TURNSTILE_SITE_KEY;

function Cadastro() {
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");
  const [enviando, setEnviando] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setMensagemErro("");

    if (nome.trim().length < 3) {
      setMensagemErro("O nome deve ter pelo menos 3 caracteres.");
      return;
    }

    if (!email.trim()) {
      setMensagemErro("Informe seu e-mail.");
      return;
    }

    if (senha.length < 6) {
      setMensagemErro("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    if (senha !== confirmarSenha) {
      setMensagemErro("As senhas não são iguais.");
      return;
    }

    if (!turnstileToken) {
      setMensagemErro("Conclua a verificação de segurança.");
      return;
    }

    setEnviando(true);

    try {
      await cadastrarAluno(
        {
          nome: nome.trim(),
          email: email.trim(),
          senha
        },
        turnstileToken
      );

      navigate("/login", {
        replace: true,
        state: {
          mensagem: "Cadastro realizado. Entre com seus dados."
        }
      });
    } catch (error) {
      setMensagemErro(
        error instanceof ErroApi
          ? error.message
          : "Não foi possível concluir o cadastro. Tente novamente."
      );

      // O token pode ter sido consumido na tentativa anterior.
      setTurnstileToken("");
    } finally {
      setEnviando(false);
    }
  };

  return (
    <main className="cadastro-page">
      <section className="cadastro-card">
        <div className="cadastro-logo">
          IRON<span>FIT</span>
        </div>

        <div className="cadastro-header">
          <span>CRIE SUA CONTA</span>
          <h1>
            Comece sua<strong> evolução.</strong>
          </h1>
          <p>Crie sua conta para acessar a plataforma IRONFIT.</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="nome">Nome completo</label>
            <input
              id="nome"
              type="text"
              placeholder="Digite seu nome"
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              autoComplete="name"
              minLength={3}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cadastro-email">E-mail</label>
            <input
              id="cadastro-email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="cadastro-senha">Senha</label>
            <input
              id="cadastro-senha"
              type="password"
              placeholder="Crie uma senha"
              value={senha}
              onChange={(event) => setSenha(event.target.value)}
              autoComplete="new-password"
              minLength={6}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="confirmar-senha">Confirmar senha</label>
            <input
              id="confirmar-senha"
              type="password"
              placeholder="Digite a senha novamente"
              value={confirmarSenha}
              onChange={(event) => setConfirmarSenha(event.target.value)}
              autoComplete="new-password"
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

          <button
            type="submit"
            className="cadastro-button"
            disabled={enviando || !turnstileToken || !turnstileSiteKey}
          >
            {enviando ? "Criando conta..." : "Criar minha conta"}
          </button>
        </form>

        <div className="cadastro-login">
          <span>Já possui uma conta?</span>
          <Link to="/login">Entrar</Link>
        </div>

        <Link to="/" className="cadastro-back">
          ← Voltar para o início
        </Link>
      </section>
    </main>
  );
}

export default Cadastro;
