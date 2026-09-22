import type { TipoUsuario, UsuarioLogado } from "../types/Auth";

const apiUrl = import.meta.env.VITE_API_URL ?? "http://localhost:3000";

interface RespostaErroApi {
  mensagem?: string;
}

export class ErroApi extends Error {
  public readonly status: number;

  constructor(
    status: number,
    mensagem: string
  ) {
    super(mensagem);
    this.status = status;
  }
}

interface UsuarioApi {
  id: number;
  nome: string;
  email: string;
  tipo: TipoUsuario;
}

export interface RespostaLogin {
  token: string;
  usuario: UsuarioLogado;
}

export interface DadosCadastro {
  nome: string;
  email: string;
  senha: string;
}

interface OpcoesRequisicao extends RequestInit {
  token?: string;
}

function normalizarUsuario(usuario: UsuarioApi): UsuarioLogado {
  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    tipo: usuario.tipo
  };
}

async function lerResposta(response: Response): Promise<unknown> {
  const contentType = response.headers.get("content-type");

  return contentType?.includes("application/json")
    ? response.json()
    : null;
}

export async function requisicaoApi<T>(
  caminho: string,
  opcoes: OpcoesRequisicao = {}
): Promise<T> {
  const { token, headers, ...opcoesFetch } = opcoes;
  const cabecalhos = new Headers(headers);

  if (opcoes.body) {
    cabecalhos.set("Content-Type", "application/json");
  }

  if (token) {
    cabecalhos.set("Authorization", `Bearer ${token}`);
  }

  let response: Response;

  try {
    response = await fetch(`${apiUrl}${caminho}`, {
      ...opcoesFetch,
      headers: cabecalhos
    });
  } catch {
    throw new ErroApi(0, "Não foi possível conectar ao servidor. Tente novamente.");
  }

  const dados = await lerResposta(response);

  if (!response.ok) {
    const mensagem = typeof dados === "object" && dados !== null
      ? (dados as RespostaErroApi).mensagem
      : undefined;

    throw new ErroApi(
      response.status,
      mensagem ?? "Não foi possível concluir a solicitação."
    );
  }

  return dados as T;
}

export async function cadastrarAluno(
  dados: DadosCadastro
): Promise<UsuarioLogado> {
  const usuario = await requisicaoApi<UsuarioApi>("/alunos", {
    method: "POST",
    body: JSON.stringify(dados)
  });

  return normalizarUsuario(usuario);
}

export async function entrarAluno(
  email: string,
  senha: string
): Promise<RespostaLogin> {
  const resposta = await requisicaoApi<{ token: string; usuario: UsuarioApi }>(
    "/alunos/login",
    {
      method: "POST",
      body: JSON.stringify({ email, senha })
    }
  );

  return {
    token: resposta.token,
    usuario: normalizarUsuario(resposta.usuario)
  };
}
