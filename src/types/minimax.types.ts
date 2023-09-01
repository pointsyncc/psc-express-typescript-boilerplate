import { TypeOf, z } from 'zod';

export type MinimaxLocalizationType = 'HR' | 'SI';

export interface MinimaxApiInit {
  params: {
    client_id: string;
    client_secret: string;
    grant_type: 'password';
    username: string;
    password: string;
    scope: 'minimax.si';
  };
  localization: MinimaxLocalizationType;
  organisationId: number;
  apiTokenEndpoint: string;
  apiBaseUrl: string;
}

export interface MinimaxApiGetTokenResponse {
  data: {
    access_token: string;
    token_type: string;
    expires_in: number;
    refresh_token: string;
    scope: string;
  };
}

export interface MinimaxAddIssuedInvoiceRequest {
  IssuedInvoiceId: number;
  Year: number;
  InvoiceNumber: number;
  DocumentNumbering: DocumentNumbering;
  Customer: Customer;
  DateIssued: string;
  DateTransaction: string;
  DateTransactionFrom: string;
  DateDue: string;
  AddresseeName: string;
  AddresseeAddress: string;
  AddresseePostalCode: string;
  AddresseeCity: string;
  AddresseeCountryName: string;
  AddresseeCountry: AddresseeCountry;
  AddresseeGLN: number;
  RecipientName: string;
  RecipientAddress: string;
  RecipientPostalCode: string;
  RecipientCity: string;
  RecipientCountryName: string;
  RecipientCountry: RecipientCountry;
  RecipientGLN: number;
  Rabate: number;
  ExchangeRate: number;
  DocumentReference: string;
  PaymentReference: string;
  Currency: Currency;
  Analytic: Analytic;
  Document: Document;
  IssuedInvoiceReportTemplate: IssuedInvoiceReportTemplate;
  DeliveryNoteReportTemplate: DeliveryNoteReportTemplate;
  Status: string;
  DescriptionAbove: string;
  DescriptionBelow: string;
  DeliveryNoteDescriptionAbove: string;
  DeliveryNoteDescriptionBelow: string;
  Notes: string;
  Employee: Employee;
  PricesOnInvoice: string;
  RecurringInvoice: string;
  InvoiceAttachment: InvoiceAttachment;
  EInvoiceAttachment: EinvoiceAttachment;
  InvoiceType: string;
  OriginalDocumentType: string;
  OriginalDocumentDate: string;
  ForwardToCRF: string;
  ForwardToSEF: string;
  OptionalCustumerDataType: string;
  OptionalCustumerData: string;
  CustomerIDType: string;
  CustomerID: string;
  PurposeCode: PurposeCode;
  PaymentStatus: string;
  InvoiceValue: number;
  PaidValue: number;
  AssociationWithStock: string;
  DebitNote: string;
  DebitNoteBasis: string;
  DebitNoteBasisDate: string;
  IssuedInvoiceRows: IssuedInvoiceRow[];
  IssuedInvoicePaymentMethods: IssuedInvoicePaymentMethod[];
  IssuedInvoiceAdditionalSourceDocument: IssuedInvoiceAdditionalSourceDocument[];
  RecordDtModified: string;
  RowVersion: string;
}

export interface DocumentNumbering {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface Customer {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface AddresseeCountry {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface RecipientCountry {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface Currency {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface Analytic {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface Document {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface IssuedInvoiceReportTemplate {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface DeliveryNoteReportTemplate {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface Employee {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface InvoiceAttachment {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface EinvoiceAttachment {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface PurposeCode {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface IssuedInvoiceRow {
  IssuedInvoiceRowId: number;
  IssuedInvoice: IssuedInvoice;
  Item: Item;
  ItemName: string;
  RowNumber: number;
  ItemCode: string;
  SerialNumber: string;
  BatchNumber: string;
  Description: string;
  Quantity: number;
  UnitOfMeasurement: string;
  Mass: number;
  Price: number;
  PriceWithVAT: number;
  VATPercent: number;
  Discount: number;
  DiscountPercent: number;
  Value: number;
  VatRate: VatRate;
  VatRatePercentage: VatRatePercentage;
  Warehouse: Warehouse;
  AdditionalWarehouse: AdditionalWarehouse;
  TaxFreeValue: number;
  TaxExemptionValue: number;
  VatAccountingType: string;
  TaxExemptionReasonCode: string;
  Analytic: Analytic2;
  RecordDtModified: string;
  RowVersion: string;
}

export interface IssuedInvoice {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface Item {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface VatRate {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface VatRatePercentage {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface Warehouse {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface AdditionalWarehouse {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface Analytic2 {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface IssuedInvoicePaymentMethod {
  IssuedInvoicePaymentMethodId: number;
  IssuedInvoice: IssuedInvoice2;
  PaymentMethod: PaymentMethod;
  CashRegister: CashRegister;
  Revenue: Revenue;
  RevenueDate: string;
  Amount: number;
  AmountInDomesticCurrency: number;
  AlreadyPaid: string;
  RecordDtModified: string;
  RowVersion: string;
}

export interface IssuedInvoice2 {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface PaymentMethod {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface CashRegister {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface Revenue {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface IssuedInvoiceAdditionalSourceDocument {
  IssuedInvoiceAdditionalSourceDocumentId: number;
  IssuedInvoice: IssuedInvoice3;
  SourceDocumentType: string;
  SourceDocumentDate: string;
  SourceDocumentNumber: string;
  RecordDtModified: string;
  RowVersion: string;
}

export interface IssuedInvoice3 {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

//RESPONSE (GET method) - GetItemByCode
export interface MinimaxResponseGetItemByCode {
  ItemId: number;
  Name: string;
  Code: string;
  EANCode: string;
  Description: string;
  ItemType: string;
  StocksManagedOnlyByQuantity: string;
  CalculationOfConsumptionTax: string;
  UnitOfMeasurement: string;
  MassPerUnit: number;
  ProductGroup: any;
  VatRate: VatRate;
  Price: number;
  RebatePercent: number;
  Usage: string;
  Currency: Currency;
  SerialNumbers: string;
  BatchNumbers: string;
  RevenueAccountDomestic: RevenueAccountDomestic;
  RevenueAccountEU: RevenueAccountEu;
  RevenueAccountOutsideEU: RevenueAccountOutsideEu;
  StocksAccount: any;
  ReliefByCompositeFromWarehouse: string;
  RecordDtModified: string;
  RowVersion: string;
}

export interface VatRate {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface Currency {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface RevenueAccountDomestic {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface RevenueAccountEu {
  ID: number;
  Name: string;
  ResourceUrl: string;
}

export interface RevenueAccountOutsideEu {
  ID: number;
  Name: string;
  ResourceUrl: string;
}
