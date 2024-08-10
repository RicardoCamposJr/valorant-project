import { useEffect, useState, type ReactElement } from 'react'
import type { NextPageWithLayout } from './_app'
import Layout from '@/components/Layout'
import * as S from './styles'
import { TIndex } from '@/types/TIndex'

const Home: NextPageWithLayout<TIndex> = ({ children }) => {
  const [a, setA] = useState<boolean>(false)
  useEffect(() => {
    setA(true)
  }, [])

  return <S.Container>{children}</S.Container>
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default Home
