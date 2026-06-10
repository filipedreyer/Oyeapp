export default function PrivacyPage() {
  const sections = [
    'Quem somos',
    'Dados que coletamos',
    'Como usamos os dados',
    'Compartilhamento de dados',
    'Dados do diagnóstico',
    'Cookies e rastreamento',
    'Seus direitos (LGPD)',
    'Retenção de dados',
    'Segurança',
    'Contato e DPO',
  ]

  return (
    <div>
      {/* Header */}
      <section className="section-hero" style={{ paddingBottom: 'var(--space-12)' }}>
        <div className="container">
          <p className="eyebrow">Documentos legais</p>
          <h1 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
            Política de Privacidade
          </h1>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
            Última atualização: junho de 2026
          </p>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--white)' }}>
        <div className="container">
          <div className="legal-layout">
            {/* TOC */}
            <nav className="legal-toc">
              <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 'var(--space-4)' }}>
                Nesta página
              </p>
              {sections.map((s, i) => (
                <a key={s} href={`#section-${i + 1}`}>{s}</a>
              ))}
            </nav>

            {/* Content */}
            <div className="legal-content">
              <p>
                Esta Política de Privacidade descreve como a Oyê coleta, usa, armazena e protege
                seus dados pessoais, em conformidade com a Lei Geral de Proteção de Dados (LGPD —
                Lei nº 13.709/2018) e demais legislações aplicáveis.
              </p>

              <h2 id="section-1">1. Quem somos</h2>
              <p>
                A Oyê é uma plataforma de diagnóstico estratégico operada por [Razão Social],
                inscrita no CNPJ [número], com sede em [endereço]. Para fins da LGPD, atuamos
                como controladora dos dados pessoais tratados em nossa plataforma.
              </p>

              <h2 id="section-2">2. Dados que coletamos</h2>
              <p>
                Coletamos diferentes categorias de dados dependendo do modo de uso da plataforma:
              </p>
              <ul>
                <li><strong>Dados de cadastro:</strong> nome, email, empresa, cargo, telefone.</li>
                <li><strong>Dados de diagnóstico:</strong> descrição do problema, setor, porte da empresa, histórico de iniciativas.</li>
                <li><strong>Dados de uso:</strong> páginas acessadas, tempo de sessão, dispositivo, navegador.</li>
                <li><strong>Dados de comunicação:</strong> mensagens enviadas pelo formulário de contato.</li>
              </ul>

              <h2 id="section-3">3. Como usamos os dados</h2>
              <p>
                Os dados coletados são utilizados para as seguintes finalidades:
              </p>
              <ul>
                <li>Processar e estruturar o diagnóstico estratégico da empresa.</li>
                <li>Gerar recomendações de rota e shortlist de provedores.</li>
                <li>Comunicar sobre o andamento do diagnóstico e etapas seguintes.</li>
                <li>Melhorar os modelos de diagnóstico e match da plataforma (de forma agregada e anonimizada).</li>
                <li>Cumprir obrigações legais e regulatórias.</li>
              </ul>

              <h2 id="section-4">4. Compartilhamento de dados</h2>
              <p>
                A Oyê não vende dados pessoais. Os dados são compartilhados apenas nas seguintes
                situações:
              </p>
              <ul>
                <li>Com provedores da rede homologada, somente após autorização expressa do usuário.</li>
                <li>Com fornecedores de tecnologia que suportam a operação da plataforma, sob contrato de confidencialidade.</li>
                <li>Com autoridades públicas, quando exigido por lei.</li>
              </ul>

              <h2 id="section-5">5. Dados do diagnóstico</h2>
              <p>
                Os dados inseridos no formulário de diagnóstico são especialmente sensíveis e
                recebem tratamento diferenciado. Esses dados são utilizados exclusivamente para:
              </p>
              <ul>
                <li>Estruturar o diagnóstico individual da empresa solicitante.</li>
                <li>Alimentar modelos de inteligência de forma estritamente anonimizada e agregada.</li>
              </ul>
              <p>
                Nenhum dado de diagnóstico identificável é compartilhado com provedores sem
                autorização explícita da empresa.
              </p>

              <h2 id="section-6">6. Cookies e rastreamento</h2>
              <p>
                Utilizamos cookies técnicos essenciais para o funcionamento da plataforma e
                cookies analíticos para entender o uso do site. Você pode gerenciar suas
                preferências de cookies através do banner de consentimento disponível na
                primeira visita ao site.
              </p>

              <h2 id="section-7">7. Seus direitos (LGPD)</h2>
              <p>
                Nos termos da LGPD, você tem direito a:
              </p>
              <ul>
                <li>Confirmar a existência de tratamento dos seus dados.</li>
                <li>Acessar os dados que temos sobre você.</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                <li>Solicitar anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                <li>Revogar o consentimento dado a qualquer momento.</li>
                <li>Solicitar portabilidade dos dados para outro fornecedor.</li>
              </ul>
              <p>
                Para exercer seus direitos, entre em contato pelo{' '}
                <a href="/contato" style={{ color: 'var(--copper)', fontWeight: 700 }}>formulário de contato</a>{' '}
                ou pelo email [dpo@oyeplataforma.com.br].
              </p>

              <h2 id="section-8">8. Retenção de dados</h2>
              <p>
                Mantemos os dados pelo tempo necessário para cumprir as finalidades descritas
                nesta política. Dados de diagnóstico são retidos por até 5 anos após o
                encerramento do caso. Dados de cadastro são mantidos enquanto a conta estiver
                ativa e por até 2 anos após o encerramento.
              </p>

              <h2 id="section-9">9. Segurança</h2>
              <p>
                Implementamos medidas técnicas e administrativas para proteger seus dados contra
                acesso não autorizado, perda acidental, destruição ou divulgação. Isso inclui
                criptografia de dados em trânsito e em repouso, controle de acesso por função
                e monitoramento contínuo de segurança.
              </p>
              <p>
                Em caso de incidente de segurança que afete seus dados, comunicaremos a você
                e à Autoridade Nacional de Proteção de Dados (ANPD) conforme previsto em lei.
              </p>

              <h2 id="section-10">10. Contato e DPO</h2>
              <p>
                O Encarregado de Proteção de Dados (DPO) da Oyê pode ser contactado pelo
                email [dpo@oyeplataforma.com.br]. Para demais dúvidas sobre privacidade,
                utilize o{' '}
                <a href="/contato" style={{ color: 'var(--copper)', fontWeight: 700 }}>formulário de contato</a>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
