import { Link } from 'react-router-dom'
import { ArrowRight, Building2, Calculator, Scale, FileText, Receipt, Search, Users, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  { icon: Building2, title: 'Business Formation', desc: 'Mainland & Free Zone company setup with full licensing support.', path: '/services/business-formation' },
  { icon: Calculator, title: 'Bookkeeping & Accounting', desc: 'Accurate records, reporting and financial clarity for your business.', path: '/services/accounting' },
  { icon: Scale, title: 'Corporate Tax', desc: 'Registration, compliance and strategic tax planning support.', path: '/services/corporate-tax' },
  { icon: Receipt, title: 'VAT Consultancy', desc: 'Registration, returns and ongoing VAT compliance simplified.', path: '/services/vat-consultancy' },
  { icon: FileText, title: 'E-Invoicing', desc: 'Readiness assessment and implementation for digital invoicing.', path: '/services/e-invoicing' },
  { icon: Search, title: 'Audit Coordination', desc: 'Organized records and smooth liaison with external auditors.', path: '/services/audit' },
  { icon: Users, title: 'Business Advisory', desc: 'Expert connections and ongoing strategic business support.', path: '/services/business-advisory' },
]

const whyUs = [
  'One point of contact for multiple business requirements',
  'Selected services delivered directly, with specialist support coordinated as needed',
  'UAE-focused guidance and practical solutions',
  'Clear communication and transparent scope of work',
  'Support for new and established businesses',
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-darkblue to-royal opacity-90" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
        
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl font-bold leading-tight mb-6"
          >
            One Trusted Partner.<br />
            <span className="text-transparent bg-clip-text gold-gradient">Complete Business Solutions.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-softgray max-w-3xl mx-auto mb-6"
          >
            Helping Businesses Start, Manage, Comply & Grow in the UAE.
          </motion.p>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-softgray max-w-3xl mx-auto mb-10"
          >
            From company formation and bookkeeping to corporate tax, VAT, e-invoicing and specialist business advisory, we deliver selected services directly and coordinate others through our professional network. One point of contact, practical guidance and the right expertise for your needs.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link to="#services" className="bg-gold hover:bg-lightgold text-navy px-8 py-4 rounded-full font-semibold text-lg transition flex items-center justify-center gap-2">
              Explore Our Services <ArrowRight size={20} />
            </Link>
            <a href="tel:+971556058452" className="border-2 border-gold text-gold hover:bg-gold hover:text-navy px-8 py-4 rounded-full font-semibold text-lg transition">
              Book a Consultation
            </a>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-24 bg-darkblue">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8">Your Business Needs. Our Expertise. The Right Connections.</h2>
          <p className="text-xl text-softgray leading-relaxed max-w-3xl mx-auto">
            The Excellent Management Consultancy, part of Excellent Group, supports entrepreneurs, SMEs and established companies with practical business consultancy, financial support and professional service coordination. We assess your requirements, explain the available options and help arrange the appropriate support.
          </p>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Comprehensive Business & Financial Solutions</h2>
            <div className="w-24 h-1 gold-gradient mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 hover:border-gold/50 transition-all duration-300 group"
              >
                <div className="w-14 h-14 gold-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition">
                  <s.icon className="text-navy" size={28} />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{s.title}</h3>
                <p className="text-softgray mb-6 leading-relaxed">{s.desc}</p>
                <Link to={s.path} className="inline-flex items-center gap-2 text-gold hover:text-lightgold font-medium transition">
                  Learn More <ArrowRight size={18} />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-darkblue">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <div className="w-24 h-1 gold-gradient mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyUs.map((item, i) => (
              <div key={i} className="flex items-start gap-4 p-6 glass rounded-xl">
                <CheckCircle className="text-gold flex-shrink-0 mt-1" size={24} />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-r from-royal to-darkblue relative">
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">Your Business Needs. Our Expertise. The Right Connections.</h2>
          <p className="text-xl text-softgray mb-10">Contact us to discuss your requirements.</p>
          <Link to="/contact" className="inline-block bg-gold hover:bg-lightgold text-navy px-10 py-4 rounded-full font-semibold text-lg transition">
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
