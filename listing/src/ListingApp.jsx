import { Link, Route, Routes } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'

import LisitngRoutes from './ListingRoutes'

const App = () => (
  <div>
    <h1>Listing App</h1>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/properties/1/listing">listing management</Link>
        </li>
        <li>
          <Link to="/properties/1/listing/create">listing create</Link>
        </li>
      </ul>
      <Routes>
        <Route
          index
          element={<>This route available only in development mode</>}
        />
        <Route
          path="/properties/:propertyId/listing/*"
          element={<LisitngRoutes />}
        />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
