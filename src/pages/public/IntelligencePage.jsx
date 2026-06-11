import { Link } from 'react-router-dom'

export default function IntelligencePage() {
  return (
    <>
      {/* Hero com grid.jpg visível e proeminente */}
      <section className="intel-hero">
        <div className="intel-hero__image" aria-hidden="true">
          <img src="/photos/grid.jpg" alt="" className="intel-hero__photo" />
        </div>
        <div className="intel-hero__content">
          <span className="pub-eyebrow" style={{ color: 'var(--navy-mid)' }}>Inteligência Oyê</span>
          <h1 className="pub-headline">
            O contexto não se perde.<br />Ele compõe.
          </h1>
          <p className="pub-lead">
            Cada demanda processada pela Oyê gera aprendizado. Ao longo do tempo,
            identificamos padrões, lacunas e tendências que alimentam melhores
            diagnósticos para empresas futuras.
          </p>
        </div>
      </section>

      {/* O que é */}
      <section className="pub-section pub-section--white">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,80px)', alignItems: 'start' }}>
            <div>
              <span className="pub-eyebrow">O que é</span>
              <h2 className="pub-headline">Inteligência que nasce da prática</h2>
              <p className="pub-lead">
                A inteligência Oyê não é gerada por modelos teóricos. Ela emerge
                do acúmulo de diagnósticos reais, anonimizados e cruzados ao longo
                do tempo. Cada caso contribui para os próximos.
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
                  <h3 style={{ fontSize: 'var(--text-base)', fontWeight: 700, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: 8, lineHeight: 1.2 }}>
                    {title}
                  </h3>
                  <p style={{ fontSize: 'var(--text-sm)', lineHeight: 1.6, color: 'var(--muted)', letterSpacing: '-0.01em', margin: 0 }}>
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Como casos viram padrões */}
      <section className="pub-section pub-section--paper">
        <div className="container">
          <span className="pub-eyebrow">Como funciona</span>
          <h2 className="pub-headline">De casos a padrões.<br />De padrões a melhores diagnósticos.</h2>

          <div className="home-steps-grid" style={{ gridTemplateColumns: 'repeat(4, 1fr)', marginTop: 48 }}>
            {[
              ['Casos chegam', 'Diagnósticos reais de empresas com problemas de diferentes setores e portes.'],
              ['Padrões emergem', 'O acúmulo revela tipos de dor recorrentes que sozinhos não seriam visíveis.'],
              ['Lacunas aparecem', 'Onde a demanda existe mas a rede não tem especialistas com fit suficiente.'],
              ['Diagnósticos melhoram', 'Novos casos são contextualizados com o que aprendemos nos anteriores.'],
            ].map(([title, text], i) => (
              <div key={title} className="home-step">
                <span className="home-step__num">0{i + 1}</span>
                <h3 className="home-step__title">{title}</h3>
                <p className="home-step__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como usamos — por público */}
      <section className="pub-section pub-section--white">
        <div className="container">
          <span className="pub-eyebrow">Como usamos</span>
          <h2 className="pub-headline">A inteligência melhora cada diagnóstico</h2>

          <div className="thesis-grid" style={{ marginTop: 56 }}>
            {[
              ['Para empresas', 'O diagnóstico da sua empresa é contextualizado com padrões do seu setor e porte — aumentando a precisão da rota recomendada.'],
              ['Para a rede', 'Consultores recebem indicações mais qualificadas porque o fit é calculado com base em dados reais, não só em perfil declarado.'],
              ['Para o mercado', 'Publicamos sínteses de tendências e lacunas — sem dados individuais identificados — para contribuir com o ecossistema.'],
            ].map(([title, text]) => (
              <div key={title} className="thesis-item">
                <h3 className="thesis-item__title">{title}</h3>
                <p className="thesis-item__text">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacidade */}
      <section className="pub-section pub-section--paper">
        <div className="container" style={{ maxWidth: 680 }}>
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
        <div className="container">
          <h2 className="final-cta__headline">
            Contribua com<br />a inteligência coletiva.
          </h2>
          <p className="final-cta__sub">
            Cada diagnóstico alimenta uma rede de aprendizado que beneficia todo o ecossistema.
          </p>
          <Link to="/diagnostico/empresa" className="btn btn-white btn-xl">
            Iniciar diagnóstico
          </Link>
        </div>
      </section>
    </>
  )
}
