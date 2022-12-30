import { Outlet, useLoaderData } from '@remix-run/react'
import styles from '~/styles/blog.css'

export function links() {

  return [
    {
      rel: 'stylesheet',
      href: styles
    }
  ]
}

const Blog = () => {

  return (
    <main className='contenedor'>
      <h2 className='heading'>Blog</h2>

      <Outlet />
    </main>
  )
}

export default Blog
