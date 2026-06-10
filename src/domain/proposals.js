/**
 * @typedef {Object} Proposal
 * @property {string} id
 * @property {string} demandId
 * @property {string} providerId
 * @property {string} routeStepId
 * @property {string} status - See PROPOSAL_STATUS
 * @property {string} title
 * @property {string} description
 * @property {number} totalValue
 * @property {string} currency
 * @property {string} paymentModel - 'fixo' | 'hora' | 'sucesso'
 * @property {string} duration
 * @property {string} deliverables
 * @property {string} createdAt - ISO date string
 * @property {string} updatedAt - ISO date string
 */

export const PROPOSAL_STATUS = {
  RASCUNHO: 'rascunho',
  ENVIADA: 'enviada',
  EM_NEGOCIACAO: 'em_negociacao',
  ACEITA: 'aceita',
  RECUSADA: 'recusada',
  CANCELADA: 'cancelada',
  EXPIRADA: 'expirada',
}

export const PROPOSAL_STATUS_LABELS = {
  [PROPOSAL_STATUS.RASCUNHO]: 'Rascunho',
  [PROPOSAL_STATUS.ENVIADA]: 'Enviada',
  [PROPOSAL_STATUS.EM_NEGOCIACAO]: 'Em negociação',
  [PROPOSAL_STATUS.ACEITA]: 'Aceita',
  [PROPOSAL_STATUS.RECUSADA]: 'Recusada',
  [PROPOSAL_STATUS.CANCELADA]: 'Cancelada',
  [PROPOSAL_STATUS.EXPIRADA]: 'Expirada',
}

export const PAYMENT_MODEL = {
  FIXO: 'fixo',
  HORA: 'hora',
  SUCESSO: 'sucesso',
}

export const PAYMENT_MODEL_LABELS = {
  [PAYMENT_MODEL.FIXO]: 'Valor fixo',
  [PAYMENT_MODEL.HORA]: 'Por hora',
  [PAYMENT_MODEL.SUCESSO]: 'Por sucesso',
}

export function getStatusLabel(status) {
  return PROPOSAL_STATUS_LABELS[status] || status
}

export function getPaymentModelLabel(model) {
  return PAYMENT_MODEL_LABELS[model] || model
}

export function isAccepted(proposal) {
  return proposal?.status === PROPOSAL_STATUS.ACEITA
}

export function canAccept(proposal) {
  return [PROPOSAL_STATUS.ENVIADA, PROPOSAL_STATUS.EM_NEGOCIACAO].includes(proposal?.status)
}

export function formatValue(value, currency = 'BRL') {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
    minimumFractionDigits: 0,
  }).format(value)
}
