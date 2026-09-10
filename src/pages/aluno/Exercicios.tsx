import { Link } from "react-router-dom";
import "./Exercicios.css";

function Exercicios() {
  const exercicios = [
    {
      numero: "01",
      grupo: "PEITO",
      nome: "Supino reto",
      descricao: "Desenvolvimento da região central do peito.",
      series: "4 séries",
      repeticoes: "10 repetições",
    },
    {
      numero: "02",
      grupo: "PEITO",
      nome: "Supino inclinado",
      descricao: "Foco na parte superior do peitoral.",
      series: "4 séries",
      repeticoes: "10 repetições",
    },
    {
      numero: "03",
      grupo: "PEITO",
      nome: "Crucifixo",
      descricao: "Trabalho de isolamento para o peitoral.",
      series: "3 séries",
      repeticoes: "12 repetições",
    },
    {
      numero: "04",
      grupo: "TRÍCEPS",
      nome: "Tríceps pulley",
      descricao: "Extensão dos braços utilizando a polia.",
      series: "3 séries",
      repeticoes: "12 repetições",
    },
    {
      numero: "05",
      grupo: "TRÍCEPS",
      nome: "Tríceps francês",
      descricao: "Exercício para trabalhar a cabeça longa do tríceps.",
      series: "3 séries",
      repeticoes: "10 repetições",
    },
    {
      numero: "06",
      grupo: "TRÍCEPS",
      nome: "Tríceps testa",
      descricao: "Extensão de cotovelos com foco no tríceps.",
      series: "3 séries",
      repeticoes: "10 repetições",
    },
  ];

  return (
    <main className="exercicios-page">
      <header className="exercicios-page-header">
        <div>
          <span>EXERCÍCIOS</span>
          <h1>Conheça sua <strong>rotina.</strong></h1>
          <p>
            Consulte os exercícios do seu treino e mantenha a execução correta.
          </p>
        </div>

        <Link to="/aluno" className="exercicios-back">
          ← Voltar
        </Link>
      </header>

      <section className="exercicios-intro">
        <div>
          <span>SEU TREINO ATUAL</span>
          <h2>Peito + Tríceps</h2>
          <p>
            Os exercícios abaixo fazem parte da sua rotina atual de treinamento.
          </p>
        </div>

        <Link to="/aluno/treino" className="exercicios-training-button">
          Ver treino →
        </Link>
      </section>

      <section className="exercicios-content">
        <div className="exercicios-content-header">
          <div>
            <span>BIBLIOTECA</span>
            <h2>Exercícios disponíveis</h2>
          </div>

          <span className="exercicios-total">
            {exercicios.length} exercícios
          </span>
        </div>

        <div className="exercicios-grid">
          {exercicios.map((exercicio) => (
            <article className="exercicio-item" key={exercicio.numero}>
              <div className="exercicio-item-top">
                <span className="exercicio-item-number">
                  {exercicio.numero}
                </span>

                <span className="exercicio-item-group">
                  {exercicio.grupo}
                </span>
              </div>

              <div className="exercicio-item-body">
                <h3>{exercicio.nome}</h3>
                <p>{exercicio.descricao}</p>
              </div>

              <div className="exercicio-item-footer">
                <span>{exercicio.series}</span>
                <span>{exercicio.repeticoes}</span>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Exercicios;
