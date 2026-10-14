
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Activity,
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  Clock3,
  Dumbbell,
  LayoutDashboard,
  LogOut,
  Menu,
  Play,
  PlayCircle,
  RotateCcw,
  Settings,
  Target,
  TrendingUp,
  Utensils,
  UserRound,
  X,
} from "lucide-react";
import "./DashboardAluno.css";
import "./Treino.css";

const exerciciosIniciais = [
  { id: 1, grupo: "PEITO", nome: "Supino reto", series: 4, repeticoes: 10 },
  { id: 2, grupo: "PEITO", nome: "Supino inclinado", series: 4, repeticoes: 10 },
  { id: 3, grupo: "PEITO", nome: "Crucifixo", series: 3, repeticoes: 12 },
  { id: 4, grupo: "TRÍCEPS", nome: "Tríceps pulley", series: 4, repeticoes: 12 },
  { id: 5, grupo: "TRÍCEPS", nome: "Tríceps francês", series: 3, repeticoes: 10 },
  { id: 6, grupo: "TRÍCEPS", nome: "Tríceps testa", series: 3, repeticoes: 12 },
];

function Treino() {
  const nome = "Victor";

  const [concluidos, setConcluidos] = useState<number[]>([]);
  const [exercicioAtivo, setExercicioAtivo] = useState<number | null>(null);
  const [menuAberto, setMenuAberto] = useState(false);
  const [notificacoesAbertas, setNotificacoesAbertas] = useState(false);

  const totalExercicios = exerciciosIniciais.length;
  const progresso = Math.round((concluidos.length / totalExercicios) * 100);
  const treinoFinalizado = concluidos.length === totalExercicios;

  const fecharMenu = () => setMenuAberto(false);

  function iniciarExercicio(id: number) {
    if (concluidos.includes(id)) {
      setConcluidos((atuais) => atuais.filter((item) => item !== id));
    }

    setExercicioAtivo(id);
  }

  function concluirExercicio(id: number) {
    const novosConcluidos = concluidos.includes(id)
      ? concluidos
      : [...concluidos, id];

    setConcluidos(novosConcluidos);

    const proximo =
      exerciciosIniciais.find(
        (exercicio) =>
          exercicio.id > id && !novosConcluidos.includes(exercicio.id),
      ) ??
      exerciciosIniciais.find(
        (exercicio) => !novosConcluidos.includes(exercicio.id),
      );

    setExercicioAtivo(proximo?.id ?? null);
  }

  function reiniciarTreino() {
    setConcluidos([]);
    setExercicioAtivo(null);
  }

  return (
    <main className="performance-dashboard treino-dashboard">
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
            className="performance-nav-link performance-nav-active"
            onClick={fecharMenu}
          >
            <Dumbbell size={18} />
            <span>Meus treinos</span>
            <span className="performance-nav-indicator" />
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
            {treinoFinalizado
              ? "Parabéns! Você concluiu todos os exercícios deste treino."
              : "Continue treinando para completar sua meta desta semana."}
          </p>

          <div className="performance-goal-line">
            <span style={{ width: `${progresso}%` }} />
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
              <strong>Meus treinos</strong>
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
                      <p>Peito + Tríceps está pronto para você.</p>
                      <Link
                        to="/aluno/treino"
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
                      <strong>Seu progresso</strong>
                      <p>
                        {concluidos.length} de {totalExercicios} exercícios
                        concluídos.
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

        <div className="performance-content treino-content">
          <header className="treino-page-header">
            <div>
              <div className="treino-eyebrow">
                <span />
                SUA ROTINA / TREINAMENTO
              </div>

              <h1>
                Meus <span>treinos.</span>
              </h1>

              <p>
                Execute cada exercício com foco. Sua evolução começa aqui.
              </p>
            </div>

            <Link to="/aluno" className="performance-secondary-button">
              <ArrowLeft size={15} />
              Voltar ao painel
            </Link>
          </header>

          <section className="treino-highlight">
            <div className="treino-highlight-number">A</div>

            <div className="treino-highlight-info">
              <span className="treino-highlight-label">TREINO ATUAL</span>
              <h2>Peito <span>+</span> Tríceps</h2>

              <div className="treino-highlight-meta">
                <span>
                  <Activity size={14} />
                  {totalExercicios} exercícios
                </span>
                <span>
                  <Clock3 size={14} />
                  Aproximadamente 60 minutos
                </span>
              </div>
            </div>

            <div className="treino-highlight-status">
              <span>STATUS DA SESSÃO</span>
              <strong>
                <span
                  className={`treino-status-dot ${
                    treinoFinalizado ? "treino-status-dot-complete" : ""
                  }`}
                />
                {treinoFinalizado ? "Concluído" : "Disponível"}
              </strong>
            </div>
          </section>

          <section className="treino-progress-card">
            <div className="treino-progress-heading">
              <div>
                <span className="treino-eyebrow">SEU DESEMPENHO</span>
                <h2>Progresso do treino</h2>
                <p>Acompanhe cada etapa da sua sessão.</p>
              </div>

              <strong className="treino-progress-percentage">
                {progresso}%
              </strong>
            </div>

            <div
              className="treino-progress-track"
              role="progressbar"
              aria-label="Progresso do treino"
              aria-valuenow={progresso}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              <span style={{ width: `${progresso}%` }} />
            </div>

            <div className="treino-progress-footer">
              <span>
                {concluidos.length} de {totalExercicios} exercícios concluídos
              </span>

              {treinoFinalizado ? (
                <span className="treino-complete-label">
                  <CheckCircle2 size={15} />
                  Treino finalizado
                </span>
              ) : (
                <span>Continue no seu ritmo</span>
              )}
            </div>
          </section>

          <section className="exercicios-section">
            <div className="exercicios-header">
              <div>
                <span className="treino-eyebrow">SUA ROTINA</span>
                <h2>Exercícios de hoje</h2>
                <p>Selecione um exercício para começar.</p>
              </div>

              <span className="exercicios-count">
                {concluidos.length}/{totalExercicios} concluídos
              </span>
            </div>

            <div className="exercicios-list">
              {exerciciosIniciais.map((exercicio) => {
                const concluido = concluidos.includes(exercicio.id);
                const ativo = exercicioAtivo === exercicio.id;

                return (
                  <article
                    key={exercicio.id}
                    className={`exercicio-card ${
                      ativo ? "exercicio-card-active" : ""
                    } ${concluido ? "exercicio-card-complete" : ""}`}
                  >
                    <div className="exercicio-number">
                      {concluido ? (
                        <CheckCircle2 size={23} />
                      ) : (
                        String(exercicio.id).padStart(2, "0")
                      )}
                    </div>

                    <div className="exercicio-info">
                      <span>{exercicio.grupo}</span>
                      <h3>{exercicio.nome}</h3>
                      <p>
                        {exercicio.series} séries · {exercicio.repeticoes}{" "}
                        repetições
                      </p>

                      {ativo && (
                        <div className="exercicio-active-label">
                          <span />
                          Exercício selecionado
                        </div>
                      )}

                      {concluido && (
                        <div className="exercicio-complete-label">
                          <CheckCircle2 size={14} />
                          Exercício concluído
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      className={`exercicio-button ${
                        concluido ? "exercicio-button-complete" : ""
                      }`}
                      onClick={() =>
                        concluido
                          ? iniciarExercicio(exercicio.id)
                          : ativo
                            ? concluirExercicio(exercicio.id)
                            : iniciarExercicio(exercicio.id)
                      }
                    >
                      {concluido ? (
                        <>
                          <RotateCcw size={15} />
                          Refazer
                        </>
                      ) : ativo ? (
                        <>
                          <Check size={16} />
                          Concluir
                        </>
                      ) : (
                        <>
                          <Play size={15} />
                          Iniciar
                        </>
                      )}
                    </button>
                  </article>
                );
              })}
            </div>
          </section>

          {treinoFinalizado && (
            <section className="treino-finish-card">
              <div className="treino-finish-icon">
                <CheckCircle2 size={29} />
              </div>

              <div className="treino-finish-text">
                <h2>Treino concluído!</h2>
                <p>
                  Você concluiu todos os exercícios desta sessão. Bom trabalho!
                </p>
              </div>

              <button type="button" onClick={reiniciarTreino}>
                <RotateCcw size={15} />
                Reiniciar treino
              </button>
            </section>
          )}

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

export default Treino;
