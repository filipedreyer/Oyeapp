/**
 * @typedef {Object} Route
 * @property {string} id
 * @property {string} diagnosticId
 * @property {string} demandId
 * @property {string} status - See ROUTE_STATUS
 * @property {RouteStep[]} steps
 * @property {string} createdAt - ISO date string
 * @property {string} updatedAt - ISO date string
 */

/**
 * @typedef {Object} RouteStep
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} problemType
 * @property {string[]} requiredDeliverables
 * @property {string} estimatedDuration
 * @property {number} order
 */

export const ROUTE_STATUS = {
  RASCUNHO: 'rascunho',
  PROPOSTO: 'proposto',
  APROVADO: 'aprovado',
  EM_EXECUCAO: 'em_execucao',
  CONCLUIDO: 'concluido',
  CANCELADO: 'cancelado',
}

export const ROUTE_STATUS_LABELS = {
  [ROUTE_STATUS.RASCUNHO]: 'Rascunho',
  [ROUTE_STATUS.PROPOSTO]: 'Proposto',
  [ROUTE_STATUS.APROVADO]: 'Aprovado',
  [ROUTE_STATUS.EM_EXECUCAO]: 'Em execução',
  [ROUTE_STATUS.CONCLUIDO]: 'Concluído',
  [ROUTE_STATUS.CANCELADO]: 'Cancelado',
}

export function getStatusLabel(status) {
  return ROUTE_STATUS_LABELS[status] || status
}

export function isApproved(route) {
  return route?.status === ROUTE_STATUS.APROVADO
}

export function canApprove(route) {
  return route?.status === ROUTE_STATUS.PROPOSTO
}

export function getTotalSteps(route) {
  return route?.steps?.length || 0
}
