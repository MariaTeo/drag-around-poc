import { useEffect } from 'react'
import * as S from './circle.style'

const Circle = ({onClick, left, top, list}) => {

  useEffect(() => {
  document.addEventListener('drag', (e) => console.log(e.clientX, e.clientY))
  }, [])

  const mouseMove = () => {
  document.addEventListener('drag', (e) => console.log(e.clientX, e.clientY))

 }

  return <S.Circle list={list} left={left} top={top}></S.Circle>
}

export default Circle