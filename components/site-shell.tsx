'use client'

import Image from 'next/image'
import Link from 'next/link'

const WA_NUMBER  = '19342689086'
const WA_DISPLAY = '+1 (934) 268-9086'
const TG_USER    = '@Lunacardvault01'
const TG_HREF    = 'https://t.me/Lunacardvault01'
const MAIL       = 'lunacardsvault@gmail.com'

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Buy Fake ID', href: '/products' },
  { label: 'Orders', href: '/orders' },
  { label: 'Pricing-Payment', href: '/pricing' },
  { label: 'Evaluate', href: '/evaluate' },
  { label: 'Questions', href: '/faqs' },
  { label: 'About LunaCardsVault', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

function CartIcon() {
  return (
    <svg className="cart-icon-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
    </svg>
  )
}

export function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="site-header">
      {/* ── Logo + Cart row ── */}
      <div className="shell header-top">
        <Link href="/" className="brand-logo" aria-label="LunaCardsVault home">
          <div className="brand-logo-circle">
            <Image
              src="/images/cartellogo.jpg"
              alt="LunaCards Vault"
              width={66}
              height={66}
              priority
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="brand-wordmark">
            <span className="brand-wordmark-name">LunaCards Vault</span>
            <span className="brand-wordmark-sub">Premium Fake IDs</span>
          </div>
        </Link>

        <Link href="/cart" className="cart-icon-btn" aria-label="Shopping cart">
          <CartIcon />
          <span>Cart</span>
        </Link>
      </div>

      {/* ── Nav bar — always visible, horizontally scrollable on small screens ── */}
      <nav className="main-nav-bar" aria-label="Primary navigation">
        <div className="shell">
          <ul className="main-nav">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <Link href={href} className={active === label ? 'active' : ''}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export function PageHeader({ title }: { title: string }) {
  return (
    <div className="page-header">
      {/* Hero background image — full bleed, responsive */}
      <div className="page-header-bg" aria-hidden="true" />
      <div className="shell page-header-content">
        <h1>{title}</h1>
        <div className="breadcrumb">
          <Link href="/">HOME</Link>
          <span>/</span>
          <span>{title.toUpperCase()}</span>
        </div>
        <span className="breadcrumb-sep" style={{ background: '#fff' }} />
      </div>
    </div>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="shell footer-grid">

          {/* Col 1 — Logo (top-left) + Quick Links + Policies */}
          <div className="footer-col">
            {/* Circular logo */}
            <div className="footer-logo-wrap">
              <Link href="/" aria-label="LunaCardsVault home"
                style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
                <div className="footer-logo-circle">
                  <Image
                    src="/images/cartellogo.jpg"
                    alt="LunaCards Vault"
                    width={50}
                    height={50}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
                <div className="footer-logo-text">
                  <span className="footer-logo-name">LunaCards Vault</span>
                  <span className="footer-logo-sub">Premium Fake IDs</span>
                </div>
              </Link>
            </div>

            <h4>Quick Links</h4>
            <ul className="footer-nav">
              <li><Link href="/">HOME</Link></li>
              <li><Link href="/products">PRODUCT LIST</Link></li>
              <li><Link href="/pricing">ORDER</Link></li>
              <li><Link href="/pricing">USE GUIDE</Link></li>
              <li><Link href="/faqs">FAQ</Link></li>
              <li><Link href="/contact">CONTACT US</Link></li>
            </ul>

            <br />
            <h4>Related Policies</h4>
            <ul className="footer-policies">
              <li><Link href="/contact">RETURN &amp; REFUND POLICY</Link></li>
              <li><Link href="/contact">SHIPPING POLICY</Link></li>
              <li><Link href="/contact">TERMS &amp; CONDITIONS</Link></li>
              <li><Link href="/contact">PRIVACY POLICY</Link></li>
              <li><Link href="/pricing">PAYMENT POLICY</Link></li>
            </ul>
          </div>

          {/* Col 2 — empty spacer, keeps 3-col layout */}
          <div className="footer-col" />

          {/* Col 3 — About + Social */}
          <div className="footer-col footer-about">
            <h4>About</h4>
            <p><strong>Company:</strong> LunaCardsVault Inc.</p>
            <p><strong>WhatsApp:</strong> +1 (934) 268-9086</p>
            <p><strong>Telegram:</strong> @Lunacardvault01</p>
            <p><strong>Email:</strong> lunacardsvault@gmail.com</p>
            <div className="footer-social">
              <a href="https://wa.me/19342689086" className="social-btn social-wa" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.528 5.857L.057 23.882a.5.5 0 0 0 .611.612l6.166-1.453A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.592-.5-5.088-1.375l-.36-.214-3.733.88.897-3.643-.235-.375A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
              </a>
              <a href="https://t.me/Lunacardvault01" className="social-btn social-tg" aria-label="Telegram" target="_blank" rel="noopener noreferrer">
                <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
              </a>
              <a href="mailto:lunacardsvault@gmail.com" className="social-btn social-em" aria-label="Email">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="20" height="20"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              </a>
            </div>
          </div>

        </div>
      </div>

      <hr className="footer-divider" />

      <div className="shell footer-bottom">
        <span>Copyright © 2026, LunaCardsVault, All Rights Reserved</span>
      </div>

      {/* ── Floating contact buttons — rendered here so they show on every page ── */}
      <FloatingContacts />
    </footer>
  )
}

export function Shell({ children, active }: { children: React.ReactNode; active?: string }) {
  return (
    <>
      <SiteHeader active={active} />
      {children}
      <Footer />
      <FloatingContacts />
    </>
  )
}

/* ── Floating WhatsApp + Telegram buttons ── */
function FloatingContacts() {
  return (
    <div className="floating-contacts" aria-label="Quick contact">
      <a
        href="https://wa.me/19342689086"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-wa"
        aria-label="Chat on WhatsApp"
        title="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
          <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.123 1.528 5.857L.057 23.882a.5.5 0 0 0 .611.612l6.166-1.453A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.853 0-3.592-.5-5.088-1.375l-.36-.214-3.733.88.897-3.643-.235-.375A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
        </svg>
      </a>
      <a
        href="https://t.me/Lunacardvault01"
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn floating-tg"
        aria-label="Message on Telegram"
        title="Telegram"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" width="26" height="26">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
        </svg>
      </a>
    </div>
  )
}
