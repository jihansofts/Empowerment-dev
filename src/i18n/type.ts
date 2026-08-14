export type AppLocale =
  | "en"
  | "hr"
  | "ro"
  | "sr"
  | "bs"
  | "bg"
  | "be"
  | "el"
  | "mk"
  | "tr"
  | "sl"
  | "sk";

export type CountryCode = keyof typeof countryToLocale;

export const countryToLocale = {
  HR: "hr",
  RS: "sr",
  RO: "ro",
  BA: "bs",
  BG: "bg",
  BY: "be",
  GR: "el",
  CY: "el",
  MK: "mk",
  MD: "ro",
  TR: "tr",
  SI: "sl",
  SK: "sk",
  EN: "en",
  US: "en",
  GB: "en",
  DE: "en",
  FR: "en",
} as const satisfies Record<string, AppLocale>;
