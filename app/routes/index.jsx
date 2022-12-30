import { useLoaderData } from '@remix-run/react'
import { getGuitarras } from '~/models/guitarras.server'
import { getPosts } from '~/models/posts.server'
import { getCurso } from '~/models/curso.server'
import ListarGuitarras from '~/components/listar-guitarras'
import ListarPosts from '~/components/listar-posts'
import Curso from '~/components/curso'
import stylesGuitarras from '~/styles/guitarras.css'
import stylesPosts from '~/styles/blog.css'
import stylesCurso from '~/styles/curso.css'

export function meta() {

  return {
    title: 'GuitarLA - Inicio', 
    description: 'Tienda de venta de guitarras, lectura de posts y venta de curso'
  }
}

export function links() {

  return [
    {
      rel: 'stylesheet', 
      href: stylesGuitarras
    },
    {
      rel: 'stylesheet',
      href: stylesPosts
    },
    {
      rel: 'stylesheet',
      href: stylesCurso
    }
  ]
}

export async function loader() {
  const [ guitarras, posts, curso ] = await Promise.all([
    getGuitarras(), 
    getPosts(), 
    getCurso()
  ])

  return {
    guitarras: guitarras.data, 
    posts: posts.data,
    curso: curso.data
  }
}

const Index = () => {
  const { guitarras, posts, curso } = useLoaderData()

  return (
    <>
      <main className='contenedor'>
        <h1 className='heading m-0'>Nuestra colleción </h1>

        <ListarGuitarras 
          guitarras={guitarras}
        />
      </main>  

      <Curso 
        curso={curso?.attributes}
      />

      <section className='contenedor'>
        <h2 className='heading'>Blog</h2>

        <ListarPosts 
          posts={posts}
        />
      </section>
    </>


  )
}

export default Index
