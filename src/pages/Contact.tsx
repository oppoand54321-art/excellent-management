import { Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div>
      <section className="relative py-14 md:py-16 bg-gradient-to-br from-navy to-royal">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl font-bold mb-3 text-gold">Contact Us</h1>
          <p className="text-xl text-softgray">Let’s Find the Right Solution for Your Business.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xl text-softgray text-center mb-16 max-w-3xl mx-auto">
            For business formation, bookkeeping, corporate tax, VAT, e-invoicing and professional consultancy, contact us to discuss your requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            {[
              { name: 'Hussain Mazher', services: 'Bookkeeping & Accounting, Corporate Tax, VAT, E-Invoicing and Audit Coordination', phone: '+971 55 605 8452', tel: '+971556058452', email: 'hussain@thexcellentgroup.com' },
              { name: 'Moiz Mazhar', services: 'Business Formation', phone: '+971 56 877 2552', tel: '+971568772552', email: 'moiz@thexcellentgroup.com' },
              { name: 'Muhammad Laeeq', services: 'Business Advisory', phone: '+971 55 398 3077', tel: '+971553983077', email: 'laeeq@thexcellentgroup.com' },
            ].map((person) => (
              <div key={person.email} className="glass rounded-2xl p-7 text-center">
                <Phone className="text-gold mx-auto mb-4" size={30} />
                <h3 className="text-xl font-semibold mb-2">{person.name}</h3>
                <p className="min-h-16 text-sm leading-relaxed text-softgray mb-4">{person.services}</p>
                <a href={`tel:${person.tel}`} className="block text-softgray hover:text-gold">{person.phone}</a>
                <a href={`mailto:${person.email}`} className="mt-2 block break-all text-sm text-softgray hover:text-gold">{person.email}</a>
                {person.name === 'Hussain Mazher' && (
                  <a href="mailto:info@theexcellentmanagement.com" className="mt-1 block break-all text-sm text-softgray hover:text-gold">
                    info@theexcellentmanagement.com
                  </a>
                )}
              </div>
            ))}
          </div>

          <div className="glass mb-12 flex flex-col items-center justify-center gap-3 rounded-2xl p-6 text-center sm:flex-row">
            <MapPin className="shrink-0 text-gold" size={24} />
            <div>
              <h3 className="font-semibold">Our Location</h3>
              <p className="text-softgray">Block B, Office B22-030, Sharjah, UAE</p>
            </div>
          </div>

          <div className="text-center">
            <a href="https://wa.me/971556058452" target="_blank" rel="noopener noreferrer" className="inline-block bg-green-600 hover:bg-green-500 text-white px-10 py-4 rounded-full font-semibold text-lg mr-4">
              WhatsApp Us
            </a>
            <a href="tel:+971556058452" className="inline-block bg-gold hover:bg-lightgold text-navy px-10 py-4 rounded-full font-semibold text-lg">
              Book Your Consultation Today
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
