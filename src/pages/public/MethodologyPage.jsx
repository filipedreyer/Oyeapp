import { Link } from 'react-router-dom'

const GATES = [
  {
    num: 'Entrada',
    title: 'Triagem e qualificação',
    lead: 'Todo caso começa com um intake estruturado. A empresa descreve o sintoma percebido, hipótese e impacto — antes de qualquer recomendação de solução.',
    bg: 'paper2',
    items: [
      { t: 'Sintoma percebido', d: 'O que está acontecendo — não o que a empresa já acha que é o problema.' },
      { t: 'Hipótese do cliente', d: 'O que a empresa acredita que causa a dor. Importante registrar antes do diagnóstico.' },
      { t: 'Impacto e urgência', d: 'Qual o custo real de não resolver — financeiro, operacional, estratégico.' },
      { t: 'Histórico de tentativas', d: 'O que já foi tentado antes. Cada tentativa fracassada é uma evidência diagnóstica.' },
    ],
  },
  {
    num: 'Gate 1',
    title: 'Diagnóstico',
    lead: 'A equipe Oyê analisa a demanda em seis dimensões. O resultado são dois outputs: um legível para o cliente, um estruturado para a base de inteligência.',
    bg: 'white',
    dims: [
      { t: 'Frequência', d: 'Com que regularidade o problema ocorre? Raro ou recorrente?' },
      { t: 'Ineditismo', d: 'É um problema genérico de mercado ou específico deste contexto?' },
      { t: 'Complexidade', d: 'Envolve múltiplos fatores, departamentos, sistemas?' },
      { t: 'Urgência', d: 'O problema se agrava com o tempo ou pode esperar?' },
      { t: 'Mercado', d: 'Qual o tamanho do mercado afetado por este tipo de problema?' },
      { t: 'Histórico de tentativas', d: 'Quantas soluções foram testadas e por quê falharam?' },
    ],
  },
  {
    num: 'Gate 2',
    title: 'Definição de rota',
    lead: 'Com o diagnóstico aprovado, a equipe define a rota de solução adequada. Não existe uma única resposta — existem sete possibilidades, cada uma com racional registrado.',
    bg: 'paper2',
    routes: [
      'Marketplace curado', 'Produto Oyê', 'Inovação aberta',
      'Comunidade', 'Orquestração conjunta', 'Venture / Co-desenvolvimento', 'Sinal para Frente 2',
    ],
  },
  {
    num: 'Execução',
    title: 'Shortlist, proposta e acompanhamento',
    lead: 'Somente provedores homologados entram em shortlist. A proposta é construída com escopo, critérios de sucesso e marcos de acompanhamento definidos antes do início.',
    bg: 'white',
    items: [
      { t: 'Shortlist qualificada', d: 'Apenas provedores com histórico comprovado no tipo de problema.' },
      { t: 'Proposta com escopo fechado', d: 'Entregáveis, prazo e critérios de sucesso definidos antes do contrato.' },
      { t: 'Acompanhamento de execução', d: 'Marcos de check-in, gestão de risco e ajuste de escopo documentados.' },
    ],
  },
  {
    num: 'Gate 3',
    title: 'Prova e aprendizado',
    lead: 'Nenhum projeto encerra sem captura de resultado. Gate 3 registra o que funcionou, o que não funcionou e os sinais que alimentam a Frente 2.',
    bg: 'paper2',
    items: [
      { t: 'Resultado e métricas', d: 'O que foi alcançado vs. o que estava previsto.' },
      { t: 'Prova de solução', d: 'Evidência objetiva de que o problema foi resolvido.' },
      { t: 'Satisfação e desvios', d: 'Avaliação de cliente e provedor. Causas dos desvios identificadas.' },
      { t: 'Aprendizados estruturados', d: 'O que funcionou, o que não funcionou.' },
      { t: 'Sinais para Frente 2', d: 'Padrões, gaps de solução e oportunidades de produto ou venture.' },
    ],
  },
]

export default function MethodologyPage() {
  return (
    <>
      <section className="diag-hero">
        <div className="container">
          <span className="pub-eyebrow">Metodologia</span>
          <h1 className="diag-hero__title">Cinco passos.<br />Um método.</h1>
          <p className="diag-hero__lead">
            A metodologia Oyê foi construída para corrigir o erro mais caro de qualquer
            empresa: aplicar uma solução no problema errado. Cada etapa tem uma lógica,
            um output e uma regra de avanço.
          </p>
        </div>
      </section>

      {GATES.map((gate, i) => (
        <div key={i} className={`gate-card gate-card--${gate.bg}`}>
          <div className="container">
            <span className="gate-card__num">{gate.num}</span>
            <h2 className="gate-card__title">{gate.title}</h2>
            <p className="gate-card__lead">{gate.lead}</p>

            {gate.dims && (
              <div className="gate-dims">
                {gate.dims.map(d => (
                  <div key={d.t} className="gate-dim">
                    <div className="gate-dim__title">{d.t}</div>
                    <p className="gate-dim__text">{d.d}</p>
                  </div>
                ))}
              </div>
            )}

            {gate.routes && (
              <div className="route-tags">
                {gate.routes.map(r => <span key={r} className="route-tag">{r}</span>)}
              </div>
            )}

            {gate.items && (
              <ul className="profile-list" style={{ marginTop: '16px' }}>
                {gate.items.map(it => (
                  <li key={it.t}>
                    <strong style={{ color: 'var(--ink)' }}>{it.t}:</strong>{' '}
                    <span style={{ color: 'var(--muted)' }}>{it.d}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      ))}

      <section className="pub-section pub-section--navy">
        <div className="container">
          <span className="pub-eyebrow">Frente 2</span>
          <h2 className="pub-headline">Inteligência acumulada</h2>
          <p className="pub-lead">
            A Frente 1 resolve e aprende. A Frente 2 transforma esse aprendizado em
            valor escalável — clusters de problema, gaps de solução e inteligência de mercado.
          </p>
          <div style={{ marginTop: '40px' }}>
            <Link to="/diagnostico/empresa" className="btn btn-white btn-lg">
              Iniciar diagnóstico →
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
