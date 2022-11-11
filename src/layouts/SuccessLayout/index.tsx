import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { SuccessProps } from 'pages/success'
import * as S from './styles'

export function SuccesLayout({ customerName, product }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      <S.SuccessContainer>
        <h1>Compra efetuada!</h1>
        <S.ImageContainer>
          <Image src={product.imageUrl} width={120} height={110} alt="" />
        </S.ImageContainer>
        <p>
          Uhuul <strong>{customerName}</strong>, sua{' '}
          <strong>{product.name}</strong> já está a caminho da sua casa.
        </p>
        <Link href="/">Voltar ao catálogo</Link>
      </S.SuccessContainer>
    </>
  )
}
