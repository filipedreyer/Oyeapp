import { Link } from 'react-router-dom'

const mockDiagnostics = [
  { id: 'diag-001', demandaId: 'dem-001', demandaEmpresa: 'Supermercados Horizonte', analista: 'Equipe Oyê', status: 'em_analise', criadoEm: '2025-06-05' },
  { id: 'diag-002', demandaId: 'dem-002', demandaEmpresa: 'LogFlex Transportes', analista: 'Equipe Oyê', status: 'aguardando_dados', criadoEm: '2025-06-04' },
  { id: 'diag-003', demandaId: 'dem-003', demandaEmpresa: 'MedTech Soluções', analista: 'Equipe Oyê', status: 'aprovado', criadoEm: '2025-06-01' },
]

const STATUS_LABELS = {
  em_analise: 'Em análise',
  aguardando_dados: 'Aguardando dados',
  aprovado: 'Aprovado',
  pendente: 'Pendente',
  publicado: 'Publicado',
}

const STATUS_BADGE = {
  em_analise: 'badge badge-copper',
  aguardando_dados: 'badge badge-attention',
  aprovado: 'badge badge-positive',
  pendente: 'badge',
  publicado: 'badge badge-positive',
}

export default function OpsDiagnosticsPage() {
  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Ops — Gate 1</p>
        <h1>Fila de Diagnósticos</h1>
        <p>Gerencie os diagnósticos em andamento na plataforma.</p>
      </div>

      <div className="section-card">
        <table className="ws-table">
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Demanda vinculada</th>
              <th>Analista</th>
              <th>Status</th>
              <th>Criado em</th>
              <th>Workbench</th>
            </tr>
          </thead>
          <tbody>
            {mockDiagnostics.map((d) => (
              <tr key={d.id}>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>{d.demandaEmpresa}</td>
                <td>
                  <Link to={`/ops/demandas/${d.demandaId}`} style={{ color: 'var(--navy-mid)', fontSize: 'var(--text-xs)' }}>
                    {d.demandaId}
                  </Link>
                </td>
                <td>{d.analista}</td>
                <td>
                  <span className={STATUS_BADGE[d.status] || 'badge'}>
                    {STATUS_LABELS[d.status] || d.status}
                  </span>
                </td>
                <td style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)' }}>{d.criadoEm}</td>
                <td>
                  <Link to={`/ops/diagnosticos/${d.id}`} className="btn btn-primary" style={{ fontSize: 'var(--text-xs)', padding: '4px 12px' }}>
                    Abrir workbench
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
