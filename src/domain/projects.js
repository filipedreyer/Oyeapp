/**
 * @typedef {Object} Project
 * @property {string} id
 * @property {string} demandId
 * @property {string} proposalId
 * @property {string} clientId
 * @property {string} providerId
 * @property {string} title
 * @property {string} status - See PROJECT_STATUS
 * @property {string} startDate - ISO date string
 * @property {string} endDate - ISO date string
 * @property {string} actualEndDate - ISO date string
 * @property {Milestone[]} milestones
 * @property {number} totalValue
 * @property {number} paidAmount
 * @property {string} createdAt - ISO date string
 */

/**
 * @typedef {Object} Milestone
 * @property {string} id
 * @property {string} title
 * @property {string} description
 * @property {string} dueDate - ISO date string
 * @property {boolean} completed
 * @property {string} completedAt - ISO date string
 */

export const PROJECT_STATUS = {
  INICIADO: 'iniciado',
  EM_ANDAMENTO: 'em_andamento',
  PAUSADO: 'pausado',
  CONCLUIDO: 'concluido',
  CANCELADO: 'cancelado',
}

export const PROJECT_STATUS_LABELS = {
  [PROJECT_STATUS.INICIADO]: 'Iniciado',
  [PROJECT_STATUS.EM_ANDAMENTO]: 'Em andamento',
  [PROJECT_STATUS.PAUSADO]: 'Pausado',
  [PROJECT_STATUS.CONCLUIDO]: 'Concluído',
  [PROJECT_STATUS.CANCELADO]: 'Cancelado',
}

export function getStatusLabel(status) {
  return PROJECT_STATUS_LABELS[status] || status
}

export function isActive(project) {
  return [PROJECT_STATUS.INICIADO, PROJECT_STATUS.EM_ANDAMENTO].includes(project?.status)
}

export function isComplete(project) {
  return project?.status === PROJECT_STATUS.CONCLUIDO
}

export function getProgress(project) {
  if (!project?.milestones?.length) return 0
  const done = project.milestones.filter((m) => m.completed).length
  return Math.round((done / project.milestones.length) * 100)
}

export function getRemainingValue(project) {
  if (!project) return 0
  return (project.totalValue || 0) - (project.paidAmount || 0)
}
