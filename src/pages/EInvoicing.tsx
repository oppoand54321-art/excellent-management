import { Link } from 'react-router-dom'
import { CheckCircle, FileText } from 'lucide-react'
const offerings = ['E-invoicing readiness assessments','Review of existing invoicing processes','Accounting and invoicing system guidance','Technology provider coordination','Implementation planning support','Regulatory readiness guidance']
export default function EInvoicing() {
  return (
    <div>
      <section className="relative py-32 bg-gradient-to-br from-navy to-darkblue">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm mb-6"><FileText size={18} /> E-Invoicing</div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">E-Invoicing Readiness & Advisory</h1>
          <p className="text-2xl text-softgray">Prepare Your Business for Digital Compliance.</p>
        </div>
      </section>
      <section className="py-20"><div className="max-w-4xl mx-auto px-4">
        <p className="text-xl text-softgray leading-relaxed mb-12 text-center">As UAE electronic invoicing requirements are introduced in phases, we help businesses assess readiness and coordinate appropriate technology and implementation support.</p>
        <h2 className="font-serif text-4xl font-bold text-center mb-12">How We Can Help</h2>
        <div className="space-y-4">{offerings.map((item,i)=><div key={i} className="flex items-center gap-4 p-6 glass rounded-xl"><CheckCircle className="text-gold"/><span className="text-lg">{item}</span></div>)}</div>
      </div></section>
      <section className="py-20 bg-royal text-center"><h2 className="font-serif text-4xl font-bold mb-6">Need help with e-invoicing readiness & advisory?</h2><Link to="/contact" className="inline-block bg-gold text-navy px-10 py-4 rounded-full font-semibold text-lg">Request a Consultation</Link></section>
    </div>
  )
}
