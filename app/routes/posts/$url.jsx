import { useLoaderData } from '@remix-run/react'
import { getPost } from '~/models/posts.server'
import { formatearFecha } from '~/helpers/index'

export function meta({data}) {
  if(!data) {
    return {
      title: `GuitarLA - Entrada no encontrada`,
      description: 'Venta de guitarra, blog de música, entrada no encontrada'
    }
  }

  return {
    title: `GuitarLA - ${data.titulo}`,
    description: `Venta de guitarra, blog de música, entrada de blog ${data.titulo}`
  }
}

export async function loader({params}) {
  const { url } = params
  const post = await getPost(url)

  if(post.data.length === 0) {
    throw new Response('', {
      status: 404, 
      statusText: 'Entrada no encontrada'
    })
  }

  return post.data[0].attributes
}

const Post = () => {
  const post = useLoaderData()
  const { titulo, contenido, imagen, publishedAt, url } = post

  return (
    <article className='contenedor'>
      <div className='post'>
        <img src={imagen?.data?.attributes?.url} alt={`imagen de post ${titulo}`} />

        <div className='contenido'>
          <h3>{titulo}</h3>
          <p className='fecha'>{formatearFecha(publishedAt)}</p>
          <p className='texto'>{contenido}</p>
        </div>
      </div>
    </article>
  )
}

export default Post
