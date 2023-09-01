run: npm start
optionaly remove ssl flag
https://docs.pmnd.rs/react-three-fiber/getting-started/introduction 

https://threejs.org/docs/index.html#manual/en/introduction/Creating-a-scene

https://codesandbox.io/s/2ycs3?file=%2Fsrc%2FBananas.js

https://github.com/pmndrs/react-postprocessing

https://github.com/pmndrs/drei

https://vitejs.dev/

https://godly.website/

https://github.com/pmndrs/gltfjsx

https://gltf.report/

https://sketchfab.com/


<mesh ref={ref} position={ [0, 0, clicked ? 1 : 0]} onClick={ ()=>setClicked(!clicked)}>
 or
 useFrame((state) => { 
        ref.current.position.z = THREE.MathUtils.lerp(ref.current.position.z, clicked ? 1 : 0)
	})