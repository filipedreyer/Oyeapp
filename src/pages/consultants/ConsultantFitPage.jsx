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
      <div className="container" style={{ padding: 'var(--space-16) var(--space-8)' }}>
        <p className="eyebrow">Não encontrado</p>
        <h1>Consultor não encontrado</h1>
        <p style={{ color: 'var(--muted)', marginTop: 'var(--space-4)' }}>
          Não encontramos um perfil com o identificador <strong>{consultorSlug}</strong>.
        </p>
        <div style={{ marginTop: 'var(--space-8)' }}>
          <Link to="/consultores" className="btn btn-secondary">← Voltar ao diretório</Link>
        </div>
      </div>
    )
  }

  function handleDemandNavigate() {
    const id = existingDemandId.trim()
    if (!id) {
      setDemandError('Informe o ID da demanda')
      return
    }
    navigate(`/diagnostico/empresa/${id}`)
  }

  return (
    <div style={{ background: 'var(--paper)', minHeight: '100vh' }}>
      <div className="container" style={{ padding: 'var(--space-10) var(--space-8)', maxWidth: 720, margin: '0 auto' }}>

        {/* Back */}
        <div style={{ marginBottom: 'var(--space-8)' }}>
          <Link to={`/consultores/${provider.slug}`} style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
            ← Voltar ao perfil de {provider.name}
          </Link>
        </div>

        <p className="eyebrow">Avaliação de fit</p>
        <h1 style={{ fontSize: 'var(--text-2xl)', fontWeight: 900, letterSpacing: 'var(--tracking-tight)', margin: 'var(--space-2) 0 var(--space-6)' }}>
          Avaliar fit com {provider.name}
        </h1>

        <div className="alert alert-info" style={{ marginBottom: 'var(--space-10)' }}>
          <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>
            O fit entre consultor e demanda é determinado pelo diagnóstico, não apenas pela área de especialidade declarada.
            Para avaliar se <strong>{provider.name}</strong> é a pessoa certa para o seu problema, precisamos primeiro entender o problema.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-6)' }}>

          {/* Path 1: existing demand */}
          <div style={{ background: 'var(--white)', border: 'var(--border)', padding: 'var(--space-8)' }}>
            <p className="section-label" style={{ marginBottom: 'var(--space-4)' }}>Opção 1</p>
            <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 900, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-3)' }}>
              Já tenho uma demanda em andamento
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-5)' }}>
              Informe o ID da sua demanda para acessar o acompanhamento e verificar o fit com este consultor.
            </p>
            <div className="form-group">
              <label className="form-label">ID da demanda</label>
              <input
                className={`form-input${demandError ? ' is-error' : ''}`}
                value={existingDemandId}
                onChange={e => { setExistingDemandId(e.target.value); setDemandError('') }}
                placeholder="Ex.: dem-1234567890"
              />
              {demandError && <span className="form-error">{demandError}</span>}
            </div>
            <button className="btn btn-secondary" onClick={handleDemandNavigate}>
              Ir para minha demanda
            </button>
          </div>

          {/* Path 2: new diagnosis */}
          <div style={{ background: 'var(--navy-strong)', color: 'var(--white)', padding: 'var(--space-8)', display: 'flex', flexDirection: 'column' }}>
            <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: 'var(--space-4)' }}>
              Opção 2
            </p>
            <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 900, letterSpacing: 'var(--tracking-tight)', marginBottom: 'var(--space-3)' }}>
              Ainda não iniciei um diagnóstico
            </h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'rgba(255,255,255,0.7)', lineHeight: 'var(--leading-relaxed)', marginBottom: 'var(--space-6)', flex: 1 }}>
              Inicie o diagnóstico agora. Você poderá indicar interesse neste consultor durante ou após o processo.
            </p>
            <Link
              to={`/diagnostico/empresa/novo?consultor=${provider.slug}`}
              className="btn btn-primary"
              style={{ textAlign: 'center' }}
            >
              Iniciar diagnóstico
            </Link>
            <p style={{ fontSize: 'var(--text-xs)', color: 'rgba(255,255,255,0.5)', marginTop: 'var(--space-3)', textAlign: 'center' }}>
              Leva aproximadamente 15–20 minutos
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}
