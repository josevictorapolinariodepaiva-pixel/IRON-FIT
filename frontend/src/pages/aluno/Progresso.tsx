import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Bell,
  CheckCircle2,
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
  Scale,
  Ruler,
  X,
} from "lucide-react";
import "./DashboardAluno.css";
import "./Progresso.css";

const medidas = [
  { label: "Peso", valor: "78,5", unidade: "kg", variacao: "+2,5 kg", icon: Scale },
  { label: "Braço", valor: "36", unidade: "cm", variacao: "+1,5 cm", icon: Activity },
  { label: "Peito", valor: "102", unidade: "cm", variacao: "+3 cm", icon: Ruler },
  { label: "Cintura", valor: "82", unidade: "cm", variacao: "-1 cm", icon: TrendingUp },
];

const historico = [
  { mes: "Junho", peso: "76,0 kg", treinos: 12 },
  { mes: "Julho", peso: "77,2 kg", treinos: 18 },
  { mes: "Agosto", peso: "78,5 kg", treinos: 20 },
];

function Progresso() {
  const nome = "Victor";

  const [menuAberto, setMenuAberto] = useState(false);
  const [notificacoesAbertas, setNotificacoesAbertas] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <main className="performance-dashboard progresso-dashboard">
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
            className="performance-nav-link performance-nav-active"
            onClick={fecharMenu}
          >
            <TrendingUp size={18} />
            <span>Progresso</span>
            <span className="performance-nav-indicator" />
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
            Acompanhe sua evolução e continue treinando para alcançar seus
            objetivos.
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
              <strong>Progresso</strong>
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
                      <TrendingUp size={17} />
                    </div>

                    <div>
                      <strong>Acompanhe sua evolução</strong>
                      <p>Confira suas medidas e registros mensais.</p>
                      <Link
                        to="/aluno/progresso"
                        onClick={() => setNotificacoesAbertas(false)}
                      >
                        Ver progresso <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  <div className="performance-notification-item">
                    <div className="performance-notification-icon">
                      <Target size={17} />
                    </div>

                    <div>
                      <strong>Mantenha a consistência</strong>
                      <p>Pequenos avanços fazem parte do processo.</p>
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

        <div className="performance-content progresso-content">
          <header className="progresso-page-header">
            <div>
              <div className="progresso-eyebrow">
                <TrendingUp size={15} />
                ÁREA DO ALUNO / DESEMPENHO
              </div>

              <h1>
                Acompanhe sua <strong>evolução.</strong>
              </h1>

              <p>
                Veja seus principais indicadores e acompanhe sua evolução ao
                longo dos treinos.
              </p>
            </div>

            <Link to="/aluno" className="performance-secondary-button">
              <ArrowLeft size={15} />
              Voltar ao painel
            </Link>
          </header>

          <section className="progresso-highlight">
            <div className="progresso-highlight-main">
              <span>EVOLUÇÃO GERAL</span>
              <h2>Você está no caminho certo.</h2>
              <p>
                Sua consistência nos treinos está trazendo resultados. Continue
                mantendo o foco na sua rotina.
              </p>
            </div>

            <div className="progresso-percent">
              <div className="progresso-percent-icon">
                <TrendingUp size={23} />
              </div>
              <strong>+12%</strong>
              <span>evolução</span>
            </div>
          </section>

          <section className="progresso-section">
            <div className="progresso-section-header">
              <div>
                <span>INDICADORES</span>
                <h2>Suas medidas</h2>
                <p>Seus principais registros corporais.</p>
              </div>

              <span className="progresso-section-badge">
                <Activity size={14} />
                4 indicadores
              </span>
            </div>

            <div className="progresso-measures">
              {medidas.map((medida) => {
                const Icone = medida.icon;

                return (
                  <article
                    className="progresso-measure"
                    key={medida.label}
                  >
                    <div className="progresso-measure-top">
                      <span>{medida.label}</span>
                      <div className="progresso-measure-icon">
                        <Icone size={18} />
                      </div>
                    </div>

                    <div className="progresso-measure-value">
                      <strong>{medida.valor}</strong>
                      <small>{medida.unidade}</small>
                    </div>

                    <p>
                      <span>{medida.variacao}</span> desde o início
                    </p>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="progresso-section">
            <div className="progresso-section-header">
              <div>
                <span>HISTÓRICO</span>
                <h2>Sua evolução</h2>
                <p>Acompanhe os registros ao longo dos meses.</p>
              </div>
            </div>

            <div className="progresso-history">
              {historico.map((item, index) => (
                <article
                  className="progresso-history-item"
                  key={item.mes}
                >
                  <div className="progresso-history-marker">
                    <span>{String(index + 1).padStart(2, "0")}</span>
                  </div>

                  <div className="progresso-history-info">
                    <strong>{item.mes}</strong>
                    <span>{item.treinos} treinos realizados</span>
                  </div>

                  <div className="progresso-history-weight">
                    <span>Peso registrado</span>
                    <strong>{item.peso}</strong>
                  </div>

                  <div className="progresso-history-check">
                    <CheckCircle2 size={18} />
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="progresso-tip">
            <div className="progresso-tip-icon">
              <Target size={21} />
            </div>

            <div>
              <span>DICA IRONFIT</span>
              <p>
                Registre suas medidas periodicamente e mantenha seus treinos
                consistentes. A evolução acontece com disciplina e tempo.
              </p>
            </div>
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

export default Progresso;
