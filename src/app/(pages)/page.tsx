import ProductsList from './components/products-list';
import { getProducts } from './api/products';

export default async function Home() {
  const products = await getProducts();

  return (
    <main className='container mx-auto flex w-full flex-1 flex-col gap-5 p-5'>
      <h1 className='text-2xl font-bold'>Nuestros Productos</h1>
      <ProductsList products={products} />
    </main>
  );
}
