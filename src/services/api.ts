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

export function getApiBase() {
  const base = import.meta.env.VITE_API_BASE;

  if (!base) throw new Error("VITE_API_BASE não definido");

  // ✅ Só força backend.divinosabor.shop em produção
  if (!import.meta.env.DEV) {
    if (base !== "https://backend.divinosabor.shop") {
      throw new Error("VITE_API_BASE deve apontar para https://backend.divinosabor.shop");
    }
  }

  return base;
}

async function requestJson<T>(
  path: string,
  options: RequestInit,
  fallbackError: string
): Promise<T> {
  const resp = await fetch(`${getApiBase()}${path}`, options);
  const data = await resp.json().catch(() => ({}));

  if (!resp.ok) {
    throw new Error((data as any)?.erro || fallbackError);
  }

  return data as T;
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
