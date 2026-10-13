import {
  createContext,
  useContext,
  useState,
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

const AUTH_STORAGE_KEY = "ironfit_auth";

interface DadosAutenticacao {
  usuario: UsuarioLogado;
  token: string;
}

function recuperarAutenticacao(): DadosAutenticacao | null {
  try {
    const dados = sessionStorage.getItem(AUTH_STORAGE_KEY);

    if (!dados) {
      return null;
    }

    const autenticacao = JSON.parse(dados) as DadosAutenticacao;

    if (!autenticacao.usuario || !autenticacao.token) {
      sessionStorage.removeItem(AUTH_STORAGE_KEY);
      return null;
    }

    return autenticacao;
  } catch {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    return null;
  }
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [autenticacao, setAutenticacao] =
    useState<DadosAutenticacao | null>(recuperarAutenticacao);

  const login = (resposta: RespostaLogin) => {
    const novosDados: DadosAutenticacao = {
      usuario: resposta.usuario,
      token: resposta.token,
    };

    sessionStorage.setItem(
      AUTH_STORAGE_KEY,
      JSON.stringify(novosDados)
    );

    setAutenticacao(novosDados);
  };

  const logout = () => {
    sessionStorage.removeItem(AUTH_STORAGE_KEY);
    setAutenticacao(null);
  };

  return (
    <AuthContext.Provider
      value={{
        usuario: autenticacao?.usuario ?? null,
        token: autenticacao?.token ?? null,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth deve ser utilizado dentro de AuthProvider"
    );
  }

  return context;
}