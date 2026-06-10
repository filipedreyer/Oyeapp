import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { mockDemands } from '../../data/mockDemands'
import { getStatusLabel, STATUS_LABELS, DEMAND_STATUS } from '../../domain/demands'

const STATUS_ORDER = [
  DEMAND_STATUS.ENVIADA,
  DEMAND_STATUS.QUALIFICADA,
  DEMAND_STATUS.EM_DIAGNOSTICO,
  DEMAND_STATUS.DIAGNOSTICADA,
  DEMAND_STATUS.EM_ROTEAMENTO,
  DEMAND_STATUS.EM_SELECAO,
  DEMAND_STATUS.EM_CONTRATACAO,
  DEMAND_STATUS.EM_EXECUCAO,
  DEMAND_STATUS.ENCERRADA,
]

const STATUS_BADGE = {
  rascunho: 'badge',
  enviada: 'badge badge-attention',
  aguardando_complemento: 'badge badge-attention',
  qualificada: 'badge badge-positive',
  em_diagnostico: 'badge badge-copper',
  diagnosticada: 'badge badge-positive',
  em_roteamento: 'badge badge-copper',
  em_selecao: 'badge badge-copper',
  em_contratacao: 'badge badge-copper',
  em_execucao: 'badge badge-positive',
  encerrada: 'badge',
  cancelada: 'badge',
  arquivada: 'badge',
}

const MOCK_HISTORY = [
  { status: 'enviada', date: '2025-04-10', note: 'Demanda enviada pelo cliente.', active: false },
  { status: 'qualificada', date: '2025-04-12', note: 'Demanda qualificada pela equipe Oyê.', active: false },
  { status: 'em_diagnostico', date: '2025-04-15', note: 'Diagnóstico iniciado.', active: true },
]

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('pt-BR')
}

export default function OpsDemandDetailPage() {
  const { demandaId } = useParams()
  const navigate = useNavigate()
  const [demand, setDemand] = useState(null)
  const [notes, setNotes] = useState('')
  const [confirmDiscard, setConfirmDiscard] = useState(false)

  useEffect(() => {
    const found = mockDemands.find((d) => d.id === demandaId)
    setDemand(found ? { ...found } : null)
    const saved = localStorage.getItem(`oye_demand_notes_${demandaId}`)
    if (saved) setNotes(saved)
  }, [demandaId])

  function saveNotes() {
    localStorage.setItem(`oye_demand_notes_${demandaId}`, notes)
    alert('Notas salvas.')
  }

  function changeStatus(newStatus) {
    setDemand((prev) => ({ ...prev, status: newStatus }))
  }

  function handleDiscard() {
    if (confirmDiscard) {
      changeStatus(DEMAND_STATUS.CANCELADA)
      setConfirmDiscard(false)
    } else {
      setConfirmDiscard(true)
    }
  }

  if (!demand) {
    return (
      <div className="workspace-content">
        <div className="alert">
          <strong>Demanda não encontrada.</strong>{' '}
          <Link to="/ops/demandas">Voltar para a lista</Link>
        </div>
      </div>
    )
  }

  const currentIndex = STATUS_ORDER.indexOf(demand.status)

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">
          <Link to="/ops/demandas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            Demandas
          </Link>
          {' / '}Detalhe
        </p>
        <h1 style={{ marginBottom: 'var(--space-2)' }}>{demand.title}</h1>
        <span className={STATUS_BADGE[demand.status] || 'badge'}>
          {getStatusLabel(demand.status)}
        </span>
      </div>

      {/* Status timeline */}
      <div className="demand-status-timeline">
        {STATUS_ORDER.map((status, idx) => (
          <div key={status} className={`status-step${idx < currentIndex ? ' status-step--past' : ''}${idx === currentIndex ? ' status-step--active' : ''}`}>
            <div className="status-step__label">{STATUS_LABELS[status]}</div>
            {idx < STATUS_ORDER.length - 1 && <div className="status-step__arrow" />}
          </div>
        ))}
      </div>

      <div className="workbench-grid">
        {/* Left: demand data */}
        <div className="workbench-main">
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Dados da Empresa</h3>
            </div>
            <div className="section-card__body">
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <tbody>
                  <tr>
                    <td style={{ width: '160px', color: 'var(--muted)', fontSize: 'var(--text-sm)', paddingBottom: 'var(--space-3)', verticalAlign: 'top' }}>ID empresa</td>
                    <td style={{ fontSize: 'var(--text-sm)', paddingBottom: 'var(--space-3)' }}>{demand.companyId}</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--muted)', fontSize: 'var(--text-sm)', paddingBottom: 'var(--space-3)', verticalAlign: 'top' }}>Setor</td>
                    <td style={{ fontSize: 'var(--text-sm)', paddingBottom: 'var(--space-3)' }}>{demand.sector}</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--muted)', fontSize: 'var(--text-sm)', paddingBottom: 'var(--space-3)', verticalAlign: 'top' }}>Orçamento</td>
                    <td style={{ fontSize: 'var(--text-sm)', paddingBottom: 'var(--space-3)' }}>{demand.budget}</td>
                  </tr>
                  <tr>
                    <td style={{ color: 'var(--muted)', fontSize: 'var(--text-sm)', verticalAlign: 'top' }}>Prazo</td>
                    <td style={{ fontSize: 'var(--text-sm)' }}>{demand.timeline}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Dor e Contexto</h3>
            </div>
            <div className="section-card__body">
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-soft)', lineHeight: '1.7', marginBottom: 'var(--space-4)' }}>
                {demand.description}
              </p>
              <div>
                <p className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Tipos de problema</p>
                <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                  {demand.problemTypes.map((pt) => (
                    <span key={pt} className="badge badge-copper">{pt}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Histórico de Status</h3>
            </div>
            <div className="section-card__body">
              <div className="status-log">
                {MOCK_HISTORY.map((h, i) => (
                  <div key={i} className="status-log-item">
                    <div className={`status-log-item__dot${h.active ? ' status-log-item__dot--active' : ''}`} />
                    <div>
                      <div className="status-log-item__text">
                        <strong>{STATUS_LABELS[h.status] || h.status}</strong> — {h.note}
                      </div>
                      <div className="status-log-item__date">{h.date}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Notas internas</h3>
            </div>
            <div className="section-card__body">
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Adicione notas internas sobre esta demanda..."
                rows={4}
                style={{ width: '100%', fontSize: 'var(--text-sm)', padding: 'var(--space-3)', border: 'var(--border)', borderRadius: '2px', resize: 'vertical' }}
              />
              <button className="btn btn-secondary" style={{ marginTop: 'var(--space-3)' }} onClick={saveNotes}>
                Salvar notas
              </button>
            </div>
          </div>
        </div>

        {/* Right: actions panel */}
        <div className="workbench-sidebar">
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Ações</h3>
            </div>
            <div className="section-card__body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                <button
                  className="btn btn-secondary"
                  onClick={() => changeStatus(DEMAND_STATUS.AGUARDANDO_COMPLEMENTO)}
                  disabled={demand.status === DEMAND_STATUS.CANCELADA}
                >
                  Pedir complemento
                </button>
                <button
                  className="btn btn-secondary"
                  onClick={() => changeStatus(DEMAND_STATUS.QUALIFICADA)}
                  disabled={demand.status === DEMAND_STATUS.CANCELADA}
                >
                  Qualificar demanda
                </button>
                <Link
                  to="/ops/diagnosticos/new"
                  className={`btn btn-primary${demand.status !== DEMAND_STATUS.QUALIFICADA ? ' btn-disabled' : ''}`}
                  style={demand.status !== DEMAND_STATUS.QUALIFICADA ? { opacity: 0.5, pointerEvents: 'none' } : {}}
                >
                  Iniciar diagnóstico
                </Link>
                {confirmDiscard ? (
                  <div className="alert" style={{ marginTop: 'var(--space-2)' }}>
                    <p style={{ fontSize: 'var(--text-sm)', marginBottom: 'var(--space-3)' }}>
                      Confirmar descarte desta demanda?
                    </p>
                    <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
                      <button className="btn btn-primary" onClick={handleDiscard}>Confirmar</button>
                      <button className="btn btn-secondary" onClick={() => setConfirmDiscard(false)}>Cancelar</button>
                    </div>
                  </div>
                ) : (
                  <button
                    className="btn btn-secondary"
                    onClick={handleDiscard}
                    style={{ color: 'var(--attention)' }}
                    disabled={demand.status === DEMAND_STATUS.CANCELADA}
                  >
                    Descartar demanda
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Status atual</h3>
            </div>
            <div className="section-card__body">
              <span className={STATUS_BADGE[demand.status] || 'badge'}>
                {getStatusLabel(demand.status)}
              </span>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginTop: 'var(--space-2)' }}>
                Criado em {formatDate(demand.createdAt)}<br />
                Atualizado em {formatDate(demand.updatedAt)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
