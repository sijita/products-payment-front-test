import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { setShowPaymentModal } from '@/store/slices/payment-modal-slice';

export default function usePaymentModal() {
  const showPaymentModal = useSelector(
    (state: RootState) => state.paymentModal.showPaymentModal
  );
  const dispatch = useDispatch();

  return {
    showPaymentModal,
    setShowPaymentModal: () => dispatch(setShowPaymentModal(!showPaymentModal)),
  };
}
