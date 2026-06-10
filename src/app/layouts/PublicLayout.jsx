import { Link, NavLink, Outlet } from 'react-router-dom'

export default function PublicLayout() {
  return (
    <div className="public-layout">
      <header className="public-header">
        <div className="container">
          <Link to="/" className="public-header__logo">
            Oyê
          </Link>

          <nav className="public-header__nav">
            <NavLink to="/metodologia">Metodologia</NavLink>
            <NavLink to="/sobre">Sobre</NavLink>
            <NavLink to="/consultores">Consultores</NavLink>
          </nav>

          <div className="public-header__actions">
            <Link to="/cliente/login" className="btn btn-ghost btn-sm">
              Entrar
            </Link>
            <Link to="/diagnostico/empresa" className="btn btn-primary btn-sm">
              Iniciar Diagnóstico
            </Link>
          </div>
        </div>
      </header>

      <main className="public-layout__content">
        <Outlet />
      </main>

      <footer className="public-footer">
        <div className="container">
          <div className="public-footer__brand">
            <Link to="/" className="public-footer__logo">Oyê</Link>
            <p className="public-footer__tagline">
              Diagnóstico estratégico e roteamento inteligente para projetos de consultoria.
            </p>
          </div>

          <div className="public-footer__links">
            <div className="public-footer__link-group">
              <h4>Plataforma</h4>
              <ul>
                <li><Link to="/metodologia">Metodologia</Link></li>
                <li><Link to="/sobre">Sobre</Link></li>
                <li><Link to="/consultores">Consultores</Link></li>
              </ul>
            </div>
            <div className="public-footer__link-group">
              <h4>Parceiros</h4>
              <ul>
                <li><Link to="/provedores">Provedores</Link></li>
                <li><Link to="/provedores/candidatura">Candidatura</Link></li>
                <li><Link to="/contato">Contato</Link></li>
              </ul>
            </div>
            <div className="public-footer__link-group">
              <h4>Legal</h4>
              <ul>
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
