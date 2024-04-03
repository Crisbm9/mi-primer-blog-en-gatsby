// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'


// Step 2: Define your component
const IndexPage = () => {
return (
  <Layout pageTitle='Página de inicio'>
    <p>Mi pagina de inicio</p>
    <p>Aranjuez ha cambiado de hora y hace frio</p>
    <StaticImage src='https://www.caracolviajero.com.es/blog/wp-content/uploads/2020/05/palacio-real-aranjuez.jpg' alt='exterior del palacio'/>
    <StaticImage src='../images/estanque-de-los-chinesos-de-aranjuez-2g0mtg9.jpg' alt=''/>
  </Layout>
  )
}


// You'll learn about this in the next task, just copy it for now
export const Head = () => <title>Home Page</title>


// Step 3: Export your component
export default IndexPage

