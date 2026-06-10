import { useParams, Link } from 'react-router-dom'
import { getStatusLabel, DEMAND_STATUS } from '../../domain/demands.js'

const STATUS_TIMELINE = [
  { key: DEMAND_STATUS.ENVIADA, label: 'Enviada', sub: 'Demanda recebida pela equipe Oyê' },
  { key: DEMAND_STATUS.QUALIFICADA, label: 'Qualificada', sub: 'Demanda validada e aceita' },
  { key: DEMAND_STATUS.EM_DIAGNOSTICO, label: 'Em diagnóstico', sub: '5–10 dias úteis' },
  { key: DEMAND_STATUS.DIAGNOSTICADA, label: 'Diagnosticada', sub: 'Diagnóstico concluído' },
  { key: DEMAND_STATUS.EM_ROTEAMENTO, label: 'Em roteamento', sub: 'Identificando provedores adequados' },
  { key: DEMAND_STATUS.EM_SELECAO, label: 'Em seleção', sub: 'Shortlist de provedores disponível' },
  { key: DEMAND_STATUS.EM_CONTRATACAO, label: 'Em contratação', sub: 'Proposta aprovada' },
  { key: DEMAND_STATUS.EM_EXECUCAO, label: 'Em execução', sub: 'Projeto em andamento' },
  { key: DEMAND_STATUS.ENCERRADA, label: 'Encerrada', sub: 'Projeto concluído' },
]

const STATUS_ORDER = STATUS_TIMELINE.map(s => s.key)

function getStatusIndex(status) {
  const idx = STATUS_ORDER.indexOf(status)
  return idx >= 0 ? idx : 0
}

function StatusTimeline({ status }) {
  const currentIdx = getStatusIndex(status)
  return (
    <div className="timeline-steps">
      {STATUS_TIMELINE.map((item, i) => (
        <div key={item.key} className="timeline-step">
          <div className="timeline-step-indicator">
            <div className={`timeline-step-dot${i <= currentIdx ? ' active' : ''}`} />
            {i < STATUS_TIMELINE.length - 1 && (
              <div className="timeline-step-line" />
            )}
          </div>
          <div className="timeline-step-content">
            <div className="timeline-step-label" style={{ color: i <= currentIdx ? 'var(--ink)' : 'var(--muted)' }}>
              {item.label}
            </div>
            <div className="timeline-step-sub">{item.sub}</div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default function CompanyDiagnosisStatus() {
  const { demandaId } = useParams()

  let demand = null
  try {
    const demands = JSON.parse(localStorage.getItem('oye_demands') || '[]')
    demand = demands.find(d => d.id === demandaId) || null
  } catch {
    demand = null
  }

  if (!demand) {
    return (
      <div className="container" style={{ padding: 'var(--space-16) var(--space-8)' }}>
        <p className="eyebrow">Não encontrado</p>
        <h1>Demanda não encontrada</h1>
        <p style={{ color: 'var(--muted)', marginTop: 'var(--space-4)' }}>
          Não encontramos uma demanda com o ID <strong>{demandaId}</strong>.
        </p>
        <div style={{ display: 'flex', gap: 'var(--space-4)', marginTop: 'var(--space-8)' }}>
          <Link to="/diagnostico/empresa/novo" className="btn btn-primary">Iniciar novo diagnóstico</Link>
          <Link to="/" className="btn btn-ghost">Voltar ao início</Link>
        </div>
      </div>
    )
  }

  const statusLabel = getStatusLabel(demand.status)
  const canComplement = demand.status === DEMAND_STATUS.AGUARDANDO_COMPLEMENTO
  const canViewDiagnosis = [
    DEMAND_STATUS.DIAGNOSTICADA,
    DEMAND_STATUS.EM_ROTEAMENTO,
    DEMAND_STATUS.EM_SELECAO,
    DEMAND_STATUS.EM_CONTRATACAO,
    DEMAND_STATUS.EM_EXECUCAO,
    DEMAND_STATUS.ENCERRADA,
  ].includes(demand.status)

  return (
    <div className="container" style={{ padding: 'var(--space-10) var(--space-8)' }}>
      <div style={{ marginBottom: 'var(--space-6)' }}>
        <Link to="/cliente/demandas" style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
          ← Minhas demandas
        </Link>
      </div>

      <div className="status-header">
        <h1 className="status-demand-name">
          {demand.nomeEmpresa || demand.title || 'Demanda sem título'}
        </h1>
        <div className="status-meta">
          <span className={`status-badge ${demand.status}`}>{statusLabel}</span>
          <span style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
            ID: {demand.id}
          </span>
          {demand.createdAt && (
            <span style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
              Enviado em {new Date(demand.createdAt).toLocaleDateString('pt-BR')}
            </span>
          )}
        </div>

        <div style={{ display: 'flex', gap: 'var(--space-3)', marginTop: 'var(--space-5)', flexWrap: 'wrap' }}>
          {canComplement && (
            <Link
              to={`/diagnostico/empresa/${demandaId}/revisao`}
              className="btn btn-primary"
            >
              Complementar informações
            </Link>
          )}
          {canViewDiagnosis && (
            <Link
              to={`/cliente/diagnosticos/${demandaId}`}
              className="btn btn-secondary"
            >
              Ver diagnóstico
            </Link>
          )}
        </div>
      </div>

      <div className="status-grid">
        <div>
          <p className="section-label" style={{ marginBottom: 'var(--space-4)' }}>Progresso</p>
          <StatusTimeline status={demand.status} />
        </div>

        <div>
          <div className="sidebar-block">
            <div className="sidebar-block-title">Resumo da demanda</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              {demand.nomeEmpresa && (
                <div className="review-field">
                  <span className="review-field-label">Empresa</span>
                  <span className="review-field-value">{demand.nomeEmpresa}</span>
                </div>
              )}
              {demand.setor && (
                <div className="review-field">
                  <span className="review-field-label">Setor</span>
                  <span className="review-field-value">{demand.setor}</span>
                </div>
              )}
              {demand.urgencia && (
                <div className="review-field">
                  <span className="review-field-label">Urgência</span>
                  <span className="review-field-value">{demand.urgencia}</span>
                </div>
              )}
              {demand.tipoDor && (
                <div className="review-field">
                  <span className="review-field-label">Tipo de dor</span>
                  <span className="review-field-value">{demand.tipoDor}</span>
                </div>
              )}
              {demand.sintoma && (
                <div className="review-field">
                  <span className="review-field-label">Sintoma</span>
                  <span className="review-field-value" style={{ fontSize: 'var(--text-xs)' }}>
                    {demand.sintoma.length > 120 ? demand.sintoma.slice(0, 120) + '...' : demand.sintoma}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
