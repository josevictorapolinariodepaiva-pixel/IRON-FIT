
import { Link, NavLink } from "react-router-dom";
import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,  
  PieChart,
  Pie,
  Cell,
} from "recharts";

import "./DashboardAdmin.css";

const alunosPorMes = [
  { mes: "Mai", alunos: 72 },
  { mes: "Jun", alunos: 84 },
  { mes: "Jul", alunos: 93 },
  { mes: "Ago", alunos: 108 },
  { mes: "Set", alunos: 119 },
  { mes: "Out", alunos: 128 },
];

const conteudos = [
  { nome: "Vídeos", quantidade: 24 },
  { nome: "Treinos", quantidade: 18 },
  { nome: "Dietas", quantidade: 32 },
];

const distribuicao = [
  { nome: "Treinos", valor: 40 },
  { nome: "Vídeos", valor: 30 },
  { nome: "Dietas", valor: 30 },
];

const cores = ["#9b6cff", "#6d8cff", "#43d9a3"];

function DashboardAdmin() {
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
            <strong>Dashboard</strong>
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
                <span /> VISÃO GERAL
              </div>
              <h1>
                Dashboard<span>.</span>
              </h1>
              <p>
                Acompanhe os indicadores e a evolução da plataforma IRONFIT.
              </p>
            </div>

                     <Link to="/" className="iron-back-home">
                  <span>⌂</span>
                    Voltar para a Home
                  </Link>
          </section>

          <section className="iron-metrics">
            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">TOTAL DE ALUNOS</span>
                <span className="iron-metric-icon purple">♟</span>
              </div>
              <strong className="iron-metric-number">128</strong>
              <span className="iron-metric-caption">
                Membros cadastrados
              </span>
              <div className="iron-metric-line purple-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">VÍDEOS</span>
                <span className="iron-metric-icon green">▷</span>
              </div>
              <strong className="iron-metric-number">24</strong>
              <span className="iron-metric-caption">
                Vídeos disponíveis
              </span>
              <div className="iron-metric-line green-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">TREINOS</span>
                <span className="iron-metric-icon purple">ϟ</span>
              </div>
              <strong className="iron-metric-number">18</strong>
              <span className="iron-metric-caption">
                Treinos cadastrados
              </span>
              <div className="iron-metric-line purple-line" />
            </article>

            <article className="iron-metric-card">
              <div className="iron-metric-top">
                <span className="iron-metric-label">DIETAS</span>
                <span className="iron-metric-icon green">◈</span>
              </div>
              <strong className="iron-metric-number">32</strong>
              <span className="iron-metric-caption">
                Planos alimentares
              </span>
              <div className="iron-metric-line green-line" />
            </article>
   
          </section>

          <section className="iron-dashboard-charts">
            <article className="iron-chart-panel">
              <div className="iron-chart-heading">
                <div>
                  <div className="iron-overline">CRESCIMENTO</div>
                  <h2>Evolução de alunos</h2>
                  <p>Quantidade de membros por mês.</p>
                </div>
                <span className="iron-chart-tag">6 meses</span>
              </div>

              <div className="iron-chart-area">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={alunosPorMes}>
                    <CartesianGrid
                      stroke="#292936"
                      strokeDasharray="3 3"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="mes"
                      stroke="#858595"
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#858595"
                      tickLine={false}
                      axisLine={false}
                      width={35}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#171720",
                        border: "1px solid #393448",
                        borderRadius: 10,
                        color: "#fff",
                      }}
                    />
                    <Line
                      type="monotone"
                      dataKey="alunos"
                      name="Alunos"
                      stroke="#9b6cff"
                      strokeWidth={3}
                      dot={{ fill: "#9b6cff", r: 4 }}
                      activeDot={{ r: 6 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </article>

            <article className="iron-chart-panel">
              <div className="iron-chart-heading">
                <div>
                  <div className="iron-overline">CONTEÚDO</div>
                  <h2>Materiais cadastrados</h2>
                  <p>Comparativo por categoria.</p>
                </div>
              </div>

              <div className="iron-chart-area">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={conteudos} barSize={34}>
                    <CartesianGrid
                      stroke="#292936"
                      strokeDasharray="3 3"
                      vertical={false}
                    />
                    <XAxis
                      dataKey="nome"
                      stroke="#858595"
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke="#858595"
                      tickLine={false}
                      axisLine={false}
                      width={30}
                    />
                    <Tooltip
                      contentStyle={{
                        background: "#171720",
                        border: "1px solid #393448",
                        borderRadius: 10,
                        color: "#fff",
                      }}
                    />
                    <Bar
                      dataKey="quantidade"
                      name="Quantidade"
                      fill="#9b6cff"
                      radius={[7, 7, 0, 0]}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </article>

            <article className="iron-chart-panel iron-distribution-panel">
              <div className="iron-chart-heading">
                <div>
                  <div className="iron-overline">DISTRIBUIÇÃO</div>
                  <h2>Conteúdo da plataforma</h2>
                  <p>Distribuição ilustrativa dos materiais.</p>
                </div>
              </div>

              <div className="iron-chart-area iron-donut-area">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={distribuicao}
                      dataKey="valor"
                      nameKey="nome"
                      cx="50%"
                      cy="50%"
                      innerRadius={58}
                      outerRadius={88}
                      paddingAngle={5}
                      stroke="none"
                    >
                      {distribuicao.map((item, index) => (
                        <Cell
                          key={item.nome}
                          fill={cores[index % cores.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{
                        background: "#171720",
                        border: "1px solid #393448",
                        borderRadius: 10,
                        color: "#fff",
                      }}
                      formatter={(value) => [`${value}%`, "Distribuição"]}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="iron-chart-legend">
                {distribuicao.map((item, index) => (
                  <div key={item.nome}>
                    <span
                      className="iron-legend-dot"
                      style={{ background: cores[index] }}
                    />
                    <span>{item.nome}</span>
                    <strong>{item.valor}%</strong>
                  </div>
                ))}
              </div>
            </article>
          </section>

          <footer className="iron-page-footer">
            <span>
              IRONFIT <b>ADMIN</b>
            </span>
            <span>Dashboard administrativo · Plataforma de fitness</span>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default DashboardAdmin;
