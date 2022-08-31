import { useParams } from 'react-router-dom'

function ListingManagementPage() {
  const params = useParams()

  return (
    <div>
      <h3>ListingManagementPage</h3>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  )
}

export default ListingManagementPage
