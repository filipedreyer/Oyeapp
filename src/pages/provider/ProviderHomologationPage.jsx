import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const STEPS = [
  { id: 1, label: 'Candidatura enviada', desc: 'Formulário de candidatura recebido pela equipe Oyê.' },
  { id: 2, label: 'Em análise', desc: 'A equipe Oyê está revisando seu perfil, experiências e cases.' },
  { id: 3, label: 'Entrevista', desc: 'Uma conversa com a equipe Oyê para aprofundar o conhecimento mútuo.' },
  { id: 4, label: 'Decisão', desc: 'Comunicação do resultado da homologação.' },
]

export default function ProviderHomologationPage() {
  const [currentStep, setCurrentStep] = useState(2) // 'em análise'

  useEffect(() => {
    const stored = localStorage.getItem('oye_provider_homolog_status')
    if (stored === 'aprovado') setCurrentStep(4)
    else if (stored === 'em_entrevista') setCurrentStep(3)
    else setCurrentStep(2)
  }, [])

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Provedor</p>
        <h1>Minha Homologação</h1>
        <p>Acompanhe o status do seu processo de homologação na plataforma Oyê.</p>
      </div>

      {/* Status overview */}
      <div className="section-card" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="section-card__header">
          <h3 className="section-card__title">Status atual</h3>
        </div>
        <div className="section-card__body">
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)', marginBottom: 'var(--space-5)' }}>
            <span className="badge badge-attention">Em homologação</span>
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
              Etapa {currentStep} de {STEPS.length}
            </span>
          </div>

          {/* Steps timeline */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {STEPS.map((step) => {
              const isPast = step.id < currentStep
              const isCurrent = step.id === currentStep
              const isFuture = step.id > currentStep

              return (
                <div
                  key={step.id}
                  style={{
                    display: 'flex',
                    gap: 'var(--space-4)',
                    alignItems: 'flex-start',
                    padding: 'var(--space-4)',
                    background: isCurrent ? 'var(--white)' : 'var(--paper)',
                    border: isCurrent ? '2px solid var(--ink)' : 'var(--border)',
                    borderRadius: '2px',
                    opacity: isFuture ? 0.5 : 1,
                  }}
                >
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: isPast ? 'var(--positive)' : isCurrent ? 'var(--ink)' : 'var(--paper)',
                      border: isFuture ? '2px solid var(--line)' : 'none',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: isPast || isCurrent ? 'var(--white)' : 'var(--muted)',
                      fontWeight: 700,
                      fontSize: 'var(--text-sm)',
                      flexShrink: 0,
                    }}
                  >
                    {isPast ? '✓' : step.id}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontSize: 'var(--text-sm)',
                        fontWeight: isCurrent ? 700 : 600,
                        color: isFuture ? 'var(--muted)' : 'var(--ink)',
                        marginBottom: 'var(--space-1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 'var(--space-2)',
                      }}
                    >
                      {step.label}
                      {isCurrent && <span className="badge badge-attention">Atual</span>}
                      {isPast && <span className="badge badge-positive">Concluído</span>}
                    </div>
                    <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', lineHeight: '1.6' }}>
                      {step.desc}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      {/* Info box */}
      <div className="section-card" style={{ marginBottom: 'var(--space-6)' }}>
        <div className="section-card__header">
          <h3 className="section-card__title">O que esperar</h3>
        </div>
        <div className="section-card__body">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <div style={{ fontSize: 'var(--text-base)', color: 'var(--navy-mid)' }}>→</div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-soft)' }}>
                <strong>Prazo de análise:</strong> A equipe Oyê analisará seu perfil em até 5 dias úteis após a candidatura.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <div style={{ fontSize: 'var(--text-base)', color: 'var(--navy-mid)' }}>→</div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-soft)' }}>
                <strong>Entrevista:</strong> Caso avance, você será convidado para uma conversa com um dos gestores da Oyê.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 'var(--space-3)' }}>
              <div style={{ fontSize: 'var(--text-base)', color: 'var(--navy-mid)' }}>→</div>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-soft)' }}>
                <strong>Resultado:</strong> Você receberá uma comunicação por e-mail com o resultado da homologação.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact */}
      <div className="section-card">
        <div className="section-card__header">
          <h3 className="section-card__title">Dúvidas?</h3>
        </div>
        <div className="section-card__body">
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', marginBottom: 'var(--space-3)' }}>
            Se tiver dúvidas sobre o processo de homologação, entre em contato com a equipe Oyê.
          </p>
          <a href="mailto:provedores@oye.com.br" className="btn btn-secondary" style={{ fontSize: 'var(--text-sm)' }}>
            provedores@oye.com.br
          </a>
        </div>
      </div>
    </div>
  )
}
