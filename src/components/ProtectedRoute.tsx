import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { useAuth } from "../context/AuthContext";
import type { TipoUsuario } from "../types/Auth";

interface ProtectedRouteProps {
  children: ReactNode;
  tipo: TipoUsuario;
}

function ProtectedRoute({
  children,
  tipo
}: ProtectedRouteProps) {

  const { usuario } = useAuth();

  if (!usuario) {
    return <Navigate to="/login" replace />;
  }

  if (usuario.tipo !== tipo) {
    return (
      <Navigate
        to={usuario.tipo === "admin" ? "/admin" : "/aluno"}
        replace
      />
    );
  }

  return <>{children}</>;
}

export default ProtectedRoute;
