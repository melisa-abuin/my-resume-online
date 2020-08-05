import * as component from '../components/homepage'

export default function Home() {
  return (
    <>
      <component.Navbar />
      <component.MainBanner />
      <component.Thumbnail />
      <component.Summary />
    </>
  )
}
