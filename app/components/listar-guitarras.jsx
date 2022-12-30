import Guitarra from '~/components/guitarra'

const ListarGuitarras = ({guitarras}) => {
  return (
    <>
      {guitarras?.length && (
        <div className='guitarras-grid'>
          {guitarras.map(guitarra => (
            <Guitarra 
              key={guitarra?.attributes.url}
              guitarra={guitarra?.attributes}
            />
          ))}
        </div>
      )}
    </>
  )
}

export default ListarGuitarras
