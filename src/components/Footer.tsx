import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin } from 'lucide-react'

const services = [
  { name: 'Business Formation', path: '/services/business-formation' },
  { name: 'Bookkeeping & Accounting', path: '/services/accounting' },
  { name: 'Corporate Tax', path: '/services/corporate-tax' },
  { name: 'VAT Consultancy', path: '/services/vat-consultancy' },
  { name: 'E-Invoicing', path: '/services/e-invoicing' },
  { name: 'Audit Coordination', path: '/services/audit' },
  { name: 'Business Advisory', path: '/services/business-advisory' },
]

export default function Footer() {
  return (
    <footer className="bg-darkblue border-t border-gold/20 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 gold-gradient rounded-lg flex items-center justify-center text-navy font-bold">EM</div>
              <div className="font-serif text-xl font-semibold">Excellent Management</div>
            </div>
            <p className="text-softgray text-sm leading-relaxed mb-6">
              One Trusted Partner. Complete Business Solutions.<br />
              Helping Businesses Start, Manage, Comply & Grow in the UAE.
            </p>
            <div className="text-gold text-sm font-medium">Part of Excellent Group</div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-6">Quick Links</h3>
            <div className="space-y-3">
              <Link to="/" className="block text-softgray hover:text-gold text-sm transition">Home</Link>
              <Link to="/#about" className="block text-softgray hover:text-gold text-sm transition">About</Link>
              <Link to="/#why-us" className="block text-softgray hover:text-gold text-sm transition">Why Choose Us</Link>
              <Link to="/#contact" className="block text-softgray hover:text-gold text-sm transition">Contact</Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6">Our Services</h3>
            <div className="space-y-3">
              {services.map((s) => (
                <Link key={s.path} to={s.path} className="block text-softgray hover:text-gold text-sm transition">
                  {s.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-gold mt-0.5" />
                <div>
                  <div className="text-sm text-softgray">Hussain Mazher</div>
                  <a href="tel:+971556058452" className="text-white hover:text-gold transition">+971 55 605 8452</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-gold mt-0.5" />
                <a href="mailto:hussain@theexcellentgroup.com" className="text-white hover:text-gold transition text-sm">
                  hussain@theexcellentgroup.com
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-gold mt-0.5" />
                <div className="text-softgray text-sm">United Arab Emirates</div>
              </div>
            </div>
            <a 
              href="https://wa.me/971556058452" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-6 bg-green-600 hover:bg-green-500 text-white px-5 py-2.5 rounded-full text-sm font-medium transition"
            >
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="border-t border-gold/20 mt-12 pt-8 text-center text-softgray text-sm">
          © {new Date().getFullYear()} The Excellent Management Consultancy. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
