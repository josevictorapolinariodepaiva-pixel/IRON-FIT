import type { Video } from "../types/Video";

export const videos: Video[] = [
  {
    id: 1,
    titulo: "Treino de Peito para Iniciantes",
    descricao: "Treino completo de peito para quem está começando.",
    url: "https://www.youtube.com/watch?v=VIDEO_EXEMPLO_1",
    categoria: "Peito",
    nivel: "iniciante"
  },
  {
    id: 2,
    titulo: "Treino de Pernas Completo",
    descricao: "Treino completo para trabalhar os principais músculos das pernas.",
    url: "https://www.youtube.com/watch?v=VIDEO_EXEMPLO_2",
    categoria: "Pernas",
    nivel: "intermediario"
  },
  {
    id: 3,
    titulo: "Treino de Costas",
    descricao: "Exercícios para desenvolver força e musculatura das costas.",
    url: "https://www.youtube.com/watch?v=VIDEO_EXEMPLO_3",
    categoria: "Costas",
    nivel: "avancado"
  }
];
