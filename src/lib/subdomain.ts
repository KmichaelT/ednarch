import { headers } from 'next/headers';

const ROOT_DOMAINS = ['edenarch.co', 'edenarch.studio', 'localhost'];

/**
 * Extracts the subdomain from the current request's host header.
 * Returns null for the root domain (no subdomain) or 'www'.
 */
export async function getSubdomain(): Promise<string | null> {
  const headersList = await headers();
  const host = headersList.get('host') ?? '';

  // Strip port (e.g. localhost:3000)
  const hostname = host.split(':')[0];

  // Find which root domain matches
  const rootDomain = ROOT_DOMAINS.find(
    (d) => hostname === d || hostname.endsWith(`.${d}`),
  );

  if (!rootDomain) return null;

  // Extract subdomain part
  if (hostname === rootDomain) return null;

  const subdomain = hostname.slice(0, -(rootDomain.length + 1)); // +1 for the dot
  if (subdomain === 'www') return null;

  return subdomain;
}
