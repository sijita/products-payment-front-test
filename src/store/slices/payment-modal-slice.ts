import { createSlice } from '@reduxjs/toolkit';

export const paymentModalSlice = createSlice({
  name: 'paymentModal',
  initialState: {
    showPaymentModal: false,
  },
  reducers: {
    setShowPaymentModal: (state, action) => {
      state.showPaymentModal = action.payload;
    },
  },
});

export const { setShowPaymentModal } = paymentModalSlice.actions;
export default paymentModalSlice.reducer;
