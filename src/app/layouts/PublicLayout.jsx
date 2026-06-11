import { Link, NavLink, Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <div className="public-layout">
      <header className="public-header">
        <Link to="/" className="public-header__logo">Oyê</Link>

        <nav className="public-header__nav">
          <NavLink to="/metodologia" className={({ isActive }) => isActive ? 'active' : ''}>
            Metodologia
          </NavLink>
          <NavLink to="/sobre" className={({ isActive }) => isActive ? 'active' : ''}>
            Sobre
          </NavLink>
          <NavLink to="/consultores" className={({ isActive }) => isActive ? 'active' : ''}>
            Consultores
          </NavLink>
          <NavLink to="/provedores" className={({ isActive }) => isActive ? 'active' : ''}>
            Para Provedores
          </NavLink>
        </nav>

        <div className="public-header__actions">
          <Link to="/cliente/login" className="btn btn-ghost btn-sm">
            Entrar
          </Link>
          <Link to="/diagnostico/empresa" className="btn btn-primary btn-sm">
            Iniciar Diagnóstico
          </Link>
        </div>
      </header>

      <main className="public-layout__content">
        <Outlet />
      </main>

      <footer className="public-footer">
        <div className="container">
          <div>
            <Link to="/" className="public-footer__logo">Oyê</Link>
            <p className="public-footer__tagline">
              Diagnóstico estratégico antes da solução. Conectamos empresas à solução certa para o problema certo.
            </p>
          </div>

          <div>
            <div className="public-footer__link-group">
              <h4>Plataforma</h4>
              <ul>
                <li><Link to="/metodologia">Metodologia</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/diagnostico/empresa">Iniciar Diagnóstico</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <div className="public-footer__link-group">
              <h4>Rede</h4>
              <ul>
                <li><Link to="/consultores">Consultores</Link></li>
                <li><Link to="/provedores">Para Provedores</Link></li>
                <li><Link to="/provedores/candidatura">Candidatura</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <div className="public-footer__link-group">
              <h4>Empresa</h4>
              <ul>
                <li><Link to="/contato">Contato</Link></li>
                <li><Link to="/termos">Termos de Uso</Link></li>
                <li><Link to="/privacidade">Privacidade</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="public-footer__bottom">
          <div className="container">
            <p className="public-footer__legal">
              © 2025 Oyê. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
