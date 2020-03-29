import React, { useContext} from 'react'
import { AppContext } from '../../context'
import Header from '../../Components/Header'
import Search from '../../Components/Search'
import SearchList from '../../Components/SearchList'
import LoadMore from '../../Components/LoadMore'
import ScrollToTop from '../../Components/ScrollToTop'
import './desktop.css'

const DesktopShell = () => {
  const {
    searchResults,
    fetchSearchResults,
    pageData,
    showScrollToTop,
    updateScrollToTop
  } = useContext(AppContext)

  return (
    <div className="desktop-shell">
      <Header width="80px" componentClassName="desktop-container" />
      <Search
        mobileClass="desktop-container"
        searchFunc={fetchSearchResults}
        pageSize={pageData.pageSize}
        pageNumber={pageData.pageNumber}
      />
      <SearchList searchResults={searchResults} componentClassName="desktop-container" />
      <ScrollToTop toggler={updateScrollToTop} visibility={showScrollToTop} />
      <LoadMore
        loaderFunc={fetchSearchResults}
        pageSize={pageData.pageSize}
        pageNumber={pageData.pageNumber}
        lastPage={pageData.lastPage}
        scrollUpdate={updateScrollToTop}
      />
    </div>
  )
}

export default DesktopShell