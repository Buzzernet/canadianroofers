// src/lib/ab-testing.ts
export type Variant = "A" | "B";

export interface ABCookiePayload {
  variant: Variant;
  assignedAt: number;
}

export const AB_COOKIE_NAME = "ab_variant";
export const AB_TTL_SECONDS = 3600;

/** Same as `AB_TTL_SECONDS`; use with `cookies.set(..., { maxAge })`. */
export const AB_COOKIE_MAX_AGE = AB_TTL_SECONDS;