import { useParams, Link } from 'react-router-dom'
import { mockProviders } from '../../data/mockProviders.js'
import { PROVIDER_TYPE_LABELS, AVAILABILITY_LABELS, PRICE_CATEGORY_LABELS } from '../../domain/providers.js'

const AVAIL_CONFIG = {
  disponivel:   { cls: 'availability-dot--available',   label: 'Disponível' },
  parcial:      { cls: 'availability-dot--partial',     label: 'Parcial' },
  indisponivel: { cls: 'availability-dot--unavailable', label: 'Indisponível' },
}

export default function ConsultantProfilePage() {
  const { consultorSlug } = useParams()
  const provider = mockProviders.find(p => p.slug === consultorSlug)

  if (!provider) {
    return (
      <div className="profile-page">
        <div className="profile-header">
          <div className="profile-header__breadcrumb">
            <Link to="/rede-de-especialistas">← Rede de especialistas</Link>
          </div>
          <h1 className="profile-header__name">Consultor não encontrado</h1>
          <p style={{ marginTop: '16px', color: 'var(--muted)' }}>
            Não encontramos um perfil com o identificador <strong>{consultorSlug}</strong>.
          </p>
          <div style={{ marginTop: '32px' }}>
            <Link to="/rede-de-especialistas" className="btn btn-secondary">← Rede de especialistas</Link>
          </div>
        </div>
      </div>
    )
  }

  const typeLabel = PROVIDER_TYPE_LABELS[provider.type] || provider.type
  const priceLabel = PRICE_CATEGORY_LABELS[provider.priceCategory] || provider.priceCategory
  const avail = AVAIL_CONFIG[provider.availability] || AVAIL_CONFIG.indisponivel

  return (
    <div className="profile-page">
      <div className="profile-header">
        <div className="profile-header__breadcrumb">
          <Link to="/rede-de-especialistas">Rede de especialistas</Link>
          {' › '}
          <span>{provider.name}</span>
        </div>
        <div className="profile-header__inner">
          <div>
            <div className="profile-header__photo">
              {provider.name.charAt(0)}
            </div>
            <h1 className="profile-header__name">{provider.name}</h1>
            <div className="profile-header__meta">
              <span className="badge">{typeLabel}</span>
              <span className="profile-header__region">{provider.region}</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span className={`availability-dot ${avail.cls}`} />
                <span className="availability-label">{avail.label}</span>
              </div>
            </div>
            {provider.bio && (
              <p className="profile-bio">{provider.bio}</p>
            )}
          </div>
        </div>
      </div>

      <div className="profile-body">
        <div className="profile-main">
          <div className="profile-section">
            <div className="profile-section__title">Setores atendidos</div>
            <div className="profile-tags">
              {provider.sectors.map(s => (
                <span key={s} className="sector-tag">{s}</span>
              ))}
            </div>
          </div>

          <div className="profile-section">
            <div className="profile-section__title">Tipos de problema que resolve</div>
            <ul className="profile-list">
              {provider.problemTypes.map(pt => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>

          {provider.deliverables && provider.deliverables.length > 0 && (
            <div className="profile-section">
              <div className="profile-section__title">Entregáveis típicos</div>
              <ul className="profile-list">
                {provider.deliverables.map(d => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
          )}

          {provider.cases && provider.cases.length > 0 && (
            <div className="profile-section">
              <div className="profile-section__title">Cases</div>
              {provider.cases.map((c, i) => (
                <div key={i} className="case-card">
                  <div className="case-card__title">{c.title}</div>
                  <span className="case-card__label">Contexto</span>
                  <div className="case-card__text">{c.context}</div>
                  <div className="case-card__outcome">→ {c.outcome}</div>
                </div>
              ))}
            </div>
          )}
        </div>

        <aside className="profile-sidebar">
          <div className="profile-info-card">
            <div className="profile-info-card__label">Disponibilidade</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '8px' }}>
              <span className={`availability-dot ${avail.cls}`} />
              <span style={{ fontSize: '0.9375rem', fontWeight: 600, color: 'var(--ink)' }}>{avail.label}</span>
            </div>
          </div>

          <div className="profile-info-card">
            <div className="profile-info-card__label">Faixa de preço</div>
            <div className="profile-info-card__value">
              <span className="badge">Categoria {provider.priceCategory}</span>
              <span style={{ marginLeft: '8px', fontSize: '0.875rem', color: 'var(--muted)' }}>{priceLabel}</span>
            </div>
          </div>

          <div className="profile-info-card">
            <div className="profile-info-card__label">Especialidades</div>
            <ul className="profile-list" style={{ marginTop: '12px' }}>
              {provider.specialties.map(s => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div className="fit-cta-box">
            <span className="fit-cta-box__eyebrow">Match por diagnóstico</span>
            <div className="fit-cta-box__title">Avaliar fit para esta demanda</div>
            <p className="fit-cta-box__text">
              O match depende do seu problema diagnosticado, não apenas da especialidade declarada.
            </p>
            <Link
              to={`/rede-de-especialistas/${provider.slug}/avaliar-fit`}
              className="btn btn-primary"
              style={{ width: '100%', textAlign: 'center', display: 'block' }}
            >
              Avaliar fit
            </Link>
            <Link to="/diagnostico/empresa/novo" className="fit-cta-box__secondary">
              Iniciar diagnóstico
            </Link>
          </div>
        </aside>
      </div>
    </div>
  )
}
