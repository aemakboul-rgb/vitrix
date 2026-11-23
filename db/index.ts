/**
 * The public website is fully static and does not currently need a database.
 * This placeholder preserves the old entry point while allowing deployment on
 * Vercel, where Cloudflare worker bindings are not available.
 */
export function getDb(): never {
  throw new Error("A database is not configured for this deployment.");
}
