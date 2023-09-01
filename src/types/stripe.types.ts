export interface StripePaymentIntentSucceededResponse {
  id: string;
  object: string;
  amount: number;
  amount_capturable: number;
  amount_details: AmountDetails;
  amount_received: number;
  application: any;
  application_fee_amount: any;
  automatic_payment_methods: any;
  canceled_at: any;
  cancellation_reason: any;
  capture_method: string;
  client_secret: string;
  confirmation_method: string;
  created: number;
  currency: string;
  customer: any;
  description: string;
  invoice: any;
  last_payment_error: any;
  latest_charge: string;
  livemode: boolean;
  metadata: Metadata;
  next_action: any;
  on_behalf_of: any;
  payment_method: string;
  payment_method_options: PaymentMethodOptions;
  payment_method_types: string[];
  processing: any;
  receipt_email: any;
  review: any;
  setup_future_usage: any;
  shipping: Shipping;
  source: any;
  statement_descriptor: any;
  statement_descriptor_suffix: any;
  status: string;
  transfer_data: any;
  transfer_group: any;
}

export interface AmountDetails {
  tip: Tip;
}

export interface Tip {}

export interface Metadata {}

export interface PaymentMethodOptions {
  card: Card;
}

export interface Card {
  installments: any;
  mandate_options: any;
  network: any;
  request_three_d_secure: string;
}

export interface Shipping {
  address: Address;
  carrier: any;
  name: string;
  phone: any;
  tracking_number: any;
}

export interface Address {
  city: string;
  country: string;
  line1: string;
  line2: any;
  postal_code: string;
  state: string;
}

export interface StripeChargeRefundedResponse {
  id: string;
  object: string;
  amount: number;
  amount_captured: number;
  amount_refunded: number;
  application: any;
  application_fee: any;
  application_fee_amount: any;
  balance_transaction: string;
  billing_details: BillingDetails;
  calculated_statement_descriptor: string;
  captured: boolean;
  created: number;
  currency: string;
  customer: any;
  description: string;
  destination: any;
  dispute: any;
  disputed: boolean;
  failure_balance_transaction: any;
  failure_code: any;
  failure_message: any;
  fraud_details: FraudDetails;
  invoice: any;
  livemode: boolean;
  metadata: Metadata;
  on_behalf_of: any;
  order: any;
  outcome: Outcome;
  paid: boolean;
  payment_intent: string;
  payment_method: string;
  payment_method_details: PaymentMethodDetails;
  receipt_email: any;
  receipt_number: any;
  receipt_url: string;
  refunded: boolean;
  review: any;
  shipping: any;
  source: any;
  source_transfer: any;
  statement_descriptor: any;
  statement_descriptor_suffix: any;
  status: string;
  transfer_data: any;
  transfer_group: any;
}

export interface BillingDetails {
  address: Address;
  email: any;
  name: any;
  phone: any;
}

export interface FraudDetails {}

export interface Metadata {}

export interface Outcome {
  network_status: string;
  reason: any;
  risk_level: string;
  risk_score: number;
  seller_message: string;
  type: string;
}

export interface PaymentMethodDetails {
  card: Card;
  type: string;
}

export interface Checks {
  address_line1_check: any;
  address_postal_code_check: any;
  cvc_check: any;
}

export interface NetworkToken {
  used: boolean;
}
