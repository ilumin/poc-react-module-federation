import { useParams } from 'react-router-dom'

function PropertyDetailPage() {
  const params = useParams()

  return (
    <div>
      <h3>
        Debug <code>PropertyDetailPage</code>
      </h3>
      <pre>{JSON.stringify(params)}</pre>
    </div>
  )
}

export default PropertyDetailPage
