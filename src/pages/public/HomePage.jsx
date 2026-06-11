import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="hero hero--split">
        <div className="hero--split__text">
          <span className="hero-eyebrow">Diagnóstico estratégico</span>
          <h1 className="hero-title">
            Problemas reais.<br />
            <span className="accent">Soluções certas.</span>
          </h1>
          <p className="hero-lead">
            A Oyê ajuda empresas a entender seus desafios, definir o melhor caminho
            e encontrar especialistas preparados para resolvê-los.
          </p>
          <div className="hero-ctas">
            <Link to="/diagnostico/empresa" className="btn btn-primary btn-lg">
              Iniciar diagnóstico →
            </Link>
            <Link to="/como-funciona" className="btn btn-secondary btn-lg">
              Entender como funciona
            </Link>
          </div>
          <div className="hero-secondary-link">
            <Link to="/para-consultores">Sou consultor →</Link>
          </div>
        </div>
        <div className="hero--split__image">
          <img src="/photos/escada.jpg" alt="" aria-hidden="true" className="hero--split__photo" />
        </div>
      </section>

      {/* ── O QUE A OYÊ FAZ ── */}
      <section className="pub-section pub-section--white">
        <div className="container">
          <span className="pub-eyebrow">O que a Oyê faz</span>
          <h2 className="pub-headline">Um caminho,<br />quatro movimentos.</h2>

          <div className="home-steps-grid">
            <div className="home-step">
              <span className="home-step__num">01</span>
              <h3 className="home-step__title">Diagnostica o problema</h3>
              <p className="home-step__text">
                Entendemos o contexto, a dor, o impacto e o que já foi tentado.
                Nenhuma solução antes do diagnóstico.
              </p>
            </div>
            <div className="home-step">
              <span className="home-step__num">02</span>
              <h3 className="home-step__title">Define a melhor rota</h3>
              <p className="home-step__text">
                Organizamos o tipo de solução mais adequado para o desafio —
                com critérios, não com chute.
              </p>
            </div>
            <div className="home-step">
              <span className="home-step__num">03</span>
              <h3 className="home-step__title">Indica os especialistas</h3>
              <p className="home-step__text">
                Conectamos sua empresa a consultores e especialistas com fit
                real para o seu problema específico.
              </p>
            </div>
            <div className="home-step">
              <span className="home-step__num">04</span>
              <h3 className="home-step__title">Você decide com clareza</h3>
              <p className="home-step__text">
                Recebe critérios de comparação e suporte na escolha.
                A contratação é direta, sem comissão oculta.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── PARA QUEM É ── */}
      <section className="pub-section pub-section--paper">
        <div className="container">
          <span className="pub-eyebrow">Para quem é</span>
          <h2 className="pub-headline">Três públicos.<br />Três entradas.</h2>

          <div className="audience-grid">
            <div className="audience-card">
              <span className="audience-card__label">Para empresas</span>
              <p className="audience-card__text">
                Tenho um problema e preciso entender qual solução buscar antes de contratar.
              </p>
              <Link to="/para-empresas" className="btn btn-primary">
                Iniciar diagnóstico →
              </Link>
            </div>
            <div className="audience-card">
              <span className="audience-card__label">Para consultores</span>
              <p className="audience-card__text">
                Quero fazer parte da rede e receber demandas qualificadas com diagnóstico prévio.
              </p>
              <Link to="/para-consultores" className="btn btn-secondary">
                Fazer candidatura →
              </Link>
            </div>
            <div className="audience-card audience-card--muted">
              <span className="audience-card__label">Para operações Oyê</span>
              <p className="audience-card__text">
                Acesso interno para diagnóstico, roteamento e inteligência de demandas.
              </p>
              <Link to="/ops/login" className="btn btn-ghost">
                Entrar →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── EXEMPLO DE CAMINHO ── */}
      <section className="pub-section pub-section--white">
        <div className="container">
          <span className="pub-eyebrow">Exemplo de caminho</span>
          <h2 className="pub-headline">Como funciona<br />na prática.</h2>

          <div className="example-journey">
            <div className="example-journey__step">
              <span className="example-journey__label">Problema informado</span>
              <p className="example-journey__text">
                "Estamos perdendo eficiência na operação e não sabemos se o problema
                é processo, tecnologia ou gestão."
              </p>
            </div>
            <div className="example-journey__arrow" aria-hidden="true">↓</div>
            <div className="example-journey__step">
              <span className="example-journey__label">Leitura Oyê</span>
              <p className="example-journey__text">
                Indícios de baixa maturidade operacional, rotina pouco padronizada
                e decisões sem evidência suficiente.
              </p>
            </div>
            <div className="example-journey__arrow" aria-hidden="true">↓</div>
            <div className="example-journey__step">
              <span className="example-journey__label">Rota recomendada</span>
              <p className="example-journey__text">
                Diagnóstico operacional + especialista em processos e produtividade.
              </p>
            </div>
            <div className="example-journey__arrow" aria-hidden="true">↓</div>
            <div className="example-journey__step example-journey__step--highlight">
              <span className="example-journey__label">Próximo passo</span>
              <p className="example-journey__text">
                Receber lista de especialistas com fit para o problema diagnosticado.
              </p>
            </div>
          </div>

          <div style={{ marginTop: 48 }}>
            <Link to="/diagnostico/empresa" className="btn btn-primary btn-lg">
              Iniciar meu diagnóstico →
            </Link>
          </div>
        </div>
      </section>

      {/* ── O QUE VOCÊ RECEBE ── */}
      <section className="pub-section pub-section--navy">
        <div className="container">
          <span className="pub-eyebrow">O que você recebe</span>
          <h2 className="pub-headline">Do diagnóstico à decisão.</h2>

          <ul className="deliverables-list">
            {[
              'Resumo diagnóstico do seu problema',
              'Clareza sobre o tipo de problema',
              'Rota recomendada com critérios',
              'Critérios para escolher especialistas',
              'Especialistas indicados com fit',
              'Próximos passos claros',
              'Acompanhamento da demanda',
            ].map(item => (
              <li key={item} className="deliverables-list__item">
                <span className="deliverables-list__check" aria-hidden="true">→</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── REDE DE ESPECIALISTAS ── */}
      <section className="pub-section pub-section--paper">
        <div className="container">
          <span className="pub-eyebrow">Rede de especialistas</span>
          <h2 className="pub-headline">A rede mostra quem pode resolver.<br />A escolha certa acontece depois do diagnóstico.</h2>

          <div className="area-grid">
            {['Estratégia', 'Operações', 'Finanças', 'Pessoas', 'Jurídico', 'Tecnologia', 'Marketing', 'Dados'].map(area => (
              <Link key={area} to="/rede-de-especialistas" className="area-grid__item">
                {area}
              </Link>
            ))}
          </div>

          <div className="home-network-ctas">
            <Link to="/rede-de-especialistas" className="btn btn-secondary btn-lg">
              Conhecer a rede →
            </Link>
            <Link to="/diagnostico/empresa" className="btn btn-primary btn-lg">
              Iniciar diagnóstico
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta">
        <div className="container">
          <h2 className="final-cta__headline">Comece pelo diagnóstico.</h2>
          <p className="final-cta__sub">
            Descreva seu desafio e receba uma orientação inicial sobre o melhor caminho.
          </p>
          <Link to="/diagnostico/empresa" className="btn btn-white btn-xl">
            Iniciar agora →
          </Link>
        </div>
      </section>
    </>
  )
}
