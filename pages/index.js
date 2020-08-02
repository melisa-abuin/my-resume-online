import * as component from '../components/homepage'

export default function Home() {
  return (
    <div>
      <component.Navbar />
      <component.MainBanner />
      <component.Thumbnail />
      <component.Summary />
    </div>
  )
}
