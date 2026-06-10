import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
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

const PRICE_LABELS = {
  A: 'Premium (A)',
  B: 'Intermediário (B)',
  C: 'Acessível (C)',
}

export default function OpsProviderDetailPage() {
  const { provedorId } = useParams()
  const [provider, setProvider] = useState(null)
  const [homologStatus, setHomologStatus] = useState('')
  const [rating, setRating] = useState(0)
  const [notes, setNotes] = useState('')

  useEffect(() => {
    const found = mockProviders.find((p) => p.id === provedorId)
    setProvider(found || null)
    if (found) {
      setHomologStatus(found.homologationStatus)
    }
    const savedRating = localStorage.getItem(`oye_prov_rating_${provedorId}`)
    if (savedRating) setRating(parseInt(savedRating, 10))
    const savedNotes = localStorage.getItem(`oye_prov_notes_${provedorId}`)
    if (savedNotes) setNotes(savedNotes)
  }, [provedorId])

  function saveNotes() {
    localStorage.setItem(`oye_prov_notes_${provedorId}`, notes)
    localStorage.setItem(`oye_prov_rating_${provedorId}`, String(rating))
    alert('Avaliação e notas salvas.')
  }

  if (!provider) {
    return (
      <div className="workspace-content">
        <div className="alert">
          Provedor não encontrado. <Link to="/ops/provedores">Voltar</Link>
        </div>
      </div>
    )
  }

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">
          <Link to="/ops/provedores" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Provedores</Link>
          {' / '}Detalhe
        </p>
        <h1 style={{ marginBottom: 'var(--space-2)' }}>{provider.name}</h1>
        <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
          <span className="badge">{TYPE_LABELS[provider.type] || provider.type}</span>
          <span className={HOMOLOGATION_BADGE[homologStatus] || 'badge'}>
            {HOMOLOGATION_LABELS[homologStatus] || homologStatus}
          </span>
          <span className="badge">{AVAILABILITY_LABELS[provider.availability]}</span>
        </div>
      </div>

      <div className="provider-detail-grid">
        {/* Left: profile */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Perfil</h3>
            </div>
            <div className="section-card__body">
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-soft)', lineHeight: '1.7', marginBottom: 'var(--space-4)' }}>
                {provider.bio}
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Setores</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)' }}>
                    {provider.sectors.map((s) => <span key={s} className="badge">{s}</span>)}
                  </div>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Especialidades</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)' }}>
                    {provider.specialties.map((s) => <span key={s} className="badge badge-copper">{s}</span>)}
                  </div>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Tipos de problema</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)' }}>
                    {provider.problemTypes.map((pt) => <span key={pt} className="badge">{pt}</span>)}
                  </div>
                </div>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Entregáveis</p>
                  <ul style={{ margin: 0, paddingLeft: 'var(--space-4)', fontSize: 'var(--text-xs)', color: 'var(--ink-soft)' }}>
                    {provider.deliverables.map((d) => <li key={d}>{d}</li>)}
                  </ul>
                </div>
              </div>
              <div style={{ marginTop: 'var(--space-4)', display: 'flex', gap: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
                <span>Região: <strong style={{ color: 'var(--ink)' }}>{provider.region}</strong></span>
                <span>Faixa de preço: <strong style={{ color: 'var(--ink)' }}>{PRICE_LABELS[provider.priceCategory] || provider.priceCategory}</strong></span>
              </div>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Cases e Evidências</h3>
            </div>
            <div className="section-card__body">
              {provider.cases.map((c, i) => (
                <div key={i} style={{ marginBottom: i < provider.cases.length - 1 ? 'var(--space-5)' : 0 }}>
                  <p style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--ink)', marginBottom: 'var(--space-1)' }}>{c.title}</p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginBottom: 'var(--space-2)' }}>{c.context}</p>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--positive)' }}><strong>Resultado:</strong> {c.outcome}</p>
                  {i < provider.cases.length - 1 && <hr style={{ border: 'none', borderTop: 'var(--border)', margin: 'var(--space-4) 0' }} />}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Status de Homologação</h3>
            </div>
            <div className="section-card__body">
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <span className={HOMOLOGATION_BADGE[homologStatus] || 'badge'}>
                  {HOMOLOGATION_LABELS[homologStatus] || homologStatus}
                </span>
              </div>
              <select
                value={homologStatus}
                onChange={(e) => setHomologStatus(e.target.value)}
                style={{ fontSize: 'var(--text-xs)', padding: '4px 8px', border: 'var(--border)', borderRadius: '2px', width: '100%' }}
              >
                {Object.entries(HOMOLOGATION_LABELS).map(([v, l]) => (
                  <option key={v} value={v}>{l}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Avaliação interna</h3>
            </div>
            <div className="section-card__body">
              <div className="star-rating" style={{ marginBottom: 'var(--space-2)' }}>
                {[1, 2, 3, 4, 5].map((n) => (
                  <button
                    key={n}
                    className={`star-btn${rating >= n ? ' star-btn--active' : ''}`}
                    onClick={() => setRating(n)}
                    type="button"
                  >
                    {rating >= n ? '★' : '☆'}
                  </button>
                ))}
              </div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                {rating > 0 ? `${rating} de 5 estrelas` : 'Sem avaliação'}
              </p>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Notas internas</h3>
            </div>
            <div className="section-card__body">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Notas internas sobre este provedor..."
                rows={4}
                style={{ width: '100%', fontSize: 'var(--text-sm)', padding: 'var(--space-2)', border: 'var(--border)', borderRadius: '2px', resize: 'vertical' }}
              />
              <button className="btn btn-secondary" style={{ marginTop: 'var(--space-3)', width: '100%' }} onClick={saveNotes}>
                Salvar avaliação e notas
              </button>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Ações</h3>
            </div>
            <div className="section-card__body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <button className="btn btn-secondary" disabled style={{ opacity: 0.5 }}>
                  Adicionar à shortlist (em breve)
                </button>
                <button
                  className="btn btn-secondary"
                  style={{ color: 'var(--attention)' }}
                  onClick={() => setHomologStatus('reprovado')}
                >
                  Reprovar provedor
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => setHomologStatus('suspenso')}
                >
                  Suspender provedor
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
