import "./App.css";
import Header from "./components/Header";
import PrimerBanner from "./components/PrimerBanner";
import Tarifas from "./components/Tarifas";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header
        content={{
          logo: (
            <h1 className="zombie-title text-cyan-900 text-5xl">Zombi Phone</h1>
          ),
          menu: (
            <ul className="flex gap-4 list-none text-cyan-50">
              <li className="cursor-pointer">
                <a href="">Móvil</a>
              </li>
              <li className="cursor-pointer">
                <a href="">Fibra y fijo</a>
              </li>
              <li className="cursor-pointer">
                <a href="">Fibra y móvil</a>
              </li>
              <li className="cursor-pointer">
                <a href="">Merchandising</a>
              </li>
            </ul>
          ),
          contact: (
            <div className="flex flex-col font-bold items-center text-2xl">
              <span>CONTÁCTANOS</span>
              <p>666 777 888</p>
            </div>
          ),
        }}
      />

      <PrimerBanner
        imageUrl="/src/images/banner-principal-1.webp"
        altText="Register"
      />
      <Tarifas
        content={{
          titulo: (
            <div className="flex flex-col items-center text-3xl">
              <h1 className="zombi-h1 text-cyan-900">
                Nuestro ZOMBI no sólo come cerebros,
              </h1>
              <h1 className="zombi-h1 text-cyan-900">
                también devora tarifas competitivas!
              </h1>
            </div>
          ),

          precios: (
            <div className="flex justify-center p-6 gap-8 bg">
              <div className="flex items-center flex-col gap-2 border border-black shadow-xl rounded-2xl p-4 bg-slate-100">
                <span className="font-bold text-2xl">LÍNEA MÓVIL</span>
                <span>LLAMADAS ILIMITADAS</span>
                <span className="font-bold text-2xl border border-black rounded p-4">
                  20GB
                </span>
                <div className="flex flex-col items-center border border-black rounded p-4 bg-lime-500">
                  <span className="font-bold text-xl">9,90€ / mes</span>
                  <span className="italic ">IVA INCL</span>
                </div>
                <span>VER DETALLES</span>
              </div>
              <div className="flex items-center flex-col gap-2 border border-black shadow-xl p-4 rounded-2xl bg-slate-100">
                <span className="font-bold text-2xl">LÍNEA MÓVIL</span>
                <span>LLAMADAS ILIMITADAS</span>
                <span className="font-bold text-2xl border border-black rounded p-4">
                  50GB
                </span>
                <div className="flex flex-col items-center border border-black rounded p-4 bg-lime-500">
                  <span className="font-bold text-xl">14,90€ / mes</span>
                  <span className="italic ">IVA INCL</span>
                </div>
                <span>VER DETALLES</span>
              </div>
              <div className="flex items-center flex-col gap-2 border border-black p-4 shadow-xl rounded-2xl bg-slate-100">
                <span className="font-bold text-2xl">FIBRA + MÓVIL</span>
                <span>LLAMADAS ILIMITADAS</span>
                <span className="font-bold text-2xl border border-black rounded p-4">
                  25GB
                </span>
                <div className="flex flex-col items-center border border-black rounded p-4 bg-lime-500">
                  <span className="font-bold text-xl">32,90€ / mes</span>
                  <span className="italic ">IVA INCL</span>
                </div>
                <span>VER DETALLES</span>
              </div>
            </div>
          ),
        }}
      />

      <Footer
        content={{
          menu: (
            <ul className="flex gap-4 list-none text-black">
              <li className="cursor-pointer">
                <a href="">CONTACTAR</a>
              </li>
              <li className="cursor-pointer">
                <a href="">AVISO LEGAL</a>
              </li>
              <li className="cursor-pointer">
                <a href="">POLÍTICAS DE COOKIES</a>
              </li>
            </ul>
          ),
        }}
      />
    </>
  );
}

export default App;
