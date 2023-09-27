import React from 'react'

import style from '../styles/nav.css'

const Nav = () => {
  return (
    <nav id="inicio">
        <div id="nav-principal">
            
            <img id="nav-img-home" src="https://www.farmaciasguadalajara.com/wcsstore/FGSAS/images/logo.png" alt="Logo Home" />
            <div id="nav-principal-list">
                <li id="nav-div-li-first">
                    <div class="nav-div-li">
                        <img src="https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/static_pages/landing/custom-fg/imagenes/iconphone-ns.svg"
                            alt="" />
                    </div>
                    <a class="nav-div-li-a" href="">Compra ahora 83 FARMACIA</a>
                </li>
                <li class="li2">
                    <div class="nav-div-li">
                        <img src="https://www.movil.farmaciasguadalajara.com/wcsstore/FGCAS/wcs/images/content/site/static_pages/landing/custom-fg/imagenes/iconfacturacion-ns.svg"
                            alt="" />
                    </div>
                    <a class="nav-div-li-a" href="">Facturación Electrónica</a>
                </li>
                <li class="li2">
                    <div class="nav-div-li">
                        <img src="https://www.farmaciasguadalajara.com/wcsstore/FGSAS/images/icon-location-ns.svg"
                            alt="" />
                    </div>
                    <a class="nav-div-li-a" href="">¿Cuál es tu código postal?</a>
                </li>
                <li class="li2">
                    <div class="nav-div-li">
                        <img src="https://www.farmaciasguadalajara.com/wcsstore/FGSAS/images/icon-user-ns.svg" alt="" />
                    </div>
                    <a class="nav-div-li-a" href="">Inicia sesión o regístrate</a>
                </li>
            </div>
            <a href="" id="nav-div-a">
                <img src="https://www.farmaciasguadalajara.com/wcsstore/FGSAS//images/icon-cart-desktop-header-ns.svg"
                    alt="" />
            </a>
        </div>
        <div id="nav-barSerch">
            <li class="nav-barSerch-li">Salud &#9013;</li>
            <li class="nav-barSerch-li">Bebés &#9013;</li>
            <li class="nav-barSerch-li">Vitaminas y Suplementos &#9013;</li>
            <li class="nav-barSerch-li">Departamentos &#9013;</li>
            <li class="nav-barSerch-li">Ayuda &#9013;</li>
            <input id="nav-barSerch-input" type="text" placeholder="Buscar" />
        </div>
    </nav>
  )
}

export default Nav