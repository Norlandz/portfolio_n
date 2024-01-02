import { Avatar, Link, Paper, Typography, Box as BoxMui } from '@mui/material';
import React, { useRef, useState } from 'react';
import { GlassShatteredEffectRegister } from './util/html/GlassShatteredEffectRegister';
import { Canvas, ThreeElements, useFrame, useLoader, useThree } from '@react-three/fiber';
// import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
// import { OrbitControls, Box } from 'drei';
import { Box as BoxR3F, Icosahedron, OrbitControls } from '@react-three/drei';
import { TextureLoader, Mesh } from 'three';
import * as THREE from 'three';
import pathFile_textture from './assets/3js/texture.jpg';
import pathFile_glass from './assets/glass - vertical.png';
import { BoxGn } from './utilComponent/BoxGn';

export const ProjectAvatarPart: React.FC = () => {
  const [animateShow_rst, set_animateShow_rst] = React.useState(false);
  const elt_animateShow_Avatar_ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          set_animateShow_rst(true);
        } else {
          set_animateShow_rst(false);
        }
      }
    });
    observer.observe(elt_animateShow_Avatar_ref.current!);
  }, []);

  return (
    <>
      <BoxGn
        sx={{
          // display: 'flex',
          position: 'relative',
        }}
      >
        <BoxGn
          sx={{
            // backgroundColor: 'rgba(0,0,0,1)',
            backgroundImage: 'linear-gradient(120deg, rgba(40, 40, 40, 0.95) 1%, rgba(0,0,0, 1) 50%, rgba(0,0,0, 1) 99%)',
            position: 'absolute',
            top: '-90px',
            // left: 0,
            width: '100%',
            // height: '1600px',

            // '::after': {
            //   //   box-shadow: inset 0 0 502px 260px rgb(200 0 0 / 50%);
            //   //   -webkit-clip-path: inset(0px -503px 0px 0px);
            //   //   /* clip-path: inset(0px 0px 0px 1000px); */
            //   //   content: "";
            //   //   display: block;
            //   //   height: 100%;
            //   //   position: absolute;
            //   //   top: 0;
            //   //   width: 100%;
            //   //   z-index: 100;
            //   //   /* background: aliceblue; */
            //   //   /* border: 10px solid aliceblue; */
            // },
          }}
          data-aos="fade"
          data-aos-offset="200"
          data-aos-delay="0"
          data-aos-duration="100"
          data-aos-easing="ease-in-out"
          data-aos-mirror="true"
          data-aos-once="false"
          // data-aos-anchor-placement="top-center"
        >
          <BoxGn
            sx={{
              // float: 'right',
              position: 'absolute',
              // right: 0,
              left: '800px',
              // width: '100%',
              width: 'calc(100% - 800px)',
              height: '100%',
              backgroundImage: 'linear-gradient(90deg, rgba(17, 17, 17, 1) 0%, rgba(0,0,0, 1) 100px)',
              opacity: 0.5,
              zIndex: 1,
            }}
          ></BoxGn>
          <img
            // src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/crayon.jpg"
            src={pathFile_glass}
            style={{
              // waste too much time a mess -- @pb cannot take image after css effect and apply to Canvas ; cannot make transparent png from 3js ; .dfs
              // objectFit: 'cover',
              // aspectRatio: '1',
              // width: '100%',
              // height: 'auto',
              opacity: 0.5,
              //   box-shadow: 0 0 502px 26px rgb(199 199 199 / 50%);
              //   clip-path: inset(0px -503px 0px 0px);
            }}
            alt=""
            ref={React.useCallback(async (elt: HTMLImageElement | null) => {
              if (elt instanceof HTMLImageElement) {
                if (elt.parentElement == null) throw new TypeError();
                new GlassShatteredEffectRegister(elt, elt.parentElement);
                // javascript - Draw image with transparent background on canvas - Stack Overflow
                // https://stackoverflow.com/questions/53276849/draw-image-with-transparent-background-on-canvas
                //
                // How to create transparency in images with html5 canvas
                // https://www.patrick-wied.at/blog/how-to-create-transparency-in-images-with-html5canvas
                //
                // javascript - Scaling an image to fit on canvas - Stack Overflow
                // https://stackoverflow.com/questions/23104582/scaling-an-image-to-fit-on-canvas
                // const dataUrl = await htmlToImage.toPng(elt);
                // console.log(dataUrl);
                // const img = new Image();
                // img.src = dataUrl;
                // new GlassShatteredEffectRegister(img, elt.parentElement);
              }
            }, [])}
          />
        </BoxGn>
        <BoxGn
          ref={elt_animateShow_Avatar_ref}
          sx={{
            padding: 2,
            margin: 1,
            position: 'relative',
            // width: '100%',
            // flexGrow: 1,
          }}
        >
          <Avatar
            sx={{
              //                   // transform: 'scale(0.0)',
              //                   transform: animateShow_rst ? 'scale(5.0)' : 'scale(0.0)',
              //                   transition: 'transform 0.5s ease-in-out',
              //
              //                   // css - CSS3 Spin Animation - Stack Overflow
              //                   // https://stackoverflow.com/questions/14859322/css3-spin-animation
              //                   '@keyframes spin': {
              //                     from: {
              //                       transform: 'rotate(0deg)',
              //                     },
              //                     to: {
              //                       transform: 'rotate(359deg)',
              //                     },
              //                   },
              //
              //                   ...(animateShow_rst
              //                     ? {
              //                         translate: '38vw 8em',
              //                         // transform: 'scale(5.0)',
              //                         animation: 'spin 1s linear infinite',
              //                       }
              //                     : undefined),
              // CSS multiple animation with different delay - Stack Overflow
              // https://stackoverflow.com/questions/68464754/css-multiple-animation-with-different-delay
              // []
              // animation: bubble 1.0s forwards;
              // <>
              // https://stackoverflow.com/questions/12991164/maintaining-the-final-state-at-end-of-a-css-animation

              // []
              //     transform: rotate(15deg) translate(-20px,0px);
              // <>
              // https://stackoverflow.com/questions/10765755/how-to-apply-multiple-transforms-in-css

              // []
              // The answer to the base question, as far as I can tell, is still "no".
              // <>
              // https://stackoverflow.com/questions/49668551/can-we-restrict-css-keyframe-animations-to-a-scope

              position: 'absolute',

              '@keyframes scaleUp': {
                from: {
                  transform: 'scale(0.0)',
                },
                to: {
                  transform: 'scale(5.0)',
                },
              },

              '@keyframes translateGn': {
                from: {
                  top: 0,
                  left: 0,
                  // must else blink ...
                },
                to: {
                  // translate: '38vw 8em',
                  // translate: '50% 8em',
                  // translate: '50% 8em', ;not_working; ............. just use abs position...
                  left: '50%',
                  top: '8em',
                  // transition: 'left 0.3s ease, top 0.3s ease',
                },
              },

              '@keyframes spin': {
                from: {
                  transform: 'rotate(0deg) scale(5.0)',
                },
                to: {
                  transform: 'rotate(359deg) scale(5.0)',
                },
              },

              // animation: animateShow_rst
              //   ? 'scaleUp 0.9s linear forwards' + //
              //     // ',\n translateGn 1.1s linear forwards' +
              //     ',\n left 1.1s ease forwards, top 1.1s ease forwards' +
              //     ',\n spin 3s linear 4s infinite forwards'
              //   : undefined,
              animation: animateShow_rst
                ? 'scaleUp 0.9s linear forwards' + //
                  ',\n translateGn 1.1s linear forwards' +
                  // ',\n left 1.1s ease forwards, top 1.1s ease forwards' +
                  ',\n spin 3s linear 4s infinite forwards'
                : undefined,

              // #>>
              // padding: 2
            }}
            src={'https://media.licdn.com/dms/image/D4E35AQGJ8pSLL-BBkA/profile-framedphoto-shrink_200_200/0/1685043262126?e=1704672000&v=beta&t=DeKKVDmEUZw0OGG4fnnsJol0FWGFIT_m-bcdCdJA9b8'}
            alt="LZ"
          />
          <Typography
            color="white"
            sx={{
              position: 'absolute',

              '@keyframes scaleUp_Text': {
                from: {
                  transform: 'scale(0.0)',
                },
                to: {
                  transform: 'scale(3.0)',
                },
              },

              '@keyframes translateGn_Text': {
                from: {
                  top: 0,
                  left: 0,
                  // must else blink ...
                },
                to: {
                  // translate: '33vw 24em',
                  left: '45%',
                  // left: '35vw',
                  // textAlign: 'center',
                  top: '24em',
                },
              },

              animation: animateShow_rst
                ? 'scaleUp_Text 0.9s linear forwards' + //
                  ',\n translateGn_Text 1.1s linear forwards'
                : undefined,
            }}
          >
            Statistics ; Physics ; Computer Science ;
          </Typography>
        </BoxGn>
        <BoxGn
          sx={{
            // []
            //
            // overflow: hidden; for that container, and we can wait for the fix.
            // <>
            // https://github.com/michalsnik/aos/issues/416
            // ... bad @messy
            overflow: 'hidden',
            position: 'relative',
            // width: 'max-content',
            // height: 'max-content',
            // top: 0,
            // right: 2,
            width: '600px',
            height: '850px',
            left: 'calc(100vw - 1000px)',
          }}
        >
          <BoxGn
            style={{
              position: 'absolute',
              top: 0,
              right: 2,
              // width: '0',
              width: '600px',
              // backgroundColor: 'rgba(255, 255, 255, 1)',
              padding: '0.5em',
              height: '850px',
              overflow: 'hidden',
            }}
            data-aos="slide-left"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-mirror="true"
            data-aos-once="false"
            data-aos-anchor-placement="top-center"
          >
            <Typography variant="h4" color={'white'}>
              Random Documentation
            </Typography>
            <Paper elevation={3} sx={{ padding: '0.5em' }}>
              <Link href="https://norlandz.github.io/NttDrawAndChat/DrawAndChatApp_Instruction/html/outhwp.html">https://norlandz.github.io/NttDrawAndChat/DrawAndChatApp_Instruction/html/outhwp.html</Link>
              <iframe
                sandbox=""
                src="https://norlandz.github.io/NttDrawAndChat/DrawAndChatApp_Instruction/html/outhwp.html"
                style={{
                  width: '1400px',
                  height: '2000px',
                  // zoom: 0.3,
                  transform: 'scale(0.4)',
                  // []
                  //   transform-origin: 0 0;
                  // <>
                  // https://stackoverflow.com/questions/166160/how-can-i-scale-the-content-of-an-iframe
                  transformOrigin: 'top left',
                }}
                // ref={(elt: HTMLIFrameElement | null) => {
                //   if (elt instanceof HTMLIFrameElement) {
                //     // javascript - How to silence console output on an iframe - Stack Overflow
                //     // https://stackoverflow.com/questions/28601512/how-to-silence-console-output-on-an-iframe
                //     elt.contentWindow!.console.log = () => {};
                //   }
                // }}
              ></iframe>
            </Paper>
          </BoxGn>
        </BoxGn>
      </BoxGn>
    </>
  );
};

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
