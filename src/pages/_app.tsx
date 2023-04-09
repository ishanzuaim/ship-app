import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Archivo } from "next/font/google";

const archivo = Archivo({
  weight: "300",
  subsets: ["latin"],
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={archivo.className}>
      <Component {...pageProps} />
    </main>
  );
}
