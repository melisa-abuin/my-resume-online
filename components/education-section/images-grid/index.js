import { Carousel, Circle, Column, Container, LinearCircle, Image, Paragraph, Selected, Title, Wrapper } from './styles'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import Arrow from '../arrow'

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

const ImagesGrid = () => {
  const [ visible, setVisible ] = useState(0)  

  const numberOfItems = data.length
  const { t } = useTranslation('common')
  
  return (
    <Wrapper>
      <Container>
        <Arrow onClick={() => setVisible(visible === 0  ? numberOfItems - 1 : visible - 1)} />
        <Carousel>
          {data.map(({ title, description, image }, index ) => 
            <Selected key={index} visible={index === visible}>
              <Column>
                <Title>{t(title)}</Title>
                <Paragraph>{t(description)}</Paragraph>
              </Column>
              <Column>
                <Circle>
                  <LinearCircle>
                    <Image src={image} alt='main-image' />
                  </LinearCircle>
                </Circle>
              </Column>
            </Selected>
          )}
        </Carousel>
        <Arrow right onClick={() => setVisible(visible === numberOfItems - 1 ? 0 : visible + 1 )} />
      </Container>
    </Wrapper>
  )
}

export default ImagesGrid;