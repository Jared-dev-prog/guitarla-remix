import { Link } from '@remix-run/react'
import Navegacion from '~/components/navegacion'
import Logo from '../../public/img/logo.svg'

const Header = () => {

  return (
    <header className='header'>
      <div className='contenedor barra'>
        <Link to='/'>
          <img className='logo' src={Logo} alt='Imagen de logo' />
        </Link>

        <Navegacion />
      </div>
    </header>
  )
}

export default Header
