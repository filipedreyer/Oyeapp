import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'
import { LogoWordmark } from '../../components/LogoOye.jsx'

function getPageTitle(pathname) {
  const titles = {
    '/cliente/dashboard': 'Dashboard',
    '/cliente/demandas': 'Minhas Demandas',
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
  const pageTitle = getPageTitle(location.pathname)

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

  return (
    <div className="workspace-layout">
      <aside className="workspace-sidebar">
        <div className="workspace-sidebar__header">
          <Link to="/" className="workspace-sidebar__logo"><LogoWordmark dark size="sm" /></Link>
          <span className="workspace-sidebar__zone-label">Área do Cliente</span>
        </div>

        <nav className="workspace-sidebar__nav">
          <NavLink
            to="/cliente/dashboard"
            className={({ isActive }) =>
              'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
            }
          >
            Dashboard
          </NavLink>
          <NavLink
            to="/cliente/demandas"
            className={({ isActive }) =>
              'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
            }
          >
            Demandas
          </NavLink>
          <NavLink
            to="/cliente/propostas"
            className={({ isActive }) =>
              'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
            }
            end={false}
          >
            Propostas
          </NavLink>
          <NavLink
            to="/cliente/projetos"
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
            <span className="workspace-sidebar__user-role">{user.email || 'cliente'}</span>
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
