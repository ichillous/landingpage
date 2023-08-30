import { Article, ArticleContent, ArticleMedia } from '@/components/article'
import { Layout } from '@/components/layout'

export default function AboutPage() {
  return (
    <Layout>
      <Article>
        <ArticleContent title="About Us">
          {/* prettier-ignore */}
          <h3>Who we are </h3>
          <p>
            We are a dedicated team of developers, educators, and scholars,
            committed to enriching spiritual and intellectual growth through
            technology. Our app serves as a bridge between learners seeking
            authentic Islamic knowledge and qualified teachers and institutions
            offering such wisdom.
          </p>
          <h3>Our Mission</h3>
          <p>
            Our mission is to make Islamic education accessible, engaging, and
            beneficial for everyone. With our platform, we aim to provide a
            one-stop solution for learning Quranic verses, understanding
            Hadiths, and connecting with knowledgeable teachers and esteemed
            institutions.
          </p>
          <h3>Why Choose Us?</h3>
          <ul>
            <li>
              <p>
                <strong>Authenticity:</strong> Our teachers and institutions go
                through a stringent verification process, ensuring you receive
                credible and reliable information.
              </p>
            </li>
            <li>
              <p>
                <strong>Accessibility:</strong> With our user-friendly interface
                and search functionality, you can easily find lessons, live
                rooms, and classes that best suit your learning style and
                schedule.
              </p>
            </li>
            <li>
              <p>
                <strong>Community:</strong> Our app fosters a supportive online
                community where learners and teachers can share resources,
                discuss topics, and advance collectively in their spiritual
                journeys.
              </p>
            </li>
          </ul>
        </ArticleContent>

        <ArticleMedia>
          <img
            alt="Lorem Picsum"
            className="mx-auto lg:aspect-[5/7] lg:w-full"
            width="420"
            height="640"
            src="https://picsum.photos/420/640?grayscale"
          />
        </ArticleMedia>
      </Article>
    </Layout>
  )
}
