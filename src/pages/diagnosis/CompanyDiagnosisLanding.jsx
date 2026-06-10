import { Link } from 'react-router-dom'

const sections = [
  { n: '01', name: 'Empresa', est: '~2 min', desc: 'Setor, porte, estrutura e contexto geral' },
  { n: '02', name: 'Dor percebida', est: '~3 min', desc: 'Descrição do problema, frequência e ineditismo' },
  { n: '03', name: 'Impacto', est: '~2 min', desc: 'Impacto financeiro, operacional e estratégico estimado' },
  { n: '04', name: 'Histórico', est: '~3 min', desc: 'Tentativas anteriores de solução e aprendizados' },
  { n: '05', name: 'Dados disponíveis', est: '~2 min', desc: 'Informações que a empresa já tem sobre o problema' },
  { n: '06', name: 'Revisão', est: '~3 min', desc: 'Conferência e envio do diagnóstico completo' },
]

export default function CompanyDiagnosisLanding() {
  return (
    <div>
      {/* Hero */}
      <section className="section-hero">
        <div className="container">
          <p className="eyebrow">Diagnóstico Empresarial</p>
          <h1 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-6)', maxWidth: '680px' }}>
            O que vamos explorar juntos
          </h1>
          <p className="lead-text" style={{ maxWidth: '560px' }}>
            O diagnóstico Oyê é estruturado, confidencial e leva menos de 15 minutos.
            Não há respostas erradas — quanto mais honesto, mais preciso o resultado.
          </p>
        </div>
      </section>

      {/* Sections checklist */}
      <section className="section" style={{ backgroundColor: 'var(--paper-2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: 'var(--space-16)', alignItems: 'start' }}>
            <div>
              <p className="section-label">Estrutura do formulário</p>
              <h2 style={{ marginBottom: 'var(--space-8)' }}>
                6 seções. 15 minutos. Diagnóstico completo.
              </h2>

              <div className="landing-checklist">
                {sections.map(s => (
                  <div key={s.n} className="checklist-item">
                    <span className="checklist-item__number">{s.n}</span>
                    <div>
                      <div className="checklist-item__name">{s.name}</div>
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginTop: '2px' }}>{s.desc}</div>
                    </div>
                    <span className="checklist-item__est">{s.est}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'var(--space-10)', display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
                <Link to="/diagnostico/empresa/novo" className="btn btn-primary btn-lg">
                  Iniciar agora
                </Link>
                <Link to="/contato" className="btn btn-secondary btn-lg">
                  Tenho dúvidas
                </Link>
              </div>
            </div>

            <div>
              <div className="card" style={{ borderTop: '3px solid var(--ink)' }}>
                <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>Confidencialidade</p>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>
                  Seus dados são tratados com sigilo absoluto
                </h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                  {[
                    'Nenhuma informação é compartilhada sem sua autorização',
                    'Dados usados exclusivamente para estruturar o diagnóstico',
                    'Armazenamento seguro com criptografia de ponta a ponta',
                    'Você pode solicitar exclusão completa dos dados a qualquer momento',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                      <span style={{
                        display: 'inline-block',
                        width: '8px',
                        height: '8px',
                        background: 'var(--positive)',
                        flexShrink: 0,
                        marginTop: '6px',
                      }} />
                      <span style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-soft)', lineHeight: 'var(--leading-relaxed)' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{
                marginTop: 'var(--space-6)',
                background: 'var(--sand)',
                padding: 'var(--space-6)',
                borderLeft: '3px solid var(--copper)',
              }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: 'var(--space-3)' }}>
                  Tempo estimado
                </div>
                <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 900, letterSpacing: 'var(--tracking-tighter)', color: 'var(--ink)' }}>
                  15 min
                </div>
                <div style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', marginTop: 'var(--space-2)' }}>
                  Você pode pausar e retomar a qualquer momento
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What happens after */}
      <section className="section" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="container">
          <p className="section-label">Próximos passos</p>
          <h2 style={{ marginBottom: 'var(--space-10)' }}>O que acontece depois do envio</h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 'var(--space-6)' }}>
            {[
              {
                n: '01',
                title: 'Triagem interna',
                text: 'A equipe Oyê revisa o diagnóstico em até 3 dias úteis e valida a categorização do problema.',
              },
              {
                n: '02',
                title: 'Diagnóstico estruturado',
                text: 'Você recebe um relatório por email com o problema mapeado nas 6 dimensões e a rota recomendada.',
              },
              {
                n: '03',
                title: 'Shortlist de provedores',
                text: 'Se aplicável, uma shortlist curada de consultores ou empresas da rede homologada é apresentada.',
              },
            ].map(item => (
              <div key={item.n} className="card" style={{ borderTop: '3px solid var(--copper)' }}>
                <div style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--copper)', marginBottom: 'var(--space-3)' }}>
                  Etapa {item.n}
                </div>
                <h3 style={{ fontSize: 'var(--text-lg)', marginBottom: 'var(--space-3)' }}>{item.title}</h3>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: 'var(--leading-relaxed)' }}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Pronto para começar?</h2>
          <p className="cta-section__sub">
            Gratuito, confidencial e sem compromisso. 15 minutos para clareza estratégica.
          </p>
          <Link to="/diagnostico/empresa/novo" className="btn btn-white btn-lg">
            Iniciar agora
          </Link>
          <Link to="/contato" className="cta-section__link">Tenho dúvidas — falar com a equipe</Link>
        </div>
      </section>
    </div>
  )
}
