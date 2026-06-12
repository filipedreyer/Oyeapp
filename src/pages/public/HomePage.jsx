import { Link } from 'react-router-dom'

const WHAT_OYE_DOES = [
  {
    num: '01',
    title: 'Diagnosticar o Problema',
    text: 'Organizar sintomas, contexto, impacto e histórico para entender o desafio real antes de buscar uma solução.',
  },
  {
    num: '02',
    title: 'Definir a melhor solução',
    text: 'Identificar qual tipo de solução faz mais sentido para o problema: consultoria, fornecedor, tecnologia, inovação aberta ou outro caminho.',
  },
  {
    num: '03',
    title: 'Conectar às soluções certas',
    text: 'Conectar o desafio a consultorias, especialistas, fornecedores ou soluções com fit para o caso.',
  },
  {
    num: '04',
    title: 'Decidir com clareza',
    text: 'Comparar caminhos, critérios, riscos e próximos passos antes de avançar.',
  },
  {
    num: '05',
    title: 'Contratar com facilidade',
    text: 'Apoiar a contratação com mais clareza sobre escopo, responsabilidades e expectativas.',
  },
  {
    num: '06',
    title: 'Acompanhar a evolução',
    text: 'Acompanhar andamento, entregas, decisões e aprendizados gerados ao longo do projeto.',
  },
]

const AUDIENCES = [
  {
    label: 'Com Empresas',
    text: 'Para empresas que precisam entender seus desafios, escolher melhores caminhos e contratar soluções com mais clareza.',
    cta: 'Para empresas →',
    to: '/para-empresas',
  },
  {
    label: 'Com Consultores',
    text: 'Para consultores e consultorias que desejam se conectar a demandas qualificadas e compatíveis com sua experiência.',
    cta: 'Para consultores →',
    to: '/para-consultores',
  },
  {
    label: 'Com Fornecedores de Soluções',
    text: 'Para fornecedores que oferecem soluções capazes de resolver problemas empresariais específicos.',
    cta: 'Para fornecedores →',
    to: '/para-fornecedores',
  },
  {
    label: 'Com entidades setoriais',
    text: 'Para entidades que conectam empresas, especialistas, fornecedores, conhecimento e oportunidades de desenvolvimento setorial.',
    cta: 'Para entidades →',
    to: '/para-entidades',
  },
]

const NETWORK_AREAS = [
  'Estratégia', 'Operações', 'Finanças', 'Pessoas',
  'Jurídico', 'Tecnologia', 'Marketing', 'Dados',
  'Inovação', 'Fornecedores de Soluções',
]

const SECTION_PATHS = [
  { label: 'Iniciar Diagnóstico', to: '/diagnostico/empresa', primary: true },
  { label: 'Nossas soluções', to: '/plataforma/solucoes', primary: false },
  { label: 'O que você recebe', to: '/como-funciona', primary: false },
  { label: 'Contratações', to: '/como-funciona#contratacao', primary: false },
  { label: 'Acompanhamento', to: '/plataforma/acompanhamento', primary: false },
]

export default function HomePage() {
  return (
    <>
      {/* ── PRIMEIRA DOBRA ── */}
      <section className="home-hero">
        <div className="home-hero__image" aria-hidden="true">
          <img
            src="/photos/escada.jpg"
            alt=""
            className="home-hero__photo"
          />
        </div>
        <div className="home-hero__content">
          <div className="home-hero__brand">
            <span className="home-hero__title">Oyê</span>
            <span className="home-hero__signature">Plataforma de Soluções</span>
          </div>
          <p className="home-hero__slogan">
            Problemas reais, Soluções certas.
          </p>
          <p className="home-hero__lead">
            A Oyê ajuda empresas a entenderem seus reais desafios, e os conecta com a melhor solução.
          </p>
          <div className="home-hero__ctas">
            <Link to="/diagnostico/empresa" className="btn btn-primary btn-lg">
              Iniciar Diagnóstico →
            </Link>
            <Link to="/como-funciona" className="btn btn-secondary btn-lg">
              Nossa metodologia
            </Link>
          </div>
        </div>
      </section>

      {/* ── O QUE A OYÊ TE AJUDA A FAZER ── */}
      <section className="home-section home-section--white">
        <div className="container">
          <div className="home-section__header">
            <span className="pub-eyebrow">O que fazemos</span>
            <h2 className="pub-headline">O que a Oyê te ajuda a fazer</h2>
          </div>

          <div className="oye-actions-grid">
            {WHAT_OYE_DOES.map(item => (
              <div key={item.num} className="oye-action-item">
                <span className="oye-action-item__num">{item.num}</span>
                <h3 className="oye-action-item__title">{item.title}</h3>
                <p className="oye-action-item__text">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Caminhos de navegação complementar */}
          <div className="section-paths">
            {SECTION_PATHS.map(p => (
              <Link
                key={p.label}
                to={p.to}
                className={`section-path${p.primary ? ' section-path--primary' : ''}`}
              >
                {p.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── COM QUEM ATUAMOS ── */}
      <section className="home-section home-section--paper">
        <div className="container">
          <div className="home-section__header">
            <span className="pub-eyebrow">Nossos públicos</span>
            <h2 className="pub-headline">Com quem atuamos</h2>
          </div>

          <div className="audiences-grid">
            {AUDIENCES.map(a => (
              <div key={a.label} className="audience-block">
                <span className="audience-block__label">{a.label}</span>
                <p className="audience-block__text">{a.text}</p>
                <Link to={a.to} className="audience-block__cta">
                  {a.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── REDE DE ESPECIALISTAS E SOLUÇÕES ── */}
      <section className="home-section home-section--white">
        <div className="container">
          <div className="home-section__header">
            <span className="pub-eyebrow">Nossa rede</span>
            <h2 className="pub-headline">Rede de especialistas e soluções</h2>
          </div>

          <p className="home-network-desc">
            A Oyê reúne especialistas e soluções para diferentes tipos de desafio empresarial.
            A conexão correta acontece a partir do diagnóstico do problema.
          </p>

          <div className="network-composition">
            {['Consultores', 'Consultorias', 'Especialistas', 'Fornecedores de soluções', 'Parceiros de inovação', 'Soluções empresariais'].map(item => (
              <span key={item} className="network-composition__tag">{item}</span>
            ))}
          </div>

          <div className="network-areas-grid">
            {NETWORK_AREAS.map(area => (
              <Link key={area} to="/rede-de-especialistas" className="network-area-item">
                {area}
              </Link>
            ))}
          </div>

          <div className="home-network-ctas">
            <Link to="/rede-de-especialistas" className="btn btn-secondary btn-lg">
              Conhecer a rede →
            </Link>
            <Link to="/diagnostico/empresa" className="btn btn-primary btn-lg">
              Iniciar Diagnóstico
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMECE PELO DIAGNÓSTICO ── */}
      <section className="home-final-cta">
        <div className="container">
          <h2 className="home-final-cta__title">Comece pelo diagnóstico.</h2>
          <p className="home-final-cta__text">
            Conte o desafio da sua empresa. A Oyê organiza o problema e indica
            o melhor caminho para avançar.
          </p>
          <Link to="/diagnostico/empresa" className="btn btn-white btn-xl">
            Iniciar Diagnóstico →
          </Link>
        </div>
      </section>
    </>
  )
}
