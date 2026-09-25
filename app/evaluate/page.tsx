import { Footer, PageHeader, SiteHeader } from '@/components/site-shell'

/* ── Proof images from /public/images ── */
const proofImages = [
  '/images/proof1.png',
  '/images/proof2.png',
  '/images/proof3.png',
  '/images/proof4.png',
  '/images/proof5.png',
  '/images/proof6.png',
  '/images/proof7.png',
  '/images/proof8.png',
  '/images/proof9.jpg',
]

const avatarPool = [
  'https://i.pravatar.cc/80?img=1',
  'https://i.pravatar.cc/80?img=2',
  'https://i.pravatar.cc/80?img=3',
  'https://i.pravatar.cc/80?img=4',
  'https://i.pravatar.cc/80?img=5',
  'https://i.pravatar.cc/80?img=6',
]

/* ── Exactly 6 reviews ── */
const reviews = [
  { name: 'Tyler M.',    location: 'California, USA', rating: 5, text: 'The package disguise worked brilliantly, completely flew under the radar. Arrived in a plain envelope with no markings — exactly what I needed.' },
  { name: 'Jordan K.',   location: 'New York, USA',   rating: 5, text: 'Had to unwrap three layers to find the card — the concealment is next level! Packaging alone is worth it, never had a delivery flagged.' },
  { name: 'Samantha R.', location: 'Florida, USA',    rating: 5, text: 'I ordered during the limited-time sale, and it was such a great deal! Very satisfied — the quality exceeded my expectations. Highly recommend!' },
  { name: 'Alex D.',     location: 'Texas, USA',      rating: 5, text: 'Scanned perfectly at two different venues the same night. The barcode returned exactly what it should — this is the real deal.' },
  { name: 'Marcus T.',   location: 'Illinois, USA',   rating: 5, text: 'Customer support was incredible. I had a question at midnight and got a reply in under 20 minutes via WhatsApp. Fast and professional.' },
  { name: 'Priya N.',    location: 'Ontario, Canada', rating: 5, text: 'The UV layer is stunning. Held it under a blacklight and everything lit up exactly the way it should. Matched the real thing side by side.' },
]

function Stars({ rating }: { rating: number }) {
  return (
    <div style={{ display: 'flex', gap: '2px', marginBottom: '8px' }}>
      {[1,2,3,4,5].map(s => (
        <svg key={s} viewBox="0 0 20 20" width="16" height="16" fill={s <= rating ? '#e8a000' : '#ddd'}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  )
}

export default function EvaluatePage() {
  return (
    <>
      <SiteHeader active="Evaluate" />
      <main>
        <PageHeader title="CUSTOMER REVIEWS" />

        <div className="evaluate-page shell">

          {/* Summary bar */}
          <div className="evaluate-summary">
            <div className="evaluate-score">
              <span className="evaluate-score-num">4.9</span>
              <div>
                <div style={{ display: 'flex', gap: '3px', marginBottom: '4px' }}>
                  {[1,2,3,4,5].map(s => (
                    <svg key={s} viewBox="0 0 20 20" width="22" height="22" fill="#e8a000">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 0 0 .95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 0 0-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 0 0-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 0 0-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 0 0 .951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Based on {reviews.length} verified reviews</p>
              </div>
            </div>
          </div>

          {/* Proof images strip */}
          <div className="evaluate-proof-grid">
            {proofImages.map((src, i) => (
              <div key={i} className="evaluate-proof-item">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={`Customer proof ${i + 1}`} loading="lazy"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
              </div>
            ))}
          </div>

          {/* Count label */}
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '24px' }}>
            Showing 1–{reviews.length} of {reviews.length} reviews
          </p>

          {/* Review cards */}
          <div className="evaluate-reviews-grid">
            {reviews.map((r, i) => (
              <article key={i} className="evaluate-review-card">
                <div className="evaluate-review-header">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={avatarPool[i]} alt={r.name} className="evaluate-avatar" loading="lazy" />
                  <div>
                    <p className="evaluate-reviewer-name">{r.name}</p>
                    <p className="evaluate-reviewer-location">{r.location}</p>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={proofImages[i]} alt="proof" className="evaluate-proof-thumb" loading="lazy" />
                </div>
                <Stars rating={r.rating} />
                <p className="evaluate-review-text">{r.text}</p>
                <p className="evaluate-review-verified">
                  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22c55e"
                    strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                    style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }}>
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Verified purchase
                </p>
              </article>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
