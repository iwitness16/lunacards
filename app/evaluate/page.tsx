'use client'

import { useState } from 'react'
import { Footer, PageHeader, SiteHeader } from '@/components/site-shell'

const REVIEWS_PER_PAGE = 6

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

/* ── Avatar pool (pravatar — no upload needed) ── */
const avatarPool = [
  'https://i.pravatar.cc/80?img=1',
  'https://i.pravatar.cc/80?img=2',
  'https://i.pravatar.cc/80?img=3',
  'https://i.pravatar.cc/80?img=4',
  'https://i.pravatar.cc/80?img=5',
  'https://i.pravatar.cc/80?img=6',
  'https://i.pravatar.cc/80?img=7',
  'https://i.pravatar.cc/80?img=8',
  'https://i.pravatar.cc/80?img=9',
  'https://i.pravatar.cc/80?img=10',
  'https://i.pravatar.cc/80?img=11',
  'https://i.pravatar.cc/80?img=12',
]

/* ── 26 reviews ── */
const allReviews = [
  { name: 'Tyler M.', location: 'California, USA', rating: 5, text: 'The package disguise worked brilliantly, completely flew under the radar. Arrived in a plain envelope with no markings — exactly what I needed.' },
  { name: 'Jordan K.', location: 'New York, USA', rating: 5, text: 'Had to unwrap three layers to find the card — the concealment is next level! Packaging alone is worth it, never had a delivery flagged.' },
  { name: 'Samantha R.', location: 'Florida, USA', rating: 5, text: 'I ordered during the limited-time sale, and it was such a great deal! Very satisfied — the quality exceeded my expectations. Highly recommend!' },
  { name: 'Alex D.', location: 'Texas, USA', rating: 5, text: 'Scanned perfectly at two different venues the same night. The barcode returned exactly what it should — this is the real deal.' },
  { name: 'Marcus T.', location: 'Illinois, USA', rating: 5, text: 'Customer support was incredible. I had a question at midnight and got a reply in under 20 minutes via WhatsApp. Fast and professional.' },
  { name: 'Priya N.', location: 'Ontario, Canada', rating: 5, text: 'The UV layer is stunning. Held it under a blacklight and everything lit up exactly the way it should. Matched the real thing side by side.' },
  { name: 'Liam W.', location: 'London, UK', rating: 5, text: 'DVLA photocard replica is spot on. The hologram shifts correctly under different angles and the microprint is razor sharp.' },
  { name: 'Brittany J.', location: 'Georgia, USA', rating: 5, text: 'Second order with LunaCardsVault and quality keeps getting better. Free duplicate is a huge bonus — always nice to have a backup.' },
  { name: 'Nathan S.', location: 'Ohio, USA', rating: 5, text: 'Polycarbonate version feels and flexes just like a real license. The laser engraving is tactile and deep, not just printed on top.' },
  { name: 'Chloe F.', location: 'Quebec, Canada', rating: 5, text: 'French fields are perfect, SAAQ layout is accurate. My friends who have real Quebec licences were genuinely impressed.' },
  { name: 'Devon B.', location: 'Nevada, USA', rating: 5, text: 'Used it at two casinos and a club — passed every scanner and every bouncer glance without a second look. Worth every penny.' },
  { name: 'Isabella K.', location: 'Colorado, USA', rating: 5, text: 'Arrived in 8 business days which was faster than expected. Tracking was accurate and packaging was completely discreet.' },
  { name: 'James H.', location: 'Pennsylvania, USA', rating: 5, text: 'The keystone UV elements are incredible. Dropped it under blacklight and the glow comes from inside the card, not off a surface coat.' },
  { name: 'Sofia L.', location: 'British Columbia, Canada', rating: 4, text: 'Great product overall. Pacific dogwood UV layer looks authentic and the barcode scanned cleanly on the first pass. Minor delay in shipping but worth it.' },
  { name: 'Ethan R.', location: 'Michigan, USA', rating: 5, text: 'Mackinac Bridge UV is exactly right. Side by side with a friend\'s real Michigan license and the security features are indistinguishable.' },
  { name: 'Olivia P.', location: 'New Jersey, USA', rating: 5, text: 'Ordered the polycarbonate version — the laser-perforated state map lights up perfectly when backlit. Detail is extraordinary.' },
  { name: 'Chris A.', location: 'Washington, USA', rating: 5, text: 'Mount Rainier UV scene is beautiful. Enhanced version matches the DOL layout exactly. Been using it for six months, no issues.' },
  { name: 'Mia V.', location: 'Tennessee, USA', rating: 5, text: 'Tri-star emblem and Smoky Mountains background are spot on. Passed a strict door scanner at a large venue without any hesitation.' },
  { name: 'Ryan C.', location: 'Arizona, USA', rating: 5, text: 'Grand Canyon UV scene is vivid. Cactus wren and saguaro glow out of the laminate perfectly. Very happy with the purchase.' },
  { name: 'Hannah G.', location: 'Minnesota, USA', rating: 5, text: 'Polycarbonate loon card is perfect. The North Star UV accents inside the layers glow sharply — totally different feel to cheaper cards.' },
  { name: 'Caleb N.', location: 'Wisconsin, USA', rating: 5, text: 'American robin UV layer and dairy barn background are all correct. Scanned at multiple bars without a single issue. Great product.' },
  { name: 'Emma T.', location: 'Louisiana, USA', rating: 5, text: 'Pelican and fleur-de-lis UV layer is gorgeous. The holographic overlay shifts nicely under light. OMV layout is accurate down to the fonts.' },
  { name: 'Noah J.', location: 'Maryland, USA', rating: 5, text: 'Maryland flag quarters on the UV layer look exactly right. The Calvert and Crossland design is one of the hardest to replicate and they nailed it.' },
  { name: 'Ava M.', location: 'Virginia, USA', rating: 4, text: 'Cardinal and dogwood UV is well executed. Card passed bouncer inspection easily. Shipping took slightly longer than quoted but arrived safely.' },
  { name: 'Luke B.', location: 'Oregon, USA', rating: 5, text: 'Crater Lake and Mount Hood UV scene came out beautifully. Ghost portrait is sharp. Been through five checks — zero issues, zero suspicion.' },
  { name: 'Grace W.', location: 'Hawaii, USA', rating: 5, text: 'Diamond Head and hibiscus UV layer is stunning. Islands map detail is accurate. The rainbow arc under blacklight is a nice touch. Very impressed.' },
]

function pickProof(i: number) { return proofImages[i % proofImages.length] }
function pickAvatar(i: number) { return avatarPool[i % avatarPool.length] }

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
  const [page, setPage] = useState(1)
  const totalPages = Math.ceil(allReviews.length / REVIEWS_PER_PAGE)
  const start = (page - 1) * REVIEWS_PER_PAGE
  const visible = allReviews.slice(start, start + REVIEWS_PER_PAGE)

  function goTo(p: number) {
    setPage(p)
    // scroll to top of review section
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

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
                <p style={{ fontSize: '14px', color: 'var(--muted)' }}>Based on {allReviews.length} verified reviews</p>
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

          {/* Pagination info */}
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '24px' }}>
            Showing {start + 1}–{Math.min(start + REVIEWS_PER_PAGE, allReviews.length)} of {allReviews.length} reviews
          </p>

          {/* Review cards — 6 per page */}
          <div className="evaluate-reviews-grid">
            {visible.map((r, i) => {
              const globalIndex = start + i
              return (
                <article key={globalIndex} className="evaluate-review-card">
                  <div className="evaluate-review-header">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={pickAvatar(globalIndex)} alt={r.name} className="evaluate-avatar" loading="lazy" />
                    <div>
                      <p className="evaluate-reviewer-name">{r.name}</p>
                      <p className="evaluate-reviewer-location">{r.location}</p>
                    </div>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={pickProof(globalIndex)} alt="proof" className="evaluate-proof-thumb" loading="lazy" />
                  </div>
                  <Stars rating={r.rating} />
                  <p className="evaluate-review-text">{r.text}</p>
                  <p className="evaluate-review-verified">
                    <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="#22c55e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ display: 'inline', marginRight: '4px', verticalAlign: 'middle' }}>
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    Verified purchase
                  </p>
                </article>
              )
            })}
          </div>

          {/* Pagination controls */}
          <div className="evaluate-pagination">
            <button
              className="eval-page-btn"
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"/></svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
              <button
                key={p}
                className={`eval-page-btn${p === page ? ' eval-page-btn--active' : ''}`}
                onClick={() => goTo(p)}
                aria-label={`Page ${p}`}
                aria-current={p === page ? 'page' : undefined}
              >
                {p}
              </button>
            ))}

            <button
              className="eval-page-btn"
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"/></svg>
            </button>
          </div>

        </div>
      </main>
      <Footer />
    </>
  )
}
