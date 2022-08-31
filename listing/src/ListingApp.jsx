import { Link, Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import LisitngRoutes from './ListingRoutes'

const App = () => (
  <div>
    <h1>Listing App</h1>
    <BrowserRouter>
      <Routes>
        <Route path="/property/:id/listing/*" element={<LisitngRoutes />} />
        <Route
          path="*"
          element={
            <div>
              <h2>This is development mode</h2>
              <p>please click on these mock link</p>
              <ul>
                <li>
                  <Link to="/property/123/listing">listing manage</Link>
                  <br />
                  <code>LINK: /property/123/listing</code>
                </li>
                <li>
                  <Link to="/property/123/listing/create">listing create</Link>
                  <br />
                  <code>LINK: /property/123/listing/create</code>
                </li>
              </ul>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
