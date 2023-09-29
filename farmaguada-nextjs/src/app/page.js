
import Header from "./components/Header"
import Nav from "./components/Nav"
import Carrusel from "./components/Carrusel"
import Slide from "./components/Slide"
import Boletin from "./components/Boletin"
import boletinOfertas from "./img/boletinOfertas.png"
import boletinOfertaOnline from "./img/OfertaOnline.png"
import boletinOsidea from "./img/boletin-osidea.png"
import AprovechaOfertas from "./components/AprovechaOfertas"
import SectionExtra from "./components/SectionExtra"
import SectionOnline from "./components/SectionOnline"
import ArticulosInteresantes from "./components/ArticulosInteresantes"
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
      nombre: "Keyboard",
      descripcion: "",
    },
    {
      id: 6,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/10855_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 7,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/942596_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 8,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/950211_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 9,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/994006_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 10,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1136992_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 11,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1153862_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 12,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/63541_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    }
  ];

  const slide2 = [
    {
      id: 1,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1182447_A_168_AL.jpg",
      nombre: "NEUTEK",
      descripcion: " Monitor Neutek de Presión Sanguínea Automático de Muñeca, 1 pz.",
    },
    {
      id: 2,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/140481_A_168_AL.jpg",
      nombre: "Staquis",
      descripcion: " Staquis 2% Ungüento, 30 gr.",
    },
    {
      id: 3,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/31704_A_168_AL.jpg",
      nombre: "MICROBIOT",
      descripcion: " Microbiot Fit 180 mg, 30 Cápsulas.",
    },
    {
      id: 4,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/31682_A_168_AL.jpg",
      nombre: "BACFIL",
      descripcion: " Bacfil 6 gr, 30 Sobres.",
    },
    {
      id: 5,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/61875_A_168_AL.jpg",
      nombre: "Keyboard",
      descripcion: "",
    },
    {
      id: 6,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/951722_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 7,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/942596_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 8,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/950211_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 9,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/994006_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 10,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1136992_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 11,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1153862_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 12,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/63541_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    }
  ];

  const slide3 = [
    {
      id: 1,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/861243_A_168_AL.jpg",
      nombre: "NEUTEK",
      descripcion: " Monitor Neutek de Presión Sanguínea Automático de Muñeca, 1 pz.",
    },
    {
      id: 2,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1144472_A_168_AL.jpg",
      nombre: "Staquis",
      descripcion: " Staquis 2% Ungüento, 30 gr.",
    },
    {
      id: 3,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/600920_A_168_AL.jpg",
      nombre: "MICROBIOT",
      descripcion: " Microbiot Fit 180 mg, 30 Cápsulas.",
    },
    {
      id: 4,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1368796_A_168_AL.jpg",
      nombre: "BACFIL",
      descripcion: " Bacfil 6 gr, 30 Sobres.",
    },
    {
      id: 5,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1368800_A_168_AL.jpg",
      nombre: "Keyboard",
      descripcion: "",
    },
    {
      id: 6,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1375997_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 7,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/942596_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 8,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/950211_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 9,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/994006_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 10,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1136992_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 11,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/1153862_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
    },
    {
      id: 12,
      img: "https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/products/63541_A_168_AL.jpg",
      nombre: "Gaming",
      descripcion: "",
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
      <Slide imagenes={slide1} />
      <AprovechaOfertas />
      <SectionExtra />
      <Slide imagenes={slide2} />
      <SectionOnline />
      <ArticulosInteresantes />
      <Slide imagenes={slide3} />
      <Footer />
    </>
  )
}
