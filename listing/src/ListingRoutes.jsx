import { Route, Routes } from 'react-router-dom'

import ListingManagementPage from './pages/ListingManagementPage'
import ListingCreatePage from './pages/ListingCreatePage'

function LisitngRoutes() {
  return (
    <>
      <Routes>
        <Route index element={<ListingManagementPage />} />
        <Route path="/create" element={<ListingCreatePage />} />
      </Routes>
    </>
  )
}

export default LisitngRoutes
