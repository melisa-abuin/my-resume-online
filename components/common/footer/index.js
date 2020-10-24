import { Container, Item, Link, LinkImage } from './styles'
import { useTranslation } from 'react-i18next'

const data = [
  {
    link: 'https://www.linkedin.com/in/melisa-abuin-99273b111/', 
    image: '/linkedin-icon.png',
    text: 'general.profile'
  },
  {
    link: 'https://github.com/Mel-A', 
    image: '/github-icon.png',
    text: 'general.repository'
  },
  {
    link: 'mailto:melisa.abuin@gmail.com?Subject=Website%20visitor', 
    image: '/gmail-icon.png',
    text: 'general.mail-user'
  },
]

const Footer = () => {
  const { t } = useTranslation('common')
  
  return (
    <Container>
       {data.map(({ link, image, text }, index ) => 
        <Link key={index} href={link}>
          <LinkImage src={image}/> 
          <Item>{t(text)}</Item>
        </Link>
      )}
    </Container>
  )
}

export default Footer