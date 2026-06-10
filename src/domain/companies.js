/**
 * @typedef {Object} Company
 * @property {string} id
 * @property {string} name
 * @property {string} cnpj
 * @property {string} sector
 * @property {string} size - 'micro' | 'pequena' | 'media' | 'grande'
 * @property {string} region
 * @property {string} contactName
 * @property {string} contactEmail
 * @property {string} contactPhone
 * @property {string} createdAt - ISO date string
 */

export const COMPANY_SIZE = {
  MICRO: 'micro',
  PEQUENA: 'pequena',
  MEDIA: 'media',
  GRANDE: 'grande',
}

export const SIZE_LABELS = {
  [COMPANY_SIZE.MICRO]: 'Microempresa',
  [COMPANY_SIZE.PEQUENA]: 'Pequena empresa',
  [COMPANY_SIZE.MEDIA]: 'Média empresa',
  [COMPANY_SIZE.GRANDE]: 'Grande empresa',
}

export const SECTORS = [
  'Agronegócio',
  'Construção civil',
  'Educação',
  'Energia',
  'Financeiro',
  'Indústria',
  'Logística',
  'Saúde',
  'Tecnologia',
  'Varejo',
  'Outros',
]

export function getSizeLabel(size) {
  return SIZE_LABELS[size] || size
}

export function isProfileComplete(company) {
  return (
    company &&
    company.name &&
    company.sector &&
    company.size &&
    company.region &&
    company.contactName &&
    company.contactEmail
  )
}
