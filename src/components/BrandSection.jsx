import { motion } from 'framer-motion'

export default function BrandSection() {
  return (
    <section id="brand" className="relative bg-black text-white py-28">
      <video className="absolute inset-0 w-full h-full object-cover opacity-20" autoPlay loop muted playsInline>
        <source src="https://cdn.coverr.co/videos/coverr-aerial-view-of-london-0382/1080p.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{backgroundImage:'url(https://grainy-gradients.vercel.app/noise.svg)', opacity:0.15}} />

      <div className="relative max-w-7xl mx-auto px-6 sm:px-12 grid md:grid-cols-2 gap-16 items-start">
        <div>
          <motion.h3 initial={{opacity:0,y:20,filter:'blur(6px)'}} whileInView={{opacity:1,y:0,filter:'blur(0)'}} viewport={{once:true}} transition={{duration:.7}} className="text-5xl sm:text-6xl font-semibold tracking-tight leading-none">
            Editorial Minimalism
          </motion.h3>
          <motion.p initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay:.2}} className="mt-6 text-zinc-300 text-lg">
            Brutalist lines. Surgical detail. Designed to cut through noise and command attention.
          </motion.p>
        </div>
        <div className="space-y-6">
          {['CNC milled aluminum', 'Ion-tempered glass', 'Zero tolerance fit', 'Lifetime service'].map((t,i)=> (
            <motion.div key={i} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} transition={{delay:i*0.08}} className="flex items-start gap-4">
              <span className="mt-1 h-2 w-2 rounded-full bg-sky-400 shadow-[0_0_20px_4px_rgba(10,239,255,.6)]"></span>
              <p className="text-zinc-200">{t}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
