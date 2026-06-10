import { Link } from 'react-router-dom'

const WHY_ITEMS = [
  {
    title: 'Demandas qualificadas',
    desc: 'Você não recebe leads frios. Cada demanda passa por triagem e diagnóstico antes de chegar a você — o problema já está estruturado.',
  },
  {
    title: 'Contexto do problema',
    desc: 'Antes de decidir, você recebe um briefing detalhado da demanda. Só avança se fizer sentido para o seu perfil.',
  },
  {
    title: 'Reputação acumulada',
    desc: 'Seus cases e resultados constroem seu perfil na plataforma. A reputação cresce com o tempo e abre novas oportunidades.',
  },
]

const PROCESS_STEPS = [
  {
    num: '01',
    label: 'Candidatura',
    desc: 'Preencha o formulário de candidatura com seu perfil, especialidades, cases e disponibilidade.',
  },
  {
    num: '02',
    label: 'Análise',
    desc: 'A equipe Oyê avalia sua candidatura e verifica o alinhamento com o perfil de provedores da rede.',
  },
  {
    num: '03',
    label: 'Entrevista',
    desc: 'Uma conversa de 30–60 minutos para entender sua metodologia, diferenciais e expectativas.',
  },
  {
    num: '04',
    label: 'Homologação',
    desc: 'Aprovado, você passa a integrar a rede e começa a receber demandas qualificadas.',
  },
]

const WHO_CAN_APPLY = [
  'Consultores independentes',
  'Consultorias boutique',
  'Fornecedores de solução',
  'Startups com produto validado',
  'Pesquisadores e acadêmicos aplicados',
  'Empresas com solução especializada',
]

export default function ProvidersLandingPage() {
  return (
    <div style={{ background: 'var(--paper)', minHeight: '100vh' }}>

      {/* Hero */}
      <div className="providers-hero">
        <div className="container" style={{ padding: '0 var(--space-8)' }}>
          <p className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 'var(--space-4)' }}>Rede Oyê</p>
          <h1 className="providers-hero-title">Faça parte da rede Oyê</h1>
          <p className="providers-hero-lead">
            Conecte-se com empresas que já têm seus problemas diagnosticados e estão prontas para contratar. Sem cold calling, sem leads genéricos.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/provedores/candidatura/novo" className="btn btn-primary btn-lg">
              Iniciar candidatura
            </Link>
            <Link to="/provedores/candidatura" className="btn btn-ghost btn-lg" style={{ color: 'var(--white)', borderColor: 'rgba(255,255,255,0.3)' }}>
              Saiba mais sobre o processo
            </Link>
          </div>
        </div>
      </div>

      {/* Who can apply */}
      <div style={{ background: 'var(--white)', padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ padding: '0 var(--space-8)' }}>
          <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>Quem pode se candidatar</p>
          <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 900, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-8)' }}>
            A rede é aberta a diversos tipos de provedores
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-3)' }}>
            {WHO_CAN_APPLY.map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', padding: 'var(--space-4)', border: 'var(--border)', background: 'var(--paper-2)' }}>
                <span style={{ color: 'var(--positive)', fontWeight: 900, fontSize: 'var(--text-md)' }}>✓</span>
                <span style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--ink)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why join */}
      <div style={{ padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ padding: '0 var(--space-8)' }}>
          <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>Por que entrar na rede?</p>
          <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 900, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-8)' }}>
            Um modelo diferente de acesso a clientes
          </h2>
          <div className="why-grid">
            {WHY_ITEMS.map(item => (
              <div key={item.title} className="why-card">
                <div className="why-card-title">{item.title}</div>
                <p className="why-card-desc">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Process */}
      <div style={{ background: 'var(--white)', padding: 'var(--space-16) 0' }}>
        <div className="container" style={{ padding: '0 var(--space-8)' }}>
          <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>Como funciona</p>
          <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 900, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-8)' }}>
            Processo de homologação
          </h2>
          <div className="process-steps">
            {PROCESS_STEPS.map(step => (
              <div key={step.num} className="process-step">
                <div className="process-step-num">{step.num}</div>
                <div className="process-step-label">{step.label}</div>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div style={{ padding: 'var(--space-20) 0', textAlign: 'center', background: 'var(--navy-strong)', color: 'var(--white)' }}>
        <div className="container" style={{ padding: '0 var(--space-8)' }}>
          <h2 style={{ fontSize: 'var(--text-2xl)', fontWeight: 900, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-4)' }}>
            Pronto para começar?
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'rgba(255,255,255,0.7)', marginBottom: 'var(--space-8)', maxWidth: 480, margin: '0 auto var(--space-8)' }}>
            O formulário leva cerca de 20 minutos. Você pode salvar e retomar depois.
          </p>
          <Link to="/provedores/candidatura/novo" className="btn btn-primary btn-lg">
            Iniciar candidatura
          </Link>
        </div>
      </div>

    </div>
  )
}
