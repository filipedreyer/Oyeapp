import { useParams, Link } from 'react-router-dom'
import { mockProjects } from '../../data/mockProjects'

const STATUS_LABELS = {
  em_andamento: 'Em andamento',
  iniciado: 'Iniciado',
  concluido: 'Concluído',
  pausado: 'Pausado',
  cancelado: 'Cancelado',
}

const STATUS_BADGE = {
  em_andamento: 'badge badge-positive',
  iniciado: 'badge badge-attention',
  concluido: 'badge badge-positive',
  pausado: 'badge',
  cancelado: 'badge',
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('pt-BR')
}

function formatCurrency(val) {
  return 'R$ ' + val.toLocaleString('pt-BR')
}

export default function OpsProjectDetailPage() {
  const { projetoId } = useParams()
  const project = mockProjects.find((p) => p.id === projetoId)

  if (!project) {
    return (
      <div className="workspace-content">
        <div className="alert">
          Projeto não encontrado. <Link to="/ops/projetos">Voltar</Link>
        </div>
      </div>
    )
  }

  const completedMilestones = project.milestones.filter((m) => m.completed).length
  const progress = Math.round((completedMilestones / project.milestones.length) * 100)

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">
          <Link to="/ops/projetos" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Projetos</Link>
          {' / '}Detalhe
        </p>
        <h1 style={{ marginBottom: 'var(--space-2)' }}>{project.title}</h1>
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          <span className={STATUS_BADGE[project.status] || 'badge'}>
            {STATUS_LABELS[project.status] || project.status}
          </span>
          <Link
            to={`/ops/encerramentos/${project.id}`}
            className="btn btn-secondary"
            style={{ fontSize: 'var(--text-xs)', padding: '4px 12px' }}
          >
            Gate 3 — Encerramento
          </Link>
        </div>
      </div>

      <div className="workbench-grid">
        {/* Left */}
        <div className="workbench-main">
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Informações do Projeto</h3>
            </div>
            <div className="section-card__body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>Cliente</p>
                  <p style={{ fontSize: 'var(--text-sm)' }}>{project.clientId}</p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>Provedor</p>
                  <p style={{ fontSize: 'var(--text-sm)' }}>{project.providerId}</p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>Início</p>
                  <p style={{ fontSize: 'var(--text-sm)' }}>{formatDate(project.startDate)}</p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>Previsão de término</p>
                  <p style={{ fontSize: 'var(--text-sm)' }}>{formatDate(project.endDate)}</p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>Valor total</p>
                  <p style={{ fontSize: 'var(--text-sm)', fontWeight: 700 }}>{formatCurrency(project.totalValue)}</p>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>Valor pago</p>
                  <p style={{ fontSize: 'var(--text-sm)' }}>{formatCurrency(project.paidAmount)}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Marcos do Projeto</h3>
            </div>
            <div className="section-card__body">
              <div style={{ marginBottom: 'var(--space-4)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                <div style={{ flex: 1, height: '8px', background: 'var(--paper)', borderRadius: '4px', overflow: 'hidden' }}>
                  <div
                    style={{
                      height: '100%',
                      width: `${progress}%`,
                      background: 'var(--positive)',
                      borderRadius: '4px',
                      transition: 'width 0.3s ease',
                    }}
                  />
                </div>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--ink)', whiteSpace: 'nowrap' }}>
                  {progress}% ({completedMilestones}/{project.milestones.length})
                </span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {project.milestones.map((m) => (
                  <div
                    key={m.id}
                    style={{
                      display: 'flex',
                      gap: 'var(--space-3)',
                      padding: 'var(--space-3) var(--space-4)',
                      background: m.completed ? 'var(--paper-2)' : 'var(--white)',
                      border: 'var(--border)',
                      borderRadius: '2px',
                    }}
                  >
                    <div
                      style={{
                        width: '20px',
                        height: '20px',
                        borderRadius: '50%',
                        border: m.completed ? 'none' : '2px solid var(--line)',
                        background: m.completed ? 'var(--positive)' : 'transparent',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        marginTop: '2px',
                        color: 'var(--white)',
                        fontSize: '12px',
                        fontWeight: 700,
                      }}
                    >
                      {m.completed ? '✓' : ''}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--ink)', marginBottom: 'var(--space-1)' }}>
                        {m.title}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginBottom: 'var(--space-1)' }}>
                        {m.description}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                        Prazo: {formatDate(m.dueDate)}
                        {m.completed && m.completedAt && (
                          <span style={{ color: 'var(--positive)', marginLeft: 'var(--space-2)' }}>
                            · Concluído em {formatDate(m.completedAt)}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="workbench-sidebar">
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Financeiro</h3>
            </div>
            <div className="section-card__body">
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginBottom: 'var(--space-1)' }}>Valor total</p>
                <p style={{ fontSize: 'var(--text-xl)', fontWeight: 900, color: 'var(--ink)' }}>{formatCurrency(project.totalValue)}</p>
              </div>
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginBottom: 'var(--space-1)' }}>Pago</p>
                <p style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--positive)' }}>{formatCurrency(project.paidAmount)}</p>
              </div>
              <div>
                <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginBottom: 'var(--space-1)' }}>A receber</p>
                <p style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--attention)' }}>{formatCurrency(project.totalValue - project.paidAmount)}</p>
              </div>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Ações</h3>
            </div>
            <div className="section-card__body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <Link
                  to={`/ops/encerramentos/${project.id}`}
                  className="btn btn-primary"
                  style={{ textAlign: 'center' }}
                >
                  Gate 3 — Registrar encerramento
                </Link>
                <Link
                  to={`/ops/demandas/${project.demandId}`}
                  className="btn btn-secondary"
                  style={{ textAlign: 'center' }}
                >
                  Ver demanda vinculada
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
