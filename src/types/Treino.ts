export interface Treino {
  id: number;
  nome: string;
  descricao: string;
  nivel: "iniciante" | "intermediario" | "avancado";
  duracao: number;
}
