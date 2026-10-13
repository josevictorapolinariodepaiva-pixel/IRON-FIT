
import { useState } from "react";
import type { FormEvent } from "react";
import { Link, NavLink } from "react-router-dom";
import "./VideosAdmin.css";

type Video = {
  id: number;
  titulo: string;
  descricao: string;
  categoria: string;
  nivel: string;
  url: string;
};

function VideosAdmin() {
  const [videos, setVideos] = useState<Video[]>([
    {
      id: 1,
      titulo: "Como executar o supino reto",
      descricao: "Técnica correta e principais cuidados.",
      categoria: "Peito",
      nivel: "Iniciante",
      url: "https://www.youtube.com/",
    },
    {
      id: 2,
      titulo: "Execução do agachamento livre",
      descricao: "Aprenda a realizar o movimento corretamente.",
      categoria: "Pernas",
      nivel: "Intermediário",
      url: "https://www.youtube.com/",
    },
    {
      id: 3,
      titulo: "Tríceps pulley sem erros",
      descricao: "Dicas para melhorar sua execução.",
      categoria: "Tríceps",
      nivel: "Iniciante",
      url: "https://www.youtube.com/",
    },
  ]);

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [categoria, setCategoria] = useState("Peito");
  const [nivel, setNivel] = useState("Iniciante");
  const [url, setUrl] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const novoVideo: Video = {
      id: Date.now(),
      titulo: titulo.trim(),
      descricao: descricao.trim(),
      categoria,
      nivel,
      url: url.trim(),
    };

    setVideos((atuais) => [novoVideo, ...atuais]);

    setTitulo("");
    setDescricao("");
    setCategoria("Peito");
    setNivel("Iniciante");
    setUrl("");
  };

  const removerVideo = (id: number) => {
    setVideos((atuais) => atuais.filter((video) => video.id !== id));
  };

  return (
    <main className="iron-admin">
      <aside className="iron-sidebar">
        <Link to="/admin" className="iron-logo">
          <span className="iron-logo-mark">I</span>
          <span>
            IRON<b>FIT</b>
          </span>
        </Link>

        <div className="iron-sidebar-label">
          ESPAÇO ADMINISTRATIVO
        </div>

        <nav className="iron-nav" aria-label="Navegação administrativa">
          <NavLink to="/admin" end>
            <span className="iron-nav-icon">⌂</span>
            <span>Dashboard</span>
          </NavLink>

          <NavLink to="/admin/alunos">
            <span className="iron-nav-icon">♟</span>
            <span>Alunos</span>
          </NavLink>

          <NavLink to="/admin/videos">
            <span className="iron-nav-icon">▷</span>
            <span>Vídeos</span>
            <span className="iron-nav-current">●</span>
          </NavLink>

          <NavLink to="/admin/treinos">
            <span className="iron-nav-icon">ϟ</span>
            <span>Treinos</span>
          </NavLink>

          <NavLink to="/admin/exercicios">
            <span className="iron-nav-icon">◇</span>
            <span>Exercícios</span>
          </NavLink>

          <NavLink to="/admin/dietas">
            <span className="iron-nav-icon">◈</span>
            <span>Dietas</span>
          </NavLink>
        </nav>

        <div className="iron-sidebar-bottom">
          <div className="iron-sidebar-promo">
            <span className="iron-promo-icon">ϟ</span>
            <strong>FOCO NO RESULTADO</strong>
            <p>Gestão inteligente. Evolução constante.</p>
          </div>

          <Link to="/" className="iron-logout">
            <span>↪</span> Sair da administração
          </Link>
        </div>
      </aside>

      <section className="iron-workspace">
        <header className="iron-topbar">
          <div className="iron-breadcrumb">
            <span>IRONFIT</span>
            <span className="iron-breadcrumb-separator">/</span>
            <span>Administração</span>
            <span className="iron-breadcrumb-separator">/</span>
            <strong>Vídeos</strong>
          </div>

          <div className="iron-top-profile">
            <span className="iron-online-dot" />
            <div className="iron-admin-avatar">A</div>
            <div className="iron-admin-info">
              <strong>Administrador</strong>
              <span>Gestão da plataforma</span>
            </div>
            <span className="iron-profile-chevron">⌄</span>
          </div>
        </header>

        <div className="iron-page-content">
          <section className="iron-page-heading">
            <div>
              <div className="iron-overline">
                <span /> GESTÃO DE CONTEÚDO
              </div>

              <h1>
                Vídeos<span>.</span>
              </h1>

              <p>
                Organize os conteúdos, gerencie os vídeos e disponibilize
                orientações de treino para os alunos da IRONFIT.
              </p>
            </div>

            <Link to="/admin" className="iron-secondary-button">
              <span>←</span> Voltar ao painel
            </Link>
          </section>

          <section className="iron-metrics">
            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">TOTAL DE VÍDEOS</span>
                <span className="iron-metric-icon purple">▷</span>
              </div>
              <strong className="iron-metric-number">{videos.length}</strong>
              <span className="iron-metric-caption">
                Conteúdos cadastrados
              </span>
              <div className="iron-metric-line purple-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">CATEGORIAS</span>
                <span className="iron-metric-icon green">◇</span>
              </div>
              <strong className="iron-metric-number">
                {new Set(videos.map((video) => video.categoria)).size}
              </strong>
              <span className="iron-metric-caption">
                Grupos de exercícios
              </span>
              <div className="iron-metric-line green-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">INICIANTES</span>
                <span className="iron-metric-icon purple">↗</span>
              </div>
              <strong className="iron-metric-number">
                {videos.filter((video) => video.nivel === "Iniciante").length}
              </strong>
              <span className="iron-metric-caption">
                Vídeos para iniciantes
              </span>
              <div className="iron-metric-line purple-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">AVANÇADOS</span>
                <span className="iron-metric-icon green">ϟ</span>
              </div>
              <strong className="iron-metric-number">
                {videos.filter((video) => video.nivel === "Avançado").length}
              </strong>
              <span className="iron-metric-caption">
                Vídeos avançados
              </span>
              <div className="iron-metric-line green-line" />
            </article>
          </section>

          <section className="videos-admin-layout">
            <section className="videos-admin-form-panel">
              <div className="videos-admin-section-header">
                <div className="iron-overline">NOVO CONTEÚDO</div>
                <h2>Adicionar vídeo</h2>
                <p>
                  Cadastre um vídeo para disponibilizar aos alunos.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="videos-admin-form">
                <div className="videos-admin-form-group">
                  <label htmlFor="titulo">Título do vídeo</label>
                  <input
                    id="titulo"
                    type="text"
                    placeholder="Ex.: Como executar o supino"
                    value={titulo}
                    onChange={(event) => setTitulo(event.target.value)}
                    required
                  />
                </div>

                <div className="videos-admin-form-group">
                  <label htmlFor="descricao">Descrição</label>
                  <textarea
                    id="descricao"
                    placeholder="Descreva brevemente o conteúdo..."
                    value={descricao}
                    onChange={(event) => setDescricao(event.target.value)}
                    required
                  />
                </div>

                <div className="videos-admin-form-row">
                  <div className="videos-admin-form-group">
                    <label htmlFor="categoria">Categoria</label>
                    <select
                      id="categoria"
                      value={categoria}
                      onChange={(event) => setCategoria(event.target.value)}
                    >
                      <option>Peito</option>
                      <option>Costas</option>
                      <option>Pernas</option>
                      <option>Ombros</option>
                      <option>Bíceps</option>
                      <option>Tríceps</option>
                      <option>Abdômen</option>
                      <option>Cardio</option>
                    </select>
                  </div>

                  <div className="videos-admin-form-group">
                    <label htmlFor="nivel">Nível</label>
                    <select
                      id="nivel"
                      value={nivel}
                      onChange={(event) => setNivel(event.target.value)}
                    >
                      <option>Iniciante</option>
                      <option>Intermediário</option>
                      <option>Avançado</option>
                    </select>
                  </div>
                </div>

                <div className="videos-admin-form-group">
                  <label htmlFor="url">URL do YouTube</label>
                  <input
                    id="url"
                    type="url"
                    placeholder="https://www.youtube.com/watch?v=..."
                    value={url}
                    onChange={(event) => setUrl(event.target.value)}
                    required
                  />
                </div>

                <button type="submit" className="videos-admin-submit">
                  + Adicionar vídeo
                </button>
              </form>
            </section>

            <section className="videos-admin-list-panel">
              <div className="videos-admin-section-header">
                <div className="videos-admin-list-title">
                  <div>
                    <div className="iron-overline">BIBLIOTECA</div>
                    <h2>Vídeos cadastrados</h2>
                    <p>Consulte e gerencie os conteúdos da plataforma.</p>
                  </div>

                  <strong>{videos.length}</strong>
                </div>
              </div>

              <div className="videos-admin-list">
                {videos.map((video) => (
                  <article className="video-admin-card" key={video.id}>
                    <div className="video-admin-thumb">
                      <span>▶</span>
                    </div>

                    <div className="video-admin-info">
                      <div className="video-admin-tags">
                        <span>{video.categoria}</span>
                        <span>{video.nivel}</span>
                      </div>

                      <h3>{video.titulo}</h3>
                      <p>{video.descricao}</p>

                      <div className="video-admin-actions">
                        <a
                          href={video.url}
                          target="_blank"
                          rel="noreferrer"
                          className="video-admin-watch"
                        >
                          Assistir →
                        </a>

                        <button
                          type="button"
                          className="video-admin-delete"
                          onClick={() => removerVideo(video.id)}
                        >
                          Excluir
                        </button>
                      </div>
                    </div>
                  </article>
                ))}

                {videos.length === 0 && (
                  <div className="iron-empty-state">
                    <div className="iron-empty-icon">▷</div>
                    <strong>Nenhum vídeo cadastrado</strong>
                    <p>Adicione seu primeiro vídeo usando o formulário.</p>
                  </div>
                )}
              </div>

              <footer className="iron-table-footer">
                <span>
                  Exibindo <b>{videos.length}</b> vídeos cadastrados
                </span>
                <span className="iron-footer-status">
                  <i /> Dados demonstrativos
                </span>
              </footer>
            </section>
          </section>

          <footer className="iron-page-footer">
            <span>
              IRONFIT <b>ADMIN</b>
            </span>
            <span>Gestão de conteúdo · Plataforma de fitness</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default VideosAdmin;
