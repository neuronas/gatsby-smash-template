/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
// import "./layout.scss"

import { WOW } from 'wowjs'
// import Pace from 'pace-progressbar';
// import 'pace-progressbar/themes/blue/pace-theme-minimal.css';


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  // const methods = {
  //   componentDidMount() {
  //   }
  // }

  useEffect(() => {
    // console.log("DID")

    // Pace.start({
    //   ajax: false,
    //   document: false,
    //   eventLag: false,
    //   // extraSources: ['.progress']
    //   elements: {selectors: ['.preloader']}
    // });

    // Pace.on("done", function(){
    //   console.log("DID-2")
    //   new WOW().init();
    // });


    new WOW().init()
    
  }, [])

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          // margin: `0 auto`,
          // maxWidth: 960,
          // padding: `0px 1.0875rem 1.45rem`,
          // paddingTop: 0,
        }}
      >
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
