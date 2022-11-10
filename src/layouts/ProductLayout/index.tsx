import * as S from './styles'

export default function ProductLayout() {
  return (
    <S.ProductContainer>
      <S.ImageContainer></S.ImageContainer>
      <S.IProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
          natus illum quisquam magni doloremque vel quasi. Debitis doloremque,
          quam ex soluta, aliquid itaque aliquam, quia velit consequatur
          provident ullam ad?
        </p>
        <button>Comprar agora</button>
      </S.IProductDetails>
    </S.ProductContainer>
  )
}
