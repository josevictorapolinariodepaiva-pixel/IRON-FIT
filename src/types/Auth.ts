export type TipoUsuario = "aluno" | "professor" | "administrador";

export interface UsuarioLogado {
  id: number;
  nome: string;
  email: string;
  tipo: TipoUsuario;
}
