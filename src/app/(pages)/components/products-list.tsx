'use client';
import PaymentModal from './modals/payment-modal';
import { Product } from '@/types/products';
import usePaymentModal from '@/hooks/use-payment-modal';
import ProductCard from './product-card';

export default function ProductsList({ products }: { products: Product[] }) {
  const { showPaymentModal, setShowPaymentModal } = usePaymentModal();

  return (
    <>
      <PaymentModal
        showPaymentModal={showPaymentModal}
        setShowPaymentModal={setShowPaymentModal}
      />
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            setShowPaymentModal={setShowPaymentModal}
          />
        ))}
      </div>
    </>
  );
}
