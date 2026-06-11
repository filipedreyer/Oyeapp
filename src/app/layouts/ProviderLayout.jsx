import { useState, useEffect } from 'react'
import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { LogoWordmark } from '../../components/LogoOye.jsx'

function getPageTitle(pathname) {
  const titles = {
    '/provedor/dashboard': 'Dashboard',
    '/provedor/perfil': 'Meu Perfil',
    '/provedor/homologacao': 'Avaliação',
    '/provedor/oportunidades': 'Oportunidades',
    '/provedor/propostas': 'Propostas',
    '/provedor/projetos': 'Projetos',
  }
  for (const [key, label] of Object.entries(titles)) {
    if (pathname.startsWith(key)) return label
  }
  return 'Área do Especialista'
}

export default function ProviderLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const pageTitle = getPageTitle(location.pathname)

  useEffect(() => { setSidebarOpen(false) }, [location.pathname])
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  let user = { name: 'Especialista Demo', email: '' }
  try {
    const stored = localStorage.getItem('oye_provider_user')
    if (stored) user = JSON.parse(stored)
  } catch {}

  function handleLogout() {
    localStorage.removeItem('oye_provider_auth')
    localStorage.removeItem('oye_provider_user')
    navigate('/para-consultores/candidatura')
  }

  const sidebarContent = (
    <>
      <div className="workspace-sidebar__header">
        <Link to="/" className="workspace-sidebar__logo"><LogoWordmark dark size="sm" /></Link>
        <span className="workspace-sidebar__zone-label">Área do Especialista</span>
      </div>

      <nav className="workspace-sidebar__nav">
        {[
          ['/provedor/dashboard', 'Dashboard'],
          ['/provedor/perfil', 'Perfil'],
          ['/provedor/homologacao', 'Avaliação'],
          ['/provedor/oportunidades', 'Oportunidades'],
          ['/provedor/propostas', 'Propostas'],
          ['/provedor/projetos', 'Projetos'],
        ].map(([to, label]) => (
          <NavLink
            key={to}
            to={to}
            end={false}
            className={({ isActive }) => 'workspace-sidebar__nav-link' + (isActive ? ' active' : '')}
          >
            {label}
          </NavLink>
        ))}
      </nav>

      <div className="workspace-sidebar__footer">
        <div className="workspace-sidebar__user">
          <span className="workspace-sidebar__user-name">{user.name}</span>
          <span className="workspace-sidebar__user-role">{user.email || 'especialista'}</span>
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
      <aside className="workspace-sidebar">{sidebarContent}</aside>
      <aside className={`workspace-sidebar workspace-sidebar--mobile${sidebarOpen ? ' open' : ''}`} aria-label="Menu de navegação">
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
