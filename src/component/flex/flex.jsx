import * as S from './flex.style'

const Flex = ({children, gap, padding, vertical = false}) => {
  return <S.Flex gap={gap} padding={padding} vertical={vertical} >{children}</S.Flex>
}

export default Flex