import React from 'react'
import Slider from './Components/Slider/Slider'

const STEP = 10
const MIN = 0
const MAX = 100
const VALUE = 0

const App = () => {

  return (

    <Slider value={VALUE} step={STEP} min={MIN} max={MAX} diameterCircle={30} widthRangeSlider={500} />

  )
}

export default App
