import { Link } from 'react-router-dom'
import { mockProviders } from '../../data/mockProviders'

function AvailabilityDot({ availability }) {
  const map = {
    disponivel:   'availability-dot--available',
    parcial:      'availability-dot--partial',
    indisponivel: 'availability-dot--unavailable',
  }
  return <span className={`availability-dot ${map[availability] || map.indisponivel}`} />
}

export default function HomePage() {
  const featured = mockProviders.slice(0, 3)

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-eyebrow">Diagnóstico estratégico</span>

          <h1 className="hero-title">
            O problema certo<br />
            <span className="accent">antes da solução.</span>
          </h1>

          <p className="hero-lead">
            A Oyê estrutura o diagnóstico da sua empresa e indica os especialistas
            certos — com fit real para o seu caso, não para o caso médio.
          </p>

          <div className="hero-ctas">
            <Link to="/diagnostico/empresa" className="btn btn-primary btn-lg">
              Iniciar diagnóstico <span className="hero-arrow">→</span>
            </Link>
            <Link to="/como-funciona" className="btn btn-secondary btn-lg">
              Como funciona
            </Link>
          </div>
        </div>
      </section>

      {/* ── O QUE A OYÊ FAZ ── */}
      <section className="pub-section pub-section--white">
        <span className="pub-eyebrow">O que fazemos</span>
        <h2 className="pub-headline">
          Diagnóstico antes<br />da indicação.
        </h2>

        <div className="thesis-grid">
          <div className="thesis-item">
            <span className="thesis-item__num">01</span>
            <h3 className="thesis-item__title">Estruturamos o problema</h3>
            <p className="thesis-item__text">
              Antes de indicar qualquer especialista, a Oyê transforma a descrição
              da sua dor em um diagnóstico preciso — com contexto, urgência e
              critérios de sucesso definidos.
            </p>
          </div>
          <div className="thesis-item">
            <span className="thesis-item__num">02</span>
            <h3 className="thesis-item__title">Identificamos o especialista certo</h3>
            <p className="thesis-item__text">
              A indicação é feita por fit real — setor, tipo de problema, porte
              e momento da empresa. Não por algoritmo genérico, não por preço.
            </p>
          </div>
          <div className="thesis-item">
            <span className="thesis-item__num">03</span>
            <h3 className="thesis-item__title">Acompanhamos a decisão</h3>
            <p className="thesis-item__text">
              Suporte na análise de propostas e na escolha do especialista.
              A contratação é direta — sem intermediação ou comissão oculta.
            </p>
          </div>
        </div>

        <div className="thesis-pullquote">
          <p className="thesis-pullquote__text">
            "A maioria das empresas não tem falta de solução.
            Tem falta de <em>diagnóstico</em>."
          </p>
          <span className="thesis-pullquote__attr">Princípio Oyê</span>
        </div>
      </section>

      {/* ── PARA QUEM É ── */}
      <section className="pub-section pub-section--paper">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'clamp(40px,6vw,96px)', alignItems: 'start' }}>
          <div>
            <span className="pub-eyebrow">Para quem é</span>
            <h2 className="pub-headline">Feito para quem quer decidir melhor</h2>
            <p className="pub-lead">
              A Oyê atende empresas que já sentiram na prática que contratar
              a solução errada custa mais do que não contratar nada.
            </p>
          </div>
          <div>
            {[
              'Empresas que sentem que o problema mudou no meio do caminho',
              'Líderes que querem estruturar melhor antes de contratar',
              'Times que já passaram por consultorias sem resultado esperado',
              'Organizações em momento de transição — crescimento ou reestruturação',
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  display: 'flex',
                  gap: 16,
                  padding: '22px 0',
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
            <div style={{ marginTop: 32 }}>
              <Link to="/para-empresas" className="btn btn-secondary">
                Ver como ajudamos empresas →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMO FUNCIONA ── */}
      <section className="pub-section pub-section--white">
        <span className="pub-eyebrow">Como funciona</span>
        <h2 className="pub-headline">4 etapas do problema ao especialista</h2>

        <div className="process-steps" style={{ marginTop: 56 }}>
          {[
            ['01', 'Diagnóstico', 'Você preenche o formulário. A equipe Oyê estrutura o problema com rigor.'],
            ['02', 'Rota', 'Definimos o perfil de especialista mais adequado para o seu caso.'],
            ['03', 'Seleção', 'Indicamos especialistas da rede com fit real para o seu diagnóstico.'],
            ['04', 'Contratação', 'Você decide com critérios claros. A contratação é direta.'],
          ].map(([num, label, text]) => (
            <div key={num} className="process-step">
              <div className="process-step__num">{num}</div>
              <div className="process-step__title">{label}</div>
              <p className="process-step__text">{text}</p>
            </div>
          ))}
        </div>

        <div style={{ marginTop: 48 }}>
          <Link to="/como-funciona" className="btn btn-ghost">
            Ver processo completo →
          </Link>
        </div>
      </section>

      {/* ── O QUE VOCÊ RECEBE ── */}
      <section className="pub-section pub-section--navy">
        <span className="pub-eyebrow">O que você recebe</span>
        <h2 className="pub-headline">Do diagnóstico à decisão</h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 2, background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.08)', marginTop: 56 }}>
          {[
            ['Diagnóstico estruturado', 'Definição precisa do problema, contexto e critérios de sucesso — em documento revisado pela equipe Oyê.'],
            ['Rota recomendada', 'O tipo de especialista, perfil de entrega e estimativa de prazo mais adequados ao seu caso.'],
            ['Lista de especialistas com fit', 'Seleção de consultores da rede avaliados especificamente para o seu diagnóstico.'],
            ['Apoio na decisão', 'Critérios de comparação e suporte na análise das propostas recebidas.'],
          ].map(([title, text]) => (
            <div key={title} style={{ background: 'rgba(255,255,255,0.04)', padding: 'clamp(28px,4vw,48px)' }}>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.03em', lineHeight: 1.2, color: 'var(--white)', marginBottom: 12 }}>
                {title}
              </h3>
              <p style={{ fontSize: 'var(--t-body-lg)', lineHeight: 'var(--lh-lead)', color: 'rgba(255,255,255,0.58)', letterSpacing: 'var(--ls-sub)' }}>
                {text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── REDE DE ESPECIALISTAS ── */}
      <section className="pub-section pub-section--paper">
        <span className="pub-eyebrow">Rede de especialistas</span>
        <h2 className="pub-headline">
          Consultores avaliados<br />pela Oyê.
        </h2>
        <p className="pub-lead" style={{ marginBottom: 48 }}>
          Cada especialista passou por processo de avaliação. A indicação
          acontece depois do diagnóstico — não antes.
        </p>

        <div className="consultants-grid">
          {featured.map(p => (
            <div key={p.id} className="consultant-card">
              <div className="consultant-card__photo">
                {p.name.charAt(0)}
              </div>
              <div className="consultant-card__body">
                <div className="consultant-card__name">{p.name}</div>
                <div className="consultant-card__sector">
                  {p.sectors.slice(0, 2).join(' · ')}
                </div>
                <div className="consultant-card__tags">
                  {p.specialties.slice(0, 3).map(s => (
                    <span key={s} className="sector-tag">{s}</span>
                  ))}
                </div>
                <div className="consultant-card__availability">
                  <AvailabilityDot availability={p.availability} />
                  <span className="availability-label">
                    {p.availability === 'disponivel' ? 'Disponível' : p.availability === 'parcial' ? 'Parcial' : 'Indisponível'}
                  </span>
                </div>
                <div className="consultant-card__cta" style={{ marginTop: 16 }}>
                  <Link to={`/rede-de-especialistas/${p.slug}`} className="btn btn-secondary btn-sm">
                    Ver perfil →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="providers-join" style={{ marginTop: 2 }}>
          <div className="providers-join__text">
            <div className="providers-join__title">Você é consultor ou especialista?</div>
            <p className="providers-join__sub">
              A rede Oyê aceita candidaturas de consultores independentes com experiência comprovada.
            </p>
          </div>
          <Link to="/para-consultores" className="btn btn-primary">
            Saiba como participar →
          </Link>
        </div>

        <div style={{ marginTop: 36, textAlign: 'center' }}>
          <Link to="/rede-de-especialistas" className="btn btn-secondary btn-lg">
            Ver rede completa
          </Link>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="final-cta">
        <h2 className="final-cta__headline">
          O problema certo<br />muda tudo.
        </h2>
        <p className="final-cta__sub">
          Inicie o diagnóstico da sua empresa. Gratuito, estruturado
          e leva menos de 15 minutos.
        </p>
        <Link to="/diagnostico/empresa" className="btn btn-white btn-xl">
          Iniciar diagnóstico →
        </Link>
        <Link to="/contato" className="final-cta__link">
          Ou fale com a equipe Oyê
        </Link>
      </section>
    </>
  )
}
