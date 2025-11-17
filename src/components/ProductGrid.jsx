import { useEffect, useState } from 'react'
import { Api } from '../lib/api'
import { motion } from 'framer-motion'

export default function ProductGrid() {
  const [items, setItems] = useState([])

  useEffect(() => {
    Api.listProducts(12).then(setItems).catch(() => setItems([]))
  }, [])

  return (
    <section className="bg-black text-white py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-12">Precision in Every Atom</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((p) => (
            <motion.a
              key={p.id}
              href={`/p/${p.slug}`}
              whileHover={{ y: -6 }}
              className="group relative bg-zinc-900/60 border border-zinc-800 rounded-2xl overflow-hidden backdrop-blur-md"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={p.images?.[0]} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-sky-400/60 rounded-2xl transition-all" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold">{p.title}</h3>
                <p className="mt-2 text-zinc-400 line-clamp-2">{p.description}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xl font-extrabold text-white">${p.price}</span>
                  <button className="group relative inline-flex items-center text-black">
                    <span className="absolute inset-0 rounded-full bg-sky-400 blur-md opacity-60 group-hover:opacity-90 transition" />
                    <span className="relative rounded-full bg-sky-300 px-4 py-2 text-sm font-bold">Quick Add</span>
                  </button>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
