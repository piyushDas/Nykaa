import Axios from 'axios'
/*

*/
export const appAxiosInstance = (axiosUrl, method, data, headers) => {
  let instance
  const config = {
    timeout: 120000,
    headers
  }
  if (method.toLowerCase() === 'get') {
    instance = Axios.get(axiosUrl, {
      params: data,
      headers: config.headers
    })
  } else if (method.toLowerCase() === 'post') {
    instance = Axios.post(axiosUrl, data, config)
  }
  return instance
}


/*
  Checks useragent of the browser used to determine
  whether its a mobile device or desktop
*/
export const checkMobileDevice = () => {
  let returnVal = false
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|mobile/i.test(navigator.userAgent)) {
    returnVal = true
  }
  return returnVal
}