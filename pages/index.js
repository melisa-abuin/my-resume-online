import * as component from '../components/homepage'
import * as education from '../components/education-section'

export default function Home() {
  return (
    <>
      <component.Navbar />
      <component.MainBanner />
      <component.Thumbnail />
      <component.Summary />
      <education.ImagesGrid />
    </>
  )
}
