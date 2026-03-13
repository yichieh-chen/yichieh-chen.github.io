import { Badge } from '@/components/ui/badge'
import Interactive3DCard from '@/components/aceternity/Interactive3DCard'
import ScrollReveal from '@/components/aceternity/ScrollReveal'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function Skills() {
  const skills = [
    { name: 'C/C++', level: 58 },
    { name: 'Linux', level: 52 },
    { name: 'Git', level: 70 }
  ]

  return (
    <section id="skills" className="section-animate px-4 py-14 sm:px-0">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <div className="mb-8">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">Skills</p>
          <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">My Skills</h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <ScrollReveal key={skill.name} delay={index * 110}>
              <Interactive3DCard className="rounded-2xl" intensity={8}>
                <Card className="terminal-pixel relative overflow-hidden rounded-2xl border border-emerald-400/40 bg-[#091320]/90 text-emerald-100 shadow-lg shadow-emerald-500/20 transition-transform hover:-translate-y-1">
                  <div className="pointer-events-none absolute inset-0 terminal-scanlines opacity-45" />
                  <div className="relative z-10 border-b border-emerald-400/30 bg-[#0e1c2d] px-4 py-2">
                    <span className="text-[9px] tracking-[0.14em] text-emerald-200/80">skill.log</span>
                  </div>
                  <CardHeader className="relative z-10 space-y-3 pb-2">
                    <div className="flex items-center justify-between gap-3">
                      <CardTitle className="text-sm text-emerald-100">{skill.name}</CardTitle>
                      <Badge className="rounded-full border border-emerald-300/40 bg-emerald-500/15 px-3 py-1 text-[10px] text-emerald-100">{skill.level}%</Badge>
                    </div>
                    <div className="h-2.5 w-full overflow-hidden rounded-full border border-emerald-300/30 bg-[#102338]">
                      <div
                        className="h-full rounded-full bg-[linear-gradient(90deg,#1ddf9d,#61d9ff)]"
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </CardHeader>
                </Card>
              </Interactive3DCard>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={180}>
          <Interactive3DCard className="mt-6 rounded-3xl" intensity={6}>
            <Card className="terminal-pixel relative overflow-hidden rounded-3xl border border-emerald-400/40 bg-[#091320]/90 text-emerald-100 shadow-lg shadow-emerald-500/20">
            <div className="pointer-events-none absolute inset-0 terminal-scanlines opacity-45" />
            <div className="relative z-10 border-b border-emerald-400/30 bg-[#0e1c2d] px-5 py-3">
              <span className="text-[10px] tracking-[0.15em] text-emerald-200/80">learning_journey.md</span>
            </div>
            <CardHeader className="relative z-10">
              <CardTitle className="text-sm text-emerald-100 md:text-base">Learning Journey</CardTitle>
              <CardDescription className="font-mono text-sm leading-7 text-emerald-100/80 md:text-base">
                I am currently focused on learning OpenGL and strengthening my computer graphics foundation. I am also
                practicing a little Frontend design to improve layout, visual hierarchy, and overall UI quality.
              </CardDescription>
            </CardHeader>
            <CardContent className="relative z-10 pt-0">
              <div className="flex flex-wrap gap-2">
                <Badge className="rounded-full border border-emerald-300/40 bg-emerald-500/15 text-[10px] text-emerald-100">OpenGL</Badge>
                <Badge className="rounded-full border border-cyan-300/40 bg-cyan-500/15 text-[10px] text-cyan-100">Frontend Design</Badge>
                <Badge className="rounded-full border border-emerald-300/40 bg-emerald-500/15 text-[10px] text-emerald-100">Computer Graphics</Badge>
              </div>
            </CardContent>
            </Card>
          </Interactive3DCard>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default Skills