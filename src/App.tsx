import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import BusinessFormation from './pages/BusinessFormation'
import Accounting from './pages/Accounting'
import CorporateTax from './pages/CorporateTax'
import VATConsultancy from './pages/VATConsultancy'
import EInvoicing from './pages/EInvoicing'
import Audit from './pages/Audit'
import BusinessAdvisory from './pages/BusinessAdvisory'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-navy">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services/business-formation" element={<BusinessFormation />} />
            <Route path="/services/accounting" element={<Accounting />} />
            <Route path="/services/corporate-tax" element={<CorporateTax />} />
            <Route path="/services/vat-consultancy" element={<VATConsultancy />} />
            <Route path="/services/e-invoicing" element={<EInvoicing />} />
            <Route path="/services/audit" element={<Audit />} />
            <Route path="/services/business-advisory" element={<BusinessAdvisory />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
