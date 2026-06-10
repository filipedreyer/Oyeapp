import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mockProviders } from '../../data/mockProviders.js'
import { PROVIDER_TYPE_LABELS, AVAILABILITY_LABELS, PRICE_CATEGORY_LABELS } from '../../domain/providers.js'

const SECTORS = ['Todos', 'Varejo', 'Indústria', 'Financeiro', 'Tecnologia', 'Agronegócio', 'Saúde', 'Outros']
const PROBLEM_TYPES = ['Todos', 'Estratégia', 'Operações', 'Finanças', 'Tecnologia', 'Pessoas', 'Marketing']
const AVAILABILITY_OPTIONS = [
  { value: '', label: 'Todos' },
  { value: 'disponivel', label: 'Disponível' },
  { value: 'parcial', label: 'Parcialmente disponível' },
  { value: 'indisponivel', label: 'Indisponível' },
]

function AvailabilityIndicator({ availability }) {
  const label = AVAILABILITY_LABELS[availability] || availability
  return (
    <div className="availability-indicator">
      <span className={`availability-dot ${availability}`} />
      <span className={`availability-text ${availability}`}>{label}</span>
    </div>
  )
}

function ConsultantCard({ provider }) {
  const typeLabel = PROVIDER_TYPE_LABELS[provider.type] || provider.type
  const priceLabel = PRICE_CATEGORY_LABELS[provider.priceCategory] || provider.priceCategory

  return (
    <div className="consultant-card">
      <div>
        <div className="consultant-card-name">{provider.name}</div>
        <div className="consultant-card-type">{typeLabel}</div>
      </div>

      <div className="consultant-card-sectors">
        {provider.sectors.slice(0, 3).map(s => (
          <span key={s} className="sector-tag">{s}</span>
        ))}
        {provider.sectors.length > 3 && (
          <span className="sector-tag">+{provider.sectors.length - 3}</span>
        )}
      </div>

      <ul className="consultant-card-specialties">
        {provider.specialties.slice(0, 3).map(sp => (
          <li key={sp}>{sp}</li>
        ))}
      </ul>

      <div className="consultant-card-footer">
        <AvailabilityIndicator availability={provider.availability} />
        <div className="consultant-price-label">{priceLabel}</div>
        <Link to={`/consultores/${provider.slug}`} className="btn btn-secondary btn-sm">
          Ver perfil
        </Link>
      </div>
    </div>
  )
}

export default function ConsultantsDirectoryPage() {
  const [search, setSearch] = useState('')
  const [sectorFilter, setSectorFilter] = useState('Todos')
  const [problemFilter, setProblemFilter] = useState('Todos')
  const [availabilityFilter, setAvailabilityFilter] = useState('')

  const filtered = mockProviders.filter(p => {
    // Search
    if (search.trim()) {
      const q = search.toLowerCase()
      const match =
        p.name.toLowerCase().includes(q) ||
        p.specialties.some(s => s.toLowerCase().includes(q)) ||
        p.bio.toLowerCase().includes(q)
      if (!match) return false
    }
    // Sector filter
    if (sectorFilter && sectorFilter !== 'Todos') {
      if (!p.sectors.some(s => s.toLowerCase().includes(sectorFilter.toLowerCase()))) return false
    }
    // Problem type filter
    if (problemFilter && problemFilter !== 'Todos') {
      if (!p.problemTypes.some(pt => pt.toLowerCase().includes(problemFilter.toLowerCase()))) return false
    }
    // Availability
    if (availabilityFilter) {
      if (p.availability !== availabilityFilter) return false
    }
    return true
  })

  return (
    <div style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      <div className="container" style={{ padding: 'var(--space-16) var(--space-8)' }}>

        {/* Header */}
        <div style={{ marginBottom: 'var(--space-10)' }}>
          <p className="eyebrow">Rede Oyê</p>
          <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 900, letterSpacing: 'var(--tracking-tighter)', margin: 'var(--space-2) 0 var(--space-4)' }}>
            Diretório de Consultores
          </h1>
          <p className="lead-text" style={{ color: 'var(--muted)', maxWidth: 600 }}>
            Provedores homologados pela equipe Oyê, curados por expertise e resultados comprovados.
          </p>
        </div>

        {/* Alert */}
        <div className="alert alert-info" style={{ marginBottom: 'var(--space-8)' }}>
          <strong>Acesso curado.</strong> Estes consultores são selecionados e homologados pela equipe Oyê. A contratação direta não está disponível — ela acontece após o diagnóstico e a definição de fit.
        </div>

        {/* Filters */}
        <div className="filter-bar">
          <div className="search-input-wrap filter-bar-group">
            <label className="filter-bar-label">Buscar</label>
            <input
              className="form-input"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Nome ou especialidade..."
            />
          </div>

          <div className="filter-bar-group">
            <label className="filter-bar-label">Setor</label>
            <select
              className="form-select"
              value={sectorFilter}
              onChange={e => setSectorFilter(e.target.value)}
            >
              {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="filter-bar-group">
            <label className="filter-bar-label">Tipo de problema</label>
            <select
              className="form-select"
              value={problemFilter}
              onChange={e => setProblemFilter(e.target.value)}
            >
              {PROBLEM_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
          </div>

          <div className="filter-bar-group">
            <label className="filter-bar-label">Disponibilidade</label>
            <select
              className="form-select"
              value={availabilityFilter}
              onChange={e => setAvailabilityFilter(e.target.value)}
            >
              {AVAILABILITY_OPTIONS.map(o => (
                <option key={o.value} value={o.value}>{o.label}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Results count */}
        <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', marginBottom: 'var(--space-4)' }}>
          {filtered.length} {filtered.length === 1 ? 'provedor encontrado' : 'provedores encontrados'}
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="directory-grid">
            {filtered.map(p => (
              <ConsultantCard key={p.id} provider={p} />
            ))}
          </div>
        ) : (
          <div style={{ padding: 'var(--space-16)', textAlign: 'center', border: 'var(--border)', background: 'var(--white)' }}>
            <p style={{ color: 'var(--muted)', fontSize: 'var(--text-base)' }}>
              Nenhum provedor encontrado com os filtros selecionados.
            </p>
            <button
              className="btn btn-ghost"
              style={{ marginTop: 'var(--space-4)' }}
              onClick={() => { setSearch(''); setSectorFilter('Todos'); setProblemFilter('Todos'); setAvailabilityFilter('') }}
            >
              Limpar filtros
            </button>
          </div>
        )}

        {/* Bottom note */}
        <div style={{ marginTop: 'var(--space-12)', padding: 'var(--space-6)', background: 'var(--sand)', fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: 'var(--leading-relaxed)' }}>
          O diretório mostra apenas provedores homologados pela equipe Oyê. A contratação acontece após o diagnóstico e a definição de fit.
        </div>

        {/* Provider CTA */}
        <div style={{ marginTop: 'var(--space-10)', padding: 'var(--space-8)', background: 'var(--white)', border: 'var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 'var(--space-6)', flexWrap: 'wrap' }}>
          <div>
            <p style={{ fontWeight: 700, fontSize: 'var(--text-md)', marginBottom: 'var(--space-2)' }}>
              Você é consultor ou provedor de solução?
            </p>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
              Faça parte da rede Oyê e receba demandas qualificadas.
            </p>
          </div>
          <Link to="/provedores" className="btn btn-secondary">
            Saiba como entrar
          </Link>
        </div>
      </div>
    </div>
  )
}
