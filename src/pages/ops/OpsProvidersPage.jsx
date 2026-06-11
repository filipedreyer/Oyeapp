import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mockProviders } from '../../data/mockProviders'

const HOMOLOGATION_LABELS = {
  aprovado: 'Aprovado',
  em_analise: 'Em análise',
  reprovado: 'Reprovado',
  suspenso: 'Suspenso',
}

const HOMOLOGATION_BADGE = {
  aprovado: 'badge badge-positive',
  em_analise: 'badge badge-attention',
  reprovado: 'badge',
  suspenso: 'badge',
}

const TYPE_LABELS = {
  individual: 'Individual',
  boutique: 'Boutique',
  empresa: 'Empresa',
}

const AVAILABILITY_LABELS = {
  disponivel: 'Disponível',
  parcial: 'Parcial',
  indisponivel: 'Indisponível',
}

const AVAILABILITY_BADGE = {
  disponivel: 'badge badge-positive',
  parcial: 'badge badge-attention',
  indisponivel: 'badge',
}

export default function OpsProvidersPage() {
  const [search, setSearch] = useState('')
  const [filterStatus, setFilterStatus] = useState('')
  const [filterType, setFilterType] = useState('')
  const [filterAvailability, setFilterAvailability] = useState('')

  const allSectors = [...new Set(mockProviders.flatMap((p) => p.sectors))].sort()

  const filtered = mockProviders.filter((p) => {
    if (search && !p.name.toLowerCase().includes(search.toLowerCase())) return false
    if (filterStatus && p.homologationStatus !== filterStatus) return false
    if (filterType && p.type !== filterType) return false
    if (filterAvailability && p.availability !== filterAvailability) return false
    return true
  })

  const total = mockProviders.length
  const approved = mockProviders.filter((p) => p.homologationStatus === 'aprovado').length
  const inAnalysis = mockProviders.filter((p) => p.homologationStatus === 'em_analise').length
  const rejected = mockProviders.filter((p) => p.homologationStatus === 'reprovado').length

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Ops</p>
        <h1>Base de Especialistas</h1>
        <p>Gerencie os especialistas avaliados e em análise na plataforma.</p>
      </div>

      {/* Summary stats */}
      <div className="ops-metrics-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)' }}>
        <div className="ops-metric-card">
          <div className="ops-metric-card__value">{total}</div>
          <div className="ops-metric-card__label">Total</div>
        </div>
        <div className="ops-metric-card">
          <div className="ops-metric-card__value">{approved}</div>
          <div className="ops-metric-card__label">Avaliados</div>
        </div>
        <div className="ops-metric-card">
          <div className="ops-metric-card__value">{inAnalysis}</div>
          <div className="ops-metric-card__label">Em análise</div>
        </div>
        <div className="ops-metric-card">
          <div className="ops-metric-card__value">{rejected}</div>
          <div className="ops-metric-card__label">Reprovados</div>
        </div>
      </div>

      {/* Filters */}
      <div className="filters-bar">
        <input
          type="text"
          placeholder="Buscar por nome..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{ minWidth: '200px' }}
        />
        <select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
          <option value="">Avaliação: Todos</option>
          {Object.entries(HOMOLOGATION_LABELS).map(([v, l]) => (
            <option key={v} value={v}>{l}</option>
          ))}
        </select>
        <select value={filterType} onChange={(e) => setFilterType(e.target.value)}>
          <option value="">Tipo: Todos</option>
          {Object.entries(TYPE_LABELS).map(([v, l]) => (
            <option key={v} value={v}>{l}</option>
          ))}
        </select>
        <select value={filterAvailability} onChange={(e) => setFilterAvailability(e.target.value)}>
          <option value="">Disponibilidade: Todas</option>
          {Object.entries(AVAILABILITY_LABELS).map(([v, l]) => (
            <option key={v} value={v}>{l}</option>
          ))}
        </select>
        <span style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
          {filtered.length} provedor{filtered.length !== 1 ? 'es' : ''}
        </span>
      </div>

      <div className="section-card">
        <table className="ws-table">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Tipo</th>
              <th>Setores</th>
              <th>Disponibilidade</th>
              <th>Avaliação</th>
              <th>Região</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id}>
                <td style={{ fontWeight: 600, color: 'var(--ink)' }}>{p.name}</td>
                <td>
                  <span className="badge">{TYPE_LABELS[p.type] || p.type}</span>
                </td>
                <td style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                  {p.sectors.join(', ')}
                </td>
                <td>
                  <span className={AVAILABILITY_BADGE[p.availability] || 'badge'}>
                    {AVAILABILITY_LABELS[p.availability] || p.availability}
                  </span>
                </td>
                <td>
                  <span className={HOMOLOGATION_BADGE[p.homologationStatus] || 'badge'}>
                    {HOMOLOGATION_LABELS[p.homologationStatus] || p.homologationStatus}
                  </span>
                </td>
                <td style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>{p.region}</td>
                <td>
                  <Link
                    to={`/ops/provedores/${p.id}`}
                    className="btn btn-secondary"
                    style={{ fontSize: 'var(--text-xs)', padding: '4px 10px' }}
                  >
                    Ver detalhes
                  </Link>
                </td>
              </tr>
            ))}
            {filtered.length === 0 && (
              <tr>
                <td colSpan={7} style={{ textAlign: 'center', color: 'var(--muted)', padding: 'var(--space-8)' }}>
                  Nenhum provedor encontrado.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
