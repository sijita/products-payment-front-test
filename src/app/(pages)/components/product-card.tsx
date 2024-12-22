import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { formatPrice } from '@/lib/utils';
import { Product } from '@/types/products';
import { IconCreditCard } from '@tabler/icons-react';

export default function ProductCard({
  product,
  setShowPaymentModal,
}: {
  product: Product;
  setShowPaymentModal: () => void;
}) {
  return (
    <Card className='w-full'>
      <CardHeader>
        <CardTitle>{product.name}</CardTitle>
        <CardDescription>{product.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className='text-2xl font-bold'>{formatPrice(product.price)}</p>
        <p className='text-sm text-gray-500'>Stock: {product.stock}</p>
      </CardContent>
      <CardFooter>
        <Button
          onClick={() => {
            setShowPaymentModal();
          }}
          disabled={product.stock === 0}
        >
          <IconCreditCard className='mr-2 h-4 w-4' />
          Pay with Credit Card
        </Button>
      </CardFooter>
    </Card>
  );
}
