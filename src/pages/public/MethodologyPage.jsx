import { Link } from 'react-router-dom'

const gates = [
  {
    n: '01',
    name: 'Entrada',
    subtitle: 'Lead qualificado e triagem de sintomas',
    bg: 'var(--paper)',
    content: (
      <div>
        <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--ink-soft)', marginBottom: 'var(--space-6)' }}>
          O processo começa com a qualificação do lead e a triagem dos sintomas apresentados.
          Nesta etapa, a plataforma coleta informações básicas sobre a empresa, o setor e a
          natureza do problema percebido. O objetivo não é já ter a resposta — é ter os dados
          brutos para o diagnóstico estruturado.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
          {[
            { title: 'Qualificação do lead', desc: 'Porte, setor, estrutura e maturidade da empresa.' },
            { title: 'Triagem de sintomas', desc: 'Primeira descrição do problema em linguagem natural.' },
            { title: 'Classificação inicial', desc: 'Categorização preliminar para direcionar as perguntas seguintes.' },
            { title: 'Validação de entrada', desc: 'Confirmação de que há problema real a ser diagnosticado.' },
          ].map(item => (
            <div key={item.title} className="gate-detail-card">
              <h4>{item.title}</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: 'var(--leading-relaxed)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    n: '02',
    name: 'Gate 1 — Diagnóstico',
    subtitle: 'Seis dimensões de análise estruturada',
    bg: 'var(--white)',
    content: (
      <div>
        <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--ink-soft)', marginBottom: 'var(--space-6)' }}>
          O coração da metodologia Oyê. O diagnóstico é construído sobre seis dimensões
          independentes que, combinadas, formam um mapa preciso do problema. Cada dimensão
          gera dados legíveis para o cliente e dados estruturados para os modelos internos.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)', marginBottom: 'var(--space-8)' }}>
          {[
            { n: 'D1', name: 'Frequência', desc: 'Com que regularidade o problema se manifesta?' },
            { n: 'D2', name: 'Ineditismo', desc: 'É um problema novo ou recorrente na empresa?' },
            { n: 'D3', name: 'Complexidade', desc: 'Quantas variáveis e partes da organização envolve?' },
            { n: 'D4', name: 'Urgência', desc: 'Qual o impacto imediato de não resolver agora?' },
            { n: 'D5', name: 'Mercado', desc: 'É um problema de contexto ou de gestão interna?' },
            { n: 'D6', name: 'Histórico de tentativas', desc: 'O que já foi tentado e por que não funcionou?' },
          ].map(d => (
            <div key={d.n} style={{ border: 'var(--border)', padding: 'var(--space-5)' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: 'var(--space-2)' }}>{d.n}</div>
              <div style={{ fontWeight: 800, marginBottom: 'var(--space-2)' }}>{d.name}</div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: 'var(--leading-relaxed)' }}>{d.desc}</p>
            </div>
          ))}
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
          <div className="gate-detail-card">
            <h4>Saída legível para o cliente</h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: 'var(--leading-relaxed)' }}>
              Relatório em linguagem natural com o diagnóstico estruturado, mapeamento do problema
              e recomendações de rota. Entregue por email em até 3 dias úteis.
            </p>
          </div>
          <div className="gate-detail-card">
            <h4>Dado estruturado para inteligência</h4>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: 'var(--leading-relaxed)' }}>
              Cada diagnóstico alimenta a base de dados proprietária Oyê — que torna os próximos
              matches mais precisos e os diagnósticos futuros mais rápidos.
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    n: '03',
    name: 'Gate 2 — Rota de Solução',
    subtitle: 'Sete rotas possíveis, uma recomendada',
    bg: 'var(--paper)',
    content: (
      <div>
        <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--ink-soft)', marginBottom: 'var(--space-8)' }}>
          A partir do diagnóstico completo, a plataforma identifica a rota mais adequada entre
          sete possibilidades. A rota não é escolhida por preferência — é derivada das dimensões
          mapeadas no diagnóstico.
        </p>
        <div className="routes-grid">
          {[
            { n: 'R1', name: 'Marketplace curado', desc: 'Shortlist de provedores homologados com cases similares.' },
            { n: 'R2', name: 'Produto Oyê', desc: 'Solução desenvolvida diretamente pela plataforma.' },
            { n: 'R3', name: 'Inovação aberta', desc: 'Desafio aberto para a rede de inovadores e startups.' },
            { n: 'R4', name: 'Comunidade', desc: 'Acesso a grupos de especialistas e pares de setor.' },
            { n: 'R5', name: 'Orquestração conjunta', desc: 'Múltiplos provedores coordenados pela Oyê.' },
            { n: 'R6', name: 'Venture', desc: 'Problema com potencial de solução via investimento ou spin-off.' },
            { n: 'R7', name: 'Sinal para Frente 2', desc: 'Problema inédito que alimenta a inteligência estratégica.' },
          ].map(r => (
            <div key={r.n} className="route-card">
              <div className="route-card__number">{r.n}</div>
              <div className="route-card__name">{r.name}</div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', marginTop: 'var(--space-2)', lineHeight: 'var(--leading-relaxed)' }}>{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    n: '04',
    name: 'Execução',
    subtitle: 'Shortlist, proposta e acompanhamento',
    bg: 'var(--white)',
    content: (
      <div>
        <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--ink-soft)', marginBottom: 'var(--space-6)' }}>
          Quando a rota é o marketplace curado, a Oyê apresenta uma shortlist de provedores
          com cases similares ao problema diagnosticado. Não é um ranking genérico — é uma
          curadoria baseada no diagnóstico específico da empresa.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
          {[
            { title: 'Shortlist curada', desc: 'Até 3 provedores selecionados por aderência ao diagnóstico, não por popularidade.' },
            { title: 'Proposta estruturada', desc: 'Apresentação de escopo, metodologia, prazo e investimento em formato padronizado.' },
            { title: 'Acompanhamento ativo', desc: 'A Oyê mantém contato durante a execução para identificar desvios e apoiar ajustes.' },
            { title: 'Checkpoint de meio', desc: 'Avaliação formal de progresso no meio do projeto para garantir alinhamento.' },
          ].map(item => (
            <div key={item.title} className="gate-detail-card">
              <h4>{item.title}</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: 'var(--leading-relaxed)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    n: '05',
    name: 'Gate 3 — Prova e Aprendizado',
    subtitle: 'Resultado, métricas e inteligência acumulada',
    bg: 'var(--paper)',
    content: (
      <div>
        <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--ink-soft)', marginBottom: 'var(--space-6)' }}>
          O projeto não termina com a entrega. Termina com a prova — a medição rigorosa do
          resultado obtido e a documentação do aprendizado gerado. Cada caso encerrado
          enriquece a inteligência da plataforma.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
          {[
            { title: 'Resultado medido', desc: 'Comparação entre o problema original e o estado pós-projeto.' },
            { title: 'Métricas de satisfação', desc: 'Avaliação da empresa sobre o processo, o provedor e o resultado.' },
            { title: 'Desvios documentados', desc: 'O que não saiu como planejado e por quê — dado valioso para o futuro.' },
            { title: 'Aprendizados capturados', desc: 'O que funcionou e pode ser replicado em casos similares.' },
            { title: 'Provedor avaliado', desc: 'Avaliação formal do provedor adicionada ao perfil homologado.' },
            { title: 'Alimentação da Frente 2', desc: 'Dados estruturados incorporados à inteligência estratégica Oyê.' },
          ].map(item => (
            <div key={item.title} className="gate-detail-card">
              <h4>{item.title}</h4>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: 'var(--leading-relaxed)' }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
]

export default function MethodologyPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-hero">
        <div className="container">
          <p className="eyebrow">Metodologia de Precisão</p>
          <h1 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-6)', maxWidth: '720px' }}>
            Estrutura que transforma dor em resultado
          </h1>
          <p className="lead-text" style={{ maxWidth: '560px' }}>
            A metodologia Oyê não é um processo linear de vendas — é um framework de diagnóstico
            construído para garantir que a solução certa chegue ao problema certo, no momento certo.
          </p>
        </div>
      </section>

      {/* Overview steps */}
      <section className="methodology-section" style={{ paddingTop: 'var(--space-16)', paddingBottom: 'var(--space-16)' }}>
        <div className="container">
          <p className="section-label">Visão geral</p>
          <div className="methodology-steps">
            {[
              { n: '01', name: 'Entrada', desc: 'Qualificação do lead e triagem de sintomas.' },
              { n: '02', name: 'Gate 1 — Diagnóstico', desc: '6 dimensões de análise estruturada.' },
              { n: '03', name: 'Gate 2 — Rota', desc: '7 rotas possíveis, uma recomendada.' },
              { n: '04', name: 'Execução', desc: 'Shortlist, proposta e acompanhamento.' },
              { n: '05', name: 'Gate 3 — Prova', desc: 'Resultado, métricas e aprendizado.' },
            ].map(step => (
              <div key={step.n} className="step-item">
                <div className="step-item__number">{step.n}</div>
                <div className="step-item__name">{step.name}</div>
                <p className="step-item__desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed gates */}
      {gates.map((gate) => (
        <section key={gate.n} className="gate-section" style={{ backgroundColor: gate.bg }}>
          <div className="container">
            <div className="gate-header">
              <div className="gate-number">{gate.n}</div>
              <div>
                <p className="section-label" style={{ marginBottom: 'var(--space-3)' }}>{gate.name}</p>
                <h2 style={{ marginBottom: 'var(--space-6)' }}>{gate.subtitle}</h2>
                {gate.content}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Frente 2 */}
      <section style={{ backgroundColor: 'var(--navy-strong)', padding: 'var(--space-24) 0' }}>
        <div className="container">
          <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--copper)', borderBottom: '1px solid rgba(199,119,44,0.3)', paddingBottom: 'var(--space-2)', marginBottom: 'var(--space-6)' }}>
            Frente 2 — Inteligência Estratégica
          </p>
          <h2 style={{ color: 'var(--white)', maxWidth: '680px', marginBottom: 'var(--space-6)', letterSpacing: 'var(--tracking-tighter)' }}>
            Cada caso é dado. Dados acumulam inteligência.
          </h2>
          <p style={{ fontSize: 'var(--text-lg)', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-10)' }}>
            A Frente 2 é o motor de inteligência da plataforma Oyê. Cada diagnóstico concluído,
            cada caso encerrado e cada desvio documentado alimenta modelos que tornam os próximos
            matches mais precisos. Com o tempo, a plataforma não apenas conecta — ela aprende
            quais problemas têm soluções mais eficazes, em quais condições, em quais setores.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-4)' }}>
            {[
              { label: 'Padrões de problema', desc: 'Categorização acumulada de tipos de problema por setor e porte.' },
              { label: 'Efetividade de solução', desc: 'Rastreamento de qual rota funciona para qual tipo de problema.' },
              { label: 'Match preditivo', desc: 'Modelos que antecipam o provedor certo antes mesmo do diagnóstico completo.' },
            ].map(item => (
              <div key={item.label} style={{ border: '1px solid rgba(255,255,255,0.1)', padding: 'var(--space-6)', backgroundColor: 'rgba(255,255,255,0.03)' }}>
                <div style={{ fontWeight: 800, color: 'var(--white)', marginBottom: 'var(--space-3)', fontSize: 'var(--text-base)' }}>{item.label}</div>
                <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.55)', lineHeight: 'var(--leading-relaxed)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Pronto para aplicar a metodologia ao seu problema?</h2>
          <p className="cta-section__sub">
            Inicie o diagnóstico. É gratuito, estruturado e leva menos de 15 minutos.
          </p>
          <Link to="/diagnostico/empresa" className="btn btn-white btn-lg">
            Iniciar Diagnóstico
          </Link>
        </div>
      </section>
    </div>
  )
}
