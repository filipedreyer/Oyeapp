import { createBrowserRouter } from 'react-router-dom'

// Layouts
import PublicLayout from './layouts/PublicLayout.jsx'
import ClientLayout from './layouts/ClientLayout.jsx'
import ProviderLayout from './layouts/ProviderLayout.jsx'
import OpsLayout from './layouts/OpsLayout.jsx'

// Guards
import RequireClient from './guards/RequireClient.jsx'
import RequireProvider from './guards/RequireProvider.jsx'
import RequireOps from './guards/RequireOps.jsx'

// Public pages
import HomePage from '../pages/public/HomePage.jsx'
import AboutPage from '../pages/public/AboutPage.jsx'
import MethodologyPage from '../pages/public/MethodologyPage.jsx'
import ContactPage from '../pages/public/ContactPage.jsx'
import TermsPage from '../pages/public/TermsPage.jsx'
import PrivacyPage from '../pages/public/PrivacyPage.jsx'

// Diagnosis pages
import DiagnosisIntroPage from '../pages/diagnosis/DiagnosisIntroPage.jsx'
import CompanyDiagnosisLanding from '../pages/diagnosis/CompanyDiagnosisLanding.jsx'
import CompanyDiagnosisWizard from '../pages/diagnosis/CompanyDiagnosisWizard.jsx'
import CompanyDiagnosisStatus from '../pages/diagnosis/CompanyDiagnosisStatus.jsx'
import CompanyDiagnosisReview from '../pages/diagnosis/CompanyDiagnosisReview.jsx'
import CompanyDiagnosisSubmitted from '../pages/diagnosis/CompanyDiagnosisSubmitted.jsx'

// Consultants pages
import ConsultantsDirectoryPage from '../pages/consultants/ConsultantsDirectoryPage.jsx'
import ConsultantProfilePage from '../pages/consultants/ConsultantProfilePage.jsx'
import ConsultantFitPage from '../pages/consultants/ConsultantFitPage.jsx'

// Providers-public pages
import ProvidersLandingPage from '../pages/providers-public/ProvidersLandingPage.jsx'
import ProviderApplicationIntroPage from '../pages/providers-public/ProviderApplicationIntroPage.jsx'
import ProviderApplicationWizard from '../pages/providers-public/ProviderApplicationWizard.jsx'
import ProviderApplicationStatus from '../pages/providers-public/ProviderApplicationStatus.jsx'

// Client pages
import ClientLoginPage from '../pages/client/ClientLoginPage.jsx'
import ClientSignupPage from '../pages/client/ClientSignupPage.jsx'
import ClientDashboardPage from '../pages/client/ClientDashboardPage.jsx'
import ClientDemandsPage from '../pages/client/ClientDemandsPage.jsx'
import ClientDemandDetailPage from '../pages/client/ClientDemandDetailPage.jsx'
import ClientDiagnosticOutputPage from '../pages/client/ClientDiagnosticOutputPage.jsx'
import ClientRoutePage from '../pages/client/ClientRoutePage.jsx'
import ClientProposalPage from '../pages/client/ClientProposalPage.jsx'
import ClientProjectPage from '../pages/client/ClientProjectPage.jsx'

// Provider pages
import ProviderDashboardPage from '../pages/provider/ProviderDashboardPage.jsx'
import ProviderProfilePage from '../pages/provider/ProviderProfilePage.jsx'
import ProviderHomologationPage from '../pages/provider/ProviderHomologationPage.jsx'
import ProviderOpportunitiesPage from '../pages/provider/ProviderOpportunitiesPage.jsx'
import ProviderOpportunityDetailPage from '../pages/provider/ProviderOpportunityDetailPage.jsx'
import ProviderProposalsPage from '../pages/provider/ProviderProposalsPage.jsx'
import ProviderProjectsPage from '../pages/provider/ProviderProjectsPage.jsx'

// Ops pages
import OpsLoginPage from '../pages/ops/OpsLoginPage.jsx'
import OpsDashboardPage from '../pages/ops/OpsDashboardPage.jsx'
import OpsLeadsPage from '../pages/ops/OpsLeadsPage.jsx'
import OpsDemandsPage from '../pages/ops/OpsDemandsPage.jsx'
import OpsDemandDetailPage from '../pages/ops/OpsDemandDetailPage.jsx'
import OpsDiagnosticsPage from '../pages/ops/OpsDiagnosticsPage.jsx'
import OpsDiagnosticWorkbenchPage from '../pages/ops/OpsDiagnosticWorkbenchPage.jsx'
import OpsRoutingPage from '../pages/ops/OpsRoutingPage.jsx'
import OpsShortlistsPage from '../pages/ops/OpsShortlistsPage.jsx'
import OpsShortlistDetailPage from '../pages/ops/OpsShortlistDetailPage.jsx'
import OpsProvidersPage from '../pages/ops/OpsProvidersPage.jsx'
import OpsProviderDetailPage from '../pages/ops/OpsProviderDetailPage.jsx'
import OpsProposalsPage from '../pages/ops/OpsProposalsPage.jsx'
import OpsProjectsPage from '../pages/ops/OpsProjectsPage.jsx'
import OpsProjectDetailPage from '../pages/ops/OpsProjectDetailPage.jsx'
import OpsClosurePage from '../pages/ops/OpsClosurePage.jsx'
import OpsIntelligencePage from '../pages/ops/OpsIntelligencePage.jsx'

const router = createBrowserRouter([
  // ── PUBLIC ──────────────────────────────────────────────────────────────
  {
    element: <PublicLayout />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/sobre', element: <AboutPage /> },
      { path: '/metodologia', element: <MethodologyPage /> },
      { path: '/contato', element: <ContactPage /> },
      { path: '/termos', element: <TermsPage /> },
      { path: '/privacidade', element: <PrivacyPage /> },

      { path: '/diagnostico', element: <DiagnosisIntroPage /> },
      { path: '/diagnostico/empresa', element: <CompanyDiagnosisLanding /> },
      { path: '/diagnostico/empresa/novo', element: <CompanyDiagnosisWizard /> },
      { path: '/diagnostico/empresa/:demandaId', element: <CompanyDiagnosisStatus /> },
      { path: '/diagnostico/empresa/:demandaId/revisao', element: <CompanyDiagnosisReview /> },
      { path: '/diagnostico/empresa/:demandaId/enviado', element: <CompanyDiagnosisSubmitted /> },

      { path: '/consultores', element: <ConsultantsDirectoryPage /> },
      { path: '/consultores/:consultorSlug', element: <ConsultantProfilePage /> },
      { path: '/consultores/:consultorSlug/avaliar-fit', element: <ConsultantFitPage /> },

      { path: '/provedores', element: <ProvidersLandingPage /> },
      { path: '/provedores/candidatura', element: <ProviderApplicationIntroPage /> },
      { path: '/provedores/candidatura/novo', element: <ProviderApplicationWizard /> },
      { path: '/provedores/candidatura/:candidaturaId', element: <ProviderApplicationStatus /> },
    ],
  },

  // ── CLIENTE ─────────────────────────────────────────────────────────────
  {
    element: <ClientLayout />,
    children: [
      // Unprotected client routes
      { path: '/cliente/login', element: <ClientLoginPage /> },
      { path: '/cliente/cadastro', element: <ClientSignupPage /> },

      // Protected client routes
      {
        path: '/cliente/dashboard',
        element: <RequireClient><ClientDashboardPage /></RequireClient>,
      },
      {
        path: '/cliente/demandas',
        element: <RequireClient><ClientDemandsPage /></RequireClient>,
      },
      {
        path: '/cliente/demandas/:demandaId',
        element: <RequireClient><ClientDemandDetailPage /></RequireClient>,
      },
      {
        path: '/cliente/diagnosticos/:diagnosticoId',
        element: <RequireClient><ClientDiagnosticOutputPage /></RequireClient>,
      },
      {
        path: '/cliente/rotas/:rotaId',
        element: <RequireClient><ClientRoutePage /></RequireClient>,
      },
      {
        path: '/cliente/propostas/:propostaId',
        element: <RequireClient><ClientProposalPage /></RequireClient>,
      },
      {
        path: '/cliente/projetos/:projetoId',
        element: <RequireClient><ClientProjectPage /></RequireClient>,
      },
    ],
  },

  // ── PROVEDOR ─────────────────────────────────────────────────────────────
  {
    element: <ProviderLayout />,
    children: [
      {
        path: '/provedor/dashboard',
        element: <RequireProvider><ProviderDashboardPage /></RequireProvider>,
      },
      {
        path: '/provedor/perfil',
        element: <RequireProvider><ProviderProfilePage /></RequireProvider>,
      },
      {
        path: '/provedor/homologacao',
        element: <RequireProvider><ProviderHomologationPage /></RequireProvider>,
      },
      {
        path: '/provedor/oportunidades',
        element: <RequireProvider><ProviderOpportunitiesPage /></RequireProvider>,
      },
      {
        path: '/provedor/oportunidades/:oportunidadeId',
        element: <RequireProvider><ProviderOpportunityDetailPage /></RequireProvider>,
      },
      {
        path: '/provedor/propostas',
        element: <RequireProvider><ProviderProposalsPage /></RequireProvider>,
      },
      {
        path: '/provedor/projetos',
        element: <RequireProvider><ProviderProjectsPage /></RequireProvider>,
      },
    ],
  },

  // ── OPS ──────────────────────────────────────────────────────────────────
  {
    element: <OpsLayout />,
    children: [
      // Unprotected ops route
      { path: '/ops/login', element: <OpsLoginPage /> },

      // Protected ops routes
      {
        path: '/ops/dashboard',
        element: <RequireOps><OpsDashboardPage /></RequireOps>,
      },
      {
        path: '/ops/leads',
        element: <RequireOps><OpsLeadsPage /></RequireOps>,
      },
      {
        path: '/ops/demandas',
        element: <RequireOps><OpsDemandsPage /></RequireOps>,
      },
      {
        path: '/ops/demandas/:demandaId',
        element: <RequireOps><OpsDemandDetailPage /></RequireOps>,
      },
      {
        path: '/ops/diagnosticos',
        element: <RequireOps><OpsDiagnosticsPage /></RequireOps>,
      },
      {
        path: '/ops/diagnosticos/:diagnosticoId',
        element: <RequireOps><OpsDiagnosticWorkbenchPage /></RequireOps>,
      },
      {
        path: '/ops/roteamento/:diagnosticoId',
        element: <RequireOps><OpsRoutingPage /></RequireOps>,
      },
      {
        path: '/ops/shortlists',
        element: <RequireOps><OpsShortlistsPage /></RequireOps>,
      },
      {
        path: '/ops/shortlists/:shortlistId',
        element: <RequireOps><OpsShortlistDetailPage /></RequireOps>,
      },
      {
        path: '/ops/provedores',
        element: <RequireOps><OpsProvidersPage /></RequireOps>,
      },
      {
        path: '/ops/provedores/:provedorId',
        element: <RequireOps><OpsProviderDetailPage /></RequireOps>,
      },
      {
        path: '/ops/propostas',
        element: <RequireOps><OpsProposalsPage /></RequireOps>,
      },
      {
        path: '/ops/projetos',
        element: <RequireOps><OpsProjectsPage /></RequireOps>,
      },
      {
        path: '/ops/projetos/:projetoId',
        element: <RequireOps><OpsProjectDetailPage /></RequireOps>,
      },
      {
        path: '/ops/encerramentos/:projetoId',
        element: <RequireOps><OpsClosurePage /></RequireOps>,
      },
      {
        path: '/ops/inteligencia',
        element: <RequireOps><OpsIntelligencePage /></RequireOps>,
      },
    ],
  },
])

export default router
