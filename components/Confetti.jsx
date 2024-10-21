'use-client'
import React from 'react'
import Confetti from 'react-confetti'


const MyConfetti =  () => {
  const width = window.innerWidth;
  const height = window.innerHeight;
  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}

export default MyConfetti