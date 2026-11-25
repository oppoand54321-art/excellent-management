import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown, Phone } from 'lucide-react'
import logo from '../assets/logo.png'

const services = [
  { name: 'Business Formation', path: '/services/business-formation' },
  { name: 'Bookkeeping & Accounting', path: '/services/accounting' },
  { name: 'Corporate Tax', path: '/services/corporate-tax' },
  { name: 'VAT Consultancy', path: '/services/vat-consultancy' },
  { name: 'E-Invoicing', path: '/services/e-invoicing' },
  { name: 'Audit Coordination', path: '/services/audit' },
  { name: 'Business Advisory', path: '/services/business-advisory' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const location = useLocation()

  const isActive = (path: string) => location.pathname === path

  return (
    <header className="sticky top-0 z-50 bg-navy/90 backdrop-blur-md border-b border-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center min-h-28 py-3">
          <Link to="/" className="flex items-center gap-3">
            <img src={logo} alt="The Excellent Group logo" className="w-20 h-20 shrink-0 rounded-lg bg-white p-1 object-contain" />
            <div>
              <div className="font-serif text-lg sm:text-xl font-semibold gold-wording">The Excellent Management</div>
              <div className="font-serif text-lg sm:text-xl font-semibold gold-wording">Consultancy</div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            <Link to="/" className={`text-base font-semibold transition gold-wording ${isActive('/') ? '' : 'hover:brightness-125'}`}>Home</Link>
            <Link to="/about" className={`text-base font-semibold transition gold-wording ${isActive('/about') ? '' : 'hover:brightness-125'}`}>About</Link>
            
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                type="button"
                aria-haspopup="true"
                aria-expanded={servicesOpen}
                onClick={() => setServicesOpen(true)}
                className="flex items-center gap-1 text-base font-semibold gold-wording transition hover:brightness-125"
              >
                Services <ChevronDown size={16} className="shrink-0 text-gold" />
              </button>
              {servicesOpen && (
                <div className="absolute top-full left-0 w-64 pt-2">
                  <div className="glass rounded-xl p-2 shadow-2xl border border-gold/30">
                    {services.map((s) => (
                    <Link key={s.path} to={s.path} onClick={() => setServicesOpen(false)} className="block px-4 py-3 text-base gold-wording hover:bg-royal/50 rounded-lg transition">
                        {s.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/contact" className={`text-base font-semibold transition gold-wording ${isActive('/contact') ? '' : 'hover:brightness-125'}`}>Contact</Link>
            
            <a href="tel:+971556058452" className="flex items-center gap-2 bg-gold hover:bg-lightgold text-navy px-5 py-2.5 rounded-full text-sm font-semibold transition">
              <Phone size={16} /> Get Consultation
            </a>
          </nav>

          <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden glass border-t border-gold/20">
          <div className="px-4 py-6 space-y-4">
            <Link to="/" onClick={() => setMobileOpen(false)} className="block text-white font-medium">Home</Link>
            <Link to="/about" onClick={() => setMobileOpen(false)} className="block gold-wording text-base">About</Link>
            <div>
              <div className="text-white font-medium mb-2">Services</div>
              {services.map((s) => (
                <Link key={s.path} to={s.path} onClick={() => setMobileOpen(false)} className="block pl-4 py-2 gold-wording text-base">
                  {s.name}
                </Link>
              ))}
            </div>
            <Link to="/contact" onClick={() => setMobileOpen(false)} className="block gold-wording text-base">Contact</Link>
            <a href="tel:+971556058452" className="block text-center bg-gold text-navy py-3 rounded-full font-semibold mt-4">Get Consultation</a>
          </div>
        </div>
      )}
    </header>
  )
}
