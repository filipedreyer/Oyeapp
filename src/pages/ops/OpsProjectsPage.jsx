import { Link } from 'react-router-dom'
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

export default function OpsProjectsPage() {
  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Ops</p>
        <h1>Projetos</h1>
        <p>Projetos em execução na plataforma Oyê.</p>
      </div>

      <div className="section-card">
        <table className="ws-table">
          <thead>
            <tr>
              <th>Projeto</th>
              <th>Status</th>
              <th>Início</th>
              <th>Previsão término</th>
              <th>Valor total</th>
              <th>Marcos</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mockProjects.map((p) => {
              const completed = p.milestones.filter((m) => m.completed).length
              return (
                <tr key={p.id}>
                  <td style={{ fontWeight: 600, color: 'var(--ink)', maxWidth: '280px' }}>
                    <div>{p.title}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginTop: '2px' }}>
                      Cliente: {p.clientId} · Provedor: {p.providerId}
                    </div>
                  </td>
                  <td>
                    <span className={STATUS_BADGE[p.status] || 'badge'}>
                      {STATUS_LABELS[p.status] || p.status}
                    </span>
                  </td>
                  <td style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)' }}>{formatDate(p.startDate)}</td>
                  <td style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)' }}>{formatDate(p.endDate)}</td>
                  <td style={{ color: 'var(--ink)' }}>{formatCurrency(p.totalValue)}</td>
                  <td>
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                      {completed}/{p.milestones.length} concluídos
                    </span>
                  </td>
                  <td>
                    <Link
                      to={`/ops/projetos/${p.id}`}
                      className="btn btn-secondary"
                      style={{ fontSize: 'var(--text-xs)', padding: '4px 10px' }}
                    >
                      Ver projeto
                    </Link>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
