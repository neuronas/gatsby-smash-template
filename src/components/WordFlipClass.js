// source 
// https://github.com/daynin/wodry/blob/master/src/wodry.coffee

import React, { useEffect, useState } from 'react'


class WordFlip extends React.Component {

  constructor(props) {
    super(props)

    this.node = React.createRef();
    this.span = null
    this.spanContainer = null
    this.spanBackFace = null
    this.spanFrontFace = null
    this.clonedContainer = null

    this.state = {
      first: true,
      currentPosition: 0,
      animDuration: 1000,
      intervalDuration: 4000,
      runAnimation: false
    }

    this.flipNextText = this.flipNextText.bind(this)
    this.resetAnimation = this.resetAnimation.bind(this)
    this.flipping = this.flipping.bind(this)

  }

  componentDidMount() {
    setInterval(this.flipNextText, this.state.intervalDuration);
    this.span = this.node.current
    this.spanContainer = this.span.firstChild
    this.spanFrontFace = this.spanContainer.firstChild
    this.spanBackFace = this.spanContainer.lastChild
  }

  flipNextText() {
    this.setState({ first: false })
    this.setState(prevState => ({ runAnimation: true }))

    setTimeout(() => {
      this.setState({ runAnimation: false })
    }, this.state.animDuration)

    if (this.state.currentPosition === this.props.words.length - 1) {
      this.setState({currentPosition:  0})
    } else {
      this.setState({currentPosition: this.state.currentPosition+1})
    }
  };

  resetAnimation() {
    this.spanContainer.style.transition = ""
    this.spanContainer.style.transform = ""
    this.spanBackFace.style.transform = ""
    this.spanFrontFace.style.transform = ""
  }

  flipping() {

    const idx = this.state.currentPosition
    const length = this.props.words.length - 1
    let backPosition = idx
    let frontPosition = idx === 0 ? length : idx - 1

    if (!this.state.runAnimation) {
      backPosition = frontPosition
      frontPosition = idx
    }

    // ["Create", "Design", "Profit"]
    return (
      <div>
        { this.state.first ?
          <span className="wodry-flipping">
            <span>{this.props.words[idx]}</span>
          </span>
          :
          <span className={`wodry-flipping ${this.state.runAnimation ? 'run-animation' : ''}`}>
            <span className="front-face" >{this.props.words[frontPosition]}</span>
            <span className="back-face">{this.props.words[backPosition]}</span>
          </span>
        }
      </div>
    )
  }



  // useEffect(() => {
  //   // console.log("SPAN", span)
  // })

  render () {

    return (
      <div>
        <span
          ref={this.node}
          className='wodry'
        >
          {this.flipping()}
        </span>
      </div>
    )
  }

}


export default WordFlip