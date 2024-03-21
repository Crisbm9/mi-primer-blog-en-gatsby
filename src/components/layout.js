import * as React from 'react'
import { Link } from 'gatsby'
import{container, heading, navLinks, navLinkItem, navLinkText
} from "./layout.module.css"


const Layout = ({ pageTitle, children }) => {
  return (
  <div className={container}>
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