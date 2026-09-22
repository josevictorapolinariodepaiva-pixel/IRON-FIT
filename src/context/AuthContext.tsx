import {
  createContext,
  useContext,
  useState
} from "react";
import type { ReactNode } from "react";

import type { UsuarioLogado } from "../types/Auth";
import type { RespostaLogin } from "../services/api";

interface AuthContextData {
  usuario: UsuarioLogado | null;
  token: string | null;
  login: (resposta: RespostaLogin) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextData | undefined>(undefined);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [usuario, setUsuario] = useState<UsuarioLogado | null>(null);
  const [token, setToken] = useState<string | null>(null);

  const login = (resposta: RespostaLogin) => {
    setUsuario(resposta.usuario);
    setToken(resposta.token);
  };

  const logout = () => {
    setUsuario(null);
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ usuario, token, login, logout }}>
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
