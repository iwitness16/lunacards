import Image from 'next/image'
import Link from 'next/link'
import { Footer, PageHeader, SiteHeader } from '@/components/site-shell'

/* ──────────────────────────────────────
   USA products — images sourced directly from CSV external URLs
   All priced at $100
─────────────────────────────────────── */
const usaProducts = [
  { name: 'Alabama Fake ID', img: 'https://www.fakeids.com/media/product/AL_NNs9iMi.jpg' },
  { name: 'Alaska Fake ID', img: 'https://www.fakeids.com/media/product/AK_xuVGrx3.jpg' },
  { name: 'Arizona Fake ID', img: 'https://www.fakeids.com/media/product/AZ_9fr45za.jpg' },
  { name: 'Arkansas Fake ID', img: 'https://www.fakeids.com/media/product/AR_iirqWfc.jpg' },
  { name: 'California Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_CA_pH8tBly.jpg' },
  { name: 'California Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/New_CA_pH8tBly.jpg' },
  { name: 'Colorado Fake ID', img: 'https://www.fakeids.com/media/product/CO_SD7kpoH.jpg' },
  { name: 'Connecticut Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_CT_6AfcMHw.jpg' },
  { name: 'Connecticut Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/New_CT_6AfcMHw.jpg' },
  { name: 'DC Fake ID', img: 'https://www.fakeids.com/media/product/DC_3slzApU.jpg' },
  { name: 'Delaware Fake ID', img: 'https://www.fakeids.com/media/product/New_DE_ObZjfAS.jpg' },
  { name: 'Florida Fake ID', img: 'https://www.fakeids.com/media/product/FL_gVybEE9.jpg' },
  { name: 'Georgia Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_GA_t7VYnVw.jpg' },
  { name: 'Georgia CDL', img: 'https://www.fakeids.com/media/product/New_GA_UJ9V04P.jpg' },
  { name: 'Hawaii Fake ID', img: 'https://www.fakeids.com/media/product/HI_mxfSSmB.jpg' },
  { name: 'Idaho Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/ID_sdde3Vg.jpg' },
  { name: 'Idaho Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/ID_sdde3Vg.jpg' },
  { name: 'Illinois Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_IL_1sXLC5q.jpg' },
  { name: 'Illinois Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/New_IL_1sXLC5q.jpg' },
  { name: 'Indiana Fake ID', img: 'https://www.fakeids.com/media/product/New_IN_qSONzCa.jpg' },
  { name: 'Iowa Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_IA_PoEePas.jpg' },
  { name: 'Iowa Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/New_IA_ttPSqNw.jpg' },
  { name: 'Kansas Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_KS_rDn3XDB.jpg' },
  { name: 'Kansas Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/New_KS_oWvIqgg.jpg' },
  { name: 'Kentucky Fake ID', img: 'https://www.fakeids.com/media/product/newky_Dh7m3kg.jpg' },
  { name: 'Louisiana Fake ID', img: 'https://www.fakeids.com/media/product/LA_VrBuc7A.jpg' },
  { name: 'Maine Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/ME_EaTcSfn.jpg' },
  { name: 'Maine Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/ME_EaTcSfn.jpg' },
  { name: 'Maryland Fake ID', img: 'https://www.fakeids.com/media/product/ML.jpg' },
  { name: 'Massachusetts Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/MA_vVrC1Ho.jpg' },
  { name: 'Michigan Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/MI_aNPIaru.jpg' },
  { name: 'Michigan Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/MI_aNPIaru.jpg' },
  { name: 'Minnesota Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/MN_caKXSKY.jpg' },
  { name: 'Minnesota Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/MN_caKXSKY.jpg' },
  { name: 'Mississippi Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/MS.jpg' },
  { name: 'Mississippi Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/MS.jpg' },
  { name: 'Missouri Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/fakeids_new_mo_fr_WMP3aPg.jpg' },
  { name: 'Missouri Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/fakeids_new_mo_fr_WMP3aPg.jpg' },
  { name: 'Montana Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/MT_IdtlnYA.jpg' },
  { name: 'Montana Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/MT_Hg2tpf2.jpg' },
  { name: 'Nebraska Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/NE_PNR0fEX.jpg' },
  { name: 'Nebraska Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/NE_PNR0fEX.jpg' },
  { name: 'Nevada Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/ne.webp' },
  { name: 'Nevada Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/ne.webp' },
  { name: 'New Hampshire Fake ID', img: 'https://www.fakeids.com/media/product/NH.jpg' },
  { name: 'New Jersey Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/NJ_83sszPC.jpg' },
  { name: 'New Jersey Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/NJ_83sszPC.jpg' },
  { name: 'New Mexico Fake ID', img: 'https://www.fakeids.com/media/product/NM_YG7L0af.jpg' },
  { name: 'New York Fake ID', img: 'https://www.fakeids.com/media/product/NY_2ObMody.jpg' },
  { name: 'North Carolina Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/NC_k3YC1m0.jpg' },
  { name: 'North Carolina Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/NC_k3YC1m0.jpg' },
  { name: 'North Dakota Fake ID', img: 'https://www.fakeids.com/media/product/ND_WyIqT7o.jpg' },
  { name: 'Ohio Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_OH_xfB6Bpz.jpg' },
  { name: 'Ohio CDL', img: 'https://www.fakeids.com/media/product/New_OH_xfB6Bpz.jpg' },
  { name: 'Oklahoma Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/fakeids_new_ok_fr_7CF2qsI.jpg' },
  { name: 'Oklahoma Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/fakeids_new_ok_fr_7CF2qsI.jpg' },
  { name: 'Oregon Fake ID', img: 'https://www.fakeids.com/media/product/New_OR_lG0Dpdu.jpg' },
  { name: 'Pennsylvania Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/PA.jpg' },
  { name: 'Pennsylvania Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/PA.jpg' },
  { name: 'Rhode Island Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_RI_xoFfH72.jpg' },
  { name: 'Rhode Island Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/New_RI_xoFfH72.jpg' },
  { name: 'South Carolina Fake ID', img: 'https://www.fakeids.com/media/product/New_SC_hBAu4jg.jpg' },
  { name: 'South Dakota Fake ID', img: 'https://www.fakeids.com/media/product/SD_EEpkmmX.jpg' },
  { name: 'Tennessee Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/fakeids_tn_v2_228.jpg' },
  { name: 'Tennessee State ID Card', img: 'https://www.fakeids.com/media/product/fakeids_tn_v2_920.jpg' },
  { name: 'Texas Fake ID', img: 'https://www.fakeids.com/media/product/nt_QP9kNeC.jpg' },
  { name: 'Utah Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/UT_s5573nt.jpg' },
  { name: 'Utah Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/UT_s5573nt.jpg' },
  { name: 'Vermont Fake ID', img: 'https://www.fakeids.com/media/product/New_VT_dicjXnQ.jpg' },
  { name: 'Virginia Fake ID', img: 'https://www.fakeids.com/media/product/VA_WYD3YGI.jpg' },
  { name: 'Washington Fake ID', img: 'https://www.fakeids.com/media/product/WA_YyMHEE7.jpg' },
  { name: 'West Virginia Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/WV_kZ4hVer.jpg' },
  { name: 'West Virginia Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/WV_kZ4hVer.jpg' },
  { name: 'Wisconsin Fake ID', img: 'https://www.fakeids.com/media/product/New_WI_VDk5v5F.jpg' },
  { name: 'Wyoming Fake ID', img: 'https://www.fakeids.com/media/product/WY_ljSk6gB.jpg' },
]

function ProductCard({ name, img }: { name: string; img: string }) {
  const encodedName = encodeURIComponent(name)
  const encodedImg = encodeURIComponent(img)
  return (
    <article className="product-card">
      <div className="product-card-img-wrap">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={img}
          alt={name}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
      </div>
      <div className="product-card-body">
        <h3>{name}</h3>
        <p className="product-price">$100.00</p>
        <Link
          href={`/orders?product=${encodedName}&img=${encodedImg}&price=%24100.00`}
          className="btn-select"
        >
          Place Order
        </Link>
      </div>
    </article>
  )
}

export default function USAProductsPage() {
  return (
    <>
      <SiteHeader active="Buy Fake ID" />
      <main>
        <PageHeader title="USA — STATE IDs" />
        <div className="products-page shell">
          <div style={{ marginBottom: '20px' }}>
            <Link href="/products" style={{ color: 'var(--red)', fontSize: '13px', fontWeight: 600 }}>
              ← Back to all countries
            </Link>
          </div>
          <section aria-labelledby="usa-heading">
            <h2 id="usa-heading" className="country-section-title">
              🇺🇸 United States — State IDs
            </h2>
            <div className="products-grid">
              {usaProducts.map((p, i) => (
                <ProductCard key={i} name={p.name} img={p.img} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
