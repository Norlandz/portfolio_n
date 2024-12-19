import { Avatar, Link, Paper, Typography, Box as BoxMui } from '@mui/material';
import React, { useRef, useState } from 'react';
import { GlassShatteredEffectRegister } from '../util/html/GlassShatteredEffectRegister';
import { Canvas, ThreeElements, useFrame, useLoader, useThree } from '@react-three/fiber';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { OrbitControls, Box } from 'drei';
import { Box as BoxR3F, Icosahedron, OrbitControls } from '@react-three/drei';
import { TextureLoader, Mesh } from 'three';
import * as THREE from 'three';
import pathFile_textture from '../assets/3js/texture.jpg';
import pathFile_glass from '../assets/glass - vertical.png';
import { BoxGn } from '../utilComponent/BoxGn';

// React Three Fiber Documentation
// https://docs.pmnd.rs/react-three-fiber/getting-started/introduction
//
// Creating the Effect of Transparent Glass and Plastic in Three.js | Codrops
// https://tympanus.net/codrops/2021/10/27/creating-the-effect-of-transparent-glass-and-plastic-in-three-js/
//
// MeshPhysicalMaterial – three.js docs
// https://threejs.org/docs/#api/en/materials/MeshPhysicalMaterial

export const ThreejsCanvas: React.FC = () => {
  return (
    <Canvas style={{ width: '100%', height: '1000px', zIndex: 10, backgroundColor: 'rgba(40, 40, 40, 0.9)' }}>
      <Scene />
    </Canvas>
  );
};

const Scene: React.FC = () => {
  // useFrame(() => {
  //   camera.position.y += 0.01; // Example rotation animation
  //   camera.lookAt(0, 0, 0); // Focus the camera on the origin
  // });

  const { gl, scene, camera } = useThree();

  React.useEffect(() => {
    gl.render(scene, camera);
    console.log(gl.domElement.toDataURL('image/png'));

    // const renderer = new THREE.WebGLRenderer({ alpha: true });
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // renderer.setClearColor(0xffffff, 0);
    // renderer.render(scene, camera);
    // const screenshot = renderer.domElement.toDataURL('image/png');
    // console.log(screenshot);
  }, []);

  return (
    <>
      <ambientLight intensity={0.5} />
      {/* <pointLight position={[10, 10, 10]} /> */}
      <pointLight position={[-10, 10, 2]} />
      {/* <BoxObj position={[-4, 0, 0]} /> */}
      <GlassObj />
      <OrbitControls />
    </>
  );
};

// ~ import { OrbitControls } from '@react-three/drei'
// it was indeed aobut oribtcontrols, it just tsx ex didnt provide & documenataion didnt too, but jsx in codespace did

function BoxObj(props: ThreeElements['mesh']) {
  // This reference will give us direct access to the mesh
  const meshRef = useRef<Mesh>(null); // dk just type take & outcome usage
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (meshRef.current == null) throw new TypeError();
    meshRef.current.rotation.x += delta;
  });
  // Return view, these are regular three.js elements expressed in JSX
  return (
    <mesh {...props} ref={meshRef} scale={active ? 1.5 : 1} onClick={(event) => setActive(!active)} onPointerOver={(event) => setHover(true)} onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'grey' : 'green'} />
    </mesh>
  );
}

// const Glass = (props: ThreeElements['mesh']) => {
//   const glassRef = useRef();
//
//   // useFrame(() => {
//   //   // Rotate the glass mesh
//   //   if (glassRef.current) {
//   //     glassRef.current.rotation.x += 0.01;
//   //     glassRef.current.rotation.y += 0.01;
//   //   }
//   // });
//
//   return (
//     <mesh {...props} ref={glassRef}>
//       <boxGeometry args={[1, 0, ]} />
//       <meshPhysicalMaterial color={0xffffff} metalness={0} roughness={0} transmission={1} transparent opacity={0.5} />
//     </mesh>
//   );
// };

const GlassObj: React.FC = () => {
  const texture = useLoader(TextureLoader, pathFile_textture);

  return (
    <>
      {/* <mesh position={[0, 0, -2]}>
        <planeGeometry args={[5, 5]} />
        <meshBasicMaterial map={texture} />
      </mesh> */}

      <mesh position={[0, 0, -2]}>
        <planeGeometry args={[15, 10]} />
        <meshBasicMaterial color={'rgb(40, 40, 40)'} opacity={0.5} />
        {/* <meshPhysicalMaterial
          //
          // color={'rgba(40, 40, 40, 0.1)'}
          transmission={1}
          roughness={0.3}
          thickness={1}
        /> */}
      </mesh>

      <Icosahedron args={[1, 15]}>
        {/* <mesh rotation={[0, 0, 0]}> */}
        {/* <sphereGeometry args={[1, 16, 16]} /> */}
        <meshPhysicalMaterial
          //
          transmission={1}
          roughness={0.3}
          thickness={1}
        />
        {/* <meshStandardMaterial color="hotpink" transparent /> */}
        {/* </mesh> */}
      </Icosahedron>
    </>
  );
};
