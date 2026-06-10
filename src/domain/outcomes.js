/**
 * @typedef {Object} Outcome
 * @property {string} id
 * @property {string} projectId
 * @property {string} demandId
 * @property {string} clientId
 * @property {string} providerId
 * @property {string} type - See OUTCOME_TYPE
 * @property {string} summary
 * @property {OutcomeMetric[]} metrics
 * @property {string[]} deliverables
 * @property {number} clientSatisfaction - 1-5
 * @property {number} providerRating - 1-5
 * @property {string} completedAt - ISO date string
 */

/**
 * @typedef {Object} OutcomeMetric
 * @property {string} name
 * @property {string} baseline
 * @property {string} achieved
 * @property {string} unit
 */

export const OUTCOME_TYPE = {
  ENTREGA_PROJETO: 'entrega_projeto',
  RESULTADO_PARCIAL: 'resultado_parcial',
  IMPACTO_NEGOCIO: 'impacto_negocio',
}

export const OUTCOME_TYPE_LABELS = {
  [OUTCOME_TYPE.ENTREGA_PROJETO]: 'Entrega de Projeto',
  [OUTCOME_TYPE.RESULTADO_PARCIAL]: 'Resultado Parcial',
  [OUTCOME_TYPE.IMPACTO_NEGOCIO]: 'Impacto de Negócio',
}

export function getTypeLabel(type) {
  return OUTCOME_TYPE_LABELS[type] || type
}

export function getAverageRating(outcomes) {
  if (!outcomes?.length) return null
  const sum = outcomes.reduce((acc, o) => acc + (o.clientSatisfaction || 0), 0)
  return (sum / outcomes.length).toFixed(1)
}
