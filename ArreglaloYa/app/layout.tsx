import "../styles/globals.css";

export const metadata = {
  title: "ARREGLALO — Diagnóstico A–D",
  description: "Diagnóstico rápido + guía práctica. Pagas y recibes al instante."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
