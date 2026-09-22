import "dotenv/config";
import jwt from "jsonwebtoken";
import {
  normalizarTipoUsuario,
  type TipoUsuario,
  type UsuarioAutenticado
} from "../types/auth";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET não configurado no .env");
}

const jwtSecret: string = JWT_SECRET;

export function gerarToken(
  usuarioId: number,
  tipo: string
) {
  const tipoNormalizado = normalizarTipoUsuario(tipo);

  if (!tipoNormalizado) {
    throw new Error("TIPO_USUARIO_INVALIDO");
  }

  return jwt.sign(
    {
      id: usuarioId,
      tipo: tipoNormalizado
    },
    jwtSecret,
    {
      expiresIn: "1d"
    }
  );
}

export function verificarToken(token: string): UsuarioAutenticado | null {
  try {
    const payload = jwt.verify(token, jwtSecret) as jwt.JwtPayload;
    const id = payload.id;
    const tipo = payload.tipo;

    if (typeof id !== "number" || !Number.isInteger(id) || id <= 0) {
      return null;
    }

    if (typeof tipo !== "string") {
      return null;
    }

    const tipoNormalizado = normalizarTipoUsuario(tipo);

    return tipoNormalizado ? { id, tipo: tipoNormalizado } : null;
  } catch {
    return null;
  }
}

export type { TipoUsuario };
