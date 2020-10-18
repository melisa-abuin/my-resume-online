import { Body, Card, Icon, Title, Wrapper } from './styles'
import { useTranslation } from 'react-i18next'
import { PageSection } from '../../common'

export default function Summary() {
  const { t } = useTranslation('common')

  return (
    <PageSection>
      <Wrapper>
        <Card>
          <Icon src="/education-icon.png" />
          <Title>{t("summary.education")}</Title>
          <Body>{t("summary.education-description")}</Body>
        </Card>
        <Card>
          <Icon src="/work-experience-icon.png" />
          <Title>{t("summary.work")}</Title>
          <Body>{t("summary.work-description")}</Body>
        </Card>
        <Card>
          <Icon src="/skills-icon.png" />
          <Title>{t("summary.skills")}</Title>
          <Body>{t("summary.skills-description")}</Body>
        </Card>
      </Wrapper>
    </PageSection>
  )
}