import { Navigate, Route, Routes, useParams } from 'react-router-dom'

import ListingRoutes from './ListingRoutes'

function PropertyDetailPage() {
  const params = useParams()

  return (
    <div>
      <h3>Debug</h3>
      <pre>{JSON.stringify(params)}</pre>
      <h3>Nested</h3>
      <Routes>
        <Route index element={<Navigate to="overview" />} replace />
        <Route path="/overview" element={<>property overview</>} />
        <Route path="/listing/*" element={<ListingRoutes />} />
      </Routes>
    </div>
  )
}

export default PropertyDetailPage
