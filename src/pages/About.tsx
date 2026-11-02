
export default function About() {
  return (
    <div>
      <section className="relative py-32 bg-gradient-to-br from-navy via-royal to-darkblue">
        <div className="relative max-w-5xl mx-auto px-4 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-2xl text-softgray">Part of Excellent Group</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <p className="text-xl text-softgray leading-relaxed mb-12">
            The Excellent Management Consultancy is a UAE-based business consultancy and part of Excellent Group. We help entrepreneurs, startups, SMEs and established companies manage business formation, financial records, tax-related requirements and broader professional needs. Our hybrid model combines selected in-house consultancy and support services with coordination through external professionals where specialist skills or authorizations are needed.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gold mb-4">Our Mission</h3>
              <p className="text-softgray">To simplify business operations through reliable consultancy, practical financial support and access to qualified professional expertise.</p>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gold mb-4">Our Vision</h3>
              <p className="text-softgray">To become a trusted UAE business consultancy and professional services solutions partner, recognized for integrity, professionalism and long-term relationships.</p>
            </div>
            <div className="glass rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-gold mb-4">Our Approach</h3>
              <p className="text-softgray">We listen, assess, recommend and coordinate. Before an engagement, we clarify who will deliver each service and the agreed responsibilities.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
