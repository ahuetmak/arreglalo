export default function Gracias() {
  return (
    <main className="container">
      <div className="card">
        <span className="badge">Entrega</span>
        <h1 className="h1">¡Listo! ✅</h1>
        <p className="p">Tu guía está aquí:</p>

        <div className="btnRow">
          <a className="btn" href="https://gamma.app/docs/Optimizacion-de-Precios-4ieanfwuoytlpbf" target="_blank" rel="noopener noreferrer">
            Abrir mi guía (Gamma)
          </a>
          <a className="btn secondary" href="/diagnostico">Volver</a>
        </div>

        <p className="small" style={ marginTop: 16 }>
          Stripe Success URL: <code>https://TU-DOMINIO.vercel.app/gracias</code>
        </p>
      </div>
    </main>
  );
}
