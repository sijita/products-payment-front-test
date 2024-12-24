'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useState } from 'react';
import CreditCardInput from './credit-card-input';
import CVCInput from './cvc-input';
import ExpirationDateInput from './expiration-input';

export default function PaymentForm() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expirationDate: '',
    cvc: '',
    cardName: '',
    address: '',
    city: '',
    zip: '',
  });

  return (
    <form className='flex flex-col gap-4 py-4'>
      <CreditCardInput
        value={formData.cardNumber}
        onChange={(value) => setFormData({ ...formData, cardNumber: value })}
      />
      <div className='flex items-center gap-4'>
        <ExpirationDateInput
          value={formData.expirationDate}
          onChange={(value) =>
            setFormData({ ...formData, expirationDate: value })
          }
        />
        <CVCInput
          value={formData.cvc}
          onChange={(value) => setFormData({ ...formData, cvc: value })}
        />
      </div>
      <div className='flex flex-col gap-2'>
        <Label htmlFor='card-name'>Name on Card</Label>
        <Input
          name='card-name'
          onChange={() => {}}
          placeholder='John Doe'
          required
        />
      </div>
      <div className='flex flex-col gap-2'>
        <Label htmlFor='address'>Delivery Address</Label>
        <Input
          name='address'
          onChange={() => {}}
          placeholder='123 Main St'
          required
        />
      </div>
      <div className='flex items-center gap-4'>
        <div className='flex w-full flex-col gap-2'>
          <Label htmlFor='city'>City</Label>
          <Input
            name='city'
            onChange={() => {}}
            placeholder='New York'
            required
          />
        </div>
        <div className='flex w-full flex-col gap-2'>
          <Label htmlFor='zip'>ZIP Code</Label>
          <Input name='zip' onChange={() => {}} placeholder='10001' />
        </div>
      </div>
    </form>
  );
}
