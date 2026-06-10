import { useParams, Link } from 'react-router-dom'
import { mockProviders } from '../../data/mockProviders.js'
import { PROVIDER_TYPE_LABELS, AVAILABILITY_LABELS, PRICE_CATEGORY_LABELS } from '../../domain/providers.js'

function AvailabilityIndicator({ availability }) {
  const label = AVAILABILITY_LABELS[availability] || availability
  return (
    <div className="availability-indicator">
      <span className={`availability-dot ${availability}`} />
      <span className={`availability-text ${availability}`}>{label}</span>
    </div>
  )
}

export default function ConsultantProfilePage() {
  const { consultorSlug } = useParams()
  const provider = mockProviders.find(p => p.slug === consultorSlug)

  if (!provider) {
    return (
      <div className="container" style={{ padding: 'var(--space-16) var(--space-8)' }}>
        <p className="eyebrow">Não encontrado</p>
        <h1>Consultor não encontrado</h1>
        <p style={{ color: 'var(--muted)', marginTop: 'var(--space-4)' }}>
          Não encontramos um perfil com o identificador <strong>{consultorSlug}</strong>.
        </p>
        <div style={{ marginTop: 'var(--space-8)' }}>
          <Link to="/consultores" className="btn btn-secondary">
            ← Voltar ao diretório
          </Link>
        </div>
      </div>
    )
  }

  const typeLabel = PROVIDER_TYPE_LABELS[provider.type] || provider.type
  const priceLabel = PRICE_CATEGORY_LABELS[provider.priceCategory] || provider.priceCategory

  return (
    <div style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      <div className="container" style={{ padding: 'var(--space-10) var(--space-8)' }}>

        {/* Breadcrumb */}
        <div className="profile-breadcrumb">
          <Link to="/consultores">Consultores</Link>
          <span className="profile-breadcrumb-sep">›</span>
          <span>{provider.name}</span>
        </div>

        {/* Profile Header */}
        <div className="profile-header">
          <h1 className="profile-header-name">{provider.name}</h1>
          <div className="profile-header-meta">
            <span className="badge">{typeLabel}</span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>{provider.region}</span>
            <AvailabilityIndicator availability={provider.availability} />
          </div>
          {provider.bio && (
            <p style={{ fontSize: 'var(--text-base)', color: 'var(--ink-soft)', marginTop: 'var(--space-5)', lineHeight: 'var(--leading-relaxed)', maxWidth: 640 }}>
              {provider.bio}
            </p>
          )}
        </div>

        {/* Main layout */}
        <div className="profile-grid">

          {/* Main column */}
          <div>
            {/* Sectors */}
            <div className="profile-section">
              <div className="profile-section-title">Setores atendidos</div>
              <div className="profile-tags">
                {provider.sectors.map(s => (
                  <span key={s} className="sector-tag">{s}</span>
                ))}
              </div>
            </div>

            {/* Problem types */}
            <div className="profile-section">
              <div className="profile-section-title">Tipos de problema que resolve</div>
              <ul className="profile-list">
                {provider.problemTypes.map(pt => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            {provider.deliverables && provider.deliverables.length > 0 && (
              <div className="profile-section">
                <div className="profile-section-title">Entregáveis típicos</div>
                <ul className="profile-list">
                  {provider.deliverables.map(d => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Cases */}
            {provider.cases && provider.cases.length > 0 && (
              <div className="profile-section">
                <div className="profile-section-title">Cases</div>
                {provider.cases.map((c, i) => (
                  <div key={i} className="case-card">
                    <div className="case-card-title">{c.title}</div>
                    <div className="case-card-context">{c.context}</div>
                    <div className="case-card-outcome">→ {c.outcome}</div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <aside className="profile-sidebar">

            {/* Availability */}
            <div className="sidebar-block">
              <div className="sidebar-block-title">Disponibilidade</div>
              <AvailabilityIndicator availability={provider.availability} />
            </div>

            {/* Price */}
            <div className="sidebar-block">
              <div className="sidebar-block-title">Faixa de preço</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)' }}>
                <span className="badge">Categoria {provider.priceCategory}</span>
                <span style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>{priceLabel}</span>
              </div>
            </div>

            {/* Specialties */}
            <div className="sidebar-block">
              <div className="sidebar-block-title">Especialidades</div>
              <ul className="profile-list">
                {provider.specialties.map(s => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>

            {/* Fit CTA */}
            <div className="fit-cta-box">
              <div className="fit-cta-box-title">Avaliar fit para esta demanda</div>
              <p className="fit-cta-box-desc">
                O match depende do seu problema diagnosticado, não apenas da especialidade declarada.
              </p>
              <Link
                to={`/consultores/${provider.slug}/avaliar-fit`}
                className="btn btn-primary"
                style={{ width: '100%', textAlign: 'center', display: 'block' }}
              >
                Avaliar fit
              </Link>
              <Link
                to="/diagnostico/empresa/novo"
                className="fit-cta-box-secondary"
              >
                Iniciar diagnóstico
              </Link>
            </div>

          </aside>
        </div>
      </div>
    </div>
  )
}
