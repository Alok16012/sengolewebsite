// Shared types for the Track Application flow. The form fetches the status and
// renders it inline on the same page — no PII (email) ever goes into the URL.

export type StatusResult = {
  found: true;
  applicationNo: string | null;
  // Center name (for a center application) or student name (for a student one).
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

export type ApplicationKind = "center" | "student";
