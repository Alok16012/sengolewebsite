// Shared types for the Track Application flow. The form fetches the status,
// stashes it in localStorage, and the result page (opened in a new tab) reads
// it back — localStorage is shared across tabs, and this keeps personal data
// (email) out of the URL.

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

// What the form writes to localStorage for the result page to read back. We
// keep the back path so the result page can link to the right form (center vs
// student) for "Check another application".
export type StoredStatus = {
  kind: ApplicationKind;
  result: StatusResult;
  backPath: string;
};

export const STATUS_STORAGE_KEY = "sengol:application-status";
export const STATUS_RESULT_PATH = "/application-status/result";
