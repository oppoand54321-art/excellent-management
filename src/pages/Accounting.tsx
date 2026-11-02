import { Link } from 'react-router-dom'
import { CheckCircle, Calculator } from 'lucide-react'

const offerings = [
  'Bookkeeping and accounting',
  'Bank reconciliations',
  'Accounts payable and receivable',
  'Financial reporting',
  'Accounting records maintenance',
  'Cash flow monitoring',
  'Accounting software support',
]

export default function Accounting() {
  return (
    <div>
      <section className="relative py-32 bg-gradient-to-br from-darkblue via-navy to-royal">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm mb-6">
            <Calculator size={18} /> Accounting
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Bookkeeping & Accounting</h1>
          <p className="text-2xl text-softgray">Organized Accounts. Informed Decisions.</p>
        </div>
      </section>
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl text-softgray leading-relaxed mb-12 text-center">
            Accurate records support financial control and business decisions. Depending on the engagement, our team or appropriate professionals assist with bookkeeping and accounting requirements.
          </p>
          <h2 className="font-serif text-4xl font-bold text-center mb-12">How We Can Help</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {offerings.map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-6 glass rounded-xl">
                <CheckCircle className="text-gold" />
                <span className="text-lg">{item}</span>
              </div>
            ))}
          </div>
          <div className="mt-16 p-8 glass rounded-2xl">
            <h3 className="text-2xl font-semibold text-gold mb-4">Our Approach</h3>
            <p className="text-softgray">We discuss your needs, confirm the proposed scope and identify whether the work is delivered directly or coordinated through an external professional. Where applicable, we help manage communication and next steps.</p>
          </div>
        </div>
      </section>
      <section className="py-20 bg-royal text-center">
        <h2 className="font-serif text-4xl font-bold mb-6">Need help with bookkeeping & accounting?</h2>
        <Link to="/contact" className="inline-block bg-gold text-navy px-10 py-4 rounded-full font-semibold text-lg">
          Request a Consultation
        </Link>
      </section>
    </div>
  )
}
