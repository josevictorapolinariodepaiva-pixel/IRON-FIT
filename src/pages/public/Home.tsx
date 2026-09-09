import {
  useEffect,
  useRef,
  useState
} from "react";

import "./Home.css";

import video from "../../assets/videos/academia.mp4";


function Home() {

  const [showContent, setShowContent] =
    useState(false);

  const [scrollProgress, setScrollProgress] =
    useState(0);

  const [videoStep, setVideoStep] =
    useState(1);


  const videoRef =
    useRef<HTMLVideoElement>(null);

  const sectionRef =
    useRef<HTMLElement>(null);


  /* =========================================
     CONTROLE DO VÍDEO PELO SCROLL
  ========================================= */

  useEffect(() => {

    let animationId = 0;

    let targetTime = 0;

    let smoothTime = 0;

    let lastProgress = -1;


    const updateVideo = () => {

      const videoElement =
        videoRef.current;

      const section =
        sectionRef.current;


      if (
        videoElement &&
        section &&
        videoElement.duration > 0
      ) {

        const rect =
          section.getBoundingClientRect();


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


        /* ================================
           PORCENTAGEM
        ================================= */

        if (
          Math.abs(
            progress - lastProgress
          ) > 0.001
        ) {

          lastProgress =
            progress;

          setScrollProgress(
            progress
          );

        }


        /* ================================
           TEMPO DO VÍDEO
        ================================= */

        targetTime =
          progress *
          Math.max(
            videoElement.duration - 0.001,
            0
          );


        smoothTime +=
          (
            targetTime -
            smoothTime
          ) * 0.12;


        if (
          Math.abs(
            videoElement.currentTime -
            smoothTime
          ) > 0.01
        ) {

          videoElement.currentTime =
            smoothTime;

        }


        /* ================================
           ETAPAS DA INTRODUÇÃO
        ================================= */

        if (progress < 0.30) {

          setVideoStep(1);

          setShowContent(false);

        }

        else if (progress < 0.70) {

          setVideoStep(2);

          setShowContent(false);

        }

        else {

          setVideoStep(3);

          setShowContent(true);

        }

      }


      animationId =
        requestAnimationFrame(
          updateVideo
        );

    };


    /* =====================================
       METADATA DO VÍDEO
    ===================================== */

    const handleLoadedMetadata = () => {

      const videoElement =
        videoRef.current;


      if (!videoElement) {
        return;
      }


      /*
        O vídeo começa parado
        no primeiro frame.
      */

      videoElement.pause();

      smoothTime = 0;

      targetTime = 0;


      videoElement.currentTime =
        0.001;


      animationId =
        requestAnimationFrame(
          updateVideo
        );

    };


    const videoElement =
      videoRef.current;


    if (videoElement) {

      if (
        videoElement.readyState >= 1
      ) {

        handleLoadedMetadata();

      } else {

        videoElement.addEventListener(
          "loadedmetadata",
          handleLoadedMetadata,
          {
            once: true
          }
        );

      }

    }


    return () => {

      cancelAnimationFrame(
        animationId
      );

    };

  }, []);


  /* =========================================
     NAVEGAÇÃO
  ========================================= */

  const goToHero = () => {

    document
      .querySelector(".hero")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  };


  const goToPlans = () => {

    document
      .querySelector(".plans")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  };


  const goToBenefits = () => {

    document
      .querySelector(".benefits")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  };


  return (

    <main>


      {/* =====================================
          NAVBAR
      ===================================== */}

      <nav className="navbar">

        <div className="navbar-logo">

          IRON<span>FIT</span>

        </div>


        <div className="navbar-links">

          <a href="/">
            Início
          </a>


          <a
            href="#beneficios"
            onClick={(event) => {

              event.preventDefault();

              goToBenefits();

            }}
          >
            Benefícios
          </a>


          <a
            href="#planos"
            onClick={(event) => {

              event.preventDefault();

              goToPlans();

            }}
          >
            Planos
          </a>


          <a
            href="/login"
            className="navbar-login"
          >
            Entrar
          </a>

        </div>

      </nav>



      {/* =====================================
          INTRODUÇÃO EM VÍDEO
      ===================================== */}

      <section
        className="video-scroll"
        ref={sectionRef}
      >

        <div className="video-sticky">


          {/* =================================
              VÍDEO
          ================================= */}

          <video
            ref={videoRef}
            className="intro-video"
            src={video}
            muted
            playsInline
            preload="auto"
          />



          {/* =================================
              OVERLAY ESCURO
          ================================= */}

          <div className="video-dark-overlay"></div>



          {/* =================================
              ETAPA 01
          ================================= */}

          <div
            className={
              `video-step ${
                videoStep === 1
                  ? "active"
                  : ""
              }`
            }
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



          {/* =================================
              ETAPA 02
          ================================= */}

          <div
            className={
              `video-loading ${
                videoStep === 2
                  ? "active"
                  : ""
              }`
            }
          >

            <div className="loading-top">

              <span>
                02
              </span>


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
                  width:
                    `${scrollProgress * 100}%`
                }}
              />

            </div>


            <span className="loading-text">

              CONSTRUINDO SUA EXPERIÊNCIA...

            </span>

          </div>



          {/* =================================
              ETAPA 03
          ================================= */}

          <div
            className={
              `video-overlay ${
                showContent
                  ? "show-content"
                  : ""
              }`
            }
          >

            <div className="final-step">

              03
              <span></span>
              EXPERIÊNCIA LIBERADA

            </div>


            <span className="video-label">

              BEM-VINDO À

            </span>


            <h1>

              IRON<span>FIT</span>

            </h1>


            <p>

              Treine mais forte.
              Evolua todos os dias.
              Transforme o seu limite.

            </p>


            <div className="video-buttons">

              <button
                onClick={goToHero}
              >
                Conhecer a academia
              </button>


              <button
                className="secondary-button"
                onClick={goToPlans}
              >
                Ver planos
              </button>

            </div>

          </div>



          {/* =================================
              HUD INFERIOR
          ================================= */}

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
                  width:
                    `${scrollProgress * 100}%`
                }}
              />

            </div>


          </div>



          {/* =================================
              INDICADORES 01 / 02 / 03
          ================================= */}

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



      {/* =====================================
          HERO PRINCIPAL
      ===================================== */}

      <section className="hero">

        <div className="hero-content">


          <span className="hero-badge">

            <span className="hero-badge-dot"></span>

            PERFORMANCE • DISCIPLINA • EVOLUÇÃO

          </span>


          <h1>

            Seu corpo.

            <span>
              Seu limite.
            </span>

          </h1>


          <p>

            Uma experiência completa para quem
            leva treinamento a sério. Estrutura,
            tecnologia e acompanhamento para
            você evoluir todos os dias.

          </p>


          <div className="hero-actions">

            <button
              className="primary-button"
              onClick={goToPlans}
            >
              Começar agora
            </button>


            <button
              className="outline-button"
              onClick={goToPlans}
            >
              Conhecer planos
            </button>

          </div>



          {/* ESTATÍSTICAS */}

          <div className="hero-stats">

            <div>

              <strong>
                2.500+
              </strong>

              <span>
                Alunos ativos
              </span>

            </div>


            <div>

              <strong>
                15+
              </strong>

              <span>
                Anos de experiência
              </span>

            </div>


            <div>

              <strong>
                24h
              </strong>

              <span>
                Estrutura disponível
              </span>

            </div>

          </div>

        </div>



        {/* CARD */}

        <div className="hero-gym-card">

          <div className="gym-card-top">

            <span>
              IRONFIT
            </span>

            <span className="gym-status">
              ● ABERTO
            </span>

          </div>


          <div className="gym-card-content">

            <span className="gym-card-label">
              TREINAMENTO
            </span>


            <h2>

              FORÇA

              <span>
                & PERFORMANCE
              </span>

            </h2>


            <p>

              Equipamentos profissionais,
              ambiente premium e tudo que
              você precisa para evoluir.

            </p>

          </div>


          <div className="gym-card-bottom">

            <div>

              <span>
                ESTRUTURA
              </span>

              <strong>
                PREMIUM
              </strong>

            </div>


            <div>

              <span>
                FOCO
              </span>

              <strong>
                RESULTADO
              </strong>

            </div>

          </div>

        </div>

      </section>



      {/* =====================================
          BENEFÍCIOS
      ===================================== */}

      <section
        className="benefits"
        id="beneficios"
      >

        <div className="benefits-header">

          <span className="section-badge">
            POR QUE TREINAR AQUI
          </span>


          <h2>
            Mais do que uma academia.
          </h2>


          <p>
            Um ambiente criado para transformar
            treinamento em evolução.
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
              Alta performance
            </h3>


            <p>
              Estrutura preparada para quem
              busca força, condicionamento
              e evolução constante.
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
              Estrutura premium
            </h3>


            <p>
              Equipamentos modernos e um
              ambiente pensado para melhorar
              sua experiência de treino.
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
              Evolução constante
            </h3>


            <p>
              Treine com consistência e acompanhe
              sua evolução em cada etapa.
            </p>

          </article>

        </div>

      </section>



      {/* =====================================
          PLANOS
      ===================================== */}

      <section
        className="plans"
        id="planos"
      >

        <div className="plans-header">

          <span className="section-badge">
            PLANOS
          </span>


          <h2>
            Escolha seu ritmo.
          </h2>


          <p>
            Comece hoje e leve seu treinamento
            para outro nível.
          </p>

        </div>


        <div className="plans-grid">


          <article className="plan-card">

            <span className="plan-name">
              START
            </span>


            <h3>
              Essencial
            </h3>


            <p>
              Para quem está começando.
            </p>


            <div className="plan-price">

              <small>
                R$
              </small>

              89

              <span>
                /mês
              </span>

            </div>


            <ul>

              <li>
                ✓ Acesso à academia
              </li>

              <li>
                ✓ Área de musculação
              </li>

              <li>
                ✓ Área cardiovascular
              </li>

            </ul>


            <button>
              Escolher plano
            </button>

          </article>



          <article
            className="plan-card featured-plan"
          >

            <span className="plan-popular">
              MAIS ESCOLHIDO
            </span>


            <span className="plan-name">
              PERFORMANCE
            </span>


            <h3>
              Premium
            </h3>


            <p>
              Para quem quer evoluir.
            </p>


            <div className="plan-price">

              <small>
                R$
              </small>

              129

              <span>
                /mês
              </span>

            </div>


            <ul>

              <li>
                ✓ Tudo do plano Essencial
              </li>

              <li>
                ✓ Avaliação física
              </li>

              <li>
                ✓ Acompanhamento
              </li>

              <li>
                ✓ Área funcional
              </li>

            </ul>


            <button>
              Começar agora
            </button>

          </article>



          <article className="plan-card">

            <span className="plan-name">
              ELITE
            </span>


            <h3>
              Black
            </h3>


            <p>
              Experiência completa.
            </p>


            <div className="plan-price">

              <small>
                R$
              </small>

              179

              <span>
                /mês
              </span>

            </div>


            <ul>

              <li>
                ✓ Tudo do Premium
              </li>

              <li>
                ✓ Personal trainer
              </li>

              <li>
                ✓ Plano personalizado
              </li>

            </ul>


            <button>
              Escolher plano
            </button>

          </article>


        </div>

      </section>



      {/* =====================================
          CTA FINAL
      ===================================== */}

      <section className="final-cta">

        <span>
          SEU PRÓXIMO NÍVEL COMEÇA AGORA
        </span>


        <h2>

          NÃO ESPERE

          <strong>
            A MOTIVAÇÃO.
          </strong>

        </h2>


        <p>

          Construa disciplina.
          Construa força.
          Construa sua melhor versão.

        </p>


        <button
          onClick={goToPlans}
        >
          Quero começar →
        </button>

      </section>


    </main>

  );

}


export default Home;