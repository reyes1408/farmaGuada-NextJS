
import Header from "./components/Header"
import Nav from "./components/Nav"
import Carrusel from "./components/Carrusel"
import Slide from "./components/Slide"
import Boletin from "./components/Boletin"
import boletinOfertas from "./img/boletinOfertas.png"
import boletinOfertaOnline from "./img/OfertaOnline.png"
import boletinOsidea from "./img/boletin-osidea.png"
import AprovechaOfertas from "./components/AprovechaOfertas"
import Promociones from "./components/Promociones"
import SectionExtra from "./components/SectionExtra"
import SectionOnline from "./components/SectionOnline"
import ArticulosInteresantes from "./components/ArticulosInteresantes"
import Servicios from "./components/Servicios"
import Footer from "./components/Footer"

export default function Home() {

  const slide1 = [
    {
      id: 1,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1314912_A_168_AL.jpg",
      nombre: "NEUTEK",
      descripcion: " Monitor Neutek de Presión Sanguínea Automático de Muñeca, 1 pz.",
    },
    {
      id: 2,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1405004_A_168_AL.jpg",
      nombre: "Staquis",
      descripcion: " Staquis 2% Ungüento, 30 gr.",
    },
    {
      id: 3,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1406159_A_168_AL.jpg",
      nombre: "MICROBIOT",
      descripcion: " Microbiot Fit 180 mg, 30 Cápsulas.",
    },
    {
      id: 4,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1379577_A_168_AL.jpg",
      nombre: "BACFIL",
      descripcion: " Bacfil 6 gr, 30 Sobres.",
    },
    {
      id: 5,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1357522_A_168_AL.jpg",
      nombre: "PHARMALIFE",
      descripcion: " Esomeprazol 40 mg, 28 Tabletas Pharmalife.",
    },
    {
      id: 6,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/10855_A_168_AL.jpg",
      nombre: "DOLO-NEUROBIÓN",
      descripcion: " Dolo-Neurobión Forte, 30 Tabletas.",
    },
    {
      id: 7,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/942596_A_168_AL.jpg",
      nombre: "CIALIS",
      descripcion: " Cialis 20 mg, 4 Tabletas.",
    },
    {
      id: 8,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/950211_A_168_AL.jpg",
      nombre: "SINUBERASE",
      descripcion: " Sinuberase Probióticos Suspensión Basillus Clausii",
    },
    {
      id: 9,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/994006_A_168_AL.jpg",
      nombre: "Vermox Plus",
      descripcion: "  Vermox Plus 300mg/150mg, 2 Tabletas.",
    },
    {
      id: 10,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1136992_A_168_AL.jpg",
      nombre: "Cetaphil",
      descripcion: " Cetaphil Crema Hidratante, 453 gr.",
    },
    {
      id: 11,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1153862_A_168_AL.jpg",
      nombre: "Similac",
      descripcion: " Fórmula Infantil Similac Total Comfort 2 Sabor a Vainilla (Edad 1 a 3 Años), 820 gr."
    },
    {
      id: 12,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/63541_A_168_AL.jpg",
      nombre: "Aldactone",
      descripcion: " Aldactone A 25 mg, 30 Tabletas.",
    }
  ];
  const slide2 = [
    {
      id: 1,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1182447_A_168_AL.jpg",
      nombre: "Aprovasc",
      descripcion: "  Aprovasc 300mg/5mg, 28 Tabletas.",
    },
    {
      id: 2,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/140481_A_168_AL.jpg",
      nombre: "Lopid",
      descripcion: "  Lopid 600 mg, 14 Tabletas.",
    },
    {
      id: 3,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/31704_A_168_AL.jpg",
      nombre: "Ativan",
      descripcion: " Ativan 2 mg, 80 Tabletas.",
    },
    {
      id: 4,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/31682_A_168_AL.jpg",
      nombre: "Ativan",
      descripcion: " Ativan 1 mg, 80 Tabletas.",
    },
    {
      id: 5,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/61875_A_168_AL.jpg",
      nombre: "Primoteston Depot",
      descripcion: " Primoteston Depot 250 mg Solución Inyectable, 1 ml.",
    },
    {
      id: 7,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/942596_A_168_AL.jpg",
      nombre: "CIALIS",
      descripcion: " Cialis 20 mg, 4 Tabletas.",
    },
    {
      id: 8,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/950211_A_168_AL.jpg",
      nombre: "SINUBERASE",
      descripcion: " Sinuberase Probióticos Suspensión Basillus Clausii",
    },
    {
      id: 9,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/994006_A_168_AL.jpg",
      nombre: "Vermox Plus",
      descripcion: "  Vermox Plus 300mg/150mg, 2 Tabletas.",
    },
    {
      id: 10,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1136992_A_168_AL.jpg",
      nombre: "Cetaphil",
      descripcion: " Cetaphil Crema Hidratante, 453 gr.",
    },
    {
      id: 11,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1153862_A_168_AL.jpg",
      nombre: "Similac",
      descripcion: " Fórmula Infantil Similac Total Comfort 2 Sabor a Vainilla (Edad 1 a 3 Años), 820 gr."
    },
    {
      id: 12,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/63541_A_168_AL.jpg",
      nombre: "Aldactone",
      descripcion: " Aldactone A 25 mg, 30 Tabletas.",
    }
  ];
  const slide3 = [
    {
      id: 1,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/861243_A_168_AL.jpg",
      nombre: "Alka-Seltzer",
      descripcion: " Alka-Seltzer Lima-Limón, 12 Tabletas Efervescentes.",
    },
    {
      id: 2,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1144472_A_168_AL.jpg",
      nombre: "Alka-Seltzer",
      descripcion: " Alka-Seltzer Lima-Limón, 12 Tabletas Efervescentes.",
    },
    {
      id: 3,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/600920_A_168_AL.jpg",
      nombre: "Alka-Seltzer",
      descripcion: " Alka-Seltzer Lima-Limón, 12 Tabletas Efervescentes.",
    },
    {
      id: 4,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1368796_A_168_AL.jpg",
      nombre: "Iberogast",
      descripcion: "Iberogast Solución Oral, 20 ml.",
    },
    {
      id: 5,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1368800_A_168_AL.jpg",
      nombre: "Iberogast",
      descripcion: "Iberogast Solución Oral, 50 ml.",
    },
    {
      id: 7,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/942596_A_168_AL.jpg",
      nombre: "CIALIS",
      descripcion: " Cialis 20 mg, 4 Tabletas.",
    },
    {
      id: 8,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/950211_A_168_AL.jpg",
      nombre: "SINUBERASE",
      descripcion: " Sinuberase Probióticos Suspensión Basillus Clausii",
    },
    {
      id: 9,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/994006_A_168_AL.jpg",
      nombre: "Vermox Plus",
      descripcion: "  Vermox Plus 300mg/150mg, 2 Tabletas.",
    },
    {
      id: 10,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1136992_A_168_AL.jpg",
      nombre: "Cetaphil",
      descripcion: " Cetaphil Crema Hidratante, 453 gr.",
    },
    {
      id: 11,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1153862_A_168_AL.jpg",
      nombre: "Similac",
      descripcion: " Fórmula Infantil Similac Total Comfort 2 Sabor a Vainilla (Edad 1 a 3 Años), 820 gr."
    },
    {
      id: 12,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/63541_A_168_AL.jpg",
      nombre: "Aldactone",
      descripcion: " Aldactone A 25 mg, 30 Tabletas.",
    },
  ];
  const slide4 = [
    {
      id: 1,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1358642_S_168_F.jpg",
      nombre: "Falcon",
      descripcion: "  Proteína en Polvo Falcon Performance Sabor Golden Vanilla, 42 gr.",
    },
    {
      id: 2,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1358634_S_168_F.jpg",
      nombre: "Falcon",
      descripcion: " Proteína en Polvo Falcon Performance Sabor Golden Vanilla, 42 gr.",
    },
    {
      id: 3,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1254812_A_168_AL.jpg",
      nombre: "Falcon",
      descripcion: " Proteína en Polvo Falcon Sabor Vainilla, 510 gr.",
    },
    {
      id: 4,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/52221_A_168_AL.jpg",
      nombre: "AKABAR",
      descripcion: " Akabar 200 mg, 16 Cápsulas.",
    },
    {
      id: 5,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/52213_A_168_AL.jpg",
      nombre: "AKABAR",
      descripcion: " Akabar Suspensión, 90 ml.",
    },
    {
      id: 6,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/941557_A_168_AL.jpg",
      nombre: "HUGGIES",
      descripcion: " Pañales para Bebé Huggies UltraConfort Unisex Etapa 2, 40 pzas"
    },
    {
      id: 7,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/947105_A_168_AL.jpg",
      nombre: "KLEENBEBE",
      descripcion: " Pañales para Bebé KleenBebé Suavelastic Etapa 4 Talla G, 40 pzas.",
    },
    {
      id: 8,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/974137_A_168_AL.jpg",
      nombre: "CHICOLASTIC",
      descripcion: " Pañal Kiddies Antifugas Talla 5 X Grande, 40 pañales.",
    },
    {
      id: 9,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1298500_A_168_AL.jpg",
      nombre: "CERAVE",
      descripcion: " CeraVe Barra Limpiadora Hidratante, 128 gr.",
    },
    {
      id: 10,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1136992_A_168_AL.jpg",
      nombre: "Cetaphil",
      descripcion: " Cetaphil Crema Hidratante, 453 gr.",
    },
    {
      id: 11,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1153862_A_168_AL.jpg",
      nombre: "Similac",
      descripcion: " Fórmula Infantil Similac Total Comfort 2 Sabor a Vainilla (Edad 1 a 3 Años), 820 gr."
    },
    {
      id: 12,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/63541_A_168_AL.jpg",
      nombre: "Aldactone",
      descripcion: " Aldactone A 25 mg, 30 Tabletas.",
    }
  ];

  return (
    <>
      <Header />
      <Nav />
      <Carrusel />
      <Boletin ruta={boletinOfertas} />
      <Boletin ruta={boletinOfertaOnline} />
      <Boletin ruta={boletinOsidea} />
      <Slide imagenes={slide1} idSlider={"Slider1"} titulo={"Productos Destacados"}/>
      <AprovechaOfertas />
      <Promociones />
      <SectionExtra />
      <Slide imagenes={slide2} idSlider={"Slider2"} titulo={"Ofertas Online"} />
      <SectionOnline />
      <Slide imagenes={slide4} idSlider={"Slider4"} titulo={"Lo mas buscado"} />
      <ArticulosInteresantes />
      <Slide imagenes={slide3} idSlider={"Slider3"} titulo={"Recomendado para Ti"} />
      <Servicios />
      <Footer />
    </>
  )
}
