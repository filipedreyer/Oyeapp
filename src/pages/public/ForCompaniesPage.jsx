import { Link } from 'react-router-dom'

const WHEN_TO_USE = [
  'Você sente que o problema mudou no meio do caminho',
  'Passou por consultorias antes e não teve o resultado esperado',
  'Tem três propostas diferentes e não sabe como comparar',
  'Quer estruturar melhor o problema antes de contratar qualquer solução',
  'Está em momento de transição — crescimento, reestruturação ou pivô',
  'Precisa de um segundo olhar externo e qualificado',
]

const DELIVERABLES = [
  {
    num: '01',
    title: 'Resumo diagnóstico',
    text: 'Definição precisa do problema, contexto, urgência e critérios de sucesso — em documento elaborado pela equipe Oyê.',
  },
  {
    num: '02',
    title: 'Rota recomendada',
    text: 'Indicação da abordagem mais adequada: tipo de especialista, perfil de entrega e estimativa de prazo.',
  },
  {
    num: '03',
    title: 'Especialistas indicados com fit',
    text: 'Seleção de consultores da rede Oyê avaliados especificamente para o seu contexto, com perfis completos.',
  },
  {
    num: '04',
    title: 'Apoio na decisão',
    text: 'Critérios de comparação e suporte na análise das propostas recebidas, sem intermediação ou comissão.',
  },
]

const FAQ = [
  { q: 'O diagnóstico é gratuito?', a: 'Sim. O diagnóstico inicial é gratuito e sem compromisso.' },
  { q: 'Sou obrigado a contratar alguém?', a: 'Não. O diagnóstico entrega clareza. A contratação é uma decisão sua.' },
  { q: 'A Oyê executa o projeto?', a: 'Não. A Oyê organiza o diagnóstico e indica especialistas. A execução é feita por eles.' },
  { q: 'Quanto tempo leva?', a: 'O formulário leva cerca de 15 minutos. A Oyê entrega o diagnóstico em até 3 dias úteis.' },
  { q: 'Quem escolhe os especialistas?', a: 'A Oyê indica com base no diagnóstico. Você analisa os perfis e decide.' },
]

export default function ForCompaniesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pub-section pub-section--white" style={{ padding: 'clamp(72px,9vw,128px) var(--section-h)' }}>
        <span className="pub-eyebrow">Para empresas</span>
        <h1 className="pub-headline" style={{ maxWidth: 800 }}>
          Você tem um problema,<br />mas ainda não sabe qual solução contratar?
        </h1>
        <p className="pub-lead" style={{ marginBottom: 44, maxWidth: 640 }}>
          A Oyê organiza o diagnóstico antes de indicar especialistas, propostas
          ou caminhos de execução. O problema certo primeiro. A solução depois.
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

      {/* Quando usar a Oyê */}
      <section className="pub-section pub-section--paper">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
            <div>
              <span className="pub-eyebrow">Quando usar</span>
              <h2 className="pub-headline">A Oyê foi feita para quem quer decidir melhor</h2>
              <p className="pub-lead">
                Não importa se você tem clareza sobre o problema ou não.
                O diagnóstico foi desenhado para os dois momentos.
              </p>
            </div>
            <div style={{ paddingTop: 8 }}>
              {WHEN_TO_USE.map((item, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    gap: 16,
                    padding: '20px 0',
                    borderBottom: '1px solid var(--line)',
                    alignItems: 'flex-start',
                    fontSize: 'var(--t-body-lg)',
                    color: 'var(--ink-soft)',
                    lineHeight: 1.45,
                    letterSpacing: 'var(--ls-sub)',
                  }}
                >
                  <span style={{ color: 'var(--navy-mid)', fontWeight: 700, flexShrink: 0 }}>—</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Split photo — como o diagnóstico funciona */}
      <div className="split-photo-section">
        <div className="split-photo-section__content">
          <span className="pub-eyebrow">O caminho</span>
          <h2 style={{ fontSize: 'var(--t-headline)', fontWeight: 600, lineHeight: 'var(--lh-heading)', letterSpacing: 'var(--ls-headline)', color: 'var(--ink)', margin: 0 }}>
            Do problema à solução certa.
          </h2>
          <p style={{ fontSize: 'var(--t-body-lg)', color: 'var(--muted)', lineHeight: 'var(--lh-lead)', letterSpacing: 'var(--ls-sub)', margin: 0 }}>
            A Oyê não começa pela solução. Começa pela escuta, pelo diagnóstico e
            pela definição do tipo de ajuda que faz sentido para o seu momento.
            Só depois indicamos especialistas com fit real.
          </p>
          <div style={{ display: 'flex', gap: 0, flexDirection: 'column', borderLeft: '3px solid var(--navy-mid)', paddingLeft: 20 }}>
            {['Problema descrito', 'Diagnóstico organizado', 'Rota definida', 'Especialistas indicados', 'Você decide'].map((step, i) => (
              <div key={step} style={{ padding: '8px 0', fontSize: 'var(--text-sm)', color: i === 4 ? 'var(--navy-mid)' : 'var(--ink-soft)', fontWeight: i === 4 ? 700 : 400 }}>
                {step}
              </div>
            ))}
          </div>
        </div>
        <div className="split-photo-section__image">
          <img src="/photos/pass.jpg" alt="" aria-hidden="true" className="split-photo-section__photo" />
        </div>
      </div>

      {/* O que a Oyê entrega */}
      <section className="pub-section pub-section--white">
        <div className="container">
          <span className="pub-eyebrow">O que você recebe</span>
          <h2 className="pub-headline">Do diagnóstico à decisão de contratação</h2>

          <div className="method-list" style={{ marginTop: 56 }}>
            {DELIVERABLES.map(d => (
              <div key={d.num} className="method-item">
                <div className="method-icon" style={{ fontSize: '1rem', fontWeight: 700, letterSpacing: '-0.04em' }}>
                  {d.num}
                </div>
                <div className="method-item__body">
                  <h3 className="method-item__title">{d.title}</h3>
                  <p className="method-item__text">{d.text}</p>
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
          <h2 className="pub-headline">Antes de começar</h2>
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

      {/* CTA */}
      <section className="final-cta">
        <div className="container">
          <h2 className="final-cta__headline">
            Comece pelo diagnóstico.
          </h2>
          <p className="final-cta__sub">
            Gratuito, confidencial e leva menos de 15 minutos.
            A clareza que ele traz dura muito mais.
          </p>
          <Link to="/diagnostico/empresa" className="btn btn-white btn-xl">
            Iniciar diagnóstico →
          </Link>
          <Link to="/como-funciona" className="final-cta__link">
            Ver como funciona →
          </Link>
        </div>
      </section>
    </>
  )
}
