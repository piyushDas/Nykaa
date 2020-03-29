import React from 'react'
import * as _ from 'underscore'

const LoadMore = ({
  loaderFunc,
  pageSize,
  pageNumber,
  lastPage,
  scrollUpdate
}) => {
  const fetchMore = () => {
    if (pageNumber + 1 <= lastPage) {
      const el = document.getElementById("search-input")
      if (el.value) {
        loaderFunc(pageSize, pageNumber + 1, el.value)
      } else {
        loaderFunc(pageSize, pageNumber + 1)
      }
    } else {
      console.log("Last page crossed")
    }
  }
  const scroll = _.debounce(() =>  {
    if (window.document.documentElement.scrollTop > 500) {
      scrollUpdate(true)
    } else {
      scrollUpdate(false)
    }
    if ((window.innerHeight + window.pageYOffset ) >= document.body.offsetHeight) {
      fetchMore()
    }
  }, 500)
  window.onscroll = scroll
  return (
    <></>
  )
}

export default LoadMore