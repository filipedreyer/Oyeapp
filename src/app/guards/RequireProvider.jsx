import { Navigate, useLocation } from 'react-router-dom'

export default function RequireProvider({ children }) {
  const location = useLocation()
  const isAuth = localStorage.getItem('oye_provider_auth') === 'true'

  if (!isAuth) {
    return <Navigate to="/provedores/candidatura" state={{ from: location }} replace />
  }

  return children
}
