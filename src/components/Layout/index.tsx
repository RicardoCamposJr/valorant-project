import { TLayout } from '@/types/components/Layout/TLayout'
import * as S from './styles'

const Layout: React.FC<TLayout> = ({children}) => {
  return (
    <S.LayoutContainer>
      {children}
    </S.LayoutContainer>
  )
}

export default Layout