/* global React */
const { useState } = React;

function Header({ onNavigate, active }) {
  const [open, setOpen] = useState(false);
  const links = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "locations", label: "Areas Served" },
    { id: "contact", label: "Contact" },
  ];
  const go = (id) => { setOpen(false); onNavigate(id); };
  return (
    <header style={{position:"sticky",top:0,zIndex:50,background:"var(--navy)",color:"#fff",boxShadow:"0 4px 6px -1px rgba(26,31,58,.1)"}}>
      <div style={{background:"var(--navy-darker)",fontSize:12}}>
        <div className="container" style={{padding:"8px 24px",display:"flex",justifyContent:"space-between",alignItems:"center",gap:16,color:"#e5e7eb"}}>
          <div style={{display:"flex",gap:20}}>
            <a href="tel:+17277094141" style={{color:"inherit"}}>Tampa: <b style={{color:"#fff"}}>(727) 709-4141</b></a>
            <a href="tel:+17277094141" style={{color:"inherit"}}>Sarasota: <b style={{color:"#fff"}}>(727) 709-4141</b></a>
            <a href="mailto:info@titanhomesgroup.com" style={{color:"inherit"}}>info@titanhomesgroup.com</a>
          </div>
          <div>License #CBC1264713</div>
        </div>
      </div>
      <div className="container" style={{padding:"0 24px",height:80,display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <button onClick={() => go("home")} style={{background:"none",border:0,display:"flex",alignItems:"center",gap:12,cursor:"pointer",color:"inherit"}}>
          <div style={{background:"#fff",color:"var(--navy)",fontWeight:800,fontSize:18,padding:"5px 11px",borderRadius:6,letterSpacing:"2px"}}>TITAN</div>
          <div style={{textAlign:"left",lineHeight:1.1}}>
            <div style={{fontWeight:600,fontSize:18}}>Titan Homes Group</div>
            <div style={{fontSize:11,fontWeight:500,letterSpacing:".18em",textTransform:"uppercase",color:"rgba(255,255,255,.70)",marginTop:3}}>Tampa's Trusted Remodelers</div>
          </div>
        </button>
        <nav style={{display:"flex",alignItems:"center",gap:28}}>
          {links.map(l => (
            <button key={l.id} onClick={() => go(l.id)} style={{background:"none",border:0,color: active === l.id ? "#fff" : "rgba(255,255,255,.90)",fontWeight:500,fontSize:15,cursor:"pointer",fontFamily:"inherit"}}>{l.label}</button>
          ))}
          <button onClick={() => go("contact")} className="btn btn-primary" style={{padding:"10px 20px",minHeight:0,fontSize:14}}>Free Consultation</button>
        </nav>
      </div>
    </header>
  );
}

window.Header = Header;
