import React from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useRef ,useState} from 'react'
import * as THREE from 'three'

function Box({ z}) { 
	const ref = useRef()
	const { viewport} = useThree()
	const [data] = useState({
		// x: 0,
		x: THREE.MathUtils.randFloatSpread(2), // 6 :from -3 to 3
		y: THREE.MathUtils.randFloatSpread(viewport.height),
	})

	useFrame((state) => { 
		ref.current.position.set(data.x * viewport.width, (data.y += 0.1), z)
		
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
export default function App({ count = 50}) {
	// return "hello"
	 return (
	 	<Canvas>
			 {Array.from({ length: count }, (_, i) => (<Box key={i} z={ -i}/>))}
			
	    </Canvas>
	 )
}
