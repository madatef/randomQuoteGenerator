'use-client'
import React from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';


const MyConfetti =  () => {
  const {width, height} = useWindowSize();
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}

export default MyConfetti