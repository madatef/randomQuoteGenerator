'use-client'
import React, { useEffect } from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';


const MyConfetti =  () => {
    let width, height;
    useEffect(() => {
        width = window.innerWidth;
        height = window.innerHeight;
    })

  return (
    <Confetti
      width={width}
      height={height}
    />
  )
}

export default MyConfetti