import { Avatar, Link, Paper, Typography, Box as BoxMui } from '@mui/material';
import React, { useRef, useState } from 'react';
import { GlassShatteredEffectRegister } from './util/html/GlassShatteredEffectRegister';
// import pathFile_glass from './assets/glass.png';
import pathFile_glass from './assets/glass - vertical.png';
import pathFile_Avatar from './assets/avatar/Avatar AoH _restored.png';
import { BoxGn } from './utilComponent/BoxGn';
import { ThreejsCanvas } from './playground3js/playground3js';
import { AspectRatio, Height } from '@mui/icons-material';

const RandomDoc: React.FC<{
  link: string;
  title: string;
}> = ({ link, title }) => (
  <BoxGn
    style={{
      // position: 'absolute',
      // top: 0,
      // right: 2,
      // width: '0',
      width: '600px',
      // backgroundColor: 'rgba(255, 255, 255, 1)',
      padding: '0.5em',
      height: '850px',
      overflow: 'hidden',
    }}
  >
    <Typography variant="h4" color={'white'}>
      <Link href={link}>{title}</Link>
    </Typography>
    <Paper elevation={3} sx={{ padding: '0.5em' }}>
      <iframe
        sandbox=""
        src={link}
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
);

const GlassBall: React.FC<{
  set_triggerDoc: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ set_triggerDoc }) => (
  <BoxGn
    sx={{
      // backgroundColor: 'rgba(0,0,0,1)',
      backgroundImage: 'linear-gradient(90deg, rgba(40, 40, 40, 0.95) 1%, rgba(0,0,0, 1) 50%, rgba(0,0,0, 1) 99%)',
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
    // data-aos="fade"
    // data-aos-offset="200"
    // data-aos-delay="0"
    // data-aos-duration="100"
    // data-aos-easing="ease-in-out"
    // data-aos-mirror="true"
    // data-aos-once="false"
    // // data-aos-anchor-placement="top-center"
  >
    {/* <BoxGn
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
    ></BoxGn> */}
    <img
      // src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/crayon.jpg"
      src={pathFile_glass}
      style={{
        // waste too much time a mess -- @pb cannot take image after css effect and apply to Canvas ; cannot make transparent png from 3js ; .dfs
        // objectFit: 'cover',
        // aspectRatio: '1',
        width: '100%',
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
      onClick={() => {
        set_triggerDoc((triggerDoc) => !triggerDoc);
      }}
    />
  </BoxGn>
);

const AvatarPart: React.FC = () => (
  <BoxGn
    // ref={elt_animateShow_Avatar_ref}
    sx={{
      padding: 2,
      margin: 1,
      position: 'relative',
      // width: '100%',
      // flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <Avatar
      sx={{
        // transform: 'scale(5.0)',
        // aspectRatio: '1',
        height: '250px',
        width: 'auto',
        '@keyframes spin': {
          from: {
            // transform: 'rotate(0deg) scale(5.0)',
            transform: 'rotate(0deg)',
          },
          to: {
            transform: 'rotate(359deg)',
          },
        },

        animation: 'spin 12s linear infinite',
        // display: 'block',
      }}
      // src={'https://media.licdn.com/dms/image/D4E35AQGJ8pSLL-BBkA/profile-framedphoto-shrink_200_200/0/1685043262126?e=1704672000&v=beta&t=DeKKVDmEUZw0OGG4fnnsJol0FWGFIT_m-bcdCdJA9b8'}
      // src={(await import('./assets/avatar/Avatar AoH _restored.png')).default}
      src={pathFile_Avatar}
      alt="LZ"
    />
    <Typography
      color="white"
      sx={{
        // display: 'block',
        // transform: 'scale(3.0)',
        fontSize: '3em',
      }}
    >
      | Statistics | Physics | Computer Science |
    </Typography>
    <Typography sx={{ color: 'white' }}>(click anywhere below)</Typography>
  </BoxGn>
);

const RandomDocListPanel: React.FC<{
  set_triggerDoc: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ set_triggerDoc }) => (
  <BoxGn
    sx={{
      display: 'block',
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
      // width: '600px',
      // height: '850px',
      // left: 'calc(100vw - 1000px)',
    }}
    onClick={() => {
      set_triggerDoc((triggerDoc) => !triggerDoc);
    }}
  >
    <BoxGn
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        opacity: 0.9,
      }}
      data-aos="slide-left"
      data-aos-offset={'200'}
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-easing="ease-in-out"
      // data-aos-mirror="true"
      data-aos-once="true"
      data-aos-anchor-placement="top-center"
    >
      <RandomDoc link="https://tlightchat-offline.netlify.app" title="tlightchat-main-preview: Real time video & text communication." />
      <RandomDoc link="https://github.com/Norlandz/code_comment_remover-ui" title="code_comment_remover-ui: remove comments in java / ts (& tsx) file." />
      <RandomDoc link="https://github.com/Norlandz/TrafficSystemMockJs" title="TrafficSystemMockJs: TrafficSystemMock is a program that simulates traffic" />
      <RandomDoc
        link="https://norlandz.github.io/NttDrawAndChat/DrawAndChatApp_Instruction/html/outhwp.html"
        title="NttDrawAndChat: Drawing & Writing Text & Organize Containers on a File \ Communicate through the Internet on the File"
      />
      <RandomDoc link="https://github.com/Norlandz/ocr-sentence-ui" title="ocr-sentence-ui: Handwriting ocr, CRNN + CTC" />
    </BoxGn>
  </BoxGn>
);

export const ProjectAvatarPart: React.FC = () => {
  //   const [animateShow_rst, set_animateShow_rst] = React.useState(false);
  //   const elt_animateShow_Avatar_ref = React.useRef<HTMLElement>(null);
  //
  //   React.useEffect(() => {
  //     const observer = new IntersectionObserver((entries) => {
  //       for (const entry of entries) {
  //         if (entry.isIntersecting) {
  //           set_animateShow_rst(true);
  //         } else {
  //           set_animateShow_rst(false);
  //         }
  //       }
  //     });
  //     observer.observe(elt_animateShow_Avatar_ref.current!);
  //   }, []);

  const [triggerDoc, set_triggerDoc] = React.useState(false);

  return (
    <>
      <BoxGn sx={{ position: 'relative' }}>
        <GlassBall set_triggerDoc={set_triggerDoc} />
        <AvatarPart />
        {triggerDoc && <RandomDocListPanel set_triggerDoc={set_triggerDoc} />}
        {/* <ThreejsCanvas /> */}
      </BoxGn>
    </>
  );
};
