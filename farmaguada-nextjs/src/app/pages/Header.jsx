
import React from 'react';
import logo from '../../../public/icon-favicon.ico'

const Header = () => {
  return (
    <header>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      {/* <link rel="stylesheet" href="./css/style.css" /> */}
      <link rel="icon" href={logo} type="image/x-icon" />
      <title>Farmacias Guadalajara a Domicilio</title>
    </header>
  );
};

export default Header;
