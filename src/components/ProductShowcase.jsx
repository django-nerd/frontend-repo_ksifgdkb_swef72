import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Api } from '../lib/api'

export default function ProductShowcase() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({ target: container, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  useEffect(() => {
    Api.seed().catch(() => {})
  }, [])

  return (
    <section ref={container} id="products" className="relative bg-black text-white py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-12">
        <h2 className="text-4xl sm:text-6xl font-extrabold mb-10">Uncompromising Performance</h2>
      </div>
      <div className="relative h-[520px]">
        <motion.div style={{ x }} className="absolute left-0 top-0 flex gap-8 will-change-transform">
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} className="min-w-[360px] h-[480px] bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 backdrop-blur-md">
              <div className="relative h-64 rounded-xl overflow-hidden bg-gradient-to-br from-zinc-800 to-black">
                <div className="absolute inset-0 border border-sky-400/30 rounded-xl" />
                <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity" style={{background: 'radial-gradient(circle at 30% 30%, rgba(10,239,255,0.25), transparent 40%), radial-gradient(circle at 70% 70%, rgba(255,255,255,0.12), transparent 40%)'}} />
              </div>
              <div className="mt-6">
                <p className="text-sky-300 text-sm">Specter Series</p>
                <h3 className="text-2xl font-bold">X{i} Pro</h3>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-extrabold">$1,{199 + i}</span>
                  <button className="group relative inline-flex items-center text-black">
                    <span className="absolute inset-0 rounded-full bg-sky-400 blur-md opacity-60 group-hover:opacity-90 transition" />
                    <span className="relative rounded-full bg-sky-300 px-4 py-2 text-sm font-bold">Quick Add</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
