import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function ClientLoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/cliente/dashboard'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      localStorage.setItem('oye_client_auth', 'true')
      localStorage.setItem(
        'oye_client_user',
        JSON.stringify({ name: 'Empresa Demo', email: email || 'demo@empresa.com' })
      )
      navigate(from, { replace: true })
    }, 600)
  }

  return (
    <div className="auth-layout">
      <div className="auth-panel">
        <Link to="/" className="auth-panel__logo">Oyê</Link>

        <h1 className="auth-panel__title">Entrar</h1>
        <p className="auth-panel__subtitle">Acesse a sua área de cliente.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="voce@empresa.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
            />
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="password">
              Senha
            </label>
            <input
              id="password"
              type="password"
              className="form-input"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary btn-lg auth-form-submit"
            disabled={isLoading}
          >
            {isLoading ? 'Entrando...' : 'Entrar'}
          </button>
        </form>

        <div className="auth-panel__demo-notice">
          <strong>Modo demonstração</strong>
          Use qualquer e-mail e senha para entrar. Nenhuma autenticação real é necessária.
        </div>

        <div className="auth-panel__footer">
          É provedor?{' '}
          <Link to="/provedores/candidatura">Acesse por aqui</Link>
        </div>
      </div>
    </div>
  )
}
