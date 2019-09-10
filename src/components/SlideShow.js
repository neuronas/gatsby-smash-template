import React, { useState } from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Img from 'gatsby-image';


const SlideShow = (props) => {

  const data = useStaticQuery(graphql`
    query {
      allFile(filter: {relativeDirectory: { in: "bg" }}) {
        edges {
          node {
            childImageSharp {
              fluid(maxWidth: 1000) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  // const data = useStaticQuery(graphql`
  //   query HeaderImageQuery {
  //     mentorImage: imageSharp(original: {src: { regex: "/mentor/" }} ) {
  //       sizes(maxWidth: 1240 ) {
  //         ...GatsbyImageSharpSizes
  //       }
  //     }
  //     site {
  //       siteMetadata {
  //         title
  //         description
  //         siteKeywords
  //         siteUrl
  //       }
  //     }
  //   }
  // `)

  // console.log("GGGGGGGG", data)

  const [images, setImages] = useState(data.allFile.edges)
  const [currentIndex, setCurrentIndex] = useState(0)
  // console.log("GGGGGGGG-222", images)

  const goToNextSlide = () => {
  // console.log("GGGGGGGG-333", currentIndex, images.length - 1)
    if (currentIndex === images.length - 1) {
      return setCurrentIndex(0)
    }
    setCurrentIndex(currentIndex+1)
  };

  // const isActive = currentIndex === i;
  setTimeout(goToNextSlide, 5000);


  return (
    <div
      className="slider"
      style={{
        height: `100vh`,
        // position: `absolute`,
        left: `0`,
        right: `0`,
        top: `0`,
        // zIndex: `-999999`,
      }}
    >
      {
        images.map((image, i) => (
          <Img
            key={i}
            fluid={image.node.childImageSharp.fluid}
            style={{


              transition: `opacity 2s ease-in-out`,
              height: `100vh`,
              width: `100%`,
              opacity: `${currentIndex === i ? '1' : '0'}`,
              position: `absolute`,
              // top: `0`


              // position: `absolute`,
              // margin: `0px`,
              // padding: `0px`,
              // border: `none`,
              // maxHeight: `none`,
              // maxWidth: `none`,
              zIndex: `-999999`,
              // width: `1099.5px`,
              // height: `733px`,
              // left: `-106.75px`,
              // top: `0px`
            }}
            imgStyle={{
              position: 'absolute',
              // top: '0',
              // left: '0',
              // right: '0',
              // height: '100vh',

            }}
          />
        ))
      }
    </div>
  );
}




// <Img
//    title="Jennifer mentoring"
//    alt="Jennifer mentoring"
//    sizes={this.props.data.mentorImage.sizes}
//    style={{
//       position: "absolute",
//       left: 0,
//       top: 0,
//       width: "100%",
//       height: "100%"
//     }}
//  />


export default SlideShow
  // <img style="position: absolute; margin: 0px; padding: 0px; border: none; max-height: none; max-width: none; z-index: -999999; width: 1102.95px; height: 733px; left: -108.473px; top: 0px;" src="assets/img/bg/bg1.jpg">