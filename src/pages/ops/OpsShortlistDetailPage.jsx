import { useParams, Link } from 'react-router-dom'

const MOCK_SHORTLISTS = {
  'sl-001': {
    id: 'sl-001',
    demandaId: 'dem-001',
    demandaEmpresa: 'Supermercados Horizonte',
    status: 'em_montagem',
    providers: [
      { id: 'prov-001', nome: 'Marina Fonseca', tipo: 'Individual', status: 'notificado' },
      { id: 'prov-005', nome: 'Cláudia Bernardi', tipo: 'Individual', status: 'interessado' },
      { id: 'prov-006', nome: 'Instituto Avançar', tipo: 'Empresa', status: 'entrevistado' },
    ],
  },
  'sl-002': {
    id: 'sl-002',
    demandaId: 'dem-002',
    demandaEmpresa: 'LogFlex Transportes',
    status: 'enviada_ao_cliente',
    providers: [
      { id: 'prov-002', nome: 'Gustavo Almeida Filho', tipo: 'Individual', status: 'interessado' },
      { id: 'prov-003', nome: 'Renata Costa Guerra', tipo: 'Boutique', status: 'entrevistado' },
      { id: 'prov-004', nome: 'Paulo Drummond', tipo: 'Individual', status: 'recusado' },
      { id: 'prov-001', nome: 'Marina Fonseca', tipo: 'Individual', status: 'notificado' },
    ],
  },
  'sl-003': {
    id: 'sl-003',
    demandaId: 'dem-003',
    demandaEmpresa: 'MedTech Soluções',
    status: 'aprovada',
    providers: [
      { id: 'prov-003', nome: 'Renata Costa Guerra', tipo: 'Boutique', status: 'entrevistado' },
      { id: 'prov-004', nome: 'Paulo Drummond', tipo: 'Individual', status: 'notificado' },
    ],
  },
}

const STATUS_LABELS = {
  em_montagem: 'Em montagem',
  enviada_ao_cliente: 'Enviada ao cliente',
  aprovada: 'Aprovada',
  descartada: 'Descartada',
}

const STATUS_BADGE = {
  em_montagem: 'badge badge-attention',
  enviada_ao_cliente: 'badge badge-navy',
  aprovada: 'badge badge-positive',
  descartada: 'badge',
}

const PROV_STATUS_LABELS = {
  notificado: 'Notificado',
  interessado: 'Interessado',
  entrevistado: 'Entrevistado',
  recusado: 'Recusado',
}

const PROV_STATUS_BADGE = {
  notificado: 'badge',
  interessado: 'badge badge-attention',
  entrevistado: 'badge badge-positive',
  recusado: 'badge',
}

export default function OpsShortlistDetailPage() {
  const { shortlistId } = useParams()
  const sl = MOCK_SHORTLISTS[shortlistId] || Object.values(MOCK_SHORTLISTS)[0]

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">
          <Link to="/ops/shortlists" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Shortlists</Link>
          {' / '}Detalhe
        </p>
        <h1 style={{ marginBottom: 'var(--space-2)' }}>Shortlist — {sl.demandaEmpresa}</h1>
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <span className={STATUS_BADGE[sl.status] || 'badge'}>{STATUS_LABELS[sl.status] || sl.status}</span>
          <Link to={`/ops/demandas/${sl.demandaId}`} style={{ fontSize: 'var(--text-xs)', color: 'var(--navy-mid)' }}>
            Ver demanda →
          </Link>
        </div>
      </div>

      <div className="section-card">
        <div className="section-card__header">
          <h3 className="section-card__title">Provedores na shortlist</h3>
        </div>
        <table className="ws-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Status</th>
              <th>Ver perfil</th>
            </tr>
          </thead>
          <tbody>
            {sl.providers.map((p) => (
              <tr key={p.id}>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>{p.nome}</td>
                <td>{p.tipo}</td>
                <td>
                  <span className={PROV_STATUS_BADGE[p.status] || 'badge'}>
                    {PROV_STATUS_LABELS[p.status] || p.status}
                  </span>
                </td>
                <td>
                  <Link
                    to={`/ops/provedores/${p.id}`}
                    style={{ fontSize: 'var(--text-xs)', color: 'var(--navy-mid)' }}
                  >
                    Ver →
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
