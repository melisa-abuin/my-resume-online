import { Body, Card, Icon, ImageContaier, Title, Wrapper } from './styles'
import { useTranslation } from 'react-i18next'
import { PageSection } from '..'

export default function Summary() {
  const { t } = useTranslation('common')

  return (
    <PageSection>
      <Wrapper>
        <Card>
          <ImageContaier>
            <Icon url="/education-image.jpg" />
            <Title>{t("summary.education")}</Title>
          </ImageContaier>
          <Body>{t("summary.education-description")}</Body>
        </Card>
        <Card>
          <ImageContaier>
            <Icon url="/work-image.jpg" />
            <Title>{t("summary.work")}</Title>
          </ImageContaier>
          <Body>{t("summary.work-description")}</Body>
        </Card>
        <Card>
          <ImageContaier>
            <Icon url="/skills-image.jpg" />
            <Title>{t("summary.skills")}</Title>
          </ImageContaier>
          <Body>{t("summary.skills-description")}</Body>
        </Card>
      </Wrapper>
    </PageSection>
  )
}