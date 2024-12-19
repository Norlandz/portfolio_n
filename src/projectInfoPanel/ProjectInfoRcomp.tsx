import { ThemeProvider } from '@emotion/react';
import { Paper } from '@mui/material';
import React from 'react';
import { BoxGn } from '../utilComponent/BoxGn';
import { ProjectLinkPart } from './ProjectLinkPart';
import { ProjectTitlePart } from './ProjectTitlePart';
import { ProjectVidPart } from './ProjectVidPart';
import { ProjectImgPart } from './ProjectImgPart';
import { createRipple } from '../rippleEffect/RippleEffect';
import { muitheme_ImageList } from './style';
import { ProjectInfo } from './ProjectInfo';

export const ProjectInfoRcomp: React.FC<{ projectInfo: ProjectInfo; scale_Proj_rst: number }> = (props) => {
  return (
    <ThemeProvider theme={muitheme_ImageList}>
      <Paper
        sx={{
          margin: 1,
          padding: 4,
          flexGrow: props.projectInfo.flexGrow,
          flexBasis: 'min-content',
          maxWidth: 'fit-content',
          // transform: `scale(${props.scale_Proj_rst})`,
          zoom: props.scale_Proj_rst,

          position: 'relative',

          //           '@property --myColor1': {
          //             syntax: '<color>',
          //             initialValue: 'magenta',
          //             inherits: 'false',
          //           },
          //
          //           '@property --myColor2': {
          //             syntax: '<color>',
          //             initialValue: 'green',
          //             inherits: 'false',
          //           },

          '.ripple': {
            borderRadius: '50%',
            // backgroundColor: 'rgba(240, 250, 255, 0.5)',
            // backgroundColor: 'radial-gradient(rgba(255, 255, 255, 0.8) 0%, transparent 20%, rgba(255, 255, 255, 0.8) 40%)',
            backgroundColor: 'rgba(240, 250, 255, 0.9)',
            position: 'absolute',
            transform: 'scale(0)',
            // animation: 'ripple 0.6s linear',
            animation: 'ripple 1s linear',
            zIndex: 2,
            // css - Use CSS3 transitions with gradient backgrounds - Stack Overflow
            // https://stackoverflow.com/questions/6542212/use-css3-transitions-with-gradient-backgrounds
            // background: 'linear-gradient(var(--myColor1), var(--myColor2))',
            // transition: '--myColor1 0.1s, --myColor2 0.1s',
            // backgroundImage: 'linear-gradient(45deg, blue, aqua)',
            // position: 'relative',
          },

          // '.ripple::before': {
          //   position: 'absolute',
          //   content: '"',
          //   inset: 0,
          //   backgroundImage: 'linear-gradient(to bottom, red, orange)',
          //   zIndex: 1,
          //   opacity: 0,
          //   transition: 'opacity 0.25s linear',
          // },

          '@keyframes ripple': {
            to: {
              // transform: 'scale(1)',
              transform: 'scale(1.6)',
              // '--myColor1': 'red',
              // '--myColor2': '#E1AF2F',
              opacity: 0,
            },
          },
          // '@keyframes ripple::before': {
          //   to: {
          //     transform: 'scale(1)',
          //     opacity: 1,
          //   },
          // },
        }}
        elevation={3}
        // javascript - How to add ripple effect when clicking Card in Material UI - Stack Overflow
        // https://stackoverflow.com/questions/35581478/how-to-add-ripple-effect-when-clicking-card-in-material-ui
        // component={ButtonBase}
        ref={React.useCallback((elt: HTMLElement | null) => {
          if (elt instanceof HTMLElement) {
            // executed billion time .... old obj not removed too... // guess really need call back
            elt.addEventListener('mouseenter', (ev: MouseEvent) => {
              createRipple(elt, ev);
            });
          }
        }, [])}
      >
        <BoxGn
          sx={{
            translate: '-0.8em -0.8em',
          }}
        >
          <ProjectTitlePart projectInfo={props.projectInfo} />
          <ProjectLinkPart projectInfo={props.projectInfo} />
        </BoxGn>
        {/* <Paper
            sx={{
              // padding: '10px',
              // backgroundColor: 'rgba(100, 100, 100, 0.9)',
              borderRadius: '5%',
              overflow: 'hidden',
            }}
          > */}
        <ProjectImgPart projectInfo={props.projectInfo} />
        <ProjectVidPart projectInfo={props.projectInfo} />
      </Paper>
    </ThemeProvider>
  );
};
