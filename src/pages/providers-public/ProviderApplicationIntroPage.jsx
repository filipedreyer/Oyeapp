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
    <>
      <section className="diag-hero">
        <div style={{ marginBottom: '12px' }}>
          <Link to="/para-consultores" style={{ fontSize: '0.8125rem', color: 'var(--muted)', letterSpacing: '-0.01em' }}>
            ← Provedores
          </Link>
        </div>
        <span className="pub-eyebrow">Candidatura</span>
        <h1 className="diag-hero__title">Sobre o processo<br />de candidatura</h1>
        <p className="diag-hero__lead">
          Antes de iniciar, entenda o que será perguntado, os critérios de avaliação e o tempo estimado.
        </p>
      </section>

      <section className="pub-section pub-section--paper2">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'start' }}>

            <div>
              <span className="pub-eyebrow">O que será perguntado</span>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '0',
                border: '1px solid var(--line)',
                backgroundColor: 'var(--line)',
                marginTop: '32px',
              }}>
                {WHAT_WILL_BE_ASKED.map((item, i) => (
                  <div key={item.label} style={{
                    display: 'flex',
                    gap: '16px',
                    padding: '20px 24px',
                    backgroundColor: 'var(--white)',
                    borderBottom: '1px solid var(--line)',
                    alignItems: 'flex-start',
                  }}>
                    <div style={{
                      width: 24, height: 24,
                      backgroundColor: 'var(--ink)',
                      color: 'var(--white)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.6875rem',
                      fontWeight: 800,
                      flexShrink: 0,
                    }}>
                      {i + 1}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: '0.9375rem', letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '2px' }}>
                        {item.label}
                      </div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', lineHeight: 1.5 }}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <span className="pub-eyebrow">Critérios de homologação</span>
              <ul className="profile-list" style={{ marginTop: '32px' }}>
                {CRITERIA.map(c => <li key={c}>{c}</li>)}
              </ul>

              <div style={{ marginTop: '36px', padding: '28px', backgroundColor: 'var(--navy-strong)', color: 'var(--white)' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--copper)', display: 'block', marginBottom: '12px' }}>
                  Tempo estimado
                </span>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.08em', lineHeight: 1, color: 'var(--white)', marginBottom: '8px' }}>
                  ~20 min
                </div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.50)', lineHeight: 1.5 }}>
                  Você pode salvar e retomar depois.
                </div>
              </div>

              <div style={{ marginTop: '16px', padding: '24px 28px', border: '1px solid var(--line)', backgroundColor: 'var(--white)', fontSize: '0.875rem', color: 'var(--muted)', lineHeight: 1.6 }}>
                <strong style={{ color: 'var(--ink)' }}>Próximos passos após o envio:</strong> Análise em até 5 dias úteis, seguida de entrevista. A homologação não é automática — cada candidatura é avaliada individualmente.
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', gap: '12px', alignItems: 'center', paddingTop: '48px', borderTop: '1px solid var(--line)', marginTop: '48px' }}>
            <Link to="/para-consultores/candidatura/novo" className="btn btn-primary btn-lg">
              Iniciar candidatura
            </Link>
            <Link to="/para-consultores" className="btn btn-secondary btn-lg">
              Voltar
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
