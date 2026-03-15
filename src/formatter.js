/**
 * Formatter module.
 * Currently only has formatNumber(). Needs currency formatting, percentage formatting,
 * and a locale-aware date formatter.
 */

export function formatNumber(n) {
  return n.toLocaleString();
}
