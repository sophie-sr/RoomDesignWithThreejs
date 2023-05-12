/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 public/models/room.glb
*/

//Code based on tutorial: https://www.youtube.com/watch?v=pXpckHDDNYo

import React, { useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll } from '@react-three/drei'
import gsap from "gsap";
//import { useFrame } from '@react-three/fiber';

export const FLOOR_HEIGHT = 2.3;
export const NB_FLOORS = 3;

export function Room(props) {
    const { nodes, materials } = useGLTF('./models/room.glb')
    const ref = useRef();
    const t1 = useRef();

    const scroll = useScroll();

    useFrame(() => {
        t1.current.seek(scroll.offset * t1.current.duration());
    });

    useLayoutEffect(() => {
        t1.current = gsap.timeline();

        //vertical animation
        t1.current.to(
            ref.current.position, 
            {
                duration: 2,
                y: -FLOOR_HEIGHT * (NB_FLOORS - 1),
            },
            0
        );
    }, []);

  return (
    <group {...props} dispose={null} ref={ref}>
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
  )
}

useGLTF.preload('./models/room.glb')
