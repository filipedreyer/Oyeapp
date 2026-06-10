import { Navigate, useLocation } from 'react-router-dom'

export default function RequireClient({ children }) {
  const location = useLocation()
  const isAuth = localStorage.getItem('oye_client_auth') === 'true'

  if (!isAuth) {
    return <Navigate to="/cliente/login" state={{ from: location }} replace />
  }

  return children
}
