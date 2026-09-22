export interface User {
  id: number;
  nome: string;
  email: string;
  tipo: "aluno" | "professor" | "administrador";
}
