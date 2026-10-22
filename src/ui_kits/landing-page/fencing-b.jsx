import React from 'react';
import {
  Button as BBase,
  Icon as BIcon,
  Logo as BLogo,
  SiteFooter as BFooter
} from '../../components/index.js';
import { PH, Faq } from './shared.jsx';
import {
  FenceForm,
  COLLECTIONS,
  CollectionCard,
  STEPS,
  FENCE_FAQ,
  DISCLAIMER,
  ProductGallery,
  CollectionsMobileCarousel
} from './fencing.jsx';
const BB = p => <BBase iconRight={p.icon ? undefined : 'arrow-right'} {...p} style={{ borderRadius: 999, ...p.style }} />;
const SITE = '/assets/site/';
const toThumb = s => s ? s.replace(/\.webp$/, '-thumb1000.webp').replace(/\.jpg$/, '-thumb1000.jpg') : s;
const NAVY = 'var(--mb-navy-site)';
const bH2 = { margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(30px,3.8vw,46px)', lineHeight: 1.06, letterSpacing: '-0.02em', color: 'var(--mb-ink)', textWrap: 'balance' };
const bBody = { margin: 0, fontFamily: 'var(--font-display)', fontWeight: 400, fontSize: 16, lineHeight: 1.65, color: 'var(--text-body)', textWrap: 'pretty' };
const bKick = { fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 12, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--mb-blue)' };
const BWrap = ({ children, style }) => <div style={{ maxWidth: 1760, margin: '0 auto', padding: '0 clamp(16px,4vw,96px)', ...style }}>{children}</div>;
const Kicker = ({ children, color }) => <div style={{ ...bKick, color: color || bKick.color, display: 'flex', alignItems: 'center', gap: 12 }}><span style={{ width: 28, height: 2, background: 'var(--mb-gold)' }}></span>{children}</div>;

function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = React.useState(() => typeof window !== 'undefined' && window.innerWidth < breakpoint);
  React.useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, [breakpoint]);
  return isMobile;
}

const HERO_IMGS = ['hero-fence-2.jpg', 'premier-fence-2.s2fyHJUQ_Z1TA8m8.webp', 'premier-fence-3.D4-lV4tn_Z1tJeCV.webp', 'premier-fence-4.DotQOhCR_1S4mdi.webp'];

function OfferBar() {
  const isMobile = useIsMobile(768);
  if (isMobile) return null;
  return <a href="tel:8005625770" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 14, flexWrap: 'wrap', padding: '10px 24px', background: 'var(--mb-gold)', color: NAVY, textDecoration: 'none', fontFamily: 'var(--font-ui)', fontSize: 13.5, fontWeight: 600 }}>
    <span style={{ fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', fontSize: 11.5 }}>Limited Time Offer</span>
    <span>Premier Fencing at Up to 60% Off · First come, first served</span>
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 800 }}><BIcon name="phone" size={14} stroke={1.5} />(800) 562-5770</span>
  </a>;
}

function BHeader() {
  const isMobile = useIsMobile(768);
  return (
    <header style={{ position: 'sticky', top: 0, zIndex: 100, background: '#fff', backdropFilter: 'blur(8px)', borderBottom: '1px solid var(--border-hairline)', boxShadow: '0 2px 10px rgba(0,0,0,.05)', width: '100%', maxWidth: '100%', boxSizing: 'border-box' }}>
      <BWrap style={{
        height: isMobile ? 56 : 76,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: isMobile ? 'clamp(4px, 1.5vw, 8px)' : 20,
        padding: isMobile ? '0 clamp(8px, 2.5vw, 12px)' : '0 clamp(16px,4vw,96px)',
        boxSizing: 'border-box'
      }}>
        <div style={{ flexShrink: 0, display: 'flex', alignItems: 'center' }}>
          <BLogo height={isMobile ? 24 : 42} style={{ maxHeight: isMobile ? 24 : 42, width: 'auto' }} />
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? 'clamp(5px, 1.6vw, 10px)' : 22, flexShrink: 0 }}>
          <a
            href="tel:8005625770"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: isMobile ? 4 : 6,
              fontFamily: 'var(--font-ui)',
              fontWeight: 700,
              fontSize: isMobile ? 'clamp(10.5px, 2.6vw, 11.5px)' : 15,
              color: NAVY,
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            <BIcon name="phone" size={isMobile ? 12 : 16} stroke={1.5} />
            (800) 562-5770
          </a>
          <BB
            href="#quote-b"
            size={isMobile ? "sm" : "md"}
            iconRight={isMobile ? null : undefined}
            style={{
              background: NAVY,
              borderColor: NAVY,
              padding: isMobile ? '0 clamp(8px, 2.2vw, 11px)' : '0 24px',
              height: isMobile ? 32 : 44,
              fontSize: isMobile ? 'clamp(10.5px, 2.6vw, 11.5px)' : 14,
              whiteSpace: 'nowrap',
              flexShrink: 0
            }}
          >
            <span className="b-cta-full">Get a Quote</span>
            <span className="b-cta-short">Quote</span>
          </BB>
        </div>
      </BWrap>
    </header>
  );
}

const STATS = [['30+', 'Years in business'], ['60,000+', 'Projects built'], ['4.5★', 'Google & Yelp'], ['850+', 'Reviews'], ['USA', 'Made in our LA factory']];
const STATS_WORDS = ['homeowners', 'architects', 'builders', 'developers', 'HOAs'];

function BHero() {
  const [i, setI] = React.useState(0);
  const [w, setW] = React.useState(0);
  const isMobile = useIsMobile(768);
  React.useEffect(() => { const t = setInterval(() => setI(n => (n + 1) % HERO_IMGS.length), 6000); return () => clearInterval(t); }, [i]);
  React.useEffect(() => { const t = setInterval(() => setW(n => (n + 1) % STATS_WORDS.length), 2200); return () => clearInterval(t); }, []);

  if (isMobile) {
    return (
      <section style={{ position: 'relative', overflow: 'hidden', color: '#fff', background: '#0B1A2C' }}>
        {/* Top clean image with zoom-in - compact height so text moves up */}
        <div style={{ position: 'relative', width: '100%', height: 'clamp(230px, 34vh, 290px)', overflow: 'hidden' }}>
          <img className="hero-zoom-bg" src={SITE + toThumb(HERO_IMGS[0])} alt="Premium Aluminum Fencing" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 60%', display: 'block' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0) 65%, rgba(11,26,44,.95) 100%)' }} />
        </div>

        {/* Content & CTA */}
        <div style={{ padding: '16px 16px 36px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <Kicker color="var(--mb-yellow)">Limited-Time Fencing Offer</Kicker>
          <h1 style={{ margin: '10px 0 0', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(28px,7.5vw,36px)', lineHeight: 1.08, letterSpacing: '-0.02em', color: '#fff' }}>
            Premium Aluminum Fencing in SoCal
          </h1>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: 10, margin: '10px auto 0' }}>
            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 18, color: '#fff' }}>Save</span>
            <span
              className="text-llamador-pulse"
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: 'clamp(38px,10vw,48px)',
                lineHeight: .9,
                letterSpacing: '-0.03em',
                color: 'var(--mb-yellow)',
                transformOrigin: 'center center'
              }}
            >
              Up to 60%*
            </span>
          </div>
          <p style={{ ...bBody, color: '#fff', fontWeight: 600, fontSize: 15.5, lineHeight: 1.45, margin: '10px 0 0' }}>
            Create more privacy, security, and curb appeal with custom aluminum fencing built for your property.
          </p>

          {/* Authority points moved where the text was on mobile */}
          <div style={{
            width: '100%',
            maxWidth: 420,
            margin: '16px 0 14px',
            padding: '16px 12px 14px',
            borderRadius: 8,
            overflow: 'hidden',
            border: '1px solid rgba(255,255,255,.08)',
            background: 'repeating-linear-gradient(180deg, rgba(255,255,255,.035) 0px, rgba(255,255,255,.035) 9px, rgba(0,0,0,.16) 9px, rgba(0,0,0,.16) 12px), linear-gradient(90deg, #161C27 0%, #1C2331 50%, #161C27 100%)'
          }}>
            <div style={{ textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 19, letterSpacing: '-0.01em', lineHeight: 1.1, marginBottom: 12, color: '#fff' }}>
              Trusted by <span key={w} style={{ fontWeight: 700, color: 'var(--mb-yellow)', display: 'inline-block', animation: 'bWordIn 500ms var(--ease-out)' }}>{STATS_WORDS[w]}</span>
            </div>
            <div style={{ overflow: 'hidden', width: '100%' }}>
              <div className="mb-marquee-track" style={{ gap: 28, paddingLeft: 12 }}>
                {[...STATS, ...STATS].map(([n, l], idx) => (
                  <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, minWidth: 120, color: 'rgba(214,220,230,.88)' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--mb-yellow)' }}>{n}</span>
                    <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 10, letterSpacing: '0.14em', textTransform: 'uppercase', opacity: .85, textAlign: 'center' }}>{l}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <BB href="tel:8005625770" size="lg" variant="outline-light" icon="phone" style={{ fontSize: 15, height: 50, padding: '0 24px', width: '100%', maxWidth: 360, justifyContent: 'center', margin: '4px 0 0', textShadow: 'none' }}>
            Call (800) 562-5770
          </BB>
          <p style={{ margin: '10px 0 0', fontFamily: 'var(--font-ui)', fontStyle: 'italic', fontSize: 11.5, opacity: .8, color: 'rgba(255,255,255,.7)' }}>
            {DISCLAIMER}
          </p>

          {/* Form below */}
          <div id="quote-b" style={{ width: '100%', maxWidth: 460, margin: '28px auto 0' }}>
            <FenceForm navy />
          </div>
        </div>
      </section>
    );
  }

  return <section style={{ position: 'relative', overflow: 'hidden', color: '#fff', background: '#0B1A2C' }}>
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }}>
      {HERO_IMGS.map((src, n) => <img key={src} src={SITE + src} alt="" className="hero-zoom-bg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: n === i ? 1 : 0, transition: 'opacity 1100ms var(--ease-out)' }} />)}
    </div>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,26,48,.9) 0%, rgba(0,32,58,.72) 42%, rgba(0,32,58,.25) 75%, rgba(0,32,58,.15) 100%), linear-gradient(0deg, rgba(0,20,40,.6) 0%, rgba(0,20,40,0) 30%)' }}></div>
    <BWrap style={{ position: 'relative', zIndex: 1, minHeight: 'min(860px, calc(100vh - 110px))', display: 'flex', flexWrap: 'wrap', gap: 'clamp(32px,5vw,72px)', alignItems: 'center', justifyContent: 'space-between', padding: 'clamp(48px,6vw,96px) clamp(24px,5vw,96px) 140px' }}>
      <div style={{ flex: '1 1 520px', maxWidth: 900, minWidth: 'min(100%, 320px)', display: 'flex', flexDirection: 'column', gap: 'clamp(18px,1.6vw,26px)', alignItems: 'flex-start', textShadow: 'var(--shadow-text)' }}>
        <Kicker color="var(--mb-yellow)">Limited-Time Fencing Offer</Kicker>
        <h1 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(38px,4.6vw,84px)', lineHeight: 1.02, letterSpacing: '-0.03em' }}>
          Premium Aluminum Fencing in SoCal
        </h1>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 14, flexWrap: 'wrap' }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 18, color: '#fff' }}>Save</span>
          <span
            className="text-llamador-pulse"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 800,
              fontSize: 'clamp(54px,6.4vw,120px)',
              lineHeight: .9,
              letterSpacing: '-0.04em',
              color: 'var(--mb-yellow)',
              transformOrigin: 'left center'
            }}
          >
            Up to 60%*
          </span>
        </div>
        <p style={{ ...bBody, color: '#fff', fontWeight: 600, fontSize: 'clamp(18px,1.35vw,24px)', lineHeight: 1.45, maxWidth: '40em' }}>Create more privacy, security, and curb appeal with custom aluminum fencing built for your property.</p>
        <p style={{ ...bBody, color: 'rgba(255,255,255,.9)', fontSize: 'clamp(16px,1.1vw,19px)', maxWidth: '44em' }}>For a limited time, Mulholland Brand is offering up to 60% off premium fencing. Choose a modern architectural look, a wood-look aluminum finish, or a privacy-forward design, then let our local team fabricate and install it around your home.</p>
        <BB href="tel:8005625770" size="lg" variant="outline-light" icon="phone" style={{ fontSize: 15, height: 54, padding: '0 28px', textShadow: 'none' }}>Call (800) 562-5770</BB>
        <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontStyle: 'italic', fontSize: 12, opacity: .85 }}>{DISCLAIMER}</p>
      </div>
      <div id="quote-b" style={{ flex: '1 1 380px', maxWidth: 500, marginLeft: 'auto', display: 'flex', justifyContent: 'flex-end' }}><FenceForm navy /></div>
    </BWrap>
    <div style={{ position: 'absolute', left: 0, right: 0, bottom: 28, zIndex: 2 }}>
      <BWrap style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ display: 'flex', gap: 10 }}>
          {HERO_IMGS.map((src, n) => <button key={src} type="button" aria-label={'Photo ' + (n + 1)} onClick={() => setI(n)} style={{ width: 'clamp(64px,7vw,104px)', aspectRatio: '4 / 3', padding: 0, border: n === i ? '2px solid var(--mb-yellow)' : '2px solid rgba(255,255,255,.35)', borderRadius: 4, overflow: 'hidden', cursor: 'pointer', opacity: n === i ? 1 : .7, transition: 'opacity var(--dur-med), border-color var(--dur-med)', background: 'none' }}><img src={SITE + toThumb(src)} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></button>)}
        </div>
        <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 13, letterSpacing: '0.14em', color: 'rgba(255,255,255,.85)', whiteSpace: 'nowrap' }}>{String(i + 1).padStart(2, '0')} / {String(HERO_IMGS.length).padStart(2, '0')}</span>
      </BWrap>
    </div>
  </section>;
}

function StatsBand() {
  const isMobile = useIsMobile(768);
  if (isMobile) return null;
  const stats = STATS;
  const words = STATS_WORDS;
  const [w, setW] = React.useState(0);
  React.useEffect(() => { const t = setInterval(() => setW(n => (n + 1) % words.length), 2200); return () => clearInterval(t); }, []);
  return <section style={{ position: 'relative', overflow: 'hidden', color: '#fff', padding: isMobile ? '36px 0 32px' : 'clamp(48px,5vw,72px) 0 clamp(44px,5vw,64px)', background: 'repeating-linear-gradient(180deg, rgba(255,255,255,.035) 0px, rgba(255,255,255,.035) 9px, rgba(0,0,0,.16) 9px, rgba(0,0,0,.16) 12px), linear-gradient(90deg, #161C27 0%, #1C2331 50%, #161C27 100%)' }}>
    <h2 style={{ margin: '0 0 clamp(20px,3.5vw,44px)', textAlign: 'center', fontFamily: 'var(--font-display)', fontWeight: 300, fontSize: 'clamp(24px,2.8vw,38px)', letterSpacing: '-0.01em', lineHeight: 1.1 }}>Trusted by <span key={w} style={{ fontWeight: 700, color: 'var(--mb-yellow)', display: 'inline-block', animation: 'bWordIn 500ms var(--ease-out)' }}>{words[w]}</span></h2>
    {isMobile ? (
      <div style={{ overflow: 'hidden', width: '100%' }}>
        <div className="mb-marquee-track" style={{ gap: 36, paddingLeft: 16 }}>
          {[...stats, ...stats].map(([n, l], idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, minWidth: 140, color: 'rgba(214,220,230,.88)' }}>
              <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 28, lineHeight: 1, letterSpacing: '-0.02em', color: 'var(--mb-yellow)' }}>{n}</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 11, letterSpacing: '0.18em', textTransform: 'uppercase', opacity: .85, textAlign: 'center' }}>{l}</span>
            </div>
          ))}
        </div>
      </div>
    ) : (
      <div style={{ WebkitMaskImage: 'linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)', maskImage: 'linear-gradient(90deg, transparent 0%, #000 12%, #000 88%, transparent 100%)' }}>
        <BWrap style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', gap: '28px 40px' }}>
          {stats.map(([n, l]) => <div key={l} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 6, color: 'rgba(214,220,230,.78)' }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'clamp(30px,3.2vw,42px)', lineHeight: 1, letterSpacing: '-0.02em' }}>{n}</span>
            <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 600, fontSize: 11.5, letterSpacing: '0.22em', textTransform: 'uppercase', opacity: .8 }}>{l}</span>
          </div>)}
        </BWrap>
      </div>
    )}
  </section>;
}

function Perimeter() {
  const isMobile = useIsMobile(768);
  const imgs = ['homeowner-1.CzkRp749_1SkpUp-thumb800.webp', 'homeowner-2.CNR39tVD_1LhwtL-thumb800.webp', 'homeowner-3.BaKwTfL0_Z1osoBo-thumb800.webp'];
  return <section style={{ padding: isMobile ? '48px 0' : 'clamp(72px,9vw,128px) 0' }}>
    <BWrap style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: isMobile ? 28 : 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1.3fr 1fr', gridTemplateRows: '1fr 1fr', gap: 10, height: isMobile ? 280 : 'clamp(380px,40vw,520px)' }}>
        <img src={SITE + imgs[0]} alt="" style={{ gridRow: 'span 2', width: '100%', height: '100%', objectFit: 'cover', objectPosition: '16% center', borderRadius: 6 }} />
        <img src={SITE + imgs[1]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />
        <img src={SITE + imgs[2]} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 6 }} />
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
        <Kicker>Privacy. Security. Curb Appeal.</Kicker>
        <h2 style={bH2}>A Better Perimeter Starts With the Right Fence</h2>
        <p style={{ ...bBody, fontSize: isMobile ? 17 : 19, fontWeight: 500, color: NAVY }}>Your fence should not feel like an afterthought. It should make your property feel more private, secure, and complete.</p>
        <p style={bBody}>Mulholland Brand creates custom aluminum fencing for Southern California homes that need a modern exterior solution, not a standard, one-size-fits-all panel. Our team will review your space, your preferred style, and the design details that matter before recommending the right fencing system for your property.</p>
        <BB href="#quote-b" size="lg" style={{ background: NAVY, borderColor: NAVY, marginTop: 6, width: isMobile ? '100%' : 'auto', textAlign: 'center', justifyContent: 'center' }}>Get My Free On-Site Estimate</BB>
      </div>
    </BWrap>
  </section>;
}

function StylePicker() {
  const isMobile = useIsMobile(768);
  const [a, setA] = React.useState(0);
  const C = COLLECTIONS;
  return <section style={{ background: 'var(--mb-tint)', padding: isMobile ? '48px 0 56px' : 'clamp(72px,9vw,120px) 0' }}>
    <BWrap>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: isMobile ? 'flex-start' : 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: isMobile ? 32 : 36 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, maxWidth: 620 }}>
          <Kicker>Eight custom aluminum collections</Kicker>
          <h2 style={bH2}>Find the Fencing Style That Fits Your Property</h2>
        </div>
        <p style={{ ...bBody, maxWidth: 460 }}>Your fence should match the architecture of your home, the privacy you want, and the way your property is laid out. We offer eight custom aluminum fencing collections, each powder-coated, rust-free, and built to follow your terrain.</p>
      </div>

      {isMobile ? (
        <CollectionsMobileCarousel isMobile={isMobile} />
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'clamp(24px,4vw,56px)', alignItems: 'stretch' }}>
          <div role="tablist" style={{ flex: '1 1 300px', display: 'flex', flexDirection: 'column', borderTop: '1px solid var(--border-hairline)' }}>
            {C.map(([n], k) => <button key={n} role="tab" type="button" aria-selected={k === a} onClick={() => setA(k)} onMouseEnter={() => setA(k)} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12, padding: '17px 4px', background: 'none', border: 0, borderBottom: '1px solid var(--border-hairline)', cursor: 'pointer', textAlign: 'left', fontFamily: 'var(--font-display)', fontWeight: k === a ? 700 : 500, fontSize: 18, color: k === a ? NAVY : 'var(--text-muted)', transition: 'color var(--dur-fast)' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 16 }}><span style={{ fontFamily: 'var(--font-ui)', fontSize: 12, fontWeight: 700, color: k === a ? 'var(--mb-gold)' : 'var(--mb-gray-400)', width: 20 }}>{String(k + 1).padStart(2, '0')}</span>{n}</span>
              <BIcon name="arrow-right" size={18} stroke={1.5} style={{ opacity: k === a ? 1 : 0, transition: 'opacity var(--dur-fast)' }} />
            </button>)}
          </div>
          <div style={{ flex: '2 1 480px', position: 'relative', minHeight: 520, borderRadius: 8, overflow: 'hidden', background: '#0B1A2C' }}>
            {C.map(([cName, cTag, cDesc, cImg], idx) => {
              const active = idx === a;
              const photo = PH + '2k/' + cImg;
              return (
                <div
                  key={cName}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: active ? 1 : 0,
                    transform: active ? 'translateX(0)' : idx < a ? 'translateX(-36px)' : 'translateX(36px)',
                    transition: 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1), transform 500ms cubic-bezier(0.16, 1, 0.3, 1)',
                    pointerEvents: active ? 'auto' : 'none',
                    display: 'flex',
                    alignItems: 'flex-end',
                    zIndex: active ? 2 : 1
                  }}
                >
                  <img
                    src={photo}
                    alt={cName}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(0,30,56,.95) 0%, rgba(0,30,56,.45) 50%, rgba(0,30,56,0) 80%)' }} />
                  <div style={{ position: 'relative', zIndex: 3, padding: 'clamp(24px,3.5vw,44px)', color: '#fff', display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 620 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'clamp(26px,2.8vw,36px)', lineHeight: 1.1 }}>{cName}</span>
                    <span style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 18, color: 'var(--mb-yellow)' }}>{cTag}</span>
                    <p style={{ ...bBody, color: 'rgba(255,255,255,.92)', fontSize: 15.5 }}>{cDesc}</p>
                    <BB href="#quote-b" variant="accent" style={{ marginTop: 10, alignSelf: 'flex-start' }}>Request My Free Estimate</BB>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </BWrap>
  </section>;
}

function MaterialCompare() {
  const isMobile = useIsMobile(768);
  const getSiteSrc = f => SITE + (isMobile ? toThumb(f) : f);
  const cols = [
    ['Wood Decays', 'wood-new.DalD19lI_1rLVJc.webp', 'wood-weathered.BBD80oWc_23q87V.webp', ['Re-stain or re-seal', 'Repaint', 'Replace rotted or warped members', 'Replace the unit'], false],
    ['Iron Rusts', 'iron-new.BTtjktLk_ZAQe6E.webp', 'iron-weathered.owVicitI_Z28GfWs.webp', ['Repaint', 'Sand and treat rust', 'Re-weld corroded joints', 'Replace the unit'], false],
    ['Aluminum Withstands', 'alu-new.DqPFZsfW_2uqJ9V.webp', 'alu-weathered.CIVjziou_C2oBz.webp', ['It can’t rust', 'Colour is baked in', 'Durability for decades', 'It won’t burn'], true],
  ];
  const [aged, setAged] = React.useState(false);
  return <section style={{ padding: 'clamp(72px,9vw,120px) 0', background: '#fff' }}>
    <BWrap>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,420px),1fr))', gap: '24px 72px', alignItems: 'end', marginBottom: 44 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <Kicker>Built to last</Kicker>
          <h2 style={bH2}>Why Homeowners Choose Aluminum Fencing</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <p style={bBody}>Wood and steel can require recurring attention over time. Premium aluminum provides a clean, modern alternative for homeowners seeking privacy and architectural style with less ongoing upkeep.</p>
          <p style={bBody}>With Mulholland Brand, your fencing project is designed, fabricated, and installed by one local team. That means a more coordinated process from initial estimate through final installation.</p>
        </div>
      </div>
      <div style={{ display: 'inline-flex', padding: 4, borderRadius: 999, background: 'var(--mb-tint)', border: '1px solid var(--border-hairline)', marginBottom: 24 }}>
        {[['New', false], ['Weathered', true]].map(([l, v]) => <button key={l} type="button" onClick={() => setAged(v)} style={{ border: 0, cursor: 'pointer', padding: '10px 22px', borderRadius: 999, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 13.5, background: aged === v ? NAVY : 'transparent', color: aged === v ? '#fff' : NAVY, transition: 'background var(--dur-med)' }}>{l}</button>)}
      </div>
      <div style={{ gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,280px),1fr))', display: 'grid', gap: 20 }}>
        {cols.map(([t, nw, wt, items, win]) => <div key={t} style={{ borderRadius: 6, overflow: 'hidden', background: win ? NAVY : 'var(--mb-tint)', color: win ? '#fff' : 'var(--mb-ink)', display: 'flex', flexDirection: 'column' }}>
          <div style={{ position: 'relative', aspectRatio: '4 / 3' }}>
            <img src={getSiteSrc(nw)} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
            <img src={getSiteSrc(wt)} alt="" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', opacity: aged ? 1 : 0, transition: 'opacity 600ms var(--ease-out)' }} />
            <span style={{ position: 'absolute', top: 14, left: 14, padding: '5px 12px', borderRadius: 999, background: 'rgba(0,0,0,.55)', color: '#fff', fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase' }}>{aged ? 'Weathered' : 'New'}</span>
          </div>
          <div style={{ padding: '26px 26px 30px', display: 'flex', flexDirection: 'column', gap: 16 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 24 }}>{t}</span>
            <ul style={{ listStyle: 'none', margin: 0, padding: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
              {items.map(x => <li key={x} style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'var(--font-ui)', fontSize: 14.5, fontWeight: 500 }}><BIcon name={win ? 'check' : 'refresh-cw'} size={16} stroke={1.5} color={win ? 'var(--mb-yellow)' : 'var(--mb-gray-400)'} />{x}</li>)}
            </ul>
          </div>
        </div>)}
      </div>
    </BWrap>
  </section>;
}

function HowItWorksMobileTabs({ getSiteSrc, imgs }) {
  const [activeStep, setActiveStep] = React.useState(0);
  const [t, d] = STEPS[activeStep];
  return <div style={{ maxWidth: 480, margin: '0 auto', padding: '0 8px' }}>
    <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginBottom: 18 }}>
      {STEPS.map((step, idx) => (
        <button key={step[0]}
          type="button"
          onClick={() => setActiveStep(idx)}
          style={{
            flex: 1,
            padding: '12px 6px',
            borderRadius: 8,
            border: activeStep === idx ? '2px solid ' + NAVY : '1px solid var(--border-hairline)',
            background: activeStep === idx ? NAVY : '#fff',
            color: activeStep === idx ? '#fff' : 'var(--mb-ink)',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 4,
            transition: 'all 200ms ease'
          }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 11, letterSpacing: '0.14em', color: activeStep === idx ? 'var(--mb-yellow)' : 'var(--mb-blue)' }}>STEP {idx + 1}</span>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 13 }}>0{idx + 1}</span>
        </button>
      ))}
    </div>

    <div style={{ background: '#fff', borderRadius: 8, overflow: 'hidden', boxShadow: 'var(--shadow-card)', textAlign: 'left' }}>
      <div style={{ aspectRatio: '16 / 10', overflow: 'hidden', position: 'relative' }}>
        <img
          src={getSiteSrc(imgs[activeStep])}
          alt={t}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          loading="lazy"
        />
      </div>
      <div style={{ padding: '22px 20px 24px', display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 11.5, letterSpacing: '0.18em', color: 'var(--mb-gold)' }}>STEP {activeStep + 1} OF 3</span>
        </div>
        <h3 style={{ margin: 0, fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, lineHeight: 1.2, color: NAVY }}>{t}</h3>
        <p style={{ ...bBody, fontSize: 14.5, lineHeight: 1.6 }}>{d}</p>
        <BB href="#quote-b" style={{ background: NAVY, borderColor: NAVY, alignSelf: 'flex-start', marginTop: 4 }}>Schedule Consultation</BB>
      </div>
    </div>
  </div>;
}

function HowItWorks() {
  const isMobile = useIsMobile(768);
  const getSiteSrc = f => SITE + (isMobile ? toThumb(f) : f);
  const imgs = ['consult-1.Cq0RkNVt_Z2iWgO2.webp', 'design-1.DEREC25w_ZLJHeP.webp', 'install-1.BStnZaSj_ZVoeAu.webp'];
  return <section style={{ background: 'var(--mb-tint)', padding: isMobile ? '48px 0 60px' : 'clamp(72px,9vw,120px) 0' }}>
    <BWrap>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 14, alignItems: 'center', textAlign: 'center', marginBottom: isMobile ? 28 : 52 }}>
        <Kicker>How it works</Kicker>
        <h2 style={bH2}>How Your Fencing Project Works</h2>
      </div>
      {isMobile ? (
        <HowItWorksMobileTabs getSiteSrc={getSiteSrc} imgs={imgs} />
      ) : (
        <ol style={{ listStyle: 'none', margin: 0, padding: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 24 }}>
          {STEPS.map(([t, d], k) => <li key={t} className="step-card" style={{ background: '#fff', borderRadius: 6, overflow: 'hidden', boxShadow: 'var(--shadow-card)' }}>
            <div style={{ aspectRatio: '16 / 10', overflow: 'hidden', position: 'relative' }}>
              <img
                src={getSiteSrc(imgs[k])}
                alt={t}
                className="step-card-img"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
            <div style={{ padding: '26px 28px 32px', display: 'flex', flexDirection: 'column', gap: 12 }}>
              <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 800, fontSize: 12, letterSpacing: '0.2em', color: 'var(--mb-gold)' }}>STEP {k + 1}</span>
              <span className="step-card-title" style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 21, lineHeight: 1.2, color: NAVY }}>{t}</span>
              <p style={{ ...bBody, fontSize: 15 }}>{d}</p>
            </div>
          </li>)}
        </ol>
      )}
    </BWrap>
  </section>;
}

function LocalBuilt() {
  const isMobile = useIsMobile(768);
  const getSiteSrc = f => SITE + (isMobile ? toThumb(f) : f);
  const pts = [['factory', 'Canoga Park facility', 'Cut, welded, powder-coated, and finished under one roof.'], ['hard-hat', 'Our own in-house crew', 'The people who fabricate your project are the people who install it.'], ['layers', 'Coordinated systems', 'Future gates and perimeter elements can match in style, color, and profile.']];
  return <section style={{ background: NAVY, color: '#fff', display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,440px),1fr))' }}>
    <div className="img-zoom-wrap" style={{ minHeight: 480, overflow: 'hidden', position: 'relative' }}><img src={getSiteSrc('mulholland-brand-1.jpg')} alt="Mulholland Local Team" className="banner-zoom-img ambient-zoom-bg" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} /></div>
    <div style={{ padding: 'clamp(48px,7vw,104px) clamp(24px,6vw,88px)', display: 'flex', flexDirection: 'column', gap: 22, justifyContent: 'center' }}>
      <Kicker color="var(--mb-yellow)">Local manufacturing</Kicker>
      <h2 style={{ ...bH2, color: '#fff' }}>Local Fabrication. One Team. A Coordinated Result.</h2>
      <p style={{ ...bBody, color: 'rgba(255,255,255,.88)' }}>Mulholland Brand fabricates fencing in its LA factory and installs it with its own team. When your project includes a future gate or another perimeter element, our systems can be designed to coordinate in style, color, and profile.</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 8 }}>
        {pts.map(([ic, t, d]) => <div key={t} style={{ display: 'flex', gap: 18, alignItems: 'flex-start' }}>
          <BIcon name={ic} size={30} stroke={1.25} color="var(--mb-yellow)" />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}><span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 16 }}>{t}</span><span style={{ fontFamily: 'var(--font-display)', fontSize: 14.5, lineHeight: 1.5, opacity: .8 }}>{d}</span></div>
        </div>)}
      </div>
    </div>
  </section>;
}

const FENCE_REVIEWS = [
  {
    name: 'Brad M.',
    location: 'La Crescenta-Montrose, CA',
    source: 'yelp',
    stars: 5,
    title: 'Top professionals from sales to installation',
    quote: 'Their sales, project management and construction teams were top professionals. We have a black frame with wood finished panels, that are straight and true, and we consistently get compliments from the neighbors. Best money we’ve spent in a long time!',
    project: 'Wood-Look Aluminum Perimeter Fence'
  },
  {
    name: 'Mark H.',
    location: 'Rancho Bernardo, San Diego, CA',
    source: 'yelp',
    stars: 5,
    title: 'Custom made and installed in just hours',
    quote: 'Mulholland did our gate and small fence sections. Only took about 6 weeks to custom make the pieces and install took just a couple of hours. The installation crew was excellent.',
    project: 'Custom Gate & Privacy Fence Sections'
  },
  {
    name: 'Lewis F.',
    location: 'Santa Monica, CA',
    source: 'yelp',
    stars: 5,
    title: 'Zero maintenance powder coating',
    quote: 'The color choices were excellent and the powder coating is a very nice feature.. No more painting necessary of wrought iron that was so maintenace intensive on the last.',
    project: 'Modern Architectural Aluminum Fencing'
  },
  {
    name: 'David L.',
    location: 'Del Mar, CA',
    source: 'google',
    stars: 5,
    title: 'Still looks brand new after 2 years of coastal salt air',
    quote: "Living right by the ocean, our old wood fence warped and rotted within three years. We upgraded to Mulholland's aluminum horizontal slat fencing and it still looks brand new after two years of salt air and sun.",
    project: 'Horizontal Slat Privacy Fencing'
  },
  {
    name: 'Elena G.',
    location: 'Sherman Oaks, CA',
    source: 'google',
    stars: 5,
    title: 'Custom color matched our home perfectly',
    quote: 'The fact that they manufacture everything locally in their own factory made a massive difference. We wanted a very specific custom charcoal color to match our home’s trim, and they matched it perfectly.',
    project: 'Complete Perimeter Aluminum Fence System'
  }
];

function Reviews() {
  const isMobile = useIsMobile(768);
  const [current, setCurrent] = React.useState(0);
  const [paused, setPaused] = React.useState(false);
  const total = FENCE_REVIEWS.length;

  React.useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % total);
    }, 4800);
    return () => clearInterval(timer);
  }, [paused, total]);

  const prev = () => setCurrent(c => (c - 1 + total) % total);
  const next = () => setCurrent(c => (c + 1) % total);
  const rev = FENCE_REVIEWS[current];

  const R = [
    ['Brad M.', 'La Crescenta-Montrose, CA', 'yelp', 'Their sales, project management and construction teams were top professionals. We have a black frame with wood finished panels, that are straight and true, and we consistently get compliments from the neighbors. Best money we’ve spent in a long time!'],
    ['Mark H.', 'Rancho Bernardo, San Diego, CA', 'yelp', 'Mulholland did our gate and small fence sections. Only took about 6 weeks to custom make the pieces and install took just a couple of hours. The installation crew was excellent.'],
    ['Lewis F.', 'Santa Monica, CA', 'yelp', 'The color choices were excellent and the powder coating is a very nice feature.. No more painting necessary of wrought iron that was so maintenace intensive on the last.']
  ];

  return (
    <section style={{ padding: isMobile ? '56px 0' : 'clamp(72px,9vw,120px) 0', background: '#fff' }}>
      <BWrap>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 24, flexWrap: 'wrap', marginBottom: isMobile ? 28 : 44 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <Kicker>What customers say</Kicker>
            <h2 style={bH2}>Reviewed by the People Who Live With It</h2>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 44, color: NAVY, lineHeight: 1 }}>4.5</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <span style={{ color: 'var(--mb-star)', fontSize: 18, letterSpacing: 2 }}>★★★★★</span>
              <span style={{ fontFamily: 'var(--font-ui)', fontSize: 13, color: 'var(--text-muted)' }}>Google &amp; Yelp · 850+ reviews</span>
            </div>
          </div>
        </div>

        {isMobile ? (
          <div
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
            style={{
              position: 'relative',
              background: 'var(--mb-tint)',
              border: '1px solid var(--border-hairline)',
              borderRadius: 8,
              padding: '28px 20px 24px',
              boxShadow: '0 6px 24px rgba(0,0,0,.04)',
              minHeight: 320,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}
          >
            <div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 16 }}>
                <span style={{ color: 'var(--mb-star)', fontSize: 18, letterSpacing: 2 }}>★★★★★</span>
                <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: NAVY }}>
                  Review {current + 1} of {total}
                </span>
              </div>

              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 18, color: NAVY, lineHeight: 1.25, margin: '0 0 12px' }}>
                “{rev.title}”
              </h3>
              <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 15.5, lineHeight: 1.65, color: 'var(--mb-ink)', minHeight: 110 }}>
                “{rev.quote}”
              </blockquote>
            </div>

            <div style={{ borderTop: '1px solid var(--border-hairline)', paddingTop: 18, marginTop: 22, display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 16 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, color: NAVY }}>{rev.name}</span>
                  <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, color: 'var(--text-muted)' }}>{rev.location} · <span style={{ color: NAVY, fontWeight: 600 }}>{rev.project}</span></span>
                </div>
                <img src={'https://mulhollandbrand.com/brand/' + rev.source + '.svg'} alt={rev.source} style={{ height: 20, marginLeft: 8 }} />
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <button
                  type="button"
                  onClick={prev}
                  aria-label="Previous review"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1px solid var(--border-hairline)',
                    background: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: NAVY,
                    boxShadow: '0 2px 6px rgba(0,0,0,.06)',
                    transition: 'background 200ms ease'
                  }}
                >
                  <BIcon name="chevron-left" size={18} stroke={1.5} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label="Next review"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    border: '1px solid var(--border-hairline)',
                    background: '#fff',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: NAVY,
                    boxShadow: '0 2px 6px rgba(0,0,0,.06)',
                    transition: 'background 200ms ease'
                  }}
                >
                  <BIcon name="chevron-right" size={18} stroke={1.5} />
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 8, marginTop: 20 }}>
              {FENCE_REVIEWS.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={'Go to review ' + (idx + 1)}
                  onClick={() => setCurrent(idx)}
                  style={{
                    width: current === idx ? 24 : 8,
                    height: 8,
                    borderRadius: 999,
                    border: 0,
                    padding: 0,
                    background: current === idx ? NAVY : 'rgba(0,0,0,.15)',
                    cursor: 'pointer',
                    transition: 'all 300ms ease'
                  }}
                />
              ))}
            </div>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,300px),1fr))', gap: 20 }}>
            {R.map(([n, loc, src, q]) => (
              <figure key={n} style={{ margin: 0, padding: '30px 30px 28px', borderRadius: 6, border: '1px solid var(--border-hairline)', display: 'flex', flexDirection: 'column', gap: 20 }}>
                <span style={{ color: 'var(--mb-star)', fontSize: 16, letterSpacing: 2 }}>★★★★★</span>
                <blockquote style={{ margin: 0, fontFamily: 'var(--font-display)', fontSize: 16.5, lineHeight: 1.6, color: 'var(--mb-ink)', flex: 1 }}>“{q}”</blockquote>
                <figcaption style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
                  <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <span style={{ fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 15, color: NAVY }}>{n}</span>
                    <span style={{ fontFamily: 'var(--font-ui)', fontSize: 12.5, color: 'var(--text-muted)' }}>{loc}</span>
                  </span>
                  <img src={'https://mulhollandbrand.com/brand/' + src + '.svg'} alt={src} style={{ height: 20 }} />
                </figcaption>
              </figure>
            ))}
          </div>
        )}
      </BWrap>
    </section>
  );
}

function FinalQuote() {
  const isMobile = useIsMobile(768);
  const getSiteSrc = f => SITE + (isMobile ? toThumb(f) : f);
  // FenceForm from import
  return <section id="quote-b2" className="img-zoom-wrap" style={{ position: 'relative', overflow: 'hidden', color: '#fff', padding: isMobile ? '48px 0 60px' : 'clamp(72px,9vw,128px) 0' }}>
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', zIndex: 0 }}>
      <img src={getSiteSrc('craft-1.SE-ikNJG_1l86za.webp')} alt="Mulholland Craft" className="banner-zoom-img ambient-zoom-bg" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
    </div>
    <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(0,26,48,.95) 0%, rgba(0,40,72,.85) 50%, rgba(0,59,105,.7) 100%)', zIndex: 1 }} />
    <BWrap style={{ position: 'relative', zIndex: 2, display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit,minmax(min(100%,400px),1fr))', gap: isMobile ? 32 : 'clamp(40px,6vw,96px)', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 20, alignItems: 'flex-start' }}>
        <Kicker color="var(--mb-yellow)">Limited-time offer</Kicker>
        <h2 style={{ ...bH2, color: '#fff', fontSize: 'clamp(30px,4.4vw,56px)' }}><span style={{ color: 'var(--mb-yellow)' }}>Save Up to 60%</span> on Select Premium Aluminum Fencing Styles</h2>
        <p style={{ ...bBody, color: 'rgba(255,255,255,.88)', fontSize: 16 }}>Bring more privacy, security, and architectural style to your property with a fencing system built by Mulholland Brand. Request your Free On-Site Estimate to review your options and confirm availability for the current promotion.</p>
        <p style={{ ...bBody, color: 'rgba(255,255,255,.88)' }}>Mulholland Brand designs, fabricates, and installs premium aluminum fencing for properties across Southern California.</p>
        <a href="tel:8005625770" style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-ui)', fontWeight: 700, fontSize: 17, color: '#fff', textDecoration: 'none' }}><BIcon name="phone" size={20} stroke={1.5} color="var(--mb-yellow)" />Prefer to call? (800) 562-5770</a>
        <p style={{ margin: 0, fontFamily: 'var(--font-ui)', fontStyle: 'italic', fontSize: 12, opacity: .75 }}>Up to 60% off applies to select fencing styles and available inventory. Restrictions may apply.</p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', maxWidth: 440, margin: '0 auto' }}><FenceForm navy /></div>
    </BWrap>
  </section>;
}

function FencingPageB() {
  return <div style={{ width: '100%', overflowX: 'clip' }}>
    <OfferBar />
    <BHeader />
    <BHero />
    <StatsBand />
    <Perimeter />
    <StylePicker />
    <ProductGallery />
    <MaterialCompare />
    <HowItWorks />
    <LocalBuilt />
    <Reviews />
    <Faq wide items={FENCE_FAQ} />
    <FinalQuote />
    <BFooter />
  </div>;
}
if (typeof window !== 'undefined') {
  window.FencingPageB = FencingPageB;
}
export default FencingPageB;
export { FencingPageB };
