import { Link } from 'react-router-dom'
import { CheckCircle, Building2 } from 'lucide-react'

const offerings = [
  'Mainland and free zone setup guidance',
  'Business activity and licence selection',
  'Company registration coordination',
  'Documentation and application support',
  'Business setup consultation',
  'Coordination with specialist service providers',
]

export default function BusinessFormation() {
  return (
    <div>
      <section className="relative py-32 bg-gradient-to-br from-navy via-royal to-darkblue">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 bg-gold/20 text-gold px-4 py-2 rounded-full text-sm mb-6">
            <Building2 size={18} /> Business Formation
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Business Formation & Company Setup</h1>
          <p className="text-2xl text-softgray">Your Business Journey Starts Here.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl text-softgray leading-relaxed mb-12 text-center">
            We guide entrepreneurs and investors through UAE company setup options and coordinate with relevant formation specialists and service providers.
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

          <div className="mt-8 p-8 glass rounded-2xl">
            <h3 className="text-2xl font-semibold text-gold mb-4">Who This Service Is For</h3>
            <p className="text-softgray">Entrepreneurs, startups, SMEs and established UAE businesses seeking practical assistance and professional guidance.</p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-royal text-center">
        <h2 className="font-serif text-4xl font-bold mb-6">Need help with business formation & company setup?</h2>
        <p className="text-softgray mb-8">Contact Excellent Management Consultancy to discuss the right solution for your business.</p>
        <Link to="/contact" className="inline-block bg-gold hover:bg-lightgold text-navy px-10 py-4 rounded-full font-semibold text-lg">
          Request a Consultation
        </Link>
      </section>
    </div>
  )
}
