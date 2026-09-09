import Navbar from "../../components/Navbar";
import VideoCard from "../../components/VideoCard";
import { videos } from "../../data/videos";

function Treino() {
  return (
    <>
      <Navbar tipo="aluno" />

      <main>

        <h1>Meus Treinos</h1>

        <p>
          Assista às videoaulas e acompanhe seus treinos.
        </p>

        <div className="video-grid">

          {videos.map((video) => (
            <VideoCard
              key={video.id}
              video={video}
            />
          ))}

        </div>

      </main>
    </>
  );
}

export default Treino;
