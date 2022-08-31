import {
  Link,
  Navigate,
  Outlet,
  Route,
  Routes,
  useParams,
} from 'react-router-dom'

import PropertyOverviewPage from './pages/PropertyOverviewPage'
import PropertyListingPage from './pages/PropertyListingPage'

const PropertyPageContainer = () => {
  return (
    <div>
      <p>property layout</p>
      <Outlet />
    </div>
  )
}

const PropertyDetail = () => {
  return (
    <div>
      <p>property detail</p>
    </div>
  )
}

function PropertyRoutes() {
  const params = useParams()

  console.log('params', params)

  return (
    <Route path="/property" element={<PropertyPageContainer />}>
      <ul>
        <li>
          <Link to={`/property/${params.id}`}>Overview</Link>
        </li>
        <li>
          <Link to={`/property/${params.id}/listing`}>Listing</Link>
        </li>
      </ul>
      <Routes>
        <Route
          index
          element={
            <div>
              <p>invalid link (property id is missing)</p>
            </div>
          }
        />
        <Route
          page="/:id"
          element={<Navigate to={`/property/${params.id}/overview`} />}
        />
        <Route path="/:id/overview" element={<PropertyOverviewPage />} />
        <Route path="/:id/listing" element={<PropertyListingPage />} />
      </Routes>
    </Route>
  )
}

export default PropertyRoutes
