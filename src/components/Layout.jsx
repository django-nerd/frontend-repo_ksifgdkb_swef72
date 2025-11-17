import { useEffect } from 'react'

export default function Layout({ children }) {
  useEffect(() => {
    const el = document.body
    const onMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5
      const y = e.clientY / window.innerHeight - 0.5
      el.style.setProperty('--mx', x)
      el.style.setProperty('--my', y)
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div className="bg-black text-white min-h-screen" style={{
      backgroundImage: 'radial-gradient(600px 200px at calc(50% + var(--mx,0)*80px) calc(0% + var(--my,0)*80px), rgba(10,239,255,0.12), rgba(0,0,0,0)), radial-gradient(circle at 20% 20%, rgba(255,255,255,0.06), transparent 40%)'
    }}>
      <header className="max-w-7xl mx-auto px-6 sm:px-12 py-6 flex items-center justify-between">
        <a href="/" className="font-extrabold tracking-wider text-xl">ULTRA</a>
        <nav className="flex items-center gap-6 text-zinc-300">
          <a href="#products" className="hover:text-white">Products</a>
          <a href="#brand" className="hover:text-white">Brand</a>
          <a href="/test" className="hover:text-white">System</a>
        </nav>
      </header>
      {children}
      <footer className="border-t border-zinc-800 mt-20">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 py-10 flex items-center justify-between text-zinc-400 text-sm">
          <p>© ULTRA — uncompromising</p>
          <div className="flex gap-6">
            <span>Privacy</span>
            <span>Terms</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
