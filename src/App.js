import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef} from 'react'

function Box() { 
	const ref = useRef()
	useFrame((state) => { 
		ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2
		ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 2
		ref.current.position.y = Math.sin(state.clock.elapsedTime) * 2
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
