import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { LogoWordmark } from '../../components/LogoOye.jsx'

function getPageTitle(pathname) {
  const titles = {
    '/cliente/dashboard': 'Dashboard',
    '/cliente/demandas': 'Demandas',
    '/cliente/diagnosticos': 'Diagnósticos',
    '/cliente/rotas': 'Rotas',
    '/cliente/propostas': 'Propostas',
    '/cliente/projetos': 'Projetos',
  }
  for (const [key, label] of Object.entries(titles)) {
    if (pathname.startsWith(key)) return label
  }
  return 'Área do Cliente'
}

export default function ClientLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pageTitle = getPageTitle(location.pathname)

  useEffect(() => {
    setSidebarOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  let user = { name: 'Empresa Demo', email: '' }
  try {
    const stored = localStorage.getItem('oye_client_user')
    if (stored) user = JSON.parse(stored)
  } catch {}

  function handleLogout() {
    localStorage.removeItem('oye_client_auth')
    localStorage.removeItem('oye_client_user')
    navigate('/cliente/login')
  }

  const sidebarContent = (
    <>
      <div className="workspace-sidebar__header">
        <Link to="/" className="workspace-sidebar__logo"><LogoWordmark dark size="sm" /></Link>
        <span className="workspace-sidebar__zone-label">Área do Cliente</span>
      </div>

      <nav className="workspace-sidebar__nav">
        {[
          ['/cliente/dashboard', 'Dashboard'],
          ['/cliente/demandas', 'Demandas'],
          ['/cliente/propostas', 'Propostas'],
          ['/cliente/projetos', 'Projetos'],
        ].map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => 'workspace-sidebar__nav-link' + (isActive ? ' active' : '')}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="workspace-sidebar__footer">
        <div className="workspace-sidebar__user">
          <span className="workspace-sidebar__user-name">{user.name}</span>
          <span className="workspace-sidebar__user-role">{user.email || 'cliente'}</span>
        </div>
        <button className="workspace-sidebar__logout" onClick={handleLogout}>
          Sair
        </button>
      </div>
    </>
  )

  return (
    <div className="workspace-layout">
      {/* Overlay for mobile */}
      <div
        className={`workspace-sidebar-overlay${sidebarOpen ? ' open' : ''}`}
        onClick={() => setSidebarOpen(false)}
        aria-hidden="true"
      />

      {/* Desktop sidebar */}
      <aside className="workspace-sidebar">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar */}
      <aside className={`workspace-sidebar workspace-sidebar--mobile${sidebarOpen ? ' open' : ''}`} aria-label="Menu de navegação">
        {sidebarContent}
      </aside>

      <div className="workspace-main">
        <div className="workspace-topbar">
          <button
            className="workspace-topbar__menu-btn"
            onClick={() => setSidebarOpen(o => !o)}
            aria-label="Abrir menu de navegação"
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
