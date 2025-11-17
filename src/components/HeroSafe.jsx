import { motion } from 'framer-motion'

export default function HeroSafe() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <div className="h-full w-full bg-[radial-gradient(800px_300px_at_50%_-10%,rgba(10,239,255,.18),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12 pt-28 pb-24 flex flex-col justify-end h-screen">
        <motion.h1
          initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 0.8 }}
          className="text-6xl sm:text-7xl md:text-8xl font-extrabold tracking-tight leading-[0.9]" >
          BUILT TO DOMINATE
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-6 text-xl sm:text-2xl text-sky-300 max-w-2xl" >
          Precision in every atom.
        </motion.p>
        <div className="mt-10 flex gap-6">
          <a href="#products" className="group relative inline-flex items-center text-black font-bold text-lg">
            <span className="absolute inset-0 rounded-full bg-sky-400 blur-lg opacity-60 group-hover:opacity-90 transition" />
            <span className="relative rounded-full bg-sky-300 px-8 py-4">Shop Now</span>
          </a>
          <a href="#brand" className="group relative inline-flex items-center text-black font-bold text-lg">
            <span className="absolute inset-0 rounded-full bg-white blur-lg opacity-40 group-hover:opacity-70 transition" />
            <span className="relative rounded-full bg-white/90 px-8 py-4">About</span>
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  )
}
