import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

function Skills() {
  const skills = [
    { name: 'HTML', level: 85 },
    { name: 'CSS', level: 80 },
    { name: 'JavaScript', level: 75 },
    { name: 'React', level: 60 },
    { name: 'Node.js', level: 50 },
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
            <Card key={skill.name} className="overflow-hidden bg-card/95 transition-transform hover:-translate-y-1">
              <CardHeader className="space-y-3 pb-2">
                <div className="flex items-center justify-between gap-3">
                  <CardTitle className="text-lg">{skill.name}</CardTitle>
                  <Badge className="rounded-full px-3 py-1">{skill.level}%</Badge>
                </div>
                <div className="h-2 w-full overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-to-r from-primary via-orange-400 to-cyan-500" style={{ width: `${skill.level}%` }} />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>

        <Card className="mt-6 bg-secondary/40">
          <CardHeader>
            <CardTitle className="text-xl">Learning Journey</CardTitle>
            <CardDescription className="text-sm leading-7 md:text-base">
              I started my web development journey with HTML and CSS, then gradually built a strong foundation in JavaScript.
              I am currently diving deeper into React and also building practical backend knowledge with Node.js. I believe
              continuous learning is the key to becoming a great developer.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary">Continuous Learning</Badge>
              <Badge variant="secondary">Hands-on Practice</Badge>
              <Badge variant="secondary">User Experience</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}

export default Skills