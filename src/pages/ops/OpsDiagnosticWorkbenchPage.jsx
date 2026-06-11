import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { mockDemands } from '../../data/mockDemands'

const MOCK_DIAGNOSTICS = {
  'diag-001': { demandaId: 'dem-001', empresa: 'Supermercados Horizonte', status: 'em_analise' },
  'diag-002': { demandaId: 'dem-002', empresa: 'LogFlex Transportes', status: 'aguardando_dados' },
  'diag-003': { demandaId: 'dem-003', empresa: 'MedTech Soluções', status: 'aprovado' },
  'new': { demandaId: 'dem-003', empresa: 'Nova empresa', status: 'pendente' },
}

const DIMENSIONS = [
  { key: 'frequencia', name: 'Frequência', desc: 'Com que frequência esse problema ocorre?', low: 'Raro', high: 'Recorrente' },
  { key: 'ineditismo', name: 'Ineditismo', desc: 'Quão inédito ou específico é esse problema?', low: 'Genérico', high: 'Muito específico' },
  { key: 'complexidade', name: 'Complexidade', desc: 'Qual a complexidade do problema?', low: 'Simples', high: 'Muito complexo' },
  { key: 'urgencia', name: 'Urgência', desc: 'Qual a urgência para resolver?', low: 'Baixa', high: 'Crítica' },
  { key: 'mercado', name: 'Mercado', desc: 'Qual o tamanho do mercado afetado?', low: 'Pequeno/local', high: 'Grande/setorial' },
  { key: 'historico', name: 'Histórico de tentativas', desc: 'Quantas tentativas anteriores fracassadas?', low: 'Nenhuma', high: 'Muitas' },
]

const CLUSTERS = [
  'Eficiência operacional',
  'Gestão de crescimento',
  'Transformação digital',
  'Reestruturação financeira',
  'Gestão de pessoas',
  'Compliance e ESG',
  'Outros',
]

const STATUS_LABELS = {
  em_analise: 'Em análise',
  aguardando_dados: 'Aguardando dados',
  aprovado: 'Aprovado',
  pendente: 'Pendente',
  publicado: 'Publicado',
  revisado: 'Revisado',
}

const STATUS_BADGE = {
  em_analise: 'badge badge-navy',
  aguardando_dados: 'badge badge-attention',
  aprovado: 'badge badge-positive',
  pendente: 'badge',
  publicado: 'badge badge-positive',
  revisado: 'badge badge-positive',
}

function getScoreInterpretation(total) {
  if (total <= 12) return { label: 'Problema simples / solução direta', badge: 'badge badge-positive' }
  if (total <= 20) return { label: 'Problema moderado / diagnóstico recomendado', badge: 'badge badge-attention' }
  return { label: 'Problema complexo / diagnóstico profundo necessário', badge: 'badge badge-navy' }
}

const DEFAULT_STATE = {
  scores: { frequencia: 0, ineditismo: 0, complexidade: 0, urgencia: 0, mercado: 0, historico: 0 },
  dimNotes: { frequencia: '', ineditismo: '', complexidade: '', urgencia: '', mercado: '', historico: '' },
  hipoteses: '',
  evidencias: '',
  lacunas: '',
  notasAnaliticas: '',
  confianca: '',
  justificativaConfianca: '',
  cluster: '',
  clienteOutput: '',
  structuredOutput: '',
  status: 'em_analise',
}

export default function OpsDiagnosticWorkbenchPage() {
  const { diagnosticoId } = useParams()
  const navigate = useNavigate()
  const [diag, setDiag] = useState(null)
  const [demand, setDemand] = useState(null)
  const [state, setState] = useState(DEFAULT_STATE)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const diagData = MOCK_DIAGNOSTICS[diagnosticoId] || MOCK_DIAGNOSTICS['diag-001']
    setDiag({ ...diagData, id: diagnosticoId })
    const linked = mockDemands.find((d) => d.id === diagData.demandaId)
    setDemand(linked || null)

    const stored = localStorage.getItem(`oye_diag_${diagnosticoId}`)
    if (stored) {
      try {
        setState(JSON.parse(stored))
      } catch {}
    } else {
      setState({ ...DEFAULT_STATE, status: diagData.status })
    }
  }, [diagnosticoId])

  function setScore(dim, val) {
    setState((prev) => ({ ...prev, scores: { ...prev.scores, [dim]: val } }))
  }

  function setDimNote(dim, val) {
    setState((prev) => ({ ...prev, dimNotes: { ...prev.dimNotes, [dim]: val } }))
  }

  function setField(field, val) {
    setState((prev) => ({ ...prev, [field]: val }))
  }

  function saveAll() {
    localStorage.setItem(`oye_diag_${diagnosticoId}`, JSON.stringify(state))
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  function markRevisado() {
    setState((prev) => ({ ...prev, status: 'revisado' }))
  }

  function approveAndShare() {
    setState((prev) => ({ ...prev, status: 'aprovado' }))
    saveAll()
  }

  const totalScore = Object.values(state.scores).reduce((a, b) => a + b, 0)
  const interpretation = getScoreInterpretation(totalScore)

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">
          <Link to="/ops/diagnosticos" style={{ color: 'var(--muted)', textDecoration: 'none' }}>Diagnósticos</Link>
          {' / '}Gate 1 — Workbench
        </p>
        <h1>Workbench de Diagnóstico</h1>
        {diag && <p>{diag.empresa}</p>}
      </div>

      <div className="workbench-grid">
        {/* Left — main workspace */}
        <div className="workbench-main">

          {/* Demand data reference */}
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Dados da Demanda (referência)</h3>
            </div>
            <div className="section-card__body">
              {demand ? (
                <div>
                  <p style={{ fontSize: 'var(--text-sm)', fontWeight: 700, marginBottom: 'var(--space-2)' }}>{demand.title}</p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', marginBottom: 'var(--space-3)' }}>Setor: {demand.sector} · Prazo: {demand.timeline} · Orçamento: {demand.budget}</p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-soft)', lineHeight: '1.7' }}>{demand.description}</p>
                  <div style={{ marginTop: 'var(--space-3)', display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                    {demand.problemTypes.map((pt) => (
                      <span key={pt} className="badge badge-navy">{pt}</span>
                    ))}
                  </div>
                </div>
              ) : (
                <p style={{ color: 'var(--muted)', fontSize: 'var(--text-sm)' }}>Demanda não localizada.</p>
              )}
            </div>
          </div>

          {/* Gate 1 — 6 dimensions */}
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Gate 1 — Análise Diagnóstica (6 dimensões)</h3>
            </div>
            <div className="section-card__body">
              <div className="score-total-bar" style={{ marginBottom: 'var(--space-5)' }}>
                <div>
                  <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 'var(--space-1)' }}>
                    Score total
                  </div>
                  <div style={{ fontSize: 'var(--text-3xl)', fontWeight: 900, letterSpacing: '-0.04em', color: 'var(--ink)' }}>
                    {totalScore} <span style={{ fontSize: 'var(--text-base)', fontWeight: 400, color: 'var(--muted)' }}>/ 30</span>
                  </div>
                </div>
                <span className={interpretation.badge}>{interpretation.label}</span>
              </div>

              {DIMENSIONS.map((dim) => (
                <div key={dim.key} className="dimension-card">
                  <div className="dimension-card__title">{dim.name}</div>
                  <div className="dimension-card__desc">{dim.desc}</div>
                  <div className="dimension-score">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        className={`score-btn${state.scores[dim.key] === n ? ' score-btn--selected' : ''}`}
                        onClick={() => setScore(dim.key, n)}
                        type="button"
                      >
                        {n}
                      </button>
                    ))}
                    <span style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', alignSelf: 'center', marginLeft: 'var(--space-2)' }}>
                      {state.scores[dim.key] > 0 ? `${state.scores[dim.key]} — ${state.scores[dim.key] <= 2 ? dim.low : state.scores[dim.key] >= 4 ? dim.high : 'Moderado'}` : '1 = ' + dim.low + ' · 5 = ' + dim.high}
                    </span>
                  </div>
                  <textarea
                    value={state.dimNotes[dim.key]}
                    onChange={(e) => setDimNote(dim.key, e.target.value)}
                    placeholder={`Notas sobre ${dim.name.toLowerCase()}...`}
                    rows={2}
                    style={{ width: '100%', fontSize: 'var(--text-xs)', padding: 'var(--space-2)', border: 'var(--border)', borderRadius: '2px', resize: 'vertical' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Hipóteses e análise */}
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Hipóteses e Análise</h3>
            </div>
            <div className="section-card__body">
              {[
                { field: 'hipoteses', label: 'Hipóteses do analista', placeholder: 'Quais hipóteses explicam o problema?' },
                { field: 'evidencias', label: 'Evidências identificadas', placeholder: 'Quais evidências suportam a análise?' },
                { field: 'lacunas', label: 'Lacunas de informação', placeholder: 'Que informações ainda faltam?' },
                { field: 'notasAnaliticas', label: 'Notas analíticas internas', placeholder: 'Anotações internas do analista...' },
              ].map(({ field, label, placeholder }) => (
                <div key={field} style={{ marginBottom: 'var(--space-4)' }}>
                  <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 'var(--space-2)' }}>
                    {label}
                  </label>
                  <textarea
                    value={state[field]}
                    onChange={(e) => setField(field, e.target.value)}
                    placeholder={placeholder}
                    rows={3}
                    style={{ width: '100%', fontSize: 'var(--text-sm)', padding: 'var(--space-3)', border: 'var(--border)', borderRadius: '2px', resize: 'vertical' }}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Nível de confiança */}
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Nível de Confiança</h3>
            </div>
            <div className="section-card__body">
              <div style={{ display: 'flex', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                {['Baixo', 'Médio', 'Alto', 'Muito Alto'].map((level) => (
                  <label key={level} style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', fontSize: 'var(--text-sm)', cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="confianca"
                      value={level}
                      checked={state.confianca === level}
                      onChange={() => setField('confianca', level)}
                    />
                    {level}
                  </label>
                ))}
              </div>
              <textarea
                value={state.justificativaConfianca}
                onChange={(e) => setField('justificativaConfianca', e.target.value)}
                placeholder="Justificativa do nível de confiança..."
                rows={2}
                style={{ width: '100%', fontSize: 'var(--text-sm)', padding: 'var(--space-3)', border: 'var(--border)', borderRadius: '2px', resize: 'vertical' }}
              />
            </div>
          </div>

          {/* Cluster inicial */}
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Cluster inicial</h3>
            </div>
            <div className="section-card__body">
              <select
                value={state.cluster}
                onChange={(e) => setField('cluster', e.target.value)}
                style={{ fontSize: 'var(--text-sm)', padding: 'var(--space-2) var(--space-3)', border: 'var(--border)', borderRadius: '2px', minWidth: '260px' }}
              >
                <option value="">Selecionar cluster...</option>
                {CLUSTERS.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="workbench-sidebar">
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Status do Diagnóstico</h3>
            </div>
            <div className="section-card__body">
              <span className={STATUS_BADGE[state.status] || 'badge'}>
                {STATUS_LABELS[state.status] || state.status}
              </span>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Output para o Cliente</h3>
            </div>
            <div className="section-card__body">
              <label style={{ display: 'block', fontSize: 'var(--text-xs)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: 'var(--space-2)' }}>
                Síntese legível para o cliente
              </label>
              <textarea
                value={state.clienteOutput}
                onChange={(e) => setField('clienteOutput', e.target.value)}
                placeholder="Texto que o cliente vai ler sobre o diagnóstico..."
                rows={5}
                style={{ width: '100%', fontSize: 'var(--text-sm)', padding: 'var(--space-2)', border: 'var(--border)', borderRadius: '2px', resize: 'vertical' }}
              />
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Output Estruturado (interno)</h3>
            </div>
            <div className="section-card__body">
              <textarea
                value={state.structuredOutput}
                onChange={(e) => setField('structuredOutput', e.target.value)}
                placeholder='{ "cluster": "...", "score": 0, ... }'
                rows={4}
                style={{ width: '100%', fontSize: 'var(--text-xs)', fontFamily: 'monospace', padding: 'var(--space-2)', border: 'var(--border)', borderRadius: '2px', resize: 'vertical' }}
              />
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
                <button className="btn btn-secondary" onClick={markRevisado}>
                  Marcar como revisado
                </button>
                <button className="btn btn-primary" onClick={approveAndShare}>
                  Aprovar e compartilhar com cliente
                </button>
                <Link
                  to={`/ops/roteamento/${diagnosticoId}`}
                  className="btn btn-primary"
                  style={{ textAlign: 'center' }}
                >
                  Avançar para Gate 2
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
