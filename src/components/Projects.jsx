import { ArrowUpRight, Github } from 'lucide-react'

import Interactive3DCard from '@/components/aceternity/Interactive3DCard'
import ScrollReveal from '@/components/aceternity/ScrollReveal'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

function Projects() {
  const projects = [
    {
      title: 'LearningOpenGL',
      description: 'A hands-on OpenGL learning repository focused on computer graphics fundamentals, rendering pipeline practice, and shader experiments.',
      technologies: ['C++', 'OpenGL', 'GLSL', 'Computer Graphics'],
      github: 'https://github.com/yichieh-chen/LearningOpenGL',
      demo: '',
      showDemo: false
    },
    {
      title: 'OOP-Reversi-Game',
      description: 'A simple implementation of the Reversi game using object-oriented programming principles in C++.',
      technologies: ['C++', 'OOP'],
      github: 'https://github.com/yichieh-chen/113-OOP-Reversi_cpp',
      demo: '',
      showDemo: false
    }
  ]

  return (
    <section id="projects" className="section-animate px-4 py-14 sm:px-0">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Projects</p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">My Projects</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => {
            const hasLiveDemo = project.showDemo !== false

            return (
              <ScrollReveal key={project.title} delay={index * 130}>
                <Interactive3DCard className="rounded-2xl" intensity={8}>
                  <Card className="terminal-pixel group relative overflow-hidden rounded-2xl border border-emerald-400/40 bg-[#091320]/90 text-emerald-100 shadow-xl shadow-emerald-500/20 transition-all hover:-translate-y-1 hover:shadow-2xl">
                    <div className="pointer-events-none absolute inset-0 terminal-scanlines opacity-45" />
                    <div className="relative z-10 border-b border-emerald-400/30 bg-[#0e1c2d] px-4 py-2.5">
                      <span className="text-[9px] tracking-[0.14em] text-emerald-200/80">{project.title}.project</span>
                    </div>
                    <div className="relative z-10 flex h-40 items-center justify-center border-b border-emerald-400/30 bg-[radial-gradient(circle_at_50%_0%,rgba(109,255,189,0.18),transparent_50%),linear-gradient(180deg,#0b1a2b_0%,#0b1524_100%)] text-[10px] uppercase tracking-[0.16em] text-emerald-200/80">
                      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_60%_40%,rgba(97,217,255,0.18),transparent_50%)]" />
                      project preview
                    </div>
                    <CardHeader className="relative z-10">
                      <CardTitle className="text-sm text-emerald-100 md:text-base">{project.title}</CardTitle>
                      <CardDescription className="font-mono text-sm leading-7 text-emerald-100/80">{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <Badge key={tech} className="rounded-full border border-emerald-300/40 bg-emerald-500/15 text-[10px] text-emerald-100">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className={hasLiveDemo ? 'relative z-10 grid grid-cols-2 gap-2' : 'relative z-10 grid grid-cols-1 gap-2'}>
                      <Button asChild variant="outline" className="w-full border-emerald-300/45 bg-transparent text-emerald-100 hover:bg-emerald-500/15 hover:text-emerald-100">
                        <a href={project.github}>
                          <Github className="h-4 w-4" />
                          GitHub
                        </a>
                      </Button>
                      {hasLiveDemo && (
                        <Button asChild className="w-full bg-emerald-500/20 text-emerald-100 hover:bg-emerald-500/30">
                          <a href={project.demo}>
                            <ArrowUpRight className="h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                    </CardFooter>
                  </Card>
                </Interactive3DCard>
              </ScrollReveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects