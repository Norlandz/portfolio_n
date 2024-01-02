import { Box } from '@mui/material';
import React from 'react';

// export const BoxGn = React.forwardRef<typeof Box>((props: React.ComponentProps<typeof Box>, ref) => {
//   return <Box component="div" {...props} ref={ref} />;
// };
// export const BoxGn: React.FC<React.ComponentProps<typeof Box>> = (props) => {
//   // @ts-ignore
//   return <Box {...props} />;
// };
// React.Ref<unknown> | dk did those reall yjust unknown ... 
export const BoxGn = React.forwardRef((props: React.ComponentProps<typeof Box>, ref: React.ComponentRef<typeof Box>) => {
  // @ts-ignore
  return <Box {...props} ref={ref} />;
});

// []
// "build: "vite build".
// <>
// https://github.com/vitejs/vite/discussions/6716

// []
// Material-UI and @react-three/fiber
// <>
// https://stackoverflow.com/questions/68692230/ts-expression-produces-a-union-type-that-is-too-complex-to-represent-with-materi/69348340#69348340
//         // interface IntrinsicElements extends ThreeElements {
//         interface IntrinsicElements extends Pick<ThreeElements, 'ambientLight' | 'pointLight'> {

// diff --git a/dist/declarations/src/three-types.d.ts b/dist/declarations/src/three-types.d.ts
// index 7b2a48a3807fe97fc907326b1214497a8525483b..4cdbaebe8668c371bc60b63f6f62cf541e7a0b20 100644
// --- a/dist/declarations/src/three-types.d.ts
// +++ b/dist/declarations/src/three-types.d.ts
// @@ -385,7 +385,8 @@ export interface ThreeElements {
//  }
//  declare global {
//      namespace JSX {
// -        interface IntrinsicElements extends ThreeElements {
// +        // interface IntrinsicElements extends ThreeElements {
// +        interface IntrinsicElements extends Pick<ThreeElements, 'ambientLight' | 'pointLight' | 'mesh' | 'boxGeometry' | 'meshStandardMaterial' | 'planeGeometry' | 'meshBasicMaterial' | 'meshPhysicalMaterial' > {
//          }
//      }
//  }

// package.json & must specify version ..
