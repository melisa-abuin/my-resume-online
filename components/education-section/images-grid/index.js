import { Arrow, Carousel, Column, Container, LinearRectangle, Image, Paragraph, Rectangle, Selected, Title, Wrapper } from './styles'
import React, { useState } from 'react'

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
  const [ visible, setVisible ] = useState(0)  
  const numberOfItems = data.length;
  return (
    <Wrapper>
      <Container>
        <Arrow src='/chevron-shape.png' onClick={() => setVisible(visible === 0  ? numberOfItems - 1 : visible - 1 )} />
        <Carousel>
          {data.map(( item, index ) => 
            <Selected key={index} visible={index === visible}>
              <Column>
                <Title>{item.title}</Title>
                <Paragraph>{item.description}</Paragraph>
              </Column>
              <Column>
                <Rectangle />
                <Image src={item.image} alt='main-image' />
                <LinearRectangle />
              </Column>
            </Selected>
          )}
        </Carousel>
        <Arrow right src='/chevron-shape.png' onClick={() => setVisible(visible === numberOfItems - 1 ? 0 : visible + 1 )} />
      </Container>
    </Wrapper>
  )
}
