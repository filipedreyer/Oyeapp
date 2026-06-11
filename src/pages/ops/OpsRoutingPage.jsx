import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { mockDemands } from '../../data/mockDemands'

const MOCK_DIAGNOSTICS = {
  'diag-001': { empresa: 'Supermercados Horizonte', demandaId: 'dem-001', cluster: 'Eficiência operacional', score: 18 },
  'diag-002': { empresa: 'LogFlex Transportes', demandaId: 'dem-002', cluster: 'Gestão de crescimento', score: 22 },
  'diag-003': { empresa: 'MedTech Soluções', demandaId: 'dem-003', cluster: 'Transformação digital', score: 15 },
  'new': { empresa: 'Nova empresa', demandaId: 'dem-003', cluster: 'Outros', score: 12 },
}

const ROUTE_OPTIONS = [
  { value: 'marketplace', label: 'Marketplace Curado', desc: 'Conexão com especialista avaliado da base Oyê para atender a demanda.' },
  { value: 'produto_oye', label: 'Produto Oyê', desc: 'Solução padronizada desenvolvida internamente pela Oyê para este tipo de demanda.' },
  { value: 'inovacao_aberta', label: 'Inovação Aberta', desc: 'Desafio aberto para solução colaborativa com parceiros externos.' },
  { value: 'comunidade', label: 'Comunidade Oyê', desc: 'Mobilização da rede e comunidade Oyê para encontrar solução.' },
  { value: 'orquestracao_conjunta', label: 'Orquestração Conjunta', desc: 'Combinação de múltiplos provedores orquestrados pela Oyê.' },
  { value: 'venture', label: 'Venture / Co-desenvolvimento', desc: 'Desenvolvimento conjunto de nova solução com o cliente como co-investidor.' },
  { value: 'sinal_frente2', label: 'Sinal para Frente 2', desc: 'Demanda sinaliza oportunidade de produto/venture para a Frente 2 da Oyê.' },
]

const REQUIRED_FIELDS = ['rota', 'racional', 'premissas', 'criteriosSucesso']

const DEFAULT_STATE = {
  rota: '',
  racional: '',
  premissas: '',
  riscos: '',
  alternativas: '',
  criteriosSucesso: '',
  gaps: '',
  status: 'rascunho',
}

export default function OpsRoutingPage() {
  const { diagnosticoId } = useParams()
  const navigate = useNavigate()
  const [diag, setDiag] = useState(null)
  const [demand, setDemand] = useState(null)
  const [form, setForm] = useState(DEFAULT_STATE)
  const [saved, setSaved] = useState(false)
  const [validationError, setValidationError] = useState('')

  useEffect(() => {
    const diagData = MOCK_DIAGNOSTICS[diagnosticoId] || MOCK_DIAGNOSTICS['diag-001']
    setDiag(diagData)
    const linked = mockDemands.find((d) => d.id === diagData.demandaId)
    setDemand(linked || null)

    const stored = localStorage.getItem(`oye_routing_${diagnosticoId}`)
    if (stored) {
      try { setForm(JSON.parse(stored)) } catch {}
    }
  }, [diagnosticoId])

  function setField(field, val) {
    setForm((prev) => ({ ...prev, [field]: val }))
  }

  function saveAll() {
    localStorage.setItem(`oye_routing_${diagnosticoId}`, JSON.stringify(form))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  function approveRoute() {
    const missing = REQUIRED_FIELDS.filter((f) => !form[f] || !form[f].trim())
    if (missing.length > 0) {
      setValidationError('Preencha todos os campos obrigatórios: Rota, Racional, Premissas e Critérios de Sucesso.')
      return
    }
    setValidationError('')
    setForm((prev) => ({ ...prev, status: 'aprovado' }))
    saveAll()
  }

  const selectedRoute = ROUTE_OPTIONS.find((r) => r.value === form.rota)

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">
          <Link to="/ops/diagnosticos" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Diagnósticos</Link>
          {' / '}Gate 2 — Roteamento
        </p>
        <h1>Definição de Rota</h1>
        {diag && <p>Empresa: {diag.empresa}</p>}
      </div>

      <div className="workbench-grid">
        {/* Left: routing form */}
        <div className="workbench-main">

          {validationError && (
            <div className="alert" style={{ marginBottom: 'var(--space-4)' }}>
              {validationError}
            </div>
          )}

          {/* Route selection */}
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Rota Recomendada <span style={{ color: 'var(--attention)' }}>*</span></h3>
            </div>
            <div className="section-card__body">
              {ROUTE_OPTIONS.map((opt) => (
                <div
                  key={opt.value}
                  className={`route-option${form.rota === opt.value ? ' route-option--selected' : ''}`}
                  onClick={() => setField('rota', opt.value)}
                >
                  <input
                    type="radio"
                    name="rota"
                    value={opt.value}
                    checked={form.rota === opt.value}
                    onChange={() => setField('rota', opt.value)}
                  />
                  <div>
                    <div className="route-option__label">{opt.label}</div>
                    <div className="route-option__desc">{opt.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text fields */}
          {[
            { field: 'racional', label: 'Racional da Decisão', placeholder: 'Por que esta rota foi escolhida?', required: true, rows: 4 },
            { field: 'premissas', label: 'Premissas', placeholder: 'Que premissas sustentam esta recomendação?', required: true, rows: 3 },
            { field: 'riscos', label: 'Riscos', placeholder: 'Quais os riscos desta rota?', required: false, rows: 3 },
            { field: 'alternativas', label: 'Alternativas Descartadas', placeholder: 'Quais rotas foram consideradas e por quê foram descartadas?', required: false, rows: 3 },
            { field: 'criteriosSucesso', label: 'Critérios de Sucesso', placeholder: 'Como saberemos que a solução funcionou?', required: true, rows: 3 },
            { field: 'gaps', label: 'Gaps de Solução', placeholder: 'Existe algum gap de solução no mercado identificado nesse caso?', required: false, rows: 3 },
          ].map(({ field, label, placeholder, required, rows }) => (
            <div key={field} className="section-card">
              <div className="section-card__header">
                <h3 className="section-card__title">
                  {label} {required && <span style={{ color: 'var(--attention)' }}>*</span>}
                </h3>
              </div>
              <div className="section-card__body">
                <textarea
                  value={form[field]}
                  onChange={(e) => setField(field, e.target.value)}
                  placeholder={placeholder}
                  rows={rows}
                  style={{ width: '100%', fontSize: 'var(--text-sm)', padding: 'var(--space-3)', border: 'var(--border)', borderRadius: '2px', resize: 'vertical' }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Right sidebar */}
        <div className="workbench-sidebar">
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Resumo do Diagnóstico</h3>
            </div>
            <div className="section-card__body">
              {diag && (
                <div style={{ fontSize: 'var(--text-sm)' }}>
                  <p style={{ marginBottom: 'var(--space-2)' }}><strong>Empresa:</strong> {diag.empresa}</p>
                  <p style={{ marginBottom: 'var(--space-2)' }}><strong>Cluster:</strong> {diag.cluster}</p>
                  <p style={{ marginBottom: 'var(--space-2)' }}><strong>Score:</strong> {diag.score}/30</p>
                  {demand && (
                    <p style={{ marginBottom: 'var(--space-2)' }}><strong>Problema:</strong> {demand.problemTypes.join(', ')}</p>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Rota Definida</h3>
            </div>
            <div className="section-card__body">
              {selectedRoute ? (
                <div>
                  <span className="badge badge-positive">{selectedRoute.label}</span>
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginTop: 'var(--space-2)' }}>{selectedRoute.desc}</p>
                </div>
              ) : (
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>Nenhuma rota selecionada</p>
              )}
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Status</h3>
            </div>
            <div className="section-card__body">
              <span className={form.status === 'aprovado' ? 'badge badge-positive' : 'badge'}>
                {form.status === 'aprovado' ? 'Aprovado' : 'Rascunho'}
              </span>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Ações</h3>
            </div>
            <div className="section-card__body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <button className="btn btn-secondary" onClick={saveAll}>
                  {saved ? 'Salvo!' : 'Salvar rascunho'}
                </button>
                <button className="btn btn-primary" onClick={approveRoute}>
                  Aprovar rota
                </button>
                <Link
                  to="/ops/shortlists"
                  className="btn btn-secondary"
                  style={{ textAlign: 'center' }}
                >
                  Ir para shortlists
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
