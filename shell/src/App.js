import { Link } from 'react-router-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import PropertyPage from './pages/PropertyPage'

const App = () => (
  <div>
    <h1>AppShell</h1>
    <BrowserRouter>
      <ul>
        <li>
          <Link to="/">main</Link>
        </li>
        <li>
          <Link to="/properties">properties</Link>
        </li>
        <li>
          <Link to="/properties/1">properties/1</Link>
        </li>
        <li>
          <Link to="/properties/1/overview">properties/1/overview</Link>
        </li>
        <li>
          <Link to="/properties/1/listing">properties/1/listing</Link>
        </li>
        <li>
          <Link to="/properties/1/listing/create">
            properties/1/listing/create
          </Link>
        </li>
      </ul>
      <Routes>
        <Route index element={<>Main</>} />
        <Route path="/properties/*" element={<PropertyPage />} />
      </Routes>
    </BrowserRouter>
  </div>
)

export default App
