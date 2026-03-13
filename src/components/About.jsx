import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
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

        <Card className="overflow-hidden bg-card/95 shadow-xl shadow-orange-100/60">
          <div className="grid gap-8 p-6 md:grid-cols-[280px_1fr] md:p-8">
            <div className="relative mx-auto flex h-64 w-64 items-center justify-center overflow-hidden rounded-full border border-border/70 bg-gradient-to-br from-orange-100 via-orange-50 to-cyan-100 text-sm font-bold tracking-[0.16em] text-muted-foreground">
              <img
                src={profileImagePath}
                alt="Profile"
                className="h-full w-full object-cover"
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
                <CardTitle className="text-2xl leading-tight md:text-3xl">Hi! I am a passionate developer.</CardTitle>
                <CardDescription className="text-base leading-7">
                  Welcome to my portfolio. I focus on front-end development, enjoy learning new technologies, and love turning creative ideas into real web experiences.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-5 p-0">
                <p className="text-sm leading-7 text-muted-foreground md:text-base">
                  I am currently learning React and exploring how to build user-friendly interfaces. Through consistent practice and curiosity, I am working toward becoming a strong full-stack developer.
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Card className="bg-secondary/45">
                    <CardContent className="space-y-2 p-4">
                      <p className="text-sm font-semibold">Focus Areas</p>
                      <p className="text-sm text-muted-foreground">Front-end Development, UI/UX Design</p>
                    </CardContent>
                  </Card>
                  <Card className="bg-accent/25">
                    <CardContent className="space-y-2 p-4">
                      <p className="text-sm font-semibold">Interests</p>
                      <p className="text-sm text-muted-foreground">Programming, Exploring New Technologies</p>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default About