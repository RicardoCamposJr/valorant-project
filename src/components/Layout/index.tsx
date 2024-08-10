import { TLayout } from '@/types/components/Layout/TLayout'
import * as S from './styles'
import Navbar from '../Navbar'

const Layout: React.FC<TLayout> = ({ children }) => {
  return (
    <S.LayoutContainer>
      <Navbar />
      {children}
    </S.LayoutContainer>
  )
}

export default Layout
