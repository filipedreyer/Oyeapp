/**
 * @typedef {Object} Shortlist
 * @property {string} id
 * @property {string} routeStepId
 * @property {string} diagnosticId
 * @property {string} demandId
 * @property {string} status - See SHORTLIST_STATUS
 * @property {ShortlistEntry[]} entries
 * @property {string} createdAt - ISO date string
 * @property {string} sentAt - ISO date string
 */

/**
 * @typedef {Object} ShortlistEntry
 * @property {string} providerId
 * @property {number} fitScore - 0-100
 * @property {string[]} matchReasons
 * @property {string} status - 'invited' | 'viewed' | 'interested' | 'declined'
 */

export const SHORTLIST_STATUS = {
  RASCUNHO: 'rascunho',
  ENVIADA: 'enviada',
  EM_ANALISE: 'em_analise',
  SELECIONADA: 'selecionada',
  ENCERRADA: 'encerrada',
}

export const SHORTLIST_STATUS_LABELS = {
  [SHORTLIST_STATUS.RASCUNHO]: 'Rascunho',
  [SHORTLIST_STATUS.ENVIADA]: 'Enviada',
  [SHORTLIST_STATUS.EM_ANALISE]: 'Em análise',
  [SHORTLIST_STATUS.SELECIONADA]: 'Selecionada',
  [SHORTLIST_STATUS.ENCERRADA]: 'Encerrada',
}

export const ENTRY_STATUS = {
  CONVIDADO: 'convidado',
  VISUALIZADO: 'visualizado',
  INTERESSADO: 'interessado',
  RECUSADO: 'recusado',
}

export function getStatusLabel(status) {
  return SHORTLIST_STATUS_LABELS[status] || status
}

export function getInterestedEntries(shortlist) {
  return shortlist?.entries?.filter((e) => e.status === ENTRY_STATUS.INTERESSADO) || []
}

export function canSend(shortlist) {
  return shortlist?.status === SHORTLIST_STATUS.RASCUNHO && shortlist?.entries?.length >= 2
}
