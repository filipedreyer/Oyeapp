import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
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
}

function formatDate(iso) {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('pt-BR')
}

export default function ClientDemandDetailPage() {
  const { demandaId } = useParams()
  const [demand, setDemand] = useState(null)
  const [complement, setComplement] = useState('')
  const [complementSent, setComplementSent] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('oye_demands')
    if (stored) {
      try {
        const all = JSON.parse(stored)
        const found = all.find((d) => d.id === demandaId)
        setDemand(found || null)
      } catch {}
    }
  }, [demandaId])

  function sendComplement() {
    if (!complement.trim()) return
    setComplementSent(true)
    // In a real app this would update the demand status and send info to backend
  }

  if (!demand) {
    return (
      <div className="workspace-content">
        <div className="alert">
          Demanda não encontrada.{' '}
          <Link to="/cliente/demandas">Voltar para minhas demandas</Link>
        </div>
      </div>
    )
  }

  const currentIndex = STATUS_ORDER.indexOf(demand.status)
  const needsComplement = demand.status === DEMAND_STATUS.AGUARDANDO_COMPLEMENTO

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">
          <Link to="/cliente/demandas" style={{ color: 'var(--muted)', textDecoration: 'none' }}>
            Minhas demandas
          </Link>
          {' / '}Detalhe
        </p>
        <h1 style={{ marginBottom: 'var(--space-2)' }}>{demand.title || 'Demanda'}</h1>
        <span className={STATUS_BADGE[demand.status] || 'badge'}>
          {getStatusLabel(demand.status)}
        </span>
      </div>

      {/* Alert if complement needed */}
      {needsComplement && !complementSent && (
        <div className="alert" style={{ marginBottom: 'var(--space-6)' }}>
          <strong>A equipe Oyê precisa de mais informações.</strong> Complemente sua demanda abaixo.
        </div>
      )}

      {/* Status timeline */}
      <div className="demand-status-timeline">
        {STATUS_ORDER.map((status, idx) => (
          <div
            key={status}
            className={`status-step${idx < currentIndex ? ' status-step--past' : ''}${idx === currentIndex ? ' status-step--active' : ''}`}
          >
            <div className="status-step__label">{STATUS_LABELS[status]}</div>
            {idx < STATUS_ORDER.length - 1 && <div className="status-step__arrow" />}
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: 'var(--space-6)' }}>
        {/* Left: demand data */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Dados da demanda</h3>
            </div>
            <div className="section-card__body">
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>Setor</p>
                  <p style={{ fontSize: 'var(--text-sm)' }}>{demand.sector || '—'}</p>
                </div>
                {demand.budget && (
                  <div>
                    <p className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>Orçamento estimado</p>
                    <p style={{ fontSize: 'var(--text-sm)' }}>{demand.budget}</p>
                  </div>
                )}
                {demand.timeline && (
                  <div>
                    <p className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>Prazo</p>
                    <p style={{ fontSize: 'var(--text-sm)' }}>{demand.timeline}</p>
                  </div>
                )}
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>Data de envio</p>
                  <p style={{ fontSize: 'var(--text-sm)' }}>{formatDate(demand.createdAt)}</p>
                </div>
              </div>

              {demand.description && (
                <div style={{ marginBottom: 'var(--space-4)' }}>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Descrição</p>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-soft)', lineHeight: '1.7' }}>{demand.description}</p>
                </div>
              )}

              {demand.problemTypes && demand.problemTypes.length > 0 && (
                <div>
                  <p className="eyebrow" style={{ marginBottom: 'var(--space-2)' }}>Tipos de problema</p>
                  <div style={{ display: 'flex', gap: 'var(--space-2)', flexWrap: 'wrap' }}>
                    {demand.problemTypes.map((pt) => (
                      <span key={pt} className="badge badge-copper">{pt}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Complement section */}
          {needsComplement && !complementSent && (
            <div className="section-card">
              <div className="section-card__header">
                <h3 className="section-card__title">Complementar informações</h3>
              </div>
              <div className="section-card__body">
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)', marginBottom: 'var(--space-3)' }}>
                  A equipe Oyê precisa de informações adicionais para avançar com sua demanda.
                </p>
                <textarea
                  value={complement}
                  onChange={(e) => setComplement(e.target.value)}
                  placeholder="Adicione as informações solicitadas pela equipe Oyê..."
                  rows={5}
                  style={{ width: '100%', fontSize: 'var(--text-sm)', padding: 'var(--space-3)', border: 'var(--border)', borderRadius: '2px', resize: 'vertical', marginBottom: 'var(--space-3)' }}
                />
                <button className="btn btn-primary" onClick={sendComplement} disabled={!complement.trim()}>
                  Enviar complemento
                </button>
              </div>
            </div>
          )}

          {complementSent && (
            <div className="section-card">
              <div className="section-card__body">
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--positive)', fontWeight: 600 }}>
                  Complemento enviado com sucesso. A equipe Oyê analisará as informações em breve.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Right: status info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Status</h3>
            </div>
            <div className="section-card__body">
              <div style={{ marginBottom: 'var(--space-3)' }}>
                <span className={STATUS_BADGE[demand.status] || 'badge'}>
                  {getStatusLabel(demand.status)}
                </span>
              </div>
              <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                A equipe Oyê está acompanhando sua demanda e entrará em contato se necessário.
              </p>
            </div>
          </div>

          <div className="section-card">
            <div className="section-card__header">
              <h3 className="section-card__title">Próximos passos</h3>
            </div>
            <div className="section-card__body">
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                {demand.status === 'enviada' && (
                  <p>Sua demanda foi recebida e será analisada pela equipe Oyê em breve.</p>
                )}
                {demand.status === 'qualificada' && (
                  <p>Sua demanda foi qualificada. Iniciaremos o diagnóstico em breve.</p>
                )}
                {demand.status === 'em_diagnostico' && (
                  <p>Um analista Oyê está realizando o diagnóstico da sua demanda.</p>
                )}
                {demand.status === 'em_roteamento' && (
                  <p>O diagnóstico está concluído. Estamos identificando a melhor solução para você.</p>
                )}
                {demand.status === 'em_selecao' && (
                  <p>Estamos selecionando os melhores provedores para sua demanda.</p>
                )}
                {demand.status === 'em_execucao' && (
                  <p>Seu projeto está em execução. Acompanhe o progresso na área de projetos.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
