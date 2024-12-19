import { Card, CardMedia } from '@mui/material';
import React from 'react';
import { BoxGn } from '../utilComponent/BoxGn';
import { ProjectInfo } from './ProjectInfo';

export const ProjectVidPart: React.FC<{ projectInfo: ProjectInfo }> = (props) => (
  <BoxGn
    sx={{
      display: 'flex',
      justifyContent: 'center',
      border: '2px solid rgba(200, 200, 200, 0.9)',
      backgroundImage: 'linear-gradient(180deg, rgba(230, 230, 230, 0.9) 1%, rgba(240, 240, 240, 0.9) 50%, rgba(230, 230, 230, 0.9) 99%)',
      // neither backgroundImage nor background works for css animation
      transition: 'border 0.8s ease-in-out, background-image 0.8s ease-in-out',
      ':hover': {
        border: '2px solid rgba(100, 100, 100, 0.9)',
        backgroundImage: 'linear-gradient(180deg, rgba(100, 100, 100, 0.9) 1%, rgba(150, 150, 150, 0.9) 50%, rgba(100, 100, 100, 0.9) 99%)',
      },
    }}
  >
    {props.projectInfo.arr_pathStr_vid.map((pathStr) => {
      return <CardVidZoom key={pathStr} pathStr={pathStr} />;
    })}
  </BoxGn>
);

const CardVidZoom: React.FC<{ pathStr: string }> = (props) => {
  const eltVid_ref = React.useRef<HTMLVideoElement | null>(null);

  React.useEffect(() => {
    if (eltVid_ref.current == null) throw new TypeError();
    eltVid_ref.current.playbackRate = 3.0;
  }, []);

  return (
    <Card
      key={props.pathStr}
      sx={{
        maxWidth: 180,
        margin: 0.5,
        padding: 0.3,
        transition: 'transform 0.3s ease-in-out',
        ':hover': {
          transform: 'scale(2)',
        },
      }}
      onMouseEnter={async () => {
        if (eltVid_ref.current == null) throw new TypeError();
        await eltVid_ref.current.play();
      }}
      onMouseLeave={() => {
        if (eltVid_ref.current == null) throw new TypeError();
        eltVid_ref.current.pause();
      }}
      onClick={() => {
        if (eltVid_ref.current == null) throw new TypeError();
        eltVid_ref.current.pause();
        eltVid_ref.current.currentTime = 0;
        eltVid_ref.current.load();
      }}
    >
      {/* <video src={props.pathStr} controls /> */}
      <CardMedia
        component="video"
        src={props.pathStr}
        // controls
        loop
        muted
        // ref={(eltVid: HTMLVideoElement | null) => {
        //   if (eltVid instanceof HTMLVideoElement) {
        //     eltVid.playbackRate = 3.0;
        //   }
        // }}
        ref={eltVid_ref}
      />
    </Card>
  );
};
