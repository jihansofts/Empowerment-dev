export type AppLocale = "en" | "hr" | "ro" | "sr" | "bs" | "bg";

export type CountryCode = keyof typeof countryToLocale;

export const countryToLocale = {
  HR: "hr",
  RS: "sr",
  RO: "ro",
  BA: "bs",
  BG: "bg",
  EN: "en",
  US: "en",
  GB: "en",
  DE: "en",
  FR: "en",
} as const satisfies Record<string, AppLocale>;
