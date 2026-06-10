import { Link } from 'react-router-dom'
import { mockProviders } from '../../data/mockProviders'

function AvailabilityBadge({ availability }) {
  const map = {
    disponivel: { label: 'Disponível', cls: 'availability-dot--available' },
    parcial: { label: 'Parcial', cls: 'availability-dot--partial' },
    indisponivel: { label: 'Indisponível', cls: 'availability-dot--unavailable' },
  }
  const info = map[availability] || map['indisponivel']
  return (
    <div className="consultant-card__availability">
      <span className={`availability-dot ${info.cls}`} />
      <span className="availability-label">{info.label}</span>
    </div>
  )
}

function TypeBadge({ type }) {
  const labels = {
    individual: 'Consultor Individual',
    boutique: 'Boutique',
    empresa: 'Empresa',
  }
  return <span className="badge">{labels[type] || type}</span>
}

export default function HomePage() {
  const previewProviders = mockProviders.slice(0, 3)

  return (
    <div>
      {/* Section 1: Hero */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-left">
              <span className="hero-eyebrow">Plataforma de Diagnóstico Estratégico</span>
              <h1 className="hero-title">
                Problemas reais.<br />Soluções certas.
              </h1>
              <p className="hero-lead">
                A maioria das empresas pula direto para a solução. Oyê estrutura o diagnóstico antes
                de recomendar qualquer rota — conecta os problemas certos às soluções certas, acompanha
                a execução e transforma cada caso em inteligência para o futuro.
              </p>
              <div className="hero-ctas">
                <Link to="/diagnostico/empresa" className="btn btn-primary btn-lg">
                  Iniciar Diagnóstico
                </Link>
                <Link to="/consultores" className="btn btn-secondary btn-lg">
                  Explorar Consultores
                </Link>
              </div>
            </div>

            <div className="hero-dark-panel">
              <p className="hero-panel-label">Inteligência da Plataforma</p>
              <div className="hero-dark-panel__grid">
                <div className="hero-stat-cell">
                  <div className="hero-stat-number">340+</div>
                  <div className="hero-stat-label">Casos diagnosticados</div>
                </div>
                <div className="hero-stat-cell">
                  <div className="hero-stat-number">48</div>
                  <div className="hero-stat-label">Provedores homologados</div>
                </div>
                <div className="hero-stat-cell hero-stat-cell--full">
                  <div className="hero-stat-accent">Match qualificado</div>
                  <div className="hero-stat-number">78%</div>
                  <div className="hero-stat-label">Na primeira shortlist</div>
                </div>
              </div>
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px' }}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '16px',
                }}>
                  {[
                    { label: 'Setores mapeados', value: '12' },
                    { label: 'Taxa de conclusão', value: '91%' },
                  ].map(item => (
                    <div key={item.label}>
                      <div style={{ fontSize: 'var(--text-xl)', fontWeight: 900, color: 'var(--white)', letterSpacing: 'var(--tracking-tighter)' }}>
                        {item.value}
                      </div>
                      <div style={{ fontSize: 'var(--text-xs)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'rgba(255,255,255,0.4)', marginTop: '4px' }}>
                        {item.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Thesis */}
      <section className="thesis-section">
        <div className="container">
          <p className="section-label">Por que Oyê?</p>
          <div className="thesis-grid">
            <div className="thesis-card">
              <div className="thesis-card__number">01</div>
              <div className="thesis-card__title">O problema antes da solução</div>
              <p className="thesis-card__text">
                Antes de indicar qualquer consultor ou produto, Oyê estrutura o problema com rigor
                técnico. Seis dimensões de análise garantem que o diagnóstico seja preciso —
                não uma impressão, mas um mapa.
              </p>
            </div>
            <div className="thesis-card">
              <div className="thesis-card__number">02</div>
              <div className="thesis-card__title">O match depois do diagnóstico</div>
              <p className="thesis-card__text">
                A shortlist não é gerada por algoritmo genérico. É construída a partir do diagnóstico,
                cruzado com o histórico real de casos dos provedores da rede homologada — quem já
                resolveu este problema antes.
              </p>
            </div>
            <div className="thesis-card">
              <div className="thesis-card__number">03</div>
              <div className="thesis-card__title">O aprendizado depois do projeto</div>
              <p className="thesis-card__text">
                Cada caso concluído vira dado. Oyê acompanha a execução e mede o resultado —
                o que funcionou, o que desviou, o que ficou para aprender. Essa inteligência
                acumulada torna cada próximo match mais preciso.
              </p>
            </div>
          </div>

          <blockquote className="thesis-pullquote">
            <p className="thesis-pullquote__text">
              "A maioria das empresas não tem falta de solução. Tem falta de diagnóstico."
            </p>
            <cite className="thesis-pullquote__attribution">— Princípio Oyê</cite>
          </blockquote>
        </div>
      </section>

      {/* Section 3: Methodology */}
      <section className="methodology-section">
        <div className="container">
          <p className="section-label">Metodologia de Precisão</p>
          <h2 style={{ marginBottom: 'var(--space-12)', maxWidth: '640px' }}>
            Cinco passos que transformam dor em resultado
          </h2>

          <div className="methodology-steps">
            {[
              {
                n: '01',
                name: 'Entrada',
                desc: 'Lead qualificado, triagem de sintomas e classificação inicial do problema da empresa.',
              },
              {
                n: '02',
                name: 'Gate 1 — Diagnóstico',
                desc: 'Seis dimensões de análise: frequência, ineditismo, complexidade, urgência, mercado e histórico de tentativas.',
              },
              {
                n: '03',
                name: 'Gate 2 — Rota',
                desc: 'Identificação da rota de solução mais adequada entre sete possíveis — do marketplace à inovação aberta.',
              },
              {
                n: '04',
                name: 'Execução',
                desc: 'Shortlist curada, proposta estruturada e acompanhamento ativo do projeto com o provedor selecionado.',
              },
              {
                n: '05',
                name: 'Gate 3 — Prova',
                desc: 'Medição de resultado, métricas de satisfação, documentação de desvios e incorporação à inteligência Oyê.',
              },
            ].map(step => (
              <div key={step.n} className="step-item">
                <div className="step-item__number">{step.n}</div>
                <div className="step-item__name">{step.name}</div>
                <p className="step-item__desc">{step.desc}</p>
              </div>
            ))}
          </div>

          <div>
            <Link to="/metodologia" className="btn btn-secondary">
              Ver metodologia completa
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4: Intelligence */}
      <section className="intelligence-section">
        <div className="container">
          <p className="intel-section-label">Inteligência Comprovada</p>
          <h2 style={{ marginBottom: 'var(--space-6)', maxWidth: '680px', color: 'var(--white)', fontSize: 'var(--text-3xl)', letterSpacing: 'var(--tracking-tighter)' }}>
            Cada caso vira aprendizado. Cada aprendizado vira inteligência.
          </h2>
          <p className="intel-text" style={{ marginBottom: 'var(--space-12)' }}>
            A Frente 2 da plataforma Oyê é o motor de inteligência estratégica. Cada diagnóstico
            concluído alimenta uma base de dados proprietária que torna os próximos matches mais
            precisos, os diagnósticos mais rápidos e as rotas mais assertivas.
          </p>

          <div className="intel-grid">
            <div className="intel-card">
              <div className="intel-card__number">12</div>
              <div className="intel-card__label">Setores mapeados com base de casos reais e padrões de problema documentados</div>
            </div>
            <div className="intel-card">
              <div className="intel-card__number">340+</div>
              <div className="intel-card__label">Casos diagnosticados desde a fundação da plataforma com dados estruturados</div>
            </div>
            <div className="intel-card">
              <div className="intel-card__number">78%</div>
              <div className="intel-card__label">De match qualificado na primeira shortlist gerada após o diagnóstico completo</div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Consultants Preview */}
      <section className="consultant-preview-section">
        <div className="container">
          <p className="section-label">Rede Homologada</p>
          <h2 style={{ marginBottom: 'var(--space-12)' }}>
            Especialistas curados para problemas reais
          </h2>

          <div className="consultant-preview-grid">
            {previewProviders.map(provider => (
              <div key={provider.id} className="consultant-card">
                <div className="consultant-card__header">
                  <div>
                    <div className="consultant-card__name">{provider.name}</div>
                    <div className="consultant-card__region">{provider.region}</div>
                  </div>
                  <AvailabilityBadge availability={provider.availability} />
                </div>

                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <TypeBadge type={provider.type} />
                </div>

                <div className="consultant-card__sectors">
                  {provider.sectors.slice(0, 3).map(sector => (
                    <span key={sector} className="sector-tag">{sector}</span>
                  ))}
                </div>

                <ul className="consultant-card__specialties">
                  {provider.specialties.slice(0, 3).map(spec => (
                    <li key={spec}>{spec}</li>
                  ))}
                </ul>

                <div className="consultant-card__footer">
                  <Link to={`/consultores/${provider.slug}`} className="btn btn-secondary btn-sm">
                    Ver perfil
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="consultant-cta-area">
            <div>
              <div className="consultant-cta-area__text">Quer fazer parte da rede?</div>
              <div className="consultant-cta-area__subtext">
                A homologação Oyê garante qualidade e especialização comprovadas.
              </div>
            </div>
            <Link to="/provedores/candidatura" className="btn btn-primary">
              Candidatura de provedor
            </Link>
          </div>
        </div>
      </section>

      {/* Section 6: Final CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>
            Antes de escolher uma solução, entenda o problema.
          </h2>
          <p className="cta-section__sub">
            Inicie o diagnóstico da sua empresa. É gratuito, estruturado e leva menos de 15 minutos.
          </p>
          <Link to="/diagnostico/empresa" className="btn btn-white btn-lg">
            Iniciar Diagnóstico
          </Link>
          <Link to="/contato" className="cta-section__link">
            Ou fale com a equipe Oyê
          </Link>
        </div>
      </section>
    </div>
  )
}
