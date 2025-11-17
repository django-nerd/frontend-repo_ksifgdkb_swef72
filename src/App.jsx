import Layout from './components/Layout'
import Hero from './components/Hero'
import ProductShowcase from './components/ProductShowcase'
import ProductGrid from './components/ProductGrid'
import BrandSection from './components/BrandSection'
import ErrorBoundary from './components/ErrorBoundary'

function App() {
  return (
    <Layout>
      <ErrorBoundary>
        <Hero />
      </ErrorBoundary>
      <ProductShowcase />
      <ProductGrid />
      <BrandSection />
    </Layout>
  )
}

export default App
