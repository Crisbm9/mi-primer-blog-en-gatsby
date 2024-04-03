import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import{container, heading, navLinks, navLinkItem, navLinkText
} from "./layout.module.css"
import { StaticImage } from 'gatsby-plugin-image'


const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`query {
      site {
        siteMetadata {
          title
          description
          siteUrl
          iconUrl
        }
      }
    }
  `)

  return (
  <div className={container}>
    <header>
      <h1>{data.site.siteMetadata.title}</h1>
      <h2>{data.site.siteMetadata.descripcion}</h2>
      
      </header>
  <StaticImage src='../images/icon.png' width={100}/>
    <nav>
      <ul className={navLinks}>
        <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
        <li className={navLinkItem}><Link to="/SobreMi" className={navLinkText}>Sobre mi</Link></li>
        <li className={navLinkItem}><Link to="/blog" className={navLinkText}>Blog</Link></li>
        <li className={navLinkItem}><a href="https://github.com/Crisbm9">Github</a></li>
      </ul>
    </nav>
    <main>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
      <footer>
        <p className='footer'>&copy; cristina {new Date().getFullYear()}</p>
      </footer>
    </main>
  </div>
  )
}


export default Layout