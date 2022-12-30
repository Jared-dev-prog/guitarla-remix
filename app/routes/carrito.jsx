import { useState, useEffect } from 'react'
import { useOutletContext } from '@remix-run/react'
import { ClientOnly } from 'remix-utils'
import styles from '~/styles/carrito.css'

export function links() {

  return [
    {
      rel: 'stylesheet', 
      href: styles
    }
  ]
}

const Carrito = () => {
  const [ total, setTotal ] = useState(0)
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext()

  useEffect(() => {
    const sumaTotal = carrito.reduce((total, producto) => {
      total += (producto.cantidad * producto.precio)
      return total
    }, 0)
    setTotal(sumaTotal)
  }, [carrito])
  
  return (
    <ClientOnly fallback={'cargando...'}>
      {() => (
        <main className='contenedor'>
          <h1 className='heading'>Carrito de compras</h1>

          <div className='contenido'>
            <div className='articulos'>
              <h2>Artículos</h2>

              {carrito?.length === 0 ? 'Carrito vacío' : (
                carrito?.map(producto => (
                  <div className='producto' key={producto.id}>
                    <img src={producto.imagen} alt={`Imagen de la guitarra ${producto.nombre}`} />

                    <div>
                      <p className='nombre'>{producto.nombre}</p>
                      <p className='cantidad'>Cantidad:</p>
                      <select
                        value={producto.cantidad}
                        onChange={ e => actualizarCantidad({
                          cantidad: +e.target.value, 
                          id: producto.id
                        })}
                      >
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                      </select>
                      <p className='subtotal'>Subtotal: <span>$ {producto.cantidad * producto.precio}</span></p>
                    </div>

                    <button
                      type='button'
                      className='btn_eliminar'
                      onClick={() => eliminarGuitarra(producto.id)}
                    >x</button>
                  </div>
                ))
              )}
            </div>

            <aside className='resumen'>
              <h3>Resumen del pedido</h3>
              <p>Total a pagar: ${total}</p>
            </aside>
          </div>
        </main>
      )}
    </ClientOnly>
  )
}

export default Carrito
