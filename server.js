const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const port = 3012
let dataSet = require('./src/models/products-dataset.json')
dataSet = [...dataSet, ...dataSet]
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/*
  Versioned API - to fetch search results for list page
*/
app.get('/nykaa_v1/fetchAllproducts', (req, res) => {
  let {pageSize, pageNumber, searchStr} = req.query
  pageSize = parseInt(pageSize)
  pageNumber = parseInt(pageNumber)
  let index = 0
  if (pageNumber > 0) {
    index = (pageNumber * pageSize)
  }
  let lastPageNumber = Math.ceil(dataSet.length/pageSize) - 1
  let paginatedData = dataSet.slice(index, index + pageSize)
  
  if (searchStr) {
    paginatedData = dataSet.filter(el => {
      return el.title.toLowerCase().indexOf(searchStr.toLowerCase()) > -1
    })
    const len = paginatedData.length ? paginatedData.length : 0
    lastPageNumber = Math.ceil(len/pageSize) - 1
  }

  const updatedResponse = {
    type: 'available',
    paginatedData,
    currentPage: pageNumber,
    lastPageNumber
  }

  if (!updatedResponse.paginatedData || !updatedResponse.paginatedData.length) {
    updatedResponse.type = 'itemsUnavailable'
  }
  console.log(updatedResponse)
  res.json(updatedResponse)
})

app.listen(port, () => console.log(`NykaaFashion app listening on port ${port}!`))