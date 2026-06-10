import { mockIntelligence } from '../../data/mockIntelligence'

const SEVERITY_BADGE = {
  critica: 'badge badge-copper',
  alta: 'badge badge-attention',
  media: 'badge badge-positive',
  baixa: 'badge',
}

const SEVERITY_LABELS = {
  critica: 'Crítica',
  alta: 'Alta',
  media: 'Média',
  baixa: 'Baixa',
}

export default function OpsIntelligencePage() {
  const { clusters, gaps, patterns } = mockIntelligence

  return (
    <div className="workspace-content">
      <div className="ws-page-header">
        <p className="eyebrow">Frente 2 — Inteligência</p>
        <h1>Painel de Inteligência</h1>
        <p>Análise de padrões, clusters e gaps baseada nos casos da plataforma.</p>
      </div>

      {/* Top metrics */}
      <div className="intel-metric-row">
        <div className="intel-metric-card">
          <div className="intel-metric-card__value">87</div>
          <div className="intel-metric-card__label">Casos no banco</div>
        </div>
        <div className="intel-metric-card">
          <div className="intel-metric-card__value">12</div>
          <div className="intel-metric-card__label">Clusters identificados</div>
        </div>
        <div className="intel-metric-card">
          <div className="intel-metric-card__value">8</div>
          <div className="intel-metric-card__label">Gaps de solução mapeados</div>
        </div>
        <div className="intel-metric-card">
          <div className="intel-metric-card__value">23</div>
          <div className="intel-metric-card__label">Sinais para Frente 2</div>
        </div>
      </div>

      {/* Clusters */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-5)' }}>
          Clusters de Problema
        </h2>
        <div className="intel-grid">
          {clusters.map((c) => (
            <div key={c.id} className="intel-card">
              <div className="intel-card__header">
                <div className="intel-card__title">{c.name}</div>
                <div className="intel-card__freq">{c.frequency} casos</div>
              </div>
              <div className="intel-card__desc">{c.description}</div>
              <div style={{ marginBottom: 'var(--space-3)', fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                Ticket médio: <strong style={{ color: 'var(--ink)' }}>
                  R$ {(c.averageValue / 1000).toFixed(0)}k
                </strong>
              </div>
              <div className="intel-card__sectors">
                {c.sectors.map((s) => (
                  <span key={s} className="badge">{s}</span>
                ))}
              </div>
              <div style={{ marginTop: 'var(--space-3)', display: 'flex', flexWrap: 'wrap', gap: 'var(--space-1)' }}>
                {c.problemTypes.map((pt) => (
                  <span key={pt} className="badge badge-copper" style={{ fontSize: '10px' }}>{pt}</span>
                ))}
              </div>
              <button
                className="btn btn-secondary"
                style={{ marginTop: 'var(--space-3)', fontSize: 'var(--text-xs)', padding: '4px 10px' }}
              >
                Ver casos
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Gaps */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-5)' }}>
          Gaps de Solução
        </h2>
        <div className="intel-grid">
          {gaps.map((g) => (
            <div key={g.id} className="intel-card">
              <div className="intel-card__header">
                <div className="intel-card__title">{g.problemType} — {g.sector}</div>
                <span className={SEVERITY_BADGE[g.severity] || 'badge'}>
                  {SEVERITY_LABELS[g.severity] || g.severity}
                </span>
              </div>
              <div className="intel-card__desc">{g.description}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                {g.demandCount} demandas sem cobertura ideal
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Patterns */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-5)' }}>
          Padrões Observados
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
          {patterns.map((p) => (
            <div key={p.id} className="section-card">
              <div className="section-card__header">
                <h3 className="section-card__title">{p.title}</h3>
              </div>
              <div className="section-card__body">
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--ink-soft)', marginBottom: 'var(--space-3)', lineHeight: '1.7' }}>
                  {p.description}
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                  <div>
                    <p className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>Insight</p>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', lineHeight: '1.6' }}>{p.insight}</p>
                  </div>
                  <div>
                    <p className="eyebrow" style={{ marginBottom: 'var(--space-1)' }}>Recomendação</p>
                    <p style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)', lineHeight: '1.6' }}>{p.recommendation}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sinais para Frente 2 */}
      <div style={{ marginBottom: 'var(--space-8)' }}>
        <h2 style={{ fontSize: 'var(--text-xl)', fontWeight: 700, marginBottom: 'var(--space-5)' }}>
          Sinais para Frente 2
        </h2>
        <div className="intel-grid">
          {[
            { id: 's1', desc: 'Alta frequência de demandas CFO interim no agronegócio — oportunidade de produto Oyê para o setor.', freq: 8, value: 'Alto' },
            { id: 's2', desc: 'Demandas de healthtech por transformação digital excedem oferta — oportunidade de parceria estratégica.', freq: 6, value: 'Alto' },
            { id: 's3', desc: 'Startups precisam de LGPD/compliance a custo acessível — possível produto padronizado ou comunidade.', freq: 5, value: 'Médio' },
          ].map((s) => (
            <div key={s.id} className="intel-card">
              <div className="intel-card__header">
                <span className="badge badge-copper">Sinal</span>
                <div className="intel-card__freq">{s.freq} ocorrências</div>
              </div>
              <div className="intel-card__desc" style={{ marginTop: 'var(--space-2)' }}>{s.desc}</div>
              <div style={{ fontSize: 'var(--text-xs)', color: 'var(--muted)' }}>
                Potencial: <strong style={{ color: 'var(--ink)' }}>{s.value}</strong>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
