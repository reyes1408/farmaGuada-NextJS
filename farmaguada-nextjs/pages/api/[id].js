// pages/api/productos/[id].js
import slide1 from '../slide1.json';
import slide2 from '../slide2.json';
import slide3 from '../slide3.json';
import slide4 from '../slide4.json';

export default function handler(req, res) {
  const { id } = req.query;

  if (req.method === 'GET') {
    // Determina a qué slide pertenece el ID y devuelve el slide completo
    let slide;
    switch (id) {
      case '1':
        slide = slide1;
        break;
      case '2':
        slide = slide2;
        break;
      case '3':
        slide = slide3;
        break;
      case '4':
        slide = slide4;
        break;
      default:
        res.status(404).json({ mensaje: 'Slide no encontrado' });
        return;
    }

    res.status(200).json(slide);
  } else {
    res.status(405).end(); // Método no permitido
  }
}
