import { Link } from 'react-router-dom'
import { CheckCircle, Scale } from 'lucide-react'
const offerings = ['Corporate tax registration assistance','Corporate tax applicability guidance','Tax return preparation and filing support','Compliance reviews','Tax documentation assistance','Coordination with qualified tax professionals']
export default function CorporateTax() {
  return (
    <div>
      <section className="relative py-32 bg-gradient-to-br from-navy to-royal">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm mb-6"><Scale size={18} /> Corporate Tax</div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Corporate Tax Consultancy</h1>
          <p className="text-2xl text-softgray">Navigate Tax Obligations with Confidence.</p>
        </div>
      </section>
      <section className="py-20"><div className="max-w-4xl mx-auto px-4">
        <p className="text-xl text-softgray leading-relaxed mb-12 text-center">We help businesses understand their UAE corporate tax obligations and arrange specialist tax support where required.</p>
        <h2 className="font-serif text-4xl font-bold text-center mb-12">How We Can Help</h2>
        <div className="space-y-4">{offerings.map((item,i)=><div key={i} className="flex items-center gap-4 p-6 glass rounded-xl"><CheckCircle className="text-gold"/><span className="text-lg">{item}</span></div>)}</div>
      </div></section>
      <section className="py-20 bg-royal text-center"><h2 className="font-serif text-4xl font-bold mb-6">Need help with corporate tax consultancy?</h2><Link to="/contact" className="inline-block bg-gold text-navy px-10 py-4 rounded-full font-semibold text-lg">Request a Consultation</Link></section>
    </div>
  )
}
