import React from 'react'
import ReactDOM from 'react-dom'

import ListingApp from './ListingApp'

ReactDOM.render(
  <React.StrictMode>
    <ListingApp />
  </React.StrictMode>,
  document.getElementById('root')
)

module.hot.accept()
