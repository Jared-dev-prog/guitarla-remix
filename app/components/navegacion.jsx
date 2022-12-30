import { useLocation, Link } from '@remix-run/react'
import carritoImg from '../../public/img/carrito.png'

const Navegacion = () => {
  const location = useLocation()

  return (
    <nav className='navegacion'>
      <Link
        to='/'
        className={location.pathname === '/' ? 'active' : ''}
      >Inicio</Link>
      <Link
        to='/nosotros'
        className={location.pathname === '/nosotros' ? 'active' : ''}
      >Nosotros</Link>
      <Link
        to='/guitarra'
        className={location.pathname === '/guitarra' ? 'active' : ''}
      >Tienda</Link>
      <Link
        to='/posts'
        className={location.pathname === '/posts' ? 'active' : ''}
      >Blog</Link>
      <Link
        to='/carrito'
        className={`${location.pathname === '/carrito' ? 'active' : ''} carrito`}
      >
        <img src={carritoImg} alt='Imagen de carrito de compras' />
      </Link>
    </nav>
  )
}

export default Navegacion
