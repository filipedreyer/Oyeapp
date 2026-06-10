/**
 * @typedef {Object} Provider
 * @property {string} id
 * @property {string} slug
 * @property {string} name
 * @property {string} type - 'individual' | 'boutique' | 'empresa'
 * @property {string[]} sectors
 * @property {string[]} specialties
 * @property {string[]} problemTypes
 * @property {string[]} deliverables
 * @property {Case[]} cases
 * @property {'disponivel'|'parcial'|'indisponivel'} availability
 * @property {'A'|'B'|'C'|'D'} priceCategory
 * @property {string} region
 * @property {string} bio
 * @property {string} homologationStatus
 * @property {string} createdAt - ISO date string
 */

/**
 * @typedef {Object} Case
 * @property {string} title
 * @property {string} context
 * @property {string} outcome
 */

export const PROVIDER_TYPE = {
  INDIVIDUAL: 'individual',
  BOUTIQUE: 'boutique',
  EMPRESA: 'empresa',
}

export const PROVIDER_TYPE_LABELS = {
  [PROVIDER_TYPE.INDIVIDUAL]: 'Consultor Individual',
  [PROVIDER_TYPE.BOUTIQUE]: 'Boutique',
  [PROVIDER_TYPE.EMPRESA]: 'Empresa',
}

export const AVAILABILITY = {
  DISPONIVEL: 'disponivel',
  PARCIAL: 'parcial',
  INDISPONIVEL: 'indisponivel',
}

export const AVAILABILITY_LABELS = {
  [AVAILABILITY.DISPONIVEL]: 'Disponível',
  [AVAILABILITY.PARCIAL]: 'Parcialmente disponível',
  [AVAILABILITY.INDISPONIVEL]: 'Indisponível',
}

export const PRICE_CATEGORY_LABELS = {
  A: 'Premium (R$ 5k+/dia)',
  B: 'Sênior (R$ 2k–5k/dia)',
  C: 'Pleno (R$ 800–2k/dia)',
  D: 'Júnior/Especialista (até R$ 800/dia)',
}

export const HOMOLOGATION_STATUS = {
  PENDENTE: 'pendente',
  EM_ANALISE: 'em_analise',
  APROVADO: 'aprovado',
  REPROVADO: 'reprovado',
  SUSPENSO: 'suspenso',
}

export function getTypeLabel(type) {
  return PROVIDER_TYPE_LABELS[type] || type
}

export function getAvailabilityLabel(availability) {
  return AVAILABILITY_LABELS[availability] || availability
}

export function getPriceCategoryLabel(category) {
  return PRICE_CATEGORY_LABELS[category] || category
}

export function isAvailable(provider) {
  return provider?.availability === AVAILABILITY.DISPONIVEL
}

export function isHomologated(provider) {
  return provider?.homologationStatus === HOMOLOGATION_STATUS.APROVADO
}

export function matchesProblemTypes(provider, requiredTypes) {
  if (!provider?.problemTypes || !requiredTypes?.length) return false
  return requiredTypes.some((t) => provider.problemTypes.includes(t))
}
