import { useParams, Link } from 'react-router-dom'

const NEXT_STEPS = [
  {
    label: 'Triagem',
    sub: '1–2 dias úteis',
    active: true,
  },
  {
    label: 'Qualificação',
    sub: 'A equipe Oyê valida a demanda e pode solicitar complemento',
    active: false,
  },
  {
    label: 'Diagnóstico',
    sub: '5–10 dias úteis após qualificação',
    active: false,
  },
  {
    label: 'Rota recomendada',
    sub: 'Apresentação de provedores e próximos passos',
    active: false,
  },
]

export default function CompanyDiagnosisSubmitted() {
  const { demandaId } = useParams()

  return (
    <div className="container" style={{ padding: 'var(--space-16) var(--space-8)', maxWidth: 640, margin: '0 auto' }}>
      <div className="submitted-icon">✓</div>

      <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)' }}>
        <p className="eyebrow">Demanda enviada</p>
        <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 900, letterSpacing: 'var(--tracking-tight)', margin: 'var(--space-2) 0 var(--space-4)' }}>
          Demanda enviada com sucesso
        </h1>
        <p className="lead-text" style={{ color: 'var(--muted)' }}>
          Seu diagnóstico foi recebido e está sendo triado pela equipe Oyê. Você acompanhará o andamento pelo painel.
        </p>
        {demandaId && (
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-2)', marginTop: 'var(--space-2)' }}>
            ID da demanda: <strong style={{ color: 'var(--ink)' }}>{demandaId}</strong>
          </p>
        )}
      </div>

      <div style={{ marginBottom: 'var(--space-10)' }}>
        <p className="section-label" style={{ marginBottom: 'var(--space-4)', textAlign: 'center' }}>
          Próximos passos
        </p>
        <div className="timeline-steps" style={{ maxWidth: '100%' }}>
          {NEXT_STEPS.map((item, i) => (
            <div key={item.label} className="timeline-step">
              <div className="timeline-step-indicator">
                <div className={`timeline-step-dot${item.active ? ' active' : ''}`} />
                {i < NEXT_STEPS.length - 1 && (
                  <div className="timeline-step-line" />
                )}
              </div>
              <div className="timeline-step-content">
                <div className="timeline-step-label">{item.label}</div>
                <div className="timeline-step-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', alignItems: 'center' }}>
        {demandaId && (
          <Link
            to={`/diagnostico/empresa/${demandaId}`}
            className="btn btn-primary btn-lg"
            style={{ width: '100%', textAlign: 'center' }}
          >
            Acompanhar demanda
          </Link>
        )}
        <Link
          to="/"
          className="btn btn-ghost"
          style={{ width: '100%', textAlign: 'center' }}
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  )
}
