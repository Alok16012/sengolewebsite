import crypto from "crypto";

// PayU's public sandbox credentials. Documented openly by PayU and only valid
// on the test gateway (no real money). Used as a fallback so test mode works
// out of the box; override with PAYU_KEY/PAYU_SALT env vars when needed.
const TEST_KEY = "gtKFFx";
const TEST_SALT = "4R38IvwiV57FwVpsgOvTXBdLE4tHUXFW";

// PayU credentials come from environment variables. See .env.local.example.
// PAYU_MODE: "test" uses PayU's test gateway, "live" uses production.
export function getPayuConfig() {
  const mode = (process.env.PAYU_MODE ?? "test").toLowerCase();

  let key = process.env.PAYU_KEY;
  let salt = process.env.PAYU_SALT;

  // In test mode, fall back to PayU's public sandbox credentials.
  if (mode !== "live") {
    key = key || TEST_KEY;
    salt = salt || TEST_SALT;
  }

  if (!key || !salt) {
    throw new Error(
      "PayU is not configured. Set PAYU_KEY and PAYU_SALT (live mode requires them)."
    );
  }

  const paymentUrl =
    mode === "live"
      ? "https://secure.payu.in/_payment"
      : "https://test.payu.in/_payment";

  return { key, salt, mode, paymentUrl };
}

export type PayuRequest = {
  txnid: string;
  amount: string;
  productinfo: string;
  firstname: string;
  email: string;
};

// Request hash: sha512(key|txnid|amount|productinfo|firstname|email|||||||||||salt)
export function buildRequestHash(req: PayuRequest, key: string, salt: string) {
  const sequence = [
    key,
    req.txnid,
    req.amount,
    req.productinfo,
    req.firstname,
    req.email,
    "", "", "", "", "", // udf1-5
    "", "", "", "", "", // PayU reserved fields
    salt,
  ].join("|");

  return crypto.createHash("sha512").update(sequence).digest("hex");
}

// Reverse hash for verifying PayU's response:
// sha512(salt|status||||||||||udf5|udf4|udf3|udf2|udf1|email|firstname|productinfo|amount|txnid|key)
export function verifyResponseHash(
  params: Record<string, string>,
  key: string,
  salt: string
) {
  const sequence = [
    salt,
    params.status ?? "",
    "", "", "", "", "", // PayU reserved fields
    params.udf5 ?? "",
    params.udf4 ?? "",
    params.udf3 ?? "",
    params.udf2 ?? "",
    params.udf1 ?? "",
    params.email ?? "",
    params.firstname ?? "",
    params.productinfo ?? "",
    params.amount ?? "",
    params.txnid ?? "",
    key,
  ].join("|");

  const expected = crypto.createHash("sha512").update(sequence).digest("hex");
  return expected === (params.hash ?? "").toLowerCase();
}

export function newTxnId() {
  return `SIU${Date.now()}${crypto.randomBytes(4).toString("hex")}`;
}
