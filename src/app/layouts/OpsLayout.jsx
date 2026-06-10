import { Link, NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom'

function getPageTitle(pathname) {
  const titles = {
    '/ops/dashboard': 'Dashboard',
    '/ops/leads': 'Leads',
    '/ops/demandas': 'Demandas',
    '/ops/diagnosticos': 'Diagnósticos',
    '/ops/roteamento': 'Roteamento',
    '/ops/shortlists': 'Shortlists',
    '/ops/provedores': 'Provedores',
    '/ops/propostas': 'Propostas',
    '/ops/projetos': 'Projetos',
    '/ops/encerramentos': 'Encerramentos',
    '/ops/inteligencia': 'Inteligência',
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

export default function OpsLayout() {
  const navigate = useNavigate()
  const location = useLocation()
  const pageTitle = getPageTitle(location.pathname)

  function handleLogout() {
    localStorage.removeItem('oye_ops_auth')
    navigate('/ops/login')
  }

  return (
    <div className="workspace-layout">
      <aside className="workspace-sidebar workspace-sidebar--dark">
        <div className="workspace-sidebar__header">
          <Link to="/" className="workspace-sidebar__logo">Oyê</Link>
          <span className="workspace-sidebar__zone-label">Operações</span>
        </div>

        <nav className="workspace-sidebar__nav">
          <NavSection label="Cockpit">
            <NavLink
              to="/ops/dashboard"
              className={({ isActive }) =>
                'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
              }
            >
              Dashboard
            </NavLink>
            <NavLink
              to="/ops/leads"
              className={({ isActive }) =>
                'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
              }
            >
              Leads
            </NavLink>
          </NavSection>

          <NavSection label="Demandas">
            <NavLink
              to="/ops/demandas"
              className={({ isActive }) =>
                'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
              }
              end
            >
              Demandas
            </NavLink>
            <NavLink
              to="/ops/diagnosticos"
              className={({ isActive }) =>
                'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
              }
              end
            >
              Diagnósticos
            </NavLink>
            <NavLink
              to="/ops/roteamento"
              className={({ isActive }) =>
                'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
              }
              end={false}
            >
              Roteamento
            </NavLink>
          </NavSection>

          <NavSection label="Supply">
            <NavLink
              to="/ops/shortlists"
              className={({ isActive }) =>
                'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
              }
              end
            >
              Shortlists
            </NavLink>
            <NavLink
              to="/ops/provedores"
              className={({ isActive }) =>
                'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
              }
              end
            >
              Provedores
            </NavLink>
            <NavLink
              to="/ops/propostas"
              className={({ isActive }) =>
                'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
              }
              end
            >
              Propostas
            </NavLink>
          </NavSection>

          <NavSection label="Execução">
            <NavLink
              to="/ops/projetos"
              className={({ isActive }) =>
                'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
              }
              end
            >
              Projetos
            </NavLink>
            <NavLink
              to="/ops/encerramentos"
              className={({ isActive }) =>
                'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
              }
              end={false}
            >
              Encerramentos
            </NavLink>
          </NavSection>

          <NavSection label="Inteligência">
            <NavLink
              to="/ops/inteligencia"
              className={({ isActive }) =>
                'workspace-sidebar__nav-link' + (isActive ? ' active' : '')
              }
            >
              Inteligência
            </NavLink>
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
