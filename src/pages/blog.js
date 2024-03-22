import * as React from 'react'

import Layout from '../components/layout'
const Blog= function (){

  return (
    <Layout pageTitle='Blog'>
    <p>Mi blog</p>
    <p>Entradas de mi blog sobre noticias interesantes</p>
  </Layout>
  )
}
export default Blog
export const Head=()=> <title>Blog de Cris</title>
