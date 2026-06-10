import { Navigate, useLocation } from 'react-router-dom'

export default function RequireOps({ children }) {
  const location = useLocation()
  const isAuth = localStorage.getItem('oye_ops_auth') === 'true'

  if (!isAuth) {
    return <Navigate to="/ops/login" state={{ from: location }} replace />
  }

  return children
}
