import { Route, Routes } from 'react-router-dom'

function ListingRoutes() {
  return (
    <Routes>
      <Route index element={<>Listing management page</>} />
      <Route path="/create" element={<>Listing create page</>} />
    </Routes>
  )
}

export default ListingRoutes
