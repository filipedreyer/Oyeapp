import { Link } from 'react-router-dom'

const WHY_ITEMS = [
  {
    num: '01',
    title: 'Demandas qualificadas',
    desc: 'Você não recebe leads frios. Cada demanda passa por triagem e diagnóstico antes de chegar a você — o problema já está estruturado.',
  },
  {
    num: '02',
    title: 'Contexto do problema',
    desc: 'Antes de decidir, você recebe um briefing detalhado da demanda. Só avança se fizer sentido para o seu perfil.',
  },
  {
    num: '03',
    title: 'Reputação acumulada',
    desc: 'Seus cases e resultados constroem seu perfil na plataforma. A reputação cresce com o tempo e abre novas oportunidades.',
  },
]

const PROCESS = [
  {
    num: '01',
    title: 'Candidatura',
    text: 'Preencha o formulário de candidatura com seu perfil, especialidades, cases e disponibilidade.',
  },
  {
    num: '02',
    title: 'Análise',
    text: 'A equipe Oyê avalia sua candidatura e verifica o alinhamento com o perfil de provedores da rede.',
  },
  {
    num: '03',
    title: 'Entrevista',
    text: 'Uma conversa de 30–60 minutos para entender sua metodologia, diferenciais e expectativas.',
  },
  {
    num: '04',
    title: 'Homologação',
    text: 'Aprovado, você passa a integrar a rede e começa a receber demandas qualificadas.',
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
    <>
      <div className="providers-hero">
        <span className="pub-eyebrow" style={{ color: 'rgba(255,255,255,0.48)' }}>Rede Oyê</span>
        <h1 className="providers-hero__title">Faça parte<br />da rede Oyê</h1>
        <p className="providers-hero__lead">
          Conecte-se com empresas que já têm seus problemas diagnosticados e estão prontas para contratar. Sem cold calling, sem leads genéricos.
        </p>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <Link to="/provedores/candidatura/novo" className="btn btn-primary btn-lg">
            Iniciar candidatura
          </Link>
          <Link to="/provedores/candidatura" className="btn btn-secondary btn-lg" style={{ borderColor: 'rgba(255,255,255,0.20)', color: 'var(--white)' }}>
            Saiba mais sobre o processo
          </Link>
        </div>
      </div>

      <section className="pub-section pub-section--white">
        <div className="container">
          <span className="pub-eyebrow">Quem pode se candidatar</span>
          <h2 className="pub-headline">A rede é aberta<br />a diversos perfis</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
            backgroundColor: 'var(--line)',
            border: '1px solid var(--line)',
            marginTop: '52px',
          }}>
            {WHO_CAN_APPLY.map(item => (
              <div key={item} style={{
                padding: '28px 32px',
                backgroundColor: 'var(--paper)',
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
              }}>
                <span style={{ width: '6px', height: '6px', backgroundColor: 'var(--copper)', flexShrink: 0, borderRadius: '50%' }} />
                <span style={{ fontSize: '0.9375rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ink)' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pub-section pub-section--paper">
        <div className="container">
          <span className="pub-eyebrow">Por que entrar na rede?</span>
          <h2 className="pub-headline">Um modelo diferente<br />de acesso a clientes</h2>
          <div className="thesis-grid" style={{ marginTop: '52px' }}>
            {WHY_ITEMS.map(item => (
              <div key={item.num} className="thesis-item">
                <span className="thesis-item__num">{item.num}</span>
                <div className="thesis-item__title">{item.title}</div>
                <p className="thesis-item__text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pub-section pub-section--paper2">
        <div className="container">
          <span className="pub-eyebrow">Como funciona</span>
          <h2 className="pub-headline">Processo de<br />homologação</h2>
          <div className="process-steps">
            {PROCESS.map(step => (
              <div key={step.num} className="process-step">
                <div className="process-step__num">{step.num}</div>
                <div className="process-step__title">{step.title}</div>
                <p className="process-step__text">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="final-cta">
        <h2 className="final-cta__headline">Pronto para começar?</h2>
        <p className="final-cta__sub">O formulário leva cerca de 20 minutos. Você pode salvar e retomar depois.</p>
        <Link to="/provedores/candidatura/novo" className="btn btn-white btn-xl">
          Iniciar candidatura
        </Link>
        <Link to="/contato" className="final-cta__link">Tenho dúvidas — falar com a equipe</Link>
      </div>
    </>
  )
}
