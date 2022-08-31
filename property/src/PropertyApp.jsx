import { Link } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import PropertyRoutes from './PropertyRoutes'

function PropertyApp() {
  return (
    <div>
      <h1>Property App</h1>
      <h2>
        base route: <code>/property</code>
      </h2>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/">property list</Link>
          </li>
          <li>
            <Link to="/1">properties/1</Link>
          </li>
          <li>
            <Link to="/1/overview">properties/1/overview</Link>
          </li>
          <li>
            <Link to="/1/listing">properties/1/listing</Link>
          </li>
          <li>
            <Link to="/1/listing/create">properties/1/listing/create</Link>
          </li>
        </ul>
        <PropertyRoutes />
      </BrowserRouter>
    </div>
  )
}

export default PropertyApp
