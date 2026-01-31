import Link from "next/link";

export default function Home() {
  return (
    <main className="container">
      <div className="card">
        <span className="badge">Inicio</span>
        <h1 className="h1">ARREGLALO</h1>
        <p className="p">Este proyecto redirige / → /diagnostico. Entra aquí:</p>
        <div className="btnRow">
          <Link className="btn" href="/diagnostico">Ir a /diagnostico</Link>
        </div>
        <p className="small" style={{ marginTop: 14 }}>
          Nota: la redirección está en vercel.json.
        </p>
      </div>
    </main>
  );
}
