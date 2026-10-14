import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Clock3,
  Dumbbell,
  Flame,
  LayoutDashboard,
  LogOut,
  Menu,
  PlayCircle,
  Settings,
  Target,
  TrendingUp,
  Utensils,
  UserRound,
  X,
  Zap,
} from "lucide-react";
import "./DashboardAluno.css";

function DashboardAluno() {
  const nome = "Victor";
  const [menuAberto, setMenuAberto] = useState(false);
  const [notificacoesAbertas, setNotificacoesAbertas] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <main className="performance-dashboard">
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
            className="performance-mobile-close"
            type="button"
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
            className="performance-nav-link performance-nav-active"
            onClick={fecharMenu}
          >
            <LayoutDashboard size={18} />
            <span>Início</span>
            <span className="performance-nav-indicator" />
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
            className="performance-nav-link"
            onClick={fecharMenu}
          >
            <UserRound size={18} />
            <span>Meu perfil</span>
          </Link>
        </nav>

        <div className="performance-sidebar-spacer" />

        <div className="performance-sidebar-goal">
          <div className="performance-goal-icon">
            <Target size={19} />
          </div>

          <span className="performance-goal-label">META SEMANAL</span>
          <h3>Consistência vence.</h3>
          <p>
            Você está a um treino de completar sua meta desta semana.
          </p>

          <div className="performance-goal-line">
            <span />
          </div>
        </div>

        <div className="performance-sidebar-bottom">
          <Link
            to="/aluno/perfil"
            className="performance-settings-link"
          >
            <Settings size={16} />
            Configurações
          </Link>

          <Link to="/" className="performance-logout">
            <LogOut size={16} />
            Voltar ao início
            <ArrowUpRight size={14} />
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
              <span>Área do aluno</span>
              <span className="performance-breadcrumb-separator">/</span>
              <strong>Dashboard</strong>
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
                      <Dumbbell size={17} />
                    </div>

                    <div>
                      <strong>Seu treino está disponível</strong>
                      <p>
                        O treino A — Peito + Tríceps está pronto para você.
                      </p>

                      <Link
                        to="/aluno/treinos"
                        onClick={() => setNotificacoesAbertas(false)}
                      >
                        Ver treino <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  <div className="performance-notification-item">
                    <div className="performance-notification-icon">
                      <Target size={17} />
                    </div>

                    <div>
                      <strong>Continue no ritmo</strong>
                      <p>
                        Você já concluiu 4 dos 5 treinos da sua meta semanal.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="performance-user">
              <div className="performance-user-avatar">
                {nome.charAt(0).toUpperCase()}
              </div>

              <div className="performance-user-info">
                <strong>{nome}</strong>
                <span>Aluno</span>
              </div>

              <ChevronDown size={15} />
            </div>
          </div>
        </header>

        <div className="performance-content">
          <section className="performance-welcome">
            <div className="performance-welcome-copy">
              <div className="performance-eyebrow">
                <span />
                SEU FOCO, SUA EVOLUÇÃO
              </div>

              <h1>
                OLÁ, {nome.toUpperCase()}!
                <br />
                VAMOS <span>EVOLUIR.</span>
              </h1>

              <p>
                Seu próximo objetivo começa com o treino de hoje. Mantenha
                a consistência e transforme esforço em resultado.
              </p>

              <div className="performance-welcome-actions">
                <Link
                  to="/aluno/treinos"
                  className="performance-primary-button"
                >
                  Ver meus treinos <ArrowRight size={16} />
                </Link>

                <Link
                  to="/aluno/progresso"
                  className="performance-secondary-button"
                >
                  Acompanhar progresso <TrendingUp size={15} />
                </Link>
              </div>

              <div className="performance-welcome-proof">
                <span className="performance-proof-icon">
                  <CheckCircle2 size={13} />
                </span>
                Cada sessão conta.
                <strong>Continue avançando.</strong>
              </div>
            </div>

            <div className="performance-hero-art" aria-hidden="true">
              <div className="performance-hero-ring performance-ring-one" />
              <div className="performance-hero-ring performance-ring-two" />

              <div className="performance-hero-number">
                <span>SEU PRÓXIMO NÍVEL</span>
                <strong>
                  IRON<span className="performance-hero-number-accent">FIT</span>
                </strong>
              </div>

              <div className="performance-hero-stamp">
                <Zap size={19} />
                <span>
                  FOCO
                  <br />
                  FORÇA
                  <br />
                  CONSTÂNCIA
                </span>
              </div>

              <div className="performance-hero-bottom-line" />
            </div>
          </section>

          <section className="performance-section">
            <div className="performance-section-heading">
              <div>
                <span className="performance-section-kicker">
                  SEU DESEMPENHO
                </span>
                <h2>Resumo da semana</h2>
                <p>
                  Acompanhe sua consistência e mantenha o ritmo.
                </p>
              </div>

              <div className="performance-period">
                <CalendarDays size={15} />
                Esta semana
              </div>
            </div>

            <div className="performance-stats-grid">
              <article className="performance-stat-card">
                <div className="performance-stat-top">
                  <div className="performance-stat-icon">
                    <Dumbbell size={19} />
                  </div>

                  <span className="performance-stat-badge">
                    <TrendingUp size={13} />
                    Bom ritmo
                  </span>
                </div>

                <span className="performance-stat-label">
                  Treinos concluídos
                </span>

                <div className="performance-stat-number">
                  <strong>04</strong>
                  <span>/ 05 treinos</span>
                </div>

                <div className="performance-progress-track">
                  <span style={{ width: "80%" }} />
                </div>

                <div className="performance-stat-foot">
                  <span>Meta semanal</span>
                  <strong>80% concluído</strong>
                </div>
              </article>

              <article className="performance-stat-card">
                <div className="performance-stat-top">
                  <div className="performance-stat-icon performance-stat-icon-muted">
                    <Clock3 size={19} />
                  </div>

                  <span className="performance-stat-context">
                    Total acumulado
                  </span>
                </div>

                <span className="performance-stat-label">
                  Horas de treino
                </span>

                <div className="performance-stat-number">
                  <strong>24</strong>
                  <span>horas</span>
                </div>

                <div className="performance-stat-foot performance-stat-foot-simple">
                  <span>
                    <Activity size={14} />
                    Sua rotina está em movimento
                  </span>
                </div>
              </article>

              <article className="performance-stat-card">
                <div className="performance-stat-top">
                  <div className="performance-stat-icon">
                    <TrendingUp size={19} />
                  </div>

                  <span className="performance-stat-badge">
                    <ArrowUpRight size={13} />
                    Evolução
                  </span>
                </div>

                <span className="performance-stat-label">
                  Indicador de progresso
                </span>

                <div className="performance-stat-number">
                  <strong>+12%</strong>
                </div>

                <div className="performance-stat-foot performance-stat-foot-simple">
                  <span>
                    <Flame size={14} />
                    Continue mantendo a consistência
                  </span>
                </div>
              </article>
            </div>
          </section>

          <section className="performance-section">
            <div className="performance-section-heading">
              <div>
                <span className="performance-section-kicker">
                  SUA ROTINA
                </span>
                <h2>Treino de hoje</h2>
                <p>Prepare-se para mais uma sessão.</p>
              </div>

              <Link to="/aluno/treinos" className="performance-text-link">
                Todos os treinos <ArrowRight size={15} />
              </Link>
            </div>

            <article className="performance-workout-card">
              <div className="performance-workout-letter">A</div>

              <div className="performance-workout-info">
                <div className="performance-workout-labels">
                  <span className="performance-workout-tag">TREINO A</span>

                  <span className="performance-workout-available">
                    <span />
                    Disponível
                  </span>
                </div>

                <h3>
                  Peito <span>+</span> Tríceps
                </h3>

                <p>
                  Trabalhe força e resistência com seu treino de hoje.
                </p>

                <div className="performance-workout-meta">
                  <span>
                    <Activity size={14} /> 06 exercícios
                  </span>
                  <span>
                    <Clock3 size={14} /> 60 minutos
                  </span>
                  <span>
                    <Target size={14} /> Intermediário
                  </span>
                </div>
              </div>

              <Link
                to="/aluno/treinos"
                className="performance-workout-action"
              >
                Começar treino <ArrowRight size={16} />
              </Link>
            </article>
          </section>

          <section className="performance-section">
            <div className="performance-section-heading">
              <div>
                <span className="performance-section-kicker">EXPLORE</span>
                <h2>Sua área de treino</h2>
                <p>
                  Encontre tudo o que precisa para sua rotina.
                </p>
              </div>
            </div>

            <div className="performance-tools-grid">
              <Link
                to="/aluno/videos"
                className="performance-tool-card"
              >
                <div className="performance-tool-icon">
                  <PlayCircle size={22} />
                </div>

                <div className="performance-tool-copy">
                  <span>APRENDA</span>
                  <h3>Vídeos de exercícios</h3>
                  <p>
                    Veja orientações para executar os movimentos corretamente.
                  </p>
                </div>

                <span className="performance-tool-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </Link>

              <Link
                to="/aluno/dieta"
                className="performance-tool-card"
              >
                <div className="performance-tool-icon">
                  <Utensils size={22} />
                </div>

                <div className="performance-tool-copy">
                  <span>NUTRIÇÃO</span>
                  <h3>Minha dieta</h3>
                  <p>
                    Consulte seu planejamento alimentar e mantenha o foco.
                  </p>
                </div>

                <span className="performance-tool-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </Link>

              <Link
                to="/aluno/progresso"
                className="performance-tool-card"
              >
                <div className="performance-tool-icon">
                  <TrendingUp size={22} />
                </div>

                <div className="performance-tool-copy">
                  <span>RESULTADOS</span>
                  <h3>Meu progresso</h3>
                  <p>
                    Acompanhe sua evolução ao longo do tempo.
                  </p>
                </div>

                <span className="performance-tool-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </Link>

              <Link
                to="/aluno/perfil"
                className="performance-tool-card"
              >
                <div className="performance-tool-icon">
                  <UserRound size={22} />
                </div>

                <div className="performance-tool-copy">
                  <span>SUA CONTA</span>
                  <h3>Meu perfil</h3>
                  <p>
                    Consulte seus dados e preferências pessoais.
                  </p>
                </div>

                <span className="performance-tool-arrow">
                  <ArrowUpRight size={17} />
                </span>
              </Link>
            </div>
          </section>

          <div className="performance-motivation">
            <div className="performance-motivation-icon">
              <CircleHelp size={21} />
            </div>

            <div>
              <span>LEMBRETE IRONFIT</span>
              <p>
                Não precisa ser perfeito. Você só precisa continuar aparecendo
                e fazendo o seu melhor.
              </p>
            </div>

            <ArrowRight
              className="performance-motivation-arrow"
              size={19}
            />
          </div>

          <footer className="performance-footer">
            <span className="performance-footer-brand">
              IRON<span>FIT</span>
            </span>

            <span>Treine com propósito. Evolua todos os dias.</span>

            <Link to="/" className="performance-text-link">
              Voltar ao início <ArrowRight size={14} />
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default DashboardAluno;