'use-client'
import React, { useEffect, useState } from 'react'
import Confetti from 'react-confetti'


const MyConfetti =  () => {
  const [windowSize, setWindowSize] = useState({width: 400, height: 930});
  const handleResize = () => {
    setWindowSize({width: window.innerWidth, height: window.innerHeight});
  }
    useEffect(() => {
        window.onresize = () => handleResize();
    })

  return (
    <Confetti  
      width={windowSize.width}
      height={windowSize.height}
    />
  )
}

export default MyConfetti