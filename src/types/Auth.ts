export type TipoUsuario = "aluno" | "admin";

export interface UsuarioLogado {
  id: number;
  nome: string;
  email: string;
  tipo: TipoUsuario;
}
