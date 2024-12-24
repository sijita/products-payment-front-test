import axios from '@/lib/axios';

export const getProducts = async () => {
  try {
    const { data: products } = await axios.get('/products');

    return products;
  } catch (error) {
    console.error(error);
    return [];
  }
};
