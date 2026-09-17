import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  throw new Error("JWT_SECRET não configurado no .env");
}

export function gerarToken(
  usuarioId: number,
  tipo: string
) {
  return jwt.sign(
    {
      id: usuarioId,
      tipo
    },
    JWT_SECRET!,
    {
      expiresIn: "1d"
    }
  );
}