import { ThemeProvider } from '@emotion/react';
import { ViewSidebar } from '@mui/icons-material';
import { Typography, Paper, IconButton } from '@mui/material';
import { TreeView, TreeItem } from '@mui/x-tree-view';
import React from 'react';
import { BoxGn } from '../utilComponent/BoxGn';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
import { muitheme_TreeItem, RouterLinkStyled } from './style';
import { arr_ProjectInfo_ori } from '../config/projInfo';

const drawerWidth = 350;

export const NavigationPanel = React.memo(() => {
  const [open, setOpen] = React.useState(true);
  // ... LibApi too bad ...
  const [expanded, set_expanded] = React.useState<string[] | undefined>(undefined);

  let sn_nodeId = 0;
  const iid = () => (++sn_nodeId).toString();

  const jsx_List = (
    <ThemeProvider theme={muitheme_TreeItem}>
      <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
        {arr_ProjectInfo_ori.map((projectInfo) => (
          <TreeItem
            nodeId={iid()}
            key={sn_nodeId}
            label={
              <>
                {projectInfo.lvFeatured > 0 ? (
                  <StarBorderPurple500Icon
                    // @ts-ignore // works... not just `small`
                    fontSize={'0.4em'}
                    sx={{ verticalAlign: 'middle' }}
                  />
                ) : undefined}
                <Typography component={'span'}>{projectInfo.name}</Typography>
              </>
            }
            // icon={}
          >
            {projectInfo.arr_urlStr.map((urlStr) => (
              <TreeItem nodeId={iid()} key={sn_nodeId} label={<RouterLinkStyled to={urlStr}>{urlStr}</RouterLinkStyled>} />
            ))}
          </TreeItem>
        ))}
      </TreeView>
    </ThemeProvider>
  );

  return (
    <BoxGn>
      {/* <Drawer
        sx={{
          width: drawerWidth,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            padding: '0.2em',
          },
          // position: 'static',
          position: 'relative',
        }}
        variant="permanent" // this prevent open = false
        anchor="left"
      > */}
      <BoxGn
        sx={{
          width: drawerWidth,
          position: 'relative',
          display: open ? undefined : 'none',
        }}
      >
        <Paper
          sx={{
            backgroundColor: 'rgba(245, 245, 245, 0.5)',
            padding: '0.5em',
            margin: '1em',
            // []
            // fixed position is a bit tricky (indeed impossible), but position: sticky is doing the trick beautifully:
            // <>
            // https://stackoverflow.com/questions/5873565/set-width-of-a-position-fixed-div-relative-to-parent-div
            position: 'fixed',
            width: drawerWidth - 20,
            // position: 'sticky',
            // width: '100%',
            top: '8em',
            height: '80%',

            // [...] some combinations with ‘visible’ are not possible: if one is specified as ‘visible’ and the other is ‘scroll’ or ‘auto’, then ‘visible’ is set to ‘auto’.
            // https://stackoverflow.com/questions/44797150/overflow-x-hidden-only
            // overflowX: 'hidden',
            // overflowY: 'scroll',
            // ':hover': {
            //   overflowX: 'visible',
            // },
            overflow: 'auto',
            ':hover': {
              width: drawerWidth * 2,
              backgroundColor: 'rgba(250, 250, 250, 0.9)',
            },
            zIndex: 1200,
          }}
        >
          {/* <IconButton onClick={() => set_expanded(Array.from({ length: sn_nodeId - 1 + 1 }, (_, index) => (1 + index).toString()))}>
            <UnfoldMoreDouble />
          </IconButton> */}
          {jsx_List}
        </Paper>
      </BoxGn>
      <IconButton
        sx={{
          zIndex: 1205,
          position: 'fixed',
          bottom: '0',
          color: 'rgba(240,240,240,0.2)',
        }}
        onClick={() => setOpen(!open)}
      >
        <ViewSidebar />
      </IconButton>
    </BoxGn>
  );
});
