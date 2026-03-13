import { Badge } from '@/components/ui/badge'
import Interactive3DCard from '@/components/aceternity/Interactive3DCard'
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
          {skills.map((skill) => (
            <Interactive3DCard key={skill.name} className="rounded-2xl" intensity={8}>
              <Card className="overflow-hidden rounded-2xl border-border/70 bg-card/85 shadow-lg shadow-cyan-100/45 backdrop-blur-sm transition-transform hover:-translate-y-1">
                <CardHeader className="space-y-3 pb-2">
                  <div className="flex items-center justify-between gap-3">
                    <CardTitle className="text-lg">{skill.name}</CardTitle>
                    <Badge className="rounded-full px-3 py-1">{skill.level}%</Badge>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-[linear-gradient(90deg,oklch(0.6_0.2_31),oklch(0.8_0.16_65),oklch(0.74_0.16_220))]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardHeader>
              </Card>
            </Interactive3DCard>
          ))}
        </div>

        <Interactive3DCard className="mt-6 rounded-3xl" intensity={6}>
          <Card className="bg-secondary/35 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-xl">Learning Journey</CardTitle>
              <CardDescription className="text-sm leading-7 md:text-base">
                I am currently focused on learning OpenGL and strengthening my computer graphics foundation. I am also
                practicing a little Frontend design to improve layout, visual hierarchy, and overall UI quality.
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">OpenGL</Badge>
                <Badge variant="secondary">Frontend Design</Badge>
                <Badge variant="secondary">Computer Graphics</Badge>
              </div>
            </CardContent>
          </Card>
        </Interactive3DCard>
      </div>
    </section>
  )
}

export default Skills