export type CartItemPayload = {
  sku: string;
  qty: number;
};

export type CreatePaymentPayload = {
  nome: string;
  telefone: string;
  cpf: string;
  items: CartItemPayload[];
};

export type CreatePaymentResponse = {
  pedido_id: number;
  transacao_id: string;
  total_cents: number;
  total_reais: string;
  pix: {
    qr_code: string;
    url: string | null;
    expiration_date: string;
    e2_e: string | null;
    copy_paste_code?: string;
    qr_image?: string | null;
  };
};

export type PedidoStatusResponse = {
  id: number;
  nome: string;
  telefone: string;
  valor: number;
  status: "AGUARDANDO" | "PAGO" | string;
  transacao_id: string;
  items?: string;
  total_cents?: number;
};

export type OrderMeta = {
  restaurantName?: string;
  paymentMethod?: string;
  customerName?: string;
  customerPhone?: string;
  address?: {
    street?: string;
    number?: string;
    complement?: string;
    neighborhood?: string;
    city?: string;
    state?: string;
    zipCode?: string;
  } | null;
  items?: Array<{
    name: string;
    size?: string;
    qty: number;
    price: number;
  }>;
  totalReais?: string;
  createdAt?: string;
};

export const PROD_API_BASE = "https://api.divinosabor.shop";

export function getApiBase() {
  const base = String(import.meta.env.VITE_API_BASE || "").trim();

  if (!base) throw new Error("VITE_API_BASE não definido");

  if (typeof window !== "undefined") {
    const hostname = window.location.hostname;
    const isLocalhost =
      hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";

    // ✅ Só força api.divinosabor.shop em produção (host não-local)
    if (!isLocalhost && base !== PROD_API_BASE) {
      throw new Error("VITE_API_BASE deve apontar para https://api.divinosabor.shop");
    }
  }

  return base.replace(/\/+$/, "");
}

async function requestJson<T>(
  path: string,
  options: RequestInit,
  fallbackError: string
): Promise<T> {
  const resp = await fetch(`${getApiBase()}${path}`, options);
  const rawText = await resp.text();
  let data: any = null;
  try {
    data = rawText ? JSON.parse(rawText) : null;
  } catch {
    data = null;
  }

  if (!resp.ok) {
    if (resp.status === 400) {
      console.error("API 400:", data ?? rawText);
    }
    throw new Error((data as any)?.erro || fallbackError);
  }

  return (data ?? {}) as T;
}

export async function createPayment(
  payload: CreatePaymentPayload
): Promise<CreatePaymentResponse> {
  return requestJson<CreatePaymentResponse>(
    "/create-payment",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    },
    "Erro ao criar pagamento Pix"
  );
}

export async function getOrder(pedidoId: number): Promise<PedidoStatusResponse> {
  return requestJson<PedidoStatusResponse>(
    `/pedido/${pedidoId}`,
    {},
    "Erro ao consultar pedido"
  );
}

export async function getOrderMeta(pedidoId: number): Promise<OrderMeta> {
  return requestJson<OrderMeta>(
    `/pedido/${pedidoId}/meta`,
    {},
    "Erro ao buscar meta do pedido"
  );
}

export async function saveOrderMeta(pedidoId: number, meta: OrderMeta): Promise<void> {
  await requestJson<void>(
    `/pedido/${pedidoId}/meta`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(meta),
    },
    "Erro ao salvar meta do pedido"
  );
}
