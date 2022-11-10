import Image from 'next/image'
import { ProductProps } from 'pages/product/[id]'
import * as S from './styles'

export default function ProductLayout({ product }: ProductProps) {
  return (
    <S.ProductContainer>
      <S.ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </S.ImageContainer>
      <S.IProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>
        <p>{product.description}</p>
        <button>Comprar agora</button>
      </S.IProductDetails>
    </S.ProductContainer>
  )
}
