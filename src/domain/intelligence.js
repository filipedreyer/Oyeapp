/**
 * @typedef {Object} IntelligenceReport
 * @property {string} id
 * @property {string} title
 * @property {string} period
 * @property {Cluster[]} clusters
 * @property {Gap[]} gaps
 * @property {Pattern[]} patterns
 * @property {string} generatedAt - ISO date string
 */

/**
 * @typedef {Object} Cluster
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string[]} sectors
 * @property {string[]} problemTypes
 * @property {number} frequency
 * @property {number} averageValue
 */

/**
 * @typedef {Object} Gap
 * @property {string} id
 * @property {string} problemType
 * @property {string} sector
 * @property {string} description
 * @property {'critica'|'alta'|'media'|'baixa'} severity
 * @property {number} demandCount
 */

/**
 * @typedef {Object} Pattern
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} insight
 * @property {string} recommendation
 */

export const GAP_SEVERITY = {
  CRITICA: 'critica',
  ALTA: 'alta',
  MEDIA: 'media',
  BAIXA: 'baixa',
}

export const GAP_SEVERITY_LABELS = {
  [GAP_SEVERITY.CRITICA]: 'Crítica',
  [GAP_SEVERITY.ALTA]: 'Alta',
  [GAP_SEVERITY.MEDIA]: 'Média',
  [GAP_SEVERITY.BAIXA]: 'Baixa',
}

export function getSeverityLabel(severity) {
  return GAP_SEVERITY_LABELS[severity] || severity
}

export function getCriticalGaps(report) {
  return report?.gaps?.filter((g) => g.severity === GAP_SEVERITY.CRITICA) || []
}

export function getTopClusters(report, n = 5) {
  return [...(report?.clusters || [])].sort((a, b) => b.frequency - a.frequency).slice(0, n)
}
