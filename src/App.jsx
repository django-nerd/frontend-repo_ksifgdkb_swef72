import Layout from './components/Layout'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import ProductGrid from './components/ProductGrid'
import BrandSection from './components/BrandSection'

function App() {
  return (
    <Layout>
      <Hero />
      <ProductShowcase />
      <ProductGrid />
      <BrandSection />
    </Layout>
  )
}

export default App