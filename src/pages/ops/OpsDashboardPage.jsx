import { Link } from 'react-router-dom'
import { mockDemands } from '../../data/mockDemands'
import { mockProviders } from '../../data/mockProviders'
import { mockIntelligence } from '../../data/mockIntelligence'
import { getStatusLabel, isActive } from '../../domain/demands'

const activeDemands = mockDemands.filter(isActive)
const providersInHomologation = mockProviders.filter(
  (p) => p.homologationStatus !== 'aprovado'
)

const mockDiagnosticsPending = [
  { id: 'diag-001', demandaId: 'dem-001', empresa: 'Supermercados Horizonte', analista: 'Equipe Oyê', status: 'em_analise' },
  { id: 'diag-002', demandaId: 'dem-002', empresa: 'LogFlex Transportes', analista: 'Equipe Oyê', status: 'aguardando_dados' },
]

const STATUS_BADGE_MAP = {
  rascunho: 'badge',
  enviada: 'badge badge-attention',
  qualificada: 'badge badge-positive',
  em_diagnostico: 'badge badge-navy',
  em_roteamento: 'badge badge-navy',
  em_execucao: 'badge badge-positive',
  diagnosticada: 'badge badge-positive',
  aguardando_complemento: 'badge badge-attention',
  cancelada: 'badge',
}

function getBadgeClass(status) {
  return STATUS_BADGE_MAP[status] || 'badge'
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: '2-digit' })
}

export default function OpsDashboardPage() {
  const signals = mockIntelligence.clusters.slice(0, 3)

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Cockpit</p>
        <h1>Dashboard de Operações</h1>
        <p>Visão geral das operações da plataforma Oyê.</p>
      </div>

      {/* Metrics bar */}
      <div className="ops-metrics-grid">
        <div className="ops-metric-card">
          <div className="ops-metric-card__value">{activeDemands.length}</div>
          <div className="ops-metric-card__label">Demandas ativas</div>
        </div>
        <div className="ops-metric-card">
          <div className="ops-metric-card__value">3</div>
          <div className="ops-metric-card__label">Diagnósticos em andamento</div>
        </div>
        <div className="ops-metric-card">
          <div className="ops-metric-card__value">{providersInHomologation.length}</div>
          <div className="ops-metric-card__label">Especialistas em avaliação</div>
        </div>
        <div className="ops-metric-card">
          <div className="ops-metric-card__value">2</div>
          <div className="ops-metric-card__label">Projetos em execução</div>
        </div>
      </div>

      {/* Three columns */}
      <div className="ops-three-col">
        {/* Col 1: Demandas */}
        <div className="ops-col-card">
          <div className="ops-col-card__header">
            <h3 className="ops-col-card__title">Fila de Demandas</h3>
          </div>
          <div className="ops-col-card__body">
            {mockDemands.slice(0, 4).map((d) => (
              <div key={d.id} className="ops-col-item">
                <div className="ops-col-item__main">
                  <div className="ops-col-item__title">{d.title}</div>
                  <div className="ops-col-item__sub">
                    <span className={getBadgeClass(d.status)} style={{ marginRight: '6px' }}>
                      {getStatusLabel(d.status)}
                    </span>
                    {formatDate(d.createdAt)}
                  </div>
                </div>
                <Link to={`/ops/demandas/${d.id}`} className="ops-col-item__action">
                  Ver
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Col 2: Diagnósticos */}
        <div className="ops-col-card">
          <div className="ops-col-card__header">
            <h3 className="ops-col-card__title">Diagnósticos Pendentes</h3>
          </div>
          <div className="ops-col-card__body">
            {mockDiagnosticsPending.map((d) => (
              <div key={d.id} className="ops-col-item">
                <div className="ops-col-item__main">
                  <div className="ops-col-item__title">{d.empresa}</div>
                  <div className="ops-col-item__sub">
                    <span className="badge badge-navy" style={{ marginRight: '6px' }}>
                      {d.status === 'em_analise' ? 'Em análise' : 'Aguardando dados'}
                    </span>
                    {d.analista}
                  </div>
                </div>
                <Link to={`/ops/diagnosticos/${d.id}`} className="ops-col-item__action">
                  Workbench
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Col 3: Sinais de Inteligência */}
        <div className="ops-col-card">
          <div className="ops-col-card__header">
            <h3 className="ops-col-card__title">Sinais de Inteligência</h3>
          </div>
          <div className="ops-col-card__body">
            {signals.map((c) => (
              <div key={c.id} className="ops-col-item">
                <div className="ops-col-item__main">
                  <div className="ops-col-item__title">{c.name}</div>
                  <div className="ops-col-item__sub">
                    {c.frequency} casos · {c.sectors.join(', ')}
                  </div>
                </div>
                <Link to="/ops/inteligencia" className="ops-col-item__action">
                  Ver
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Quick actions */}
      <div className="section-card">
        <div className="section-card__header">
          <h3 className="section-card__title">Ações rápidas</h3>
        </div>
        <div className="section-card__body">
          <div className="ops-quick-actions">
            <Link to="/ops/demandas" className="btn btn-secondary">
              Nova demanda manual
            </Link>
            <Link to="/ops/provedores" className="btn btn-secondary">
              Ver base de especialistas
            </Link>
            <Link to="/ops/inteligencia" className="btn btn-secondary">
              Painel de inteligência
            </Link>
            <Link to="/ops/diagnosticos" className="btn btn-secondary">
              Ver diagnósticos
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
