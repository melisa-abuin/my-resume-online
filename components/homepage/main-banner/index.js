import { Container, Image, Subtitle, Title } from './styles'
import { useTranslation } from "react-i18next";

export default function MainBanner() {
  const { t } = useTranslation('common');

    return (
      <Container>
        <Image src='https://i.ytimg.com/vi/-MKapbz0GIo/maxresdefault.jpg' alt='main-image' />
        <Title>{t('banner.title')}</Title>
        <Subtitle>{t('banner.subtitle')}</Subtitle>
      </Container>
    )
}