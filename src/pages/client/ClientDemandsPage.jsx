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
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('pt-BR')
}

export default function ClientDemandsPage() {
  const [demands, setDemands] = useState([])

  useEffect(() => {
    const stored = localStorage.getItem('oye_demands')
    if (stored) {
      try { setDemands(JSON.parse(stored)) } catch {}
    }
  }, [])

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Área do cliente</p>
        <h1>Minhas Demandas</h1>
        <p>Acompanhe o status de todas as suas demandas na plataforma Oyê.</p>
      </div>

      {demands.length === 0 ? (
        <div
          style={{
            background: 'var(--white)',
            border: 'var(--border)',
            padding: 'var(--space-12)',
            textAlign: 'center',
            borderRadius: '2px',
          }}
        >
          <p className="eyebrow" style={{ marginBottom: 'var(--space-3)' }}>Nenhuma demanda</p>
          <h2 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>Você ainda não tem demandas</h2>
          <p style={{ color: 'var(--muted)', fontSize: 'var(--text-sm)', marginBottom: 'var(--space-6)' }}>
            Inicie um diagnóstico para registrar seu primeiro desafio.
          </p>
          <Link to="/diagnostico/empresa/novo" className="btn btn-primary">
            Iniciar diagnóstico
          </Link>
        </div>
      ) : (
        <div className="section-card">
          <table className="ws-table">
            <thead>
              <tr>
                <th>Demanda</th>
                <th>Setor</th>
                <th>Status</th>
                <th>Data</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {demands.map((d) => (
                <tr key={d.id}>
                  <td>
                    <div style={{ fontWeight: 600, color: 'var(--ink)', marginBottom: '2px' }}>
                      {d.title || 'Demanda sem título'}
                    </div>
                    {d.description && (
                      <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                        {d.description.slice(0, 80)}{d.description.length > 80 ? '…' : ''}
                      </div>
                    )}
                  </td>
                  <td style={{ color: 'var(--muted)' }}>{d.sector || '—'}</td>
                  <td>
                    <span className={STATUS_BADGE[d.status] || 'badge'}>
                      {getStatusLabel(d.status)}
                    </span>
                  </td>
                  <td style={{ color: 'var(--muted)', fontSize: 'var(--text-xs)' }}>{formatDate(d.createdAt)}</td>
                  <td>
                    <Link
                      to={`/cliente/demandas/${d.id}`}
                      className="btn btn-secondary"
                      style={{ fontSize: 'var(--text-xs)', padding: '4px 10px' }}
                    >
                      Ver detalhes
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
