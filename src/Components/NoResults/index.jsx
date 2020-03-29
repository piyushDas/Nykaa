import React from 'react'
import {ReactComponent as Search} from '../../icons/search.svg'
import './noResults.css'

const NoResults = ({
  componentClassName
}) => {
  return (
    <div className="no-result-box">
      <div>
        <Search height="60px" width="60px" />
      </div>
      <div className="no-result-title">
        Sorry we are not able to find you were looking for!
      </div>
      <div className="no-result-subtitle">
        Would you like to explore other products?
      </div>
      <div>
        <button className="no-result-button" onClick={() => window.location.reload()}>Explore</button>
      </div>
    </div>
  )
}

export default NoResults