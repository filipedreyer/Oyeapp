import { Link } from 'react-router-dom'

const SECTIONS = [
  { n: '01', name: 'Empresa', est: '~2 min', desc: 'Setor, porte, estrutura e contexto geral' },
  { n: '02', name: 'Dor percebida', est: '~3 min', desc: 'Descrição do problema, frequência e ineditismo' },
  { n: '03', name: 'Impacto', est: '~2 min', desc: 'Impacto financeiro, operacional e estratégico estimado' },
  { n: '04', name: 'Histórico', est: '~3 min', desc: 'Tentativas anteriores de solução e aprendizados' },
  { n: '05', name: 'Dados disponíveis', est: '~2 min', desc: 'Informações que a empresa já tem sobre o problema' },
  { n: '06', name: 'Revisão', est: '~3 min', desc: 'Conferência e envio do diagnóstico completo' },
]

const AFTER = [
  {
    n: '01',
    title: 'Triagem interna',
    text: 'A equipe Oyê revisa o diagnóstico em até 3 dias úteis e valida a categorização do problema.',
  },
  {
    n: '02',
    title: 'Diagnóstico estruturado',
    text: 'Você recebe o diagnóstico do seu problema com definição precisa, contexto e rota recomendada.',
  },
  {
    n: '03',
    title: 'Lista de especialistas com fit',
    text: 'Se aplicável, uma seleção de consultores e especialistas da rede Oyê avaliados para o seu caso.',
  },
]

export default function CompanyDiagnosisLanding() {
  return (
    <>
      <section className="diag-hero">
        <span className="pub-eyebrow">Diagnóstico Empresarial</span>
        <h1 className="diag-hero__title">O que vamos<br />explorar juntos</h1>
        <p className="diag-hero__lead">
          O diagnóstico Oyê é estruturado, confidencial e leva menos de 15 minutos.
          Não há respostas erradas — quanto mais honesto, mais preciso o resultado.
        </p>
      </section>

      <section className="pub-section pub-section--paper2">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '64px', alignItems: 'start' }}>
            <div>
              <span className="pub-eyebrow">Estrutura do formulário</span>
              <h2 className="pub-headline" style={{ marginBottom: '40px' }}>
                6 seções.<br />15 minutos.
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0', border: '1px solid var(--line)', backgroundColor: 'var(--line)' }}>
                {SECTIONS.map((s, i) => (
                  <div key={s.n} style={{
                    display: 'grid',
                    gridTemplateColumns: '44px 1fr auto',
                    alignItems: 'center',
                    gap: '16px',
                    padding: '20px 24px',
                    backgroundColor: i % 2 === 0 ? 'var(--white)' : 'var(--paper)',
                    borderBottom: '1px solid var(--line)',
                  }}>
                    <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.10em', color: 'var(--navy-mid)' }}>{s.n}</span>
                    <div>
                      <div style={{ fontSize: '0.9375rem', fontWeight: 700, letterSpacing: '-0.02em', color: 'var(--ink)', marginBottom: '2px' }}>{s.name}</div>
                      <div style={{ fontSize: '0.8125rem', color: 'var(--muted)', letterSpacing: '-0.01em' }}>{s.desc}</div>
                    </div>
                    <span style={{ fontSize: '0.75rem', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{s.est}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '40px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <Link to="/diagnostico/empresa/novo" className="btn btn-primary btn-lg">
                  Iniciar agora
                </Link>
                <Link to="/contato" className="btn btn-secondary btn-lg">
                  Tenho dúvidas
                </Link>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ padding: '32px 28px', backgroundColor: 'var(--white)', border: '1px solid var(--line)' }}>
                <span className="pub-eyebrow" style={{ marginBottom: '16px', display: 'block' }}>Confidencialidade</span>
                <div style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--ink)', marginBottom: '16px' }}>
                  Seus dados são tratados com sigilo absoluto
                </div>
                <ul className="profile-list">
                  <li>Nenhuma informação é compartilhada sem sua autorização</li>
                  <li>Dados usados exclusivamente para estruturar o diagnóstico</li>
                  <li>Você pode solicitar exclusão completa dos dados a qualquer momento</li>
                </ul>
              </div>

              <div style={{ padding: '28px', backgroundColor: 'var(--navy-strong)', color: 'var(--white)' }}>
                <span style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--navy-mid)', display: 'block', marginBottom: '12px' }}>
                  Tempo estimado
                </span>
                <div style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', fontWeight: 900, letterSpacing: '-0.08em', lineHeight: 1, color: 'var(--white)', marginBottom: '8px' }}>
                  15 min
                </div>
                <div style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.50)', lineHeight: 1.5 }}>
                  Você pode pausar e retomar a qualquer momento
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pub-section pub-section--white">
        <div className="container">
          <span className="pub-eyebrow">Próximos passos</span>
          <h2 className="pub-headline">O que acontece depois do envio</h2>
          <div className="thesis-grid" style={{ marginTop: '52px' }}>
            {AFTER.map(item => (
              <div key={item.n} className="thesis-item">
                <span className="thesis-item__num">{item.n}</span>
                <div className="thesis-item__title">{item.title}</div>
                <p className="thesis-item__text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="final-cta">
        <h2 className="final-cta__headline">Pronto para começar?</h2>
        <p className="final-cta__sub">Gratuito, confidencial e sem compromisso.</p>
        <Link to="/diagnostico/empresa/novo" className="btn btn-white btn-xl">
          Iniciar agora
        </Link>
        <Link to="/contato" className="final-cta__link">Tenho dúvidas — falar com a equipe</Link>
      </div>
    </>
  )
}
