import { Link } from 'react-router-dom'

const FOUNDERS = [
  {
    initial: 'A',
    name: 'Amanda Marangoni',
    role: 'Estratégia Comercial & Performance',
    bio: 'Renner, Boticário. 13 anos formando times e estruturando estratégias comerciais em grandes redes do varejo brasileiro.',
  },
  {
    initial: 'F',
    name: 'Filipe Dreyer',
    role: 'Customer Experience & Operações',
    bio: 'Renner, SAP, Kimberly-Clark. 20+ anos conectando experiência do cliente à eficiência operacional em empresas de grande porte.',
  },
  {
    initial: 'C',
    name: 'Carolina Almeida',
    role: 'Supply Chain & Cadeia Produtiva',
    bio: 'Renner, Grupo Soma, Stihl. 20+ anos otimizando cadeias produtivas e estruturando operações do fornecedor ao cliente final.',
  },
]

const VALUES = [
  { num: '01', t: 'Método & Rigor Técnico', d: 'Frameworks proprietários e curadoria especializada. Engenharia antes de opinião.' },
  { num: '02', t: 'Diagnóstico Preciso', d: 'Acerto no diagnóstico como base de qualquer solução com ROI real.' },
  { num: '03', t: 'Inteligência Coletiva', d: 'Dados que circulam e conhecimento que se acumula em cada caso.' },
  { num: '04', t: 'Curadoria Especializada', d: 'Cada especialista passa por avaliação rigorosa. Não somos um diretório aberto.' },
  { num: '05', t: 'Relações que Importam', d: 'Acreditamos que relações construídas com respeito criam colaboração genuína.' },
  { num: '06', t: 'Execução com Precisão', d: 'Entrega com rigor de operação industrial, não de consultoria genérica.' },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="diag-hero">
        <div className="container">
          <span className="pub-eyebrow">Sobre a Oyê</span>
          <h1 className="diag-hero__title">O problema certo<br />muda tudo.</h1>
          <p className="diag-hero__lead">
            A Oyê nasceu da observação de que o mercado oferece consultoria
            com a solução pronta antes de entender o problema. Viemos corrigir isso.
          </p>
        </div>
      </section>

      {/* Origin */}
      <section className="pub-section pub-section--white">
        <div className="container">
          <span className="pub-eyebrow">Origem</span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start', marginTop: '16px' }}>
            <div>
              <h2 className="pub-headline" style={{ marginBottom: '24px' }}>
                Por mais de 13 anos, vimos o mesmo erro sendo repetido.
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <p style={{ fontSize: 'var(--t-body-lg)', color: 'var(--muted)', lineHeight: 'var(--lh-lead)', letterSpacing: 'var(--ls-sub)' }}>
                Quando o resultado caía, alguém decretava uma solução: treinamento,
                reestruturação, nova campanha. A solução era rápida, cara, intensa
                e quase sempre errada. Não era falta de competência — era falta de diagnóstico.
              </p>
              <p style={{ fontSize: 'var(--t-body-lg)', color: 'var(--muted)', lineHeight: 'var(--lh-lead)', letterSpacing: 'var(--ls-sub)' }}>
                Os três fundadores chegaram à mesma conclusão por caminhos diferentes,
                cobrindo a cadeia completa — do fornecedor ao cliente final. Juntos, tinham
                o diagnóstico que o mercado não oferecia.
              </p>
              <p style={{ fontSize: 'var(--t-body-lg)', color: 'var(--ink)', lineHeight: 'var(--lh-lead)', letterSpacing: 'var(--ls-sub)', fontWeight: 600 }}>
                Foi assim que nasceu a Oyê.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="pub-section pub-section--paper">
        <div className="container">
          <span className="pub-eyebrow">Fundadores</span>
          <h2 className="pub-headline">Três perspectivas.<br />Uma cadeia completa.</h2>
          <div className="founders-grid">
            {FOUNDERS.map(f => (
              <div key={f.name} className="founder-card">
                <div className="founder-card__initial">{f.initial}</div>
                <div className="founder-card__name">{f.name}</div>
                <div className="founder-card__role">{f.role}</div>
                <p className="founder-card__bio">{f.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="pub-section pub-section--white">
        <div className="container">
          <span className="pub-eyebrow">Valores</span>
          <h2 className="pub-headline">O que orienta cada decisão.</h2>
          <div className="values-grid">
            {VALUES.map(v => (
              <div key={v.num} className="value-item">
                <span className="value-item__num">{v.num}</span>
                <div className="value-item__title">{v.t}</div>
                <p className="value-item__text">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <div className="manifesto-section">
        <div className="container">
          <span className="pub-eyebrow" style={{ color: 'var(--navy-mid)', marginBottom: '36px' }}>Manifesto</span>
          <p><strong>Acreditamos que toda empresa merece saber qual é o problema real</strong> antes de contratar qualquer solução.</p>
          <p>Acreditamos que diagnóstico errado não é neutro — é investimento negativo.</p>
          <p>Acreditamos que o conhecimento acumulado em cada caso tem valor além do projeto em si.</p>
          <p><strong>Acreditamos que a solução certa nasce do problema certo.</strong></p>
          <div style={{ marginTop: '48px' }}>
            <Link to="/diagnostico/empresa" className="btn btn-white btn-lg">
              Iniciar diagnóstico →
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
