"use client";

import { useMemo, useState } from "react";
import { topics, studyPlan } from "../data/temari";
import Presentation from "../components/Presentation";

export default function Home() {
  const [selected, setSelected] = useState("01");
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [tab, setTab] = useState<"teoria" | "exercicis" | "pla">("teoria");
  const topic = topics.find((t) => t.id === selected) ?? topics[0];
  const totalQuestions = topics.reduce((sum, t) => sum + t.exercises.length, 0);
  const answered = Object.keys(answers).length;
  const score = useMemo(() => topics.reduce((sum, t) => sum + t.exercises.filter((e, i) => answers[t.id + "-" + i] === e.answer).length, 0), [answers]);

  function chooseTopic(id: string) {
    setSelected(id);
    setTab("teoria");
    setShowResults(false);
    document.getElementById("lesson")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  return <>
    <header className="topbar"><a className="brand" href="#"><span className="brand-mark">Q</span><span>Química PAU</span></a><nav className="nav"><a href="#temari">Temari</a><a href="#lesson">Estudia</a><a href="#pla">Pla d’estudi</a></nav><a className="top-cta" href="#temari">Comença a estudiar <span>→</span></a></header>
    <main className="shell">
      <section className="hero"><div><span className="eyebrow">✦ Preparació PAU Catalunya 2027</span><h1>La química que necessites. <span>La confiança que et falta.</span></h1><p>Estudia la teoria essencial, practica amb preguntes tipus PAU i comprova què has après amb correccions explicades.</p><div className="hero-actions"><a className="primary" href="#temari">Explora el temari <span>→</span></a><a className="secondary" href="#pla">Consulta el pla d’estudi ↓</a></div></div><div className="hero-art"><div className="orbit"><div className="atom">Q</div><span className="electron"/></div><div className="formula one">H₂O · H₂SO₄</div><div className="formula two">pH = −log[H₃O⁺]</div><div className="formula three">ΔH = qₚ</div></div></section>
      <section className="stats"><div className="stat"><strong>13</strong><span>Mòduls de contingut</span></div><div className="stat"><strong>{totalQuestions}</strong><span>Exercicis autocorrectius</span></div><div className="stat"><strong>{answered}/{totalQuestions}</strong><span>Preguntes respostes · {score} correctes</span></div></section>
      <section className="content-section" id="temari"><div className="section-head"><div><h2>El temari de Química</h2><p>Tria un mòdul per consultar els apunts i practicar.</p></div><span className="muted-note">Curs 2026–2027</span></div><div className="topic-grid">{topics.map(t=><button type="button" className={"topic topic-button " + (selected === t.id ? "selected" : "")} key={t.id} onClick={() => chooseTopic(t.id)}><div className="topic-icon">{t.icon}</div><h3>{t.title}</h3><p>{t.desc}</p><div className="topic-foot"><span>{t.id} · {t.exercises.length} exercicis</span><b>Obre el mòdul ↗</b></div></button>)}</div></section>
      <section className="lesson-section" id="lesson"><div className="lesson-heading"><span className="eyebrow">Mòdul {topic.id}</span><h2>{topic.icon} {topic.title}</h2><p>{topic.desc}</p></div><div className="tabs"><button className={tab === "teoria" ? "active" : ""} onClick={() => setTab("teoria")}>Presentació (20 min)</button><button className={tab === "exercicis" ? "active" : ""} onClick={() => setTab("exercicis")}>Exercicis ({topic.exercises.length})</button><button className={tab === "pla" ? "active" : ""} onClick={() => setTab("pla")}>Objectius</button></div>
      {tab === "teoria" && <><Presentation topic={topic} /><div className="lesson-grid theory-reference"><article className="lesson-card"><h3>Resum de teoria</h3>{topic.theory.map((p,i)=><p className="theory-point" key={i}><span>{i+1}</span>{p}</p>)}</article><aside className="lesson-card formula-card"><h3>Fórmules i relacions</h3>{topic.formulas.map((f,i)=><div className="formula-line" key={i}>{f}</div>)}<p className="small-note">Revisa sempre les unitats i les condicions d'aplicació de cada expressió.</p></aside></div></>}
      {tab === "exercicis" && <div className="exercise-list">{topic.exercises.map((e,i)=>{const key=topic.id+"-"+i;const chosen=answers[key];return <article className="exercise-card" key={key}><div className="exercise-meta"><span>Pregunta {i+1}</span><span className="difficulty">{e.difficulty}</span></div><h3>{e.question}</h3><div className="options">{e.options.map((o,j)=><button key={j} className={"option " + (chosen === j ? "chosen" : "") + (showResults && j === e.answer ? " correct" : "") + (showResults && chosen === j && chosen !== e.answer ? " incorrect" : "")} onClick={() => {setAnswers({...answers,[key]:j});setShowResults(false);}}><span>{String.fromCharCode(65+j)}</span>{o}</button>)}</div>{showResults && <div className={"explanation " + (chosen === e.answer ? "good" : "bad")}><b>{chosen === e.answer ? "Correcte!" : "Revisa la resposta."}</b> {e.explanation}</div>}</article>})}<div className="quiz-actions"><button className="primary" onClick={() => setShowResults(true)}>Corregir respostes</button><button className="secondary-button" onClick={() => {setAnswers({});setShowResults(false);}}>Reiniciar mòdul</button></div></div>}
      {tab === "pla" && <article className="lesson-card objectives"><h3>En acabar aquest mòdul, has de saber…</h3><ul>{topic.objectives.map((o,i)=><li key={i}>{o}</li>)}</ul><button className="primary" onClick={() => setTab("exercicis")}>Practica ara →</button></article>}
      </section>
      <section className="content-section plan-section" id="pla"><div className="section-head"><div><h2>El teu pla setmanal</h2><p>Una sessió cada setmana, amb temps per completar el temari i repassar.</p></div><span className="muted-note">Gener – juny 2027</span></div><div className="plan-grid">{studyPlan.map(([date,title],i)=><div className="plan-item" key={date}><span className="plan-date">{date}</span><span className="plan-number">{String(i+1).padStart(2,"0")}</span><span>{title}</span></div>)}</div><p className="small-note">Calendari orientatiu. Ajusta les dates a la convocatòria oficial de les PAU.</p></section>
      <section className="bottom-cta"><div><h2>Practica, corregeix i torna-ho a intentar.</h2><p>Les preguntes inclouen la resposta correcta i una explicació del raonament.</p></div><a className="primary" href="#lesson" onClick={() => setTab("exercicis")}>Anar als exercicis →</a></section>
    </main><footer className="shell"><span>© 2026 Química PAU Catalunya</span><span>Material didàctic original de preparació.</span></footer>
  </>;
}
