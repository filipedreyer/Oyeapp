import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { mockProjects } from '../../data/mockProjects'

const REQUIRED_FIELDS = ['resultadoFinal', 'metricasAlcancadas', 'oQueFuncionou', 'aprendizados']

export default function OpsClosurePage() {
  const { projetoId } = useParams()
  const project = mockProjects.find((p) => p.id === projetoId)
  const [submitted, setSubmitted] = useState(false)
  const [validationError, setValidationError] = useState('')

  const [form, setForm] = useState({
    resultadoFinal: '',
    metricasAlcancadas: '',
    provaSolucao: '',
    satisfacaoCliente: '',
    satisfacaoProvedor: '',
    desvios: '',
    causasDesvios: '',
    oQueFuncionou: '',
    oQueNaoFuncionou: '',
    aprendizados: '',
    sinaisFrente2: '',
  })

  useEffect(() => {
    const stored = localStorage.getItem(`oye_closure_${projetoId}`)
    if (stored) {
      try { setForm(JSON.parse(stored)) } catch {}
    }
  }, [projetoId])

  function setField(field, val) {
    setForm((prev) => ({ ...prev, [field]: val }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const missing = REQUIRED_FIELDS.filter((f) => !form[f] || !form[f].trim())
    if (missing.length > 0) {
      setValidationError('Preencha todos os campos obrigatórios antes de registrar o encerramento.')
      return
    }
    setValidationError('')
    localStorage.setItem(`oye_closure_${projetoId}`, JSON.stringify(form))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="workspace-content">
        <div style={{ maxWidth: '560px', margin: '0 auto', textAlign: 'center', paddingTop: 'var(--space-16)' }}>
          <p className="eyebrow">Gate 3 — Encerramento</p>
          <h1 style={{ marginBottom: 'var(--space-4)' }}>Encerramento registrado</h1>
          <p style={{ color: 'var(--muted)', marginBottom: 'var(--space-8)' }}>
            O encerramento do projeto foi registrado com sucesso. Os dados foram salvos e a inteligência foi atualizada.
          </p>
          <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'center' }}>
            <Link to="/ops/projetos" className="btn btn-secondary">Ver todos os projetos</Link>
            <Link to="/ops/dashboard" className="btn btn-primary">Dashboard de operações</Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">
          {project && (
            <Link to={`/ops/projetos/${projetoId}`} style={{ color: 'var(--muted)', textDecoration: 'none' }}>
              {project.title}
            </Link>
          )}
          {' / '}Gate 3
        </p>
        <h1>Encerramento de Projeto</h1>
        {project && <p>Registre o encerramento e os aprendizados do projeto.</p>}
      </div>

      {validationError && (
        <div className="alert" style={{ marginBottom: 'var(--space-5)' }}>
          {validationError}
        </div>
      )}

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>

        {/* Resultados */}
        <div className="section-card">
          <div className="section-card__header">
            <h3 className="section-card__title">Resultados</h3>
          </div>
          <div className="section-card__body">
            {[
              { field: 'resultadoFinal', label: 'Resultado final', placeholder: 'Descreva o resultado final do projeto...', required: true },
              { field: 'metricasAlcancadas', label: 'Métricas alcançadas', placeholder: 'Quais métricas e indicadores foram atingidos?', required: true },
              { field: 'provaSolucao', label: 'Prova de solução', placeholder: 'Qual evidência comprova que a solução funcionou?', required: false },
            ].map(({ field, label, placeholder, required }) => (
              <div key={field} style={{ marginBottom: 'var(--space-4)' }}>
                <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 'var(--space-2)' }}>
                  {label} {required && <span style={{ color: 'var(--attention)' }}>*</span>}
                </label>
                <textarea
                  value={form[field]}
                  onChange={(e) => setField(field, e.target.value)}
                  placeholder={placeholder}
                  rows={3}
                  style={{ width: '100%', fontSize: 'var(--text-sm)', padding: 'var(--space-3)', border: 'var(--border)', borderRadius: '2px', resize: 'vertical' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Satisfação */}
        <div className="section-card">
          <div className="section-card__header">
            <h3 className="section-card__title">Satisfação</h3>
          </div>
          <div className="section-card__body">
            {[
              { field: 'satisfacaoCliente', label: 'Satisfação do cliente' },
              { field: 'satisfacaoProvedor', label: 'Satisfação do provedor' },
            ].map(({ field, label }) => (
              <div key={field} style={{ marginBottom: 'var(--space-4)' }}>
                <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 'var(--space-2)' }}>
                  {label}
                </label>
                <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <label key={n} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-1)', fontSize: 'var(--text-sm)', cursor: 'pointer' }}>
                      <input
                        type="radio"
                        name={field}
                        value={String(n)}
                        checked={form[field] === String(n)}
                        onChange={() => setField(field, String(n))}
                      />
                      {n}
                    </label>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desvios */}
        <div className="section-card">
          <div className="section-card__header">
            <h3 className="section-card__title">Desvios</h3>
          </div>
          <div className="section-card__body">
            {[
              { field: 'desvios', label: 'Desvios identificados', placeholder: 'O que desviou do planejado?' },
              { field: 'causasDesvios', label: 'Causas dos desvios', placeholder: 'Por que os desvios ocorreram?' },
            ].map(({ field, label, placeholder }) => (
              <div key={field} style={{ marginBottom: 'var(--space-4)' }}>
                <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 'var(--space-2)' }}>
                  {label}
                </label>
                <textarea
                  value={form[field]}
                  onChange={(e) => setField(field, e.target.value)}
                  placeholder={placeholder}
                  rows={3}
                  style={{ width: '100%', fontSize: 'var(--text-sm)', padding: 'var(--space-3)', border: 'var(--border)', borderRadius: '2px', resize: 'vertical' }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Aprendizados */}
        <div className="section-card">
          <div className="section-card__header">
            <h3 className="section-card__title">Aprendizados e Inteligência</h3>
          </div>
          <div className="section-card__body">
            {[
              { field: 'oQueFuncionou', label: 'O que funcionou', placeholder: 'O que funcionou bem e deve ser replicado?', required: true },
              { field: 'oQueNaoFuncionou', label: 'O que não funcionou', placeholder: 'O que não funcionou e deve ser evitado?', required: false },
              { field: 'aprendizados', label: 'Aprendizados', placeholder: 'Quais os principais aprendizados para a Oyê?', required: true },
              { field: 'sinaisFrente2', label: 'Sinais para Frente 2', placeholder: 'Este projeto gerou algum sinal de produto, venture ou comunidade?', required: false },
            ].map(({ field, label, placeholder, required }) => (
              <div key={field} style={{ marginBottom: 'var(--space-4)' }}>
                <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 'var(--space-2)' }}>
                  {label} {required && <span style={{ color: 'var(--attention)' }}>*</span>}
                </label>
                <textarea
                  value={form[field]}
                  onChange={(e) => setField(field, e.target.value)}
                  placeholder={placeholder}
                  rows={3}
                  style={{ width: '100%', fontSize: 'var(--text-sm)', padding: 'var(--space-3)', border: 'var(--border)', borderRadius: '2px', resize: 'vertical' }}
                />
              </div>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-3)', justifyContent: 'flex-end' }}>
          <Link to={`/ops/projetos/${projetoId}`} className="btn btn-secondary">Cancelar</Link>
          <button type="submit" className="btn btn-primary">
            Registrar encerramento
          </button>
        </div>
      </form>
    </div>
  )
}
