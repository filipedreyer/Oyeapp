import { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ContactPage() {
  const [form, setForm] = useState({ nome: '', empresa: '', email: '', telefone: '', mensagem: '' })
  const [submitted, setSubmitted] = useState(false)

  function handleChange(e) {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.nome || !form.email || !form.mensagem) return
    setSubmitted(true)
  }

  return (
    <div className="contact-page">
      <div className="contact-form-side">
        <span className="pub-eyebrow">Contato</span>
        <h1 className="contact-title">Fale com a Oyê.</h1>

        {submitted ? (
          <div className="contact-success">
            <h3 style={{ fontSize: '1.1rem', fontWeight: 800, letterSpacing: '-0.03em', color: 'var(--positive)', marginBottom: '12px' }}>
              Mensagem recebida.
            </h3>
            <p style={{ fontSize: '0.9375rem', color: 'var(--positive)', lineHeight: 1.55 }}>
              Obrigado, {form.nome}. Entraremos em contato com {form.email} em até 2 dias úteis.
            </p>
          </div>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <div>
              <label className="contact-label" htmlFor="nome">Nome *</label>
              <input id="nome" name="nome" className="contact-input"
                value={form.nome} onChange={handleChange}
                placeholder="Seu nome completo" required />
            </div>
            <div>
              <label className="contact-label" htmlFor="empresa">Empresa</label>
              <input id="empresa" name="empresa" className="contact-input"
                value={form.empresa} onChange={handleChange}
                placeholder="Nome da empresa" />
            </div>
            <div>
              <label className="contact-label" htmlFor="email">Email *</label>
              <input id="email" name="email" type="email" className="contact-input"
                value={form.email} onChange={handleChange}
                placeholder="seuemail@empresa.com.br" required />
            </div>
            <div>
              <label className="contact-label" htmlFor="telefone">Telefone</label>
              <input id="telefone" name="telefone" className="contact-input"
                value={form.telefone} onChange={handleChange}
                placeholder="(11) 99999-9999" />
            </div>
            <div>
              <label className="contact-label" htmlFor="mensagem">Mensagem *</label>
              <textarea id="mensagem" name="mensagem" className="contact-textarea"
                value={form.mensagem} onChange={handleChange}
                placeholder="Como podemos ajudar?" required />
            </div>
            <div>
              <button type="submit" className="btn btn-primary btn-lg">
                Enviar mensagem →
              </button>
            </div>
          </form>
        )}
      </div>

      <div className="contact-info-side">
        <div className="contact-info-card">
          <div className="contact-info-card__title">Prefere iniciar direto?</div>
          <p className="contact-info-card__text">
            Se você tem uma dor de negócio, o caminho mais rápido é iniciar o diagnóstico.
            É gratuito, leva menos de 15 minutos e estrutura o problema antes de qualquer contato.
          </p>
          <Link to="/diagnostico/empresa" className="btn btn-primary">
            Iniciar Diagnóstico →
          </Link>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-card__title">É consultor ou especialista?</div>
          <p className="contact-info-card__text">
            Se você tem solução e quer fazer parte da rede Oyê, a candidatura é o caminho certo.
            Não respondemos a abordagens comerciais fora do processo de avaliação.
          </p>
          <Link to="/provedores/candidatura" className="btn btn-secondary">
            Candidatura de provedor
          </Link>
        </div>

        <div className="contact-info-card">
          <div className="contact-info-card__title">Para imprensa e parcerias</div>
          <p className="contact-info-card__text">
            Use o formulário ao lado e indique no campo de mensagem o tipo de contato.
            Retornamos em até 5 dias úteis.
          </p>
        </div>
      </div>
    </div>
  )
}
