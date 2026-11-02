import { Link } from 'react-router-dom'
import { CheckCircle, Users } from 'lucide-react'
const offerings = ['General business consultancy','Business operations guidance','Professional service referrals','Specialist advisory coordination','Business documentation support','Financial and regulatory consultancy coordination','Ongoing business support']
export default function BusinessAdvisory() {
  return (
    <div>
      <section className="relative py-32 bg-gradient-to-br from-navy via-darkblue to-royal">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm mb-6"><Users size={18} /> Advisory</div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Business Advisory & Professional Services Coordination</h1>
          <p className="text-2xl text-softgray">The Right People. The Right Solutions.</p>
        </div>
      </section>
      <section className="py-20"><div className="max-w-4xl mx-auto px-4">
        <p className="text-xl text-softgray leading-relaxed mb-12 text-center">We identify business requirements and help clients access suitable professional expertise through our network.</p>
        <h2 className="font-serif text-4xl font-bold text-center mb-12">How We Can Help</h2>
        <div className="space-y-4">{offerings.map((item,i)=><div key={i} className="flex items-center gap-4 p-6 glass rounded-xl"><CheckCircle className="text-gold"/><span className="text-lg">{item}</span></div>)}</div>
      </div></section>
      <section className="py-20 bg-royal text-center"><h2 className="font-serif text-4xl font-bold mb-6">Need help with business advisory & professional services coordination?</h2><Link to="/contact" className="inline-block bg-gold text-navy px-10 py-4 rounded-full font-semibold text-lg">Request a Consultation</Link></section>
    </div>
  )
}
