import React from 'react'
import NoResults from '../NoResults'
import SearchListItem from '../SearchListItem'

const SearchList = ({
  searchResults,
  componentClassName
}) => {
  let list = (
    <div>Loading results</div>
  )
  if (searchResults && searchResults.length) {
    let imgWidth = '366px'
    let imgHeight = '275px'
    if (componentClassName.indexOf("mobile-container") > -1) {
      imgWidth = '100%'
      imgHeight = 'auto'
    }
    list = (
      <>
        {
          searchResults.map((result, index) => (
            <SearchListItem
              data={result}
              imgWidth={imgWidth}
              imgHeight={imgHeight}
              key={`${index}_${result.sku}`}
            />
          ))
        }
      </>
    )
  } else {
    list = (
      <NoResults />
    )
  }

  return (
    <ul id="search-list" className={`search-list ${componentClassName ? componentClassName: ''}`}>
      {list}
    </ul>
  )
}

export default SearchList