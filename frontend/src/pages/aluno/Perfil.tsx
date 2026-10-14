import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CreditCard,
  Dumbbell,
  LayoutDashboard,
  LogOut,
  Mail,
  Menu,
  Newspaper,
  PlayCircle,
  Settings,
  ShieldCheck,
  Target,
  TrendingUp,
  Utensils,
  UserRound,
  X,
} from "lucide-react";

import "./DashboardAluno.css";
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
  const [menuAberto, setMenuAberto] = useState(false);
  const [notificacoesAbertas, setNotificacoesAbertas] = useState(false);
  const [notificacoesTreino, setNotificacoesTreino] = useState(true);
  const [conteudosAcademia, setConteudosAcademia] = useState(true);

  const nome = usuario?.nome || "Usuário IRONFIT";
  const email = usuario?.email || "E-mail não disponível";
  const tipo = usuario?.tipo || "aluno";
  const inicial = nome.trim().charAt(0).toUpperCase() || "U";

  const tipoFormatado = tipo.charAt(0).toUpperCase() + tipo.slice(1);

  const fecharMenu = () => setMenuAberto(false);

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
    <main className="performance-dashboard perfil-dashboard">
      {menuAberto && (
        <button
          type="button"
          className="performance-overlay"
          aria-label="Fechar menu"
          onClick={fecharMenu}
        />
      )}

      <aside
        className={`performance-sidebar ${
          menuAberto ? "performance-sidebar-open" : ""
        }`}
      >
        <div className="performance-brand">
          <div className="performance-brand-mark">
            <Dumbbell size={22} strokeWidth={2.5} />
          </div>

          <div className="performance-brand-name">
            IRON<span>FIT</span>
            <small>ÁREA DO ALUNO</small>
          </div>

          <button
            type="button"
            className="performance-mobile-close"
            aria-label="Fechar menu"
            onClick={fecharMenu}
          >
            <X size={18} />
          </button>
        </div>

        <div className="performance-sidebar-label">MENU PRINCIPAL</div>

        <nav className="performance-navigation" aria-label="Menu do aluno">
          <Link
            to="/aluno"
            className="performance-nav-link"
            onClick={fecharMenu}
          >
            <LayoutDashboard size={18} />
            <span>Início</span>
          </Link>

          <Link
            to="/aluno/treino"
            className="performance-nav-link"
            onClick={fecharMenu}
          >
            <Dumbbell size={18} />
            <span>Meus treinos</span>
          </Link>

          <Link
            to="/aluno/videos"
            className="performance-nav-link"
            onClick={fecharMenu}
          >
            <PlayCircle size={18} />
            <span>Vídeos</span>
          </Link>

          <Link
            to="/aluno/dieta"
            className="performance-nav-link"
            onClick={fecharMenu}
          >
            <Utensils size={18} />
            <span>Dieta</span>
          </Link>

          <Link
            to="/aluno/progresso"
            className="performance-nav-link"
            onClick={fecharMenu}
          >
            <TrendingUp size={18} />
            <span>Progresso</span>
          </Link>

          <Link
            to="/aluno/perfil"
            className="performance-nav-link performance-nav-active"
            onClick={fecharMenu}
          >
            <UserRound size={18} />
            <span>Meu perfil</span>
            <span className="performance-nav-indicator" />
          </Link>
        </nav>

        <div className="performance-sidebar-spacer" />

        <div className="performance-sidebar-goal">
          <div className="performance-goal-icon">
            <Target size={19} />
          </div>

          <span className="performance-goal-label">SUA CONTA</span>
          <h3>Seu espaço IRONFIT.</h3>
          <p>
            Mantenha seus dados atualizados e personalize suas preferências.
          </p>

          <div className="performance-goal-line">
            <span style={{ width: "65%" }} />
          </div>
        </div>

        <div className="performance-sidebar-bottom">
          <Link
            to="/aluno/perfil"
            className="performance-settings-link"
            onClick={fecharMenu}
          >
            <Settings size={16} />
            Configurações
          </Link>

          <Link
            to="/"
            className="performance-logout"
            onClick={fecharMenu}
          >
            <LogOut size={16} />
            Voltar ao início
            <ArrowRight size={14} />
          </Link>
        </div>

        <div className="performance-sidebar-footer">
          <span>IRONFIT © 2026</span>
          <span>V1.0</span>
        </div>
      </aside>

      <section className="performance-main">
        <header className="performance-topbar">
          <div className="performance-topbar-left">
            <button
              type="button"
              className="performance-menu-button"
              aria-label="Abrir menu"
              onClick={() => setMenuAberto(true)}
            >
              <Menu size={20} />
            </button>

            <div className="performance-breadcrumb">
              <Link to="/aluno">Área do aluno</Link>
              <span className="performance-breadcrumb-separator">/</span>
              <strong>Meu perfil</strong>
            </div>

            <div className="performance-online-status">
              <span />
              Sua área está ativa
            </div>
          </div>

          <div className="performance-topbar-actions">
            <div className="performance-notification-wrapper">
              <button
                type="button"
                className={`performance-icon-button ${
                  notificacoesAbertas
                    ? "performance-icon-button-active"
                    : ""
                }`}
                aria-label="Abrir notificações"
                aria-expanded={notificacoesAbertas}
                onClick={() =>
                  setNotificacoesAbertas((aberta) => !aberta)
                }
              >
                <Bell size={17} />
                <span className="performance-notification-dot" />
              </button>

              {notificacoesAbertas && (
                <div className="performance-notification-popover">
                  <div className="performance-notification-heading">
                    <strong>Notificações</strong>
                    <button
                      type="button"
                      aria-label="Fechar notificações"
                      onClick={() => setNotificacoesAbertas(false)}
                    >
                      <X size={16} />
                    </button>
                  </div>

                  <div className="performance-notification-item">
                    <div className="performance-notification-icon">
                      <UserRound size={17} />
                    </div>

                    <div>
                      <strong>Seus dados pessoais</strong>
                      <p>Confira as informações da sua conta.</p>
                      <Link
                        to="/aluno/perfil"
                        onClick={() => setNotificacoesAbertas(false)}
                      >
                        Ver perfil <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  <div className="performance-notification-item">
                    <div className="performance-notification-icon">
                      <ShieldCheck size={17} />
                    </div>

                    <div>
                      <strong>Segurança da conta</strong>
                      <p>Saia da sua conta ao usar dispositivos compartilhados.</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="performance-user">
              <div className="performance-user-avatar">{inicial}</div>

              <div className="performance-user-info">
                <strong>{nome}</strong>
                <span>Aluno</span>
              </div>
            </div>
          </div>
        </header>

        <div className="performance-content perfil-content">
          <header className="perfil-page-header">
            <div className="perfil-heading">
              <div className="perfil-eyebrow">
                <UserRound size={15} />
                ÁREA DO ALUNO / MINHA CONTA
              </div>

              <h1>
                Meu <strong>perfil.</strong>
              </h1>

              <p>
                Gerencie suas informações pessoais e preferências da sua conta
                IRONFIT.
              </p>
            </div>

            <Link to="/aluno" className="performance-secondary-button">
              <ArrowLeft size={15} />
              Voltar ao painel
            </Link>
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
                <CheckCircle2 size={15} />
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

          <footer className="treino-footer">
            <Link to="/aluno">
              <ArrowLeft size={14} />
              Voltar ao painel
            </Link>

            <span>IRONFIT — Treine com propósito.</span>

            <Link to="/" className="treino-index-link">
              Página inicial <ArrowRight size={14} />
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default Perfil;
