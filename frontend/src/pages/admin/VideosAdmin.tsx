import { useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
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
      titulo,
      descricao,
      categoria,
      nivel,
      url,
    };

    setVideos((videosAtuais) => [novoVideo, ...videosAtuais]);

    setTitulo("");
    setDescricao("");
    setCategoria("Peito");
    setNivel("Iniciante");
    setUrl("");
  };

  const removerVideo = (id: number) => {
    setVideos((videosAtuais) =>
      videosAtuais.filter((video) => video.id !== id)
    );
  };

  return (
    <main className="videos-admin-page">
      <header className="videos-admin-header">
        <div>
          <span>GERENCIAMENTO</span>
          <h1>Seus <strong>vídeos.</strong></h1>
          <p>
            Adicione, organize e gerencie os conteúdos disponíveis para os
            alunos da IRONFIT.
          </p>
        </div>

        <Link to="/admin" className="videos-admin-back">
          ← Dashboard
        </Link>
      </header>

      <section className="videos-admin-layout">
        <section className="videos-admin-form-panel">
          <div className="videos-admin-section-header">
            <span>NOVO CONTEÚDO</span>
            <h2>Adicionar vídeo</h2>
            <p>
              Cadastre um vídeo do YouTube para disponibilizar aos alunos.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="videos-admin-form">
            <div className="videos-admin-form-group">
              <label htmlFor="titulo">Título</label>
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
                <span>BIBLIOTECA</span>
                <h2>Vídeos cadastrados</h2>
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
          </div>
        </section>
      </section>
    </main>
  );
}

export default VideosAdmin;
