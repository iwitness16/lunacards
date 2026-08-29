import Image from 'next/image'
import Link from 'next/link'
import { Footer, PageHeader, SiteHeader } from '@/components/site-shell'

const canadaProducts = [
  { name: 'Alberta Fake ID', slug: 'alberta', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg' },
  { name: 'British Columbia Fake ID', slug: 'britishcolumbia', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg' },
  { name: 'Manitoba Fake ID', slug: 'manitoba', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg' },
  { name: 'New Brunswick Fake ID', slug: 'newbrunswick', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg' },
  { name: 'Newfoundland Fake ID', slug: 'newfoundland', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg' },
  { name: 'Nova Scotia Fake ID', slug: 'novascotia', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg' },
  { name: 'Ontario Fake ID', slug: 'ontario', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg' },
  { name: 'Prince Edward Island Fake ID', slug: 'princeedwardisland', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg' },
  { name: 'Quebec Fake ID', slug: 'quebec', img: 'https://www.fakeids.com/media/product/QB_r5To5Ei.jpg' },
  { name: 'Saskatchewan Fake ID', slug: 'saskatchewan', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg' },
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
