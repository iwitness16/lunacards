import { Footer, PageHeader, SiteHeader } from '@/components/site-shell'

export default function ContactPage() {
  return (
    <>
      <SiteHeader active="Contact" />
      <main>
        <PageHeader title="CONTACT US" />

        <div className="contact-page shell">
          <div className="contact-grid">

            {/* Info side */}
            <div className="contact-info">
              <h2>Get In Touch</h2>
              <p>
                The fastest way to reach us is via <strong>WhatsApp</strong> or{' '}
                <strong>Telegram</strong>. We typically respond within a few hours.
              </p>
              <p><strong>WhatsApp:</strong> +1 (661) 646-5626</p>
              <p><strong>Telegram:</strong> @Lunacardvault01</p>
              <p><strong>Email:</strong> lunacardsvault@gmail.com</p>
              <p style={{ marginTop: '20px', fontSize: '13px', color: '#888' }}>
                Monday – Friday / 9am – 9pm EST
                <br />
                Saturday / 10am – 6pm EST
              </p>
              <div className="contact-social">
                <a href="https://wa.me/19342689086" className="social-btn social-wa" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.528 5.857L.057 23.882a.5.5 0 0 0 .611.612l6.166-1.453A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.592-.5-5.088-1.375l-.36-.214-3.733.88.897-3.643-.235-.375A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
                </a>
                <a href="https://t.me/Lunacardvault01" className="social-btn social-tg" aria-label="Message on Telegram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
                </a>
                <a href="mailto:lunacardsvault@gmail.com" className="social-btn social-em" aria-label="Send an email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                </a>
              </div>
            </div>

            {/* Form side */}
            <form className="contact-form" action="#" method="POST">
              <label>
                Your Name
                <input name="name" type="text" placeholder="Full name" required />
              </label>
              <label>
                Email Address
                <input name="email" type="email" placeholder="you@example.com" required />
              </label>
              <label>
                State / Country (product interested in)
                <select name="product">
                  <option value="">— Select a product —</option>
                  <optgroup label="USA States">
                    {['Alabama','Alaska','Arizona','Arkansas','California','Colorado','Connecticut','Delaware','Florida','Georgia','Hawaii','Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky','Louisiana','Maine','Maryland','Massachusetts','Michigan','Minnesota','Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire','New Jersey','New Mexico','New York','North Carolina','North Dakota','Ohio','Oklahoma','Oregon','Pennsylvania','Rhode Island','South Carolina','South Dakota','Tennessee','Texas','Utah','Vermont','Virginia','Washington','West Virginia','Wisconsin','Wyoming'].map((s) => (
                      <option key={s} value={s}>{s} Fake ID</option>
                    ))}
                  </optgroup>
                  <optgroup label="Canada Provinces">
                    {['Alberta','British Columbia','Manitoba','New Brunswick','Newfoundland','Nova Scotia','Ontario','Prince Edward Island','Quebec','Saskatchewan'].map((p) => (
                      <option key={p} value={p}>{p} Fake ID</option>
                    ))}
                  </optgroup>
                  <optgroup label="International">
                    {['United Kingdom','France','Germany','Belgium','Ireland'].map((c) => (
                      <option key={c} value={c}>{c} Fake ID</option>
                    ))}
                  </optgroup>
                </select>
              </label>
              <label>
                Quantity
                <select name="quantity">
                  <option value="1">1 ID — $100</option>
                  <option value="2">2 IDs — $80 each</option>
                  <option value="3">3–4 IDs — $70 each</option>
                  <option value="5">5+ IDs — $50 each</option>
                </select>
              </label>
              <label>
                Message / Order Details
                <textarea
                  name="message"
                  rows={6}
                  placeholder="Tell us what you need — include your name, DOB, address, height, weight, eye color, and any other details."
                />
              </label>
              <button type="submit" className="btn-red">
                Send Order Enquiry →
              </button>
            </form>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
