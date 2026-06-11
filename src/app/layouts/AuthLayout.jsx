import { Link, Outlet } from 'react-router-dom'
import { LogoWordmark } from '../../components/LogoOye.jsx'

export default function AuthLayout() {
  return (
    <div className="auth-shell">
      <div className="auth-shell__back">
        <Link to="/" className="auth-shell__back-link">← Voltar ao site</Link>
      </div>
      <Outlet />
    </div>
  )
}
