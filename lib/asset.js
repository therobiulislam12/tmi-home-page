// Prefixes a /public asset path with the deploy base path so assets resolve
// correctly when the site is hosted under a sub-path (GitHub Pages project site).
// In local dev BASE_PATH is "" so paths are unchanged.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export const asset = (path) => `${BASE_PATH}${path}`;
