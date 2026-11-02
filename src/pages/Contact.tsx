import { Phone, Mail, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <div>
      <section className="relative py-32 bg-gradient-to-br from-navy to-royal">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-2xl text-softgray">Let’s Find the Right Solution for Your Business.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-xl text-softgray text-center mb-16 max-w-3xl mx-auto">
            For business formation, bookkeeping, corporate tax, VAT, e-invoicing and professional consultancy, contact us to discuss your requirements.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="glass rounded-2xl p-8 text-center">
              <Phone className="text-gold mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <a href="tel:+971556058452" className="text-softgray hover:text-gold">+971 55 605 8452</a>
              <div className="text-sm text-softgray mt-2">Hussain Mazher</div>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <Mail className="text-gold mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <a href="mailto:hussain@theexcellentgroup.com" className="text-softgray hover:text-gold break-all">hussain@theexcellentgroup.com</a>
            </div>
            <div className="glass rounded-2xl p-8 text-center">
              <MapPin className="text-gold mx-auto mb-4" size={32} />
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <div className="text-softgray">United Arab Emirates</div>
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
