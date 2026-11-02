import { Link } from 'react-router-dom'
import { CheckCircle, Search } from 'lucide-react'
const offerings = ['Audit preparation assistance','Financial documentation coordination','External auditor liaison','Accounting records review support','Financial process improvement guidance','Independent audit service coordination']
export default function Audit() {
  return (
    <div>
      <section className="relative py-32 bg-gradient-to-br from-royal to-navy">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm mb-6"><Search size={18} /> Audit</div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Audit Coordination & Financial Review</h1>
          <p className="text-2xl text-softgray">Reliable Financial Information Builds Confidence.</p>
        </div>
      </section>
      <section className="py-20"><div className="max-w-4xl mx-auto px-4">
        <p className="text-xl text-softgray leading-relaxed mb-12 text-center">We help businesses prepare records and coordinate independent audit engagements with appropriately licensed auditors. We do not imply that independent audits are performed in-house.</p>
        <h2 className="font-serif text-4xl font-bold text-center mb-12">How We Can Help</h2>
        <div className="grid md:grid-cols-2 gap-6">{offerings.map((item,i)=><div key={i} className="p-8 glass rounded-2xl flex items-start gap-4"><CheckCircle className="text-gold mt-1"/><span className="text-lg">{item}</span></div>)}</div>
      </div></section>
      <section className="py-20 bg-royal text-center"><h2 className="font-serif text-4xl font-bold mb-6">Need help with audit coordination & financial review?</h2><Link to="/contact" className="inline-block bg-gold text-navy px-10 py-4 rounded-full font-semibold text-lg">Request a Consultation</Link></section>
    </div>
  )
}
