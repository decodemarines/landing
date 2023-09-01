import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber'
import { useRef ,useState} from 'react'
import * as THREE from 'three'

function Box() { 
	const ref = useRef()
	// useFrame((state) => { 
	// 	ref.current.position.x = Math.sin(state.clock.elapsedTime) * 2
	// 	ref.current.rotation.y = Math.sin(state.clock.elapsedTime) * 2
	// 	ref.current.position.y = Math.sin(state.clock.elapsedTime) * 2
	// })
	const [clicked,setClicked] = useState(false)

	useFrame((state) => { 
        ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, clicked ? 1 : 0, 0.1)
	})

	return (
		<mesh ref={ref} onClick={ ()=>setClicked(!clicked)}>
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
