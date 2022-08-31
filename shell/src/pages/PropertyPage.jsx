import { Route, Routes } from 'react-router-dom'

import PropertyDetailPage from './PropertyDetailPage'

function PropertyPage() {
  return (
    <Routes>
      <Route index element={<>Properties list</>} />
      <Route path="/:propertyId/*" element={<PropertyDetailPage />} />
      <Route path="*" element={<>Other...</>} />
    </Routes>
  )
}

export default PropertyPage
