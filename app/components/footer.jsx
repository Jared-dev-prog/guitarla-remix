import Navegacion from '~/components/navegacion'


const Footer = () => {
  return (
    <div className='footer'>
      <div className='contenido contenedor'>
        <Navegacion />

        <p className='copyright'>&copy; Todos los derechos reservados {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer
