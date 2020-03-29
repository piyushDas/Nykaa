import React from 'react'
import {ReactComponent as NykaaLogo} from '../../icons/nykaa_logo.svg'
import './header.css'

const Header = ({
  componentClassName,
  width
}) => {
  return (
    <div className="top-header" >
      <div className={componentClassName}>
        <NykaaLogo width={width} />
      </div>
    </div>
  )
}

export default Header