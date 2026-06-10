export const mockIntelligence = {
  id: 'intel-q1-2025',
  title: 'Relatório de Inteligência — Q1 2025',
  period: '2025-01-01/2025-03-31',
  generatedAt: '2025-04-05T08:00:00Z',

  clusters: [
    {
      id: 'cluster-001',
      name: 'Finanças & Captação',
      description:
        'Empresas em crescimento acelerado buscando estruturação financeira e acesso a capital. Perfil: tech e healthtech de R$ 5M–50M em receita.',
      sectors: ['Tecnologia', 'Saúde'],
      problemTypes: ['Finanças e controle', 'Estratégia e crescimento'],
      frequency: 28,
      averageValue: 105000,
    },
    {
      id: 'cluster-002',
      name: 'Eficiência Operacional Industrial',
      description:
        'Indústrias tradicionais buscando modernização e redução de custos. Lean, automação e supply chain.',
      sectors: ['Indústria', 'Agronegócio', 'Logística'],
      problemTypes: ['Operações e processos'],
      frequency: 22,
      averageValue: 185000,
    },
    {
      id: 'cluster-003',
      name: 'Transformação Digital de Vendas',
      description:
        'Empresas com força de vendas tradicional buscando digitalização, CRM e uso de dados.',
      sectors: ['Varejo', 'Financeiro'],
      problemTypes: ['Marketing e vendas', 'Tecnologia e sistemas'],
      frequency: 19,
      averageValue: 78000,
    },
    {
      id: 'cluster-004',
      name: 'Cultura e Pessoas em Escala',
      description:
        'Startups e scale-ups com crescimento rápido de headcount buscando estruturação de RH e cultura.',
      sectors: ['Tecnologia', 'Saúde', 'Educação'],
      problemTypes: ['Pessoas e cultura'],
      frequency: 15,
      averageValue: 92000,
    },
    {
      id: 'cluster-005',
      name: 'Compliance e ESG',
      description:
        'Empresas pressionadas por clientes, investidores ou regulação a estruturar agenda ESG e compliance.',
      sectors: ['Agronegócio', 'Energia', 'Financeiro'],
      problemTypes: ['Jurídico e compliance', 'Estratégia e crescimento'],
      frequency: 11,
      averageValue: 120000,
    },
  ],

  gaps: [
    {
      id: 'gap-001',
      problemType: 'Finanças e controle',
      sector: 'Agronegócio',
      description:
        'Alta demanda por CFO interim e estruturação financeira no agronegócio, mas poucos provedores com conhecimento setorial específico.',
      severity: 'critica',
      demandCount: 8,
    },
    {
      id: 'gap-002',
      problemType: 'Tecnologia e sistemas',
      sector: 'Saúde',
      description:
        'Demanda crescente por transformação digital em clínicas e hospitais de médio porte, com escassez de provedores especializados em healthtech.',
      severity: 'alta',
      demandCount: 6,
    },
    {
      id: 'gap-003',
      problemType: 'Jurídico e compliance',
      sector: 'Tecnologia',
      description:
        'Startups com produto digital precisam de orientação em LGPD e compliance, mas poucos consultores atendem esse nicho a custos compatíveis.',
      severity: 'alta',
      demandCount: 5,
    },
    {
      id: 'gap-004',
      problemType: 'Gestão de projetos',
      sector: 'Construção civil',
      description:
        'Construtoras buscando PMO e metodologias ágeis, segmento com pouca cobertura na base de provedores.',
      severity: 'media',
      demandCount: 4,
    },
  ],

  patterns: [
    {
      id: 'pat-001',
      title: 'Demandas combinadas financeiro + estratégia crescem 40%',
      description:
        'No Q1 2025, cresceu significativamente a demanda por projetos que combinam diagnóstico financeiro com planejamento estratégico.',
      insight:
        'Empresas em busca de capital estão buscando preparação holística, não apenas modelagem financeira.',
      recommendation:
        'Priorizar provedores com capacidade de atuar nos dois domínios ou formar parcerias entre provedores complementares.',
    },
    {
      id: 'pat-002',
      title: 'Ticket médio em operações industriais supera R$ 180k',
      description:
        'Projetos de eficiência operacional em indústrias têm ticket médio 73% acima da média geral da plataforma.',
      insight:
        'Clientes industriais têm maior maturidade e disposição a pagar por resultados mensuráveis.',
      recommendation:
        'Fortalecer base de provedores com experiência industrial e desenvolver pacotes de medição de ROI.',
    },
    {
      id: 'pat-003',
      title: 'Ciclo de vendas 2,3x mais rápido quando diagnóstico é pré-aprovado',
      description:
        'Demandas que chegam com diagnóstico Oyê já aprovado pelo cliente têm ciclo de fechamento de proposta 57% menor.',
      insight:
        'O diagnóstico funciona como qualificador de demanda e âncora de confiança para o provedor.',
      recommendation:
        'Investir em qualidade e velocidade do diagnóstico como alavanca principal de conversão.',
    },
  ],
}
