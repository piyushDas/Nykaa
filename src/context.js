import React, { useState, createContext } from 'react'
import {
  appAxiosInstance
} from './utils'

export const AppContext = createContext({
  searchResults: [],
  testVar: '',
  fetchSearchResults: () => { }
})

export const AppState = ({ children }) => {
  /*
    States used in the context
  */
  const [testVar, updateTestVar] = useState('test')
  const [searchResults, populateSearchResults] = useState([])
  const [pageData, updatePageData] = useState({pageSize: 10, pageNumber: 0})
  const [showScrollToTop, updateScrollToTop] = useState(false)
  const urlPrefix = 'http://localhost:3012'
  const fetchSearchResults = (size, pageNo, str) => {
    updateTestVar("updated")
    const apiUrl = `${urlPrefix}/nykaa_v1/fetchAllproducts`
    const params = {
      pageSize: size,
      pageNumber: pageNo,
      searchStr: str
    }
    if (!str && typeof str === 'string') {
      params.pageNumber = 0
    }
    appAxiosInstance(apiUrl, 'get', params)
      .then(res => {
        if (res &&
          res.data &&
          res.data.paginatedData
        ) {
          if (params.pageNumber > 0 && !showScrollToTop) {
            updateScrollToTop(true)
          }
          params.lastPage = res.data.lastPageNumber
          delete params.searchStr
          updatePageData(params)
          let updatedSearchListState = [...res.data.paginatedData]
          if (!str && typeof str === 'string') {
            updatedSearchListState = [...res.data.paginatedData]
          } else if (!str) {
            updatedSearchListState = [...searchResults, ...res.data.paginatedData]
          }
          populateSearchResults(updatedSearchListState)
        }
      })
      .catch(err => {
      })
  }

  return (
    <AppContext.Provider
      value={{
        searchResults,
        testVar,
        fetchSearchResults,
        pageData,
        updatePageData,
        showScrollToTop,
        updateScrollToTop
      }}
    >
      {children}
    </AppContext.Provider>
  )
}