import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { Experience } from './components/Experience'

function App() {

  return (
    <Canvas camera ={{
      fov: 25, 
      position: [6, 9, 7],
    }}>
      <Experience />
    </Canvas>
  )
}

export default App
