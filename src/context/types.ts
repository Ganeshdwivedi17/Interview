export type ErrCallbackType = (err: { [key: string]: string }) => void

export type LoginParams = {
  email: string
  password: string
  rememberMe?: boolean
}

export type SignUpParams = {
  name: string,
  email: string,
  password: string,
  confirm_password: string,
  location: string,
  company_name: string,
  birth_date: string,
}

export type UserDataType = {
  id: string
  role: string
  email: string
  name: string
  company_name: string
  location: string
  username: string
  password: string
  profile_image?: string
  customerId?: string;
   subId?: string;
  chat: {
    token: string
    user: {
      duration: string
      users: Record<string, UserInfo>
    }
  }
}

interface UserInfo {
  banned: boolean;
  created_at: string;
  id: string;
  last_active: string;
  name: string;
  online: boolean;
  role: string;
  updated_at: string;
}

export type questionDataType = {
  question: string
}

export type questions = {
  _id: string,
  question: string,
  time_duration: number,
  createdAt: string,
  updatedAt: string,
}

export type AuthValuesType = {
  loading: boolean
  logout: () => void
  jobViewContext: null,
  setQuestions: null,
  setJobViewContext: (value: any) => void
  user: UserDataType | null
  setLoading: (value: boolean) => void
  setUser: (value: UserDataType | null) => void
  login: (params: LoginParams, errorCallback?: ErrCallbackType) => Promise<any>
  signup: (params: SignUpParams, errorCallback?: ErrCallbackType) => Promise<any>
  addQuestion: (params: questionDataType, errorCallback?: ErrCallbackType) => Promise<any>
  initAuth: () => void,
  isLoggedIn: () => Boolean
}


export type StripeMode = 'payment' | 'setup' | 'subscription';

export interface StripeCustomer {
  id: string;
  object: 'customer';
  address?: StripeAddress;
  balance?: number;
  created: number;
  currency?: string;
  default_source?: string | StripeCard;
  delinquent?: boolean;
  description?: string;
  discount?: StripeDiscount;
  email?: string;
  invoice_prefix?: string;
  invoice_settings?: StripeInvoiceSettings;
  livemode?: boolean;
  metadata?: Record<string, any>;
  name?: string;
  next_invoice_sequence?: number;
  phone?: string;
  preferred_locales?: string[];
  shipping?: StripeShippingDetails;
  sources?: StripeSources;
  subscriptions?: StripeSubscriptions;
  tax_exempt?: 'none' | 'full';
}

export interface StripeAddress {
  street: string;
  city: string;
  state: string;
  postal_code: string;
  country: string;
}

export interface StripeCard {
  id: string;
  object: 'card';
  brand: string;
  exp_month: number;
  exp_year: number;
  last4: string;
}

export interface StripeDiscount {
  id: string;
  object: 'discount';
}

export interface StripeInvoiceSettings {
  custom_fields?: StripeCustomField[];
}

export interface StripeCustomField {
  name: string;
  value: string;
}

export interface StripeShippingDetails {
  name: string;
  address: StripeAddress;
}

export interface StripeSources {
  data: StripeCard[];
}

export interface StripeSubscriptions {
  data: StripeSubscription[];
}

export interface StripeSubscription {
  id: string;
  object: 'subscription';
}

export interface StripeCharge {
  id: string;
  object: 'payment_intent';
  amount: number;
  amount_received: number;
  created: number;
  currency: 'usd';
  customer: string;
  source: string;
}
