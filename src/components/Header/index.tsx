import logoImg from 'assets/logo.svg'
import Image from 'next/image'
import * as S from './styles'

export function Header() {
  return (
    <S.Header>
      <Image src={logoImg} alt="" />
    </S.Header>
  )
}
