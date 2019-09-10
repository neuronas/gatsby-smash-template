     



W3SCHOOLS


<!DOCTYPE html>
<html>
<head>
<style>
div#wodry {

  border: 1px solid black;


}

.flipping {
  position: relative;
  transform-style: preserve-3d;
  -webkit-transform-origin-x: 50%;
}

div#wodry .flipping div {
  width: 100px;
  height: 100px;
  background-color: yellow;
  display: inline-block;
}

.flipping div {
  width: 300px;
  height: 100px;
  background-color: yellow;
  display: inline-block;
}

.front, .back {
  backface-visibility: hidden;
  display: inline-block;
}

.front {
  position: absolute;
}
.back {
  position: relative;
}
</style>
</head>
<body>

<h1>The rotateY() Method</h1>
<p>The rotateY() method rotates an element around its Y-axis at a given degree.</p>

<div id="wodry" onclick="myFunction()">
  <div class="flipping">
    <div class="front">
    FRONT
    </div>

    <div class="back">
    BACK
    </div>
  </div>
</div>


<div class="flipping">
  <div class="front">
    FRONTT
  </div>

  <div class="back">
    BACKK
  </div>
</div>
  
  
<p><b>Note:</b> Internet Explorer 9 (and earlier versions) does not support the rotateY() method.</p>

<script>
var count = 0

setInterval(function() {
  myFunction()
}, 4000)

function myFunction() {
  count++
  var p = document.querySelector("p")
  //p.innerHTML = count.toString()
  
  

  
  
  var flippingBase = document.querySelector("body").children[3]
  //console.log("aa", flippingBase)
  
  newElem = flippingBase.cloneNode(true)
  
  var wodry = document.querySelector("#wodry")
  
  document.querySelector("#wodry").removeChild(wodry.firstElementChild)
  document.querySelector("#wodry").appendChild(newElem)
  
  //wodry.createElement(flippingBase)
  //wodry.replaceChild(flipping, wodryFlipping)


  var flipping = wodry.firstElementChild
  var front = flipping.firstElementChild
  var back = flipping.lastElementChild
  
  //back.innerHTML = "prueba"
  
  setTimeout(() => {
  
  
  front.style.transform = "translate3d(0px, 0px, 0px)"
  back.style.transform = "translate3d(0px, 0px, 0px) rotateX(180deg)"
  
  flipping.style.transform = "rotateX(180deg)"
  flipping.style.transition = "all 3000ms ease 0s"
  //flipping.style.display = "inline"
  
  },0)
  

  

  
  // document.getElementById("back").innerHTML = x.innerHTML;
}
</script>

</body>
</html>











                  <div className="intro-lead-in wow bounceInDown" data-wow-delay="0.5s">We Can Help You <span className="wodry">Create|Design|Profit</span></div>













          <div className="backstretch" style={{
            // left: `0px`, 
            // top: `0px`,
            // overflow: `hidden`,
            // margin: `0px`,
            // padding: `0px`,
            // zIndex: `-999998`,
            // position: `absolute`,
            // width: `320px`,
            // height: `455px`
          }}>
            {/*<BackgroundSlideshow images={[ bg1Img, bg2Img, bg3Img, bg4Img, bg5Img ]} />*/}
          </div>



















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

  // console.log("GGGGGGGG", data)

  const [images, setImages] = useState(data.allFile.edges)
  const [currentIndex, setCurrentIndex] = useState(0)
  // console.log("GGGGGGGG-222", images)

  const goToNextSlide = () => {
  console.log("GGGGGGGG-333", currentIndex, images.length - 1)
    if (currentIndex === images.length - 1) {
      return setCurrentIndex(0)
    }
    setCurrentIndex(currentIndex+1)
  };

  // const isActive = currentIndex === i;
  setTimeout(goToNextSlide, 5000);


  return (
    <div
      className="backstretch"
      style={{
        // zIndex: `-1000`,
        height: `100vh`,
        position: `absolute`,
        // left: `0`,
        // right: `0`,
        // top: `0`,
        zIndex: `-999999`,
        width: `1099.5px`,
        height: `733px`,

      }}
    >
      {
        images.map((image, i) => (
          <Img
            fluid={image.node.childImageSharp.fluid}
            imgStyle={{
              position: 'absolute',
              // margin: `0px`,
              // padding: `0px`,
              // border: `none`,
              // maxHeight: `none`,
              // maxWidth: `none`,
              zIndex: `-999998`,
              // width: `1099.5px`,
              // height: `733px`,
              // left: `-106.75px`,
              // top: `0px`
            }}
            style={{
              position: 'absolute',
              // top: '0',
              // left: '0',
              // right: '0',
              // height: '100vh',

            transition: `opacity 3s ease-in-out`,
            opacity: `${currentIndex === i ? '1' : '0'}`,

              // position: `absolute`,
              // margin: `0px`,
              // padding: `0px`,
              // border: `none`,
              // maxHeight: `none`,
              // maxWidth: `none`,
              zIndex: `-999998`,
              // width: `1099.5px`,
              // height: `733px`,
              // left: `-106.75px`,
              // top: `0px`
              width: `1099.5px`,
              height: `733px`,
            }}
          />
        ))
      }
    </div>
  );
}


export default SlideShow
  // <img style="position: absolute; margin: 0px; padding: 0px; border: none; max-height: none; max-width: none; z-index: -999999; width: 1102.95px; height: 733px; left: -108.473px; top: 0px;" src="assets/img/bg/bg1.jpg">