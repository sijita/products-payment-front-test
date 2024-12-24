'use client';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ExpirationDateInput({
  value,
  onChange,
}: {
  value: string;
  onChange: (value: string) => void;
}) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = e.target.value.trim().replace(/\D/g, '').slice(0, 4);
    if (input.length > 2) {
      input = input.slice(0, 2) + '/' + input.slice(2);
    }

    const [month, year] = input.split('/');
    const currentYear = new Date().getFullYear() % 100;
    const monthNum = parseInt(month);
    const yearNum = parseInt(year);
    console.log(monthNum, yearNum, currentYear);

    if (input.length === 2 && (monthNum < 1 || monthNum > 12)) {
      return;
    }
    if (input.length === 5 && yearNum < currentYear) {
      return;
    }
    onChange(input);
  };

  return (
    <div className='w-full space-y-2'>
      <Label htmlFor='expirationDate'>Fecha de Expiración</Label>
      <Input
        id='expirationDate'
        type='text'
        value={value}
        onChange={handleChange}
        placeholder='MM/YY'
        maxLength={5}
      />
    </div>
  );
}
