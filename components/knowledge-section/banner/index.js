import { Container , Description, Image, Title, Wrapper } from './styles'
import Gallery from '../gallery'
import { useTranslation } from 'react-i18next'

const Banner = () => {
  const { t } = useTranslation('common')
    return (
      <Wrapper>
        <Image url="/desk-image.jpg" />
        <Container>
          <Title>{t('knowledge.title')}</Title>
          <Description>{t('knowledge.body')}</Description>
          <Gallery />
        </Container>
      </Wrapper>
    )
}


export default Banner