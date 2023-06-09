/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/models/room.glb
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/room.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[1.03, 0, -0.94]}>
        <mesh geometry={nodes.wALLS.geometry} material={materials.Material} />
        <mesh geometry={nodes.wALLS_1.geometry} material={materials['[Color M00]']} />
        <mesh geometry={nodes.wALLS_2.geometry} material={materials['[Color M08]']} />
        <mesh geometry={nodes.wALLS_3.geometry} material={materials['[Wood Floor Dark]']} />
        <mesh geometry={nodes.wALLS_4.geometry} material={materials['[Mirror 01]']} />
        <mesh geometry={nodes.wALLS_5.geometry} material={materials['[Translucent Glass Gray]']} />
        <mesh geometry={nodes.wALLS_6.geometry} material={materials['[Wood Bamboo Medium]']} />
        <mesh geometry={nodes.wALLS_7.geometry} material={materials['[Leather Blue]']} />
        <mesh geometry={nodes.wALLS_8.geometry} material={materials['[Suede Blue]']} />
        <mesh geometry={nodes.wALLS_9.geometry} material={materials['[Translucent Glass Blue]']} />
        <mesh geometry={nodes.wALLS_10.geometry} material={materials['[Carpet Loop Pattern]']} />
        <mesh geometry={nodes.wALLS_11.geometry} material={materials.glow} />
      </group>
    </group>
  )
}

useGLTF.preload('/room.glb')
