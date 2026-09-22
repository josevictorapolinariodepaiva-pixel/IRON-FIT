export const tiposUsuario = [
  "aluno",
  "professor",
  "administrador"
] as const;

export type TipoUsuario = (typeof tiposUsuario)[number];

export interface UsuarioAutenticado {
  id: number;
  tipo: TipoUsuario;
}

export function normalizarTipoUsuario(tipo: string): TipoUsuario | null {
  if (tipo === "admin") {
    return "administrador";
  }

  return tiposUsuario.includes(tipo as TipoUsuario)
    ? (tipo as TipoUsuario)
    : null;
}
