import React, { useState } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thanks for your message! This is currently a demo form.')
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
          <Card className="bg-card/95">
            <CardHeader>
              <CardTitle className="text-2xl">Let's Connect</CardTitle>
              <CardDescription className="leading-7">
                If you are interested in my work or would like to discuss collaboration opportunities, feel free to reach out.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <a className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 p-3" href="mailto:your.email@example.com">
                <Mail className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">Email</p>
                  <p className="text-sm text-muted-foreground">your.email@example.com</p>
                </div>
              </a>
              <a className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 p-3" href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer">
                <Linkedin className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">LinkedIn</p>
                  <p className="text-sm text-muted-foreground">linkedin.com/in/yourprofile</p>
                </div>
              </a>
              <a className="flex items-center gap-3 rounded-lg border border-border bg-secondary/40 p-3" href="https://github.com/yourusername" target="_blank" rel="noreferrer">
                <Github className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm font-semibold">GitHub</p>
                  <p className="text-sm text-muted-foreground">github.com/yourusername</p>
                </div>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-card/95">
            <CardHeader>
              <CardTitle className="text-2xl">Send Me a Message</CardTitle>
              <CardDescription>Submitting this form will show a demo alert.</CardDescription>
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

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact