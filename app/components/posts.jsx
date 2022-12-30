import { Link } from '@remix-run/react'
import { formatearFecha } from '~/helpers/index'

const Posts = ({post}) => {
  const { titulo, contenido, imagen, publishedAt, url } = post

  return (
    <div className='post'>
      <img src={imagen.data.attributes.formats.small.url} alt={`imagen de post ${titulo}`} />

      <div className='contenido'>
        <h3>{titulo}</h3>
        <p className='fecha'>{formatearFecha(publishedAt)}</p>
        <p className='resumen'>{contenido}</p>
        <Link 
          to={`/posts/${url}`}
          className='enlace'
        >Leer entrada</Link>
      </div>
    </div>
  )
}

export default Posts
