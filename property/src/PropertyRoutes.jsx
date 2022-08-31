import { Route, Routes } from 'react-router-dom'

import PropertyDetailPage from './pages/PropertyDetailPage'

function PropertyRoutes() {
  return (
    <Routes>
      <Route index element={<>Properties list</>} />
      <Route path="/:propertyId/*" element={<PropertyDetailPage />} />
      <Route path="*" element={<>Other...</>} />
    </Routes>
  )
}

export default PropertyRoutes
