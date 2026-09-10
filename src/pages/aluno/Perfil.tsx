import { Link } from "react-router-dom";
import "./Perfil.css";

function Perfil() {
  return (
    <main className="perfil-page">
      <header className="perfil-page-header">
        <div>
          <span>MEU PERFIL</span>
          <h1>Suas <strong>informações.</strong></h1>
          <p>
            Consulte seus dados pessoais e acompanhe as informações da sua
            conta IRONFIT.
          </p>
        </div>

        <Link to="/aluno" className="perfil-back">
          ← Voltar
        </Link>
      </header>

      <section className="perfil-layout">
        <aside className="perfil-card">
          <div className="perfil-avatar">V</div>

          <h2>Victor</h2>
          <span className="perfil-role">ALUNO IRONFIT</span>

          <div className="perfil-status">
            <span></span>
            Conta ativa
          </div>
        </aside>

        <section className="perfil-info">
          <div className="perfil-section-header">
            <div>
              <span>DADOS PESSOAIS</span>
              <h2>Informações da conta</h2>
            </div>
          </div>

          <div className="perfil-fields">
            <article className="perfil-field">
              <span>Nome completo</span>
              <strong>Victor</strong>
            </article>

            <article className="perfil-field">
              <span>E-mail</span>
              <strong>victor@email.com</strong>
            </article>

            <article className="perfil-field">
              <span>Tipo de usuário</span>
              <strong>Aluno</strong>
            </article>

            <article className="perfil-field">
              <span>Objetivo</span>
              <strong>Hipertrofia</strong>
            </article>

            <article className="perfil-field">
              <span>Plano</span>
              <strong>Plano mensal</strong>
            </article>

            <article className="perfil-field">
              <span>Status da conta</span>
              <strong className="perfil-active">Ativa</strong>
            </article>
          </div>
        </section>
      </section>

      <section className="perfil-preferences">
        <div className="perfil-section-header">
          <div>
            <span>PREFERÊNCIAS</span>
            <h2>Configurações</h2>
          </div>
        </div>

        <div className="perfil-preference-list">
          <div className="perfil-preference">
            <div>
              <strong>Notificações de treino</strong>
              <span>Receba lembretes sobre seus treinos.</span>
            </div>
            <span className="perfil-toggle active">ON</span>
          </div>

          <div className="perfil-preference">
            <div>
              <strong>Conteúdos da academia</strong>
              <span>Receba novidades e conteúdos da IRONFIT.</span>
            </div>
            <span className="perfil-toggle active">ON</span>
          </div>
        </div>
      </section>

      <section className="perfil-security">
        <div>
          <span>SEGURANÇA</span>
          <h2>Sua conta está protegida.</h2>
          <p>
            No sistema final, seus dados de acesso serão gerenciados pelo
            sistema de autenticação do IRONFIT.
          </p>
        </div>

        <Link to="/login" className="perfil-security-button">
          Sair da conta
        </Link>
      </section>
    </main>
  );
}

export default Perfil;
