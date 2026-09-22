import type { NextFunction, Request, Response } from "express";
import { verificarToken, type TipoUsuario } from "../config/auth";

export function autenticar(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;

  if (!authorization) {
    return res.status(401).json({ mensagem: "Token de autenticação ausente" });
  }

  const [esquema, token, ...partesExtras] = authorization.split(" ");

  if (esquema !== "Bearer" || !token || partesExtras.length > 0) {
    return res.status(401).json({ mensagem: "Token de autenticação inválido" });
  }

  const usuario = verificarToken(token);

  if (!usuario) {
    return res.status(401).json({ mensagem: "Token de autenticação inválido ou expirado" });
  }

  req.usuario = usuario;
  return next();
}

export function autorizar(...tiposPermitidos: TipoUsuario[]) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.usuario || !tiposPermitidos.includes(req.usuario.tipo)) {
      return res.status(403).json({ mensagem: "Você não tem permissão para esta ação" });
    }

    return next();
  };
}
