import { Body, Card, Icon, ImageContaier, Title, Wrapper } from './styles'
import { useTranslation } from 'react-i18next'
import { PageSection } from '..'

const data = [
  {
    image: '/education-image.jpg',
    title: 'summary.education',
    body: 'summary.education-description'
  },
  {
    image: '/work-image.jpg',
    title: 'summary.work',
    body: 'summary.work-description'
  },
  {
    image: '/skills-image.jpg',
    title: 'summary.skills',
    body: 'summary.skills-description'
  }
]

const Summary = () => {
  const { t } = useTranslation('common')

  return (
    <PageSection>
      <Wrapper>
        {data.map(({ image, title, body }, index ) => 
          <Card key={index}>
            <ImageContaier>
              <Icon url={image} />
              <Title>{t(title)}</Title>
            </ImageContaier>
            <Body>{t(body)}</Body>
          </Card>
        )}
      </Wrapper>
    </PageSection>
  )
}

export default Summary