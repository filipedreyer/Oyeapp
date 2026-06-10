import { useState } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'

export default function OpsLoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/ops/dashboard'

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setIsLoading(true)

    setTimeout(() => {
      localStorage.setItem('oye_ops_auth', 'true')
      navigate(from, { replace: true })
    }, 600)
  }

  return (
    <div className="auth-layout">
      <div className="auth-panel">
        <Link to="/" className="auth-panel__logo">Oyê</Link>

        <h1 className="auth-panel__title">Operações</h1>
        <p className="auth-panel__subtitle">Acesso restrito à equipe Oyê.</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label" htmlFor="email">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              className="form-input"
              placeholder="voce@oye.com.br"
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
            {isLoading ? 'Autenticando...' : 'Entrar'}
          </button>
        </form>

        <div className="auth-panel__demo-notice">
          <strong>Modo demonstração</strong>
          Use qualquer credencial para acessar o painel de operações.
        </div>
      </div>
    </div>
  )
}
