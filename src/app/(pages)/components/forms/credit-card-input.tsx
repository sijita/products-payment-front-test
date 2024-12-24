'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import VisaIcon from '@/assets/visa-icon.svg';
import MasterCardIcon from '@/assets/mastercard-icon.svg';
import { validateCreditCard } from '@/lib/utils';
import Image from 'next/image';
import { IconCreditCard } from '@tabler/icons-react';

export default function CreditCardInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const [cardType, setCardType] = useState<'visa' | 'mastercard' | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 16);

    const { isValid, type } = validateCreditCard(input);
    setCardType(isValid ? type : null);

    const formattedInput = input.replace(/(.{4})/g, '$1 ').trim();
    onChange(formattedInput);
  };

  return (
    <div className='space-y-2'>
      <Label htmlFor='cardNumber'>Número de Tarjeta</Label>
      <div className='relative'>
        <Input
          id='cardNumber'
          type='text'
          value={value}
          onChange={handleChange}
          placeholder='1234 5678 9012 3456'
          maxLength={19}
          minLength={19}
        />
        <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
          {cardType === 'visa' && (
            <Image src={VisaIcon} alt='Visa Icon' width={20} height={20} />
          )}
          {cardType === 'mastercard' && (
            <Image
              src={MasterCardIcon}
              alt='MasterCard Icon'
              width={20}
              height={20}
            />
          )}
          {!cardType && <IconCreditCard className='h-5 w-5 text-gray-400' />}
        </div>
      </div>
    </div>
  );
}
