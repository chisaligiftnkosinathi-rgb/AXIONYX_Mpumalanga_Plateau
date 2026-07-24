// AXIONYX REFERENCE DATA PLATFORM
// packages/reference-data/src/index.ts

/**
 * Universal Reference Data.
 * Prevents AXIONYX packages from reinventing foundational datasets.
 */

export const SIPrefixes = {
  kilo: { symbol: 'k', factor: 1e3 },
  mega: { symbol: 'M', factor: 1e6 },
  giga: { symbol: 'G', factor: 1e9 },
  milli: { symbol: 'm', factor: 1e-3 },
  micro: { symbol: 'μ', factor: 1e-6 },
  nano: { symbol: 'n', factor: 1e-9 },
};

export const Currencies = {
  USD: { symbol: '$', name: 'US Dollar' },
  EUR: { symbol: '€', name: 'Euro' },
  ZAR: { symbol: 'R', name: 'South African Rand' },
};

// Extensible registry for Periodic Table, CAS numbers, UNSPSC, etc.
export const ReferenceRegistry = {
  SIPrefixes,
  Currencies,
};
