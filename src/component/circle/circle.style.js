import styled from 'styled-components'

export const Circle = styled.div`
  width: 50px;
  height: 50px;
  position: fixed;
  left: ${({ left }) => left}px;
  top: ${({ top }) => top}px;
  background-image: ${({ list }) =>
    list.map(() => "url('/logo.svg')").join(', ')};
`
