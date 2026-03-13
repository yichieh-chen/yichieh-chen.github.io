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
            <Card className="bg-card/88 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Let's Connect</CardTitle>
                <CardDescription className="leading-7">
                  If you are interested in my work or would like to discuss collaboration opportunities, feel free to reach out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <a className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 p-3 transition-transform duration-300 hover:-translate-y-0.5" href="mailto:ej.chen.tw@gmail.com">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">Email</p>
                    <p className="text-sm text-muted-foreground">ej.chen.tw@gmail.com</p>
                  </div>
                </a>
                <a className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 p-3 transition-transform duration-300 hover:-translate-y-0.5" href="https://www.linkedin.com/in/yi-chieh-chen-238595357/" target="_blank" rel="noreferrer">
                  <Linkedin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">linkedin.com/in/yi-chieh-chen</p>
                  </div>
                </a>
                <a className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 p-3 transition-transform duration-300 hover:-translate-y-0.5" href="https://github.com/yichieh-chen" target="_blank" rel="noreferrer">
                  <Github className="h-5 w-5 text-primary" />
                  <div>
                    <p className="text-sm font-semibold">GitHub</p>
                    <p className="text-sm text-muted-foreground">github.com/yichieh-chen</p>
                  </div>
                </a>
              </CardContent>
            </Card>
          </Interactive3DCard>

          <Interactive3DCard className="rounded-3xl" intensity={7}>
            <Card className="bg-card/88 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                <CardDescription>Send a direct message through Google Form integration.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <Input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="What would you like to talk about?"
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={submitState === 'submitting'}>
                    {submitState === 'submitting' ? 'Sending...' : 'Send Message'}
                  </Button>

                  {statusMessage && (
                    <p className={submitState === 'error' ? 'text-sm text-destructive' : 'text-sm text-muted-foreground'}>
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