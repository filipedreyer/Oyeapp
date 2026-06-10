/**
 * @typedef {Object} Diagnostic
 * @property {string} id
 * @property {string} demandId
 * @property {string} status - See DIAGNOSTIC_STATUS
 * @property {string} analystId
 * @property {DiagnosticSection[]} sections
 * @property {string} summary
 * @property {string[]} recommendedProblemTypes
 * @property {string[]} recommendedDeliverables
 * @property {string} createdAt - ISO date string
 * @property {string} completedAt - ISO date string
 */

/**
 * @typedef {Object} DiagnosticSection
 * @property {string} id
 * @property {string} title
 * @property {string} content
 * @property {string[]} findings
 */

export const DIAGNOSTIC_STATUS = {
  PENDENTE: 'pendente',
  EM_ANALISE: 'em_analise',
  AGUARDANDO_REVISAO: 'aguardando_revisao',
  APROVADO: 'aprovado',
  PUBLICADO: 'publicado',
}

export const DIAGNOSTIC_STATUS_LABELS = {
  [DIAGNOSTIC_STATUS.PENDENTE]: 'Pendente',
  [DIAGNOSTIC_STATUS.EM_ANALISE]: 'Em análise',
  [DIAGNOSTIC_STATUS.AGUARDANDO_REVISAO]: 'Aguardando revisão',
  [DIAGNOSTIC_STATUS.APROVADO]: 'Aprovado',
  [DIAGNOSTIC_STATUS.PUBLICADO]: 'Publicado',
}

export const PROBLEM_TYPES = [
  'Estratégia e crescimento',
  'Operações e processos',
  'Finanças e controle',
  'Tecnologia e sistemas',
  'Pessoas e cultura',
  'Marketing e vendas',
  'Jurídico e compliance',
  'Gestão de projetos',
]

export function getStatusLabel(status) {
  return DIAGNOSTIC_STATUS_LABELS[status] || status
}

export function isComplete(diagnostic) {
  return diagnostic?.status === DIAGNOSTIC_STATUS.PUBLICADO
}

export function canPublish(diagnostic) {
  return diagnostic?.status === DIAGNOSTIC_STATUS.APROVADO
}

export function canApprove(diagnostic) {
  return diagnostic?.status === DIAGNOSTIC_STATUS.AGUARDANDO_REVISAO
}
