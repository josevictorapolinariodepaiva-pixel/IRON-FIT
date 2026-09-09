export interface Video {
  id: number;
  titulo: string;
  descricao: string;
  url: string;
  categoria: string;
  nivel: "iniciante" | "intermediario" | "avancado";
}
