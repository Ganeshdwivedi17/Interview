import { TokenResult } from '@stripe/stripe-js';
import axios from 'axios';
import {
  StripeCard,
  StripeCharge,
  StripeCustomer,
  StripeSubscription
} from '../context/types';

const stripe = (endPoint: string, data: string, method = 'POST') => {
  const STRIPE_BASE_URL = 'https://api.stripe.com/v1/';
  const headers = {
    Authorization: `Bearer ${process.env.REACT_APP_STRIPE_SECRET}`,
    'Content-Type': 'application/x-www-form-urlencoded'
  };

  const url = `${STRIPE_BASE_URL}${endPoint}`;
  const promise = (
    resolve: (data: Record<string, any>) => void,
    reject: (err: Error) => void
  ) => {
    axios({ data, headers, method, url })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  };
  return new Promise(promise);
};

let token = '';
export const onSetStripeToken = (newToken: TokenResult) => {
  if (!newToken) return;
  token = newToken.token!.id;
};
console.log('token: : : ', token);

export const onAddCustomer = async (user: { name: string; email: string }) => {
  const url = 'customers';

  const data = `name=${user.name}&email=${user.email}`;
  return stripe(url, data).then(customer => {
    return customer as StripeCustomer;
  });
};

export const onAddCard = async (customerId: string) => {
  const url = `customers/${customerId}/sources`;
  const data = `source=${token}`;
  return stripe(url, data).then(card => card as StripeCard);
};

export const onCharge = async (
  customerId: string,
  amount: number,
  company?: string
) => {
  const url = `payment_intents`;
  const data = `customer=${customerId}&amount=${amount}&currency=usd&confirm=${true}&metadata[company]=${company}`;
  return stripe(url, data).then(charge => charge as StripeCharge);
};

export const onRemoveCard = (customerId: string, cardId: string) => {
  const url = `customers/${customerId}/sources/${cardId}`;
  return stripe(url, '', 'DELETE');
};

export const onGetCardDetails = (customerId: string) => {
  const url = `customers/${customerId}/sources`;
  return stripe(url, '', 'GET');
};

export const onAddSubscription = async (customerId: string) => {
  const url = `subscriptions`;
  return stripe(
    url,
    `customer=${customerId}&items[0][price]=${process.env.REACT_APP_STRIPE_PRICE_ID}`
  ).then(subscription => subscription as StripeSubscription);
};

export const onCancelSubscription = async (subscriptionId: string) => {
  const url = `subscriptions/${subscriptionId}`;
  return stripe(url, '', 'DELETE');
};

export const onGetSubscriptionDetails = async (subscriptionId: string) => {
  const url = `subscriptions/${subscriptionId}`;
  return stripe(url, '', 'GET').then(subscription => subscription as any);
};

export const onGetInvoices = async (customerId: string) => {
  const url = `invoices?${customerId ? `customer=${customerId}` : ''}`;
  return stripe(url, ``, 'GET').then(invoices => invoices.data as any);
};

export const onGetUpcomingInvoice = (
  customerId: string,
  subscriptionId: string
) => {
  const url = `invoices/upcoming?customer=${customerId}&subscription=${subscriptionId}`;
  return stripe(url, ``, 'GET');
};
