import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  UserRound,
  Mail,
  ShieldCheck,
  Dumbbell,
  CreditCard,
  Bell,
  Newspaper,
  ChevronRight,
  ArrowLeft,
  LogOut,
  CalendarDays,
  Settings,
  CircleCheck,
} from "lucide-react";

import "./Perfil.css";

type Usuario = {
  id?: number;
  nome?: string;
  email?: string;
  tipo?: string;
};

function obterUsuario(): Usuario | null {
  const chaves = ["usuario", "user", "ironfit_usuario"];

  for (const chave of chaves) {
    const valor = localStorage.getItem(chave);

    if (!valor) continue;

    try {
      const usuario = JSON.parse(valor) as Usuario;

      if (usuario && typeof usuario === "object") {
        return usuario;
      }
    } catch {
      // Ignora valores que não sejam JSON.
    }
  }

  return null;
}

function Perfil() {
  const navigate = useNavigate();

  const [usuario] = useState<Usuario | null>(() => obterUsuario());
  const [notificacoesTreino, setNotificacoesTreino] = useState(true);
  const [conteudosAcademia, setConteudosAcademia] = useState(true);

  const nome = usuario?.nome || "Usuário IRONFIT";
  const email = usuario?.email || "E-mail não disponível";
  const tipo = usuario?.tipo || "aluno";
  const inicial = nome.trim().charAt(0).toUpperCase() || "U";

  const tipoFormatado =
    tipo.charAt(0).toUpperCase() + tipo.slice(1);

  function handleSair() {
    const chavesSessao = [
      "token",
      "authToken",
      "accessToken",
      "usuario",
      "user",
      "ironfit_usuario",
    ];

    chavesSessao.forEach((chave) => {
      localStorage.removeItem(chave);
      sessionStorage.removeItem(chave);
    });

    navigate("/login", { replace: true });
  }

  return (
    <main className="perfil-page">
      <header className="perfil-page-header">
        <div className="perfil-heading">
          <Link to="/aluno" className="perfil-back">
            <ArrowLeft size={17} />
            Voltar ao painel
          </Link>

          <span className="perfil-eyebrow">ÁREA DO ALUNO</span>

          <h1>
            Meu <strong>perfil.</strong>
          </h1>

          <p>
            Gerencie suas informações pessoais e preferências
            da sua conta IRONFIT.
          </p>
        </div>

        <div className="perfil-header-icon">
          <Settings size={26} />
        </div>
      </header>

      <section className="perfil-layout">
        <aside className="perfil-card">
          <div className="perfil-avatar-wrapper">
            <div className="perfil-avatar">{inicial}</div>
            <span className="perfil-avatar-status" />
          </div>

          <span className="perfil-role">MEMBRO IRONFIT</span>

          <h2>{nome}</h2>

          <p className="perfil-card-email">{email}</p>

          <div className="perfil-status">
            <CircleCheck size={15} />
            Perfil da conta
          </div>

          <div className="perfil-card-divider" />

          <div className="perfil-card-detail">
            <span>Tipo de conta</span>
            <strong>{tipoFormatado}</strong>
          </div>

          <div className="perfil-card-detail">
            <span>Plataforma</span>
            <strong>IRONFIT</strong>
          </div>
        </aside>

        <section className="perfil-info">
          <div className="perfil-section-header">
            <div>
              <span>INFORMAÇÕES</span>
              <h2>Dados da conta</h2>
              <p>Confira as informações associadas ao seu acesso.</p>
            </div>

            <div className="perfil-section-icon">
              <UserRound size={21} />
            </div>
          </div>

          <div className="perfil-fields">
            <article className="perfil-field">
              <div className="perfil-field-icon">
                <UserRound size={18} />
              </div>
              <div>
                <span>Nome completo</span>
                <strong>{nome}</strong>
              </div>
            </article>

            <article className="perfil-field">
              <div className="perfil-field-icon">
                <Mail size={18} />
              </div>
              <div>
                <span>Endereço de e-mail</span>
                <strong>{email}</strong>
              </div>
            </article>

            <article className="perfil-field">
              <div className="perfil-field-icon">
                <ShieldCheck size={18} />
              </div>
              <div>
                <span>Tipo de usuário</span>
                <strong>{tipoFormatado}</strong>
              </div>
            </article>

            <article className="perfil-field">
              <div className="perfil-field-icon">
                <Dumbbell size={18} />
              </div>
              <div>
                <span>Objetivo fitness</span>
                <strong>Não definido</strong>
              </div>
            </article>

            <article className="perfil-field">
              <div className="perfil-field-icon">
                <CreditCard size={18} />
              </div>
              <div>
                <span>Plano</span>
                <strong>Não definido</strong>
              </div>
            </article>

            <article className="perfil-field">
              <div className="perfil-field-icon">
                <CalendarDays size={18} />
              </div>
              <div>
                <span>Tipo de acesso</span>
                <strong className="perfil-active">
                  <span className="perfil-active-dot" />
                  Conta IRONFIT
                </strong>
              </div>
            </article>
          </div>
        </section>
      </section>

      <section className="perfil-preferences">
        <div className="perfil-section-header">
          <div>
            <span>PERSONALIZAÇÃO</span>
            <h2>Suas preferências</h2>
            <p>Escolha quais conteúdos gostaria de receber.</p>
          </div>
        </div>

        <div className="perfil-preference-list">
          <div className="perfil-preference">
            <div className="perfil-preference-icon">
              <Bell size={19} />
            </div>

            <div className="perfil-preference-text">
              <strong>Lembretes de treino</strong>
              <span>
                Receba lembretes para manter a consistência.
              </span>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={notificacoesTreino}
              aria-label="Ativar lembretes de treino"
              className={`perfil-toggle ${
                notificacoesTreino ? "active" : ""
              }`}
              onClick={() =>
                setNotificacoesTreino((valor) => !valor)
              }
            >
              <span />
            </button>
          </div>

          <div className="perfil-preference">
            <div className="perfil-preference-icon">
              <Newspaper size={19} />
            </div>

            <div className="perfil-preference-text">
              <strong>Novidades da IRONFIT</strong>
              <span>
                Receba novidades, dicas e conteúdos da academia.
              </span>
            </div>

            <button
              type="button"
              role="switch"
              aria-checked={conteudosAcademia}
              aria-label="Ativar novidades da IRONFIT"
              className={`perfil-toggle ${
                conteudosAcademia ? "active" : ""
              }`}
              onClick={() =>
                setConteudosAcademia((valor) => !valor)
              }
            >
              <span />
            </button>
          </div>
        </div>

        <p className="perfil-preferences-note">
          <ShieldCheck size={15} />
          As preferências ainda não são salvas permanentemente.
        </p>
      </section>

      <section className="perfil-security">
        <div className="perfil-security-icon">
          <ShieldCheck size={25} />
        </div>

        <div className="perfil-security-content">
          <span>SEGURANÇA DA CONTA</span>
          <h2>Encerre sua sessão com segurança.</h2>
          <p>
            Saia da plataforma quando terminar de usar sua conta,
            especialmente em dispositivos compartilhados.
          </p>
        </div>

        <button
          type="button"
          className="perfil-security-button"
          onClick={handleSair}
        >
          <LogOut size={17} />
          Sair da conta
          <ChevronRight size={16} />
        </button>
      </section>
    </main>
  );
}

export default Perfil;