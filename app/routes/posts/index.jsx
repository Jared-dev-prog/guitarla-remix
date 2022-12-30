import { useLoaderData } from '@remix-run/react'
import { getPosts } from '~/models/posts.server'
import ListarPosts from '~/components/listar-posts'

export function meta() {

  return {
    title: 'GuitarLA - Blog', 
    description: 'Venta de guitarras, blog de música.'
  }
}

export async function loader() {
  const posts = await getPosts()

  return posts.data
}

const Blog = () => {
  const posts = useLoaderData()

  return (

      <ListarPosts 
        posts={posts}
      />

  )
}

export default Blog
