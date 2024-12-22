import { configureStore } from '@reduxjs/toolkit';
import paymentModalReducer from './slices/payment-modal-slice';

export const store = configureStore({
  reducer: {
    paymentModal: paymentModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
