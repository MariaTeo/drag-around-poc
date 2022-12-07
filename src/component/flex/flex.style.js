import styled from 'styled-components'

const getPadding = ({ padding }) => {
  const arr = Array.isArray(padding) ? padding : padding ? [padding] : []

  return arr.length
    ? `padding: ${arr.map((el) => `${el / 16}rem`).join(' ')};`
    : ''
}

export const Flex = styled.div`
  display: flex;
  ${({ vertical }) => (vertical ? 'flex-direction: column;' : '')}
  ${({ gap }) => (gap ? `gap: ${gap / 16}rem;` : '')}
  ${getPadding}
`
