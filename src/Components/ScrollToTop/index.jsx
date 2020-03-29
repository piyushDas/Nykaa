import React from 'react'
import {ReactComponent as UpArrow} from '../../icons/up.svg'

const ScrollToTop = ({
    toggler,
    visibility
}) => {
  const moveToTop = () => {
    window.scrollTo(0, 0)
    toggler(false)
  }
  let scroller
  if (visibility) {
    scroller = (
      <div className="scroll-top" onClick={moveToTop}>
        <UpArrow />
      </div>
    )
  }
  return (
    <>
      {scroller}
    </>
  )
}

export default ScrollToTop