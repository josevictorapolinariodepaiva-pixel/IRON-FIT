import {
  useEffect,
  useRef,
  useState,
} from "react";

import "./Home.css";

import video from "../../assets/videos/academia.mp4";
import gifBackground from "../../assets/gifs/ironfit.gif";

function Home() {
  const [showContent, setShowContent] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoStep, setVideoStep] = useState(1);

  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let animationId = 0;
    let targetTime = 0;
    let smoothTime = 0;
    let lastProgress = -1;

    const updateVideo = () => {
      const videoElement = videoRef.current;
      const section = sectionRef.current;

      if (
        videoElement &&
        section &&
        videoElement.duration > 0
      ) {
        const rect = section.getBoundingClientRect();

        const sectionHeight =
          section.offsetHeight -
          window.innerHeight;

        const progress =
          sectionHeight > 0
            ? Math.min(
                Math.max(
                  -rect.top / sectionHeight,
                  0
                ),
                1
              )
            : 0;

        if (
          Math.abs(
            progress - lastProgress
          ) > 0.001
        ) {
          lastProgress = progress;
          setScrollProgress(progress);
        }

        targetTime =
          progress *
          Math.max(
            videoElement.duration - 0.001,
            0
          );

        smoothTime +=
          (targetTime - smoothTime) * 0.12;

        if (
          Math.abs(
            videoElement.currentTime -
              smoothTime
          ) > 0.01
        ) {
          videoElement.currentTime =
            smoothTime;
        }

        if (progress < 0.30) {
          setVideoStep(1);
          setShowContent(false);
        } else if (progress < 0.70) {
          setVideoStep(2);
          setShowContent(false);
        } else {
          setVideoStep(3);
          setShowContent(true);
        }
      }

      animationId =
        requestAnimationFrame(updateVideo);
    };

    const handleLoadedMetadata = () => {
      const videoElement =
        videoRef.current;

      if (!videoElement) {
        return;
      }

      videoElement.pause();

      smoothTime = 0;
      targetTime = 0;

      videoElement.currentTime = 0.001;

      animationId =
        requestAnimationFrame(updateVideo);
    };

    const videoElement =
      videoRef.current;

    if (videoElement) {
      if (videoElement.readyState >= 1) {
        handleLoadedMetadata();
      } else {
        videoElement.addEventListener(
          "loadedmetadata",
          handleLoadedMetadata,
          {
            once: true,
          }
        );
      }
    }

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const goToHero = () => {
    document
      .querySelector(".hero")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const goToBenefits = () => {
    document
      .querySelector(".benefits")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const goToCadastro = () => {
    window.location.href = "/cadastro";
  };

  const goToLogin = () => {
    window.location.href = "/login";
  };

  return (
    <main>
      {/* NAVBAR */}

      <nav className="navbar">
        <div className="navbar-logo">
          IRON<span>FIT</span>
        </div>

        <div className="navbar-links">
          <a href="/">
            Início
          </a>

          <a
            href="#recursos"
            onClick={(event) => {
              event.preventDefault();
              goToBenefits();
            }}
          >
            Recursos
          </a>

          <a
            href="/cadastro"
            onClick={(event) => {
              event.preventDefault();
              goToCadastro();
            }}
          >
            Cadastro
          </a>

          <a
            href="/login"
            className="navbar-login"
            onClick={(event) => {
              event.preventDefault();
              goToLogin();
            }}
          >
            Entrar
          </a>
        </div>
      </nav>

      {/* VÍDEO */}

      <section
        className="video-scroll"
        ref={sectionRef}
      >
        <div className="video-sticky">
          <video
            ref={videoRef}
            className="intro-video"
            src={video}
            muted
            playsInline
            preload="auto"
          />

          <div className="video-dark-overlay"></div>

          {/* ETAPA 01 */}

          <div
            className={`video-step ${
              videoStep === 1
                ? "active"
                : ""
            }`}
          >
            <div className="step-number">
              01
            </div>

            <div className="step-line"></div>

            <span>
              ROLE PARA BAIXO
            </span>

            <div className="scroll-mouse">
              <div className="scroll-wheel"></div>
            </div>

            <small>
              DESCUBRA O QUE VEM A SEGUIR
            </small>
          </div>

          {/* ETAPA 02 */}

          <div
            className={`video-loading ${
              videoStep === 2
                ? "active"
                : ""
            }`}
          >
            <div className="loading-top">
              <span>02</span>

              <span>
                CARREGANDO EXPERIÊNCIA
              </span>
            </div>

            <div className="loading-title">
              PREPARE-SE
            </div>

            <div className="loading-percentage">
              {Math.round(
                scrollProgress * 100
              )}
              %
            </div>

            <div className="loading-bar">
              <div
                className="loading-bar-fill"
                style={{
                  width: `${scrollProgress * 100}%`,
                }}
              />
            </div>

            <span className="loading-text">
              CONSTRUINDO SUA EXPERIÊNCIA...
            </span>
          </div>

          {/* ETAPA 03 */}

          <div
            className={`video-overlay ${
              showContent
                ? "show-content"
                : ""
            }`}
          >
            <div className="final-step">
              03
              <span></span>
              EXPERIÊNCIA LIBERADA
            </div>

            <span className="video-label">
              BEM-VINDO À PLATAFORMA
            </span>

            <h1>
              IRON<span>FIT</span>
            </h1>

            <p>
              Uma plataforma completa para
              gerenciamento de academia,
              reunindo treinos, exercícios,
              vídeos, dietas e acompanhamento
              em um único sistema.
            </p>

            <div className="video-buttons">
              <button onClick={goToHero}>
                Conhecer a plataforma
              </button>

              <button
                className="secondary-button"
                onClick={goToBenefits}
              >
                Ver recursos
              </button>
            </div>
          </div>

          {/* HUD */}

          <div className="game-hud">
            <div className="game-status">
              <span>
                ETAPA 0{videoStep}
              </span>

              <strong>
                {Math.round(
                  scrollProgress * 100
                )}
                %
              </strong>
            </div>

            <div className="game-progress">
              <div
                className="game-progress-fill"
                style={{
                  width: `${scrollProgress * 100}%`,
                }}
              />
            </div>
          </div>

          {/* INDICADOR */}

          <div className="video-steps-indicator">
            <div
              className={
                videoStep >= 1
                  ? "current"
                  : ""
              }
            >
              <span>01</span>
              <small>INÍCIO</small>
            </div>

            <div
              className={
                videoStep >= 2
                  ? "current"
                  : ""
              }
            >
              <span>02</span>
              <small>PREPARAÇÃO</small>
            </div>

            <div
              className={
                videoStep >= 3
                  ? "current"
                  : ""
              }
            >
              <span>03</span>
              <small>IRONFIT</small>
            </div>
          </div>
        </div>
      </section>

      {/* HERO */}

      <section className="hero">
        {/* ÚNICO GIF DA SECTION */}

        <img
          src={gifBackground}
          className="section-fire"
          alt=""
        />

        <div className="hero-content">
          <span className="hero-badge">
            <span className="hero-badge-dot"></span>
            PERFORMANCE • DISCIPLINA • EVOLUÇÃO
          </span>

          <h1>
            Seu corpo.
            <span>Seu limite.</span>
          </h1>

          <p>
            Uma plataforma completa para
            gerenciamento de academia, reunindo
            treinos, exercícios, vídeos, dietas,
            progresso e gestão de alunos em
            um único sistema.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={goToBenefits}
            >
              Conhecer recursos
            </button>

            <button
              className="outline-button"
              onClick={goToCadastro}
            >
              Criar cadastro
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <strong>06</strong>

              <span>
                Módulos do sistema
              </span>
            </div>

            <div>
              <strong>02</strong>

              <span>
                Tipos de usuário
              </span>
            </div>

            <div>
              <strong>100%</strong>

              <span>
                Projeto responsivo
              </span>
            </div>
          </div>
        </div>

        <div className="hero-gym-card">
          <div className="gym-card-top">
            <span>
              IRONFIT
            </span>

            <span className="gym-status">
              ● SISTEMA ONLINE
            </span>
          </div>

          <div className="gym-card-content">
            <span className="gym-card-label">
              PLATAFORMA
            </span>

            <h2>
              TREINO
              <span>& PERFORMANCE</span>
            </h2>

            <p>
              Uma experiência digital para
              organizar treinos, exercícios,
              vídeos, dietas e evolução.
            </p>
          </div>

          <div className="gym-card-bottom">
            <div>
              <span>ÁREA</span>
              <strong>ALUNO</strong>
            </div>

            <div>
              <span>ÁREA</span>
              <strong>ADMIN</strong>
            </div>
          </div>
        </div>
      </section>

      {/* RECURSOS */}

      <section
        className="benefits"
        id="recursos"
      >
        {/* ÚNICO GIF DA SECTION */}

        <img
          src={gifBackground}
          className="section-fire"
          alt=""
        />

        <div className="benefits-header">
          <span className="section-badge">
            RECURSOS DA PLATAFORMA
          </span>

          <h2>
            Mais do que uma interface.
          </h2>

          <p>
            Um sistema pensado para organizar
            diferentes áreas de uma academia
            em uma única experiência.
          </p>
        </div>

        <div className="benefits-grid">
          <article className="benefit-card">
            <span className="benefit-number">
              01
            </span>

            <div className="benefit-icon">
              ⚡
            </div>

            <h3>
              Gestão de treinos
            </h3>

            <p>
              Organização de treinos e exercícios
              para facilitar o acompanhamento
              da rotina dos alunos.
            </p>
          </article>

          <article className="benefit-card">
            <span className="benefit-number">
              02
            </span>

            <div className="benefit-icon">
              ◈
            </div>

            <h3>
              Biblioteca de vídeos
            </h3>

            <p>
              Área dedicada a vídeos de treinamento,
              permitindo organizar conteúdos por
              categoria e nível.
            </p>
          </article>

          <article className="benefit-card">
            <span className="benefit-number">
              03
            </span>

            <div className="benefit-icon">
              ↑
            </div>

            <h3>
              Acompanhamento
            </h3>

            <p>
              Visualização de progresso, informações
              do aluno e acompanhamento de sua
              evolução ao longo do tempo.
            </p>
          </article>

          <article className="benefit-card">
            <span className="benefit-number">
              04
            </span>

            <div className="benefit-icon">
              ◉
            </div>

            <h3>
              Área do aluno
            </h3>

            <p>
              Um espaço próprio para acessar
              treinos, exercícios, dieta, vídeos,
              progresso e perfil.
            </p>
          </article>

          <article className="benefit-card">
            <span className="benefit-number">
              05
            </span>

            <div className="benefit-icon">
              ◆
            </div>

            <h3>
              Área administrativa
            </h3>

            <p>
              Painel destinado ao gerenciamento
              de alunos, treinos, exercícios,
              vídeos e dietas.
            </p>
          </article>

          <article className="benefit-card">
            <span className="benefit-number">
              06
            </span>

            <div className="benefit-icon">
              🔐
            </div>

            <h3>
              Controle de acesso
            </h3>

            <p>
              Separação das áreas do sistema
              de acordo com o tipo de usuário,
              aluno ou administrador.
            </p>
          </article>
        </div>
      </section>

      {/* CTA FINAL */}

      <section className="final-cta">
        {/* ÚNICO GIF DA SECTION */}

        <img
          src={gifBackground}
          className="section-fire"
          alt=""
        />

        <div className="final-cta-content">
          <span className="final-cta-label">
            PLATAFORMA IRONFIT
          </span>

          <h2>
            TREINO.
            <strong>EVOLUÇÃO.</strong>
          </h2>

          <p>
            Uma experiência digital criada para
            conectar alunos, treinos, exercícios,
            vídeos e acompanhamento em um
            único lugar.
          </p>

          <div className="hero-actions">
            <button
              className="primary-button"
              onClick={goToCadastro}
            >
              Criar cadastro
            </button>

            <button
              className="outline-button"
              onClick={goToLogin}
            >
              Entrar no sistema
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;