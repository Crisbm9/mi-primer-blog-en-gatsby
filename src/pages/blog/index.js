import * as React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../../components/layout'
export const query = graphql`
query {
  allMdx {
    nodes {
      frontmatter {
        title
        date
        slug
      }
      id
    }
  }
}`
const Blog= ({data})=>{

  return (
    <Layout pageTitle='Blog'>
    
    {data.allMdx.nodes.map(node=>(
      <div>
      <p>{node.frontmatter.date}</p>
      <h2>{node.frontmatter.title}</h2>
      <button className="btn btn-primary">
      <Link to={`/blog/${node.frontmatter.slug}` } className='letraLink'>Leer más</Link>
      </button>
      <hr/>
      </div>
    ))}
    
    
  </Layout>
  )
}
export default Blog
export const Head=()=> <title>Blog de Cris</title>
