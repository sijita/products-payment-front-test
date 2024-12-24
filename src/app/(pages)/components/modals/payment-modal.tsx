'use client';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import PaymentForm from '@/app/(pages)/components/forms/payment-form';

export default function PaymentModal({
  showPaymentModal,
  setShowPaymentModal,
}: {
  showPaymentModal: boolean;
  setShowPaymentModal: () => void;
}) {
  return (
    <Dialog open={showPaymentModal} onOpenChange={setShowPaymentModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Enter Payment Details</DialogTitle>
          <DialogDescription>
            Please enter your credit card and delivery information
          </DialogDescription>
        </DialogHeader>
        <PaymentForm />
        <DialogFooter>
          <Button
            onClick={() => {
              setShowPaymentModal();
            }}
          >
            Continue to Summary
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
