import { Link } from "react-router-dom";
import "./DashboardAdmin.css";

function DashboardAdmin() {
  return (
    <main className="admin-dashboard">
      <aside className="admin-sidebar">
        <div className="admin-logo">
          IRON<span>FIT</span>
        </div>

        <div className="admin-label">ADMINISTRAÇÃO</div>

        <nav className="admin-menu">
          <Link to="/admin" className="active">
            <span>⌂</span>
            Dashboard
          </Link>

          <Link to="/admin/alunos">
            <span>●</span>
            Alunos
          </Link>

          <Link to="/admin/videos">
            <span>▶</span>
            Vídeos
          </Link>

          <Link to="/admin/treinos">
            <span>⚡</span>
            Treinos
          </Link>

          <Link to="/admin/exercicios">
            <span>◆</span>
            Exercícios
          </Link>

          <Link to="/admin/dietas">
            <span>◈</span>
            Dietas
          </Link>
        </nav>

        <Link to="/" className="admin-logout">
          ← Sair
        </Link>
      </aside>

      <section className="admin-content">
        <header className="admin-header">
          <div>
            <span>PAINEL ADMINISTRATIVO</span>
            <h1>Visão <strong>geral.</strong></h1>
            <p>
              Acompanhe os principais dados e gerencie a plataforma IRONFIT.
            </p>
          </div>

          <div className="admin-profile">
            <div className="admin-avatar">A</div>
            <div>
              <strong>Administrador</strong>
              <span>Admin</span>
            </div>
          </div>
        </header>

        <section className="admin-stats">
          <article className="admin-stat-card">
            <div className="admin-stat-icon">●</div>
            <span>ALUNOS ATIVOS</span>
            <strong>128</strong>
            <small>+8 este mês</small>
          </article>

          <article className="admin-stat-card">
            <div className="admin-stat-icon">▶</div>
            <span>VÍDEOS</span>
            <strong>24</strong>
            <small>Conteúdos publicados</small>
          </article>

          <article className="admin-stat-card">
            <div className="admin-stat-icon">⚡</div>
            <span>TREINOS</span>
            <strong>18</strong>
            <small>Rotinas cadastradas</small>
          </article>

          <article className="admin-stat-card">
            <div className="admin-stat-icon">◈</div>
            <span>DIETAS</span>
            <strong>32</strong>
            <small>Planos cadastrados</small>
          </article>
        </section>

        <section className="admin-panels">
          <article className="admin-panel">
            <div className="admin-panel-header">
              <div>
                <span>ATIVIDADE</span>
                <h2>Resumo da plataforma</h2>
              </div>
            </div>

            <div className="admin-activity-list">
              <div className="admin-activity">
                <div className="admin-activity-icon">+</div>
                <div>
                  <strong>Novos alunos</strong>
                  <span>8 novos cadastros este mês</span>
                </div>
                <b>+8</b>
              </div>

              <div className="admin-activity">
                <div className="admin-activity-icon">▶</div>
                <div>
                  <strong>Conteúdos</strong>
                  <span>4 vídeos adicionados recentemente</span>
                </div>
                <b>+4</b>
              </div>

              <div className="admin-activity">
                <div className="admin-activity-icon">⚡</div>
                <div>
                  <strong>Treinos</strong>
                  <span>18 rotinas disponíveis</span>
                </div>
                <b>18</b>
              </div>
            </div>
          </article>

          <article className="admin-panel admin-quick-panel">
            <div className="admin-panel-header">
              <div>
                <span>ACESSO RÁPIDO</span>
                <h2>Gerenciar</h2>
              </div>
            </div>

            <div className="admin-quick-links">
              <Link to="/admin/alunos">
                <span>●</span>
                <div>
                  <strong>Alunos</strong>
                  <small>Gerenciar usuários</small>
                </div>
                <b>→</b>
              </Link>

              <Link to="/admin/videos">
                <span>▶</span>
                <div>
                  <strong>Vídeos</strong>
                  <small>Gerenciar conteúdos</small>
                </div>
                <b>→</b>
              </Link>

              <Link to="/admin/treinos">
                <span>⚡</span>
                <div>
                  <strong>Treinos</strong>
                  <small>Gerenciar rotinas</small>
                </div>
                <b>→</b>
              </Link>

              <Link to="/admin/dietas">
                <span>◈</span>
                <div>
                  <strong>Dietas</strong>
                  <small>Gerenciar planos</small>
                </div>
                <b>→</b>
              </Link>
            </div>
          </article>
        </section>
      </section>
    </main>
  );
}

export default DashboardAdmin;
