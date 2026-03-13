import React, { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

import Interactive3DCard from '@/components/aceternity/Interactive3DCard'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function Contact() {
  const googleFormActionUrl = import.meta.env.VITE_GOOGLE_FORM_ACTION_URL
  const googleFormNameEntry = import.meta.env.VITE_GOOGLE_FORM_ENTRY_NAME
  const googleFormEmailEntry = import.meta.env.VITE_GOOGLE_FORM_ENTRY_EMAIL
  const googleFormMessageEntry = import.meta.env.VITE_GOOGLE_FORM_ENTRY_MESSAGE
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [submitState, setSubmitState] = useState('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!googleFormActionUrl || !googleFormNameEntry || !googleFormEmailEntry || !googleFormMessageEntry) {
      setSubmitState('error')
      setStatusMessage('Google Form is not configured yet. Please set VITE_GOOGLE_FORM_ACTION_URL and all entry keys in .env.')
      return
    }

    setSubmitState('submitting')
    setStatusMessage('Sending your message...')

    try {
      const payload = new URLSearchParams()
      payload.append(googleFormNameEntry, formData.name)
      payload.append(googleFormEmailEntry, formData.email)
      payload.append(googleFormMessageEntry, formData.message)

      await fetch(googleFormActionUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: payload.toString()
      })

      setSubmitState('success')
      setStatusMessage('Thanks! Your message has been sent successfully.')
    } catch (error) {
      setSubmitState('error')
      setStatusMessage('Unable to send message right now. Please try again later or contact me via email.')
    }

    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="section-animate px-4 py-14 sm:px-0">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Contact</p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">Contact Me</h2>
        </div>

        <div className="grid gap-4 lg:grid-cols-2">
          <Interactive3DCard className="rounded-3xl" intensity={7}>
            <Card className="terminal-pixel relative overflow-hidden rounded-3xl border border-emerald-400/40 bg-[#091320]/90 text-emerald-100 shadow-lg shadow-emerald-500/20">
              <div className="pointer-events-none absolute inset-0 terminal-scanlines opacity-45" />
              <div className="relative z-10 border-b border-emerald-400/30 bg-[#0e1c2d] px-5 py-3">
                <span className="text-[10px] tracking-[0.15em] text-emerald-200/80">contacts.sys</span>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-sm text-emerald-100 md:text-base">Let's Connect</CardTitle>
                <CardDescription className="font-mono text-sm leading-7 text-emerald-100/80">
                  If you are interested in my work or would like to discuss collaboration opportunities, feel free to reach out.
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10 space-y-3">
                <a className="flex items-center gap-3 rounded-lg border border-emerald-300/35 bg-emerald-500/10 p-3 transition-transform duration-300 hover:-translate-y-0.5" href="mailto:ej.chen.tw@gmail.com">
                  <Mail className="h-5 w-5 text-emerald-300" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-100">Email</p>
                    <p className="font-mono text-sm text-emerald-100/75">ej.chen.tw@gmail.com</p>
                  </div>
                </a>
                <a className="flex items-center gap-3 rounded-lg border border-cyan-300/35 bg-cyan-500/10 p-3 transition-transform duration-300 hover:-translate-y-0.5" href="https://www.linkedin.com/in/yi-chieh-chen-238595357/" target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5 text-cyan-200" />
                  <div>
                    <p className="text-sm font-semibold text-cyan-100">LinkedIn</p>
                    <p className="font-mono text-sm text-cyan-50/75">linkedin.com/in/yi-chieh-chen</p>
                  </div>
                </a>
                <a className="flex items-center gap-3 rounded-lg border border-emerald-300/35 bg-emerald-500/10 p-3 transition-transform duration-300 hover:-translate-y-0.5" href="https://github.com/yichieh-chen" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5 text-emerald-300" />
                  <div>
                    <p className="text-sm font-semibold text-emerald-100">GitHub</p>
                    <p className="font-mono text-sm text-emerald-100/75">github.com/yichieh-chen</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </Interactive3DCard>

          <Interactive3DCard className="rounded-3xl" intensity={7}>
            <Card className="terminal-pixel relative overflow-hidden rounded-3xl border border-emerald-400/40 bg-[#091320]/90 text-emerald-100 shadow-lg shadow-emerald-500/20">
              <div className="pointer-events-none absolute inset-0 terminal-scanlines opacity-45" />
              <div className="relative z-10 border-b border-emerald-400/30 bg-[#0e1c2d] px-5 py-3">
                <span className="text-[10px] tracking-[0.15em] text-emerald-200/80">message_sender.sh</span>
              </div>
              <CardHeader className="relative z-10">
                <CardTitle className="text-sm text-emerald-100 md:text-base">Send Me a Message</CardTitle>
                <CardDescription className="font-mono text-sm text-emerald-100/80">Send a direct message through Google Form integration.</CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-emerald-100">Name</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="border-emerald-300/35 bg-[#0f2236] text-emerald-100 placeholder:text-emerald-100/45"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-emerald-100">Email</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      className="border-emerald-300/35 bg-[#0f2236] text-emerald-100 placeholder:text-emerald-100/45"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-emerald-100">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="What would you like to talk about?"
                      className="border-emerald-300/35 bg-[#0f2236] text-emerald-100 placeholder:text-emerald-100/45"
                    />
                  </div>

                  <Button type="submit" className="w-full border border-emerald-300/40 bg-emerald-500/18 text-emerald-100 hover:bg-emerald-500/28" disabled={submitState === 'submitting'}>
                    {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>

                  {statusMessage && (
                    <p className={submitState === 'error' ? 'font-mono text-sm text-red-300' : 'font-mono text-sm text-emerald-100/75'}>
                      {statusMessage}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </Interactive3DCard>
        </div>
      </div>
    </section>
  )
}

export default Contact