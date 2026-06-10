import { Link } from 'react-router-dom'

const mockProposals = [
  { id: 'prop-001', empresa: 'Vektor Tecnologia', provedor: 'Marina Fonseca', valor: 'R$ 80k–120k', status: 'aprovada', criadoEm: '2025-04-20' },
  { id: 'prop-002', empresa: 'LogFlex Transportes', provedor: 'Gustavo Almeida Filho', valor: 'R$ 150k–250k', status: 'em_negociacao', criadoEm: '2025-04-25' },
  { id: 'prop-003', empresa: 'Agilis Saúde Digital', provedor: 'Renata Costa Guerra', valor: 'R$ 80k–130k', status: 'aprovada', criadoEm: '2025-02-10' },
  { id: 'prop-004', empresa: 'Distribuidora Alcance', provedor: 'Paulo Drummond', valor: 'R$ 60k–100k', status: 'recusada', criadoEm: '2025-03-15' },
]

const STATUS_LABELS = {
  enviada: 'Enviada',
  em_negociacao: 'Em negociação',
  aprovada: 'Aprovada',
  recusada: 'Recusada',
  cancelada: 'Cancelada',
}

const STATUS_BADGE = {
  enviada: 'badge badge-attention',
  em_negociacao: 'badge badge-copper',
  aprovada: 'badge badge-positive',
  recusada: 'badge',
  cancelada: 'badge',
}

export default function OpsProposalsPage() {
  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Ops</p>
        <h1>Propostas</h1>
        <p>Gerencie as propostas entre clientes e provedores.</p>
      </div>

      <div className="section-card">
        <table className="ws-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Empresa</th>
              <th>Provedor</th>
              <th>Valor estimado</th>
              <th>Status</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            {mockProposals.map((p) => (
              <tr key={p.id}>
                <td style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)', fontFamily: 'monospace' }}>{p.id}</td>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>{p.empresa}</td>
                <td>{p.provedor}</td>
                <td style={{ color: 'var(--muted)' }}>{p.valor}</td>
                <td>
                  <span className={STATUS_BADGE[p.status] || 'badge'}>
                    {STATUS_LABELS[p.status] || p.status}
                  </span>
                </td>
                <td style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)' }}>{p.criadoEm}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
