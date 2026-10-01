import { Link } from "react-router-dom";
import "./Dieta.css";

function Dieta() {
  const refeicoes = [
    {
      horario: "07:00",
      tipo: "CAFÉ DA MANHÃ",
      titulo: "Refeição 01",
      alimentos: "Ovos, pão integral e fruta",
      quantidade: "Proteínas + carboidratos",
    },
    {
      horario: "10:00",
      tipo: "LANCHE",
      titulo: "Refeição 02",
      alimentos: "Iogurte natural e aveia",
      quantidade: "Proteínas + fibras",
    },
    {
      horario: "12:30",
      tipo: "ALMOÇO",
      titulo: "Refeição 03",
      alimentos: "Arroz, feijão, frango e salada",
      quantidade: "Refeição completa",
    },
    {
      horario: "16:00",
      tipo: "PRÉ-TREINO",
      titulo: "Refeição 04",
      alimentos: "Banana, aveia e pasta de amendoim",
      quantidade: "Energia para o treino",
    },
    {
      horario: "19:30",
      tipo: "JANTAR",
      titulo: "Refeição 05",
      alimentos: "Arroz, frango e legumes",
      quantidade: "Proteínas + carboidratos",
    },
  ];

  return (
    <main className="dieta-page">
      <header className="dieta-page-header">
        <div>
          <span>MINHA DIETA</span>
          <h1>Sua <strong>alimentação.</strong></h1>
          <p>
            Consulte sua rotina alimentar e mantenha consistência durante sua
            jornada.
          </p>
        </div>

        <Link to="/aluno" className="dieta-back">
          ← Voltar
        </Link>
      </header>

      <section className="dieta-summary">
        <div>
          <span>OBJETIVO ATUAL</span>
          <h2>Hipertrofia</h2>
          <p>Plano alimentar focado em suporte ao ganho de massa muscular.</p>
        </div>

        <div className="dieta-summary-stats">
          <div>
            <strong>05</strong>
            <span>Refeições</span>
          </div>
          <div>
            <strong>↑</strong>
            <span>Foco em ganho</span>
          </div>
        </div>
      </section>

      <section className="dieta-content">
        <div className="dieta-content-header">
          <div>
            <span>ROTINA ALIMENTAR</span>
            <h2>Refeições do dia</h2>
          </div>

          <span className="dieta-count">
            {refeicoes.length} refeições
          </span>
        </div>

        <div className="dieta-list">
          {refeicoes.map((refeicao) => (
            <article className="dieta-card" key={refeicao.horario}>
              <div className="dieta-time">
                <strong>{refeicao.horario}</strong>
              </div>

              <div className="dieta-card-content">
                <span>{refeicao.tipo}</span>
                <h3>{refeicao.titulo}</h3>
                <p>{refeicao.alimentos}</p>
              </div>

              <div className="dieta-card-tag">
                {refeicao.quantidade}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="dieta-note">
        <span>IMPORTANTE</span>
        <p>
          Este plano é um exemplo demonstrativo do sistema IRONFIT. O plano
          alimentar real deve ser definido e acompanhado por um profissional
          habilitado.
        </p>
      </section>
    </main>
  );
}

export default Dieta;
