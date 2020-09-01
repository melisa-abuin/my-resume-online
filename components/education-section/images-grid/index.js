import { Arrow, Column, Container, Image, Paragraph, Selected, Title, Wrapper } from './styles'

const data = [
  {
    title: 'Universidad nacional de la matanza', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    image: 'https://www.vivieloeste.com.ar/wp-content/uploads/2018/05/unlam.jpg'
  },
  {
    title: 'Polo tecnologico', 
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
    image: 'https://bahiacesar.files.wordpress.com/2019/11/polo-tecnologico-unlam.jpg?w=672&h=372&crop=1'
  }
]

export default function ImagesGrid() {
  const visibleItem = 0;
  return (
    <Wrapper>
      <Container>
        <Arrow src='/chevron-shape.png' />
        {data.map(( item, index ) => 
          <Selected key={index} visible={index === visibleItem}>
            <Column>
              <Title>{item.title}</Title>
              <Paragraph>{item.description}</Paragraph>
            </Column>
            <Column>
              <Image src={item.image} alt='main-image' />
            </Column>
            <Arrow right src='/chevron-shape.png' />
          </Selected>
        )}
      </Container>
    </Wrapper>
  )
}
