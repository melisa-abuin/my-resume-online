import { Container, Image } from './styles'

export default function Gallery() {
    return (
      <Container>
        <Image third left src='/saga-course.png'/>
        <Image second left src='/saga-course.png'/>
        <Image first src='/saga-course.png'/>  
        <Image second right src='/saga-course.png'/>
        <Image third right src='/saga-course.png'/>
      </Container>
    )
}