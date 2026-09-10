import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import "./DietasAdmin.css";

type Dieta = {
  id: number;
  nome: string;
  objetivo: string;
  nivel: string;
  calorias: number;
  refeicoes: number;
  descricao: string;
};

const dietasIniciais: Dieta[] = [
  {
    id: 1,
    nome: "Hipertrofia básica",
    objetivo: "Ganho de massa muscular",
    nivel: "Iniciante",
    calorias: 2800,
    refeicoes: 5,
    descricao: "Plano alimentar geral voltado para suporte ao ganho de massa.",
  },
  {
    id: 2,
    nome: "Definição",
    objetivo: "Redução de gordura",
    nivel: "Intermediário",
    calorias: 2100,
    refeicoes: 5,
    descricao: "Plano com foco em controle calórico e manutenção de massa muscular.",
  },
  {
    id: 3,
    nome: "Alta performance",
    objetivo: "Performance",
    nivel: "Avançado",
    calorias: 3200,
    refeicoes: 6,
    descricao: "Plano alimentar destinado a alunos com maior demanda energética.",
  },
];

function DietasAdmin() {
  const [dietas, setDietas] = useState<Dieta[]>(dietasIniciais);

  const [busca, setBusca] = useState("");
  const [objetivoFiltro, setObjetivoFiltro] = useState("Todos");
  const [nivelFiltro, setNivelFiltro] = useState("Todos");

  const [nome, setNome] = useState("");
  const [objetivo, setObjetivo] = useState("Ganho de massa muscular");
  const [nivel, setNivel] = useState("Iniciante");
  const [calorias, setCalorias] = useState("");
  const [refeicoes, setRefeicoes] = useState("5");
  const [descricao, setDescricao] = useState("");

  const dietasFiltradas = useMemo(() => {
    return dietas.filter((dieta) => {
      const correspondeBusca =
        dieta.nome.toLowerCase().includes(busca.toLowerCase()) ||
        dieta.objetivo.toLowerCase().includes(busca.toLowerCase());

      const correspondeObjetivo =
        objetivoFiltro === "Todos" ||
        dieta.objetivo === objetivoFiltro;

      const correspondeNivel =
        nivelFiltro === "Todos" || dieta.nivel === nivelFiltro;

      return (
        correspondeBusca &&
        correspondeObjetivo &&
        correspondeNivel
      );
    });
  }, [dietas, busca, objetivoFiltro, nivelFiltro]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!nome.trim() || !calorias || !refeicoes) {
      return;
    }

    const novaDieta: Dieta = {
      id: Date.now(),
      nome: nome.trim(),
      objetivo,
      nivel,
      calorias: Number(calorias),
      refeicoes: Number(refeicoes),
      descricao:
        descricao.trim() || "Sem descrição cadastrada.",
    };

    setDietas((listaAtual) => [novaDieta, ...listaAtual]);

    setNome("");
    setCalorias("");
    setRefeicoes("5");
    setDescricao("");
    setObjetivo("Ganho de massa muscular");
    setNivel("Iniciante");
  };

  const removerDieta = (id: number) => {
    setDietas((listaAtual) =>
      listaAtual.filter((dieta) => dieta.id !== id)
    );
  };

  return (
    <main className="dietas-admin-page">
      <header className="dietas-admin-header">
        <div>
          <span className="dietas-admin-eyebrow">
            IRONFIT • ADMINISTRAÇÃO
          </span>

          <h1>Dietas</h1>

          <p>
            Cadastre e organize os planos alimentares disponíveis
            na plataforma.
          </p>
        </div>

        <Link to="/admin" className="dietas-back-link">
          ← Voltar ao dashboard
        </Link>
      </header>

      <section className="dietas-admin-stats">
        <article className="dieta-stat">
          <span>Total de dietas</span>
          <strong>{dietas.length}</strong>
        </article>

        <article className="dieta-stat">
          <span>Hipertrofia</span>
          <strong>
            {
              dietas.filter(
                (dieta) =>
                  dieta.objetivo === "Ganho de massa muscular"
              ).length
            }
          </strong>
        </article>

        <article className="dieta-stat">
          <span>Definição</span>
          <strong>
            {
              dietas.filter(
                (dieta) =>
                  dieta.objetivo === "Redução de gordura"
              ).length
            }
          </strong>
        </article>

        <article className="dieta-stat">
          <span>Performance</span>
          <strong>
            {
              dietas.filter(
                (dieta) =>
                  dieta.objetivo === "Performance"
              ).length
            }
          </strong>
        </article>
      </section>

      <section className="dietas-admin-grid">
        <article className="dieta-form-card">
          <div className="dieta-section-heading">
            <span>NOVA DIETA</span>
            <h2>Cadastrar dieta</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="dieta-form-field">
              <label htmlFor="nome-dieta">
                Nome da dieta
              </label>

              <input
                id="nome-dieta"
                type="text"
                placeholder="Ex.: Hipertrofia avançada"
                value={nome}
                onChange={(event) =>
                  setNome(event.target.value)
                }
                required
              />
            </div>

            <div className="dieta-form-field">
              <label htmlFor="objetivo-dieta">
                Objetivo
              </label>

              <select
                id="objetivo-dieta"
                value={objetivo}
                onChange={(event) =>
                  setObjetivo(event.target.value)
                }
              >
                <option>Ganho de massa muscular</option>
                <option>Redução de gordura</option>
                <option>Performance</option>
                <option>Manutenção</option>
              </select>
            </div>

            <div className="dieta-form-row">
              <div className="dieta-form-field">
                <label htmlFor="nivel-dieta">
                  Nível
                </label>

                <select
                  id="nivel-dieta"
                  value={nivel}
                  onChange={(event) =>
                    setNivel(event.target.value)
                  }
                >
                  <option>Iniciante</option>
                  <option>Intermediário</option>
                  <option>Avançado</option>
                </select>
              </div>

              <div className="dieta-form-field">
                <label htmlFor="calorias-dieta">
                  Calorias
                </label>

                <input
                  id="calorias-dieta"
                  type="number"
                  min="1"
                  placeholder="2800"
                  value={calorias}
                  onChange={(event) =>
                    setCalorias(event.target.value)
                  }
                  required
                />
              </div>
            </div>

            <div className="dieta-form-field">
              <label htmlFor="refeicoes-dieta">
                Número de refeições
              </label>

              <select
                id="refeicoes-dieta"
                value={refeicoes}
                onChange={(event) =>
                  setRefeicoes(event.target.value)
                }
              >
                <option value="3">3 refeições</option>
                <option value="4">4 refeições</option>
                <option value="5">5 refeições</option>
                <option value="6">6 refeições</option>
                <option value="7">7 refeições</option>
              </select>
            </div>

            <div className="dieta-form-field">
              <label htmlFor="descricao-dieta">
                Descrição
              </label>

              <textarea
                id="descricao-dieta"
                rows={4}
                placeholder="Descreva brevemente o objetivo da dieta."
                value={descricao}
                onChange={(event) =>
                  setDescricao(event.target.value)
                }
              />
            </div>

            <button
              type="submit"
              className="dieta-submit-button"
            >
              + Adicionar dieta
            </button>
          </form>
        </article>

        <section className="dieta-list-section">
          <div className="dieta-list-header">
            <div className="dieta-section-heading">
              <span>BIBLIOTECA</span>
              <h2>Dietas cadastradas</h2>
            </div>

            <span className="dieta-count">
              {dietasFiltradas.length} resultado(s)
            </span>
          </div>

          <div className="dieta-filters">
            <input
              type="search"
              placeholder="Buscar dieta..."
              value={busca}
              onChange={(event) =>
                setBusca(event.target.value)
              }
            />

            <select
              value={objetivoFiltro}
              onChange={(event) =>
                setObjetivoFiltro(event.target.value)
              }
            >
              <option>Todos</option>
              <option>Ganho de massa muscular</option>
              <option>Redução de gordura</option>
              <option>Performance</option>
              <option>Manutenção</option>
            </select>

            <select
              value={nivelFiltro}
              onChange={(event) =>
                setNivelFiltro(event.target.value)
              }
            >
              <option>Todos</option>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
          </div>

          <div className="dieta-list">
            {dietasFiltradas.length === 0 ? (
              <div className="dietas-empty">
                <strong>Nenhuma dieta encontrada.</strong>

                <span>
                  Tente alterar a busca ou os filtros.
                </span>
              </div>
            ) : (
              dietasFiltradas.map((dieta) => (
                <article
                  className="dieta-admin-card"
                  key={dieta.id}
                >
                  <div className="dieta-icon">
                    D
                  </div>

                  <div className="dieta-info">
                    <div className="dieta-title-row">
                      <h3>{dieta.nome}</h3>

                      <span className="dieta-level">
                        {dieta.nivel}
                      </span>
                    </div>

                    <div className="dieta-meta">
                      <span>{dieta.objetivo}</span>
                      <span>•</span>
                      <span>{dieta.calorias} kcal</span>
                      <span>•</span>
                      <span>
                        {dieta.refeicoes} refeições
                      </span>
                    </div>

                    <p>{dieta.descricao}</p>
                  </div>

                  <button
                    type="button"
                    className="dieta-delete-button"
                    onClick={() =>
                      removerDieta(dieta.id)
                    }
                    aria-label={`Excluir ${dieta.nome}`}
                  >
                    Excluir
                  </button>
                </article>
              ))
            )}
          </div>
        </section>
      </section>
    </main>
  );
}

export default DietasAdmin;
