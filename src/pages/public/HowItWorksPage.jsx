import { Link } from 'react-router-dom'

const STEPS = [
  {
    num: '01',
    label: 'Diagnóstico',
    title: 'Você descreve o problema — nós o estruturamos',
    text: 'Você responde um formulário guiado de 15 minutos. A equipe Oyê transforma as respostas em um diagnóstico estruturado: definição precisa do problema, contexto, urgência e critérios de sucesso.',
    time: '5–10 dias úteis',
  },
  {
    num: '02',
    label: 'Rota',
    title: 'Definimos o tipo de especialização que você precisa',
    text: 'Com base no diagnóstico, identificamos o perfil de especialista mais adequado — área de atuação, tipo de entrega, prazo e porte de projeto recomendado.',
    time: '2–3 dias úteis',
  },
  {
    num: '03',
    label: 'Seleção',
    title: 'Indicamos especialistas com fit real',
    text: 'Apresentamos uma lista de consultores e especialistas da rede Oyê selecionados para o seu caso específico — com perfis completos, histórico de projetos e disponibilidade.',
    time: '3–5 dias úteis',
  },
  {
    num: '04',
    label: 'Contratação',
    title: 'Você decide com critérios claros',
    text: 'Você recebe apoio para análise das propostas e tomada de decisão. A relação contratual é direta entre você e o especialista escolhido.',
    time: 'A seu critério',
  },
]

const FAQS = [
  {
    q: 'O diagnóstico tem algum custo?',
    a: 'O preenchimento do formulário e a triagem inicial são gratuitos. O diagnóstico completo, realizado pela equipe Oyê, pode ter custo dependendo da complexidade do caso.',
  },
  {
    q: 'Quanto tempo leva o processo completo?',
    a: 'Do envio do diagnóstico até a lista de especialistas, o prazo estimado é de 10 a 20 dias úteis. Casos urgentes podem ter tratamento prioritário.',
  },
  {
    q: 'A Oyê participa da execução do projeto?',
    a: 'Não. A Oyê atua no diagnóstico e na indicação. A relação contratual e a execução do projeto são diretas entre a empresa e o especialista contratado.',
  },
  {
    q: 'E se o especialista indicado não atender às minhas expectativas?',
    a: 'Você pode solicitar a revisão da lista. Nosso objetivo é qualidade do fit, não volume de indicações.',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      {/* Hero */}
      <section className="pub-section pub-section--white" style={{ padding: 'clamp(72px,9vw,128px) var(--section-h)' }}>
        <span className="pub-eyebrow">Como funciona</span>
        <h1 className="pub-headline" style={{ maxWidth: 720 }}>
          Do problema ao especialista certo em 4 etapas.
        </h1>
        <p className="pub-lead">
          A Oyê não é um marketplace de consultoria. É um processo estruturado de diagnóstico
          que termina com a indicação dos especialistas com maior fit para o seu caso.
        </p>
      </section>

      {/* Steps */}
      <section className="pub-section pub-section--paper" style={{ padding: 0 }}>
        {STEPS.map((step, i) => (
          <div
            key={step.num}
            style={{
              display: 'grid',
              gridTemplateColumns: 'clamp(72px,8vw,120px) 1fr auto',
              gap: 'clamp(28px,4vw,64px)',
              alignItems: 'start',
              padding: 'clamp(40px,5vw,72px) var(--section-h)',
              borderBottom: '1px solid var(--line)',
              background: i % 2 === 0 ? 'var(--white)' : 'var(--paper)',
            }}
          >
            <div style={{
              fontFamily: "'Aptos Display', 'Aptos', 'Segoe UI', sans-serif",
              fontSize: 'clamp(2.4rem,5vw,4rem)',
              fontWeight: 900,
              letterSpacing: '-0.07em',
              lineHeight: 1,
              color: 'var(--navy)',
              paddingTop: 4,
            }}>
              {step.num}
            </div>

            <div>
              <span style={{
                display: 'inline-block',
                fontSize: '0.6875rem',
                fontWeight: 800,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--navy-mid)',
                marginBottom: 16,
              }}>
                {step.label}
              </span>
              <h2 style={{
                fontSize: 'clamp(1.25rem,2.4vw,2rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.15,
                color: 'var(--ink)',
                marginBottom: 16,
                maxWidth: 560,
              }}>
                {step.title}
              </h2>
              <p style={{
                fontSize: 'var(--t-body-lg)',
                lineHeight: 'var(--lh-lead)',
                color: 'var(--muted)',
                maxWidth: 580,
                letterSpacing: 'var(--ls-sub)',
              }}>
                {step.text}
              </p>
            </div>

            <div style={{
              padding: '12px 20px',
              background: 'var(--blue-light)',
              borderLeft: '3px solid var(--navy-mid)',
              minWidth: 140,
            }}>
              <div style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--navy-mid)', marginBottom: 6 }}>
                Prazo
              </div>
              <div style={{ fontSize: '0.9375rem', fontWeight: 700, color: 'var(--navy)', letterSpacing: '-0.02em' }}>
                {step.time}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* FAQ */}
      <section className="pub-section pub-section--white">
        <span className="pub-eyebrow">Dúvidas frequentes</span>
        <h2 className="pub-headline">Perguntas sobre o processo</h2>

        <div style={{ marginTop: 56, display: 'flex', flexDirection: 'column', gap: 0 }}>
          {FAQS.map((faq, i) => (
            <div
              key={i}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1.4fr',
                gap: 48,
                padding: '36px 0',
                borderBottom: '1px solid var(--line)',
              }}
            >
              <h3 style={{
                fontSize: '1.1rem',
                fontWeight: 800,
                letterSpacing: '-0.03em',
                color: 'var(--ink)',
                lineHeight: 1.25,
              }}>
                {faq.q}
              </h3>
              <p style={{
                fontSize: 'var(--t-body-lg)',
                lineHeight: 'var(--lh-lead)',
                color: 'var(--muted)',
                letterSpacing: 'var(--ls-sub)',
              }}>
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <h2 className="final-cta__headline">Entendeu como funciona?<br />Agora é a sua vez.</h2>
        <p className="final-cta__sub">
          O diagnóstico leva 15 minutos. O processo, até 20 dias úteis.
        </p>
        <Link to="/diagnostico/empresa" className="btn btn-white btn-xl">
          Iniciar diagnóstico
        </Link>
        <Link to="/rede-de-especialistas" className="final-cta__link">
          Ver rede de especialistas →
        </Link>
      </section>
    </>
  )
}
