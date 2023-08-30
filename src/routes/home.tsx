import { Hero } from '@/components/hero'
import { HeroIllustration } from '@/components/hero-illustration'
import { Layout } from '@/components/layout'

export default function HomePage() {
  return (
    <Layout>
      <Hero
        title="Husan App Coming soon"
        content="Sign up for our newsletter to get early beta access."
        illustration={<HeroIllustration />}
      />
    </Layout>
  )
}
