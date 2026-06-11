import { useParams, Link } from 'react-router-dom'

const NEXT_STEPS = [
  {
    label: 'Candidatura recebida',
    sub: 'Seus dados foram enviados para análise',
    active: true,
  },
  {
    label: 'Análise da candidatura',
    sub: 'A equipe Oyê avalia seu perfil — até 5 dias úteis',
    active: false,
  },
  {
    label: 'Entrevista',
    sub: 'Conversa de 30–60 min com a equipe Oyê',
    active: false,
  },
  {
    label: 'Avaliação',
    sub: 'Aprovação e acesso à rede de demandas',
    active: false,
  },
]

export default function ProviderApplicationStatus() {
  const { candidaturaId } = useParams()

  let candidatura = null
  let providerUser = null

  try {
    const candidaturas = JSON.parse(localStorage.getItem('oye_candidaturas') || '[]')
    candidatura = candidaturas.find(c => c.id === candidaturaId) || null
    const userStr = localStorage.getItem('oye_provider_user')
    if (userStr) providerUser = JSON.parse(userStr)
  } catch {
    candidatura = null
  }

  const isAuth = localStorage.getItem('oye_provider_auth') === 'true'

  if (!candidatura) {
    return (
      <div className="container" style={{ padding: 'var(--space-16) var(--space-8)' }}>
        <p className="eyebrow">Não encontrado</p>
        <h1>Candidatura não encontrada</h1>
        <p style={{ color: 'var(--muted)', marginTop: 'var(--space-4)' }}>
          Não encontramos uma candidatura com o ID <strong>{candidaturaId}</strong>.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
          <Link to="/provedores/candidatura/novo" className="btn btn-primary">Iniciar candidatura</Link>
          <Link to="/para-consultores" className="btn btn-ghost">Voltar</Link>
        </div>
      </div>
    )
  }

  return (
    <div style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      <div className="container" style={{ padding: 'var(--space-10) var(--space-8)', maxWidth: 800, margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: 'var(--space-10)', paddingBottom: 'var(--space-10)', borderBottom: 'var(--border)' }}>
          <div className="submitted-icon">✓</div>
          <p className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Candidatura enviada</p>
          <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 900, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-4)' }}>
            {candidatura.nomeOuEmpresa || 'Candidatura'} — Em análise
          </h1>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--muted)', lineHeight: 'var(--leading-relaxed)', maxWidth: 520, margin: '0 auto var(--space-2)' }}>
            Sua candidatura foi recebida. A equipe Oyê entrará em contato pelo email <strong>{candidatura.email}</strong> em até 5 dias úteis.
          </p>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted-2)' }}>
            ID da candidatura: <strong style={{ color: 'var(--ink)' }}>{candidatura.id}</strong>
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-10)' }}>

          {/* Timeline */}
          <div>
            <p className="section-label" style={{ marginBottom: 'var(--space-5)' }}>Próximos passos</p>
            <div className="timeline-steps" style={{ maxWidth: '100%' }}>
              {NEXT_STEPS.map((item, i) => (
                <div key={item.label} className="timeline-step">
                  <div className="timeline-step-indicator">
                    <div className={`timeline-step-dot${item.active ? ' active' : ''}`} />
                    {i < NEXT_STEPS.length - 1 && <div className="timeline-step-line" />}
                  </div>
                  <div className="timeline-step-content">
                    <div className="timeline-step-label">{item.label}</div>
                    <div className="timeline-step-sub">{item.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Summary */}
          <div>
            <p className="section-label" style={{ marginBottom: 'var(--space-5)' }}>Dados enviados</p>
            <div className="sidebar-block" style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {candidatura.nomeOuEmpresa && (
                <div className="review-field">
                  <span className="review-field-label">Nome</span>
                  <span className="review-field-value">{candidatura.nomeOuEmpresa}</span>
                </div>
              )}
              {candidatura.tipo && (
                <div className="review-field">
                  <span className="review-field-label">Tipo</span>
                  <span className="review-field-value">{candidatura.tipo}</span>
                </div>
              )}
              {candidatura.email && (
                <div className="review-field">
                  <span className="review-field-label">Email</span>
                  <span className="review-field-value">{candidatura.email}</span>
                </div>
              )}
              {candidatura.regiao && (
                <div className="review-field">
                  <span className="review-field-label">Região</span>
                  <span className="review-field-value">{candidatura.regiao}</span>
                </div>
              )}
              {candidatura.areasAtuacao && candidatura.areasAtuacao.length > 0 && (
                <div className="review-field">
                  <span className="review-field-label">Áreas</span>
                  <span className="review-field-value">{candidatura.areasAtuacao.join(', ')}</span>
                </div>
              )}
              {candidatura.disponibilidade && (
                <div className="review-field">
                  <span className="review-field-label">Disponibilidade</span>
                  <span className="review-field-value">{candidatura.disponibilidade}</span>
                </div>
              )}
            </div>

            {isAuth && (
              <div style={{ marginTop: 'var(--space-6)' }}>
                <Link to="/provedor/dashboard" className="btn btn-primary" style={{ width: '100%', textAlign: 'center', display: 'block' }}>
                  Acessar área do provedor
                </Link>
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: 'var(--space-10)', display: 'flex', gap: 'var(--space-4)', justifyContent: 'center' }}>
          <Link to="/para-consultores" className="btn btn-ghost">Voltar para provedores</Link>
          <Link to="/" className="btn btn-ghost">Ir para o início</Link>
        </div>

      </div>
    </div>
  )
}
