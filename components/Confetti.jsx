'use-client'
import React from 'react'
import Confetti from 'react-confetti'
import { useWindowSize } from 'react-use';


const MyConfetti =  () => {

  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
    />
  )
}

export default MyConfetti