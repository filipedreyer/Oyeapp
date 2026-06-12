import { useState, useEffect, useRef } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { LogoWordmark } from '../../components/LogoOye.jsx'

function DropdownItem({ label, items, currentPath }) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  return (
    <div
      ref={ref}
      className={`nav-dropdown${open ? ' nav-dropdown--open' : ''}`}
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        className="nav-dropdown__trigger"
        aria-expanded={open}
        aria-haspopup="menu"
        onClick={() => setOpen(o => !o)}
      >
        {label}
        <span className="nav-dropdown__arrow" aria-hidden="true">▾</span>
      </button>
      {open && (
        <div className="nav-dropdown__menu" role="menu">
          {items.map(({ label: l, to }) => (
            <Link key={to} to={to} className="nav-dropdown__item" role="menuitem" onClick={() => setOpen(false)}>
              {l}
            </Link>
          ))}
        </div>
      )}
    </div>
  )
}

function MobileMenu({ open, onClose }) {
  useEffect(() => {
    function onEsc(e) { if (e.key === 'Escape') onClose() }
    if (open) {
      document.body.style.overflow = 'hidden'
      document.addEventListener('keydown', onEsc)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onEsc)
    }
  }, [open, onClose])

  return (
    <>
      <div
        className={`mobile-overlay${open ? ' visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className={`mobile-drawer${open ? ' open' : ''}`}
        aria-label="Menu mobile"
        aria-hidden={!open}
      >
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
          <NavLink to="/plataforma/contratacao" onClick={onClose}>Plataforma de contratação</NavLink>
          <NavLink to="/plataforma/acompanhamento" onClick={onClose}>Plataforma de acompanhamento</NavLink>
          <NavLink to="/plataforma/solucoes" onClick={onClose}>Plataforma de soluções</NavLink>
          <NavLink to="/rede-de-especialistas" onClick={onClose}>Rede de Especialistas</NavLink>
          <NavLink to="/cliente/dashboard" onClick={onClose}>Meus projetos</NavLink>
        </div>

        <div className="mobile-drawer__actions">
          <Link to="/cliente/login" className="btn btn-ghost" onClick={onClose}>
            Entrar
          </Link>
          <Link to="/diagnostico/empresa" className="btn btn-primary" onClick={onClose}>
            Iniciar Diagnóstico
          </Link>
        </div>
      </nav>
    </>
  )
}

export default function PublicLayout() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => { setMobileOpen(false) }, [pathname])

  return (
    <div className="public-layout">
      <header className="public-header">
        <Link to="/" className="public-header__logo" aria-label="Oyê — página inicial">
          <LogoWordmark dark size="md" />
        </Link>

        <nav className="public-header__nav" aria-label="Navegação principal">
          <DropdownItem
            label="A Oyê"
            items={[
              { label: 'Para empresas', to: '/para-empresas' },
              { label: 'Para consultorias', to: '/para-consultores' },
              { label: 'Para Fornecedores', to: '/para-fornecedores' },
            ]}
            currentPath={pathname}
          />
          <DropdownItem
            label="Nossos Serviços"
            items={[
              { label: 'Diagnósticos Empresariais', to: '/diagnostico/empresa' },
              { label: 'Marketplace de Consultorias', to: '/rede-de-especialistas' },
              { label: 'Plataforma de Soluções', to: '/plataforma/solucoes' },
              { label: 'Plataforma de Inovação Aberta', to: '/plataforma/inovacao' },
            ]}
            currentPath={pathname}
          />
          <Link
            to="/como-funciona"
            className={`nav-link${pathname.startsWith('/como-funciona') ? ' active' : ''}`}
          >
            Nossa metodologia
          </Link>
        </nav>

        <div className="public-header__actions">
          <Link to="/diagnostico/empresa" className="btn btn-primary btn-sm header-btn">
            Iniciar Diagnóstico
          </Link>
          <Link to="/cliente/login" className="btn btn-secondary btn-sm header-btn">
            Entrar
          </Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setMobileOpen(true)}
          aria-label="Abrir menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-drawer"
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
          <div className="public-footer__brand">
            <Link to="/" className="public-footer__logo" aria-label="Oyê">
              <LogoWordmark dark={false} size="sm" />
            </Link>
            <p className="public-footer__tagline">
              Oyê – Plataforma de Soluções
            </p>
          </div>

          <div className="public-footer__link-group">
            <h4>Plataforma</h4>
            <ul>
              <li><Link to="/para-empresas">Para Empresas</Link></li>
              <li><Link to="/para-consultores">Para Consultores</Link></li>
              <li><Link to="/para-fornecedores">Para Fornecedores de Soluções</Link></li>
              <li><Link to="/para-entidades">Para entidades Setoriais</Link></li>
            </ul>
          </div>

          <div className="public-footer__link-group">
            <h4>Rede</h4>
            <ul>
              <li><Link to="/rede-de-especialistas">Rede de especialistas</Link></li>
              <li><Link to="/para-consultores">Rede de consultores</Link></li>
              <li><Link to="/inteligencia">Inteligência Oyê</Link></li>
            </ul>
          </div>

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
