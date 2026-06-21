// Shared types for the Track Application flow. The form fetches the status,
// stashes it in sessionStorage, and the result page reads it back — this keeps
// personal data (email) out of the URL.

export type StatusResult = {
  found: true;
  applicationNo: string | null;
  centerName: string | null;
  approvalStatus: string | null;
  paymentStatus: string | null;
  isPaid: boolean;
  feeAmount: number | null;
  amountPaid: number | null;
  paymentLinkUrl: string | null;
  paymentPaidAt: string | null;
  submittedAt: string | null;
};

export const STATUS_STORAGE_KEY = "sengol:application-status";
