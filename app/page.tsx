import Image from 'next/image'
import Link from 'next/link'
import { Footer, SiteHeader } from '@/components/site-shell'

/* ── uses data ── */
const uses = [
  {
    img: 'use-entertainment.jpg',
    title: 'Enter entertainment venues',
    desc: "Don't be afraid of security checks and easily enter nightclubs, bars and other entertainment venues.",
  },
  {
    img: 'use-event.jpg',
    title: 'Attend an event or competition',
    desc: 'Feel free to attend parties and social events, and legally participate in sporting events.',
  },
  {
    img: 'use-travel.jpg',
    title: 'Travel car rental and hotel stay',
    desc: 'Easily rent a car for cross-state travel in the United States and quickly check into your hotel.',
  },
  {
    img: 'use-purchase.jpg',
    title: 'Purchase restricted items',
    desc: 'Alcohol, tobacco and other products are no longer restricted and can be purchased at any time.',
  },
  {
    img: 'use-employment.jpg',
    title: 'Get employment opportunities',
    desc: 'Match career needs (sales, driver) and get a job faster and easier.',
  },
  {
    img: 'use-more.jpg',
    title: 'Waiting for you to unlock more uses',
    desc: '',
  },
]

/* ── how-to steps ── */
const steps = [
  'Fill in your fake ID and shipping address info',
  'Submit order, contact us, complete payment',
  'Get electronic fake ID preview (fastest 3 days)',
  'Get package tracking number (2 days later)',
  'Get fake ID package (fastest 5–7 days)',
]

/* ── review wall screenshot slots ── */
const reviewSlots = [
  'review-chat-1.jpg',
  'review-chat-2.jpg',
  'review-chat-3.jpg',
  'review-chat-4.jpg',
  'review-chat-5.jpg',
  'review-chat-6.jpg',
]

export default function HomePage() {
  return (
    <>
      <SiteHeader active="Home" />
      <main>

        {/* ── HERO BANNER — full width, no side panels, no zoom ── */}
        <section className="hero-banner" aria-label="LunaCardsVault hero banner">
          <Image
            src="/images/cartelhero.jpg"
            alt="LunaCardsVault — Premium Fake IDs"
            width={1400}
            height={400}
            priority
            style={{ display: 'block', width: '100%', height: 'auto' }}
          />
        </section>

        {/* ── MINIMAL INTRO ── */}
        <section className="home-intro">
          <div className="shell">
            <div className="home-intro-inner">
              <p className="home-intro-eyebrow">Est. 2010 · The #1 Fake ID Maker</p>
              <h2>LunaCards Vault</h2>
              <p className="home-intro-lead">
                Polycarbonate-grade scannable IDs for USA, Canada, UK &amp; Europe.
                Free duplicate on every order. Discreet worldwide shipping.
              </p>
              <div className="home-intro-pills">
                {['Scannable Barcode', 'UV Security', 'Free Duplicate', 'Discreet Shipping'].map(p => (
                  <span className="home-pill" key={p}>{p}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        <hr className="home-divider" />

        {/* ── CUSTOMER VIDEO REVIEWS — above feature cards ── */}
        <section className="reviews-section">
          <div className="shell">
            <h2>Real Customer Review</h2>
            <p>
              Watch a genuine customer video. Send us yours and receive a discount on your next order.
            </p>

            <div style={{ maxWidth: '720px', margin: '0 auto 24px', borderRadius: '10px', overflow: 'hidden', background: '#000', boxShadow: '0 8px 32px rgba(0,0,0,0.18)' }}>
              <video
                src="/videos/review.mp4"
                controls
                playsInline
                style={{ width: '100%', display: 'block' }}
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <div style={{ textAlign: 'center', marginBottom: '16px' }}>
              <Link href="/evaluate" style={{ display: 'inline-block', color: 'var(--red)', fontWeight: 700, fontSize: '14px', borderBottom: '1px solid var(--red)', paddingBottom: '2px', letterSpacing: '0.04em' }}>
                View all customer reviews →
              </Link>
            </div>
          </div>
        </section>

        <hr className="home-divider" />

        {/* ── 3-FEATURE PROOF ── images: usa.jpg / canada.jpg / uk.jpg ── */}
        <section className="features-section">
          <div className="shell">
            <div className="features-grid">

              <div className="feature-card">
                <Image
                  src="/images/france.jpg"
                  alt="USA Fake ID"
                  width={400}
                  height={270}
                  className="feature-card-img"
                />
                <h3>Shop Fake IDs</h3>
                <p>
                  Best selection of quality{' '}
                  <a href="/products">scannable fake ids</a> customized with your image and
                  information. Every card comes with a free duplicate.
                </p>
                <Link href="/products" className="view-more-link">View more →</Link>
              </div>

              <div className="feature-card">
                <Image
                  src="/images/ireland.jpg"
                  alt="Canada Fake ID"
                  width={400}
                  height={270}
                  className="feature-card-img"
                />
                <h3>Premium Fake ID Maker</h3>
                <p>
                  LunaCardsVault uses high quality laser card printers. Only printing on polycarbonate
                  card material identical to real issued IDs.
                </p>
                <Link href="/products" className="view-more-link">View more →</Link>
              </div>

              <div className="feature-card">
                <Image
                  src="/images/argentina.jpg"
                  alt="UK Fake ID"
                  width={400}
                  height={270}
                  className="feature-card-img"
                />
                <h3>Real LunaCardsVault Est. 2010</h3>
                <p>
                  <a href="/about">LunaCardsVault</a> is the official and real fake id maker for over 15
                  years. Do not mistake us for the knock offs!
                </p>
                <Link href="/products" className="view-more-link">View more →</Link>
              </div>

            </div>
          </div>
        </section>

        <hr className="home-divider" />

        {/* ── POLY CALLOUT ── */}
        <section style={{ padding: '52px 0 40px' }}>
          <div className="shell poly-section">
            <h2>Don&apos;t chance getting caught using your fake id!</h2>
            <p>
              It is vital that your fake id be printed on the correct material such as polycarbonate.
              When real it should make a distinct metallic sound like a DVD. Many states now use this
              material such as California, New York, Florida, and more. Rest assured that LunaCards Vault
              uses the correct polycarbonate material to make your fake ids.
            </p>
          </div>
        </section>

        {/* ── WHAT A SCANNABLE ID CAN DO FOR YOU ── */}
        <section className="uses-section" aria-labelledby="uses-heading">
          <div className="shell">
            <h2 id="uses-heading">What a scannable ID card can do for you?</h2>
            <div className="uses-grid">
              {uses.map((use) => (
                <div className="use-card" key={use.title}>
                  <Image
                    src={`/images/${use.img}`}
                    alt={use.title}
                    width={400}
                    height={258}
                    className="use-card-img"
                    style={{ width: '100%', aspectRatio: '1.55', objectFit: 'cover' }}
                  />
                  <h3>{use.title}</h3>
                  {use.desc && <p>{use.desc}</p>}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW TO GET THE BEST FAKE ID ── */}
        <section className="howto-section" aria-labelledby="howto-heading">
          <div className="shell">
            <h2 id="howto-heading">How to Get the Best Fake ID</h2>
            <div className="howto-grid">
              <div>
                <Image
                  src="/images/howto-delivery.jpg"
                  alt="Fake ID delivery"
                  width={480}
                  height={560}
                  className="howto-img"
                  style={{ width: '100%', borderRadius: '12px', objectFit: 'cover', aspectRatio: '0.85', display: 'block', background: '#222' }}
                />
              </div>
              <div className="howto-steps">
                {steps.map((step, i) => (
                  <div key={i}>
                    <div className="howto-step">
                      <span className="step-num">{i + 1}.</span>
                      <span className="step-text">{step}</span>
                    </div>
                    {i < steps.length - 1 && <span className="step-arrow">↓</span>}
                  </div>
                ))}
                <div className="howto-actions">
                  <Link href="/pricing" className="btn-yellow">Order Now</Link>
                  <Link href="/contact" className="btn-outline-dark">Contact Us</Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── TOUCH DOWN REVIEWS ── */}
        <section className="review-wall-section" aria-labelledby="touchdown-heading">
          <div className="shell">
            <h2 id="touchdown-heading">Touch Down Reviews</h2>
            <p>Real customer proof. Every screenshot is authentic — we deliver every time.</p>
            <div className="review-wall-grid">
              {reviewSlots.map((img, i) => (
                <div className="review-wall-item" key={i}>
                  <Image
                    src={`/images/${img}`}
                    alt={`Customer review ${i + 1}`}
                    width={360}
                    height={420}
                    style={{ width: '100%', aspectRatio: '0.85', objectFit: 'cover', display: 'block', borderRadius: 0 }}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA BANNER ── */}
        <section className="cta-banner" aria-label="Buy fake id call to action">
          <Image
            src="/images/cartelhero.jpg"
            alt=""
            fill
            style={{ objectFit: 'cover', zIndex: 0 }}
            aria-hidden="true"
          />
          <div className="cta-banner-bg" />
          <div className="shell cta-banner-content">
            <h2>Ready to get your fake id?</h2>
            <Link href="/products" className="btn-outline-white">BUY FAKE ID</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
