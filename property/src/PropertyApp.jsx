import { Link, Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import PropertyRoutes from './PropertyRoutes'

function PropertyApp() {
  return (
    <div>
      <h1>Property App</h1>
      <h2>
        base route: <code>/property</code>
      </h2>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/properties">property list</Link>
          </li>
        </ul>
        <Routes>
          <Route
            index
            element={<>This route available only in development mode</>}
          />
          <Route path="/properties/*" element={<PropertyRoutes />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default PropertyApp
