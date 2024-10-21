'use-client'
import React from 'react'
import Confetti from 'react-confetti'


const MyConfetti =  () => {
  const width = Window.width;
  const height = Window.height;
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}

export default MyConfetti