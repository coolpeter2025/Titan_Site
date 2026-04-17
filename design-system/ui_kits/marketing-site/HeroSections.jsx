/* global React */

function Hero({ headline, subheadline, bgImage, showTrustBar = true, onCta }) {
  return (
    <section style={{position:"relative",overflow:"hidden",color:"#fff",background:"linear-gradient(180deg, #1a1f3a 0%, #2a315b 100%)"}}>
      {/* Soft lavender atmospheric glow */}
      <div style={{position:"absolute",top:-200,right:-200,width:700,height:700,borderRadius:"50%",background:"radial-gradient(closest-side, rgba(212,201,239,.22), transparent 70%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:-150,left:-150,width:500,height:500,borderRadius:"50%",background:"radial-gradient(closest-side, rgba(212,201,239,.10), transparent 70%)",pointerEvents:"none"}}/>

      <div className="container" style={{position:"relative",padding:"96px 24px 80px"}}>
        <div style={{display:"grid",gridTemplateColumns:"1.15fr 1fr",gap:64,alignItems:"center"}}>

          {/* LEFT — copy column */}
          <div>
            <div style={{display:"inline-flex",alignItems:"center",gap:10,background:"rgba(212,201,239,.12)",border:"1px solid rgba(212,201,239,.28)",borderRadius:999,padding:"6px 14px",fontSize:13,fontWeight:600,letterSpacing:".01em",marginBottom:28,color:"#e8e0f7"}}>
              <span style={{width:7,height:7,borderRadius:"50%",background:"#d4c9ef",boxShadow:"0 0 0 4px rgba(212,201,239,.20)"}}/>
              Licensed General Contractor · CBC1264713
            </div>

            <h1 style={{fontSize:64,fontWeight:600,lineHeight:1.02,letterSpacing:"-0.025em",marginBottom:24,color:"#fff",textWrap:"balance"}}>{headline}</h1>
            {subheadline && <p style={{fontSize:18,lineHeight:1.65,color:"rgba(255,255,255,.82)",marginBottom:36,maxWidth:560}}>{subheadline}</p>}

            <div style={{display:"flex",gap:12,flexWrap:"wrap",marginBottom:40}}>
              <button onClick={onCta} className="btn btn-primary">Free Consultation</button>
              <a href="tel:+17277094141" className="btn btn-outline-white">Call (727) 709-4141</a>
            </div>

            {/* Trust row — divider separated */}
            <div style={{display:"flex",alignItems:"center",gap:32,paddingTop:28,borderTop:"1px solid rgba(212,201,239,.18)",flexWrap:"wrap"}}>
              <div>
                <div style={{color:"#d4c9ef",fontSize:14,fontWeight:700,letterSpacing:".02em",marginBottom:2}}>★★★★★ 5.0</div>
                <div style={{fontSize:12,color:"rgba(255,255,255,.65)"}}>Google Reviews</div>
              </div>
              <div style={{width:1,alignSelf:"stretch",background:"rgba(212,201,239,.18)"}}/>
              <div>
                <div style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:2}}>350+</div>
                <div style={{fontSize:12,color:"rgba(255,255,255,.65)"}}>Projects Completed</div>
              </div>
              <div style={{width:1,alignSelf:"stretch",background:"rgba(212,201,239,.18)"}}/>
              <div>
                <div style={{fontSize:14,fontWeight:700,color:"#fff",marginBottom:2}}>10+ Years</div>
                <div style={{fontSize:12,color:"rgba(255,255,255,.65)"}}>Serving Tampa Bay</div>
              </div>
            </div>
          </div>

          {/* RIGHT — photo card composition */}
          <div style={{position:"relative",height:560}}>
            {/* Lavender accent block */}
            <div style={{position:"absolute",top:-16,right:-16,width:200,height:200,background:"#d4c9ef",borderRadius:16,zIndex:0}}/>
            {/* Main photo */}
            <div style={{position:"absolute",inset:0,borderRadius:20,overflow:"hidden",boxShadow:"0 30px 80px -20px rgba(0,0,0,.5), 0 0 0 1px rgba(212,201,239,.15)",zIndex:2}}>
              <img src={bgImage} alt="Completed Tampa Bay remodel" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>
              {/* Subtle navy tint to unify with palette */}
              <div style={{position:"absolute",inset:0,background:"linear-gradient(180deg, rgba(26,31,58,0) 50%, rgba(26,31,58,0.35) 100%)"}}/>
            </div>
            {/* Floating badge — project count */}
            <div style={{position:"absolute",left:-24,bottom:40,background:"#fff",color:"var(--ink)",borderRadius:14,padding:"18px 22px",boxShadow:"0 20px 40px -12px rgba(0,0,0,0.35)",zIndex:3,minWidth:200}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:44,height:44,borderRadius:10,background:"var(--lavender)",color:"var(--navy)",display:"flex",alignItems:"center",justifyContent:"center"}}>
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
                </div>
                <div>
                  <div style={{fontSize:20,fontWeight:700,lineHeight:1,letterSpacing:"-0.01em"}}>On-Time</div>
                  <div style={{fontSize:12,color:"var(--muted)",marginTop:2}}>Transparent milestones</div>
                </div>
              </div>
            </div>
            {/* Floating badge — rating */}
            <div style={{position:"absolute",right:-16,top:40,background:"var(--navy-deep)",color:"#fff",borderRadius:14,padding:"14px 18px",boxShadow:"0 20px 40px -12px rgba(0,0,0,0.45)",zIndex:3,border:"1px solid rgba(212,201,239,.25)"}}>
              <div style={{fontSize:11,color:"#d4c9ef",fontWeight:600,letterSpacing:".08em",textTransform:"uppercase",marginBottom:4}}>Google Rating</div>
              <div style={{fontSize:22,fontWeight:700,letterSpacing:"-0.01em"}}>5.0 <span style={{color:"#d4c9ef",fontSize:14}}>★★★★★</span></div>
            </div>
          </div>
        </div>
      </div>

      {showTrustBar && (
        <div style={{position:"relative",background:"rgba(14,17,36,.55)",backdropFilter:"blur(8px)",borderTop:"1px solid rgba(212,201,239,.15)"}}>
          <div className="container" style={{padding:"16px 24px",display:"flex",flexWrap:"wrap",gap:24,justifyContent:"space-between",alignItems:"center",fontSize:13,fontWeight:500,color:"rgba(255,255,255,.80)",letterSpacing:".01em"}}>
            <span style={{display:"inline-flex",alignItems:"center",gap:8,color:"#e8e0f7"}}><span style={{width:6,height:6,borderRadius:"50%",background:"#d4c9ef"}}/>Licensed, Bonded &amp; Insured</span>
            <span>Tampa · Clearwater · St. Pete · Sarasota</span>
            <span>Free In-Home Consultations</span>
            <span>Insurance Claims Welcome</span>
          </div>
        </div>
      )}
    </section>
  );
}

function TrustSignals() {
  const signals = ["Licensed & Insured", "Google 5★ Rated", "350+ Projects", "10+ Years Experience"];
  return (
    <section style={{background:"var(--lavender)",padding:"48px 0",borderTop:"1px solid var(--lavender-hover)",borderBottom:"1px solid var(--lavender-hover)"}}>
      <div className="container" style={{padding:"0 24px"}}>
        <p className="eyebrow" style={{textAlign:"center",marginBottom:24}}>Trusted Across Tampa Bay</p>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24}}>
          {signals.map((s,i) => (
            <div key={i} style={{textAlign:"center",color:"var(--navy)",fontWeight:700,fontSize:16}}>{s}</div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBand() {
  const stats = [
    { num: "10+", label: "Years in Business" },
    { num: "350+", label: "Projects Completed" },
    { num: "20+", label: "Full-Time Professionals" },
    { num: "5.0★", label: "Google Rating" },
  ];
  return (
    <section style={{padding:"80px 0",background:"#fff"}}>
      <div className="container" style={{padding:"0 24px"}}>
        <div style={{textAlign:"center",marginBottom:40}}>
          <p className="eyebrow" style={{marginBottom:12}}>Why Homeowners Choose Titan</p>
          <h2 style={{fontSize:36,fontWeight:600,color:"var(--ink)",letterSpacing:"-0.01em",lineHeight:1.15,margin:0}}>
            Expert Renovations · Transparent Pricing · Unmatched Customer Care
          </h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24}}>
          {stats.map(s => (
            <div key={s.label} style={{background:"var(--lavender)",borderRadius:8,padding:"32px 24px",textAlign:"center"}}>
              <p style={{fontSize:40,fontWeight:700,color:"var(--navy)",marginBottom:8,letterSpacing:"-0.02em"}}>{s.num}</p>
              <p style={{color:"var(--ink)",fontSize:14,fontWeight:500}}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessSteps() {
  return (
    <section style={{padding:"80px 0",background:"var(--navy)",color:"#fff"}}>
      <div className="container" style={{padding:"0 24px"}}>
        <div style={{textAlign:"center",marginBottom:56}}>
          <h2 style={{fontSize:36,fontWeight:600,letterSpacing:"-0.01em",lineHeight:1.15,color:"#fff"}}>What to Expect: A Seamless Remodeling Experience</h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:24}}>
          {window.PROCESS_STEPS.map(s => (
            <div key={s.n} style={{textAlign:"center"}}>
              <div style={{width:56,height:56,borderRadius:"9999px",background:"var(--lavender)",color:"var(--navy)",display:"flex",alignItems:"center",justifyContent:"center",fontWeight:700,fontSize:16,margin:"0 auto 20px"}}>{s.n}</div>
              <h3 style={{fontSize:20,fontWeight:600,marginBottom:12}}>{s.title}</h3>
              <p style={{color:"rgba(255,255,255,.80)",fontSize:14,lineHeight:1.6,maxWidth:260,margin:"0 auto"}}>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, TrustSignals, StatsBand, ProcessSteps });
