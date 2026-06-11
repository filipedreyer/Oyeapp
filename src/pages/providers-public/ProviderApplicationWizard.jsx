import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const TOTAL_STEPS = 8

const STEP_TITLES = [
  'Identificação',
  'Áreas de atuação',
  'Tipos de problema',
  'Cases e evidências',
  'Referências',
  'Disponibilidade e modelo',
  'Revisão',
  'Envio',
]

const AREAS_OPTIONS = [
  'Estratégia e crescimento',
  'Operações e processos',
  'Finanças e controle',
  'Tecnologia e sistemas',
  'Pessoas e cultura',
  'Marketing e vendas',
  'Jurídico e compliance',
  'Gestão de projetos',
  'Supply chain',
  'ESG e sustentabilidade',
]

const SETORES_OPTIONS = [
  'Varejo',
  'Indústria',
  'Financeiro',
  'Tecnologia',
  'Agronegócio',
  'Saúde',
  'Educação',
  'Serviços',
  'Energia',
  'Imobiliário',
]

const ENTREGAVEL_OPTIONS = [
  'Diagnóstico',
  'Plano estratégico',
  'Implementação',
  'Treinamento',
  'Software/sistema',
  'Relatório',
  'Pesquisa',
  'Outro',
]

const MODELO_OPTIONS = [
  'Projeto fechado',
  'Hora/dia',
  'Mensal recorrente',
  'Success fee',
  'Co-investimento',
]

const INITIAL_DRAFT = {
  // Step 0
  nomeOuEmpresa: '',
  tipo: '',
  site: '',
  email: '',
  telefone: '',
  regiao: '',
  // Step 1
  areasAtuacao: [],
  setoresAtendidos: [],
  // Step 2
  tiposProblema: '',
  tiposEntregavel: [],
  // Step 3
  case1Titulo: '',
  case1Contexto: '',
  case1Resultado: '',
  case2Titulo: '',
  case2Contexto: '',
  case2Resultado: '',
  evidencias: '',
  // Step 4
  referencia1Nome: '',
  referencia1Email: '',
  referencia1Contexto: '',
  referencia2Nome: '',
  referencia2Email: '',
  autoDescricao: '',
  // Step 5
  disponibilidade: '',
  horasSemanais: '',
  faixaPreco: '',
  modeloComercial: [],
}

const TIPO_OPTIONS = [
  { value: 'consultor_independente', label: 'Consultor Independente' },
  { value: 'consultoria_boutique', label: 'Consultoria Boutique' },
  { value: 'fornecedor', label: 'Fornecedor de solução' },
  { value: 'startup', label: 'Startup' },
  { value: 'pesquisador', label: 'Pesquisador / Acadêmico' },
  { value: 'empresa_com_solucao', label: 'Empresa com produto/solução' },
]

const DISPONIBILIDADE_OPTIONS = [
  { value: 'disponivel', label: 'Disponível agora' },
  { value: 'disponivel_30d', label: 'Disponível em 30 dias' },
  { value: 'parcial', label: 'Parcialmente disponível' },
  { value: 'indisponivel', label: 'Indisponível no momento' },
]

const FAIXA_OPTIONS = [
  { value: 'A', label: 'A — Premium', desc: 'R$10k+/semana' },
  { value: 'B', label: 'B — Alto', desc: 'R$5k–10k/semana' },
  { value: 'C', label: 'C — Médio', desc: 'R$2k–5k/semana' },
  { value: 'D', label: 'D — Acessível', desc: 'Até R$2k/semana' },
]

function validateStep(step, draft) {
  const errors = {}
  if (step === 0) {
    if (!draft.nomeOuEmpresa.trim()) errors.nomeOuEmpresa = 'Nome é obrigatório'
    if (!draft.tipo) errors.tipo = 'Selecione o tipo de provedor'
    if (!draft.email.trim()) errors.email = 'Email é obrigatório'
    else if (!/\S+@\S+\.\S+/.test(draft.email)) errors.email = 'Email inválido'
    if (!draft.regiao.trim()) errors.regiao = 'Região é obrigatória'
  }
  if (step === 1) {
    if (!draft.areasAtuacao.length) errors.areasAtuacao = 'Selecione pelo menos uma área'
  }
  if (step === 2) {
    if (!draft.tiposProblema.trim()) errors.tiposProblema = 'Descreva os tipos de problema'
  }
  if (step === 4) {
    if (!draft.autoDescricao.trim()) errors.autoDescricao = 'Este campo é obrigatório'
  }
  if (step === 5) {
    if (!draft.disponibilidade) errors.disponibilidade = 'Selecione a disponibilidade'
    if (!draft.faixaPreco) errors.faixaPreco = 'Selecione a faixa de preço'
  }
  return errors
}

function getMissing(draft) {
  const missing = []
  if (!draft.nomeOuEmpresa.trim()) missing.push('Nome ou empresa')
  if (!draft.tipo) missing.push('Tipo de provedor')
  if (!draft.email.trim()) missing.push('Email')
  if (!draft.regiao.trim()) missing.push('Região')
  if (!draft.areasAtuacao.length) missing.push('Áreas de atuação')
  if (!draft.tiposProblema.trim()) missing.push('Tipos de problema')
  if (!draft.autoDescricao.trim()) missing.push('Autodiscrição')
  if (!draft.disponibilidade) missing.push('Disponibilidade')
  if (!draft.faixaPreco) missing.push('Faixa de preço')
  return missing
}

function ProgressDots({ step }) {
  return (
    <div className="wizard-progress">
      {Array.from({ length: TOTAL_STEPS }, (_, i) => (
        <div key={i} style={{ display: 'flex', alignItems: 'center', flex: i < TOTAL_STEPS - 1 ? 1 : 'none' }}>
          <div className={`wizard-progress-dot ${i === step ? 'active' : i < step ? 'completed' : ''}`}>
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

function FieldGroup({ label, error, optional, hint, children }) {
  return (
    <div className="form-group">
      <label className="form-label">
        {label}
        {optional && <span className="form-label-optional">(opcional)</span>}
      </label>
      {children}
      {hint && <span className="form-hint">{hint}</span>}
      {error && <span className="form-error">{error}</span>}
    </div>
  )
}

function CheckboxGroup({ options, selected, onChange }) {
  function toggle(val) {
    if (selected.includes(val)) onChange(selected.filter(v => v !== val))
    else onChange([...selected, val])
  }
  return (
    <div className="checkbox-group">
      {options.map(opt => (
        <label key={opt} className="checkbox-option">
          <input
            type="checkbox"
            checked={selected.includes(opt)}
            onChange={() => toggle(opt)}
          />
          <span className="checkbox-option-label">{opt}</span>
        </label>
      ))}
    </div>
  )
}

function RadioGroup({ options, selected, onChange }) {
  return (
    <div className="radio-group">
      {options.map(opt => (
        <label key={opt.value} className={`radio-option${selected === opt.value ? ' selected' : ''}`}>
          <input
            type="radio"
            name="radioGroup"
            value={opt.value}
            checked={selected === opt.value}
            onChange={e => onChange(e.target.value)}
          />
          <div>
            <div className="radio-option-label">{opt.label}</div>
            {opt.desc && <div className="radio-option-desc">{opt.desc}</div>}
          </div>
        </label>
      ))}
    </div>
  )
}

// Step 0
function Step0({ draft, onChange, errors }) {
  return (
    <>
      <FieldGroup label="Nome ou empresa" error={errors.nomeOuEmpresa}>
        <input
          className={`form-input${errors.nomeOuEmpresa ? ' is-error' : ''}`}
          value={draft.nomeOuEmpresa}
          onChange={e => onChange('nomeOuEmpresa', e.target.value)}
          placeholder="Seu nome completo ou nome da empresa"
        />
      </FieldGroup>
      <FieldGroup label="Tipo de provedor" error={errors.tipo}>
        <div className="radio-group">
          {TIPO_OPTIONS.map(opt => (
            <label key={opt.value} className={`radio-option${draft.tipo === opt.value ? ' selected' : ''}`}>
              <input
                type="radio"
                name="tipo"
                value={opt.value}
                checked={draft.tipo === opt.value}
                onChange={e => onChange('tipo', e.target.value)}
              />
              <div className="radio-option-label">{opt.label}</div>
            </label>
          ))}
        </div>
        {errors.tipo && <span className="form-error">{errors.tipo}</span>}
      </FieldGroup>
      <FieldGroup label="Site ou LinkedIn" optional>
        <input
          type="url"
          className="form-input"
          value={draft.site}
          onChange={e => onChange('site', e.target.value)}
          placeholder="https://"
        />
      </FieldGroup>
      <FieldGroup label="Email de contato" error={errors.email}>
        <input
          type="email"
          className={`form-input${errors.email ? ' is-error' : ''}`}
          value={draft.email}
          onChange={e => onChange('email', e.target.value)}
          placeholder="seu@email.com"
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
      <FieldGroup label="Região de atuação" error={errors.regiao}>
        <input
          className={`form-input${errors.regiao ? ' is-error' : ''}`}
          value={draft.regiao}
          onChange={e => onChange('regiao', e.target.value)}
          placeholder="Ex.: São Paulo, SP — ou nacional, internacional"
        />
      </FieldGroup>
    </>
  )
}

// Step 1
function Step1({ draft, onChange, errors }) {
  return (
    <>
      <FieldGroup label="Áreas de atuação" error={errors.areasAtuacao} hint="Selecione pelo menos uma">
        <CheckboxGroup
          options={AREAS_OPTIONS}
          selected={draft.areasAtuacao}
          onChange={val => onChange('areasAtuacao', val)}
        />
      </FieldGroup>
      <FieldGroup label="Setores atendidos" optional hint="Setores em que você tem experiência relevante">
        <CheckboxGroup
          options={SETORES_OPTIONS}
          selected={draft.setoresAtendidos}
          onChange={val => onChange('setoresAtendidos', val)}
        />
      </FieldGroup>
    </>
  )
}

// Step 2
function Step2({ draft, onChange, errors }) {
  return (
    <>
      <FieldGroup label="Que tipos de problema você resolve?" error={errors.tiposProblema} hint="Descreva com exemplos específicos">
        <textarea
          className={`form-textarea${errors.tiposProblema ? ' is-error' : ''}`}
          value={draft.tiposProblema}
          onChange={e => onChange('tiposProblema', e.target.value)}
          placeholder="Ex.: Empresas que cresceram rapidamente e perderam controle financeiro. Ajudo a estruturar a controladoria, implantar FP&A e dar visibilidade ao CEO..."
          rows={6}
        />
      </FieldGroup>
      <FieldGroup label="Tipos de entregável" optional>
        <CheckboxGroup
          options={ENTREGAVEL_OPTIONS}
          selected={draft.tiposEntregavel}
          onChange={val => onChange('tiposEntregavel', val)}
        />
      </FieldGroup>
    </>
  )
}

// Step 3
function Step3({ draft, onChange }) {
  return (
    <>
      <div style={{ marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-6)', borderBottom: 'var(--border)' }}>
        <p className="section-label" style={{ marginBottom: 'var(--space-5)' }}>Case 1</p>
        <FieldGroup label="Título do case" optional>
          <input
            className="form-input"
            value={draft.case1Titulo}
            onChange={e => onChange('case1Titulo', e.target.value)}
            placeholder="Título descritivo do projeto"
          />
        </FieldGroup>
        <FieldGroup label="Contexto e desafio" optional>
          <textarea
            className="form-textarea"
            value={draft.case1Contexto}
            onChange={e => onChange('case1Contexto', e.target.value)}
            placeholder="Qual era a situação da empresa? Qual era o desafio?"
            rows={3}
          />
        </FieldGroup>
        <FieldGroup label="Resultado obtido" optional>
          <textarea
            className="form-textarea"
            value={draft.case1Resultado}
            onChange={e => onChange('case1Resultado', e.target.value)}
            placeholder="O que foi alcançado? Métricas, impactos quantificáveis"
            rows={3}
          />
        </FieldGroup>
      </div>

      <div style={{ marginBottom: 'var(--space-6)' }}>
        <p className="section-label" style={{ marginBottom: 'var(--space-5)' }}>Case 2 (opcional)</p>
        <FieldGroup label="Título do case 2" optional>
          <input
            className="form-input"
            value={draft.case2Titulo}
            onChange={e => onChange('case2Titulo', e.target.value)}
            placeholder="Título descritivo do projeto"
          />
        </FieldGroup>
        <FieldGroup label="Contexto" optional>
          <textarea
            className="form-textarea"
            value={draft.case2Contexto}
            onChange={e => onChange('case2Contexto', e.target.value)}
            placeholder="Contexto do segundo case"
            rows={3}
          />
        </FieldGroup>
        <FieldGroup label="Resultado" optional>
          <textarea
            className="form-textarea"
            value={draft.case2Resultado}
            onChange={e => onChange('case2Resultado', e.target.value)}
            placeholder="Resultado do segundo case"
            rows={3}
          />
        </FieldGroup>
      </div>

      <FieldGroup label="Outras evidências, artigos, publicações, prêmios" optional>
        <textarea
          className="form-textarea"
          value={draft.evidencias}
          onChange={e => onChange('evidencias', e.target.value)}
          placeholder="Links para artigos, certificações, prêmios, publicações relevantes"
          rows={3}
        />
      </FieldGroup>
    </>
  )
}

// Step 4
function Step4({ draft, onChange, errors }) {
  return (
    <>
      <div style={{ marginBottom: 'var(--space-6)', paddingBottom: 'var(--space-6)', borderBottom: 'var(--border)' }}>
        <p className="section-label" style={{ marginBottom: 'var(--space-5)' }}>Referência 1</p>
        <FieldGroup label="Nome da referência" optional>
          <input
            className="form-input"
            value={draft.referencia1Nome}
            onChange={e => onChange('referencia1Nome', e.target.value)}
            placeholder="Nome completo"
          />
        </FieldGroup>
        <FieldGroup label="Email" optional hint="Para contato posterior, se necessário">
          <input
            type="email"
            className="form-input"
            value={draft.referencia1Email}
            onChange={e => onChange('referencia1Email', e.target.value)}
            placeholder="email@empresa.com"
          />
        </FieldGroup>
        <FieldGroup label="Contexto do trabalho" optional>
          <input
            className="form-input"
            value={draft.referencia1Contexto}
            onChange={e => onChange('referencia1Contexto', e.target.value)}
            placeholder="Ex.: CEO da empresa X, projeto de reestruturação em 2023"
          />
        </FieldGroup>
      </div>

      <div style={{ marginBottom: 'var(--space-8)' }}>
        <p className="section-label" style={{ marginBottom: 'var(--space-5)' }}>Referência 2 (opcional)</p>
        <FieldGroup label="Nome" optional>
          <input
            className="form-input"
            value={draft.referencia2Nome}
            onChange={e => onChange('referencia2Nome', e.target.value)}
            placeholder="Nome completo"
          />
        </FieldGroup>
        <FieldGroup label="Email" optional>
          <input
            type="email"
            className="form-input"
            value={draft.referencia2Email}
            onChange={e => onChange('referencia2Email', e.target.value)}
            placeholder="email@empresa.com"
          />
        </FieldGroup>
      </div>

      <FieldGroup label="Em suas palavras: o que te diferencia? Por que clientes escolhem você?" error={errors.autoDescricao}>
        <textarea
          className={`form-textarea${errors.autoDescricao ? ' is-error' : ''}`}
          value={draft.autoDescricao}
          onChange={e => onChange('autoDescricao', e.target.value)}
          placeholder="Descreva com autenticidade o que te diferencia dos demais consultores na sua área"
          rows={5}
        />
      </FieldGroup>
    </>
  )
}

// Step 5
function Step5({ draft, onChange, errors }) {
  return (
    <>
      <FieldGroup label="Disponibilidade atual" error={errors.disponibilidade}>
        <RadioGroup
          options={DISPONIBILIDADE_OPTIONS}
          selected={draft.disponibilidade}
          onChange={val => onChange('disponibilidade', val)}
        />
      </FieldGroup>
      <FieldGroup label="Horas semanais dedicáveis" optional>
        <select
          className="form-select"
          value={draft.horasSemanais}
          onChange={e => onChange('horasSemanais', e.target.value)}
        >
          <option value="">Selecione (opcional)</option>
          <option value="menos_8h">Menos de 8h</option>
          <option value="8_20h">8–20h</option>
          <option value="20_40h">20–40h</option>
          <option value="40h">40h+ (integral)</option>
        </select>
      </FieldGroup>
      <FieldGroup label="Categoria de preço" error={errors.faixaPreco}>
        <div className="radio-group">
          {FAIXA_OPTIONS.map(opt => (
            <label key={opt.value} className={`radio-option${draft.faixaPreco === opt.value ? ' selected' : ''}`}>
              <input
                type="radio"
                name="faixaPreco"
                value={opt.value}
                checked={draft.faixaPreco === opt.value}
                onChange={e => onChange('faixaPreco', e.target.value)}
              />
              <div>
                <div className="radio-option-label">{opt.label}</div>
                <div className="radio-option-desc">{opt.desc}</div>
              </div>
            </label>
          ))}
        </div>
        {errors.faixaPreco && <span className="form-error">{errors.faixaPreco}</span>}
      </FieldGroup>
      <FieldGroup label="Modelos comerciais aceitos" optional>
        <CheckboxGroup
          options={MODELO_OPTIONS}
          selected={draft.modeloComercial}
          onChange={val => onChange('modeloComercial', val)}
        />
      </FieldGroup>
    </>
  )
}

// Step 6 — Review
function Step6({ draft, onGoToStep }) {
  const missing = getMissing(draft)

  const sections = [
    {
      title: 'Identificação',
      step: 0,
      fields: [
        { label: 'Nome ou empresa', value: draft.nomeOuEmpresa },
        { label: 'Tipo', value: draft.tipo },
        { label: 'Site/LinkedIn', value: draft.site },
        { label: 'Email', value: draft.email },
        { label: 'Telefone', value: draft.telefone },
        { label: 'Região', value: draft.regiao },
      ],
    },
    {
      title: 'Áreas de atuação',
      step: 1,
      fields: [
        { label: 'Áreas', value: draft.areasAtuacao.join(', '), full: true },
        { label: 'Setores', value: draft.setoresAtendidos.join(', '), full: true },
      ],
    },
    {
      title: 'Tipos de problema',
      step: 2,
      fields: [
        { label: 'Tipos de problema', value: draft.tiposProblema, full: true },
        { label: 'Entregáveis', value: draft.tiposEntregavel.join(', '), full: true },
      ],
    },
    {
      title: 'Cases',
      step: 3,
      fields: [
        { label: 'Case 1', value: draft.case1Titulo, full: true },
        { label: 'Case 2', value: draft.case2Titulo, full: true },
      ],
    },
    {
      title: 'Referências e diferencial',
      step: 4,
      fields: [
        { label: 'Referência 1', value: draft.referencia1Nome },
        { label: 'Referência 2', value: draft.referencia2Nome },
        { label: 'Autodiscrição', value: draft.autoDescricao, full: true },
      ],
    },
    {
      title: 'Disponibilidade e modelo',
      step: 5,
      fields: [
        { label: 'Disponibilidade', value: draft.disponibilidade },
        { label: 'Faixa de preço', value: draft.faixaPreco },
        { label: 'Horas semanais', value: draft.horasSemanais },
        { label: 'Modelos comerciais', value: draft.modeloComercial.join(', '), full: true },
      ],
    },
  ]

  return (
    <>
      {missing.length > 0 && (
        <div className="alert alert-info" style={{ marginBottom: 'var(--space-6)' }}>
          <strong>Campos obrigatórios pendentes:</strong>
          <ul style={{ margin: 'var(--space-2) 0 0 var(--space-4)', padding: 0 }}>
            {missing.map(f => (
              <li key={f} style={{ fontSize: 'var(--text-sm)', color: 'var(--attention)' }}>{f}</li>
            ))}
          </ul>
        </div>
      )}

      {sections.map(section => (
        <div key={section.title} className="review-section">
          <div className="review-section-title">
            {section.title}
            <button className="review-section-edit" onClick={() => onGoToStep(section.step)}>Editar</button>
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
  const missing = getMissing(draft)
  return (
    <div className="wizard-submit-section">
      {missing.length > 0 ? (
        <div className="alert alert-info" style={{ textAlign: 'left', marginBottom: 'var(--space-8)' }}>
          <strong>Há campos obrigatórios não preenchidos.</strong> Volte à revisão para completar.
          <ul style={{ margin: 'var(--space-2) 0 0 var(--space-4)', padding: 0 }}>
            {missing.map(f => <li key={f} style={{ color: 'var(--attention)', fontSize: 'var(--text-sm)' }}>{f}</li>)}
          </ul>
        </div>
      ) : (
        <>
          <div className="wizard-submit-icon">✦</div>
          <h2 className="wizard-submit-title">Pronto para enviar?</h2>
          <p className="wizard-submit-desc">
            Sua candidatura será enviada para análise. A equipe Oyê retornará em até 5 dias úteis.
          </p>
          <button
            className="btn btn-primary btn-lg"
            onClick={onSubmit}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Confirmar candidatura'}
          </button>
        </>
      )}
    </div>
  )
}

export default function ProviderApplicationWizard() {
  const navigate = useNavigate()

  const [step, setStep] = useState(0)
  const [draft, setDraft] = useState(() => {
    try {
      const saved = localStorage.getItem('oye_draft_candidatura')
      return saved ? { ...INITIAL_DRAFT, ...JSON.parse(saved) } : INITIAL_DRAFT
    } catch {
      return INITIAL_DRAFT
    }
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [savedFlash, setSavedFlash] = useState(false)

  useEffect(() => {
    localStorage.setItem('oye_draft_candidatura', JSON.stringify(draft))
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
    localStorage.setItem('oye_draft_candidatura', JSON.stringify(draft))
    setSavedFlash(true)
    setTimeout(() => setSavedFlash(false), 2000)
  }

  function handleGoToStep(targetStep) {
    setStep(targetStep)
    setErrors({})
    window.scrollTo(0, 0)
  }

  function handleSubmit() {
    const missing = getMissing(draft)
    if (missing.length > 0) return

    setIsSubmitting(true)
    const candidaturaId = `cand-${Date.now()}`
    const candidaturaData = {
      ...draft,
      id: candidaturaId,
      status: 'em_analise',
      createdAt: new Date().toISOString(),
    }

    try {
      const existing = JSON.parse(localStorage.getItem('oye_candidaturas') || '[]')
      existing.push(candidaturaData)
      localStorage.setItem('oye_candidaturas', JSON.stringify(existing))
      localStorage.setItem('oye_provider_auth', 'true')
      localStorage.setItem('oye_provider_user', JSON.stringify({
        name: draft.nomeOuEmpresa,
        email: draft.email,
        candidaturaId,
      }))
      localStorage.removeItem('oye_draft_candidatura')
    } catch {
      // continue
    }

    navigate(`/para-consultores/candidatura/${candidaturaId}`)
  }

  const stepContent = () => {
    switch (step) {
      case 0: return <Step0 draft={draft} onChange={handleChange} errors={errors} />
      case 1: return <Step1 draft={draft} onChange={handleChange} errors={errors} />
      case 2: return <Step2 draft={draft} onChange={handleChange} errors={errors} />
      case 3: return <Step3 draft={draft} onChange={handleChange} />
      case 4: return <Step4 draft={draft} onChange={handleChange} errors={errors} />
      case 5: return <Step5 draft={draft} onChange={handleChange} errors={errors} />
      case 6: return <Step6 draft={draft} onGoToStep={handleGoToStep} />
      case 7: return <Step7 draft={draft} onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      default: return null
    }
  }

  return (
    <div className="wizard-container">
      <div style={{ marginBottom: 'var(--space-4)' }}>
        <Link to="/para-consultores/candidatura" style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
          ← Sobre o processo
        </Link>
      </div>

      <ProgressDots step={step} />

      <div className="wizard-step-header">
        <p className="eyebrow">Passo {step + 1} de {TOTAL_STEPS}</p>
        <h2 className="wizard-step-title">{STEP_TITLES[step]}</h2>
      </div>

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
