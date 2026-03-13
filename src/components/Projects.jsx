import { ArrowUpRight, Github } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

function Projects() {
  const projects = [
    {
      title: 'Personal Portfolio Website',
      description: 'A responsive portfolio website built with React and Vite to showcase my skills and project experience.',
      technologies: ['React', 'CSS3', 'Vite'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Upcoming Project 1',
      description: 'This space will feature your next project, potentially a modern Todo List application.',
      technologies: ['React', 'JavaScript', 'CSS'],
      github: '#',
      demo: '#'
    },
    {
      title: 'Upcoming Project 2',
      description: 'This space will showcase another future project, such as a weather dashboard app.',
      technologies: ['React', 'API', 'CSS'],
      github: '#',
      demo: '#'
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
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden bg-card/95 transition-all hover:-translate-y-1 hover:shadow-xl">
              <div className="flex h-44 items-center justify-center border-b border-border bg-gradient-to-br from-orange-100 via-transparent to-cyan-100 text-sm font-semibold uppercase tracking-[0.16em] text-muted-foreground">
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
              <CardFooter className="grid grid-cols-2 gap-2">
                <Button asChild variant="outline" className="w-full">
                  <a href={project.github}>
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button asChild className="w-full">
                  <a href={project.demo}>
                    <ArrowUpRight className="h-4 w-4" />
                    Live Demo
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects