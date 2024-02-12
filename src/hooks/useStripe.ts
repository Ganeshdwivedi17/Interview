import { useMemo, useState } from 'react';
import {
  useStripe,
  useElements,
  CardNumberElement
} from '@stripe/react-stripe-js';
import { StripeElements } from '@stripe/stripe-js';

import {
  onAddCard,
  onAddCustomer,
  onAddSubscription,
  onSetStripeToken
} from '../utils/stripe';
import {
  StripeCard,
  StripeCustomer,
  StripeSubscription
} from '../context/types';

export const useCharge = ({ onSuccess, onFail, customerId }: Params) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [valid, setValid] = useState({
    cardCvc: false,
    cardExpiry: false,
    cardNumber: false
  });

  const isDisable = useMemo(
    () =>
      !name.length ||
      !email.length ||
      !valid.cardCvc ||
      !valid.cardExpiry ||
      !valid.cardNumber ||
      isLoading,
    [isLoading, valid.cardCvc, valid.cardExpiry, valid.cardNumber, name, email]
  );

  const handleChange = (ev: any) => {
    setValid((prev: any) => {
      const cardInput = (prev[ev.elementType] = ev?.complete);
      const stripeCard = { ...valid, cardInput };
      return stripeCard;
    });
  };

  const handleSubmit = async () => {
    if (isDisable) return;
    setLoading(true);
    try {
      const cardElement: any = elements?.getElement(CardNumberElement);
      const tokenDetails = await stripe?.createToken(cardElement, { name })!;
      tokenDetails && onSetStripeToken(tokenDetails);

      const customer = await onAddCustomer({ name, email });

      const card = await onAddCard(customerId ?? customer!.id);
      const subscription = await onAddSubscription(customerId ?? customer!.id);
      const data = {
        customer,
        card,
        subscription
      };
      setName('');
      setEmail('');
      setValid({
        cardCvc: false,
        cardExpiry: false,
        cardNumber: false
      });
      onSuccess?.(data, elements);
      setLoading(false);
    } catch (e: any) {
      const err = e.response?.data?.error;
      console.log(err);
      setLoading(false);
      onFail?.();
    }
  };
  return {
    handleSubmit,
    name,
    setName,
    handleChange,
    isDisable,
    isLoading,
    email,
    setEmail
  };
};

interface Params {
  onSuccess?: (
    successData: SuccessData,
    elements: StripeElements | null
  ) => void;
  onFail?: () => void;
  customerId?: string;
}
export interface SuccessData {
  customer?: StripeCustomer;
  card: StripeCard;
  subscription: StripeSubscription;
}
