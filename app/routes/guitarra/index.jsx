import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import ListarGuitarras from '~/components/listar-guitarras'

export function meta() {

  return {
    title: 'GuitarLA - Tienda',
    description: 'Venta de guitarras, blog de música y mucho más...'
  }
}

export async function loader() {
  const guitarras = await getGuitarras()
  return guitarras.data
}

const Tienda = () => {
  const guitarras = useLoaderData()

  return (
  <>
    <h2 className='heading'>Nuestra colección</h2>
      <ListarGuitarras 
        guitarras={guitarras}
      />
  </>

  )
}

export default Tienda
