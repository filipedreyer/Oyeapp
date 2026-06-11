import { useState } from 'react'
import { Link } from 'react-router-dom'
import { mockProviders } from '../../data/mockProviders.js'
import { PROVIDER_TYPE_LABELS, AVAILABILITY_LABELS, PRICE_CATEGORY_LABELS } from '../../domain/providers.js'

const SECTORS = ['Todos', 'Varejo', 'Indústria', 'Financeiro', 'Tecnologia', 'Agronegócio', 'Saúde', 'Outros']
const PROBLEM_TYPES = ['Todos', 'Estratégia', 'Operações', 'Finanças', 'Tecnologia', 'Pessoas', 'Marketing']
const AVAILABILITY_OPTIONS = [
  { value: '', label: 'Disponibilidade' },
  { value: 'disponivel', label: 'Disponível' },
  { value: 'parcial', label: 'Parcialmente disponível' },
  { value: 'indisponivel', label: 'Indisponível' },
]

const AVAIL_CONFIG = {
  disponivel:   { cls: 'availability-dot--available',   label: 'Disponível' },
  parcial:      { cls: 'availability-dot--partial',     label: 'Parcial' },
  indisponivel: { cls: 'availability-dot--unavailable', label: 'Indisponível' },
}

function DirectoryCard({ provider }) {
  const typeLabel = PROVIDER_TYPE_LABELS[provider.type] || provider.type
  const avail = AVAIL_CONFIG[provider.availability] || AVAIL_CONFIG.indisponivel

  return (
    <div className="directory-card">
      <div className="directory-card__photo">
        {provider.name.charAt(0)}
      </div>
      <div className="directory-card__body">
        <div className="directory-card__name">{provider.name}</div>
        <div className="directory-card__meta">{typeLabel} · {provider.region}</div>
        <div className="directory-card__tags">
          {provider.sectors.slice(0, 3).map(s => (
            <span key={s} className="sector-tag">{s}</span>
          ))}
          {provider.sectors.length > 3 && (
            <span className="sector-tag">+{provider.sectors.length - 3}</span>
          )}
        </div>
        <div className="directory-card__footer">
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <span className={`availability-dot ${avail.cls}`} />
            <span className="availability-label">{avail.label}</span>
          </div>
          <Link to={`/rede-de-especialistas/${provider.slug}`} className="btn btn-secondary btn-sm">
            Ver perfil →
          </Link>
        </div>
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
    if (search.trim()) {
      const q = search.toLowerCase()
      const match =
        p.name.toLowerCase().includes(q) ||
        p.specialties.some(s => s.toLowerCase().includes(q)) ||
        p.bio.toLowerCase().includes(q)
      if (!match) return false
    }
    if (sectorFilter && sectorFilter !== 'Todos') {
      if (!p.sectors.some(s => s.toLowerCase().includes(sectorFilter.toLowerCase()))) return false
    }
    if (problemFilter && problemFilter !== 'Todos') {
      if (!p.problemTypes.some(pt => pt.toLowerCase().includes(problemFilter.toLowerCase()))) return false
    }
    if (availabilityFilter) {
      if (p.availability !== availabilityFilter) return false
    }
    return true
  })

  return (
    <div>
      <div className="directory-header">
        <div className="directory-header__inner">
          <span className="pub-eyebrow">Rede Oyê</span>
          <h1 className="directory-title">Rede de<br />especialistas</h1>
          <p className="directory-lead">
            Consultores e especialistas avaliados pela equipe Oyê por expertise e resultados comprovados.
            Esta não é uma contratação direta por catálogo — a recomendação certa depende do diagnóstico.
          </p>
        </div>
      </div>

      {/* Mapa de cobertura por área */}
      <div style={{ padding: '0 var(--section-h)', borderBottom: '1px solid var(--line)' }}>
        <div style={{ maxWidth: 'var(--container-max)', margin: '0 auto', padding: '40px 0' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy-mid)', marginBottom: 16 }}>
            Áreas de cobertura
          </p>
          <div className="area-grid">
            {['Estratégia', 'Operações', 'Finanças', 'Pessoas', 'Jurídico', 'Tecnologia', 'Marketing', 'Dados'].map(area => (
              <button
                key={area}
                className="area-grid__item"
                onClick={() => { setProblemFilter(area !== 'Dados' && area !== 'Jurídico' && area !== 'Finanças' && area !== 'Pessoas' ? area : 'Todos') }}
              >
                {area}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="directory-controls">
        <input
          className="directory-search"
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Buscar por nome ou especialidade..."
        />
        <select
          className="directory-filter"
          value={sectorFilter}
          onChange={e => setSectorFilter(e.target.value)}
        >
          {SECTORS.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select
          className="directory-filter"
          value={problemFilter}
          onChange={e => setProblemFilter(e.target.value)}
        >
          {PROBLEM_TYPES.map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <select
          className="directory-filter"
          value={availabilityFilter}
          onChange={e => setAvailabilityFilter(e.target.value)}
        >
          {AVAILABILITY_OPTIONS.map(o => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
        {(search || sectorFilter !== 'Todos' || problemFilter !== 'Todos' || availabilityFilter) && (
          <button
            className="btn btn-ghost btn-sm"
            onClick={() => { setSearch(''); setSectorFilter('Todos'); setProblemFilter('Todos'); setAvailabilityFilter('') }}
          >
            Limpar
          </button>
        )}
      </div>

      <div className="directory-body">
        <p style={{ fontSize: '0.8125rem', color: 'var(--muted)', marginBottom: '28px', letterSpacing: '-0.01em' }}>
          {filtered.length} {filtered.length === 1 ? 'especialista encontrado' : 'especialistas encontrados'}
        </p>

        {filtered.length > 0 ? (
          <div className="directory-grid">
            {filtered.map(p => (
              <DirectoryCard key={p.id} provider={p} />
            ))}
          </div>
        ) : (
          <div className="directory-empty">
            <p style={{ marginBottom: '16px' }}>Nenhum especialista encontrado com os filtros selecionados.</p>
            <button
              className="btn btn-secondary btn-sm"
              onClick={() => { setSearch(''); setSectorFilter('Todos'); setProblemFilter('Todos'); setAvailabilityFilter('') }}
            >
              Limpar filtros
            </button>
          </div>
        )}

        <div className="directory-notice" style={{ marginTop: '32px' }}>
          A rede mostra apenas especialistas avaliados pela equipe Oyê. A indicação acontece após o diagnóstico — nunca antes.
        </div>

        <div className="providers-join" style={{ marginTop: '32px' }}>
          <div className="providers-join__text">
            <div className="providers-join__title">Você é consultor ou especialista?</div>
            <p className="providers-join__sub">Faça parte da rede Oyê e receba demandas pré-diagnosticadas.</p>
          </div>
          <Link to="/para-consultores" className="btn btn-primary">
            Saiba como participar →
          </Link>
        </div>
      </div>
    </div>
  )
}
