import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef ,useState} from 'react'
import * as THREE from 'three'

function Box() { 
	const ref = useRef()
	const { viewport} = useThree()
	

	useFrame((state) => { 
		ref.current.position.y += 0.03 // speed to up
		// if (ref.current.position.y > 2) { // falls back when reaches 2 to -2
		// 	ref.current.position.y = -2
		// }
		if (ref.current.position.y > viewport.height / 1.5) { // falls back when reaches 2 to -2
			ref.current.position.y = -viewport.height / 1.5
		}
	})

	return (
		<mesh ref={ref} >
			<boxGeometry />
	 		<meshBasicMaterial color='aqua' /> 
	   </mesh> 
    )
}
export default function App() {
	// return "hello"
	 return (
	 	<Canvas>
           < Box />
	    </Canvas>
	 )
}
