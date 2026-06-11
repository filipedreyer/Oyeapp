import { Link } from 'react-router-dom'

export default function IntelligencePage() {
  return (
    <>
      {/* Hero */}
      <section
        className="pub-section pub-section--navy"
        style={{ padding: 'clamp(72px,9vw,128px) var(--section-h)', position: 'relative', overflow: 'hidden' }}
      >
        <div
          style={{
            position: 'absolute', inset: 0, zIndex: 0, opacity: 0.12,
            background: 'url(/photos/grid.jpg) center / cover no-repeat',
          }}
          aria-hidden="true"
        />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <span className="pub-eyebrow">Inteligência Oyê</span>
          <h1 className="pub-headline" style={{ color: 'var(--white)', maxWidth: 720 }}>
            O que aprendemos com<br />cada diagnóstico.
          </h1>
          <p className="pub-lead" style={{ marginBottom: 0 }}>
            Cada demanda processada pela Oyê gera aprendizado. Ao longo do tempo,
            identificamos padrões, lacunas e tendências que alimentam melhores diagnósticos.
          </p>
        </div>
      </section>

      {/* O que é */}
      <section className="pub-section pub-section--white">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'start' }}>
          <div>
            <span className="pub-eyebrow">O que é</span>
            <h2 className="pub-headline">Inteligência que nasce da prática</h2>
            <p className="pub-lead">
              A inteligência Oyê não é gerada por modelos teóricos.
              Ela emerge do acúmulo de diagnósticos reais, anonimizados e
              cruzados ao longo do tempo.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, paddingTop: 8 }}>
            {[
              ['Padrões de problemas', 'Identificamos tipos de dor que se repetem em setores e momentos específicos das empresas.'],
              ['Lacunas na rede', 'Monitoramos onde a demanda supera a oferta de especialistas qualificados — e atuamos para preencher.'],
              ['Efetividade das rotas', 'Rastreamos quais combinações de problema + especialista geraram melhores resultados.'],
              ['Sinais do mercado', 'Agregamos indicadores sobre urgência, orçamento e tipo de necessidade por setor e porte.'],
            ].map(([title, text]) => (
              <div key={title} style={{ padding: '28px 0', borderBottom: '1px solid var(--line)' }}>
                <h3 style={{ fontSize: '1.05rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 8, lineHeight: 1.2 }}>
                  {title}
                </h3>
                <p style={{ fontSize: '0.9375rem', lineHeight: 1.6, color: 'var(--muted)', letterSpacing: '-0.01em' }}>
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como usamos */}
      <section className="pub-section pub-section--paper">
        <span className="pub-eyebrow">Como usamos</span>
        <h2 className="pub-headline">A inteligência melhora cada diagnóstico</h2>

        <div className="thesis-grid" style={{ marginTop: 56 }}>
          {[
            ['Para empresas', 'O diagnóstico da sua empresa é contextualizado com padrões do seu setor e porte — aumentando a precisão da rota recomendada.'],
            ['Para a rede', 'Consultores e especialistas recebem indicações mais qualificadas porque o fit é calculado com base em dados reais, não só em perfil declarado.'],
            ['Para o mercado', 'Publicamos sínteses de tendências e lacunas — sem dados individuais identificados — para contribuir com o ecossistema de gestão e consultoria.'],
          ].map(([title, text]) => (
            <div key={title} className="thesis-item">
              <h3 className="thesis-item__title">{title}</h3>
              <p className="thesis-item__text">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Privacidade */}
      <section className="pub-section pub-section--white">
        <div style={{ maxWidth: 680 }}>
          <span className="pub-eyebrow">Privacidade e LGPD</span>
          <h2 className="pub-headline">Os seus dados nunca são expostos</h2>
          <p className="pub-lead" style={{ marginBottom: 32 }}>
            Todos os dados utilizados na geração de inteligência são estritamente
            anonimizados e tratados em forma agregada. Nenhum dado identificável
            de diagnóstico é compartilhado ou publicado.
          </p>
          <Link to="/privacidade" className="btn btn-ghost">
            Ver Política de Privacidade
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <h2 className="final-cta__headline">
          Contribua com<br />a inteligência coletiva.
        </h2>
        <p className="final-cta__sub">
          Cada diagnóstico que você realiza alimenta uma rede de aprendizado que
          beneficia todo o ecossistema.
        </p>
        <Link to="/diagnostico/empresa" className="btn btn-white btn-xl">
          Iniciar diagnóstico
        </Link>
      </section>
    </>
  )
}
