import { useState } from 'react'
import { useLoaderData, useOutletContext } from '@remix-run/react'
import { getGuitarra } from '../../models/guitarras.server'

export function meta({data}) {
  if(!data) {
    return {
      title: 'GuitarLA - guitarra no encontrada',
      descripcion: 'Venta de guitarras, guitarra no encontrada'
    }
  }

  return {
    title: `GuitarLA - ${data.nombre}`,
    description: `Venta de guitarras, descripcion de guitarra ${data.nombre}`
  }
}

export async function loader({params}) {
  const { url } = params
  const guitarra = await getGuitarra(url)

  if(guitarra.data.length === 0) {
    throw new Response('', {
      status : 404, 
      statusText : 'Upps! guitarra no encontrada'
    })
  }

  return guitarra.data[0].attributes
}

const Guitarra = () => {
  const { agregarCarrito } = useOutletContext()
  const [ cantidad, setCantidad ] = useState(0)
  const guitarra = useLoaderData()
  const { nombre, descripcion, precio, imagen, url } = guitarra

  const handleSubmit = e => {
    e.preventDefault()

    if( cantidad <= 0) {
      alert('Seleccione una opcion correcta')
      return
    }

    const objetoGuitarra = {
      imagen: imagen.data.attributes.url, 
      id: url,
      nombre, 
      precio, 
      descripcion,
      cantidad
    }

    agregarCarrito(objetoGuitarra)
  }

  return (
    <main className='contenedor'>
      <div className='guitarra'>
        <img src={imagen.data.attributes.url} alt={`imagen de guitarra ${nombre}`} />

        <div className='contenido'>
          <h3>{nombre}</h3>
          <p className='descripcion'>{descripcion}</p>
          <p className='precio'>${precio}</p>

          <form 
            onSubmit={handleSubmit}
            className='formulario'
          >
            <label htmlFor='cantidad'>Cantidad</label>
            
            <select 
              onChange={e => setCantidad(+e.target.value)}
              id='cantidad'
            >
              <option value="0">Seleccione</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>

            <input 
              type='submit' 
              value='Agregar al carrito'
            />
          </form>
        </div>
      </div>
    </main>
  )
}

export default Guitarra
