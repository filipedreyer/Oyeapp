import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mockDemands } from '../../data/mockDemands'
import { getStatusLabel, STATUS_LABELS } from '../../domain/demands'

const STATUS_BADGE = {
  rascunho: 'badge',
  enviada: 'badge badge-attention',
  aguardando_complemento: 'badge badge-attention',
  qualificada: 'badge badge-positive',
  em_diagnostico: 'badge badge-navy',
  diagnosticada: 'badge badge-positive',
  em_roteamento: 'badge badge-navy',
  em_selecao: 'badge badge-navy',
  em_contratacao: 'badge badge-navy',
  em_execucao: 'badge badge-positive',
  encerrada: 'badge',
  cancelada: 'badge',
  arquivada: 'badge',
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('pt-BR')
}

export default function OpsDemandsPage() {
  const [demands, setDemands] = useState(mockDemands)
  const [filterStatus, setFilterStatus] = useState('')
  const [search, setSearch] = useState('')

  const filtered = demands.filter((d) => {
    const matchesStatus = filterStatus ? d.status === filterStatus : true
    const matchesSearch = search
      ? d.title.toLowerCase().includes(search.toLowerCase()) ||
        d.sector.toLowerCase().includes(search.toLowerCase())
      : true
    return matchesStatus && matchesSearch
  })

  function changeStatus(id, newStatus) {
    setDemands((prev) => prev.map((d) => (d.id === id ? { ...d, status: newStatus } : d)))
  }

  const statusKeys = Object.keys(STATUS_LABELS)

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Ops</p>
        <h1>Fila de Demandas</h1>
        <p>Gerencie todas as demandas recebidas pela plataforma.</p>
      </div>

      <div className="filters-bar">
        <input
          type="text"
          placeholder="Buscar por empresa ou setor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ minWidth: '240px' }}
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">Todos os status</option>
          {statusKeys.map((k) => (
            <option key={k} value={k}>{STATUS_LABELS[k]}</option>
          ))}
        </select>
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
          {filtered.length} demanda{filtered.length !== 1 ? 's' : ''}
        </span>
      </div>

      <div className="section-card">
        <table className="ws-table">
          <thead>
            <tr>
              <th>Empresa / Título</th>
              <th>Setor</th>
              <th>Status</th>
              <th>Data</th>
              <th>Alterar status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((d) => (
              <tr key={d.id}>
                <td>
                  <div style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '2px' }}>
                    {d.title.length > 50 ? d.title.slice(0, 50) + '…' : d.title}
                  </div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>{d.companyId}</div>
                </td>
                <td>{d.sector}</td>
                <td>
                  <span className={STATUS_BADGE[d.status] || 'badge'}>
                    {getStatusLabel(d.status)}
                  </span>
                </td>
                <td style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)' }}>{formatDate(d.createdAt)}</td>
                <td>
                  <select
                    value={d.status}
                    onChange={(e) => changeStatus(d.id, e.target.value)}
                    style={{ fontSize: 'var(--text-xs)', padding: '4px 6px', border: 'var(--border)', borderRadius: '2px' }}
                  >
                    {statusKeys.map((k) => (
                      <option key={k} value={k}>{STATUS_LABELS[k]}</option>
                    ))}
                  </select>
                </td>
                <td>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                    <Link to={`/ops/demandas/${d.id}`} className="btn btn-secondary" style={{ fontSize: 'var(--text-xs)', padding: '4px 10px' }}>
                      Ver detalhe
                    </Link>
                    {d.status === 'qualificada' && (
                      <Link to={`/ops/diagnosticos/new`} className="btn btn-primary" style={{ fontSize: 'var(--text-xs)', padding: '4px 10px' }}>
                        Iniciar diagnóstico
                      </Link>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={6} style={{ textAlign: 'center', color: 'var(--muted)', padding: 'var(--space-8)' }}>
                  Nenhuma demanda encontrada.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
