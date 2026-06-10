import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [form, setForm] = useState({
    nome: '',
    empresa: '',
    email: '',
    telefone: '',
    mensagem: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    // Simulate async submission
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <div>
      {/* Hero */}
      <section className="section-hero" style={{ paddingBottom: 'var(--space-16)' }}>
        <div className="container">
          <p className="eyebrow">Contato</p>
          <h1 style={{ marginTop: 'var(--space-4)', marginBottom: 'var(--space-4)' }}>
            Fale com a Oyê
          </h1>
          <p className="lead-text" style={{ maxWidth: '520px' }}>
            Tem uma dúvida sobre a plataforma, quer saber mais sobre como funciona o diagnóstico
            ou prefere conversar antes de começar? Estamos aqui.
          </p>
        </div>
      </section>

      {/* Form + Side panel */}
      <section className="section" style={{ backgroundColor: 'var(--paper-2)', paddingTop: 'var(--space-16)' }}>
        <div className="container">
          <div className="contact-layout">
            {/* Form */}
            <div>
              <p className="section-label" style={{ marginBottom: 'var(--space-8)' }}>Envie uma mensagem</p>

              {submitted ? (
                <div className="form-success">
                  <div className="form-success__title">Mensagem recebida.</div>
                  <p style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-relaxed)', color: 'var(--ink-soft)' }}>
                    Obrigado pelo contato, {form.nome.split(' ')[0]}. Nossa equipe vai responder em até 1 dia útil no
                    endereço <strong>{form.email}</strong>.
                  </p>
                  <p style={{ marginTop: 'var(--space-4)', fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
                    Enquanto isso, você pode{' '}
                    <Link to="/diagnostico/empresa" style={{ color: 'var(--positive)', fontWeight: 700 }}>
                      iniciar seu diagnóstico
                    </Link>{' '}
                    ou{' '}
                    <Link to="/metodologia" style={{ color: 'var(--positive)', fontWeight: 700 }}>
                      conhecer a metodologia
                    </Link>.
                  </p>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="nome">Nome</label>
                      <input
                        id="nome"
                        name="nome"
                        type="text"
                        required
                        placeholder="Seu nome completo"
                        value={form.nome}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="empresa">Empresa</label>
                      <input
                        id="empresa"
                        name="empresa"
                        type="text"
                        required
                        placeholder="Nome da empresa"
                        value={form.empresa}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-field">
                      <label htmlFor="email">E-mail</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="seu@email.com"
                        value={form.email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="form-field">
                      <label htmlFor="telefone">
                        Telefone{' '}
                        <span style={{ fontWeight: 400, textTransform: 'none', letterSpacing: 0, color: 'var(--muted)' }}>
                          (opcional)
                        </span>
                      </label>
                      <input
                        id="telefone"
                        name="telefone"
                        type="tel"
                        placeholder="(11) 99999-9999"
                        value={form.telefone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label htmlFor="mensagem">Mensagem</label>
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      required
                      placeholder="Descreva sua dúvida ou o que gostaria de discutir com a equipe Oyê..."
                      value={form.mensagem}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg"
                      disabled={loading}
                    >
                      {loading ? 'Enviando...' : 'Enviar mensagem'}
                    </button>
                  </div>
                </form>
              )}
            </div>

            {/* Side panel */}
            <div>
              <div className="contact-side-panel">
                <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>Prefere iniciar direto?</p>
                <h3 style={{ fontSize: 'var(--text-xl)', marginBottom: 'var(--space-4)' }}>
                  O diagnóstico responde a maioria das dúvidas
                </h3>
                <p style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--ink-soft)', marginBottom: 'var(--space-6)' }}>
                  Se você tem um problema — ou suspeita de um — o diagnóstico é o melhor ponto
                  de partida. É gratuito, leva 15 minutos e gera clareza imediata.
                </p>
                <Link to="/diagnostico/empresa" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                  Iniciar Diagnóstico
                </Link>
              </div>

              <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-6)', border: 'var(--border)' }}>
                <p className="eyebrow" style={{ marginBottom: 'var(--space-4)' }}>É provedor?</p>
                <p style={{ fontSize: 'var(--text-sm)', lineHeight: 'var(--leading-relaxed)', color: 'var(--muted)', marginBottom: 'var(--space-4)' }}>
                  Se você é consultor ou empresa de consultoria e quer fazer parte da rede
                  homologada Oyê, acesse o processo de candidatura.
                </p>
                <Link to="/provedores/candidatura" className="btn btn-secondary btn-sm">
                  Candidatura de provedor
                </Link>
              </div>

              <div style={{ marginTop: 'var(--space-6)', padding: 'var(--space-6)', backgroundColor: 'var(--paper)', border: 'var(--border)' }}>
                <p style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 'var(--space-3)' }}>
                  Tempo de resposta
                </p>
                <p style={{ fontSize: 'var(--text-base)', fontWeight: 800, color: 'var(--ink)', marginBottom: 'var(--space-1)' }}>
                  Até 1 dia útil
                </p>
                <p style={{ fontSize: 'var(--text-sm)', color: 'var(--muted)' }}>
                  Segunda a sexta, das 9h às 18h
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
