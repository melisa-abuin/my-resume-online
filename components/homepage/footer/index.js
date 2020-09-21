import { Container, Item, Link, LinkImage } from './styles'
import { useTranslation } from 'react-i18next'

export default function Footer() {
  const { t } = useTranslation('common')
  
  return (
    <Container>
      <Link href="https://www.linkedin.com/in/melisa-abuin-99273b111/">
        <LinkImage src='/linkedin-icon.png'/> 
        <Item>{t("general.profile")}</Item>
      </Link>
      <Link href="https://github.com/Mel-A">
        <LinkImage src='/github-icon.png'/> 
        <Item>{t("general.repository")}</Item>
      </Link>
      <Link href="mailto:melisa.abuin@gmail.com?Subject=Website%20visitor">
        <LinkImage src='/gmail-icon.png'/> 
        <Item>{t("general.mail-user")}</Item>
      </Link>
    </Container>
  )
}