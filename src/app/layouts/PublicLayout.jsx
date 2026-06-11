import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { LogoWordmark } from '../../components/LogoOye.jsx'

function MobileMenu({ open, onClose }) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      <div
        className={`mobile-overlay${open ? ' visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav className={`mobile-drawer${open ? ' open' : ''}`} aria-label="Menu mobile">
        <div className="mobile-drawer__header">
          <Link to="/" onClick={onClose}>
            <LogoWordmark dark size="md" />
          </Link>
          <button
            className="mobile-drawer__close"
            onClick={onClose}
            aria-label="Fechar menu"
          >
            ✕
          </button>
        </div>

        <div className="mobile-drawer__links">
          <NavLink to="/para-empresas" onClick={onClose}>Para empresas</NavLink>
          <NavLink to="/para-consultores" onClick={onClose}>Para consultores</NavLink>
          <NavLink to="/como-funciona" onClick={onClose}>Como funciona</NavLink>
          <NavLink to="/rede-de-especialistas" onClick={onClose}>Rede de especialistas</NavLink>
          <NavLink to="/sobre" onClick={onClose}>Sobre</NavLink>
        </div>

        <div className="mobile-drawer__actions">
          <Link to="/cliente/login" className="btn btn-ghost" onClick={onClose}>
            Entrar
          </Link>
          <Link to="/diagnostico/empresa" className="btn btn-primary" onClick={onClose}>
            Iniciar diagnóstico
          </Link>
        </div>
      </nav>
    </>
  )
}

export default function PublicLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMobileOpen(false)
  }, [pathname])

  return (
    <div className="public-layout">
      <header className="public-header">
        <Link to="/" className="public-header__logo" aria-label="Oyê — página inicial">
          <LogoWordmark dark size="md" />
        </Link>

        <nav className="public-header__nav" aria-label="Navegação principal">
          <NavLink to="/para-empresas" className={({ isActive }) => isActive ? 'active' : ''}>
            Para empresas
          </NavLink>
          <NavLink to="/para-consultores" className={({ isActive }) => isActive ? 'active' : ''}>
            Para consultores
          </NavLink>
          <NavLink to="/como-funciona" className={({ isActive }) => isActive ? 'active' : ''}>
            Como funciona
          </NavLink>
          <NavLink to="/rede-de-especialistas" className={({ isActive }) => isActive ? 'active' : ''}>
            Rede de especialistas
          </NavLink>
          <NavLink to="/sobre" className={({ isActive }) => isActive ? 'active' : ''}>
            Sobre
          </NavLink>
        </nav>

        <div className="public-header__actions">
          <Link to="/cliente/login" className="btn btn-ghost btn-sm">
            Entrar
          </Link>
          <Link to="/diagnostico/empresa" className="btn btn-primary btn-sm">
            Iniciar diagnóstico
          </Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
        >
          <span /><span /><span />
        </button>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />

      <main className="public-layout__content">
        <Outlet />
      </main>

      <footer className="public-footer">
        <div className="container">
          <div>
            <Link to="/" className="public-footer__logo" aria-label="Oyê">
              <LogoWordmark dark size="sm" />
            </Link>
            <p className="public-footer__tagline">
              Diagnóstico estratégico antes da solução.
            </p>
          </div>

          <div>
            <div className="public-footer__link-group">
              <h4>Plataforma</h4>
              <ul>
                <li><Link to="/para-empresas">Para empresas</Link></li>
                <li><Link to="/para-consultores">Para consultores</Link></li>
                <li><Link to="/como-funciona">Como funciona</Link></li>
                <li><Link to="/diagnostico/empresa">Iniciar diagnóstico</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <div className="public-footer__link-group">
              <h4>Rede</h4>
              <ul>
                <li><Link to="/rede-de-especialistas">Rede de especialistas</Link></li>
                <li><Link to="/para-consultores">Para consultores</Link></li>
                <li><Link to="/inteligencia">Inteligência Oyê</Link></li>
              </ul>
            </div>
          </div>

          <div>
            <div className="public-footer__link-group">
              <h4>Empresa</h4>
              <ul>
                <li><Link to="/sobre">Sobre</Link></li>
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
              © 2026 Oyê. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
