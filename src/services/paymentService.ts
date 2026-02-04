// src/services/paymentService.ts

import {
  createPayment,
  getOrder,
  type CreatePaymentPayload,
  type CreatePaymentResponse,
  type PedidoStatusResponse,
} from "@/services/api";

/* ------------------------------------------------------------------
   TIPOS
------------------------------------------------------------------ */

export type { CreatePaymentPayload, CreatePaymentResponse, PedidoStatusResponse };

/* ------------------------------------------------------------------
   FUNÇÕES PRINCIPAIS (BACKEND NOVO)
------------------------------------------------------------------ */

export async function criarPagamentoPix(
  payload: CreatePaymentPayload
): Promise<CreatePaymentResponse> {
  return createPayment(payload);
}

export async function consultarPedido(
  pedidoId: number
): Promise<PedidoStatusResponse> {
  return getOrder(pedidoId);
}

/* ------------------------------------------------------------------
   FUNÇÕES AUXILIARES
------------------------------------------------------------------ */

export function formatCurrency(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value || 0);
}

/* ------------------------------------------------------------------
   COMPATIBILIDADE COM CÓDIGO ANTIGO (aliases)
------------------------------------------------------------------ */

// criação de pagamento
export async function createPixPayment(payload: CreatePaymentPayload) {
  return criarPagamentoPix(payload);
}
export async function createPayment(payload: CreatePaymentPayload) {
  return criarPagamentoPix(payload);
}

// status/polling por pedidoId
export async function getOrderStatus(pedidoId: number) {
  return consultarPedido(pedidoId);
}
export async function getPaymentStatus(pedidoId: number) {
  return consultarPedido(pedidoId);
}
export async function pixStatus(pedidoId: number) {
  return consultarPedido(pedidoId);
}
export async function checkPixStatus(pedidoId: number) {
  return consultarPedido(pedidoId);
}

// ✅ O ConfirmationPage antigo provavelmente chamava isso (por "orderId").
// No nosso backend novo, a consulta é por pedido_id.
// Então aqui é um alias: você deve passar o pedido_id.
export async function getPixChargeByOrderId(orderId: number) {
  return consultarPedido(orderId);
}

/* ------------------------------------------------------------------
   EXPORT DEFAULT
------------------------------------------------------------------ */

export default {
  criarPagamentoPix,
  consultarPedido,
  createPixPayment,
  createPayment,
  getOrderStatus,
  getPaymentStatus,
  pixStatus,
  checkPixStatus,
  getPixChargeByOrderId,
  formatCurrency,
};