import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import ScrollReveal from '../ui/ScrollReveal'
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheckCircle, FiAlertCircle } from 'react-icons/fi'

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: 'mohankumar8096@gmail.com',
    href: 'mailto:mohankumar8096@gmail.com',
    color: '#00D4FF',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/mohan-kumar-nulu',
    href: 'https://linkedin.com/in/mohan-kumar-nulu',
    color: '#0A66C2',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Mohan-1123',
    href: 'https://github.com/Mohan-1123',
    color: '#E6F1FF',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null) // 'sending' | 'success' | 'error'

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  // ── EmailJS credentials ─────────────────────────────────────────
  // 1. Sign up free at https://www.emailjs.com
  // 2. Add a Gmail service  → copy the Service ID
  // 3. Create an email template → copy the Template ID
  // 4. Account → General → copy the Public Key
  const EMAILJS_SERVICE_ID  = 'service_4hjsiih'
  const EMAILJS_TEMPLATE_ID = 'template_3sucfkq'
  const EMAILJS_PUBLIC_KEY  = 'gtBbYpGS6D5D16AjF'
  // ────────────────────────────────────────────────────────────────

  const emailjsConfigured =
    EMAILJS_SERVICE_ID  !== 'YOUR_SERVICE_ID'  &&
    EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' &&
    EMAILJS_PUBLIC_KEY  !== 'YOUR_PUBLIC_KEY'

  const handleSubmit = async e => {
    e.preventDefault()

    if (!emailjsConfigured) {
      // Fallback: open default mail client pre-filled
      const mailto =
        `mailto:mohankumar8096@gmail.com` +
        `?subject=${encodeURIComponent(form.subject || 'Portfolio Enquiry')}` +
        `&body=${encodeURIComponent(
          `Hi Mohan,\n\nName: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
        )}`
      window.location.href = mailto
      return
    }

    setStatus('sending')
    try {
      const emailjs = (await import('@emailjs/browser')).default
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  form.name,
          from_email: form.email,
          subject:    form.subject,
          message:    form.message,
          reply_to:   form.email,
        },
        EMAILJS_PUBLIC_KEY
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }

    setTimeout(() => setStatus(null), 6000)
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <SectionHeading title="Get In Touch" subtitle="Contact Me" />

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Left — Contact Info */}
          <ScrollReveal direction="left">
            <div className="space-y-8">
              <div>
                <h3 className="text-text-primary text-2xl font-bold mb-3">Let's talk.</h3>
                <p className="text-text-secondary leading-relaxed">
                  Whether you have a full-time opportunity, a freelance project, or just want to connect —
                  I'm always happy to have a conversation. Typical response within{' '}
                  <span className="text-accent font-semibold">24 hours</span>.
                </p>
              </div>

              <div className="space-y-4">
                {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ x: 6 }}
                    className="flex items-center gap-4 p-4 glass rounded-xl group transition-all duration-200"
                    style={{ border: '1px solid rgba(30,58,95,0.8)' }}
                    onMouseEnter={e => {
                      e.currentTarget.style.borderColor = `${color}40`
                      e.currentTarget.style.boxShadow = `0 0 20px ${color}15`
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.borderColor = 'rgba(30,58,95,0.8)'
                      e.currentTarget.style.boxShadow = 'none'
                    }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}
                    >
                      <Icon size={20} style={{ color }} />
                    </div>
                    <div>
                      <p className="text-text-muted text-xs font-mono uppercase tracking-wider mb-0.5">{label}</p>
                      <p className="text-text-primary text-sm font-medium">{value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Availability badge */}
              <div
                className="flex items-center gap-3 p-4 rounded-xl"
                style={{ background: 'rgba(100, 255, 218, 0.06)', border: '1px solid rgba(100, 255, 218, 0.2)' }}
              >
                <span className="w-3 h-3 rounded-full bg-success animate-pulse-ring flex-shrink-0" />
                <p className="text-success text-sm font-medium">
                  Currently available for full-time roles and freelance projects
                </p>
              </div>
            </div>
          </ScrollReveal>

          {/* Right — Contact Form */}
          <ScrollReveal direction="right" delay={0.15}>
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8 space-y-5" style={{ border: '1px solid rgba(30,58,95,0.8)' }}>
              <h3 className="text-text-primary font-bold text-xl mb-6">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-text-secondary text-sm font-medium mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl text-text-primary text-sm placeholder-text-muted outline-none transition-all duration-200 focus:ring-2"
                    style={{
                      background: 'rgba(17, 34, 64, 0.6)',
                      border: '1px solid rgba(30,58,95,0.8)',
                    }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(30,58,95,0.8)'}
                  />
                </div>
                <div>
                  <label className="block text-text-secondary text-sm font-medium mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl text-text-primary text-sm placeholder-text-muted outline-none transition-all duration-200"
                    style={{ background: 'rgba(17, 34, 64, 0.6)', border: '1px solid rgba(30,58,95,0.8)' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(30,58,95,0.8)'}
                  />
                </div>
              </div>

              <div>
                <label className="block text-text-secondary text-sm font-medium mb-2">Subject *</label>
                <select
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl text-text-primary text-sm outline-none transition-all duration-200 cursor-pointer"
                  style={{ background: 'rgba(17, 34, 64, 0.6)', border: '1px solid rgba(30,58,95,0.8)', color: form.subject ? '#E6F1FF' : '#495670' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(30,58,95,0.8)'}
                >
                  <option value="" style={{ background: '#0D1F35' }}>Select a subject</option>
                  <option value="Full-time Role Inquiry" style={{ background: '#0D1F35' }}>Full-time Role Inquiry</option>
                  <option value="Freelance Project" style={{ background: '#0D1F35' }}>Freelance Project</option>
                  <option value="Collaboration" style={{ background: '#0D1F35' }}>Collaboration</option>
                  <option value="Other" style={{ background: '#0D1F35' }}>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-text-secondary text-sm font-medium mb-2">Message *</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or opportunity..."
                  className="w-full px-4 py-3 rounded-xl text-text-primary text-sm placeholder-text-muted outline-none transition-all duration-200 resize-none"
                  style={{ background: 'rgba(17, 34, 64, 0.6)', border: '1px solid rgba(30,58,95,0.8)' }}
                  onFocus={e => e.target.style.borderColor = 'rgba(0, 212, 255, 0.5)'}
                  onBlur={e => e.target.style.borderColor = 'rgba(30,58,95,0.8)'}
                />
              </div>

              {/* Status messages */}
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-success text-sm"
                  style={{ background: 'rgba(100, 255, 218, 0.08)', border: '1px solid rgba(100, 255, 218, 0.25)' }}
                >
                  <FiCheckCircle size={16} />
                  Message sent! I'll get back to you within 24 hours.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-start gap-2 px-4 py-3 rounded-xl text-red-400 text-sm"
                  style={{ background: 'rgba(239, 68, 68, 0.08)', border: '1px solid rgba(239, 68, 68, 0.25)' }}
                >
                  <FiAlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                  <span>
                    Something went wrong.{' '}
                    <a
                      href="mailto:mohankumar8096@gmail.com"
                      className="underline hover:text-red-300 transition-colors"
                    >
                      Email me directly
                    </a>{' '}
                    instead.
                  </span>
                </motion.div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={status !== 'sending' ? { scale: 1.02 } : {}}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-background transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #00D4FF, #0099BB)' }}
              >
                {status === 'sending' ? (
                  <>
                    <div className="w-4 h-4 border-2 border-background border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <FiSend size={17} />
                    Send Message
                  </>
                )}
              </motion.button>

              <p className="text-text-muted text-xs text-center">
                Response within 24 hours • No spam, ever
              </p>
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
