import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getStatusLabel } from '../../domain/demands'

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
  return new Date(iso).toLocaleDateString('pt-BR')
}

export default function ClientDashboardPage() {
  const [user, setUser] = useState(null)
  const [demands, setDemands] = useState([])

  useEffect(() => {
    const storedUser = localStorage.getItem('oye_client_user')
    if (storedUser) {
      try { setUser(JSON.parse(storedUser)) } catch {}
    }
    const storedDemands = localStorage.getItem('oye_demands')
    if (storedDemands) {
      try { setDemands(JSON.parse(storedDemands)) } catch {}
    }
  }, [])

  const companyName = user?.companyName || user?.name || 'sua empresa'
  const hasComplementPending = demands.some((d) => d.status === 'aguardando_complemento')

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Bem-vindo(a)</p>
        <h1>Olá, {companyName}</h1>
        <p>Acompanhe suas demandas e o status dos seus projetos com a Oyê.</p>
      </div>

      {/* Alert for pending complement */}
      {hasComplementPending && (
        <div className="alert" style={{ marginBottom: 'var(--space-6)' }}>
          <strong>Atenção:</strong> Uma demanda aguarda complemento de informações.{' '}
          <Link to="/cliente/demandas" style={{ color: 'var(--attention)', fontWeight: 700 }}>
            Ver demandas →
          </Link>
        </div>
      )}

      {demands.length === 0 ? (
        /* Empty state */
        <div
          style={{
            background: 'var(--white)',
            border: 'var(--border)',
            padding: 'var(--space-12) var(--space-8)',
            textAlign: 'center',
            borderRadius: '2px',
          }}
        >
          <p className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Nenhuma demanda</p>
          <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>
            Você ainda não tem demandas registradas
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)', maxWidth: '420px', margin: '0 auto var(--space-6)' }}>
            Inicie um diagnóstico para que a equipe Oyê possa entender o seu desafio e conectar você com a solução certa.
          </p>
          <Link to="/diagnostico/empresa/novo" className="btn btn-primary">
            Iniciar diagnóstico
          </Link>
        </div>
      ) : (
        /* Demand cards */
        <div>
          <div style={{ marginBottom: 'var(--space-6)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h2 style={{ fontSize: 'var(--text-lg)', fontWeight: 700 }}>Suas demandas</h2>
            <Link to="/cliente/demandas" style={{ fontSize: 'var(--text-sm)', color: 'var(--copper)' }}>
              Ver todas →
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 'var(--space-4)' }}>
            {demands.slice(0, 4).map((d) => (
              <div
                key={d.id}
                style={{
                  background: 'var(--white)',
                  border: 'var(--border)',
                  padding: 'var(--space-5)',
                  borderRadius: '2px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--space-3)' }}>
                  <span className={STATUS_BADGE[d.status] || 'badge'}>{getStatusLabel(d.status)}</span>
                  <span style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>{d.createdAt ? formatDate(d.createdAt) : '—'}</span>
                </div>
                <h3 style={{ fontSize: 'var(--text-sm)', fontWeight: 700, color: 'var(--ink)', marginBottom: 'var(--space-2)', lineHeight: '1.5' }}>
                  {d.title || 'Demanda sem título'}
                </h3>
                {d.sector && (
                  <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', marginBottom: 'var(--space-3)' }}>{d.sector}</p>
                )}
                <Link
                  to={`/cliente/demandas/${d.id}`}
                  className="btn btn-secondary"
                  style={{ fontSize: 'var(--text-xs)', padding: '4px 12px' }}
                >
                  Ver demanda
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Quick actions */}
      <div style={{ marginTop: 'var(--space-8)' }}>
        <h2 style={{ fontSize: 'var(--text-base)', fontWeight: 700, marginBottom: 'var(--space-4)' }}>Ações rápidas</h2>
        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <Link to="/diagnostico/empresa/novo" className="btn btn-primary">
            Nova demanda
          </Link>
          <Link to="/cliente/demandas" className="btn btn-secondary">
            Ver todas as demandas
          </Link>
        </div>
      </div>
    </div>
  )
}
