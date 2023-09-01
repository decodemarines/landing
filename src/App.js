import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef} from 'react'

function Box() { 
	const ref = useRef()
	useFrame(() => { 
		ref.current.position.x += 0.02
		ref.current.rotation.y += 0.02
	})

	return (
		<mesh ref={ ref}>
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
