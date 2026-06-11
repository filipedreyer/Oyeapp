import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { LogoWordmark } from '../../components/LogoOye.jsx'

function getPageTitle(pathname) {
  const titles = {
    '/ops/dashboard': 'Cockpit',
    '/ops/leads': 'Leads',
    '/ops/demandas': 'Demandas',
    '/ops/diagnosticos': 'Diagnósticos',
    '/ops/roteamento': 'Roteamento',
    '/ops/shortlists': 'Listas de especialistas',
    '/ops/provedores': 'Base de especialistas',
    '/ops/propostas': 'Propostas',
    '/ops/projetos': 'Projetos',
    '/ops/encerramentos': 'Encerramentos',
    '/ops/inteligencia': 'Inteligência Oyê',
  }
  for (const [key, label] of Object.entries(titles)) {
    if (pathname.startsWith(key)) return label
  }
  return 'Operações Oyê'
}

function NavSection({ label, children }) {
  return (
    <div className="workspace-sidebar__nav-section">
      <div className="workspace-sidebar__nav-section-label">{label}</div>
      {children}
    </div>
  )
}

function NavItem({ to, label, end = false }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) => 'workspace-sidebar__nav-link' + (isActive ? ' active' : '')}
    >
      {label}
    </NavLink>
  )
}

export default function OpsLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pageTitle = getPageTitle(location.pathname)

  useEffect(() => { setSidebarOpen(false) }, [location.pathname])
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  function handleLogout() {
    localStorage.removeItem('oye_ops_auth')
    navigate('/ops/login')
  }

  const sidebarContent = (
    <>
      <div className="workspace-sidebar__header">
        <Link to="/" className="workspace-sidebar__logo"><LogoWordmark dark={false} size="sm" /></Link>
        <span className="workspace-sidebar__zone-label">Operações</span>
      </div>

      <nav className="workspace-sidebar__nav">
        <NavSection label="Cockpit">
          <NavItem to="/ops/dashboard" label="Dashboard" end />
          <NavItem to="/ops/leads" label="Leads" end />
        </NavSection>

        <NavSection label="Demandas">
          <NavItem to="/ops/demandas" label="Demandas" end />
          <NavItem to="/ops/diagnosticos" label="Diagnósticos" end />
          <NavItem to="/ops/roteamento" label="Roteamento" />
        </NavSection>

        <NavSection label="Seleção">
          <NavItem to="/ops/shortlists" label="Listas de especialistas" end />
          <NavItem to="/ops/provedores" label="Base de especialistas" end />
          <NavItem to="/ops/propostas" label="Propostas" end />
        </NavSection>

        <NavSection label="Execução">
          <NavItem to="/ops/projetos" label="Projetos" end />
          <NavItem to="/ops/encerramentos" label="Encerramentos" />
        </NavSection>

        <NavSection label="Inteligência">
          <NavItem to="/ops/inteligencia" label="Inteligência Oyê" />
        </NavSection>
      </nav>

      <div className="workspace-sidebar__footer">
        <div className="workspace-sidebar__user">
          <span className="workspace-sidebar__user-name">Equipe Oyê</span>
          <span className="workspace-sidebar__user-role">Operações</span>
        </div>
        <button className="workspace-sidebar__logout" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </>
  )

  return (
    <div className="workspace-layout">
      <div
        className={`workspace-sidebar-overlay${sidebarOpen ? ' open' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />
      <aside className="workspace-sidebar workspace-sidebar--dark">{sidebarContent}</aside>
      <aside className={`workspace-sidebar workspace-sidebar--dark workspace-sidebar--mobile${sidebarOpen ? ' open' : ''}`} aria-label="Menu de navegação">
        {sidebarContent}
      </aside>

      <div className="workspace-main">
        <div className="workspace-topbar">
          <button
            className="workspace-topbar__menu-btn"
            onClick={() => setSidebarOpen(o => !o)}
            aria-label="Abrir menu"
            aria-expanded={sidebarOpen}
          >
            <span /><span /><span />
          </button>
          <span className="workspace-topbar__title">{pageTitle}</span>
        </div>
        <div className="workspace-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
