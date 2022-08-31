import { Route, Routes } from 'react-router-dom'

function PropertyListingPage() {
  return (
    <div>
      <Routes>
        <Route index element={<>Listing management</>} />
        <Route path="/create" element={<>Listing create</>} />
      </Routes>
    </div>
  )
}

export default PropertyListingPage
