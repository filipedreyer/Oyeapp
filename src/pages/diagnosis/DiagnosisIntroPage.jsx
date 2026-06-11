import { Link } from 'react-router-dom'

const TIMELINE = [
  { n: '01', title: 'Intake', text: 'Formulário estruturado — ~15 min' },
  { n: '02', title: 'Triagem', text: '2–3 dias úteis com a equipe Oyê' },
  { n: '03', title: 'Diagnóstico', text: 'Relatório entregue por email' },
  { n: '04', title: 'Rota', text: 'Shortlist de provedores ou rota alternativa' },
  { n: '05', title: 'Solução', text: 'Início do projeto com acompanhamento Oyê' },
]

const FAQ = [
  {
    q: 'Meus dados são confidenciais?',
    a: 'Sim. Todas as informações inseridas no diagnóstico são tratadas com sigilo absoluto. Nenhum dado é compartilhado com terceiros sem sua autorização explícita.',
  },
  {
    q: 'Preciso saber a solução antes de iniciar?',
    a: 'Não. O diagnóstico foi desenhado para quem ainda não sabe qual é a solução — e inclusive para quem acha que sabe, mas precisa validar. Você só precisa saber que existe um problema.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'O formulário de intake leva aproximadamente 15 minutos. Após o envio, a equipe Oyê realiza a triagem em até 3 dias úteis e entrega o diagnóstico por email.',
  },
]

export default function DiagnosisIntroPage() {
  return (
    <>
      <section className="diag-hero">
        <span className="pub-eyebrow">Diagnóstico de Empresa</span>
        <h1 className="diag-hero__title">Antes da solução,<br />o problema.</h1>
        <p className="diag-hero__lead">
          O diagnóstico Oyê captura a natureza real da sua dor: frequência, impacto, histórico
          de tentativas e contexto de mercado. Com isso, a plataforma estrutura uma rota de
          solução precisa — não uma recomendação genérica.
        </p>
      </section>

      <section className="pub-section pub-section--white">
        <div className="container">
          <span className="pub-eyebrow">Como você está chegando?</span>
          <h2 className="pub-headline">Escolha o ponto de entrada</h2>
          <div className="entry-cards">
            <div className="entry-card">
              <span className="entry-card__num">Hipótese formada</span>
              <div className="entry-card__title">Sei que tenho um problema e tenho uma hipótese</div>
              <p className="entry-card__text">
                Você já identificou o sintoma e tem uma ideia do que pode estar causando. O
                diagnóstico vai validar, refinar e estruturar esse entendimento para garantir
                que a solução seja aplicada no lugar certo.
              </p>
              <Link to="/diagnostico/empresa/novo" className="entry-card__cta">
                Iniciar →
              </Link>
            </div>
            <div className="entry-card">
              <span className="entry-card__num">Dor difusa</span>
              <div className="entry-card__title">Tenho uma dor, mas não consigo nomeá-la</div>
              <p className="entry-card__text">
                Algo claramente não funciona, mas você não consegue articular o problema com
                precisão. O diagnóstico Oyê foi desenhado exatamente para esse momento — ele
                ajuda a transformar sintomas em problema nomeado.
              </p>
              <Link to="/diagnostico/empresa/novo" className="entry-card__cta">
                Iniciar →
              </Link>
            </div>
            <div className="entry-card">
              <span className="entry-card__num">Exploração preventiva</span>
              <div className="entry-card__title">Quero avaliar se existe um problema oculto</div>
              <p className="entry-card__text">
                A empresa vai bem, mas você quer garantir que não existe uma disfunção estrutural
                se desenvolvendo. O diagnóstico identifica padrões antes que se tornem crises.
              </p>
              <Link to="/diagnostico/empresa/novo" className="entry-card__cta">
                Iniciar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pub-section pub-section--paper">
        <div className="container">
          <span className="pub-eyebrow">O que acontece depois</span>
          <h2 className="pub-headline">Da entrada à solução</h2>
          <div className="diag-timeline">
            {TIMELINE.map(step => (
              <div key={step.n} className="diag-timeline-step">
                <div className="diag-timeline-step__num">{step.n}</div>
                <div className="diag-timeline-step__title">{step.title}</div>
                <div className="diag-timeline-step__text">{step.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pub-section pub-section--white">
        <div className="container" style={{ maxWidth: '720px' }}>
          <span className="pub-eyebrow">Perguntas frequentes</span>
          <h2 className="pub-headline">Antes de começar</h2>
          <div style={{ marginTop: '52px', display: 'flex', flexDirection: 'column', gap: '0', border: '1px solid var(--line)' }}>
            {FAQ.map((item, i) => (
              <div key={i} style={{
                padding: '32px 36px',
                borderBottom: i < FAQ.length - 1 ? '1px solid var(--line)' : 'none',
                backgroundColor: 'var(--white)',
              }}>
                <div style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '10px' }}>
                  {item.q}
                </div>
                <p style={{ fontSize: '0.9375rem', color: 'var(--muted)', lineHeight: 1.6, letterSpacing: '-0.01em', margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="final-cta">
        <h2 className="final-cta__headline">Pronto para estruturar o problema?</h2>
        <p className="final-cta__sub">O diagnóstico é gratuito, confidencial e leva menos de 15 minutos.</p>
        <Link to="/diagnostico/empresa/novo" className="btn btn-white btn-xl">
          Começar diagnóstico
        </Link>
        <Link to="/contato" className="final-cta__link">Tenho dúvidas — falar com a equipe</Link>
      </div>
    </>
  )
}
