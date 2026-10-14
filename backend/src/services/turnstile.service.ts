const TURNSTILE_VERIFY_URL =
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

interface TurnstileResponse {
  success: boolean;
  "error-codes"?: string[];
}

export async function validarTurnstile(
  token: string
): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;

  if (!secret || !token || token.length > 2048) {
    console.error("Turnstile: configuração ou token inválido.");
    return false;
  }

  try {
    const response = await fetch(TURNSTILE_VERIFY_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams({
        secret,
        response: token
      }),
      signal: AbortSignal.timeout(10000)
    });

    if (!response.ok) {
      console.error("Turnstile: falha na comunicação com a Cloudflare.");
      return false;
    }

    const resultado =
      (await response.json()) as TurnstileResponse;

    if (!resultado.success) {
      console.error(
        "Turnstile rejeitou o token:",
        resultado["error-codes"] ?? []
      );
    }

    return resultado.success === true;
  } catch (error) {
    console.error("Turnstile: erro ao validar o token.");
    return false;
  }
}