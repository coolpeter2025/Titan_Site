/* global React, ServiceIcon, StarIcon */

function ServiceCard({ service, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background:"#fff",
        color:"var(--ink)",
        borderRadius:12,
        overflow:"hidden",
        display:"flex",
        flexDirection:"column",
        border:"1px solid var(--lavender-hover)",
        boxShadow: hover ? "0 24px 40px -14px rgba(26,31,58,0.22)" : "0 1px 3px rgba(26,31,58,0.06)",
        transform: hover ? "translateY(-4px)" : "none",
        transition:"transform .25s cubic-bezier(.2,.8,.2,1), box-shadow .25s ease, border-color .25s ease",
      }}>
      {/* Image */}
      <div style={{position:"relative",aspectRatio:"4/3",overflow:"hidden",background:"var(--navy)"}}>
        <img
          src={service.image}
          alt={service.name}
          loading="lazy"
          onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = "./assets/roof-repair-photo.svg"; }}
          style={{
            width:"100%",height:"100%",objectFit:"cover",display:"block",
            transform: hover ? "scale(1.06)" : "scale(1.01)",
            transition:"transform .6s cubic-bezier(.2,.8,.2,1)",
          }}/>
        {/* Bottom shade for icon badge legibility */}
        <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(26,31,58,0) 45%, rgba(26,31,58,0.55) 100%)",pointerEvents:"none"}}/>
        {/* Icon badge */}
        <div style={{
          position:"absolute",left:16,bottom:16,
          width:44,height:44,borderRadius:10,
          background:"#fff",color:"var(--navy)",
          display:"flex",alignItems:"center",justifyContent:"center",
          boxShadow:"0 6px 14px -4px rgba(26,31,58,0.35)",
        }}>
          <ServiceIcon slug={service.slug} size={22}/>
        </div>
      </div>

      {/* Body */}
      <div style={{padding:"22px 22px 20px",display:"flex",flexDirection:"column",flex:1}}>
        <h3 style={{fontSize:20,fontWeight:600,lineHeight:1.25,marginBottom:8,color:"var(--ink)",letterSpacing:"-0.01em"}}>{service.name}</h3>
        <p style={{color:"var(--muted)",fontSize:14,lineHeight:1.6,marginBottom:18,flex:1}}>{service.shortDescription}</p>
        <button
          onClick={onClick}
          style={{
            alignSelf:"flex-start",background:"none",border:0,padding:0,cursor:"pointer",
            color:"var(--navy)",fontWeight:700,fontSize:14,
            display:"inline-flex",alignItems:"center",gap:6,fontFamily:"inherit",
          }}>
          Learn more
          <span style={{display:"inline-block",transform: hover ? "translateX(4px)" : "none",transition:"transform .2s ease"}}>→</span>
        </button>
      </div>
    </div>
  );
}

function ServicesGrid({ onNavigate }) {
  return (
    <section style={{padding:"96px 0 104px",background:"#fafbff",borderTop:"1px solid var(--lavender-hover)",borderBottom:"1px solid var(--lavender-hover)"}}>
      <div className="container" style={{padding:"0 24px"}}>
        <div style={{textAlign:"center",marginBottom:56,maxWidth:720,marginLeft:"auto",marginRight:"auto"}}>
          <p className="eyebrow" style={{marginBottom:14}}>What We Do</p>
          <h2 style={{fontSize:40,fontWeight:600,color:"var(--ink)",marginBottom:18,letterSpacing:"-0.015em",lineHeight:1.12}}>From Kitchens to Full Rebuilds — We Do It All</h2>
          <p style={{color:"var(--muted)",fontSize:17,lineHeight:1.6}}>
            Kitchen remodeling, bathroom renovations, full home renovations, additions, new construction, and storm damage restoration — all under one licensed contractor.
          </p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24}}>
          {window.SERVICES.map(s => <ServiceCard key={s.slug} service={s} onClick={() => onNavigate && onNavigate("services")}/>)}
        </div>
        <div style={{textAlign:"center",marginTop:48}}>
          <button onClick={() => onNavigate && onNavigate("services")} className="btn btn-navy">View All Services</button>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section style={{padding:"80px 0",background:"#fff"}}>
      <div className="container" style={{padding:"0 24px"}}>
        <div style={{textAlign:"center",marginBottom:56}}>
          <p className="eyebrow" style={{marginBottom:12}}>Client Reviews</p>
          <h2 style={{fontSize:36,fontWeight:600,color:"var(--ink)",marginBottom:16,letterSpacing:"-0.01em"}}>What Tampa Bay Homeowners Say</h2>
          <p style={{color:"#4b5563",maxWidth:640,margin:"0 auto",fontSize:16,lineHeight:1.6}}>
            Trusted by hundreds of Tampa Bay families. Here's what our clients say about working with Titan Homes Group.
          </p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:32}}>
          {window.TESTIMONIALS.map((t,i) => (
            <div key={i} style={{background:"var(--lavender)",border:"1px solid var(--lavender-hover)",borderRadius:8,padding:32}}>
              <div style={{display:"flex",gap:4,marginBottom:16,color:"var(--navy)"}}>
                {[...Array(5)].map((_,j) => <StarIcon key={j} size={20}/>)}
              </div>
              <p style={{color:"var(--ink)",lineHeight:1.6,fontSize:15,marginBottom:24}}>“{t.quote}”</p>
              <div style={{borderTop:"1px solid var(--lavender-hover)",paddingTop:16}}>
                <p style={{fontWeight:700,color:"var(--navy)"}}>{t.author}</p>
                <p style={{color:"#6b7280",fontSize:14}}>{t.location}</p>
                <span style={{display:"inline-block",marginTop:8,background:"var(--navy)",color:"#fff",fontSize:12,padding:"4px 10px",borderRadius:4,fontWeight:500}}>{t.service}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{marginTop:48,textAlign:"center"}}>
          <div style={{display:"inline-flex",alignItems:"center",gap:12,background:"var(--navy)",color:"#fff",padding:"16px 28px",borderRadius:8}}>
            <span style={{fontSize:24}}>★★★★★</span>
            <div style={{textAlign:"left"}}>
              <p style={{fontWeight:700,fontSize:18}}>5.0 Google Rating</p>
              <p style={{color:"rgba(255,255,255,.70)",fontSize:13}}>Hundreds of verified 5-star reviews</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LocationsGrid({ onNavigate }) {
  const featured = window.LOCATIONS.slice(0, 8);
  return (
    <section style={{padding:"80px 0",background:"#fff"}}>
      <div className="container" style={{padding:"0 24px"}}>
        <div style={{textAlign:"center",marginBottom:40}}>
          <p className="eyebrow" style={{marginBottom:12}}>Where We Work</p>
          <h2 style={{fontSize:36,fontWeight:600,color:"var(--ink)",marginBottom:16,letterSpacing:"-0.01em"}}>Serving All of Tampa Bay</h2>
          <p style={{color:"#4b5563",maxWidth:640,margin:"0 auto",fontSize:16}}>With offices in Tampa and Sarasota, we serve 21 communities across Tampa Bay and Sarasota.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:16,marginBottom:32}}>
          {featured.map(l => (
            <button key={l.slug} onClick={() => onNavigate && onNavigate("locations")} style={{background:"var(--lavender)",border:"1px solid var(--lavender-hover)",borderRadius:8,padding:16,textAlign:"center",cursor:"pointer",fontFamily:"inherit",transition:"background .15s"}}
                    onMouseEnter={e => e.currentTarget.style.background = "var(--lavender-hover)"}
                    onMouseLeave={e => e.currentTarget.style.background = "var(--lavender)"}>
              <p style={{fontWeight:600,color:"var(--navy)"}}>{l.name}</p>
              <p style={{color:"#6b7280",fontSize:12,marginTop:2}}>FL · {l.county} County</p>
            </button>
          ))}
        </div>
        <div style={{textAlign:"center"}}>
          <button onClick={() => onNavigate && onNavigate("locations")} className="btn btn-navy">View All 21 Service Areas</button>
        </div>
      </div>
    </section>
  );
}

function OfficesStrip() {
  return (
    <section style={{background:"var(--navy-deep)",padding:"48px 0",color:"#fff"}}>
      <div className="container" style={{padding:"0 24px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:48}}>
        <div>
          <p style={{color:"rgba(255,255,255,.60)",fontSize:12,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",marginBottom:8}}>Tampa Office</p>
          <p style={{fontWeight:600,fontSize:16,marginBottom:8}}>5103 Memorial Hwy, Tampa, FL 33634</p>
          <a href="tel:+17277094141" style={{color:"var(--lavender)",fontSize:26,fontWeight:700,textDecoration:"none"}}>(727) 709-4141</a>
        </div>
        <div style={{borderLeft:"1px solid rgba(255,255,255,.15)",paddingLeft:48}}>
          <p style={{color:"rgba(255,255,255,.60)",fontSize:12,fontWeight:700,letterSpacing:".18em",textTransform:"uppercase",marginBottom:8}}>Sarasota Office</p>
          <p style={{fontWeight:600,fontSize:16,marginBottom:8}}>4333 S Tamiami Trail Suite A, Sarasota, FL 34231</p>
          <a href="tel:+17277094141" style={{color:"var(--lavender)",fontSize:26,fontWeight:700,textDecoration:"none"}}>(727) 709-4141</a>
        </div>
      </div>
    </section>
  );
}

function CTASection({ onCta }) {
  return (
    <section style={{background:"var(--navy)",padding:"80px 0",color:"#fff"}}>
      <div className="container" style={{padding:"0 24px",maxWidth:960,margin:"0 auto"}}>
        <div style={{textAlign:"center",marginBottom:40}}>
          <h2 style={{fontSize:48,fontWeight:600,marginBottom:16,letterSpacing:"-0.01em",lineHeight:1.1,color:"#fff"}}>Let's Build Your Dream Home</h2>
          <p style={{fontSize:18,color:"rgba(255,255,255,.85)",maxWidth:640,margin:"0 auto"}}>Get in touch with our team today to discuss your project, explore your options, and get a no-obligation estimate.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:16,maxWidth:720,margin:"0 auto"}}>
          <button onClick={onCta} className="btn btn-primary">Free Consultation</button>
          <a href="tel:+17277094141" className="btn btn-outline-white">Tampa: (727) 709-4141</a>
          <a href="tel:+17277094141" className="btn btn-outline-white">Sarasota: (727) 709-4141</a>
        </div>
        <p style={{textAlign:"center",color:"rgba(255,255,255,.70)",fontSize:14,marginTop:32,fontStyle:"italic"}}>“We don't ask for final payment until you're 100% happy.” — The Titan Guarantee</p>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{background:"var(--navy-deep)",color:"rgba(255,255,255,.85)"}}>
      <div className="container" style={{padding:"56px 24px"}}>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:40,marginBottom:40}}>
          <div>
            <div style={{display:"flex",alignItems:"center",gap:8,marginBottom:16}}>
              <div style={{background:"#fff",color:"var(--navy)",fontWeight:800,fontSize:14,padding:"4px 8px",borderRadius:4}}>TITAN</div>
              <span style={{color:"#fff",fontWeight:600}}>Homes Group</span>
            </div>
            <p style={{color:"rgba(255,255,255,.70)",fontSize:14,lineHeight:1.6,marginBottom:16}}>
              Tampa's Trusted Home Remodeling Experts — licensed, bonded, and insured general contractor serving Tampa Bay since 2015.
            </p>
            <p style={{color:"rgba(255,255,255,.60)",fontSize:12}}>License #CBC1264713</p>
          </div>
          <div>
            <h3 style={{color:"#fff",fontWeight:600,fontSize:13,textTransform:"uppercase",letterSpacing:".1em",marginBottom:16}}>Explore</h3>
            <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:10,fontSize:14}}>
              <li><a href="#" style={{color:"rgba(255,255,255,.75)",textDecoration:"none"}}>Home</a></li>
              <li><a href="#" style={{color:"rgba(255,255,255,.75)",textDecoration:"none"}}>About Us</a></li>
              <li><a href="#" style={{color:"rgba(255,255,255,.75)",textDecoration:"none"}}>Services</a></li>
              <li><a href="#" style={{color:"rgba(255,255,255,.75)",textDecoration:"none"}}>Areas Served</a></li>
              <li><a href="#" style={{color:"rgba(255,255,255,.75)",textDecoration:"none"}}>Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 style={{color:"#fff",fontWeight:600,fontSize:13,textTransform:"uppercase",letterSpacing:".1em",marginBottom:16}}>Services</h3>
            <ul style={{listStyle:"none",padding:0,margin:0,display:"flex",flexDirection:"column",gap:10,fontSize:14}}>
              {window.SERVICES.slice(0,6).map(s => (
                <li key={s.slug}><a href="#" style={{color:"rgba(255,255,255,.75)",textDecoration:"none"}}>{s.name}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <h3 style={{color:"#fff",fontWeight:600,fontSize:13,textTransform:"uppercase",letterSpacing:".1em",marginBottom:16}}>Contact Us</h3>
            <div style={{display:"flex",flexDirection:"column",gap:16,fontSize:14}}>
              <div>
                <p style={{color:"rgba(255,255,255,.55)",fontSize:11,textTransform:"uppercase",letterSpacing:".1em",marginBottom:4}}>Tampa</p>
                <p style={{color:"rgba(255,255,255,.80)",fontSize:12,marginBottom:4}}>5103 Memorial Hwy, Tampa, FL 33634</p>
                <a href="tel:+17277094141" style={{color:"#fff",fontWeight:600,textDecoration:"none"}}>(727) 709-4141</a>
              </div>
              <div>
                <p style={{color:"rgba(255,255,255,.55)",fontSize:11,textTransform:"uppercase",letterSpacing:".1em",marginBottom:4}}>Sarasota</p>
                <p style={{color:"rgba(255,255,255,.80)",fontSize:12,marginBottom:4}}>4333 S Tamiami Trail Suite A, Sarasota, FL 34231</p>
                <a href="tel:+17277094141" style={{color:"#fff",fontWeight:600,textDecoration:"none"}}>(727) 709-4141</a>
              </div>
            </div>
          </div>
        </div>
        <div style={{borderTop:"1px solid rgba(255,255,255,.10)",paddingTop:24,display:"flex",justifyContent:"space-between",fontSize:12,color:"rgba(255,255,255,.55)"}}>
          <p>&copy; 2026 Titan Homes Group. All rights reserved. | Licensed, Insured &amp; Bonded #CBC1264713</p>
          <div style={{display:"flex",gap:20}}><a href="#" style={{color:"inherit"}}>About</a><a href="#" style={{color:"inherit"}}>Contact</a><a href="#" style={{color:"inherit"}}>Services</a></div>
        </div>
      </div>
    </footer>
  );
}

Object.assign(window, { ServiceCard, ServicesGrid, Testimonials, LocationsGrid, OfficesStrip, CTASection, Footer });
