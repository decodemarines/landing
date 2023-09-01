import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef ,useState} from 'react'
import * as THREE from 'three'

function Box() { 
	const ref = useRef()
	const { viewport} = useThree()
	const [data] = useState({
		// x: 0,
		x: THREE.MathUtils.randFloatSpread(viewport.width), // 6 :from -3 to 3
		y: 0,
	})

	useFrame((state) => { 
		ref.current.position.set(0, (data.y += 0.3), 0)
		
		if (data.y > viewport.height / 1.5) { // falls back when reaches 2 to -2
			data.y = -viewport.height / 1.5
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
			 < Box />
			 < Box />
			
	    </Canvas>
	 )
}
