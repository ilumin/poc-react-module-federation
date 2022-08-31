import { useParams } from 'react-router-dom'

function ListingCreatePage() {
  const params = useParams()

  return (
    <div>
      <h3>ListingCreatePage</h3>
      <pre>{JSON.stringify(params, null, 2)}</pre>
    </div>
  )
}

export default ListingCreatePage
