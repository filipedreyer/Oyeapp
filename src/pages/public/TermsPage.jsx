export default function TermsPage() {
  const sections = [
    'Aceitação dos Termos',
    'Uso da Plataforma',
    'Cadastro e Conta',
    'Diagnóstico e Dados',
    'Especialistas e Indicação',
    'Propriedade Intelectual',
    'Limitação de Responsabilidade',
    'Rescisão',
    'Alterações nos Termos',
    'Disposições Gerais',
  ]

  return (
    <div className="legal-page">
      <nav className="legal-toc">
        <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '16px' }}>
          Nesta página
        </p>
        {sections.map((s, i) => (
          <a key={s} href={`#section-${i + 1}`}>{s}</a>
        ))}
      </nav>

      <div className="legal-body">
        <h1 className="legal-title">Termos de Uso</h1>
        <p className="legal-date">Última atualização: junho de 2026</p>

        <div className="legal-section">
          <p>
            Estes Termos de Uso regulam o acesso e uso da plataforma Oyê. Ao acessar
            ou utilizar a plataforma, você concorda com estes termos em sua totalidade.
          </p>
        </div>

        <div className="legal-section" id="section-1">
          <h2>1. Aceitação dos Termos</h2>
          <p>
            O uso da plataforma Oyê implica na aceitação integral e irrestrita destes
            Termos de Uso. Se você não concorda com qualquer disposição deste documento,
            não utilize a plataforma.
          </p>
          <p>
            Estes termos se aplicam a todos os usuários da plataforma, incluindo empresas
            que buscam diagnóstico estratégico, provedores de consultoria cadastrados e
            visitantes gerais do site.
          </p>
        </div>

        <div className="legal-section" id="section-2">
          <h2>2. Uso da Plataforma</h2>
          <p>
            A plataforma Oyê é destinada ao uso por pessoas jurídicas e profissionais
            em contexto empresarial. O uso da plataforma para fins ilícitos, fraudulentos
            ou que violem direitos de terceiros é expressamente proibido.
          </p>
          <ul>
            <li>É proibido criar contas falsas ou com informações enganosas.</li>
            <li>É proibido utilizar a plataforma para envio de spam ou comunicações não solicitadas.</li>
            <li>É proibido tentar acessar áreas restritas sem autorização.</li>
            <li>É proibido reproduzir, copiar ou revender o conteúdo da plataforma sem autorização.</li>
          </ul>
        </div>

        <div className="legal-section" id="section-3">
          <h2>3. Cadastro e Conta</h2>
          <p>
            Para acessar determinadas funcionalidades, é necessário criar uma conta na
            plataforma. O usuário é responsável por manter a confidencialidade de suas
            credenciais de acesso e por todas as atividades realizadas em sua conta.
          </p>
          <p>
            A Oyê se reserva o direito de suspender ou encerrar contas que violem estes
            termos, sem aviso prévio, em casos de uso indevido.
          </p>
        </div>

        <div className="legal-section" id="section-4">
          <h2>4. Diagnóstico e Dados</h2>
          <p>
            As informações inseridas no diagnóstico são tratadas com confidencialidade absoluta
            conforme nossa Política de Privacidade. O diagnóstico é uma ferramenta de apoio
            à decisão — a Oyê não garante resultados específicos decorrentes das recomendações
            geradas pela plataforma.
          </p>
          <p>
            O usuário é responsável pela veracidade das informações inseridas. Diagnósticos
            baseados em dados incorretos ou incompletos podem gerar recomendações inadequadas.
          </p>
        </div>

        <div className="legal-section" id="section-5">
          <h2>5. Especialistas e Indicação</h2>
          <p>
            Os especialistas listados na plataforma passam por processo de avaliação, mas a
            Oyê não é parte nos contratos firmados entre empresas e especialistas. A relação
            contratual é estabelecida diretamente entre as partes, sendo a Oyê responsável
            apenas pelo processo de diagnóstico e recomendação.
          </p>
        </div>

        <div className="legal-section" id="section-6">
          <h2>6. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo da plataforma, incluindo textos, metodologias, modelos de
            diagnóstico, marca e identidade visual, é de propriedade exclusiva da Oyê
            ou licenciado para uso pela empresa. É vedada qualquer reprodução sem
            autorização expressa.
          </p>
        </div>

        <div className="legal-section" id="section-7">
          <h2>7. Limitação de Responsabilidade</h2>
          <p>
            A Oyê não se responsabiliza por danos diretos, indiretos, incidentais ou
            consequentes decorrentes do uso ou impossibilidade de uso da plataforma.
            A plataforma é fornecida "no estado em que se encontra", sem garantias
            expressas ou implícitas.
          </p>
        </div>

        <div className="legal-section" id="section-8">
          <h2>8. Rescisão</h2>
          <p>
            O usuário pode encerrar sua conta a qualquer momento através das configurações
            da plataforma. A Oyê pode encerrar o acesso de usuários que violem estes termos,
            com ou sem aviso prévio, dependendo da gravidade da infração.
          </p>
        </div>

        <div className="legal-section" id="section-9">
          <h2>9. Alterações nos Termos</h2>
          <p>
            A Oyê se reserva o direito de alterar estes Termos de Uso a qualquer momento.
            Alterações significativas serão comunicadas por email ou mediante aviso na
            plataforma. O uso continuado após as alterações implica na aceitação dos
            novos termos.
          </p>
        </div>

        <div className="legal-section" id="section-10">
          <h2>10. Disposições Gerais</h2>
          <p>
            Estes Termos de Uso são regidos pelas leis brasileiras. Quaisquer disputas
            decorrentes do uso da plataforma serão resolvidas no foro competente da comarca
            de domicílio da Oyê, renunciando as partes a qualquer outro foro.
          </p>
          <p>
            Para dúvidas sobre estes Termos, entre em contato pelo{' '}
            <a href="/contato" style={{ color: 'var(--navy-mid)', fontWeight: 700 }}>formulário de contato</a>.
          </p>
        </div>
      </div>
    </div>
  )
}
