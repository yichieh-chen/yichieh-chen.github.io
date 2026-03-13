import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import Interactive3DCard from '@/components/aceternity/Interactive3DCard'
import PixelWalker from '@/components/aceternity/PixelWalker'
import ScrollReveal from '@/components/aceternity/ScrollReveal'
import TerminalCard from '@/components/aceternity/TerminalCard'
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
            <TerminalCard
              title="about_terminal.exe"
              showDots
              className="shadow-2xl backdrop-blur-sm"
              contentClassName="space-y-0"
            >

            <div className="relative z-10 border-b border-emerald-400/25 bg-[#0c1a2b]/80 px-2 py-1">
              <PixelWalker />
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
            </TerminalCard>
          </Interactive3DCard>
        </ScrollReveal>
      </div>
    </section>
  )
}

export default About