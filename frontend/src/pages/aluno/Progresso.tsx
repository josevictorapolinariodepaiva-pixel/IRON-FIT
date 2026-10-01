import { Link } from "react-router-dom";
import "./Progresso.css";

function Progresso() {
  const medidas = [
    { label: "Peso", valor: "78,5", unidade: "kg", variacao: "+2,5 kg" },
    { label: "Braço", valor: "36", unidade: "cm", variacao: "+1,5 cm" },
    { label: "Peito", valor: "102", unidade: "cm", variacao: "+3 cm" },
    { label: "Cintura", valor: "82", unidade: "cm", variacao: "-1 cm" },
  ];

  const historico = [
    { mes: "Junho", peso: "76,0 kg", treino: "12 treinos" },
    { mes: "Julho", peso: "77,2 kg", treino: "18 treinos" },
    { mes: "Agosto", peso: "78,5 kg", treino: "20 treinos" },
  ];

  return (
    <main className="progresso-page">
      <header className="progresso-page-header">
        <div>
          <span>MEU PROGRESSO</span>
          <h1>Acompanhe sua <strong>evolução.</strong></h1>
          <p>
            Veja seus principais indicadores e acompanhe sua evolução ao longo
            dos treinos.
          </p>
        </div>

        <Link to="/aluno" className="progresso-back">
          ← Voltar
        </Link>
      </header>

      <section className="progresso-highlight">
        <div className="progresso-highlight-main">
          <span>EVOLUÇÃO GERAL</span>
          <h2>Você está no caminho certo.</h2>
          <p>
            Sua consistência nos treinos está trazendo resultados. Continue
            mantendo o foco na sua rotina.
          </p>
        </div>

        <div className="progresso-percent">
          <strong>+12%</strong>
          <span>evolução</span>
        </div>
      </section>

      <section className="progresso-section">
        <div className="progresso-section-header">
          <div>
            <span>INDICADORES</span>
            <h2>Suas medidas</h2>
          </div>
        </div>

        <div className="progresso-measures">
          {medidas.map((medida) => (
            <article className="progresso-measure" key={medida.label}>
              <span>{medida.label}</span>

              <div className="progresso-measure-value">
                <strong>{medida.valor}</strong>
                <small>{medida.unidade}</small>
              </div>

              <p>{medida.variacao} desde o início</p>
            </article>
          ))}
        </div>
      </section>

      <section className="progresso-section">
        <div className="progresso-section-header">
          <div>
            <span>HISTÓRICO</span>
            <h2>Sua evolução</h2>
          </div>
        </div>

        <div className="progresso-history">
          {historico.map((item, index) => (
            <article className="progresso-history-item" key={item.mes}>
              <div className="progresso-history-marker">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>

              <div className="progresso-history-info">
                <strong>{item.mes}</strong>
                <span>{item.treino}</span>
              </div>

              <div className="progresso-history-weight">
                <span>Peso registrado</span>
                <strong>{item.peso}</strong>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="progresso-tip">
        <span>DICA IRONFIT</span>
        <p>
          Registre suas medidas periodicamente e mantenha seus treinos
          consistentes. A evolução acontece com disciplina e tempo.
        </p>
      </section>
    </main>
  );
}

export default Progresso;
