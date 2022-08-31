import { Link, Route, Routes } from 'react-router-dom'

import PropertyDetailPage from './pages/PropertyDetailPage'

function PropertyRoutes() {
  return (
    <Routes>
      <Route
        index
        element={
          <>
            <h3>Property List</h3>
            <ul>
              <li>
                <Link to="/properties/1">properties/1</Link>
              </li>
              <li>
                <Link to="/properties/2">properties/2</Link>
              </li>
              <li>
                <Link to="/properties/3">properties/3</Link>
              </li>
            </ul>
          </>
        }
      />
      <Route path="/:propertyId/*" element={<PropertyDetailPage />} />
      <Route path="*" element={<>Other...</>} />
    </Routes>
  )
}

export default PropertyRoutes
