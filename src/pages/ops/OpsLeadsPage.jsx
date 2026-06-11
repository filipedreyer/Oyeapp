import { useState } from 'react'

const INITIAL_LEADS = [
  { id: 'lead-001', empresa: 'Supermercados Horizonte', contato: 'Ricardo Mendes', email: 'r.mendes@horizonte.com.br', origem: 'Site', status: 'novo', criadoEm: '2025-06-08' },
  { id: 'lead-002', empresa: 'LogFlex Transportes', contato: 'Fernanda Azevedo', email: 'fazevedo@logflex.com', origem: 'Indicação', status: 'em_contato', criadoEm: '2025-06-07' },
  { id: 'lead-003', empresa: 'MedTech Soluções', contato: 'Paulo Saldanha', email: 'psaldanha@medtech.io', origem: 'Evento', status: 'qualificado', criadoEm: '2025-06-05' },
  { id: 'lead-004', empresa: 'Varejo Primo', contato: 'Ana Lima', email: 'alima@varejo.com.br', origem: 'Site', status: 'convertido_em_cliente', criadoEm: '2025-06-01' },
]

const LEAD_STATUS_LABELS = {
  novo: 'Novo',
  em_contato: 'Em contato',
  qualificado: 'Qualificado',
  descartado: 'Descartado',
  convertido_em_cliente: 'Convertido',
}

const LEAD_STATUS_BADGE = {
  novo: 'badge badge-attention',
  em_contato: 'badge badge-navy',
  qualificado: 'badge badge-positive',
  descartado: 'badge',
  convertido_em_cliente: 'badge badge-positive',
}

export default function OpsLeadsPage() {
  const [leads, setLeads] = useState(INITIAL_LEADS)
  const [filterStatus, setFilterStatus] = useState('')

  const filtered = filterStatus ? leads.filter((l) => l.status === filterStatus) : leads

  function changeStatus(id, newStatus) {
    setLeads((prev) => prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l)))
  }

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Ops</p>
        <h1>Fila de Leads</h1>
        <p>Gerencie e qualifique os leads recebidos pela plataforma.</p>
      </div>

      <div className="filters-bar">
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">Todos os status</option>
          {Object.entries(LEAD_STATUS_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
          {filtered.length} {filtered.length === 1 ? 'lead' : 'leads'}
        </span>
      </div>

      <div className="section-card">
        <table className="ws-table">
          <thead>
            <tr>
              <th>Empresa</th>
              <th>Contato</th>
              <th>E-mail</th>
              <th>Origem</th>
              <th>Status</th>
              <th>Data</th>
              <th>Alterar status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((lead) => (
              <tr key={lead.id}>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>{lead.empresa}</td>
                <td>{lead.contato}</td>
                <td style={{ color: 'var(--muted)' }}>{lead.email}</td>
                <td>{lead.origem}</td>
                <td>
                  <span className={LEAD_STATUS_BADGE[lead.status] || 'badge'}>
                    {LEAD_STATUS_LABELS[lead.status] || lead.status}
                  </span>
                </td>
                <td style={{ color: 'var(--muted)' }}>{lead.criadoEm}</td>
                <td>
                  <select
                    value={lead.status}
                    onChange={(e) => changeStatus(lead.id, e.target.value)}
                    style={{ fontSize: 'var(--text-xs)', padding: '4px 6px', border: 'var(--border)', borderRadius: '2px' }}
                  >
                    {Object.entries(LEAD_STATUS_LABELS).map(([value, label]) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', color: 'var(--muted)', padding: 'var(--space-8)' }}>
                  Nenhum lead encontrado para este filtro.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
