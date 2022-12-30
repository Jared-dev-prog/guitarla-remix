import { useState, useEffect } from 'react'
import {
  Meta,
  Links,
  Outlet,
  Scripts,
  LiveReload,
  useCatch,
  Link
} from '@remix-run/react'
import styles from '~/styles/index.css'
import Header from '~/components/header'
import Footer from '~/components/footer'

export function meta() {

  return (
    {
      charset: 'UTF-8', 
      viewport: 'width=device-width, initial-scale=1.0', 
      title: 'Guitar-LA'
    }
  )
}

export function links() {

  return [
    {
      rel: 'stylesheet',
      href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
    },
    {
      rel: 'preconnect', 
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'preconnect', 
      href: 'https://fonts.gstatic.com', 
      crossOrigin: "true"
    },
    {
      rel: 'stylesheet', 
      href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap'
    },
    {
      rel: 'stylesheet', 
      href: styles
    }
  ]
}

export default function app() {

  const [ carrito, setCarrito ] = useState(typeof window !== 'undefined' ? localStorage.getItem('carrito') ? JSON.parse(localStorage.getItem('carrito')) : [] : null )

  useEffect(() => {
    localStorage.setItem('carrito', JSON.stringify(carrito))
  }, [carrito])

  const agregarCarrito = guitarra => {
    const duplicado = carrito.some(carritoState => carritoState.id === guitarra.id)

    if(duplicado) {
      const carritoActualizado = carrito.map(carritoState => {
        if(carritoState.id === guitarra.id) {
          carritoState.cantidad = guitarra.cantidad
          return carritoState
        }
      })
    setCarrito(carritoActualizado)
    } else {
      setCarrito([...carrito, guitarra])
    }
  }

  const actualizarCantidad = guitarra => {
    const nuevaCantidad = carrito.map(carritoState => {
      if(carritoState.id === guitarra.id) {
        carritoState.cantidad = guitarra.cantidad
      }
      return carritoState
    })
    setCarrito(nuevaCantidad)
  }

  const eliminarGuitarra = id => {
    const actualizar = carrito.filter(carritoState => carritoState.id !== id)
    setCarrito(actualizar)
  }

  return (
    <Document>
      <Outlet 
        context={{
          agregarCarrito, 
          carrito, 
          actualizarCantidad, 
          eliminarGuitarra
        }}
      />
    </Document>
  )
}

function Document({ children }) {

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <Header />
        {children}
        <Footer />

        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

/*** Manejo de errores ***/
export function CatchBoundary() {
  const error = useCatch()

  return (
    <Document>
      <p className='error'>{error.status} {error.statusText}</p>
      <Link 
      to='/'
      className='error-enlace'
      >Click aquí para regresar a la página de inicio</Link>
    </Document>
  )
}

export function ErrorBoundary({error}) {

  return (
    <Document>
      <p className='error'>{error.status} {error.statusText}</p>
      <Link 
      to='/'
      className='error-enlace'
      >Click aquí para regresar a la página de inicio</Link>
    </Document>
  )
}