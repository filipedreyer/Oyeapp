/**
 * @typedef {Object} Demand
 * @property {string} id
 * @property {string} companyId
 * @property {string} title
 * @property {string} description
 * @property {string} sector
 * @property {string[]} problemTypes
 * @property {string} budget
 * @property {string} timeline
 * @property {string} status - See DEMAND_STATUS
 * @property {string} createdAt - ISO date string
 * @property {string} updatedAt - ISO date string
 */

export const DEMAND_STATUS = {
  RASCUNHO: 'rascunho',
  ENVIADA: 'enviada',
  AGUARDANDO_COMPLEMENTO: 'aguardando_complemento',
  QUALIFICADA: 'qualificada',
  EM_DIAGNOSTICO: 'em_diagnostico',
  DIAGNOSTICADA: 'diagnosticada',
  EM_ROTEAMENTO: 'em_roteamento',
  EM_SELECAO: 'em_selecao',
  EM_CONTRATACAO: 'em_contratacao',
  EM_EXECUCAO: 'em_execucao',
  ENCERRADA: 'encerrada',
  CANCELADA: 'cancelada',
  ARQUIVADA: 'arquivada',
}

export const STATUS_LABELS = {
  [DEMAND_STATUS.RASCUNHO]: 'Rascunho',
  [DEMAND_STATUS.ENVIADA]: 'Enviada',
  [DEMAND_STATUS.AGUARDANDO_COMPLEMENTO]: 'Aguardando complemento',
  [DEMAND_STATUS.QUALIFICADA]: 'Qualificada',
  [DEMAND_STATUS.EM_DIAGNOSTICO]: 'Em diagnóstico',
  [DEMAND_STATUS.DIAGNOSTICADA]: 'Diagnosticada',
  [DEMAND_STATUS.EM_ROTEAMENTO]: 'Em roteamento',
  [DEMAND_STATUS.EM_SELECAO]: 'Em seleção',
  [DEMAND_STATUS.EM_CONTRATACAO]: 'Em contratação',
  [DEMAND_STATUS.EM_EXECUCAO]: 'Em execução',
  [DEMAND_STATUS.ENCERRADA]: 'Encerrada',
  [DEMAND_STATUS.CANCELADA]: 'Cancelada',
  [DEMAND_STATUS.ARQUIVADA]: 'Arquivada',
}

export function getStatusLabel(status) {
  return STATUS_LABELS[status] || status
}

export function canSubmit(demand) {
  return (
    demand &&
    demand.title &&
    demand.title.trim().length >= 10 &&
    demand.description &&
    demand.description.trim().length >= 30 &&
    demand.sector &&
    demand.problemTypes &&
    demand.problemTypes.length > 0
  )
}

export function isActive(demand) {
  const activeStatuses = [
    DEMAND_STATUS.QUALIFICADA,
    DEMAND_STATUS.EM_DIAGNOSTICO,
    DEMAND_STATUS.DIAGNOSTICADA,
    DEMAND_STATUS.EM_ROTEAMENTO,
    DEMAND_STATUS.EM_SELECAO,
    DEMAND_STATUS.EM_CONTRATACAO,
    DEMAND_STATUS.EM_EXECUCAO,
  ]
  return activeStatuses.includes(demand?.status)
}

export function isClosed(demand) {
  return [DEMAND_STATUS.ENCERRADA, DEMAND_STATUS.CANCELADA, DEMAND_STATUS.ARQUIVADA].includes(
    demand?.status
  )
}

export function canAdvance(demand) {
  return demand && !isClosed(demand) && demand.status !== DEMAND_STATUS.EM_EXECUCAO
}
