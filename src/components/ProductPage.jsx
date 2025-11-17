import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Api } from '../lib/api'

export default function ProductPage() {
  const { slug } = useParams()
  const [p, setP] = useState(null)
  const [active, setActive] = useState({})

  useEffect(() => {
    Api.getProduct(slug).then((d)=>{
      setP(d)
      const init = {}
      d.variants?.forEach(v => init[v.name] = v.options?.[0])
      setActive(init)
    }).catch(()=>{})
  }, [slug])

  if (!p) return <div className="min-h-screen bg-black text-white flex items-center justify-center">Loading…</div>

  return (
    <div className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 py-10 grid lg:grid-cols-2 gap-12">
        <div className="space-y-4">
          {p.model_url ? (
            <div className="aspect-video rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900/60">
              <Spline scene={p.model_url} />
            </div>
          ) : (
            <img src={p.images?.[0]} alt={p.title} className="rounded-2xl border border-zinc-800" />
          )}

          <div className="relative overflow-hidden rounded-2xl border border-zinc-800">
            <img src={p.images?.[1] || p.images?.[0]} alt="detail" className="w-full opacity-90" />
            <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/80 to-transparent" />
          </div>
        </div>

        <div>
          <h1 className="text-5xl sm:text-6xl font-extrabold leading-none">{p.title}</h1>
          <p className="mt-4 text-zinc-300">{p.description}</p>
          <div className="mt-6 flex items-baseline gap-4">
            <span className="text-4xl font-extrabold">${p.price}</span>
            {p.compare_at_price && (
              <span className="text-zinc-500 line-through">${p.compare_at_price}</span>
            )}
          </div>

          <div className="mt-8 space-y-6">
            {p.variants?.map((v) => (
              <div key={v.name}>
                <p className="text-sm text-zinc-400">{v.name}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {v.options?.map((opt) => (
                    <button key={opt} onClick={()=> setActive(a=>({...a, [v.name]: opt}))} className={`px-4 py-2 rounded-full border ${active[v.name]===opt? 'border-sky-400 bg-sky-400/10 text-white':'border-zinc-700 text-zinc-300'}`}>
                      {opt}
                    </button>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex gap-4">
            <button className="group relative inline-flex items-center text-black">
              <span className="absolute inset-0 rounded-full bg-sky-400 blur-lg opacity-60 group-hover:opacity-90 transition" />
              <span className="relative rounded-full bg-sky-300 px-8 py-4 text-lg font-bold">Add to Cart</span>
            </button>
            <button className="rounded-full border border-zinc-700 px-8 py-4 text-lg">Buy Now</button>
          </div>

          <div className="mt-10 grid sm:grid-cols-3 gap-4 text-sm text-zinc-300">
            {p.badges?.map((b, i) => (
              <div key={i} className="rounded-xl border border-zinc-800 p-4 bg-zinc-900/50">{b}</div>
            ))}
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-4">Specs</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {Object.entries(p.specs || {}).map(([k,v]) => (
                <div key={k} className="flex justify-between border-b border-zinc-800 py-3">
                  <span className="text-zinc-400">{k}</span>
                  <span className="font-medium">{v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
