import type { ABCookiePayload, Variant } from "./ab-testing";

export function flipVariant(v: Variant): Variant {
  return v === "A" ? "B" : "A";
}

/** Edge-safe random choice (no Math.random in edge middleware). */
export function pickAbVariant(): Variant {
  const arr = new Uint8Array(1);
  crypto.getRandomValues(arr);
  return arr[0] % 2 === 0 ? "A" : "B";
}

export function resolveAbVariantFromCookie(
  raw: string | undefined,
  now: number,
  ttlMs: number,
): Variant {
  if (!raw) return pickAbVariant();
  try {
    const payload = JSON.parse(decodeURIComponent(raw)) as ABCookiePayload;
    const expired = now - payload.assignedAt >= ttlMs;
    return expired ? flipVariant(payload.variant) : payload.variant;
  } catch {
    return pickAbVariant();
  }
}
