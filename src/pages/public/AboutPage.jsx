import { Link } from 'react-router-dom'

const founders = [
  {
    name: 'Amanda Marangoni',
    role: 'Estratégia Comercial',
    bio: 'Mais de 12 anos de experiência em desenvolvimento comercial e estratégia de crescimento em grandes redes varejistas. Amanda construiu a tese de que empresas perdem dinheiro não por falta de ferramentas, mas por diagnosticar mal os próprios problemas.',
  },
  {
    name: 'Filipe Dreyer',
    role: 'Customer Experience & Operações',
    bio: 'Especialista em jornada do cliente e eficiência operacional com passagem por operações de varejo de alta complexidade. Filipe foi o arquiteto do framework de diagnóstico que se tornou o núcleo metodológico da Oyê.',
  },
  {
    name: 'Carolina Almeida',
    role: 'Supply Chain',
    bio: 'Engenheira com MBA em Gestão de Cadeias de Suprimentos, Carolina viu de perto como soluções tecnológicas eram implantadas em problemas que não eram de tecnologia. Essa frustração tornou-se o motor para criar uma plataforma de diagnóstico antes de recomendação.',
  },
]

const values = [
  {
    title: 'Método & Rigor Técnico',
    text: 'Cada recomendação nasce de um processo estruturado. Não intuição — dado, dimensão, análise.',
  },
  {
    title: 'Curadoria Especializada',
    text: 'A rede Oyê não é um diretório. É uma seleção rigorosa de especialistas com cases reais documentados.',
  },
  {
    title: 'Inteligência de Dados',
    text: 'Cada caso resolvido melhora o próximo diagnóstico. A plataforma aprende com a experiência acumulada.',
  },
  {
    title: 'Relações que Importam',
    text: 'Oyê não apenas conecta. Acompanha. A relação não termina no match — termina na prova do resultado.',
  },
  {
    title: 'Execução com Precisão',
    text: 'A estratégia sem execução é ilusão. Oyê garante que a rota recomendada seja percorrida até o fim.',
  },
  {
    title: 'Confidencialidade Absoluta',
    text: 'O problema que você traz é seu. Tratamos cada diagnóstico com o mesmo sigilo que tratamos os nossos.',
  },
]

export default function AboutPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-hero">
        <div className="container">
          <p className="eyebrow">Sobre a Oyê</p>
          <h1 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-6)', maxWidth: '720px' }}>
            O problema certo muda tudo.
          </h1>
          <p className="lead-text" style={{ maxWidth: '560px' }}>
            Oyê nasceu da experiência acumulada dentro de grandes redes de varejo — onde fundadores
            viram, repetidamente, soluções sofisticadas aplicadas a diagnósticos errados.
          </p>
        </div>
      </section>

      {/* Origin story */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-16)', alignItems: 'start' }}>
            <div>
              <p className="section-label">A origem</p>
              <h2 style={{ marginBottom: 'var(--space-6)' }}>
                Nasceu da frustração de ver a solução certa no problema errado
              </h2>
            </div>
            <div>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--ink-soft)', marginBottom: 'var(--space-4)' }}>
                Os três fundadores da Oyê se conheceram dentro de operações de varejo de grande
                escala. Durante anos, viram a mesma cena se repetir: consultorias renomadas,
                soluções tecnológicas avançadas e times talentosos sendo aplicados a problemas
                que haviam sido mal diagnosticados.
              </p>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--ink-soft)', marginBottom: 'var(--space-4)' }}>
                O resultado era sempre o mesmo — soluções que tecnicamente funcionavam, mas que
                não resolviam o que realmente incomodava. Tempo perdido, recursos desperdiçados
                e uma empresa que voltava ao ponto de partida alguns meses depois.
              </p>
              <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--ink-soft)' }}>
                A pergunta que fundou a Oyê foi simples: e se existisse uma plataforma que
                diagnosticasse com rigor antes de recomendar qualquer solução? Que tratasse o
                problema como o ativo estratégico que ele é — antes de vendê-lo para um provedor?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="section" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="container">
          <p className="section-label">Quem fundou</p>
          <h2 style={{ marginBottom: 'var(--space-12)' }}>Time fundador</h2>

          <div className="team-grid">
            {founders.map(founder => (
              <div key={founder.name} className="team-card">
                <div className="team-card__name">{founder.name}</div>
                <div className="team-card__role">{founder.role}</div>
                <p className="team-card__bio">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ backgroundColor: 'var(--paper-2)' }}>
        <div className="container">
          <p className="section-label">O que nos move</p>
          <h2 style={{ marginBottom: 'var(--space-12)' }}>Valores que estruturam a plataforma</h2>

          <div className="values-grid">
            {values.map(v => (
              <div key={v.title} className="value-item">
                <div className="value-item__title">{v.title}</div>
                <p className="value-item__text">{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="manifesto-section">
        <div className="container">
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: 'var(--space-10)' }}>
            Manifesto Oyê
          </p>
          <div className="manifesto-text">
            <p>Acreditamos que o problema bem diagnosticado já é metade da solução.</p>
            <p>Acreditamos que a solução errada, aplicada com excelência, ainda é a solução errada.</p>
            <p>Acreditamos que a relação entre empresa e consultor deve começar pelo rigor, não pelo pitch.</p>
            <p>Acreditamos que dados acumulados de casos reais valem mais do que qualquer framework genérico.</p>
            <p>Acreditamos que acompanhar a execução é responsabilidade de quem fez o diagnóstico.</p>
            <p style={{ color: 'var(--white)', fontWeight: 800 }}>
              Por isso existe a Oyê. Problemas reais. Soluções certas.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Quer trabalhar com esse princípio na sua empresa?</h2>
          <p className="cta-section__sub">
            Inicie o diagnóstico. Gratuito, estruturado e sem compromisso.
          </p>
          <Link to="/diagnostico/empresa" className="btn btn-white btn-lg">
            Iniciar Diagnóstico
          </Link>
          <Link to="/contato" className="cta-section__link">Ou fale com a equipe</Link>
        </div>
      </section>
    </div>
  )
}
