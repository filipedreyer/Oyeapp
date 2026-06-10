import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TOTAL_STEPS = 8

const STEP_TITLES = [
  'Sua empresa',
  'Responsável',
  'Dor percebida',
  'Impacto',
  'Histórico',
  'Dados e contexto',
  'Revisão',
  'Envio',
]

const INITIAL_DRAFT = {
  // Step 0
  nomeEmpresa: '',
  setor: '',
  porte: '',
  unidades: '',
  regiao: '',
  modeloOperacao: '',
  // Step 1
  nomeResponsavel: '',
  cargo: '',
  email: '',
  telefone: '',
  areaResponsavel: '',
  // Step 2
  tipoDor: '',
  sintoma: '',
  hipotese: '',
  // Step 3
  impactoPercebido: '',
  urgencia: '',
  orcamentoIdeia: '',
  // Step 4
  historicoTentativas: '',
  resultadoTentativas: '',
  tempoComProblema: '',
  // Step 5
  dadosDisponiveis: '',
  restricoes: '',
  contextoAdicional: '',
  anexos: '',
}

function validateStep(step, draft) {
  const errors = {}
  if (step === 0) {
    if (!draft.nomeEmpresa.trim()) errors.nomeEmpresa = 'Nome da empresa é obrigatório'
    if (!draft.setor) errors.setor = 'Setor é obrigatório'
    if (!draft.porte) errors.porte = 'Porte é obrigatório'
  }
  if (step === 1) {
    if (!draft.nomeResponsavel.trim()) errors.nomeResponsavel = 'Seu nome é obrigatório'
    if (!draft.cargo.trim()) errors.cargo = 'Cargo é obrigatório'
    if (!draft.email.trim()) errors.email = 'Email é obrigatório'
    else if (!/\S+@\S+\.\S+/.test(draft.email)) errors.email = 'Email inválido'
  }
  if (step === 2) {
    if (!draft.tipoDor) errors.tipoDor = 'Selecione o tipo de dor'
    if (!draft.sintoma.trim()) errors.sintoma = 'Descrição do sintoma é obrigatória'
    else if (draft.sintoma.trim().length < 50) errors.sintoma = 'Descreva com pelo menos 50 caracteres'
  }
  if (step === 3) {
    if (!draft.impactoPercebido.trim()) errors.impactoPercebido = 'Descreva o impacto'
    if (!draft.urgencia) errors.urgencia = 'Selecione a urgência'
  }
  return errors
}

function getMissingRequiredFields(draft) {
  const missing = []
  if (!draft.nomeEmpresa.trim()) missing.push('Nome da empresa')
  if (!draft.setor) missing.push('Setor')
  if (!draft.porte) missing.push('Porte')
  if (!draft.nomeResponsavel.trim()) missing.push('Seu nome')
  if (!draft.cargo.trim()) missing.push('Cargo')
  if (!draft.email.trim()) missing.push('Email')
  if (!draft.tipoDor) missing.push('Tipo de dor')
  if (!draft.sintoma.trim() || draft.sintoma.trim().length < 50) missing.push('Sintoma percebido (mín. 50 caracteres)')
  if (!draft.impactoPercebido.trim()) missing.push('Impacto percebido')
  if (!draft.urgencia) missing.push('Urgência')
  return missing
}

function ProgressDots({ step }) {
  return (
    <div className="wizard-progress">
      {Array.from({ length: TOTAL_STEPS }, (_, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < TOTAL_STEPS - 1 ? 1 : 'none' }}>
          <div
            className={`wizard-progress-dot ${i === step ? 'active' : i < step ? 'completed' : ''}`}
          >
            {i < step ? '✓' : i + 1}
          </div>
          {i < TOTAL_STEPS - 1 && (
            <div className={`wizard-progress-line ${i < step ? 'completed' : ''}`} />
          )}
        </div>
      ))}
    </div>
  )
}

function StepHeader({ step }) {
  return (
    <div className="wizard-step-header">
      <p className="eyebrow">Passo {step + 1} de {TOTAL_STEPS}</p>
      <h2 className="wizard-step-title">{STEP_TITLES[step]}</h2>
    </div>
  )
}

function FieldGroup({ label, error, optional, children }) {
  return (
    <div className="form-group">
      <label className="form-label">
        {label}
        {optional && <span className="form-label-optional">(opcional)</span>}
      </label>
      {children}
      {error && <span className="form-error">{error}</span>}
    </div>
  )
}

// Step 0
function Step0({ draft, onChange, errors }) {
  return (
    <>
      <FieldGroup label="Nome da empresa" error={errors.nomeEmpresa}>
        <input
          className={`form-input${errors.nomeEmpresa ? ' is-error' : ''}`}
          value={draft.nomeEmpresa}
          onChange={e => onChange('nomeEmpresa', e.target.value)}
          placeholder="Razão social ou nome comercial"
        />
      </FieldGroup>
      <FieldGroup label="Setor" error={errors.setor}>
        <select
          className={`form-select${errors.setor ? ' is-error' : ''}`}
          value={draft.setor}
          onChange={e => onChange('setor', e.target.value)}
        >
          <option value="">Selecione o setor</option>
          {['Varejo', 'Industria', 'Financeiro', 'Tecnologia', 'Agronegócio', 'Saúde', 'Educação', 'Serviços', 'Outro'].map(s => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </FieldGroup>
      <FieldGroup label="Porte da empresa" error={errors.porte}>
        <select
          className={`form-select${errors.porte ? ' is-error' : ''}`}
          value={draft.porte}
          onChange={e => onChange('porte', e.target.value)}
        >
          <option value="">Selecione o porte</option>
          <option value="micro">Micro (até 19 func.)</option>
          <option value="pequena">Pequena (20-99)</option>
          <option value="media">Média (100-499)</option>
          <option value="grande">Grande (500+)</option>
        </select>
      </FieldGroup>
      <FieldGroup label="Número de unidades ou escala operacional" optional>
        <input
          className="form-input"
          value={draft.unidades}
          onChange={e => onChange('unidades', e.target.value)}
          placeholder="Ex.: 3 plantas, 12 lojas, operação nacional"
        />
      </FieldGroup>
      <FieldGroup label="Região/Estado de operação" optional>
        <input
          className="form-input"
          value={draft.regiao}
          onChange={e => onChange('regiao', e.target.value)}
          placeholder="Ex.: São Paulo, SP — ou nacional"
        />
      </FieldGroup>
      <FieldGroup label="Modelo de operação" optional>
        <input
          className="form-input"
          value={draft.modeloOperacao}
          onChange={e => onChange('modeloOperacao', e.target.value)}
          placeholder="B2B, B2C, misto, marketplace..."
        />
      </FieldGroup>
    </>
  )
}

// Step 1
function Step1({ draft, onChange, errors }) {
  return (
    <>
      <FieldGroup label="Seu nome" error={errors.nomeResponsavel}>
        <input
          className={`form-input${errors.nomeResponsavel ? ' is-error' : ''}`}
          value={draft.nomeResponsavel}
          onChange={e => onChange('nomeResponsavel', e.target.value)}
          placeholder="Nome completo"
        />
      </FieldGroup>
      <FieldGroup label="Cargo" error={errors.cargo}>
        <input
          className={`form-input${errors.cargo ? ' is-error' : ''}`}
          value={draft.cargo}
          onChange={e => onChange('cargo', e.target.value)}
          placeholder="Ex.: CEO, Diretor de Operações"
        />
      </FieldGroup>
      <FieldGroup label="Email corporativo" error={errors.email}>
        <input
          type="email"
          className={`form-input${errors.email ? ' is-error' : ''}`}
          value={draft.email}
          onChange={e => onChange('email', e.target.value)}
          placeholder="seuemail@empresa.com.br"
        />
      </FieldGroup>
      <FieldGroup label="Telefone" optional>
        <input
          className="form-input"
          value={draft.telefone}
          onChange={e => onChange('telefone', e.target.value)}
          placeholder="(11) 99999-0000"
        />
      </FieldGroup>
      <FieldGroup label="Área responsável pelo problema" optional>
        <input
          className="form-input"
          value={draft.areaResponsavel}
          onChange={e => onChange('areaResponsavel', e.target.value)}
          placeholder="Ex.: Financeiro, Operações, TI"
        />
      </FieldGroup>
    </>
  )
}

// Step 2
function Step2({ draft, onChange, errors }) {
  const options = [
    { value: 'explicita', label: 'Explícita', desc: 'Sei o que está errado' },
    { value: 'difusa', label: 'Difusa', desc: 'Tenho uma sensação mas não sei nomear' },
    { value: 'latente', label: 'Latente', desc: 'Suspeito que existe um problema' },
  ]
  return (
    <>
      <FieldGroup label="Tipo de dor" error={errors.tipoDor}>
        <div className="radio-group">
          {options.map(o => (
            <label
              key={o.value}
              className={`radio-option${draft.tipoDor === o.value ? ' selected' : ''}`}
            >
              <input
                type="radio"
                name="tipoDor"
                value={o.value}
                checked={draft.tipoDor === o.value}
                onChange={e => onChange('tipoDor', e.target.value)}
              />
              <div>
                <div className="radio-option-label">{o.label}</div>
                <div className="radio-option-desc">{o.desc}</div>
              </div>
            </label>
          ))}
        </div>
      </FieldGroup>
      <FieldGroup label="Descreva o sintoma percebido" error={errors.sintoma}>
        <textarea
          className={`form-textarea${errors.sintoma ? ' is-error' : ''}`}
          value={draft.sintoma}
          onChange={e => onChange('sintoma', e.target.value)}
          placeholder="O que você está observando? O que está acontecendo que não deveria ou deixou de acontecer?"
          rows={5}
        />
        <span className="form-hint">Mínimo 50 caracteres. {draft.sintoma.length}/50</span>
      </FieldGroup>
      <FieldGroup label="Qual é a sua hipótese sobre a causa?" optional>
        <textarea
          className="form-textarea"
          value={draft.hipotese}
          onChange={e => onChange('hipotese', e.target.value)}
          placeholder="O que você acha que está causando esse problema? (não precisa estar certo)"
          rows={4}
        />
      </FieldGroup>
    </>
  )
}

// Step 3
function Step3({ draft, onChange, errors }) {
  return (
    <>
      <FieldGroup label="Descreva o impacto nos resultados" error={errors.impactoPercebido}>
        <textarea
          className={`form-textarea${errors.impactoPercebido ? ' is-error' : ''}`}
          value={draft.impactoPercebido}
          onChange={e => onChange('impactoPercebido', e.target.value)}
          placeholder="Como esse problema está afetando o negócio? (financeiro, operacional, estratégico)"
          rows={5}
        />
      </FieldGroup>
      <FieldGroup label="Urgência" error={errors.urgencia}>
        <select
          className={`form-select${errors.urgencia ? ' is-error' : ''}`}
          value={draft.urgencia}
          onChange={e => onChange('urgencia', e.target.value)}
        >
          <option value="">Selecione a urgência</option>
          <option value="critico">Crítico — precisa ser resolvido agora</option>
          <option value="alto">Alto — nos próximos 30-60 dias</option>
          <option value="medio">Médio — nos próximos 3-6 meses</option>
          <option value="baixo">Baixo — planejamento de longo prazo</option>
        </select>
      </FieldGroup>
      <FieldGroup label="Ideia de orçamento" optional>
        <select
          className="form-select"
          value={draft.orcamentoIdeia}
          onChange={e => onChange('orcamentoIdeia', e.target.value)}
        >
          <option value="">Selecione (opcional)</option>
          <option value="nao_sei">Ainda não sei</option>
          <option value="ate_30k">Até R$30k</option>
          <option value="30k_100k">R$30k–100k</option>
          <option value="100k_300k">R$100k–300k</option>
          <option value="300k_mais">R$300k+</option>
        </select>
      </FieldGroup>
    </>
  )
}

// Step 4
function Step4({ draft, onChange }) {
  return (
    <>
      <FieldGroup label="Já tentaram resolver esse problema antes? Como?" optional>
        <textarea
          className="form-textarea"
          value={draft.historicoTentativas}
          onChange={e => onChange('historicoTentativas', e.target.value)}
          placeholder="Descreva iniciativas anteriores, consultorias contratadas, soluções tentadas"
          rows={4}
        />
      </FieldGroup>
      <FieldGroup label="Qual foi o resultado dessas tentativas?" optional>
        <textarea
          className="form-textarea"
          value={draft.resultadoTentativas}
          onChange={e => onChange('resultadoTentativas', e.target.value)}
          placeholder="O que funcionou? O que não funcionou? Por quê?"
          rows={4}
        />
      </FieldGroup>
      <FieldGroup label="Há quanto tempo percebem esse problema?" optional>
        <select
          className="form-select"
          value={draft.tempoComProblema}
          onChange={e => onChange('tempoComProblema', e.target.value)}
        >
          <option value="">Selecione (opcional)</option>
          <option value="menos_1mes">Menos de 1 mês</option>
          <option value="1_6meses">1–6 meses</option>
          <option value="6_12meses">6–12 meses</option>
          <option value="mais_1ano">Mais de 1 ano</option>
          <option value="nao_sei">Não sei ao certo</option>
        </select>
      </FieldGroup>
    </>
  )
}

// Step 5
function Step5({ draft, onChange }) {
  return (
    <>
      <FieldGroup label="Que dados você tem disponíveis?" optional>
        <textarea
          className="form-textarea"
          value={draft.dadosDisponiveis}
          onChange={e => onChange('dadosDisponiveis', e.target.value)}
          placeholder="Relatórios, planilhas, sistemas, pesquisas anteriores"
          rows={4}
        />
      </FieldGroup>
      <FieldGroup label="Quais são as restrições?" optional>
        <textarea
          className="form-textarea"
          value={draft.restricoes}
          onChange={e => onChange('restricoes', e.target.value)}
          placeholder="Budget, prazo, confidencialidade, restrições de equipe, limitações técnicas"
          rows={4}
        />
      </FieldGroup>
      <FieldGroup label="Contexto adicional relevante" optional>
        <textarea
          className="form-textarea"
          value={draft.contextoAdicional}
          onChange={e => onChange('contextoAdicional', e.target.value)}
          placeholder="Qualquer informação que ajude a entender melhor a situação"
          rows={4}
        />
      </FieldGroup>
      <FieldGroup label="Anexos" optional>
        <input
          className="form-input"
          value=""
          disabled
          placeholder="Upload de arquivos"
        />
        <span className="form-hint">
          O upload de arquivos estará disponível após o envio do diagnóstico. Por ora, descreva os documentos disponíveis no campo acima.
        </span>
      </FieldGroup>
    </>
  )
}

// Step 6 — Review
function Step6({ draft, onGoToStep }) {
  const missingFields = getMissingRequiredFields(draft)

  const sections = [
    {
      title: 'Sua empresa',
      step: 0,
      fields: [
        { label: 'Nome da empresa', value: draft.nomeEmpresa },
        { label: 'Setor', value: draft.setor },
        { label: 'Porte', value: draft.porte },
        { label: 'Unidades', value: draft.unidades },
        { label: 'Região', value: draft.regiao },
        { label: 'Modelo de operação', value: draft.modeloOperacao },
      ],
    },
    {
      title: 'Responsável',
      step: 1,
      fields: [
        { label: 'Nome', value: draft.nomeResponsavel },
        { label: 'Cargo', value: draft.cargo },
        { label: 'Email', value: draft.email },
        { label: 'Telefone', value: draft.telefone },
        { label: 'Área responsável', value: draft.areaResponsavel },
      ],
    },
    {
      title: 'Dor percebida',
      step: 2,
      fields: [
        { label: 'Tipo de dor', value: draft.tipoDor },
        { label: 'Sintoma', value: draft.sintoma, full: true },
        { label: 'Hipótese', value: draft.hipotese, full: true },
      ],
    },
    {
      title: 'Impacto',
      step: 3,
      fields: [
        { label: 'Impacto percebido', value: draft.impactoPercebido, full: true },
        { label: 'Urgência', value: draft.urgencia },
        { label: 'Orçamento', value: draft.orcamentoIdeia },
      ],
    },
    {
      title: 'Histórico',
      step: 4,
      fields: [
        { label: 'Histórico de tentativas', value: draft.historicoTentativas, full: true },
        { label: 'Resultado das tentativas', value: draft.resultadoTentativas, full: true },
        { label: 'Tempo com o problema', value: draft.tempoComProblema },
      ],
    },
    {
      title: 'Dados e contexto',
      step: 5,
      fields: [
        { label: 'Dados disponíveis', value: draft.dadosDisponiveis, full: true },
        { label: 'Restrições', value: draft.restricoes, full: true },
        { label: 'Contexto adicional', value: draft.contextoAdicional, full: true },
      ],
    },
  ]

  return (
    <>
      {missingFields.length > 0 && (
        <div className="alert alert-info" style={{ marginBottom: 'var(--space-6)' }}>
          <strong>Campos pendentes obrigatórios:</strong>
          <ul style={{ margin: 'var(--space-2) 0 0 var(--space-4)', padding: 0 }}>
            {missingFields.map(f => (
              <li key={f} style={{ fontSize: 'var(--text-sm)', color: 'var(--attention)' }}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {sections.map(section => (
        <div key={section.title} className="review-section">
          <div className="review-section-title">
            {section.title}
            <button className="review-section-edit" onClick={() => onGoToStep(section.step)}>
              Editar
            </button>
          </div>
          <div className="review-fields">
            {section.fields.map(field => (
              <div key={field.label} className={`review-field${field.full ? ' full-width' : ''}`}>
                <span className="review-field-label">{field.label}</span>
                {field.value
                  ? <span className="review-field-value">{field.value}</span>
                  : <span className="review-field-empty">Não informado</span>
                }
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  )
}

// Step 7 — Submit
function Step7({ draft, onSubmit, isSubmitting }) {
  const missingFields = getMissingRequiredFields(draft)
  return (
    <div className="wizard-submit-section">
      {missingFields.length > 0 ? (
        <>
          <div className="alert alert-info" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
            <strong>Há campos obrigatórios não preenchidos.</strong> Volte à etapa de revisão para completar antes de enviar.
            <ul style={{ margin: 'var(--space-2) 0 0 var(--space-4)', padding: 0 }}>
              {missingFields.map(f => <li key={f} style={{ color: 'var(--attention)', fontSize: 'var(--text-sm)' }}>{f}</li>)}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="wizard-submit-icon">✦</div>
          <h2 className="wizard-submit-title">Pronto para enviar?</h2>
          <p className="wizard-submit-desc">
            Ao confirmar, seu diagnóstico será enviado para a equipe Oyê. Você receberá atualizações por email e poderá acompanhar o andamento.
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={onSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Confirmar envio'}
          </button>
        </>
      )}
    </div>
  )
}

export default function CompanyDiagnosisWizard() {
  const navigate = useNavigate()

  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState(() => {
    try {
      const saved = localStorage.getItem('oye_draft_demand')
      return saved ? { ...INITIAL_DRAFT, ...JSON.parse(saved) } : INITIAL_DRAFT
    } catch {
      return INITIAL_DRAFT
    }
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [savedFlash, setSavedFlash] = useState(false)

  useEffect(() => {
    localStorage.setItem('oye_draft_demand', JSON.stringify(draft))
  }, [draft])

  function handleChange(field, value) {
    setDraft(prev => ({ ...prev, [field]: value }))
    if (errors[field]) {
      setErrors(prev => { const next = { ...prev }; delete next[field]; return next })
    }
  }

  function handleNext() {
    if (step < 6) {
      const stepErrors = validateStep(step, draft)
      if (Object.keys(stepErrors).length > 0) {
        setErrors(stepErrors)
        return
      }
      setErrors({})
      setStep(s => s + 1)
      window.scrollTo(0, 0)
    } else if (step === 6) {
      setStep(7)
      window.scrollTo(0, 0)
    }
  }

  function handleBack() {
    if (step > 0) {
      setStep(s => s - 1)
      setErrors({})
      window.scrollTo(0, 0)
    }
  }

  function handleSaveDraft() {
    localStorage.setItem('oye_draft_demand', JSON.stringify(draft))
    setSavedFlash(true)
    setTimeout(() => setSavedFlash(false), 2000)
  }

  function handleGoToStep(targetStep) {
    setStep(targetStep)
    setErrors({})
    window.scrollTo(0, 0)
  }

  function handleSubmit() {
    const missingFields = getMissingRequiredFields(draft)
    if (missingFields.length > 0) return

    setIsSubmitting(true)
    const demandId = `dem-${Date.now()}`
    const demandData = {
      ...draft,
      id: demandId,
      status: 'enviada',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    }

    try {
      const existing = JSON.parse(localStorage.getItem('oye_demands') || '[]')
      existing.push(demandData)
      localStorage.setItem('oye_demands', JSON.stringify(existing))
      localStorage.removeItem('oye_draft_demand')
    } catch {
      // continue
    }

    navigate(`/diagnostico/empresa/${demandId}/enviado`)
  }

  const stepContent = () => {
    switch (step) {
      case 0: return <Step0 draft={draft} onChange={handleChange} errors={errors} />
      case 1: return <Step1 draft={draft} onChange={handleChange} errors={errors} />
      case 2: return <Step2 draft={draft} onChange={handleChange} errors={errors} />
      case 3: return <Step3 draft={draft} onChange={handleChange} errors={errors} />
      case 4: return <Step4 draft={draft} onChange={handleChange} />
      case 5: return <Step5 draft={draft} onChange={handleChange} />
      case 6: return <Step6 draft={draft} onGoToStep={handleGoToStep} />
      case 7: return <Step7 draft={draft} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      default: return null
    }
  }

  return (
    <div className="wizard-container">
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <Link to="/diagnostico/empresa" style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
          ← Voltar ao início
        </Link>
      </div>

      <ProgressDots step={step} />
      <StepHeader step={step} />

      {savedFlash && (
        <div className="alert alert-info" style={{ marginBottom: 'var(--space-4)' }}>
          Rascunho salvo com sucesso.
        </div>
      )}

      <div>{stepContent()}</div>

      <div className="wizard-nav">
        <div className="wizard-nav-left">
          {step > 0 && (
            <button className="btn btn-ghost" onClick={handleBack}>
              ← Voltar
            </button>
          )}
          <button className="wizard-save-link" onClick={handleSaveDraft}>
            Salvar rascunho
          </button>
        </div>
        <div className="wizard-nav-right">
          {step < 7 && (
            <button className="btn btn-primary" onClick={handleNext}>
              Continuar →
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
