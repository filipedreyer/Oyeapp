import { Link } from 'react-router-dom'

const WHAT_WILL_BE_ASKED = [
  { label: 'Identificação', desc: 'Nome, tipo de provedor, região, contato' },
  { label: 'Áreas de atuação', desc: 'Especialidades, setores, tipos de problema que você resolve' },
  { label: 'Tipos de problema', desc: 'Descrição dos problemas que você resolve, com exemplos' },
  { label: 'Cases e evidências', desc: 'Dois cases com contexto e resultado, publicações, prêmios' },
  { label: 'Referências', desc: 'Contatos que possam confirmar seu trabalho (consultados somente se necessário)' },
  { label: 'Disponibilidade e modelo', desc: 'Disponibilidade atual, horas semanais, faixa de preço, modelo comercial preferido' },
]

const CRITERIA = [
  'Experiência comprovada com pelo menos 2 casos bem-sucedidos',
  'Clareza sobre o tipo de problema que resolve e para quem',
  'Disponibilidade mínima para acompanhar demandas',
  'Postura consultiva e foco em resultado do cliente',
  'Alinhamento com os valores de transparência e método da rede Oyê',
]

export default function ProviderApplicationIntroPage() {
  return (
    <div style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      <div className="container" style={{ padding: 'var(--space-16) var(--space-8)', maxWidth: 800, margin: '0 auto' }}>

        {/* Breadcrumb */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Link to="/provedores" style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
            ← Provedores
          </Link>
        </div>

        <p className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Candidatura</p>
        <h1 style={{ fontSize: 'var(--text-3xl)', fontWeight: 900, letterSpacing: 'var(--tracking-tighter)', marginBottom: 'var(--space-4)' }}>
          Sobre o processo de candidatura
        </h1>
        <p className="lead-text" style={{ color: 'var(--muted)', marginBottom: 'var(--space-10)' }}>
          Antes de iniciar, entenda o que será perguntado, os critérios de avaliação e o tempo estimado.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-10)', marginBottom: 'var(--space-10)' }}>

          {/* What will be asked */}
          <div>
            <p className="section-label" style={{ marginBottom: 'var(--space-5)' }}>O que será perguntado</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {WHAT_WILL_BE_ASKED.map((item, i) => (
                <div key={item.label} style={{ display: 'flex', gap: 'var(--space-4)', padding: 'var(--space-4)', background: 'var(--white)', border: 'var(--border)' }}>
                  <div style={{ width: 24, height: 24, background: 'var(--ink)', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 'var(--text-xs)', fontWeight: 700, flexShrink: 0 }}>
                    {i + 1}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, fontSize: 'var(--text-sm)', marginBottom: 'var(--space-1)' }}>{item.label}</div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', lineHeight: 'var(--leading-relaxed)' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Criteria + info */}
          <div>
            <div style={{ marginBottom: 'var(--space-8)' }}>
              <p className="section-label" style={{ marginBottom: 'var(--space-5)' }}>Critérios de homologação</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {CRITERIA.map(c => (
                  <li key={c} style={{ display: 'flex', gap: 'var(--space-3)', fontSize: 'var(--text-sm)', color: 'var(--ink-soft)', lineHeight: 'var(--leading-relaxed)' }}>
                    <span style={{ color: 'var(--positive)', fontWeight: 900, flexShrink: 0 }}>✓</span>
                    {c}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: 'var(--sand)', padding: 'var(--space-6)', marginBottom: 'var(--space-6)' }}>
              <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 'var(--space-3)' }}>
                Tempo estimado
              </div>
              <div style={{ fontSize: 'var(--text-xl)', fontWeight: 900, letterSpacing: 'var(--tracking-tight)' }}>
                ~20 minutos
              </div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', marginTop: 'var(--space-2)', lineHeight: 'var(--leading-relaxed)' }}>
                Você pode salvar e retomar depois. Suas respostas ficam salvas automaticamente.
              </p>
            </div>

            <div style={{ padding: 'var(--space-5)', border: 'var(--border)', background: 'var(--white)', fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: 'var(--leading-relaxed)' }}>
              <strong style={{ color: 'var(--ink)' }}>Próximos passos após o envio:</strong> Análise em até 5 dias úteis, seguida de entrevista. A homologação não é automática — cada candidatura é avaliada individualmente.
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-4)', alignItems: 'center', paddingTop: 'var(--space-8)', borderTop: 'var(--border)' }}>
          <Link to="/provedores/candidatura/novo" className="btn btn-primary btn-lg">
            Iniciar candidatura
          </Link>
          <Link to="/provedores" className="btn btn-ghost">
            Voltar
          </Link>
        </div>

      </div>
    </div>
  )
}
