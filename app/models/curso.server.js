export const getCurso = async () => {
  const respuesta = await fetch(`${process.env.API_URL}/curso?populate=*`)
  return await respuesta.json()
}