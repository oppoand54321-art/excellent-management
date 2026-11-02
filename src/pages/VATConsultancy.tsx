import { Link } from 'react-router-dom'
import { CheckCircle, Receipt } from 'lucide-react'
const offerings = ['VAT registration assistance','VAT return preparation and filing support','VAT deregistration assistance','VAT recordkeeping guidance','VAT compliance reviews','VAT advisory coordination']
export default function VATConsultancy() {
  return (
    <div>
      <section className="relative py-32 bg-gradient-to-br from-darkblue via-royal to-navy">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm mb-6"><Receipt size={18} /> VAT</div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">VAT Consultancy & Compliance</h1>
          <p className="text-2xl text-softgray">Making VAT Compliance Simpler.</p>
        </div>
      </section>
      <section className="py-20"><div className="max-w-4xl mx-auto px-4">
        <p className="text-xl text-softgray leading-relaxed mb-12 text-center">We support businesses with VAT-related registration, recordkeeping and compliance requirements, with specialist coordination when needed.</p>
        <h2 className="font-serif text-4xl font-bold text-center mb-12">How We Can Help</h2>
        <div className="grid md:grid-cols-2 gap-6">{offerings.map((item,i)=><div key={i} className="p-8 glass rounded-2xl flex items-start gap-4"><CheckCircle className="text-gold mt-1"/><span className="text-lg">{item}</span></div>)}</div>
      </div></section>
      <section className="py-20 bg-royal text-center"><h2 className="font-serif text-4xl font-bold mb-6">Need help with VAT consultancy & compliance?</h2><Link to="/contact" className="inline-block bg-gold text-navy px-10 py-4 rounded-full font-semibold text-lg">Request a Consultation</Link></section>
    </div>
  )
}
