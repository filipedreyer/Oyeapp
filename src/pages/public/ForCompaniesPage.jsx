import { Link } from 'react-router-dom'

const CHALLENGES = [
  {
    num: '01',
    title: 'Você sente que o problema mudou no meio do caminho',
    text: 'A consultoria começa, mas o diagnóstico que sustentava o escopo estava errado. Resultado: retrabalho, custo e frustração dos dois lados.',
  },
  {
    num: '02',
    title: 'Você contratou a solução errada para o problema certo',
    text: 'O problema era real, mas o especialista não tinha fit com o estágio, o setor ou o momento da empresa. A entrega foi boa — mas para outro contexto.',
  },
  {
    num: '03',
    title: 'Você não sabe como avaliar propostas diferentes',
    text: 'Três consultores, três abordagens, sem critério claro de comparação. A decisão acaba sendo por preço ou por confiança pessoal.',
  },
]

const DELIVERABLES = [
  {
    num: '01',
    title: 'Diagnóstico estruturado',
    text: 'Um documento com a definição precisa do seu problema, contexto, urgência e critérios de sucesso — elaborado com metodologia, não com achismos.',
  },
  {
    num: '02',
    title: 'Rota recomendada',
    text: 'Uma indicação da abordagem mais adequada para o seu caso — tipo de especialista, perfil de entrega e estimativa de prazo.',
  },
  {
    num: '03',
    title: 'Lista de especialistas com fit',
    text: 'Uma seleção de consultores e especialistas da rede Oyê avaliados para o seu contexto específico, com perfis completos para análise.',
  },
  {
    num: '04',
    title: 'Acompanhamento da seleção',
    text: 'Suporte no processo de análise de propostas, critérios de comparação e decisão de contratação.',
  },
]

const WHO = [
  'Empresas que sentem que o diagnóstico interno não é suficiente',
  'Líderes que querem estruturar melhor o problema antes de contratar',
  'Times que já contrataram consultoria e não tiveram o resultado esperado',
  'Empresas em momento de transição — crescimento, reestruturação ou pivô',
  'Organizações que precisam de um segundo olhar externo e qualificado',
]

export default function ForCompaniesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pub-section pub-section--white" style={{ padding: 'clamp(72px,9vw,128px) var(--section-h)' }}>
        <span className="pub-eyebrow">Para empresas</span>
        <h1 className="pub-headline" style={{ maxWidth: 760 }}>
          Antes de contratar uma solução,<br />entenda o problema.
        </h1>
        <p className="pub-lead" style={{ marginBottom: 44 }}>
          A Oyê estrutura o diagnóstico estratégico da sua empresa e indica os especialistas
          certos — com fit real para o seu caso.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link to="/diagnostico/empresa" className="btn btn-primary btn-lg">
            Iniciar diagnóstico
          </Link>
          <Link to="/como-funciona" className="btn btn-ghost btn-lg">
            Ver como funciona
          </Link>
        </div>
      </section>

      {/* O problema que resolvemos */}
      <section className="pub-section pub-section--paper">
        <div style={{ maxWidth: 680, marginBottom: 'clamp(48px,6vw,80px)' }}>
          <span className="pub-eyebrow">O problema</span>
          <h2 className="pub-headline">Por que tantas contratações de consultoria não funcionam?</h2>
        </div>
        <div className="thesis-grid">
          {CHALLENGES.map(c => (
            <div key={c.num} className="thesis-item">
              <span className="thesis-item__num">{c.num}</span>
              <h3 className="thesis-item__title">{c.title}</h3>
              <p className="thesis-item__text">{c.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* O que a Oyê entrega */}
      <section className="pub-section pub-section--white">
        <span className="pub-eyebrow">O que você recebe</span>
        <h2 className="pub-headline">Do diagnóstico à decisão de contratação</h2>

        <div className="method-list" style={{ marginTop: 56 }}>
          {DELIVERABLES.map((d, i) => (
            <div key={d.num} className="method-item">
              <div className="method-icon" style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.04em' }}>
                {d.num}
              </div>
              <div className="method-item__body">
                <h3 className="method-item__title">{d.title}</h3>
                <p className="method-item__text">{d.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Para quem é */}
      <section className="pub-section pub-section--navy">
        <span className="pub-eyebrow">Para quem é</span>
        <h2 className="pub-headline">A Oyê foi feita para quem quer decidir melhor</h2>
        <div style={{ marginTop: 48, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {WHO.map((item, i) => (
            <div
              key={i}
              style={{
                padding: '22px 0',
                borderBottom: '1px solid rgba(255,255,255,0.12)',
                display: 'flex',
                alignItems: 'flex-start',
                gap: 20,
                color: 'rgba(255,255,255,0.82)',
                fontSize: 'var(--t-body-lg)',
                letterSpacing: 'var(--ls-sub)',
                lineHeight: 1.45,
              }}
            >
              <span style={{ color: 'var(--green-mid)', fontWeight: 700, flexShrink: 0 }}>—</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <h2 className="final-cta__headline">
          Pronto para estruturar<br />o problema certo?
        </h2>
        <p className="final-cta__sub">
          O diagnóstico leva menos de 15 minutos. A clareza que ele traz dura muito mais.
        </p>
        <Link to="/diagnostico/empresa" className="btn btn-white btn-xl">
          Iniciar diagnóstico gratuito
        </Link>
        <Link to="/como-funciona" className="final-cta__link">
          Ver como funciona →
        </Link>
      </section>
    </>
  )
}
