import { useEffect, useState } from 'react'
import Flex from './component/flex/flex'
import Circle from './component/circle/circle'
import { SmartCircle } from './component/smart-circle'

const App = () => {
  const limit = 115000
  const [test, testNow] = useState(0)
  const [length, setLength] = useState(100)
  const [variant, toggle] = useState('old')

  const handle = (e) => {
    const { value } = e.target
    setLength(value)
  }

  useEffect(() => {
    if (test < 500) {
      // console.log(test)
      testNow((s) => s + 1)
    }
  }, [test])

  const list = Array.from(
    { length: length < limit ? length : limit },
    (_, k) => {
      return {
        id: k + 1,
        left: Math.floor(Math.random() * 300),
        top: Math.floor(Math.random() * 500) + 100,
      }
    }
  )

  // console.log(length, list)
  return (
    <div>
      <h1>Hello, test: {test}</h1>

      <input type='number' min={0} value={length} onChange={handle} />

      <Flex gap={32}>
        {variant === 'old' &&
          list.map(({ id, top, left }, k) => {
            return (
              <Circle
                list={list}
                key={k}
                id={id}
                top={top}
                left={left}
              ></Circle>
            )
          })}
        {variant === 'new' && <SmartCircle list={list}></SmartCircle>}
      </Flex>
    </div>
  )
}

export default App
