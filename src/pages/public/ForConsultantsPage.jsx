import { Link } from 'react-router-dom'

const WHY_JOIN = [
  {
    num: '01',
    title: 'Demandas pré-estruturadas',
    text: 'Você acessa oportunidades que já passaram por diagnóstico. O problema foi mapeado, o contexto documentado — você entra com clareza, não no escuro.',
  },
  {
    num: '02',
    title: 'Fit antes do contato',
    text: 'A Oyê filtra por aderência real: setor, tipo de problema, porte, urgência. Você só é indicado quando o match faz sentido para os dois lados.',
  },
  {
    num: '03',
    title: 'Sem marketplace de preço',
    text: 'Aqui a seleção é por qualidade e fit, não por quem cobra menos. Seu perfil é avaliado pela equipe Oyê antes de qualquer indicação.',
  },
  {
    num: '04',
    title: 'Relacionamento de longo prazo',
    text: 'Você faz parte de uma rede curada. Cada projeto bem executado fortalece seu histórico na plataforma e aumenta a qualidade dos próximos cases.',
  },
]

const CRITERIA = [
  'Consultores independentes com mais de 5 anos de experiência comprovada',
  'Consultoras boutique com foco em PME, scale-ups ou grandes empresas',
  'Especialistas setoriais com histórico relevante em seu segmento',
  'Profissionais com capacidade de entrega em projetos de 30 a 180 dias',
  'Organizações que já entregaram diagnóstico e implantação de forma integrada',
]

const PROCESS = [
  { num: '01', label: 'Candidatura', text: 'Preencha o formulário com seu perfil, histórico e áreas de atuação.' },
  { num: '02', label: 'Avaliação', text: 'A equipe Oyê analisa a candidatura em até 10 dias úteis.' },
  { num: '03', label: 'Entrevista', text: 'Se avançar, fazemos uma conversa para alinhar fit e expectativas.' },
  { num: '04', label: 'Rede ativa', text: 'Perfil publicado e apto a receber indicações qualificadas.' },
]

export default function ForConsultantsPage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pub-section pub-section--navy"
        style={{ padding: 'clamp(72px,9vw,128px) var(--section-h)' }}
      >
        <span className="pub-eyebrow">Para consultores</span>
        <h1
          className="pub-headline"
          style={{ color: 'var(--white)', maxWidth: 720 }}
        >
          Acesse demandas<br />pré-diagnosticadas.
        </h1>
        <p className="pub-lead" style={{ marginBottom: 44 }}>
          A Oyê conecta consultores e especialistas a empresas que já saben o que precisam.
          Sem licitações cegas. Sem competição por preço.
        </p>
        <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <Link to="/para-consultores/candidatura" className="btn btn-white btn-lg">
            Solicitar avaliação
          </Link>
          <Link to="/rede-de-especialistas" className="btn btn-ghost-white btn-lg" style={{ color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.28)' }}>
            Ver a rede
          </Link>
        </div>
      </section>

      {/* Por que fazer parte */}
      <section className="pub-section pub-section--white">
        <span className="pub-eyebrow">Por que fazer parte</span>
        <h2 className="pub-headline">Uma rede diferente de qualquer marketplace</h2>

        <div className="method-list" style={{ marginTop: 56 }}>
          {WHY_JOIN.map(item => (
            <div key={item.num} className="method-item">
              <div className="method-icon" style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.04em' }}>
                {item.num}
              </div>
              <div className="method-item__body">
                <h3 className="method-item__title">{item.title}</h3>
                <p className="method-item__text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quem pode participar */}
      <section className="pub-section pub-section--paper">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <span className="pub-eyebrow">Quem pode participar</span>
            <h2 className="pub-headline">Buscamos especialistas com experiência comprovada</h2>
            <p className="pub-lead">
              A rede Oyê é curada — não é aberta a todos. Avaliamos histórico,
              fit setorial e capacidade de entrega antes de qualquer indicação.
            </p>
          </div>
          <div style={{ paddingTop: 8 }}>
            {CRITERIA.map((c, i) => (
              <div
                key={i}
                style={{
                  padding: '20px 0',
                  borderBottom: '1px solid var(--line)',
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                  fontSize: 'var(--t-body-lg)',
                  letterSpacing: 'var(--ls-sub)',
                  lineHeight: 1.45,
                  color: 'var(--ink-soft)',
                }}
              >
                <span style={{ color: 'var(--green)', fontWeight: 700, flexShrink: 0 }}>—</span>
                {c}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo de entrada */}
      <section className="pub-section pub-section--white">
        <span className="pub-eyebrow">Como entrar</span>
        <h2 className="pub-headline">Processo de avaliação em 4 etapas</h2>
        <div className="process-steps" style={{ marginTop: 56 }}>
          {PROCESS.map(p => (
            <div key={p.num} className="process-step">
              <div className="process-step__num">{p.num}</div>
              <div className="process-step__title">{p.label}</div>
              <p className="process-step__text">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <h2 className="final-cta__headline">
          Faça parte da<br />rede Oyê.
        </h2>
        <p className="final-cta__sub">
          Avaliamos cada candidatura com atenção. O processo leva até 15 dias úteis.
        </p>
        <Link to="/para-consultores/candidatura" className="btn btn-white btn-xl">
          Solicitar avaliação
        </Link>
        <Link to="/rede-de-especialistas" className="final-cta__link">
          Ver especialistas já na rede →
        </Link>
      </section>
    </>
  )
}
