import { FormEvent, useState } from "react";
import Navbar from "../../components/Navbar";

function VideosAdmin() {

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [url, setUrl] = useState("");
  const [categoria, setCategoria] = useState("");
  const [nivel, setNivel] = useState<
    "iniciante" | "intermediario" | "avancado"
  >("iniciante");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log({
      titulo,
      descricao,
      url,
      categoria,
      nivel
    });

    alert("Vídeo cadastrado com sucesso!");

    setTitulo("");
    setDescricao("");
    setUrl("");
    setCategoria("");
    setNivel("iniciante");
  };

  return (
    <>
      <Navbar tipo="admin" />

      <main>

        <div className="form-container">

          <h1>Cadastrar Vídeo</h1>

          <p>
            Adicione uma nova videoaula para os alunos.
          </p>

          <form onSubmit={handleSubmit}>

            <div className="form-group">
              <label htmlFor="titulo">
                Título
              </label>

              <input
                id="titulo"
                value={titulo}
                onChange={(event) => setTitulo(event.target.value)}
                placeholder="Treino de Peito"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="descricao">
                Descrição
              </label>

              <textarea
                id="descricao"
                value={descricao}
                onChange={(event) => setDescricao(event.target.value)}
                placeholder="Descrição da videoaula"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="url">
                URL do YouTube
              </label>

              <input
                id="url"
                type="url"
                value={url}
                onChange={(event) => setUrl(event.target.value)}
                placeholder="https://youtube.com/watch?v=..."
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="categoria">
                Categoria
              </label>

              <select
                id="categoria"
                value={categoria}
                onChange={(event) => setCategoria(event.target.value)}
                required
              >
                <option value="">
                  Selecione
                </option>

                <option value="Peito">Peito</option>
                <option value="Costas">Costas</option>
                <option value="Pernas">Pernas</option>
                <option value="Ombros">Ombros</option>
                <option value="Bíceps">Bíceps</option>
                <option value="Tríceps">Tríceps</option>
                <option value="Abdômen">Abdômen</option>
                <option value="Cardio">Cardio</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="nivel">
                Nível
              </label>

              <select
                id="nivel"
                value={nivel}
                onChange={(event) =>
                  setNivel(
                    event.target.value as
                      | "iniciante"
                      | "intermediario"
                      | "avancado"
                  )
                }
              >
                <option value="iniciante">
                  Iniciante
                </option>

                <option value="intermediario">
                  Intermediário
                </option>

                <option value="avancado">
                  Avançado
                </option>
              </select>
            </div>

            <button
              className="form-submit"
              type="submit"
            >
              Cadastrar vídeo
            </button>

          </form>

        </div>

      </main>
    </>
  );
}

export default VideosAdmin;
