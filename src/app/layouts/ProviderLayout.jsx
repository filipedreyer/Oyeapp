import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'

function getPageTitle(pathname) {
  const titles = {
    '/provedor/dashboard': 'Dashboard',
    '/provedor/perfil': 'Meu Perfil',
    '/provedor/homologacao': 'Homologação',
    '/provedor/oportunidades': 'Oportunidades',
    '/provedor/propostas': 'Propostas',
    '/provedor/projetos': 'Projetos',
  }
  for (const [key, label] of Object.entries(titles)) {
    if (pathname.startsWith(key)) return label
  }
  return 'Área do Provedor'
}

export default function ProviderLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const pageTitle = getPageTitle(location.pathname)

  let user = { name: 'Provedor Demo', email: '' }
  try {
    const stored = localStorage.getItem('oye_provider_user')
    if (stored) user = JSON.parse(stored)
  } catch {}

  function handleLogout() {
    localStorage.removeItem('oye_provider_auth')
    localStorage.removeItem('oye_provider_user')
    navigate('/provedores/candidatura')
  }

  return (
    <div className="workspace-layout">
      <aside className="workspace-sidebar">
        <div className="workspace-sidebar__header">
          <Link to="/" className="workspace-sidebar__logo">Oyê</Link>
          <span className="workspace-sidebar__zone-label">Área do Provedor</span>
        </div>

        <nav className="workspace-sidebar__nav">
          <NavLink
            to="/provedor/dashboard"
            className={({ isActive }) =>
              'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/provedor/perfil"
            className={({ isActive }) =>
              'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
            }
          >
            Perfil
          </NavLink>
          <NavLink
            to="/provedor/homologacao"
            className={({ isActive }) =>
              'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
            }
          >
            Homologação
          </NavLink>
          <NavLink
            to="/provedor/oportunidades"
            className={({ isActive }) =>
              'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
            }
            end={false}
          >
            Oportunidades
          </NavLink>
          <NavLink
            to="/provedor/propostas"
            className={({ isActive }) =>
              'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
            }
            end={false}
          >
            Propostas
          </NavLink>
          <NavLink
            to="/provedor/projetos"
            className={({ isActive }) =>
              'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
            }
            end={false}
          >
            Projetos
          </NavLink>
        </nav>

        <div className="workspace-sidebar__footer">
          <div className="workspace-sidebar__user">
            <span className="workspace-sidebar__user-name">{user.name}</span>
            <span className="workspace-sidebar__user-role">{user.email || 'provedor'}</span>
          </div>
          <button className="workspace-sidebar__logout" onClick={handleLogout}>
            Sair
          </button>
        </div>
      </aside>

      <div className="workspace-main">
        <div className="workspace-topbar">
          <span className="workspace-topbar__title">{pageTitle}</span>
        </div>

        <div className="workspace-content">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
