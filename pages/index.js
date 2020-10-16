import * as component from '../components/homepage'
import * as education from '../components/education-section'
import * as knowledge from '../components/knowledge-section'
import * as experience from '../components/work-experience-section'


export default function Home() {
  return (
    <>
      <component.MainBanner />
      <component.Thumbnail />
      <component.Summary />
      <education.ImagesGrid />
      <knowledge.Banner />
      <experience.Dropdown />
      <component.Footer />
    </>
  )
}
