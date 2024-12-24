import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatPrice = (price: number) => {
  return price.toLocaleString('es-CO', {
    style: 'currency',
    currency: 'COP',
  });
};

export const validateCreditCard = (
  number: string
): { isValid: boolean; type: 'visa' | 'mastercard' | null } => {
  const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
  const mastercardRegex = /^5[1-5][0-9]{14}$/;

  if (visaRegex.test(number)) {
    return { isValid: true, type: 'visa' };
  } else if (mastercardRegex.test(number)) {
    return { isValid: true, type: 'mastercard' };
  }

  return { isValid: false, type: null };
};
