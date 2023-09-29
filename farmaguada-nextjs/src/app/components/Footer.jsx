import React from 'react'
import style from '../styles/footer.css'

const footer = () => {
  return (
    <footer id='footer-body'>
      <div className='formas-pago'>
        <div className='pago-seguro'>
          <p>Formas de pago segura:</p>
          <img src="https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/static_pages/footer/img/visa.svg" alt="" />
          <img src="https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/static_pages/footer/img/master-card.svg" alt="" />
          <img src="https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/static_pages/footer/img/amex.svg" alt="" />
          <img src="https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/static_pages/footer/img/paypal.svg" alt="" />
        </div>
        <div className='compra-segura'>
          <p>Compra segura:</p>
          <img src="https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/static_pages/footer/img/amvo.svg" alt="" />
        </div>
      </div>

      <div className='secciones-footer'>
        <div className='secciones-extremo-footer'>
          <img className='img-logo-footer' src="https://www.farmaciasguadalajara.com/wcsstore/FGSAS/images/footer/logo-fg.svg" alt="" />
          <p>Av. de las Américas #1254 - Int. UP6, P2</p>
          <p>Col. Country Club</p>
          <p>Guadalajara, Jalisco</p>
          <p>C.P. 44610</p>
          <br />
          <p>Teléfonos Contact Center:</p>
          <a href="">(33) 3818 1818</a>
          <a href="">(83) FARMACIA (32762242)</a>
        </div>
        <div className='secciones-centro-footer'>
          <p>TIENDA EN LÍNEA:</p>
          <a href="">Salud</a>
          <a href="">Alimentos</a>
          <a href="">Bebés</a>
          <a href="">Bebidas</a>
          <a href="">Higiene y Belleza</a>
          <a href="">Electrónico</a>
          <a href="">Hogar</a>
          <a href="">Juguetería</a>
        </div>
        <div className='secciones-centro-footer'>
          <p>AYUDA</p>
          <a href="">Contacto</a>
          <a href="">Preguntas Frecuentes</a>
          <a href="">Encuentra Tu SuperFarmacia</a>
          <a href="">Factura Electrónica</a>
          <a href="">Smart & Collect</a>
        </div>
        <div className='secciones-centro-footer'>
          <p>EMPRESA</p>
          <a href="">Conócenos</a>
          <a href="">Corporativo</a>
          <a href="">Relación con Inversionistas</a>
          <a href="">Bolsa de Trabajo</a>
          <a href="">Políticas de Privacidad</a>
          <a href="">Términos y Condiciones</a>
        </div>
        <div className='secciones-extremo-footer'>
          <p>BOLETÍN DE OFERTAS</p>
          <img className='img-boletin-oferta' src="https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/static_pages/boletin/images/portada_sep_15.png" alt="" />
        </div>
      </div>
      <div className='information-footer'>
        <p>Los precios y promociones mostrados en esta página online son exclusivos y estos pueden diferir de los precios y promociones de sucursal.</p>
        <p>Las imágenes mostradas son exclusivamente para uso ilustrativo.</p>
        <br />
        <p>© Farmacia Guadalajara es una empresa de Corporativo Fragua, S.A.B. de C.V. Todos los derechos reservados</p>
      </div>
      <a id="volver" href="#inicio">&#8593;</a>
    </footer>
  )
}

export default footer