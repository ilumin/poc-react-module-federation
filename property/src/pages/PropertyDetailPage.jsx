import { Link, Navigate, Route, Routes, useParams } from 'react-router-dom'

import PropertyOverviewPage from './PropertyOverviewPage'
import PropertyListingPage from './PropertyListingPage'

function PropertyDetailPage() {
  const { propertyId } = useParams()

  return (
    <div>
      <h3>
        <span>
          Render <code>PropertyDetailPage</code>{' '}
        </span>
        (Property ID = <code>{propertyId}</code>)
      </h3>
      <ul>
        <li>
          <Link to={`/properties/${propertyId}/overview`}>overview</Link>
          <br />
          Route: <code>{`/properties/${propertyId}/overview`}</code>
        </li>
        <li>
          <Link to={`/properties/${propertyId}/listing`}>
            listing management
          </Link>
          <br />
          Route: <code>{`/properties/${propertyId}/listing`}</code>
        </li>
        <li>
          <Link to={`/properties/${propertyId}/listing/create`}>
            listing management / create
          </Link>
          <br />
          Route: <code>{`/properties/${propertyId}/listing/create`}</code>
        </li>
      </ul>
      <Routes>
        <Route index element={<Navigate to="overview" />} />
        <Route path="/overview" element={<PropertyOverviewPage />} />
        <Route path="/listing/*" element={<PropertyListingPage />} />
      </Routes>
    </div>
  )
}

export default PropertyDetailPage
