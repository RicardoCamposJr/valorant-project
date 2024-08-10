import Link from 'next/link'
import * as S from './styles'
import RiotLogo from '../Logos/RiotLogo'

const Navbar: React.FC = () => {
  return (
    <S.Container>
      <RiotLogo />
      <Link href={'/'} style={{ textDecoration: 'none' }}>
        <S.Text>Agentes</S.Text>
      </Link>
    </S.Container>
  )
}

export default Navbar
