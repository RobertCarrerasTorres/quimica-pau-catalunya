const topics = [
  {n:"01",icon:"⚛️",title:"Estructura atòmica i taula periòdica",desc:"Models atòmics, configuració electrònica i propietats periòdiques.",lessons:4},
  {n:"02",icon:"🔗",title:"Enllaç químic",desc:"Enllaç iònic, covalent, metàl·lic i forces intermoleculars.",lessons:4},
  {n:"03",icon:"🧪",title:"Formulació i nomenclatura",desc:"Compostos inorgànics i introducció a la formulació orgànica.",lessons:3},
  {n:"04",icon:"⚖️",title:"Estequiometria i reaccions",desc:"Ajustament, reactiu limitant, rendiment i càlculs químics.",lessons:5},
  {n:"05",icon:"💧",title:"Gasos i dissolucions",desc:"Lleis dels gasos, concentracions i propietats de dissolucions.",lessons:4},
  {n:"06",icon:"🌡️",title:"Termoquímica",desc:"Entalpia, llei de Hess i energia de les reaccions.",lessons:4},
  {n:"07",icon:"⏱️",title:"Cinètica química",desc:"Velocitat de reacció, factors i energia d’activació.",lessons:3},
  {n:"08",icon:"⚖️",title:"Equilibri químic",desc:"Kc, Kp, quocient de reacció i principi de Le Châtelier.",lessons:5},
  {n:"09",icon:"🧊",title:"Solubilitat i equilibris heterogenis",desc:"Producte de solubilitat, precipitació i efecte de l’ió comú.",lessons:3},
  {n:"10",icon:"🧫",title:"Àcids i bases",desc:"pH, força relativa, hidròlisi i solucions amortidores.",lessons:5},
  {n:"11",icon:"📊",title:"Valoracions àcid-base",desc:"Corbes de valoració, indicadors i càlculs de concentració.",lessons:3},
  {n:"12",icon:"🔋",title:"Redox i electroquímica",desc:"Nombre d’oxidació, piles, electròlisi i potencials.",lessons:5},
  {n:"13",icon:"🧬",title:"Química orgànica",desc:"Grups funcionals, isomeria i reaccions orgàniques bàsiques.",lessons:4},
];

export default function Home() {
  return <>
    <header className="topbar"><a className="brand" href="#"><span className="brand-mark">Q</span><span>Química PAU</span></a><nav className="nav"><a href="#temari">Temari</a><a href="#metode">Com funciona</a><a href="#pla">Pla d’estudi</a></nav><a className="top-cta" href="#temari">Comença a estudiar <span>→</span></a></header>
    <main className="shell">
      <section className="hero"><div><span className="eyebrow">✦ Preparació PAU Catalunya 2027</span><h1>La química que necessites. <span>La confiança que et falta.</span></h1><p>Entén la teoria, practica amb exercicis tipus PAU i aprèn dels teus errors. Tot el que necessites per arribar preparat a l’examen de Química.</p><div className="hero-actions"><a className="primary" href="#temari">Explora el temari <span>→</span></a><a className="secondary" href="#metode">Descobreix com funciona ↓</a></div></div><div className="hero-art"><div className="orbit"><div className="atom">Q</div><span className="electron"/></div><div className="formula one">H₂O · H₂SO₄</div><div className="formula two">pH = −log[H₃O⁺]</div><div className="formula three">ΔH = qₚ</div></div></section>
      <section className="stats" id="metode"><div className="stat"><strong>13</strong><span>Blocs de contingut</span></div><div className="stat"><strong>100%</strong><span>Enfocat a les PAU de Catalunya</span></div><div className="stat"><strong>Al teu ritme</strong><span>Pràctica i seguiment personalitzat</span></div></section>
      <section className="content-section" id="temari"><div className="section-head"><div><h2>El temari de Química</h2><p>Organitzat per blocs perquè avancis pas a pas.</p></div><span className="muted-note">Curs 2026–2027</span></div><div className="topic-grid">{topics.map(t=><article className="topic" key={t.n}><div className="topic-icon">{t.icon}</div><h3>{t.title}</h3><p>{t.desc}</p><div className="topic-foot"><span>{t.n} · {t.lessons} unitats</span><b>Properament ↗</b></div></article>)}</div></section>
      <section className="bottom-cta" id="pla"><div><h2>Un bon resultat comença amb un bon pla.</h2><p>Segueix un itinerari setmanal fins a les PAU de juny de 2027.</p></div><a className="primary" href="#temari">Veure el temari →</a></section>
    </main>
    <footer className="shell"><span>© 2026 Química PAU Catalunya</span><span>Material de preparació. Continguts en desenvolupament.</span></footer>
  </>;
}
