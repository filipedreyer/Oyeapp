import { Link } from 'react-router-dom'

const mockShortlists = [
  { id: 'sl-001', demandaId: 'dem-001', demandaEmpresa: 'Supermercados Horizonte', status: 'em_montagem', provedores: 3, criadoEm: '2025-06-06' },
  { id: 'sl-002', demandaId: 'dem-002', demandaEmpresa: 'LogFlex Transportes', status: 'enviada_ao_cliente', provedores: 4, criadoEm: '2025-06-04' },
  { id: 'sl-003', demandaId: 'dem-003', demandaEmpresa: 'MedTech Soluções', status: 'aprovada', provedores: 2, criadoEm: '2025-06-01' },
]

const STATUS_LABELS = {
  em_montagem: 'Em montagem',
  enviada_ao_cliente: 'Enviada ao cliente',
  aprovada: 'Aprovada',
  descartada: 'Descartada',
}

const STATUS_BADGE = {
  em_montagem: 'badge badge-attention',
  enviada_ao_cliente: 'badge badge-copper',
  aprovada: 'badge badge-positive',
  descartada: 'badge',
}

export default function OpsShortlistsPage() {
  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Ops</p>
        <h1>Shortlists</h1>
        <p>Gerencie as shortlists de provedores para cada demanda.</p>
      </div>

      <div className="section-card">
        <table className="ws-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Empresa</th>
              <th>Demanda vinculada</th>
              <th>Status</th>
              <th>Provedores</th>
              <th>Data</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {mockShortlists.map((sl) => (
              <tr key={sl.id}>
                <td style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)', fontFamily: 'monospace' }}>{sl.id}</td>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>{sl.demandaEmpresa}</td>
                <td>
                  <Link to={`/ops/demandas/${sl.demandaId}`} style={{ color: 'var(--navy-mid)', fontSize: 'var(--text-xs)' }}>
                    {sl.demandaId}
                  </Link>
                </td>
                <td>
                  <span className={STATUS_BADGE[sl.status] || 'badge'}>
                    {STATUS_LABELS[sl.status] || sl.status}
                  </span>
                </td>
                <td style={{ textAlign: 'center' }}>{sl.provedores}</td>
                <td style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)' }}>{sl.criadoEm}</td>
                <td>
                  <Link
                    to={`/ops/shortlists/${sl.id}`}
                    className="btn btn-secondary"
                    style={{ fontSize: 'var(--text-xs)', padding: '4px 10px' }}
                  >
                    Ver shortlist
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
