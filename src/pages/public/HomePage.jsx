import { Link } from 'react-router-dom'
import { mockProviders } from '../../data/mockProviders'

function IconTarget() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <circle cx="20" cy="20" r="14" stroke="currentColor" strokeWidth="2"/>
      <circle cx="20" cy="20" r="8"  stroke="currentColor" strokeWidth="2"/>
      <circle cx="20" cy="20" r="2.5" fill="currentColor"/>
      <line x1="20" y1="6" x2="20" y2="0" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

function IconBars() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="4"  y="24" width="8"  height="12" fill="currentColor" opacity=".4"/>
      <rect x="16" y="16" width="8"  height="20" fill="currentColor" opacity=".7"/>
      <rect x="28" y="6"  width="8"  height="30" fill="currentColor"/>
    </svg>
  )
}

function IconBolt() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M22 4 L10 22 H20 L18 36 L30 18 H20 L22 4Z" fill="currentColor"/>
    </svg>
  )
}

function AvailabilityIndicator({ availability }) {
  const config = {
    disponivel:   { cls: 'availability-dot--available',   label: 'Disponível' },
    parcial:      { cls: 'availability-dot--partial',     label: 'Parcial' },
    indisponivel: { cls: 'availability-dot--unavailable', label: 'Indisponível' },
  }
  const c = config[availability] || config.indisponivel
  return (
    <div className="consultant-card__availability">
      <span className={`availability-dot ${c.cls}`} />
      <span className="availability-label">{c.label}</span>
    </div>
  )
}

export default function HomePage() {
  const featured = mockProviders.slice(0, 3)

  return (
    <>
      {/* ── HERO ── */}
      <section className="hero">
        <div className="hero-content">
          <span className="hero-eyebrow">Plataforma de Diagnóstico Estratégico</span>

          <h1 className="hero-title">
            Problemas reais.<br />
            <span className="accent">Soluções certas.</span>
          </h1>

          <p className="hero-lead">
            O problema certo muda tudo. Antes de recomendar qualquer solução,
            a Oyê estrutura o diagnóstico — conecta empresas à rede certa e
            transforma cada caso em inteligência acumulada.
          </p>

          <div className="hero-ctas">
            <Link to="/diagnostico/empresa" className="btn btn-primary btn-lg">
              Iniciar Diagnóstico <span className="hero-arrow">→</span>
            </Link>
            <Link to="/consultores" className="btn btn-secondary btn-lg">
              Explorar Consultores
            </Link>
          </div>
        </div>
      </section>

      {/* ── THESIS ── */}
      <section className="pub-section pub-section--white">
        <div className="container">
          <span className="pub-eyebrow">Por que Oyê?</span>
          <h2 className="pub-headline">
            Antes da solução,<br />o diagnóstico.
          </h2>

          <div className="thesis-grid">
            <div className="thesis-item">
              <span className="thesis-item__num">01</span>
              <div className="thesis-item__title">O problema antes da solução</div>
              <p className="thesis-item__text">
                Antes de indicar qualquer consultor ou produto, a Oyê estrutura
                o problema com rigor técnico. Seis dimensões de análise garantem
                que o diagnóstico seja preciso — não uma impressão, mas um mapa.
              </p>
            </div>
            <div className="thesis-item">
              <span className="thesis-item__num">02</span>
              <div className="thesis-item__title">O match depois do diagnóstico</div>
              <p className="thesis-item__text">
                A shortlist não é gerada por algoritmo genérico. É construída
                a partir do diagnóstico, cruzado com o histórico real de casos
                dos provedores — quem já resolveu este problema antes.
              </p>
            </div>
            <div className="thesis-item">
              <span className="thesis-item__num">03</span>
              <div className="thesis-item__title">O aprendizado depois do projeto</div>
              <p className="thesis-item__text">
                Cada projeto encerrado alimenta a inteligência da plataforma.
                Padrões, clusters, gaps de solução — a Frente 2 transforma
                casos em conhecimento que cresce com o tempo.
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
        </div>
      </section>

      {/* ── METHODOLOGY ── */}
      <section className="pub-section pub-section--paper">
        <div className="container">
          <span className="pub-eyebrow">Metodologia de Precisão</span>
          <h2 className="pub-headline">
            Como a Oyê<br />transforma dor em resultado.
          </h2>
          <p className="pub-lead">
            Não vendemos horas. Resolvemos problemas. Nossa abordagem inverte
            o modelo tradicional de consultoria — o diagnóstico vem antes de
            qualquer indicação de solução.
          </p>

          <div className="method-list">
            <div className="method-item">
              <div className="method-icon">
                <IconTarget />
              </div>
              <div className="method-item__body">
                <div className="method-item__title">1. Diagnóstico Profundo</div>
                <p className="method-item__text">
                  Mapeamos o sintoma real através de uma ferramenta estruturada
                  antes de acionar qualquer especialista. Seis dimensões de análise:
                  frequência, ineditismo, complexidade, urgência, mercado e histórico
                  de tentativas — cada caso recebe um score diagnóstico.
                </p>
              </div>
            </div>

            <div className="method-item">
              <div className="method-icon">
                <IconBars />
              </div>
              <div className="method-item__body">
                <div className="method-item__title">2. Match Inteligente</div>
                <p className="method-item__text">
                  Conectamos seu desafio apenas a consultores com histórico
                  comprovado no mesmo setor e tipo de problema. A shortlist
                  nasce do diagnóstico, não de uma busca por categoria.
                </p>
              </div>
            </div>

            <div className="method-item">
              <div className="method-icon">
                <IconBolt />
              </div>
              <div className="method-item__body">
                <div className="method-item__title">3. Execução com Prova</div>
                <p className="method-item__text">
                  Projetos com escopo fechado, critérios de sucesso definidos
                  antes do início e Gate 3 de encerramento com registro de
                  resultado, desvios e aprendizados que alimentam a inteligência.
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '48px' }}>
            <Link to="/metodologia" className="btn btn-secondary">
              Ver metodologia completa →
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTELLIGENCE — dark section ── */}
      <section className="pub-section pub-section--navy">
        <div className="container">
          <span className="pub-eyebrow">Inteligência Comprovada</span>
          <h2 className="pub-headline">
            Cada caso vira aprendizado.<br />
            Cada aprendizado vira inteligência.
          </h2>
          <p className="pub-lead">
            A Frente 2 da Oyê transforma casos diagnosticados em clusters
            de problema, padrões por setor e sinais de mercado — uma base
            de conhecimento que cresce com cada projeto.
          </p>

          <div className="intel-stats">
            <div className="intel-stat">
              <div className="intel-stat__num">340+</div>
              <div className="intel-stat__label">Casos diagnosticados</div>
            </div>
            <div className="intel-stat">
              <div className="intel-stat__num">48</div>
              <div className="intel-stat__label">Provedores homologados</div>
            </div>
            <div className="intel-stat">
              <div className="intel-stat__num">78%</div>
              <div className="intel-stat__label">Match na primeira shortlist</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONSULTANTS PREVIEW ── */}
      <section className="pub-section pub-section--paper2">
        <div className="container">
          <span className="pub-eyebrow">Rede Homologada</span>
          <h2 className="pub-headline">
            Especialistas curados<br />para problemas reais.
          </h2>
          <p className="pub-lead">
            Cada consultor e provedor da rede passou por um processo rigoroso
            de homologação. O diretório mostra capacidade — a contratação
            acontece após o diagnóstico e a definição de fit.
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
                  <AvailabilityIndicator availability={p.availability} />
                  <div className="consultant-card__cta" style={{ marginTop: '16px' }}>
                    <Link to={`/consultores/${p.slug}`} className="btn btn-secondary btn-sm">
                      Ver perfil →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="providers-join">
            <div className="providers-join__text">
              <div className="providers-join__title">Você é consultor ou provedor de solução?</div>
              <p className="providers-join__sub">
                A rede Oyê aceita candidaturas de consultores independentes, consultorias,
                startups, pesquisadores e empresas com solução comprovada.
              </p>
            </div>
            <Link to="/provedores/candidatura" className="btn btn-primary">
              Candidatar-se →
            </Link>
          </div>

          <div style={{ marginTop: '36px', textAlign: 'center' }}>
            <Link to="/consultores" className="btn btn-secondary btn-lg">
              Ver diretório completo
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <div className="final-cta">
        <h2 className="final-cta__headline">
          Antes de escolher uma solução,<br />entenda o problema.
        </h2>
        <p className="final-cta__sub">
          Inicie o diagnóstico da sua empresa. É gratuito, estruturado
          e leva menos de 15 minutos.
        </p>
        <Link to="/diagnostico/empresa" className="btn btn-white btn-xl">
          Iniciar Diagnóstico →
        </Link>
        <Link to="/contato" className="final-cta__link">
          Ou fale com a equipe Oyê
        </Link>
      </div>
    </>
  )
}
