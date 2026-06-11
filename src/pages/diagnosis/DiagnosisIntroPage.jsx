import { Link } from 'react-router-dom'

const STEPS = [
  { n: '01', title: 'Sobre a empresa', text: 'Porte, setor, momento atual' },
  { n: '02', title: 'Quem está conduzindo', text: 'Perfil e responsabilidade sobre o problema' },
  { n: '03', title: 'Qual é o problema', text: 'Descrição, sintomas, frequência' },
  { n: '04', title: 'Qual é o impacto', text: 'Consequências e custo de não resolver' },
  { n: '05', title: 'O que já foi tentado', text: 'Soluções anteriores e por que não funcionaram' },
  { n: '06', title: 'Que dados ajudam a entender', text: 'Evidências e indicadores disponíveis' },
  { n: '07', title: 'Revise o diagnóstico', text: 'Primeira organização do problema' },
  { n: '08', title: 'Envie para análise', text: 'A equipe Oyê leva até 3 dias úteis' },
]

const FAQ = [
  {
    q: 'O diagnóstico é gratuito?',
    a: 'Sim. O diagnóstico inicial é totalmente gratuito e sem compromisso.',
  },
  {
    q: 'Preciso saber a solução antes de iniciar?',
    a: 'Não. O diagnóstico foi desenhado para quem ainda não sabe qual é a solução. Você só precisa saber que existe um problema.',
  },
  {
    q: 'Sou obrigado a contratar alguém depois?',
    a: 'Não. O diagnóstico entrega clareza sobre o problema. A contratação de um especialista é uma decisão sua.',
  },
  {
    q: 'Quanto tempo leva?',
    a: 'O formulário leva aproximadamente 15 minutos. Após o envio, a equipe Oyê realiza a triagem em até 3 dias úteis.',
  },
]

export default function DiagnosisIntroPage() {
  return (
    <>
      {/* Intro — Antes de começar */}
      <section className="pub-section pub-section--white" style={{ padding: 'clamp(64px,8vw,112px) var(--section-h)' }}>
        <div className="container" style={{ maxWidth: 760 }}>
          <span className="pub-eyebrow">Diagnóstico de empresa</span>
          <h1 className="pub-headline">Antes de começar</h1>
          <p style={{ fontSize: 'var(--t-body-lg)', color: 'var(--ink-soft)', lineHeight: 'var(--lh-lead)', letterSpacing: 'var(--ls-sub)', maxWidth: 600, margin: '0 0 40px' }}>
            Você vai responder perguntas sobre sua empresa, o problema percebido,
            o impacto, o que já foi tentado e os dados disponíveis. Isso ajuda a Oyê a
            organizar o diagnóstico e indicar o melhor próximo passo.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 0, border: '1px solid var(--line)', marginBottom: 48 }}>
            {[
              ['~15 min', 'Tempo estimado'],
              ['Salva automaticamente', 'Continue depois se precisar'],
              ['Sem compromisso', 'O diagnóstico não obriga contratação'],
            ].map(([value, label]) => (
              <div key={label} style={{ padding: '24px 28px', borderRight: '1px solid var(--line)' }}>
                <div style={{ fontSize: 'var(--text-lg)', fontWeight: 700, color: 'var(--navy)', marginBottom: 4 }}>{value}</div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase' }}>{label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
            <Link to="/diagnostico/empresa/novo" className="btn btn-primary btn-lg">
              Começar diagnóstico →
            </Link>
            <Link to="/contato" className="btn btn-ghost btn-lg">
              Tenho dúvidas
            </Link>
          </div>
        </div>
      </section>

      {/* Etapas do diagnóstico */}
      <section className="pub-section pub-section--paper">
        <div className="container">
          <span className="pub-eyebrow">O que acontece</span>
          <h2 className="pub-headline">As etapas do diagnóstico</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 0, border: '1px solid var(--line)', marginTop: 48 }}>
            {STEPS.map((step, i) => (
              <div key={step.n} style={{
                padding: '28px 24px',
                borderRight: i % 4 !== 3 ? '1px solid var(--line)' : 'none',
                borderBottom: i < 4 ? '1px solid var(--line)' : 'none',
              }}>
                <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy-mid)', marginBottom: 12 }}>
                  {step.n}
                </div>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 600, color: 'var(--ink)', marginBottom: 6 }}>
                  {step.title}
                </div>
                <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', lineHeight: 1.5 }}>
                  {step.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* O que acontece depois */}
      <section className="pub-section pub-section--white">
        <div className="container" style={{ maxWidth: 680 }}>
          <span className="pub-eyebrow">Depois do envio</span>
          <h2 className="pub-headline">O que você recebe</h2>

          <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 0, border: '1px solid var(--line)' }}>
            {[
              ['Até 3 dias úteis', 'Triagem pela equipe Oyê'],
              ['Diagnóstico por e-mail', 'Documento com o problema organizado e leitura Oyê'],
              ['Rota recomendada', 'Tipo de solução e perfil de especialista ideal'],
              ['Próximos passos claros', 'Lista de especialistas com fit ou orientação alternativa'],
            ].map(([time, desc], i, arr) => (
              <div key={time} style={{ display: 'flex', gap: 32, padding: '24px 36px', borderBottom: i < arr.length - 1 ? '1px solid var(--line)' : 'none', alignItems: 'flex-start' }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, color: 'var(--navy-mid)', textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', minWidth: 120, flexShrink: 0, paddingTop: 2 }}>
                  {time}
                </div>
                <div style={{ fontSize: 'var(--t-body-lg)', color: 'var(--ink-soft)', lineHeight: 1.45 }}>
                  {desc}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="pub-section pub-section--paper">
        <div className="container" style={{ maxWidth: 720 }}>
          <span className="pub-eyebrow">Perguntas frequentes</span>
          <h2 className="pub-headline">Dúvidas comuns</h2>
          <div style={{ marginTop: 40, border: '1px solid var(--line)' }}>
            {FAQ.map((item, i) => (
              <div key={i} style={{
                padding: '28px 36px',
                borderBottom: i < FAQ.length - 1 ? '1px solid var(--line)' : 'none',
              }}>
                <div style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--ink)', marginBottom: 8 }}>
                  {item.q}
                </div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: 1.6, margin: 0 }}>
                  {item.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="final-cta">
        <div className="container">
          <h2 className="final-cta__headline">Pronto para estruturar o problema?</h2>
          <p className="final-cta__sub">Gratuito, confidencial e leva menos de 15 minutos.</p>
          <Link to="/diagnostico/empresa/novo" className="btn btn-white btn-xl">
            Começar agora →
          </Link>
          <Link to="/contato" className="final-cta__link">Tenho dúvidas — falar com a equipe</Link>
        </div>
      </div>
    </>
  )
}
