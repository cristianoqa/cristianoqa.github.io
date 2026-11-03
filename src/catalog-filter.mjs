/**
 * Decides if a catalog card stays visible for the selected filter.
 * Platforms are space-separated tokens ("ios", "android"). Business is separate
 * because an app can be on a phone and still be the one meant for a shop.
 *
 * @param {string | string[] | null | undefined} platforms
 * @param {boolean} isBusiness
 * @param {string | null | undefined} filter
 * @returns {boolean}
 */
export function catalogCardVisible(platforms, isBusiness, filter) {
  if (filter == null || filter === "all") return true;
  if (filter === "business") return isBusiness === true;
  if (typeof filter !== "string" || filter.length === 0) return false;

  var list = Array.isArray(platforms)
    ? platforms
    : String(platforms == null ? "" : platforms)
        .trim()
        .split(/\s+/)
        .filter(Boolean);

  return list.indexOf(filter) !== -1;
}
