import type { ReactNode } from "react";
import { company } from "../data/company";

export function BrandMark() {
  // ponytail: logo dạng chữ; khi có logo PNG/WebP chính thức thì thay bằng <img> (xem README).
  return (
    <div className="brand">
      <span className="brand-logo" aria-hidden>W</span>
      <span>
        <strong className="brand-name">{company.brand}</strong>
        <span className="brand-sub">Digital Marketing</span>
      </span>
    </div>
  );
}

export function Section({ title, children }: { title?: string; children: ReactNode }) {
  return (
    <section className="section">
      {title && <h2 className="section-title">{title}</h2>}
      {children}
    </section>
  );
}

export function Steps({ steps }: { steps: { title: string; desc: string }[] }) {
  return (
    <ol className="steps">
      {steps.map((s, i) => (
        <li key={s.title} className="step">
          <span className="step-no">{i + 1}</span>
          <div>
            <div className="step-title">{s.title}</div>
            <div className="muted">{s.desc}</div>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q} className="faq-item">
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CardList({ items }: { items: { title: string; desc: string }[] }) {
  return (
    <div className="stack">
      {items.map((v) => (
        <div key={v.title} className="card">
          <div className="card-title">{v.title}</div>
          <div className="muted">{v.desc}</div>
        </div>
      ))}
    </div>
  );
}
