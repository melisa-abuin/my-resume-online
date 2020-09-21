import { Arrow, Carousel, Circle, Column, Container, Indicator, LinearCircle, Image, Paragraph, Selected, Title, Swipper, Wrapper } from './styles'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

const data = [
  {
    title: 'education.university-name', 
    description: 'education.university-background',
    image: 'https://www.vivieloeste.com.ar/wp-content/uploads/2018/05/unlam.jpg'
  },
  {
    title: 'education.polo-name', 
    description: 'education.polo-background',
    image: 'https://bahiacesar.files.wordpress.com/2019/11/polo-tecnologico-unlam.jpg?w=672&h=372&crop=1'
  }
]

export default function ImagesGrid() {
  const [ visible, setVisible ] = useState(0)  
  const numberOfItems = data.length
  const { t } = useTranslation('common')

  return (
    <Wrapper>
      <Container>
        <Swipper onClick={() => setVisible(visible === 0  ? numberOfItems - 1 : visible - 1 )}>
          <Arrow src='/chevron-shape.png' />
          <Indicator>Next</Indicator>
        </Swipper>
        <Carousel>
          {data.map(( item, index ) => 
            <Selected key={index} visible={index === visible}>
              <Column>
                <Title>{t(item.title)}</Title>
                <Paragraph>{t(item.description)}</Paragraph>
              </Column>
              <Column>
                <Circle>
                  <LinearCircle>
                    <Image src={item.image} alt='main-image' />
                  </LinearCircle>
                </Circle>
              </Column>
            </Selected>
          )}
        </Carousel>
        <Swipper right onClick={() => setVisible(visible === numberOfItems - 1 ? 0 : visible + 1 )}>
          <Indicator right>Previous</Indicator>
          <Arrow right src='/chevron-shape.png'  />
        </Swipper>
      </Container>
    </Wrapper>
  )
}
