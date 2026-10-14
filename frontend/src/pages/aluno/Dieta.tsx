
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  CheckCircle2,
  Clock3,
  Dumbbell,
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
} from "lucide-react";

import "./DashboardAluno.css";
import "./Dieta.css";

const refeicoes = [
  {
    horario: "07:00",
    tipo: "CAFÉ DA MANHÃ",
    titulo: "Refeição 01",
    alimentos: "Ovos, pão integral e fruta",
    quantidade: "Proteínas + carboidratos",
  },
  {
    horario: "10:00",
    tipo: "LANCHE",
    titulo: "Refeição 02",
    alimentos: "Iogurte natural e aveia",
    quantidade: "Proteínas + fibras",
  },
  {
    horario: "12:30",
    tipo: "ALMOÇO",
    titulo: "Refeição 03",
    alimentos: "Arroz, feijão, frango e salada",
    quantidade: "Refeição completa",
  },
  {
    horario: "16:00",
    tipo: "PRÉ-TREINO",
    titulo: "Refeição 04",
    alimentos: "Banana, aveia e pasta de amendoim",
    quantidade: "Energia para o treino",
  },
  {
    horario: "19:30",
    tipo: "JANTAR",
    titulo: "Refeição 05",
    alimentos: "Arroz, frango e legumes",
    quantidade: "Proteínas + carboidratos",
  },
];

function Dieta() {
  const nome = "Victor";

  const [menuAberto, setMenuAberto] = useState(false);
  const [notificacoesAbertas, setNotificacoesAbertas] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <main className="performance-dashboard dieta-dashboard">
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
            className="performance-nav-link performance-nav-active"
            onClick={fecharMenu}
          >
            <Utensils size={18} />
            <span>Dieta</span>
            <span className="performance-nav-indicator" />
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
            Mantenha sua alimentação organizada e continue avançando em
            direção ao seu objetivo.
          </p>

          <div className="performance-goal-line">
            <span style={{ width: "60%" }} />
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

          <Link to="/" className="performance-logout" onClick={fecharMenu}>
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
              <strong>Dieta</strong>
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
                      <Utensils size={17} />
                    </div>

                    <div>
                      <strong>Sua dieta está disponível</strong>
                      <p>Confira as refeições programadas para o seu dia.</p>
                      <a
                        href="#refeicoes"
                        onClick={() => setNotificacoesAbertas(false)}
                      >
                        Ver refeições <ArrowRight size={13} />
                      </a>
                    </div>
                  </div>

                  <div className="performance-notification-item">
                    <div className="performance-notification-icon">
                      <Target size={17} />
                    </div>

                    <div>
                      <strong>Seu objetivo</strong>
                      <p>Continue mantendo a consistência da sua rotina.</p>
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
            </div>
          </div>
        </header>

        <div className="performance-content dieta-content-area">
          <header className="dieta-page-header">
            <div>
              <div className="dieta-eyebrow">
                <span />
                SUA ROTINA / ALIMENTAÇÃO
              </div>

              <h1>
                Sua <span>alimentação.</span>
              </h1>

              <p>
                Consulte sua rotina alimentar e mantenha consistência durante
                sua jornada.
              </p>
            </div>

            <Link to="/aluno" className="performance-secondary-button">
              <ArrowLeft size={15} />
              Voltar ao painel
            </Link>
          </header>

          <section className="dieta-summary">
            <div className="dieta-summary-icon">
              <Target size={22} />
            </div>

            <div className="dieta-summary-info">
              <span>OBJETIVO ATUAL</span>
              <h2>Hipertrofia</h2>
              <p>
                Plano alimentar focado em suporte ao ganho de massa muscular.
              </p>
            </div>

            <div className="dieta-summary-stats">
              <div>
                <strong>{String(refeicoes.length).padStart(2, "0")}</strong>
                <span>Refeições</span>
              </div>

              <div>
                <strong>↑</strong>
                <span>Foco em ganho</span>
              </div>
            </div>
          </section>

          <section className="dieta-meals-section" id="refeicoes">
            <div className="dieta-content-header">
              <div>
                <span className="dieta-eyebrow">ROTINA ALIMENTAR</span>
                <h2>Refeições do dia</h2>
                <p>Organize seu dia e acompanhe cada refeição.</p>
              </div>

              <span className="dieta-count">
                {refeicoes.length} refeições
              </span>
            </div>

            <div className="dieta-list">
              {refeicoes.map((refeicao, index) => (
                <article className="dieta-card" key={refeicao.horario}>
                  <div className="dieta-time">
                    <strong>{refeicao.horario}</strong>
                    <span>REFEIÇÃO {String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="dieta-card-content">
                    <span>{refeicao.tipo}</span>
                    <h3>{refeicao.titulo}</h3>
                    <p>{refeicao.alimentos}</p>
                  </div>

                  <div className="dieta-card-tag">
                    <CheckCircle2 size={14} />
                    {refeicao.quantidade}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="dieta-note">
            <div className="dieta-note-icon">
              <Clock3 size={18} />
            </div>

            <div>
              <span>IMPORTANTE</span>
              <p>
                Este plano é um exemplo demonstrativo do sistema IRONFIT. O
                plano alimentar real deve ser definido e acompanhado por um
                profissional habilitado.
              </p>
            </div>
          </section>

          <footer className="dieta-footer">
            <Link to="/aluno">
              <ArrowLeft size={14} />
              Voltar ao painel
            </Link>

            <span>IRONFIT — Consistência vence.</span>

            <Link to="/aluno/treino">
              Ir para treinos <ArrowRight size={14} />
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default Dieta;
