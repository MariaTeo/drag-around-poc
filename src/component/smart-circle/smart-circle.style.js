import styled from 'styled-components'

export const SmartCircle = styled.div`
  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  pointer-events: none;
  background-position-x: ${({ list }) =>
    list.map(({ top, left }) => `${left}px`).join(', ')};
  background-position-y: ${({ list }) =>
    list.map(({ top, left }) => `${top}px`).join(', ')};

  background-image: ${({ list }) =>
    list.map(() => "url('/logo.svg')").join(', ')};
  background-repeat: ${({ list }) => list.map(() => 'no-repeat').join(', ')};
  background-size: ${({ list }) => list.map(() => '32px').join(', ')};
`
