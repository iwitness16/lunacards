'use client'

import { useSearchParams } from 'next/navigation'
import { Suspense, useRef, useState } from 'react'
import { Footer, SiteHeader } from '@/components/site-shell'
import { db } from '@/lib/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'

const ADMIN_WHATSAPP = '19342689086'
const ADMIN_TELEGRAM = 'Lunacardvault01'

/* ── All products ── */
const allProducts = [
  // USA
  { name: 'Alabama Fake ID', img: 'https://www.fakeids.com/media/product/AL_NNs9iMi.jpg', price: '$100.00' },
  { name: 'Alaska Fake ID', img: 'https://www.fakeids.com/media/product/AK_xuVGrx3.jpg', price: '$100.00' },
  { name: 'Arizona Fake ID', img: 'https://www.fakeids.com/media/product/AZ_9fr45za.jpg', price: '$100.00' },
  { name: 'Arkansas Fake ID', img: 'https://www.fakeids.com/media/product/AR_iirqWfc.jpg', price: '$100.00' },
  { name: 'California Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_CA_pH8tBly.jpg', price: '$100.00' },
  { name: 'California Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/New_CA_pH8tBly.jpg', price: '$100.00' },
  { name: 'Colorado Fake ID', img: 'https://www.fakeids.com/media/product/CO_SD7kpoH.jpg', price: '$100.00' },
  { name: 'Connecticut Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_CT_6AfcMHw.jpg', price: '$100.00' },
  { name: 'Connecticut Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/New_CT_6AfcMHw.jpg', price: '$100.00' },
  { name: 'DC Fake ID', img: 'https://www.fakeids.com/media/product/DC_3slzApU.jpg', price: '$100.00' },
  { name: 'Delaware Fake ID', img: 'https://www.fakeids.com/media/product/New_DE_ObZjfAS.jpg', price: '$100.00' },
  { name: 'Florida Fake ID', img: 'https://www.fakeids.com/media/product/FL_gVybEE9.jpg', price: '$100.00' },
  { name: 'Georgia Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_GA_t7VYnVw.jpg', price: '$100.00' },
  { name: 'Georgia CDL', img: 'https://www.fakeids.com/media/product/New_GA_UJ9V04P.jpg', price: '$100.00' },
  { name: 'Hawaii Fake ID', img: 'https://www.fakeids.com/media/product/HI_mxfSSmB.jpg', price: '$100.00' },
  { name: 'Idaho Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/ID_sdde3Vg.jpg', price: '$100.00' },
  { name: 'Idaho Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/ID_sdde3Vg.jpg', price: '$100.00' },
  { name: 'Illinois Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_IL_1sXLC5q.jpg', price: '$100.00' },
  { name: 'Illinois Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/New_IL_1sXLC5q.jpg', price: '$100.00' },
  { name: 'Indiana Fake ID', img: 'https://www.fakeids.com/media/product/New_IN_qSONzCa.jpg', price: '$100.00' },
  { name: 'Iowa Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_IA_PoEePas.jpg', price: '$100.00' },
  { name: 'Iowa Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/New_IA_ttPSqNw.jpg', price: '$100.00' },
  { name: 'Kansas Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_KS_rDn3XDB.jpg', price: '$100.00' },
  { name: 'Kansas Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/New_KS_oWvIqgg.jpg', price: '$100.00' },
  { name: 'Kentucky Fake ID', img: 'https://www.fakeids.com/media/product/newky_Dh7m3kg.jpg', price: '$100.00' },
  { name: 'Louisiana Fake ID', img: 'https://www.fakeids.com/media/product/LA_VrBuc7A.jpg', price: '$100.00' },
  { name: 'Maine Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/ME_EaTcSfn.jpg', price: '$100.00' },
  { name: 'Maine Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/ME_EaTcSfn.jpg', price: '$100.00' },
  { name: 'Maryland Fake ID', img: 'https://www.fakeids.com/media/product/ML.jpg', price: '$100.00' },
  { name: 'Massachusetts Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/MA_vVrC1Ho.jpg', price: '$100.00' },
  { name: 'Michigan Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/MI_aNPIaru.jpg', price: '$100.00' },
  { name: 'Michigan Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/MI_aNPIaru.jpg', price: '$100.00' },
  { name: 'Minnesota Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/MN_caKXSKY.jpg', price: '$100.00' },
  { name: 'Minnesota Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/MN_caKXSKY.jpg', price: '$100.00' },
  { name: 'Mississippi Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/MS.jpg', price: '$100.00' },
  { name: 'Mississippi Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/MS.jpg', price: '$100.00' },
  { name: 'Missouri Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/fakeids_new_mo_fr_WMP3aPg.jpg', price: '$100.00' },
  { name: 'Missouri Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/fakeids_new_mo_fr_WMP3aPg.jpg', price: '$100.00' },
  { name: 'Montana Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/MT_IdtlnYA.jpg', price: '$100.00' },
  { name: 'Montana Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/MT_Hg2tpf2.jpg', price: '$100.00' },
  { name: 'Nebraska Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/NE_PNR0fEX.jpg', price: '$100.00' },
  { name: 'Nebraska Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/NE_PNR0fEX.jpg', price: '$100.00' },
  { name: 'Nevada Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/ne.webp', price: '$100.00' },
  { name: 'Nevada Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/ne.webp', price: '$100.00' },
  { name: 'New Hampshire Fake ID', img: 'https://www.fakeids.com/media/product/NH.jpg', price: '$100.00' },
  { name: 'New Jersey Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/NJ_83sszPC.jpg', price: '$100.00' },
  { name: 'New Jersey Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/NJ_83sszPC.jpg', price: '$100.00' },
  { name: 'New Mexico Fake ID', img: 'https://www.fakeids.com/media/product/NM_YG7L0af.jpg', price: '$100.00' },
  { name: 'New York Fake ID', img: 'https://www.fakeids.com/media/product/NY_2ObMody.jpg', price: '$100.00' },
  { name: 'North Carolina Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/NC_k3YC1m0.jpg', price: '$100.00' },
  { name: 'North Carolina Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/NC_k3YC1m0.jpg', price: '$100.00' },
  { name: 'North Dakota Fake ID', img: 'https://www.fakeids.com/media/product/ND_WyIqT7o.jpg', price: '$100.00' },
  { name: 'Ohio Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_OH_xfB6Bpz.jpg', price: '$100.00' },
  { name: 'Ohio CDL', img: 'https://www.fakeids.com/media/product/New_OH_xfB6Bpz.jpg', price: '$100.00' },
  { name: 'Oklahoma Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/fakeids_new_ok_fr_7CF2qsI.jpg', price: '$100.00' },
  { name: 'Oklahoma Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/fakeids_new_ok_fr_7CF2qsI.jpg', price: '$100.00' },
  { name: 'Oregon Fake ID', img: 'https://www.fakeids.com/media/product/New_OR_lG0Dpdu.jpg', price: '$100.00' },
  { name: 'Pennsylvania Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/PA.jpg', price: '$100.00' },
  { name: 'Pennsylvania Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/PA.jpg', price: '$100.00' },
  { name: 'Rhode Island Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/New_RI_xoFfH72.jpg', price: '$100.00' },
  { name: 'Rhode Island Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/New_RI_xoFfH72.jpg', price: '$100.00' },
  { name: 'South Carolina Fake ID', img: 'https://www.fakeids.com/media/product/New_SC_hBAu4jg.jpg', price: '$100.00' },
  { name: 'South Dakota Fake ID', img: 'https://www.fakeids.com/media/product/SD_EEpkmmX.jpg', price: '$100.00' },
  { name: 'Tennessee Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/fakeids_tn_v2_228.jpg', price: '$100.00' },
  { name: 'Tennessee State ID Card', img: 'https://www.fakeids.com/media/product/fakeids_tn_v2_920.jpg', price: '$100.00' },
  { name: 'Texas Fake ID', img: 'https://www.fakeids.com/media/product/nt_QP9kNeC.jpg', price: '$100.00' },
  { name: 'Utah Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/UT_s5573nt.jpg', price: '$100.00' },
  { name: 'Utah Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/UT_s5573nt.jpg', price: '$100.00' },
  { name: 'Vermont Fake ID', img: 'https://www.fakeids.com/media/product/New_VT_dicjXnQ.jpg', price: '$100.00' },
  { name: 'Virginia Fake ID', img: 'https://www.fakeids.com/media/product/VA_WYD3YGI.jpg', price: '$100.00' },
  { name: 'Washington Fake ID', img: 'https://www.fakeids.com/media/product/WA_YyMHEE7.jpg', price: '$100.00' },
  { name: 'West Virginia Fake ID (Teslin)', img: 'https://www.fakeids.com/media/product/WV_kZ4hVer.jpg', price: '$100.00' },
  { name: 'West Virginia Fake ID (Polycarbonate)', img: 'https://www.fakeids.com/media/product/WV_kZ4hVer.jpg', price: '$100.00' },
  { name: 'Wisconsin Fake ID', img: 'https://www.fakeids.com/media/product/New_WI_VDk5v5F.jpg', price: '$100.00' },
  { name: 'Wyoming Fake ID', img: 'https://www.fakeids.com/media/product/WY_ljSk6gB.jpg', price: '$100.00' },
  // Canada
  { name: 'Alberta Fake ID', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg', price: 'CA$100.00' },
  { name: 'British Columbia Fake ID', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg', price: 'CA$100.00' },
  { name: 'Manitoba Fake ID', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg', price: 'CA$100.00' },
  { name: 'New Brunswick Fake ID', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg', price: 'CA$100.00' },
  { name: 'Newfoundland Fake ID', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg', price: 'CA$100.00' },
  { name: 'Nova Scotia Fake ID', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg', price: 'CA$100.00' },
  { name: 'Ontario Fake ID', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg', price: 'CA$100.00' },
  { name: 'Prince Edward Island Fake ID', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg', price: 'CA$100.00' },
  { name: 'Quebec Fake ID', img: 'https://www.fakeids.com/media/product/QB_r5To5Ei.jpg', price: 'CA$100.00' },
  { name: 'Saskatchewan Fake ID', img: 'https://www.fakeids.com/media/product/BC_nUpqumc.jpg', price: 'CA$100.00' },
  // UK
  { name: 'UK Fake ID — DVLA Photocard (Teslin)', img: 'https://www.fakeids.com/media/product/fakeids_front.jpg', price: '£80.00' },
  { name: 'UK Provisional Licence (Polycarbonate)', img: 'https://www.fakeids.com/media/product/fakeids_front.jpg', price: '£80.00' },
  { name: 'UK Polycarbonate Licence — DVLA Stock', img: 'https://www.fakeids.com/media/product/fakeids_front.jpg', price: '£80.00' },
  // Germany
  { name: 'Germany Fake ID — Scannable Replica', img: '/images/germany.jpg', price: '€100.00' },
  { name: 'Germany Fake ID (Polycarbonate)', img: '/images/germany.jpg', price: '€100.00' },
  // Netherlands
  { name: 'Netherlands Fake ID — Scannable Replica', img: '/images/netherlands.jpg', price: '€100.00' },
  { name: 'Netherlands Fake ID (Polycarbonate)', img: '/images/netherlands.jpg', price: '€100.00' },
  // Australia
  { name: 'New South Wales Driver Licence', img: '/images/australia.jpg', price: 'AUD$100.00' },
  { name: 'Victoria Driver Licence', img: '/images/australia.jpg', price: 'AUD$100.00' },
  { name: 'Queensland Driver Licence', img: '/images/australia.jpg', price: 'AUD$100.00' },
  { name: 'Western Australia Driver Licence', img: '/images/australia.jpg', price: 'AUD$100.00' },
  { name: 'South Australia Driver Licence', img: '/images/australia.jpg', price: 'AUD$100.00' },
  { name: 'Tasmania Driver Licence', img: '/images/australia.jpg', price: 'AUD$100.00' },
  { name: 'ACT Driver Licence', img: '/images/australia.jpg', price: 'AUD$100.00' },
  { name: 'Northern Territory Driver Licence', img: '/images/australia.jpg', price: 'AUD$100.00' },
  // Ireland
  { name: 'Ireland Fake ID — Scannable Replica', img: '/images/ireland.jpg', price: '€100.00' },
  { name: 'Ireland Fake ID (Polycarbonate)', img: '/images/ireland.jpg', price: '€100.00' },
  // France
  { name: 'France Fake ID — Scannable Replica', img: '/images/france.jpg', price: '€100.00' },
  { name: 'France Fake ID (Polycarbonate)', img: '/images/france.jpg', price: '€100.00' },
  // Argentina
  { name: 'Argentina Fake ID — Scannable Replica (DNI)', img: '/images/argentina.jpg', price: '$100.00' },
  { name: 'Argentina Fake ID (Polycarbonate DNI)', img: '/images/argentina.jpg', price: '$100.00' },
]

function generateOrderId() {
  return 'CF-' + Date.now().toString(36).toUpperCase() + '-' + Math.random().toString(36).substring(2, 6).toUpperCase()
}

function fileToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result as string)
    reader.onerror = reject
    reader.readAsDataURL(file)
  })
}

function OrdersInner() {
  const params = useSearchParams()
  const paramProduct = params.get('product') ?? ''
  const paramImg    = params.get('img') ?? ''
  const paramPrice  = params.get('price') ?? ''

  const fromParam     = paramProduct ? { name: paramProduct, img: paramImg, price: paramPrice } : null
  const defaultProduct = fromParam ?? allProducts[0]

  const [selected,   setSelected]   = useState(defaultProduct)
  const [qty,        setQty]        = useState(1)
  const [sex,        setSex]        = useState('Male')
  const [hairColor,  setHairColor]  = useState('Black')
  const [eyeColor,   setEyeColor]   = useState('Brown')
  const [heightFt,   setHeightFt]   = useState('')
  const [heightIn,   setHeightIn]   = useState('')
  const [payMethod,  setPayMethod]  = useState('')
  const [whatsapp,   setWhatsapp]   = useState('')
  const [firstName,  setFirstName]  = useState('')
  const [middleName, setMiddleName] = useState('')
  const [lastName,   setLastName]   = useState('')
  const [birthday,   setBirthday]   = useState('')
  const [weight,     setWeight]     = useState('')
  const [address,    setAddress]    = useState('')
  const [customize,  setCustomize]  = useState('')

  // Photo/signature preview state
  const [photoPreview, setPhotoPreview] = useState('/images/headshot.jpg')
  const [sigPreview,   setSigPreview]   = useState('/images/signature.jpg')
  const [photoBase64,  setPhotoBase64]  = useState('')
  const [sigBase64,    setSigBase64]    = useState('')

  const [submitting, setSubmitting] = useState(false)
  const [error,      setError]      = useState('')

  const photoInputRef = useRef<HTMLInputElement>(null)
  const sigInputRef   = useRef<HTMLInputElement>(null)

  function handleProductChange(name: string) {
    const found = allProducts.find(p => p.name === name)
    if (found) setSelected(found)
  }

  async function handlePhotoChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const b64 = await fileToBase64(file)
    setPhotoPreview(b64)
    setPhotoBase64(b64)
  }

  async function handleSigChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0]
    if (!file) return
    const b64 = await fileToBase64(file)
    setSigPreview(b64)
    setSigBase64(b64)
  }

  const priceNum  = parseFloat(selected.price.replace(/[^0-9.]/g, '')) || 100
  const currency  = selected.price.replace(/[0-9.]/g, '').trim()
  const total     = `${currency}${(priceNum * qty).toFixed(2)}`

  // ── Shared order message builder ──
  function buildMessage(orderId: string, submittedAt: string) {
    return [
      `🆕 *New Order — LunaCards Vault*`,
      `Order ID: ${orderId}`,
      ``,
      `*Product:* ${selected.name}`,
      `*Quantity:* ${qty}`,
      `*Total:* ${total}`,
      `*Payment:* ${payMethod}`,
      ``,
      `*Customer Details*`,
      `WhatsApp / Telegram: ${whatsapp}`,
      `Name: ${firstName} ${middleName} ${lastName}`.replace(/\s+/g, ' ').trim(),
      `Sex: ${sex}`,
      `Birthday: ${birthday}`,
      `Hair: ${hairColor}  |  Eyes: ${eyeColor}`,
      `Height: ${heightFt}ft ${heightIn}in  |  Weight: ${weight}lbs`,
      address   ? `Address: ${address}`   : '',
      customize ? `Customize: ${customize}` : '',
      ``,
      `📸 Photo & Signature sent via upload.`,
      ``,
      `_Sent from LunaCards Vault order form_`,
    ].filter(Boolean).join('\n')
  }

  function resetForm() {
    setWhatsapp(''); setFirstName(''); setMiddleName(''); setLastName('')
    setSex('Male'); setBirthday(''); setHairColor('Black'); setEyeColor('Brown')
    setHeightFt(''); setHeightIn(''); setWeight(''); setAddress(''); setCustomize('')
    setPayMethod(''); setQty(1)
    setPhotoPreview('/images/headshot.jpg'); setSigPreview('/images/signature.jpg')
    setPhotoBase64(''); setSigBase64(''); setSelected(allProducts[0])
    if (photoInputRef.current) photoInputRef.current.value = ''
    if (sigInputRef.current)   sigInputRef.current.value   = ''
  }

  // ── Single handler, called by either button ──
  async function handleSubmit(e: React.FormEvent, channel: 'wa' | 'tg') {
    e.preventDefault()
    setError('')

    if (!whatsapp || !firstName || !lastName || !birthday || !heightFt || !weight || !payMethod) {
      setError('Please fill in all required fields marked with *')
      return
    }

    setSubmitting(true)
    const orderId     = generateOrderId()
    const submittedAt = new Date().toLocaleString('en-US', { timeZone: 'America/New_York' })
    const msg         = buildMessage(orderId, submittedAt)

    // ── Open the chosen channel SYNCHRONOUSLY (before any await) ──
    // Mobile browsers block window.open if called after an await.
    if (channel === 'wa') {
      window.open(`https://wa.me/${ADMIN_WHATSAPP}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
    } else {
      window.open(`https://t.me/${ADMIN_TELEGRAM}?text=${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer')
    }

    const orderData = {
      orderId, submittedAt, status: 'new',
      product: selected.name, productImg: selected.img,
      qty, price: selected.price, total,
      paymentMethod: payMethod, whatsapp, channel,
      firstName, middleName, lastName,
      sex, birthday, hairColor, eyeColor,
      heightFt, heightIn, weight,
      address, customize,
      photoBase64: photoBase64 || '',
      sigBase64:   sigBase64   || '',
      createdAt:   serverTimestamp(),
    }

    try {
      // 1. Save to Firestore
      await addDoc(collection(db, 'orders'), orderData)

      // 2. Email admin — always fires regardless of channel (fire-and-forget)
      fetch('/api/send-order-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...orderData, createdAt: submittedAt }),
      }).catch(console.error)

      // 3. Reset form
      resetForm()

    } catch (err) {
      console.error(err)
      setError('Something went wrong saving your order. Please try again or contact us directly.')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <>
      <SiteHeader active="Orders" />
      <main>
        <div style={{ background: 'var(--light-gray)', borderBottom: '1px solid var(--border)', padding: '28px 0 20px' }}>
          <div className="shell" style={{ textAlign: 'center' }}>
            <h1 style={{ fontSize: 'clamp(20px, 3vw, 28px)', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              Place Your Order
            </h1>
            <p style={{ color: 'var(--muted)', fontSize: '14px', marginTop: '6px' }}>
              Fill in your details below — your order will be sent directly to us via WhatsApp.
            </p>
          </div>
        </div>

        <div className="orders-page shell">
          {/* Product image */}
          <div className="orders-product-img-wrap">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={selected.img} alt={selected.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
          </div>

          <div className="orders-grid">
            {/* ── LEFT: Summary ── */}
            <div className="orders-summary">
              <h3>Order Summary</h3>

              <div className="form-row" style={{ marginBottom: '16px' }}>
                <label>Select Product <span>*</span></label>
                <div className="product-select-wrap">
                  <select value={selected.name} onChange={e => handleProductChange(e.target.value)}>
                    <optgroup label="🇺🇸 USA States">
                      {allProducts.filter(p => p.price.startsWith('$') && !p.name.startsWith('Argentina')).map(p => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🇨🇦 Canada">
                      {allProducts.filter(p => p.price.startsWith('CA')).map(p => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🇬🇧 UK">
                      {allProducts.filter(p => p.price.startsWith('£')).map(p => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🇩🇪 Germany / 🇳🇱 Netherlands / 🇮🇪 Ireland / 🇫🇷 France">
                      {allProducts.filter(p => p.price.startsWith('€')).map(p => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🇦🇺 Australia">
                      {allProducts.filter(p => p.price.startsWith('AUD')).map(p => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </optgroup>
                    <optgroup label="🇦🇷 Argentina">
                      {allProducts.filter(p => p.name.startsWith('Argentina')).map(p => (
                        <option key={p.name} value={p.name}>{p.name}</option>
                      ))}
                    </optgroup>
                  </select>
                </div>
              </div>

              <div className="orders-summary-row">
                <strong>Quantity:</strong>
                <div className="qty-control">
                  <button className="qty-btn" type="button" onClick={() => setQty(q => Math.max(1, q - 1))}>−</button>
                  <input className="qty-input" type="number" min={1} value={qty} onChange={e => setQty(Math.max(1, Number(e.target.value)))} />
                  <button className="qty-btn" type="button" onClick={() => setQty(q => q + 1)}>+</button>
                </div>
              </div>
              <div className="orders-summary-row" style={{ marginTop: '10px' }}>
                <span>Unit price:</span><span>{selected.price}</span>
              </div>
              <div className="orders-total-row">
                <span>Total:</span><span>{total}</span>
              </div>
            </div>

            {/* ── RIGHT: Form ── */}
            <form className="orders-form" onSubmit={e => e.preventDefault()}>

              {error && (
                <div style={{ background: '#fef2f2', border: '1px solid #fca5a5', color: '#b91c1c', padding: '12px 16px', borderRadius: '6px', fontSize: '14px' }}>
                  {error}
                </div>
              )}

              <p className="orders-form-section-title">Contact Information</p>
              <div className="form-row">
                <label>WhatsApp Contact <span>*</span></label>
                <input type="tel" placeholder="+1 661 646 5626" value={whatsapp} onChange={e => setWhatsapp(e.target.value)} required />
              </div>

              <p className="orders-form-section-title">Card Information</p>
              <div className="form-cols-2">
                <div className="form-row">
                  <label>First Name <span>*</span></label>
                  <input type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} required />
                </div>
                <div className="form-row">
                  <label>Middle Name</label>
                  <input type="text" placeholder="Middle Name" value={middleName} onChange={e => setMiddleName(e.target.value)} />
                </div>
              </div>
              <div className="form-row">
                <label>Last Name <span>*</span></label>
                <input type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} required />
              </div>
              <div className="form-row">
                <label>Sex <span>*</span></label>
                <select value={sex} onChange={e => setSex(e.target.value)}>
                  <option>Male</option><option>Female</option>
                </select>
              </div>
              <div className="form-row">
                <label>Birthday <span>*</span></label>
                <input type="date" value={birthday} onChange={e => setBirthday(e.target.value)} required style={{ colorScheme: 'light' }} />
              </div>
              <div className="form-cols-2">
                <div className="form-row">
                  <label>Hair Color <span>*</span></label>
                  <select value={hairColor} onChange={e => setHairColor(e.target.value)}>
                    {['Black','Bald','Blonde','Brown','Gray','Red','Sandy','White','Other'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
                <div className="form-row">
                  <label>Eyes Color <span>*</span></label>
                  <select value={eyeColor} onChange={e => setEyeColor(e.target.value)}>
                    {['Brown','Black','Blue','Gray','Green','Hazel','Maroon','Pink','Multicolor','Other'].map(c => <option key={c}>{c}</option>)}
                  </select>
                </div>
              </div>
              <div className="form-row">
                <label>Height <span>*</span></label>
                <div className="form-cols-3">
                  <select value={heightFt} onChange={e => setHeightFt(e.target.value)} required>
                    <option value="">Feet</option>
                    {[4,5,6,7].map(f => <option key={f} value={f}>{f}</option>)}
                  </select>
                  <select value={heightIn} onChange={e => setHeightIn(e.target.value)}>
                    <option value="">Inches</option>
                    {[0,1,2,3,4,5,6,7,8,9,10,11].map(i => <option key={i} value={i}>{i}</option>)}
                  </select>
                  <span style={{ fontSize: '13px', color: 'var(--muted)', alignSelf: 'center' }}>in</span>
                </div>
              </div>
              <div className="form-row">
                <label>Weight (lbs) <span>*</span></label>
                <input type="number" placeholder="160" min={80} max={400} value={weight} onChange={e => setWeight(e.target.value)} required />
              </div>
              <div className="form-row">
                <label>Address</label>
                <textarea rows={3} placeholder="123 Main St, Los Angeles, CA 90012" value={address} onChange={e => setAddress(e.target.value)} />
                <p className="form-hint">If not filled in, it will be randomly generated</p>
              </div>
              <div className="form-row">
                <label>Customize</label>
                <textarea rows={3} placeholder="EXP, ISS, DLN, DD, CLASS…" value={customize} onChange={e => setCustomize(e.target.value)} />
                <p className="form-hint">If not filled in, these parameters will be randomly generated</p>
              </div>

              <p className="orders-form-section-title">Photo &amp; Signature</p>

              {/* Photo upload — clicking preview also opens picker */}
              <div className="form-row">
                <label>Photo <span>*</span></label>
                <div className="photo-row">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={photoPreview} alt="Headshot preview" className="photo-preview"
                    onClick={() => photoInputRef.current?.click()}
                    style={{ cursor: 'pointer', width: '140px', height: '160px', objectFit: 'cover',
                      borderRadius: '6px', border: '1px solid var(--border)', display: 'block', flexShrink: 0 }} />
                  <div>
                    <label htmlFor="photo-upload" className="upload-area" style={{ display: 'block', cursor: 'pointer' }}>
                      <div className="upload-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                          strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                      </div>
                      Click to upload photo
                      <input id="photo-upload" ref={photoInputRef} type="file" accept="image/*"
                        style={{ display: 'none' }} onChange={handlePhotoChange} />
                    </label>
                    <div className="form-hint" style={{ marginTop: '10px' }}>
                      <ul>
                        <li>Selfie or clear face photo</li>
                        <li>No hats, glasses, or obstructions</li>
                        <li>Plain white/light background preferred</li>
                        <li>Head must be fully visible</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signature upload */}
              <div className="form-row">
                <label>Signature</label>
                <div className="photo-row">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={sigPreview} alt="Signature preview" className="photo-preview"
                    onClick={() => sigInputRef.current?.click()}
                    style={{ cursor: 'pointer', width: '140px', height: '160px', objectFit: 'contain',
                      borderRadius: '6px', border: '1px solid var(--border)', background: '#fff',
                      display: 'block', flexShrink: 0 }} />
                  <div>
                    <label htmlFor="sig-upload" className="upload-area" style={{ display: 'block', cursor: 'pointer' }}>
                      <div className="upload-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"
                          strokeLinecap="round" strokeLinejoin="round" width="28" height="28">
                          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                          <polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>
                        </svg>
                      </div>
                      Click to upload signature
                      <input id="sig-upload" ref={sigInputRef} type="file" accept="image/*"
                        style={{ display: 'none' }} onChange={handleSigChange} />
                    </label>
                    <div className="form-hint" style={{ marginTop: '10px' }}>
                      <ul>
                        <li>Sign on white paper, photograph it</li>
                        <li>If not uploaded, auto-generated</li>
                        <li>Do not capture on your ID photo</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <p className="orders-form-section-title">Payment</p>
              <div className="form-row">
                <label>Payment Method <span>*</span></label>
                <select value={payMethod} onChange={e => setPayMethod(e.target.value)} required>
                  <option value="">Select Payment Method</option>
                  {['Cryptocurrency','Apple Pay','Gift Card','Chime','CashApp','Zelle','Bank Transfer'].map(m => (
                    <option key={m}>{m}</option>
                  ))}
                </select>
              </div>

              {/* ── Order channel — WhatsApp or Telegram ── */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>

                {/* Label above buttons */}
                <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '2px' }}>
                  Choose how to send your order
                </p>

                <div className="order-channel-row">

                  {/* WhatsApp button */}
                  <button
                    type="button"
                    className="btn-channel btn-channel-wa"
                    disabled={submitting}
                    onClick={e => handleSubmit(e, 'wa')}
                  >
                    {submitting ? (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.528 5.857L.057 23.882a.5.5 0 0 0 .611.612l6.166-1.453A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.592-.5-5.088-1.375l-.36-.214-3.733.88.897-3.643-.235-.375A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
                      </svg>
                    )}
                    <span>
                      <strong>Send via WhatsApp</strong>
                      <small>+1 (934) 268-9086</small>
                    </span>
                  </button>

                  {/* Telegram button */}
                  <button
                    type="button"
                    className="btn-channel btn-channel-tg"
                    disabled={submitting}
                    onClick={e => handleSubmit(e, 'tg')}
                  >
                    {submitting ? (
                      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="spin"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>
                    ) : (
                      <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20">
                        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                      </svg>
                    )}
                    <span>
                      <strong>Send via Telegram</strong>
                      <small>@Lunacardvault01</small>
                    </span>
                  </button>

                </div>

                <p style={{ fontSize: '12px', color: 'var(--muted)', textAlign: 'center', lineHeight: '1.6' }}>
                  Your chosen app will open with the order prefilled — just hit Send.
                  <br />Order is also saved to our system and emailed to our team automatically.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default function OrdersPage() {
  return (
    <Suspense fallback={<div style={{ padding: '80px', textAlign: 'center' }}>Loading…</div>}>
      <OrdersInner />
    </Suspense>
  )
}
