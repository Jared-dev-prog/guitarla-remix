import { Link } from '@remix-run/react'

const Guitarra = ({guitarra}) => {
  const { nombre, descripcion, imagen, precio, url } = guitarra 
  
  return (
    <div className='guitarra'>
      <img src={imagen.data.attributes.formats.medium.url} alt={`imagen de guitarra ${nombre}`} />

      <div className='contenido'>
        <h3>{nombre}</h3>
        <p className='descripcion'>{descripcion}</p>
        <p className='precio'>${precio}</p>

        <Link className='enlace' to={`/guitarra/${url}`} >Ver producto</Link>
      </div>
    </div>
  )
}

export default Guitarra
