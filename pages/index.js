import * as component from '../components/common'
import * as education from '../components/education-section'
import * as knowledge from '../components/knowledge-section'
import * as experience from '../components/work-experience-section'


export default function Home() {
  return (
    <>
      <component.Navbar />
      <component.MainBanner />
      <component.Thumbnail />      
      <component.Summary />
      <education.ImagesGrid />
      <knowledge.Banner />
      <experience.Background />
      <component.Footer />
    </>
  )
}
