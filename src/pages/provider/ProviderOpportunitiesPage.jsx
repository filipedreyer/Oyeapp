import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const mockOpportunities = [
  {
    id: 'opp-001',
    titulo: 'Reestruturação financeira para empresa de tecnologia',
    setor: 'Tecnologia',
    orcamento: 'R$ 80.000 – R$ 120.000',
    prazo: '3 meses',
    problemTypes: ['Finanças e controle', 'Estratégia e crescimento'],
    criadoEm: '2025-06-05',
    match: 'Alto',
  },
  {
    id: 'opp-002',
    titulo: 'Transformação digital da área de vendas e CRM',
    setor: 'Varejo',
    orcamento: 'R$ 60.000 – R$ 100.000',
    prazo: '4 meses',
    problemTypes: ['Marketing e vendas', 'Tecnologia e sistemas'],
    criadoEm: '2025-06-04',
    match: 'Médio',
  },
  {
    id: 'opp-003',
    titulo: 'Estruturação de RH e cultura organizacional',
    setor: 'Saúde',
    orcamento: 'R$ 80.000 – R$ 130.000',
    prazo: '5 meses',
    problemTypes: ['Pessoas e cultura'],
    criadoEm: '2025-06-01',
    match: 'Alto',
  },
]

const MATCH_BADGE = {
  Alto: 'badge badge-positive',
  Médio: 'badge badge-attention',
  Baixo: 'badge',
}

export default function ProviderOpportunitiesPage() {
  const [homologStatus, setHomologStatus] = useState('em_homologacao')

  useEffect(() => {
    const stored = localStorage.getItem('oye_provider_homolog_status')
    if (stored) setHomologStatus(stored)
  }, [])

  const isHomologated = homologStatus === 'aprovado'

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Provedor</p>
        <h1>Oportunidades</h1>
        <p>Demandas disponíveis que se encaixam no seu perfil.</p>
      </div>

      {!isHomologated ? (
        /* Locked state */
        <div
          style={{
            background: 'var(--white)',
            border: 'var(--border)',
            borderRadius: '2px',
            padding: 'var(--space-12)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              background: 'var(--paper)',
              border: 'var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto var(--space-4)',
              fontSize: '24px',
            }}
          >
            ⊘
          </div>
          <p className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Acesso bloqueado</p>
          <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>
            Oportunidades disponíveis após homologação
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 'var(--text-sm)', maxWidth: '420px', margin: '0 auto var(--space-6)', lineHeight: '1.7' }}>
            Após a conclusão do processo de homologação, você terá acesso às oportunidades que se encaixam no seu perfil de especialidade.
          </p>
          <Link to="/provedor/homologacao" className="btn btn-primary">
            Ver status da homologação
          </Link>
        </div>
      ) : (
        /* Opportunities list */
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {mockOpportunities.map((opp) => (
            <div
              key={opp.id}
              className="section-card"
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div className="section-card__body">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-3)', marginBottom: 'var(--space-3)' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, color: 'var(--ink)', marginBottom: 'var(--space-2)' }}>
                      {opp.titulo}
                    </h3>
                    <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap', marginBottom: 'var(--space-2)' }}>
                      <span className="badge">{opp.setor}</span>
                      {opp.problemTypes.map((pt) => (
                        <span key={pt} className="badge badge-copper">{pt}</span>
                      ))}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ marginBottom: 'var(--space-1)' }}>
                      <span className={MATCH_BADGE[opp.match] || 'badge'}>Match {opp.match}</span>
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>{opp.criadoEm}</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-6)', marginBottom: 'var(--space-4)' }}>
                  <div>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginBottom: 'var(--space-1)' }}>Orçamento estimado</p>
                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--ink)' }}>{opp.orcamento}</p>
                  </div>
                  <div>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginBottom: 'var(--space-1)' }}>Prazo</p>
                    <p style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--ink)' }}>{opp.prazo}</p>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
                  <button className="btn btn-primary" style={{ fontSize: 'var(--text-sm)' }}>
                    Demonstrar interesse
                  </button>
                  <button className="btn btn-secondary" style={{ fontSize: 'var(--text-sm)' }}>
                    Passar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
