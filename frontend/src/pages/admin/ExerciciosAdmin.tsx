import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { Link } from "react-router-dom";
import "./ExerciciosAdmin.css";

type Exercicio = {
  id: number;
  nome: string;
  grupoMuscular: string;
  equipamento: string;
  nivel: string;
  descricao: string;
};

const exerciciosIniciais: Exercicio[] = [
  {
    id: 1,
    nome: "Supino reto",
    grupoMuscular: "Peito",
    equipamento: "Barra",
    nivel: "Iniciante",
    descricao: "Exercício para desenvolvimento do peitoral.",
  },
  {
    id: 2,
    nome: "Agachamento livre",
    grupoMuscular: "Pernas",
    equipamento: "Barra",
    nivel: "Intermediário",
    descricao: "Exercício composto para membros inferiores.",
  },
  {
    id: 3,
    nome: "Puxada frontal",
    grupoMuscular: "Costas",
    equipamento: "Máquina",
    nivel: "Iniciante",
    descricao: "Exercício para dorsais e região superior das costas.",
  },
  {
    id: 4,
    nome: "Rosca direta",
    grupoMuscular: "Bíceps",
    equipamento: "Barra",
    nivel: "Iniciante",
    descricao: "Exercício para fortalecimento dos bíceps.",
  },
  {
    id: 5,
    nome: "Desenvolvimento de ombros",
    grupoMuscular: "Ombros",
    equipamento: "Halteres",
    nivel: "Intermediário",
    descricao: "Exercício para desenvolvimento dos deltoides.",
  },
];

function ExerciciosAdmin() {
  const [exercicios, setExercicios] =
    useState<Exercicio[]>(exerciciosIniciais);

  const [busca, setBusca] = useState("");
  const [grupoFiltro, setGrupoFiltro] = useState("Todos");
  const [nivelFiltro, setNivelFiltro] = useState("Todos");

  const [nome, setNome] = useState("");
  const [grupoMuscular, setGrupoMuscular] = useState("Peito");
  const [equipamento, setEquipamento] = useState("Barra");
  const [nivel, setNivel] = useState("Iniciante");
  const [descricao, setDescricao] = useState("");

  const exerciciosFiltrados = useMemo(() => {
    return exercicios.filter((exercicio) => {
      const correspondeBusca =
        exercicio.nome.toLowerCase().includes(busca.toLowerCase()) ||
        exercicio.grupoMuscular
          .toLowerCase()
          .includes(busca.toLowerCase());

      const correspondeGrupo =
        grupoFiltro === "Todos" ||
        exercicio.grupoMuscular === grupoFiltro;

      const correspondeNivel =
        nivelFiltro === "Todos" || exercicio.nivel === nivelFiltro;

      return correspondeBusca && correspondeGrupo && correspondeNivel;
    });
  }, [exercicios, busca, grupoFiltro, nivelFiltro]);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    if (!nome.trim()) {
      return;
    }

    const novoExercicio: Exercicio = {
      id: Date.now(),
      nome: nome.trim(),
      grupoMuscular,
      equipamento,
      nivel,
      descricao: descricao.trim() || "Sem descrição cadastrada.",
    };

    setExercicios((listaAtual) => [novoExercicio, ...listaAtual]);

    setNome("");
    setDescricao("");
    setGrupoMuscular("Peito");
    setEquipamento("Barra");
    setNivel("Iniciante");
  };

  const removerExercicio = (id: number) => {
    setExercicios((listaAtual) =>
      listaAtual.filter((exercicio) => exercicio.id !== id)
    );
  };

  return (
    <main className="exercicios-admin-page">
      <header className="exercicios-admin-header">
        <div>
          <span className="admin-eyebrow">IRONFIT • ADMINISTRAÇÃO</span>
          <h1>Exercícios</h1>
          <p>
            Cadastre e organize os exercícios disponíveis na plataforma.
          </p>
        </div>

        <Link to="/admin" className="admin-back-link">
          ← Voltar ao dashboard
        </Link>
      </header>

      <section className="exercicios-admin-stats">
        <article className="exercise-stat">
          <span>Total de exercícios</span>
          <strong>{exercicios.length}</strong>
        </article>

        <article className="exercise-stat">
          <span>Peito</span>
          <strong>
            {exercicios.filter((item) => item.grupoMuscular === "Peito").length}
          </strong>
        </article>

        <article className="exercise-stat">
          <span>Pernas</span>
          <strong>
            {exercicios.filter((item) => item.grupoMuscular === "Pernas").length}
          </strong>
        </article>

        <article className="exercise-stat">
          <span>Iniciantes</span>
          <strong>
            {exercicios.filter((item) => item.nivel === "Iniciante").length}
          </strong>
        </article>
      </section>

      <section className="exercise-admin-grid">
        <article className="exercise-form-card">
          <div className="section-heading">
            <span>NOVO EXERCÍCIO</span>
            <h2>Cadastrar exercício</h2>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="form-field">
              <label htmlFor="nome">Nome do exercício</label>
              <input
                id="nome"
                type="text"
                placeholder="Ex.: Supino inclinado"
                value={nome}
                onChange={(event) => setNome(event.target.value)}
                required
              />
            </div>

            <div className="form-row">
              <div className="form-field">
                <label htmlFor="grupo">Grupo muscular</label>
                <select
                  id="grupo"
                  value={grupoMuscular}
                  onChange={(event) => setGrupoMuscular(event.target.value)}
                >
                  <option>Peito</option>
                  <option>Costas</option>
                  <option>Pernas</option>
                  <option>Bíceps</option>
                  <option>Tríceps</option>
                  <option>Ombros</option>
                  <option>Abdômen</option>
                  <option>Glúteos</option>
                </select>
              </div>

              <div className="form-field">
                <label htmlFor="equipamento">Equipamento</label>
                <select
                  id="equipamento"
                  value={equipamento}
                  onChange={(event) => setEquipamento(event.target.value)}
                >
                  <option>Barra</option>
                  <option>Halteres</option>
                  <option>Máquina</option>
                  <option>Cabo</option>
                  <option>Peso corporal</option>
                  <option>Kettlebell</option>
                </select>
              </div>
            </div>

            <div className="form-field">
              <label htmlFor="nivel">Nível</label>
              <select
                id="nivel"
                value={nivel}
                onChange={(event) => setNivel(event.target.value)}
              >
                <option>Iniciante</option>
                <option>Intermediário</option>
                <option>Avançado</option>
              </select>
            </div>

            <div className="form-field">
              <label htmlFor="descricao">Descrição</label>
              <textarea
                id="descricao"
                placeholder="Explique brevemente como o exercício é realizado."
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
                rows={4}
              />
            </div>

            <button type="submit" className="exercise-submit-button">
              + Adicionar exercício
            </button>
          </form>
        </article>

        <section className="exercise-list-section">
          <div className="exercise-list-header">
            <div className="section-heading">
              <span>BIBLIOTECA</span>
              <h2>Exercícios cadastrados</h2>
            </div>

            <span className="exercise-count">
              {exerciciosFiltrados.length} resultado(s)
            </span>
          </div>

          <div className="exercise-filters">
            <input
              type="search"
              placeholder="Buscar exercício..."
              value={busca}
              onChange={(event) => setBusca(event.target.value)}
            />

            <select
              value={grupoFiltro}
              onChange={(event) => setGrupoFiltro(event.target.value)}
            >
              <option>Todos</option>
              <option>Peito</option>
              <option>Costas</option>
              <option>Pernas</option>
              <option>Bíceps</option>
              <option>Tríceps</option>
              <option>Ombros</option>
              <option>Abdômen</option>
              <option>Glúteos</option>
            </select>

            <select
              value={nivelFiltro}
              onChange={(event) => setNivelFiltro(event.target.value)}
            >
              <option>Todos</option>
              <option>Iniciante</option>
              <option>Intermediário</option>
              <option>Avançado</option>
            </select>
          </div>

          <div className="exercise-list">
            {exerciciosFiltrados.length === 0 ? (
              <div className="empty-exercises">
                <strong>Nenhum exercício encontrado.</strong>
                <span>
                  Tente alterar a busca ou os filtros selecionados.
                </span>
              </div>
            ) : (
              exerciciosFiltrados.map((exercicio) => (
                <article className="exercise-admin-card" key={exercicio.id}>
                  <div className="exercise-icon">
                    {exercicio.grupoMuscular.charAt(0)}
                  </div>

                  <div className="exercise-info">
                    <div className="exercise-title-row">
                      <h3>{exercicio.nome}</h3>

                      <span className="exercise-level">
                        {exercicio.nivel}
                      </span>
                    </div>

                    <div className="exercise-meta">
                      <span>{exercicio.grupoMuscular}</span>
                      <span>•</span>
                      <span>{exercicio.equipamento}</span>
                    </div>

                    <p>{exercicio.descricao}</p>
                  </div>

                  <button
                    type="button"
                    className="exercise-delete-button"
                    onClick={() => removerExercicio(exercicio.id)}
                    aria-label={`Excluir ${exercicio.nome}`}
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

export default ExerciciosAdmin;
