import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function ProviderDashboardPage() {
  const [user, setUser] = useState(null)
  const [homologStatus, setHomologStatus] = useState('em_homologacao')

  useEffect(() => {
    const stored = localStorage.getItem('oye_provider_user')
    if (stored) {
      try {
        const parsed = JSON.parse(stored)
        setUser(parsed)
        if (parsed.homologationStatus) {
          setHomologStatus(parsed.homologationStatus)
        }
      } catch {}
    }
    const status = localStorage.getItem('oye_provider_homolog_status')
    if (status) setHomologStatus(status)
  }, [])

  const name = user?.name || user?.nome || 'Provedor'
  const isHomologated = homologStatus === 'aprovado'

  const HOMOLOG_BADGE = {
    aprovado: 'badge badge-positive',
    em_homologacao: 'badge badge-attention',
    em_analise: 'badge badge-attention',
    reprovado: 'badge',
  }

  const HOMOLOG_LABELS = {
    aprovado: 'Homologado',
    em_homologacao: 'Em homologação',
    em_analise: 'Em análise',
    reprovado: 'Reprovado',
  }

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Área do provedor</p>
        <h1>Bem-vindo(a), {name}</h1>
        <p>Gerencie sua presença na plataforma Oyê.</p>
      </div>

      {/* Homologation status card */}
      <div
        style={{
          background: 'var(--white)',
          border: 'var(--border)',
          borderRadius: '2px',
          padding: 'var(--space-6)',
          marginBottom: 'var(--space-6)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          gap: 'var(--space-4)',
          flexWrap: 'wrap',
        }}
      >
        <div>
          <p className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Status de homologação</p>
          <span className={HOMOLOG_BADGE[homologStatus] || 'badge'}>
            {HOMOLOG_LABELS[homologStatus] || homologStatus}
          </span>
        </div>
        <Link to="/provedor/homologacao" className="btn btn-secondary" style={{ fontSize: 'var(--text-sm)' }}>
          Ver detalhes da homologação
        </Link>
      </div>

      {/* Info box if not homologated */}
      {!isHomologated && (
        <div
          style={{
            background: 'var(--paper-2)',
            border: 'var(--border)',
            borderRadius: '2px',
            borderLeft: '4px solid var(--navy-mid)',
            padding: 'var(--space-5)',
            marginBottom: 'var(--space-6)',
          }}
        >
          <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--ink)', marginBottom: 'var(--space-2)' }}>
            Candidatura em análise
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: '1.7' }}>
            Sua candidatura está em análise. A equipe Oyê entrará em contato em até 5 dias úteis para dar continuidade ao processo de homologação.
          </p>
        </div>
      )}

      {/* Quick stats */}
      <div className="ops-metrics-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
        <div className="ops-metric-card">
          <div className="ops-metric-card__value">0</div>
          <div className="ops-metric-card__label">Oportunidades recebidas</div>
        </div>
        <div className="ops-metric-card">
          <div className="ops-metric-card__value">0</div>
          <div className="ops-metric-card__label">Propostas enviadas</div>
        </div>
        <div className="ops-metric-card">
          <div className="ops-metric-card__value">0</div>
          <div className="ops-metric-card__label">Projetos ativos</div>
        </div>
      </div>

      {/* Navigation */}
      <div className="section-card">
        <div className="section-card__header">
          <h3 className="section-card__title">Área do provedor</h3>
        </div>
        <div className="section-card__body">
          <div className="ops-quick-actions">
            <Link to="/provedor/homologacao" className="btn btn-secondary">
              Minha homologação
            </Link>
            <Link to="/provedor/oportunidades" className={`btn ${isHomologated ? 'btn-primary' : 'btn-secondary'}`}>
              {isHomologated ? 'Ver oportunidades' : 'Oportunidades (bloqueado)'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
