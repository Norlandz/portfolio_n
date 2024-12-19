import React from 'react';

import { Paper, AppBar, Toolbar, Typography, styled } from '@mui/material';

import './scss/index.module.css';
// import styles from './scss/index.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
// import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge, Connection } from 'reactflow';
// import 'reactflow/dist/style.css';

import { ProjectAvatarPart } from './ProjectAvatarPart';
import { BoxGn } from './utilComponent/BoxGn';
import { ProjectInfoRcompDataGrid } from './projectInfoPanel/ProjectInfoRcompDataGrid';
import { NavigationPanel } from './tocPanel/NavigationPanel';
import { arr_ProjectInfo_ori } from './config/projInfo';

// const PaperTpStyled = (props: React.ComponentProps<typeof Paper>) => {
//   return (
//   );
// };
const PaperTpStyled = styled(Paper)({
  padding: 2,
  margin: 1,
  backgroundColor: 'rgba(240,240,240,0.1)',
  border: '3px solid rgba(240,240,240,0.3)',
});

function App() {
  const [arr_ProjectInfo, set_arr_ProjectInfo] = React.useState(arr_ProjectInfo_ori.slice());
  const [, forceRerender] = React.useReducer((state: number, action: string) => state + 1, 0);

  const elt_MinimapOn_ref = React.useRef<HTMLElement>(null);
  // https://stackoverflow.com/questions/60476155/is-it-safe-to-use-ref-current-as-useeffects-dependency-when-ref-points-to-a-dom
  // const [elt_MinimapOn_rst, set_elt_MinimapOn_rst] = React.useState<HTMLElement | null>(null);
  // const elt_MinimapOn_ref = React.useCallback((elt: HTMLElement | null) => {
  //   // if (node === null) console.warn('// why? dk React ref ...');
  //   set_elt_MinimapOn_rst(elt);
  // }, []); // this was the ori use ... might defeated some purpose

  // return <ThreejsCanvas />;

  return (
    <>
      <BoxGn sx={{ display: 'flex', flexDirection: 'column' }}>
        <AppBar sx={{ backgroundColor: 'rgb(20,20,20,0.9)' }} position="static">
          <Toolbar>
            <Typography variant="h1">Portfolio</Typography>
          </Toolbar>
        </AppBar>
        <BoxGn ref={elt_MinimapOn_ref} sx={{ display: 'flex', position: 'relative' }}>
          <BoxGn
          // no need, or flexShrink
          >
            <NavigationPanel />
          </BoxGn>
          <BoxGn component="main" sx={{ flexGrow: 5 }}>
            <Typography variant="h2" color="white">
              Full Stack Developer / Data Analyst
            </Typography>
            <PaperTpStyled>
              <Typography variant="h3" color="white">
                Projects
              </Typography>
              <ProjectInfoRcompDataGrid arr_ProjectInfo={arr_ProjectInfo} set_arr_ProjectInfo={set_arr_ProjectInfo} />
            </PaperTpStyled>
            <PaperTpStyled>
              <Typography variant="h3" color="white">
                Contact
              </Typography>
              <Typography color="white">(please see the sent resume in pdf / html)</Typography>
            </PaperTpStyled>
            <ProjectAvatarPart />
          </BoxGn>
        </BoxGn>
        {/* <BoxGn
          sx={{
            position: 'fixed',
            // bottom: '1em',
            // right: '1em',
            // top: 'calc(100% - 1em)',
            // left: 'calc(100% - 1em)',
            // top: '80vh',
            // left: '80vw',
            top: 'calc(100vh - 230px)',
            left: 'calc(100vw - 200px)',
          }}
        >
          // <MiniMapCanvas elt_MinimapOn_ref={elt_MinimapOn_ref} />
          <MiniMapSvgForeignObject elt_MinimapOn_ref={elt_MinimapOn_ref} />
          // {elt_MinimapOn_rst == null ? <div>null, so no minimap</div> : <MiniMapNormal elt_MinimapOn_rst={elt_MinimapOn_rst} />}
        </BoxGn> */}
        {/* <div id="scrollPastEnd" className={styles.scrollPastEnd}></div> */}
        {/* <BoxGn
          sx={{
            '::before': {
              height: '400px',
              // height: '2400px',
              content: '""',
              display: 'block',
            },
          }}
        ></BoxGn> */}
      </BoxGn>
    </>
  );
}

export default App;
