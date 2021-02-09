import * as S from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'TypeSript, ReactJS, NextJS e Styled Components'
}) => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem deum átomo e React Avançado escrito ao lado."
    ></S.Logo>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de fronte para uma tela com código."
    ></S.Illustration>
  </S.Wrapper>
)

export default Main
