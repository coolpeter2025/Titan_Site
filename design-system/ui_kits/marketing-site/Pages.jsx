/* global React, Header, Hero, TrustSignals, StatsBand, ProcessSteps, ServicesGrid, Testimonials, LocationsGrid, OfficesStrip, CTASection, Footer, ServiceIcon */
const { useState } = React;

function HomePage({ onNavigate }) {
  return (
    <>
      <Hero
        headline="Tampa's Trusted Home Remodeling Experts"
        subheadline="For Tampa homeowners who demand quality, precision, and trust. Kitchen & bath remodels, full home renovations, additions, new construction, and storm damage repair — all under one licensed contractor."
        bgImage="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1400"
        onCta={() => onNavigate("contact")}
      />
      <section style={{padding:"80px 0",background:"#fff"}}>
        <div className="container" style={{padding:"0 24px"}}>
          <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:64,alignItems:"start"}}>
            <div>
              <p className="eyebrow" style={{marginBottom:12}}>About Titan Homes Group</p>
              <h2 style={{fontSize:36,fontWeight:600,color:"var(--ink)",marginBottom:24,letterSpacing:"-0.01em",lineHeight:1.15}}>Award-Winning Craftsmanship, Unmatched Expertise</h2>
              <p style={{color:"#374151",fontSize:15,lineHeight:1.6,marginBottom:16}}>
                At Titan Homes Group, we believe that home remodeling isn't just about construction — it's about trust, precision, and delivering a space that exceeds expectations. Our commitment to quality, professionalism, and customer satisfaction has earned us a reputation as Tampa Bay's most trusted remodeling team.
              </p>
              <p style={{color:"#374151",fontSize:15,lineHeight:1.6,marginBottom:28}}>
                As a fully licensed, bonded, and insured General Contractor in Florida (#CBC1264713), we ensure every project meets the highest standards of safety and craftsmanship. We bring design innovation, attention to detail, and competitive pricing — without compromising on quality.
              </p>
              <div style={{display:"flex",gap:12}}>
                <button onClick={() => onNavigate("contact")} className="btn btn-primary" style={{background:"var(--lavender)",color:"var(--navy)"}}>Free Consultation</button>
                <button onClick={() => onNavigate("about")} className="btn btn-navy">Learn More</button>
              </div>
            </div>
            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              <div style={{background:"var(--navy)",color:"#fff",borderRadius:8,padding:28}}>
                <h3 style={{fontSize:20,fontWeight:600,marginBottom:12}}>Build Your Dream Home Today</h3>
                <p style={{color:"rgba(255,255,255,.80)",fontSize:14,lineHeight:1.6,marginBottom:20}}>Titan Homes Group delivers expert craftsmanship, competitive pricing, and a seamless remodeling experience from first consultation to final walkthrough.</p>
                <button onClick={() => onNavigate("contact")} className="btn btn-primary">Get a Quote</button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <TrustSignals/>
      <StatsBand/>
      <ProcessSteps/>
      <ServicesGrid onNavigate={onNavigate}/>
      <Testimonials/>
      <LocationsGrid onNavigate={onNavigate}/>
      <OfficesStrip/>
      <CTASection onCta={() => onNavigate("contact")}/>
    </>
  );
}

function ServicesPage({ onNavigate }) {
  return (
    <>
      <section style={{background:"var(--navy-deep)",color:"#fff",padding:"80px 0"}}>
        <div className="container" style={{padding:"0 24px",textAlign:"center"}}>
          <p className="eyebrow" style={{color:"var(--lavender)",marginBottom:12}}>What We Do</p>
          <h1 style={{fontSize:48,fontWeight:600,letterSpacing:"-0.01em",lineHeight:1.1,marginBottom:16,color:"#fff"}}>Our Services</h1>
          <p style={{fontSize:18,color:"rgba(255,255,255,.85)",maxWidth:720,margin:"0 auto"}}>Seven core services — one licensed, bonded, insured contractor. From kitchen upgrades to ground-up construction.</p>
        </div>
      </section>
      <section style={{padding:"96px 0",background:"#fff"}}>
        <div className="container" style={{padding:"0 24px",display:"flex",flexDirection:"column",gap:20}}>
          {window.SERVICES.map((s,i) => (
            <div key={s.slug} style={{
              display:"grid",
              gridTemplateColumns: i % 2 === 0 ? "360px 1fr auto" : "1fr 360px auto",
              gap:32,alignItems:"center",
              padding:20,
              border:"1px solid var(--lavender-hover)",borderRadius:12,background:"#fff",
              boxShadow:"0 1px 2px rgba(26,31,58,0.04)"
            }}>
              {i % 2 === 0 ? (
                <>
                  <div style={{position:"relative",borderRadius:8,overflow:"hidden",aspectRatio:"4/3",background:"var(--navy)"}}>
                    <img src={s.image} alt={s.name} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                  </div>
                  <div>
                    <div style={{display:"inline-flex",alignItems:"center",gap:10,marginBottom:10}}>
                      <div style={{width:40,height:40,borderRadius:8,background:"var(--lavender)",color:"var(--navy)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <ServiceIcon slug={s.slug} size={22}/>
                      </div>
                      <p className="eyebrow" style={{margin:0}}>0{i+1} · Service</p>
                    </div>
                    <h3 style={{fontSize:26,fontWeight:600,color:"var(--ink)",marginBottom:10,letterSpacing:"-0.01em"}}>{s.name}</h3>
                    <p style={{color:"var(--muted)",fontSize:15,lineHeight:1.65,maxWidth:620}}>{s.shortDescription}</p>
                  </div>
                  <button onClick={() => onNavigate("contact")} className="btn btn-navy" style={{padding:"12px 22px",minHeight:44,whiteSpace:"nowrap"}}>Get Quote</button>
                </>
              ) : (
                <>
                  <div style={{paddingLeft:8}}>
                    <div style={{display:"inline-flex",alignItems:"center",gap:10,marginBottom:10}}>
                      <div style={{width:40,height:40,borderRadius:8,background:"var(--lavender)",color:"var(--navy)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                        <ServiceIcon slug={s.slug} size={22}/>
                      </div>
                      <p className="eyebrow" style={{margin:0}}>0{i+1} · Service</p>
                    </div>
                    <h3 style={{fontSize:26,fontWeight:600,color:"var(--ink)",marginBottom:10,letterSpacing:"-0.01em"}}>{s.name}</h3>
                    <p style={{color:"var(--muted)",fontSize:15,lineHeight:1.65,maxWidth:620}}>{s.shortDescription}</p>
                  </div>
                  <div style={{position:"relative",borderRadius:8,overflow:"hidden",aspectRatio:"4/3",background:"var(--navy)"}}>
                    <img src={s.image} alt={s.name} loading="lazy" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
                  </div>
                  <button onClick={() => onNavigate("contact")} className="btn btn-navy" style={{padding:"12px 22px",minHeight:44,whiteSpace:"nowrap"}}>Get Quote</button>
                </>
              )}
            </div>
          ))}
        </div>
      </section>
      <CTASection onCta={() => onNavigate("contact")}/>
    </>
  );
}

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <>
      <section style={{background:"var(--navy-deep)",color:"#fff",padding:"64px 0"}}>
        <div className="container" style={{padding:"0 24px",textAlign:"center"}}>
          <p className="eyebrow" style={{color:"var(--lavender)",marginBottom:12}}>Let's Talk</p>
          <h1 style={{fontSize:48,fontWeight:600,letterSpacing:"-0.01em",lineHeight:1.1,color:"#fff"}}>Free Consultation</h1>
        </div>
      </section>
      <section style={{padding:"80px 0",background:"#fff"}}>
        <div className="container" style={{padding:"0 24px",display:"grid",gridTemplateColumns:"1.3fr 1fr",gap:48,maxWidth:1100}}>
          <form style={{background:"var(--lavender)",borderRadius:8,padding:32,border:"1px solid var(--lavender-hover)"}} onSubmit={e => {e.preventDefault(); setSubmitted(true);}}>
            <h2 style={{fontSize:24,fontWeight:600,color:"var(--ink)",marginBottom:20}}>Tell us about your project</h2>
            {submitted ? (
              <div style={{padding:"40px 0",textAlign:"center",color:"var(--navy)"}}>
                <p style={{fontSize:18,fontWeight:600,marginBottom:8}}>Thank you!</p>
                <p style={{fontSize:14,color:"#374151"}}>We'll be in touch within one business day.</p>
              </div>
            ) : (
              <div style={{display:"flex",flexDirection:"column",gap:14}}>
                <Field label="Name"><input required className="th-input" placeholder="Your full name"/></Field>
                <Field label="Phone"><input required className="th-input" placeholder="(000) 000-0000"/></Field>
                <Field label="Email"><input required type="email" className="th-input" placeholder="you@example.com"/></Field>
                <Field label="Service"><select className="th-input">{window.SERVICES.map(s => <option key={s.slug}>{s.name}</option>)}</select></Field>
                <Field label="Project details"><textarea rows={4} className="th-input" placeholder="Tell us about your vision, timeline, and budget."/></Field>
                <button type="submit" className="btn btn-navy" style={{marginTop:4}}>Request Free Consultation</button>
              </div>
            )}
          </form>
          <div style={{display:"flex",flexDirection:"column",gap:24}}>
            <div>
              <p className="eyebrow" style={{marginBottom:8}}>Tampa Office</p>
              <p style={{color:"var(--ink)",fontWeight:600,marginBottom:4}}>5103 Memorial Hwy, Tampa, FL 33634</p>
              <a href="tel:+17277094141" style={{color:"var(--navy)",fontSize:22,fontWeight:700,textDecoration:"none"}}>(727) 709-4141</a>
            </div>
            <div>
              <p className="eyebrow" style={{marginBottom:8}}>Sarasota Office</p>
              <p style={{color:"var(--ink)",fontWeight:600,marginBottom:4}}>4333 S Tamiami Trail Suite A, Sarasota, FL 34231</p>
              <a href="tel:+17277094141" style={{color:"var(--navy)",fontSize:22,fontWeight:700,textDecoration:"none"}}>(727) 709-4141</a>
            </div>
            <div>
              <p className="eyebrow" style={{marginBottom:8}}>Hours</p>
              <p style={{color:"#374151"}}>Monday – Friday, 9:00 AM – 5:00 PM</p>
            </div>
            <div style={{background:"var(--navy)",color:"#fff",borderRadius:8,padding:20}}>
              <p style={{fontWeight:700,marginBottom:4}}>The Titan Guarantee</p>
              <p style={{color:"rgba(255,255,255,.80)",fontSize:13,lineHeight:1.5}}>“We don't ask for final payment until you're 100% happy.”</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function AboutPage({ onNavigate }) {
  return (
    <>
      <section style={{background:"var(--navy-deep)",color:"#fff",padding:"80px 0"}}>
        <div className="container" style={{padding:"0 24px",textAlign:"center",maxWidth:820,margin:"0 auto"}}>
          <p className="eyebrow" style={{color:"var(--lavender)",marginBottom:12}}>About Us</p>
          <h1 style={{fontSize:48,fontWeight:600,letterSpacing:"-0.01em",lineHeight:1.1,marginBottom:20,color:"#fff"}}>Tampa Bay's Premier Home Remodeling &amp; Construction Experts</h1>
          <p style={{fontSize:18,color:"rgba(255,255,255,.85)",lineHeight:1.6}}>Licensed, bonded, insured. 10+ years. 350+ projects. One promise: we don't ask for final payment until you're 100% happy.</p>
        </div>
      </section>
      <StatsBand/>
      <ProcessSteps/>
      <Testimonials/>
      <CTASection onCta={() => onNavigate("contact")}/>
    </>
  );
}

function LocationsPage({ onNavigate }) {
  return (
    <>
      <section style={{background:"var(--navy-deep)",color:"#fff",padding:"64px 0"}}>
        <div className="container" style={{padding:"0 24px",textAlign:"center"}}>
          <p className="eyebrow" style={{color:"var(--lavender)",marginBottom:12}}>Where We Work</p>
          <h1 style={{fontSize:48,fontWeight:600,letterSpacing:"-0.01em",lineHeight:1.1,color:"#fff"}}>Serving All of Tampa Bay</h1>
        </div>
      </section>
      <section style={{padding:"64px 0",background:"#fff"}}>
        <div className="container" style={{padding:"0 24px"}}>
          <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16}}>
            {window.LOCATIONS.map(l => (
              <div key={l.slug} style={{background:"var(--lavender)",border:"1px solid var(--lavender-hover)",borderRadius:8,padding:20}}>
                <p style={{fontWeight:600,color:"var(--navy)",fontSize:16}}>{l.name}</p>
                <p style={{color:"#6b7280",fontSize:12,marginTop:4}}>FL · {l.county} County</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <OfficesStrip/>
      <CTASection onCta={() => onNavigate("contact")}/>
    </>
  );
}

function Field({ label, children }) {
  return (
    <label style={{display:"flex",flexDirection:"column",gap:5}}>
      <span style={{fontSize:12,fontWeight:700,color:"var(--navy)",textTransform:"uppercase",letterSpacing:".1em"}}>{label}</span>
      {children}
    </label>
  );
}

Object.assign(window, { HomePage, ServicesPage, ContactPage, AboutPage, LocationsPage });
