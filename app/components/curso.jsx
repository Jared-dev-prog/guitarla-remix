
const Curso = ({curso}) => {
  const { titulo, contenido, imagen } = curso
  console.log(imagen.data.attributes.url)

  return (
    <section className='curso'>
      <style jsx="true">{`
        .curso {
          background-image: linear-gradient(to right, rgb(0 0 0 / 0.65), rgb(0 0 0 / .8)), url(${imagen.data.attributes.url}) 
        }
      `}</style>
      <div className='contenedor'>
        <div className='grid'>
          <div className='contenido'>
            <h3 className='heading m-0'>{titulo}</h3>
            <p className='descripcion'>{contenido}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Curso
