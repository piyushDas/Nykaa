import React from 'react'
import * as _ from 'underscore'
import './search.css'

const Search = ({
  mobileClass,
  searchFunc,
  pageSize
}) => {
  const searchProducts = (val, code) => {
    console.log(val)
    if (code === 13) {
      searchFunc(pageSize, 0, val)
    } else if (code === 8 && val === '') {
      searchFunc(pageSize, 0, val)
    }
  }
  const debouncedSearch = e => {
    e.persist()
    _.debounce(searchProducts, 1000)(e.currentTarget.value, e.which)
  }
  return (
    <div className='search-input'>
      <div className={`${mobileClass ? mobileClass: ''}`}>
        <input type="text" id="search-input" placeholder="Search" onKeyUp={debouncedSearch} />
      </div>
    </div>
  )
}

export default Search