import type { Video } from "../types/Video";

interface VideoCardProps {
  video: Video;
}

function VideoCard({ video }: VideoCardProps) {

  const getYoutubeEmbedUrl = (url: string) => {
    try {
      const urlObj = new URL(url);

      let videoId = "";

      if (urlObj.hostname.includes("youtu.be")) {
        videoId = urlObj.pathname.replace("/", "");
      }

      if (urlObj.hostname.includes("youtube.com")) {
        videoId = urlObj.searchParams.get("v") || "";
      }

      if (!videoId) {
        return "";
      }

      return "https://www.youtube.com/embed/" + videoId;

    } catch {
      return "";
    }
  };

  const embedUrl = getYoutubeEmbedUrl(video.url);

  return (
    <article className="video-card">

      {embedUrl ? (
        <iframe
          src={embedUrl}
          title={video.titulo}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <div style={{ padding: "30px" }}>
          <p>Vídeo inválido.</p>
        </div>
      )}

      <div className="video-content">

        <h3>{video.titulo}</h3>

        <p>
          {video.descricao}
        </p>

        <span className="badge">
          {video.categoria}
        </span>

        <span
          className="badge"
          style={{ marginLeft: "8px" }}
        >
          {video.nivel}
        </span>

      </div>

    </article>
  );
}

export default VideoCard;
