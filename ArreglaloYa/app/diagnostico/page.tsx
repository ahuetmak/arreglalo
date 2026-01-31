"use client";

import Script from "next/script";

const BUY_ID = "buy_btn_1SvazoH1l1YHtt6IHmK3msf0";
const PK = "pk_live_51QogS6H1l1YHtt6IrtV86uyJuy5KNleKatfoLH2Y1yehTQtCn1Czix3Rl6hETrmVG1VdM8E2F8EDGGJCb2IOKINh00dHZbbkYJ";

export default function Diagnostico() {
  return (
    <main className="container">
      <div className="card">
        <span className="badge">Diagnóstico</span>
        <h1 className="h1">Optimización de Precios</h1>
        <p className="p">Compra y recibe la guía al instante (entrega en /gracias).</p>

        <Script src="https://js.stripe.com/v3/buy-button.js" strategy="afterInteractive" />

        <div style={{ marginTop: 12 }} suppressHydrationWarning>
          <stripe-buy-button buy-button-id={{BUY_ID}} publishable-key={{PK}}></stripe-buy-button>
        </div>

        <div className="btnRow" style={{ marginTop: 18 }}>
          <a className="btn secondary" href="/gracias">Ver entrega</a>
        </div>

        <p className="small" style={{ marginTop: 16 }}>
          En Stripe configura Success URL → <b>/gracias</b>.
        </p>
      </div>
    </main>
  );
}
