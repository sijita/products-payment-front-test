'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function CVCInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.replace(/\D/g, '').slice(0, 4);
    onChange(input);
  };

  return (
    <div className='w-full space-y-2'>
      <Label htmlFor='cvc'>CVC</Label>
      <Input
        id='cvc'
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='123'
        maxLength={4}
      />
    </div>
  );
}
