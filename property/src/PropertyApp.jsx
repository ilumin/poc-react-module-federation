import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import PropertyRoutes from './PropertyRoutes'

function PropertyApp() {
  return (
    <div>
      <h1>Property App</h1>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to="/property/123" />} />
          <PropertyRoutes />
          <Route
            path="*"
            element={
              <div>
                <h2>This is development mode</h2>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default PropertyApp
