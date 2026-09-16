import Image from 'next/image'
import Link from 'next/link'
import { Footer, PageHeader, SiteHeader } from '@/components/site-shell'

const canadaProducts = [
  // Images sourced from idlord.ph CSV — first product image for each province
  { name: 'Quebec Fake ID',                  img: 'https://idlord.ph/image/webp/cache/catalog/products/quebec-1-630x420h.webp' },
  { name: 'British Columbia Fake ID',        img: 'https://idlord.ph/image/webp/cache/catalog/products/british_columbia-1-630x420h.webp' },
  { name: 'Saskatchewan Fake ID',            img: 'https://idlord.ph/image/webp/cache/catalog/products/new/saskatchewan1-630x420.webp' },
  { name: 'Manitoba Fake ID (2026)',          img: 'https://idlord.ph/image/webp/cache/catalog/products/img_20260302_104011-630x420.webp' },
  { name: 'Alberta Fake DL (2026)',           img: 'https://idlord.ph/image/webp/cache/catalog/products/img_20260423_151420-%E4%B8%B4%E6%97%B6_%E6%8B%B7%E8%B4%9D-630x420.webp' },
  { name: 'British Columbia Fake ID (2025)', img: 'https://idlord.ph/image/webp/cache/catalog/products/1img_20251112_095406-630x420.webp' },
  { name: 'Ontario Fake ID (2025)',           img: 'https://idlord.ph/image/webp/cache/catalog/products/df7f882d306a64eb4b56cc5394b4262-630x420.webp' },
]

function ProductCard({ name, img }: { name: string; img: string }) {
  const encodedName = encodeURIComponent(name)
  const encodedImg = encodeURIComponent(img)
  return (
    <article className="product-card">
      <div className="product-card-img-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={img} alt={name} loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
      </div>
      <div className="product-card-body">
        <h3>{name}</h3>
        <p className="product-price">CA$100.00</p>
        <Link href={`/orders?product=${encodedName}&img=${encodedImg}&price=CA%24100.00`} className="btn-select">
          Place Order
        </Link>
      </div>
    </article>
  )
}

export default function CanadaProductsPage() {
  return (
    <>
      <SiteHeader active="Buy Fake ID" />
      <main>
        <PageHeader title="CANADA — PROVINCIAL IDs" />
        <div className="products-page shell">
          <div style={{ marginBottom: '20px' }}>
            <Link href="/products" style={{ color: 'var(--red)', fontSize: '13px', fontWeight: 600 }}>← Back to all countries</Link>
          </div>
          <section aria-labelledby="canada-heading">
            <h2 id="canada-heading" className="country-section-title">🇨🇦 Canada — Provincial IDs</h2>
            <div className="products-grid">
              {canadaProducts.map((p, i) => <ProductCard key={i} name={p.name} img={p.img} />)}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
