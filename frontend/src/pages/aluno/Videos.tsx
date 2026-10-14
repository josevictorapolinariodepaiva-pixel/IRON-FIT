import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Clock3,
  Dumbbell,
  LayoutDashboard,
  LogOut,
  Menu,
  Play,
  PlayCircle,
  Settings,
  Target,
  TrendingUp,
  Utensils,
  UserRound,
  Video,
  X,
} from "lucide-react";
import "./DashboardAluno.css";
import "./Videos.css";

const videos = [
  {
    id: 1,
    grupo: "PEITO",
    titulo: "Supino reto: execução correta",
    descricao: "Aprenda a técnica correta do exercício.",
    duracao: "Técnica e execução",
    url: "https://www.youtube.com/results?search_query=supino+reto+execucao+correta",
  },
  {
    id: 2,
    grupo: "TRÍCEPS",
    titulo: "Tríceps pulley",
    descricao: "Veja como executar o movimento corretamente.",
    duracao: "Técnica e execução",
    url: "https://www.youtube.com/results?search_query=triceps+pulley+execucao+correta",
  },
  {
    id: 3,
    grupo: "COSTAS",
    titulo: "Puxada frontal",
    descricao: "Aprenda os principais pontos da execução.",
    duracao: "Técnica e execução",
    url: "https://www.youtube.com/results?search_query=puxada+frontal+execucao+correta",
  },
  {
    id: 4,
    grupo: "PERNAS",
    titulo: "Agachamento livre",
    descricao: "Conheça os cuidados durante o exercício.",
    duracao: "Técnica e execução",
    url: "https://www.youtube.com/results?search_query=agachamento+livre+execucao+correta",
  },
];

function Videos() {
  const nome = "Victor";

  const [menuAberto, setMenuAberto] = useState(false);
  const [notificacoesAbertas, setNotificacoesAbertas] = useState(false);

  const fecharMenu = () => setMenuAberto(false);

  return (
    <main className="performance-dashboard videos-dashboard">
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
            className="performance-nav-link performance-nav-active"
            onClick={fecharMenu}
          >
            <PlayCircle size={18} />
            <span>Vídeos</span>
            <span className="performance-nav-indicator" />
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
            Continue aprendendo e aprimorando a execução dos seus exercícios.
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
              <strong>Vídeos</strong>
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
                      <PlayCircle size={17} />
                    </div>

                    <div>
                      <strong>Biblioteca de vídeos</strong>
                      <p>
                        Confira os conteúdos para aprimorar sua técnica.
                      </p>
                      <Link
                        to="/aluno/videos"
                        onClick={() => setNotificacoesAbertas(false)}
                      >
                        Ver vídeos <ArrowRight size={13} />
                      </Link>
                    </div>
                  </div>

                  <div className="performance-notification-item">
                    <div className="performance-notification-icon">
                      <Target size={17} />
                    </div>

                    <div>
                      <strong>Continue evoluindo</strong>
                      <p>
                        Aprender também faz parte do seu progresso.
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
            </div>
          </div>
        </header>

        <div className="performance-content videos-content">
          <header className="videos-header">
            <div>
              <div className="videos-eyebrow">
                <Video size={15} />
                ÁREA DO ALUNO / APRENDIZADO
              </div>

              <h1>
                Aprenda. <strong>Evolua.</strong>
              </h1>

              <p>
                Conteúdos para melhorar sua técnica e potencializar seus
                treinos.
              </p>
            </div>

            <Link to="/aluno" className="performance-secondary-button">
              <ArrowLeft size={15} />
              Voltar ao painel
            </Link>
          </header>

          <section className="videos-featured">
            <div className="videos-featured-decoration">
              <Video size={110} strokeWidth={0.8} />
            </div>

            <div className="video-featured-content">
              <span className="videos-section-label">
                DESTAQUE DA SEMANA
              </span>

              <h2>Como executar os exercícios corretamente</h2>

              <p>
                Aprenda os principais cuidados para executar seus exercícios
                com segurança e eficiência.
              </p>

              <a
                href="https://www.youtube.com/results?search_query=como+executar+exercicios+de+musculacao+corretamente"
                target="_blank"
                rel="noreferrer"
                className="video-button"
              >
                <Play size={16} fill="currentColor" />
                Assistir vídeos
                <ArrowRight size={15} />
              </a>
            </div>

            <a
              href="https://www.youtube.com/results?search_query=como+executar+exercicios+de+musculacao+corretamente"
              target="_blank"
              rel="noreferrer"
              className="video-featured-play"
              aria-label="Pesquisar vídeos de execução correta"
            >
              <Play size={25} fill="currentColor" />
            </a>
          </section>

          <section className="videos-section">
            <div className="videos-section-header">
              <div>
                <span className="videos-section-label">BIBLIOTECA</span>
                <h2>Conteúdos para você</h2>
                <p>Escolha um exercício e aprenda a executá-lo melhor.</p>
              </div>

              <span className="videos-total">
                {videos.length} conteúdos
              </span>
            </div>

            <div className="videos-grid">
              {videos.map((video, index) => (
                <article className="video-card" key={video.id}>
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noreferrer"
                    className={`video-thumbnail video-thumbnail-${index + 1}`}
                    aria-label={`Assistir: ${video.titulo}`}
                  >
                    <span className="video-thumbnail-number">
                      {String(video.id).padStart(2, "0")}
                    </span>

                    <span className="video-thumbnail-play">
                      <Play size={20} fill="currentColor" />
                    </span>

                    <span className="video-thumbnail-category">
                      {video.grupo}
                    </span>
                  </a>

                  <div className="video-card-content">
                    <span>{video.grupo}</span>
                    <h3>{video.titulo}</h3>
                    <p>{video.descricao}</p>

                    <div className="video-card-footer">
                      <span>
                        <Clock3 size={13} />
                        {video.duracao}
                      </span>

                      <a
                        href={video.url}
                        target="_blank"
                        rel="noreferrer"
                      >
                        Assistir <ArrowRight size={14} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <footer className="videos-footer">
            <Link to="/aluno">
              <ArrowLeft size={14} />
              Voltar ao painel
            </Link>

            <span>IRONFIT — Treine com propósito.</span>

            <Link to="/" className="videos-index-link">
              Página inicial <ArrowRight size={14} />
            </Link>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default Videos;
