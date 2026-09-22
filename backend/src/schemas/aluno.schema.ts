import { z } from "zod";

// SCHEMA DE CADASTRO
export const criarAlunoSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido"),
  senha: z.string().min(6, "A senha deve ter pelo menos 6 caracteres")
});

// SCHEMA DE ATUALIZAÇÃO
export const atualizarAlunoSchema = z.object({
  nome: z.string().min(3, "O nome deve ter pelo menos 3 caracteres"),
  email: z.string().email("E-mail inválido")
});

// SCHEMA DE LOGIN
export const loginSchema = criarAlunoSchema.pick({
  email: true,
  senha: true
});