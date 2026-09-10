import { useState } from "react";
import { Link } from "react-router-dom";
import "./AlunosAdmin.css";

type Aluno = {
  id: number;
  nome: string;
  email: string;
  plano: string;
  objetivo: string;
  status: "Ativo" | "Inativo";
};

function AlunosAdmin() {
  const [busca, setBusca] = useState("");

  const alunos: Aluno[] = [
    {
      id: 1,
      nome: "Victor",
      email: "victor@email.com",
      plano: "Mensal",
      objetivo: "Hipertrofia",
      status: "Ativo",
    },
    {
      id: 2,
      nome: "João Silva",
      email: "joao@email.com",
      plano: "Mensal",
      objetivo: "Emagrecimento",
      status: "Ativo",
    },
    {
      id: 3,
      nome: "Mariana Costa",
      email: "mariana@email.com",
      plano: "Trimestral",
      objetivo: "Hipertrofia",
      status: "Ativo",
    },
    {
      id: 4,
      nome: "Lucas Oliveira",
      email: "lucas@email.com",
      plano: "Mensal",
      objetivo: "Condicionamento",
      status: "Inativo",
    },
    {
      id: 5,
      nome: "Ana Paula",
      email: "ana@email.com",
      plano: "Anual",
      objetivo: "Hipertrofia",
      status: "Ativo",
    },
    {
      id: 6,
      nome: "Pedro Henrique",
      email: "pedro@email.com",
      plano: "Trimestral",
      objetivo: "Emagrecimento",
      status: "Ativo",
    },
  ];

  const alunosFiltrados = alunos.filter((aluno) => {
    const termo = busca.toLowerCase();

    return (
      aluno.nome.toLowerCase().includes(termo) ||
      aluno.email.toLowerCase().includes(termo)
    );
  });

  return (
    <main className="alunos-admin-page">
      <header className="alunos-admin-header">
        <div>
          <span>GERENCIAMENTO</span>
          <h1>Seus <strong>alunos.</strong></h1>
          <p>
            Consulte e acompanhe os alunos cadastrados na plataforma IRONFIT.
          </p>
        </div>

        <Link to="/admin" className="alunos-admin-back">
          ← Dashboard
        </Link>
      </header>

      <section className="alunos-admin-stats">
        <article>
          <span>TOTAL DE ALUNOS</span>
          <strong>128</strong>
          <small>Cadastros na plataforma</small>
        </article>

        <article>
          <span>ALUNOS ATIVOS</span>
          <strong>116</strong>
          <small>90,6% da base</small>
        </article>

        <article>
          <span>NOVOS ESTE MÊS</span>
          <strong>08</strong>
          <small>+6,7% em relação ao mês anterior</small>
        </article>
      </section>

      <section className="alunos-admin-panel">
        <div className="alunos-admin-panel-header">
          <div>
            <span>CADASTROS</span>
            <h2>Lista de alunos</h2>
          </div>

          <div className="alunos-admin-search">
            <span>⌕</span>
            <input
              type="search"
              placeholder="Buscar aluno..."
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
            />
          </div>
        </div>

        <div className="alunos-admin-table-wrapper">
          <table className="alunos-admin-table">
            <thead>
              <tr>
                <th>ALUNO</th>
                <th>PLANO</th>
                <th>OBJETIVO</th>
                <th>STATUS</th>
                <th>AÇÃO</th>
              </tr>
            </thead>

            <tbody>
              {alunosFiltrados.map((aluno) => (
                <tr key={aluno.id}>
                  <td>
                    <div className="aluno-table-person">
                      <div className="aluno-table-avatar">
                        {aluno.nome.charAt(0)}
                      </div>

                      <div>
                        <strong>{aluno.nome}</strong>
                        <span>{aluno.email}</span>
                      </div>
                    </div>
                  </td>

                  <td>{aluno.plano}</td>

                  <td>{aluno.objetivo}</td>

                  <td>
                    <span
                      className={`aluno-status ${aluno.status === "Ativo" ? "ativo" : "inativo"}`}
                    >
                      <i></i>
                      {aluno.status}
                    </span>
                  </td>

                  <td>
                    <button type="button" className="aluno-action">
                      Ver
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {alunosFiltrados.length === 0 && (
            <div className="alunos-admin-empty">
              <strong>Nenhum aluno encontrado.</strong>
              <span>Tente buscar por outro nome ou e-mail.</span>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}

export default AlunosAdmin;
