import {
  createContext,
  ReactNode,
  useContext,
  useState
} from "react";

import type { TipoUsuario, UsuarioLogado } from "../types/Auth";

interface AuthContextData {
  usuario: UsuarioLogado | null;
  login: (email: string, senha: string, tipo: TipoUsuario) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogado | null>(null);

  const login = (email: string, senha: string, tipo: TipoUsuario) => {
    if (!email || !senha) return;

    const novoUsuario: UsuarioLogado = {
      id: 1,
      nome: tipo === "admin" ? "Administrador" : "Aluno",
      email,
      tipo
    };

    setUsuario(novoUsuario);
  };

  const logout = () => {
    setUsuario(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth deve ser utilizado dentro de AuthProvider");
  }

  return context;
}
