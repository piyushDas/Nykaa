import React, { useEffect, useState, useContext } from 'react'
import {
  checkMobileDevice
} from './utils'
import { AppState, AppContext } from './context'
import MobileShell from './Containers/Mobile'
import DesktopShell from './Containers/Desktop'
import './App.css'

const AppView = () => {
  const [isMobileDevice, updateMobileDeviceFlag] = useState(false)
  const {
    fetchSearchResults,
    pageData
  } = useContext(AppContext)

  useEffect(() => {
    updateMobileDeviceFlag(checkMobileDevice())
  }, [])

  useEffect(() => {
    fetchSearchResults(pageData.pageSize, pageData.pageNumber)
  }, [])

  let pageView
  if (isMobileDevice) {
    pageView = (
      <>
        <MobileShell />
      </>
    )
  } else {
    pageView = (
      <>
        <DesktopShell />
      </>
    )
  }

  return (
    <div className="App">
      {pageView}
    </div>
  )
}

const App = () => (
  <AppState>
    <AppView />
  </AppState>
)

export default App
