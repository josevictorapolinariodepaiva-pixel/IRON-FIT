import { z } from "zod";

// VALIDAÇÃO PARA CADASTRO
export const criarAlunoSchema = z.object({
  nome: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres"),

  email: z
    .string()
    .email("E-mail inválido"),

  senha: z
    .string()
    .min(6, "A senha deve ter pelo menos 6 caracteres")
});

// VALIDAÇÃO PARA ATUALIZAÇÃO
export const atualizarAlunoSchema = z.object({
  nome: z
    .string()
    .min(3, "O nome deve ter pelo menos 3 caracteres"),

  email: z
    .string()
    .email("E-mail inválido")
});
