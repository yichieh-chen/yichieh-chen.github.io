import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Interactive3DCard from '@/components/aceternity/Interactive3DCard'
import ScrollReveal from '@/components/aceternity/ScrollReveal'
import TypewriterText from '@/components/aceternity/TypewriterText'
import profileCatImage from '@/assets/profile-cat.jpg'

function About() {
  const profileImagePath = profileCatImage

  return (
    <section id="about" className="section-animate px-4 py-14 sm:px-0">
      <div className="mx-auto w-[min(1120px,92vw)]">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.24em] text-primary">About</p>
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">About Me</h2>
          </div>
          <Badge variant="secondary" className="hidden rounded-full px-3 py-1 text-xs md:inline-flex">Front-end Learner</Badge>
        </div>

        <ScrollReveal>
          <Interactive3DCard className="rounded-3xl" intensity={9}>
            <Card className="terminal-pixel relative overflow-hidden rounded-3xl border border-emerald-400/45 bg-[#091320]/90 text-emerald-100 shadow-2xl shadow-emerald-500/20 backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-0 terminal-scanlines opacity-50" />
            <div className="relative z-10 flex items-center justify-between border-b border-emerald-400/30 bg-[#0e1c2d] px-5 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/90" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/90" />
              </div>
              <p className="text-[10px] tracking-[0.16em] text-emerald-200/85">about_terminal.exe</p>
            </div>

            <div className="relative z-10 grid gap-8 p-6 md:grid-cols-[280px_1fr] md:p-8">
              <div className="relative mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-2xl border border-emerald-400/45 bg-[#0b1a2b] text-sm font-bold tracking-[0.16em] text-emerald-200">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(110,255,190,0.14),transparent_60%)]" />
                <img
                  src={profileImagePath}
                  alt="Profile"
                  className="relative h-full w-full object-cover opacity-92"
                  onError={(event) => {
                    event.currentTarget.style.display = 'none'
                    const fallback = event.currentTarget.nextElementSibling
                    if (fallback) {
                      fallback.style.display = 'flex'
                    }
                  }}
                />
                <span className="absolute inset-0 hidden items-center justify-center">PHOTO</span>
              </div>
              <div className="space-y-5">
                <CardHeader className="p-0">
                  <p className="text-[11px] tracking-[0.14em] text-emerald-300/80">$ ./introduce --profile EJ</p>
                  <CardTitle className="text-lg leading-relaxed text-emerald-100 md:text-xl">
                    <TypewriterText
                      words={[
                        'Hi! My name is EJ.',
                        'I am a NTUST CSIE student.',
                        'Interested in programming.',
                      ]}
                      speed={60}
                      deleteSpeed={34}
                      pauseMs={1200}
                      cursorClassName="bg-emerald-300"
                    />
                  </CardTitle>
                  <CardDescription className="font-mono text-sm leading-7 text-emerald-100/80 md:text-base">
                    Welcome to my portfolio. I focus on front-end development, enjoy learning new technologies, and love turning creative ideas into real web experiences.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-5 p-0">
                  <p className="font-mono text-sm leading-7 text-emerald-100/75 md:text-base">
                    I am currently learning React and exploring how to build user-friendly interfaces. Through consistent practice and curiosity, I am working toward becoming a strong full-stack developer.
                  </p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Card className="rounded-2xl border border-emerald-400/40 bg-emerald-500/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                      <CardContent className="space-y-2 p-4">
                        <p className="text-sm font-semibold text-emerald-200">Focus Areas</p>
                        <p className="font-mono text-sm text-emerald-100/75">Front-end Development, UI/UX Design, Computer Graphics</p>
                      </CardContent>
                    </Card>
                    <Card className="rounded-2xl border border-cyan-300/40 bg-cyan-500/10 backdrop-blur-sm transition-transform duration-300 hover:-translate-y-1">
                      <CardContent className="space-y-2 p-4">
                        <p className="text-sm font-semibold text-cyan-100">Interests</p>
                        <p className="font-mono text-sm text-cyan-50/75">Programming, Playing Games, Exploring New Technologies</p>
                      </CardContent>
                    </Card>
                  </div>
                </CardContent>
              </div>
            </div>
            </Card>
          </Interactive3DCard>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About