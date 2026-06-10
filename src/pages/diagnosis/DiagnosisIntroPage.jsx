import { Link } from 'react-router-dom'

export default function DiagnosisIntroPage() {
  return (
    <div>
      {/* Hero */}
      <section className="section-hero">
        <div className="container">
          <p className="eyebrow">Diagnóstico de Empresa</p>
          <h1 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-6)', maxWidth: '680px' }}>
            Antes da solução, o problema.
          </h1>
          <p className="lead-text" style={{ maxWidth: '560px' }}>
            O diagnóstico Oyê captura a natureza real da sua dor: frequência, impacto, histórico
            de tentativas e contexto de mercado. Com isso, a plataforma estrutura uma rota de
            solução precisa — não uma recomendação genérica.
          </p>
        </div>
      </section>

      {/* Entry cards */}
      <section className="section" style={{ backgroundColor: 'var(--paper-2)' }}>
        <div className="container">
          <p className="section-label">Como você está chegando?</p>
          <h2 style={{ marginBottom: 'var(--space-10)' }}>Escolha o ponto de entrada</h2>

          <div className="diagnosis-entry-grid">
            <div className="diagnosis-entry-card">
              <div className="diagnosis-entry-card__type">Hipótese formada</div>
              <div className="diagnosis-entry-card__title">
                Sei que tenho um problema e tenho uma hipótese
              </div>
              <p className="diagnosis-entry-card__desc">
                Você já identificou o sintoma e tem uma ideia do que pode estar causando. O
                diagnóstico vai validar, refinar e estruturar esse entendimento para garantir
                que a solução seja aplicada no lugar certo.
              </p>
              <Link to="/diagnostico/empresa/novo" className="btn btn-primary">
                Iniciar
              </Link>
            </div>

            <div className="diagnosis-entry-card">
              <div className="diagnosis-entry-card__type">Dor difusa</div>
              <div className="diagnosis-entry-card__title">
                Tenho uma dor, mas não consigo nomeá-la
              </div>
              <p className="diagnosis-entry-card__desc">
                Algo claramente não funciona, mas você não consegue articular o problema com
                precisão. O diagnóstico Oyê foi desenhado exatamente para esse momento — ele
                ajuda a transformar sintomas em problema nomeado.
              </p>
              <Link to="/diagnostico/empresa/novo" className="btn btn-primary">
                Iniciar
              </Link>
            </div>

            <div className="diagnosis-entry-card">
              <div className="diagnosis-entry-card__type">Exploração preventiva</div>
              <div className="diagnosis-entry-card__title">
                Quero avaliar se existe um problema oculto
              </div>
              <p className="diagnosis-entry-card__desc">
                A empresa vai bem, mas você quer garantir que não existe uma disfunção estrutural
                se desenvolvendo. O diagnóstico identifica padrões antes que se tornem crises.
              </p>
              <Link to="/diagnostico/empresa/novo" className="btn btn-primary">
                Iniciar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ backgroundColor: 'var(--paper)' }}>
        <div className="container">
          <p className="section-label">O que acontece depois</p>
          <h2 style={{ marginBottom: 'var(--space-10)' }}>Da entrada à solução</h2>

          <div className="diagnosis-timeline">
            {[
              { n: '01', name: 'Intake', detail: 'Formulário estruturado — ~15 min' },
              { n: '02', name: 'Triagem', detail: '2–3 dias úteis com a equipe Oyê' },
              { n: '03', name: 'Diagnóstico', detail: 'Relatório entregue por email' },
              { n: '04', name: 'Rota recomendada', detail: 'Shortlist de provedores ou rota alternativa' },
              { n: '05', name: 'Solução', detail: 'Início do projeto com acompanhamento Oyê' },
            ].map(step => (
              <div key={step.n} className="timeline-step">
                <div className="timeline-step__number">{step.n}</div>
                <div className="timeline-step__name">{step.name}</div>
                <div className="timeline-step__detail">{step.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <p className="section-label">Perguntas frequentes</p>
          <h2 style={{ marginBottom: 'var(--space-10)' }}>Antes de começar</h2>

          <div className="faq-list" style={{ maxWidth: '720px' }}>
            <div className="faq-item">
              <div className="faq-item__question">Meus dados são confidenciais?</div>
              <p className="faq-item__answer">
                Sim. Todas as informações inseridas no diagnóstico são tratadas com sigilo absoluto.
                Nenhum dado é compartilhado com terceiros sem sua autorização explícita. Os dados
                são usados exclusivamente para estruturar o diagnóstico e melhorar os modelos
                internos da plataforma, de forma agregada e anonimizada.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-item__question">Preciso saber a solução antes de iniciar?</div>
              <p className="faq-item__answer">
                Não. O diagnóstico foi desenhado para quem ainda não sabe qual é a solução — e
                inclusive para quem acha que sabe, mas precisa validar. Você só precisa saber
                que existe um problema, ou que suspeita de um.
              </p>
            </div>
            <div className="faq-item">
              <div className="faq-item__question">Quanto tempo leva?</div>
              <p className="faq-item__answer">
                O formulário de intake leva aproximadamente 15 minutos para ser preenchido. Após
                o envio, a equipe Oyê realiza a triagem em até 3 dias úteis e entrega o
                diagnóstico estruturado por email com as próximas etapas recomendadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>Pronto para estruturar o problema?</h2>
          <p className="cta-section__sub">
            O diagnóstico é gratuito, confidencial e leva menos de 15 minutos.
          </p>
          <Link to="/diagnostico/empresa/novo" className="btn btn-white btn-lg">
            Começar diagnóstico
          </Link>
        </div>
      </section>
    </div>
  )
}
