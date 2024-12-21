'use client';
import { Toaster } from '@/components/ui/toaster';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Toaster />
      {children}
    </Provider>
  );
}
