import ImagenNosotros from '../../public/img/nosotros.jpg'
import Styles from '~/styles/nosotros.css'

export function meta() {

  return {
    title: 'GuitarLA - nosotros',
    description: 'Sección explicando a que nos decidamos y quienes somos'
  }
}

export function links() {

  return [
    {
      rel: 'stylesheet', 
      href: Styles
    }, 
    {
      rel: 'preload', 
      href: ImagenNosotros, 
      as: 'image'
    }
  ]
}

const Nosotros = () => {
  return (
    <main className='contenedor nosotros'>
      <h2 className='heading'>Sobre nosotros</h2>
      <div className='contenido'>
        <img src={ImagenNosotros} alt='imagen de sobre nosotros'  />

        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sapien tellus, porttitor sed nulla at, faucibus finibus leo. Suspendisse facilisis ultrices ligula sed auctor. In hac habitasse platea dictumst. Curabitur lectus lectus, ultrices sit amet consectetur quis, blandit et risus. Fusce ullamcorper sed erat sed vulputate.</p>

          <p>Mauris a lacus id justo tincidunt luctus et ut risus. Mauris euismod quam massa. Donec auctor tempus viverra. Morbi ac hendrerit purus. Phasellus sed dapibus lectus. Praesent aliquet, turpis sed efficitur ultrices, metus urna sollicitudin nunc, ac ullamcorper velit purus eu tellus.</p>
        </div>
      </div>
    </main>
  )
}

export default Nosotros
