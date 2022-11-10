import Image from 'next/image'
import Link from 'next/link'

import { useKeenSlider } from 'keen-slider/react'
import { HomeProps, ProductsProps } from 'pages'

import * as S from './styles'
import 'keen-slider/keen-slider.min.css'

export function HomeLayout({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(({ id, name, imageUrl, price }: ProductsProps) => (
        <Link href={`/product/${id}`} key={id}>
          <S.Product className="keen-slider__slide">
            <Image src={imageUrl} width={520} height={480} alt="" />
            <footer>
              <strong>{name}</strong>
              <span>{price}</span>
            </footer>
          </S.Product>
        </Link>
      ))}
    </S.HomeContainer>
  )
}
