const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export async function fetchJSON(path, opts = {}) {
  const res = await fetch(`${BASE_URL}${path}`, {
    headers: { 'Content-Type': 'application/json' },
    ...opts,
  })
  if (!res.ok) throw new Error(`Request failed: ${res.status}`)
  return await res.json()
}

export const Api = {
  listProducts: (limit = 20) => fetchJSON(`/api/products?limit=${limit}`),
  getProduct: (slug) => fetchJSON(`/api/products/${slug}`),
  seed: () => fetchJSON('/seed', { method: 'POST' }),
}

export { BASE_URL }
