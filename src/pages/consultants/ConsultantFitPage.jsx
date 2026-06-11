import { useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { mockProviders } from '../../data/mockProviders.js'

export default function ConsultantFitPage() {
  const { consultorSlug } = useParams()
  const navigate = useNavigate()
  const provider = mockProviders.find(p => p.slug === consultorSlug)
  const [existingDemandId, setExistingDemandId] = useState('')
  const [demandError, setDemandError] = useState('')

  if (!provider) {
    return (
      <div className="fit-page">
        <span className="pub-eyebrow">Não encontrado</span>
        <h1 style={{ fontSize: 'clamp(1.6rem, 3vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.065em', marginTop: '12px' }}>
          Consultor não encontrado
        </h1>
        <p style={{ color: 'var(--muted)', marginTop: '16px' }}>
          Não encontramos um perfil com o identificador <strong>{consultorSlug}</strong>.
        </p>
        <div style={{ marginTop: '32px' }}>
          <Link to="/consultores" className="btn btn-secondary">← Voltar ao diretório</Link>
        </div>
      </div>
    )
  }

  function handleDemandNavigate() {
    const id = existingDemandId.trim()
    if (!id) { setDemandError('Informe o ID da demanda'); return }
    navigate(`/diagnostico/empresa/${id}`)
  }

  return (
    <div className="fit-page">
      <div style={{ marginBottom: '32px' }}>
        <Link
          to={`/consultores/${provider.slug}`}
          style={{ fontSize: '0.8125rem', color: 'var(--muted)', letterSpacing: '-0.01em' }}
        >
          ← Voltar ao perfil de {provider.name}
        </Link>
      </div>

      <span className="pub-eyebrow">Avaliação de fit</span>
      <h1 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3rem)', fontWeight: 900, letterSpacing: '-0.065em', lineHeight: 0.95, margin: '12px 0 20px', color: 'var(--ink)' }}>
        Avaliar fit com {provider.name}
      </h1>
      <p style={{ fontSize: 'var(--t-body-lg)', color: 'var(--muted)', lineHeight: 'var(--lh-lead)', letterSpacing: 'var(--ls-sub)', maxWidth: '560px', marginBottom: '48px' }}>
        O fit entre consultor e demanda é determinado pelo diagnóstico, não apenas pela área de especialidade declarada.
      </p>

      <div className="fit-paths">
        <div className="fit-path">
          <span className="pub-eyebrow" style={{ marginBottom: '16px', display: 'block' }}>Opção 1</span>
          <div className="fit-path__title">Já tenho uma demanda em andamento</div>
          <p className="fit-path__text">
            Informe o ID da sua demanda para acessar o acompanhamento e verificar o fit com este consultor.
          </p>
          <div style={{ marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '8px' }}>
              ID da demanda
            </label>
            <input
              style={{
                width: '100%',
                padding: '12px 16px',
                border: `1px solid ${demandError ? 'var(--attention)' : 'var(--line-strong)'}`,
                backgroundColor: 'var(--paper)',
                fontSize: '0.875rem',
                color: 'var(--ink)',
                outline: 'none',
                boxSizing: 'border-box',
              }}
              value={existingDemandId}
              onChange={e => { setExistingDemandId(e.target.value); setDemandError('') }}
              placeholder="Ex.: dem-1234567890"
            />
            {demandError && (
              <span style={{ fontSize: '0.8125rem', color: 'var(--attention)', marginTop: '4px', display: 'block' }}>
                {demandError}
              </span>
            )}
          </div>
          <button className="btn btn-secondary" onClick={handleDemandNavigate}>
            Ir para minha demanda
          </button>
        </div>

        <div className="fit-path" style={{ backgroundColor: 'var(--navy-strong)', color: 'var(--white)' }}>
          <span style={{ fontSize: '0.6875rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--copper)', display: 'block', marginBottom: '16px' }}>
            Opção 2
          </span>
          <div style={{ fontSize: '1rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--white)', marginBottom: '12px' }}>
            Ainda não iniciei um diagnóstico
          </div>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.60)', lineHeight: 1.55, marginBottom: '28px' }}>
            Inicie o diagnóstico agora. Você poderá indicar interesse neste consultor durante ou após o processo.
          </p>
          <Link
            to={`/diagnostico/empresa/novo?consultor=${provider.slug}`}
            className="btn btn-primary"
            style={{ display: 'block', textAlign: 'center' }}
          >
            Iniciar diagnóstico
          </Link>
          <p style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.36)', marginTop: '12px', textAlign: 'center' }}>
            Leva aproximadamente 15–20 minutos
          </p>
        </div>
      </div>
    </div>
  )
}
