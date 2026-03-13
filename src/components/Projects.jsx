import { ArrowUpRight, Github } from 'lucide-react'

import Interactive3DCard from '@/components/aceternity/Interactive3DCard'
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
          {projects.map((project) => {
            const hasLiveDemo = project.showDemo !== false

            return (
              <Interactive3DCard key={project.title} className="rounded-2xl" intensity={8}>
                <Card className="group overflow-hidden rounded-2xl border-border/70 bg-card/88 shadow-xl shadow-orange-100/45 backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-2xl">
                  <div className="relative flex h-44 items-center justify-center border-b border-border bg-gradient-to-br from-orange-100 via-transparent to-cyan-100 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(circle_at_60%_40%,rgba(255,255,255,0.7),transparent_50%)]" />
                    Project Preview
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="leading-7">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="rounded-full">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className={hasLiveDemo ? 'grid grid-cols-2 gap-2' : 'grid grid-cols-1 gap-2'}>
                    <Button asChild variant="outline" className="w-full">
                      <a href={project.github}>
                        <Github className="h-4 w-4" />
                        GitHub
                      </a>
                    </Button>
                    {hasLiveDemo && (
                      <Button asChild className="w-full">
                        <a href={project.demo}>
                          <ArrowUpRight className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </Interactive3DCard>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects