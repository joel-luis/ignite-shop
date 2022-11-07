import Image from 'next/image'
import * as S from './styles'
import { useKeenSlider } from 'keen-slider/react'

import camiseta1 from 'assets/camisetas/1.png'
import camiseta2 from 'assets/camisetas/2.png'
import camiseta3 from 'assets/camisetas/3.png'

import 'keen-slider/keen-slider.min.css'

export function HomeLayout() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })
  return (
    <S.HomeContainer ref={sliderRef} className="keen-slider">
      <S.Product className="keen-slider__slide">
        <Image src={camiseta1} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product className="keen-slider__slide">
        <Image src={camiseta2} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
      <S.Product className="keen-slider__slide">
        <Image src={camiseta3} width={520} height={480} alt="" />
        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </S.Product>
    </S.HomeContainer>
  )
}
