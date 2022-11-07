import logoImg from 'assets/logo.svg'
import * as S from './styles'

export function Header() {
  return (
    <S.Container>
      <S.Header>
        <img src={logoImg.src} alt="" />
      </S.Header>
    </S.Container>
  )
}
