// Order Service - Order management with local persistence

import { Cart, CartItem } from './cartService';

export interface CustomerData {
  name: string;
  email: string;
  phone: string;
}

export interface DeliveryAddress {
  street: string;
  number: string;
  complement?: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface Order {
  id: string;
  code: string;
  status: OrderStatus;
  items: CartItem[];
  customer: CustomerData;
  deliveryAddress?: DeliveryAddress;
  deliveryMethod: 'delivery' | 'pickup';
  paymentMethod: 'pix' | 'card' | 'cash';
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  couponCode?: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
  estimatedDelivery?: Date;
  pixChargeId?: string;
}

export type OrderStatus = 
  | 'pending_payment'
  | 'payment_confirmed'
  | 'preparing'
  | 'ready'
  | 'delivering'
  | 'delivered'
  | 'cancelled';

export const ORDER_STATUS_LABELS: Record<OrderStatus, string> = {
  pending_payment: 'Aguardando pagamento',
  payment_confirmed: 'Pagamento confirmado',
  preparing: 'Preparando',
  ready: 'Pronto para entrega',
  delivering: 'Saiu para entrega',
  delivered: 'Entregue',
  cancelled: 'Cancelado'
};

const ORDERS_STORAGE_KEY = 'divino_sabor_orders';

type StoredOrder = Omit<Order, 'createdAt' | 'updatedAt' | 'estimatedDelivery'> & {
  createdAt: string;
  updatedAt: string;
  estimatedDelivery?: string;
};

// Generate order code
const generateOrderCode = (): string => {
  const timestamp = Date.now().toString(36).toUpperCase();
  const random = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `${timestamp}${random}`;
};

// Generate order ID
const generateOrderId = (): string => {
  return `order_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
};

// Create new order - saves to database
export const createOrder = async (
  cart: Cart,
  customer: CustomerData,
  deliveryAddress: DeliveryAddress | undefined,
  deliveryMethod: 'delivery' | 'pickup',
  paymentMethod: 'pix' | 'card' | 'cash',
  notes?: string
): Promise<Order> => {
  const now = new Date();
  const estimatedMinutes = deliveryMethod === 'delivery' ? 45 : 30;
  
  const orderId = generateOrderId();
  const orderCode = generateOrderCode();
  
  const order: Order = {
    id: orderId,
    code: orderCode,
    status: paymentMethod === 'cash' ? 'payment_confirmed' : 'pending_payment',
    items: cart.items,
    customer,
    deliveryAddress,
    deliveryMethod,
    paymentMethod,
    subtotal: cart.subtotal,
    deliveryFee: deliveryMethod === 'delivery' ? cart.deliveryFee : 0,
    discount: cart.discount,
    total: cart.total,
    couponCode: cart.couponCode,
    notes,
    createdAt: now,
    updatedAt: now,
    estimatedDelivery: new Date(now.getTime() + estimatedMinutes * 60 * 1000)
  };
  saveOrder(order);
  return order;
};

// Get order by ID from storage
export const getOrderById = async (orderId: string): Promise<Order | null> => {
  const orders = loadOrders();
  return orders.find(order => order.id === orderId) || null;
};

// Get order by code from storage
export const getOrderByCode = async (code: string): Promise<Order | null> => {
  const orders = loadOrders();
  return orders.find(order => order.code === code) || null;
};

// Update order status
export const updateOrderStatus = async (orderId: string, status: OrderStatus): Promise<Order | null> => {
  const orders = loadOrders();
  const index = orders.findIndex(order => order.id === orderId);
  if (index === -1) {
    return null;
  }

  const updated = {
    ...orders[index],
    status,
    updatedAt: new Date(),
  };

  orders[index] = updated;
  saveOrders(orders);
  return updated;
};

// Get user's order history
export const getOrderHistory = async (): Promise<Order[]> => {
  const orders = loadOrders();
  return orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()).slice(0, 20);
};

function loadOrders(): Order[] {
  try {
    const raw = localStorage.getItem(ORDERS_STORAGE_KEY);
    if (!raw) return [];
    const stored = JSON.parse(raw) as StoredOrder[];
    return stored.map(fromStoredOrder);
  } catch (error) {
    console.error('Error loading orders:', error);
    return [];
  }
}

function saveOrders(orders: Order[]) {
  try {
    const stored = orders.map(toStoredOrder);
    localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(stored));
  } catch (error) {
    console.error('Error saving orders:', error);
  }
}

function saveOrder(order: Order) {
  const orders = loadOrders();
  orders.unshift(order);
  saveOrders(orders);
}

function toStoredOrder(order: Order): StoredOrder {
  return {
    ...order,
    createdAt: order.createdAt.toISOString(),
    updatedAt: order.updatedAt.toISOString(),
    estimatedDelivery: order.estimatedDelivery?.toISOString(),
  };
}

function fromStoredOrder(order: StoredOrder): Order {
  return {
    ...order,
    items: (Array.isArray(order.items) ? order.items : []) as CartItem[],
    createdAt: new Date(order.createdAt),
    updatedAt: new Date(order.updatedAt),
    estimatedDelivery: order.estimatedDelivery ? new Date(order.estimatedDelivery) : undefined,
  };
}
