import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import {
  Card,
  CardMedia,
  ImageList,
  ImageListItem,
  Paper,
  ThemeProvider,
  createTheme,
  Link as MuiLink,
  Button,
  IconButton,
  AppBar,
  Divider,
  Toolbar,
  Typography,
  Drawer,
  Rating,
  Slider,
  ButtonBase,
  Icon,
  styled,
  Avatar,
} from '@mui/material';
import { TreeItem, TreeView } from '@mui/x-tree-view';
import { DataGrid, GridColDef, GridRow, GridRowProps, GridValueGetterParams } from '@mui/x-data-grid';

import './scss/index.module.css';
// import styles from './scss/index.module.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { OpenWith, RefreshOutlined, UnfoldMoreDouble, ViewSidebar } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import StarBorderPurple500Icon from '@mui/icons-material/StarBorderPurple500';
// import TouchRipple from '@mui/material/ButtonBase/TouchRipple';
// import ReactFlow, { MiniMap, Controls, Background, useNodesState, useEdgesState, addEdge, Connection } from 'reactflow';
// import 'reactflow/dist/style.css';

import { get_Size_afterObjectFit } from './util/html/HtmlUtil';
import { MiniMapSvgForeignObject } from './utilComponent/MiniMapSvgForeignObject';
import { MiniMapCanvas } from './utilComponent/MiniMapCanvas';
import styles from './scss/index.module.css';
import { ProjectAvatarPart, ThreejsCanvas } from './ProjectAvatarPart';
import { GlassShatteredEffectRegister } from './util/html/GlassShatteredEffectRegister';
import { BoxGn } from './utilComponent/BoxGn';

class ProjectInfo {
  public readonly name: string;
  public readonly arr_urlStr: string[] = [];
  public readonly arr_imgInfo: ImgInfo[] = [];
  public readonly arr_pathStr_vid: string[] = [];
  public readonly flexGrow = 1;
  public readonly seqAddedDate;
  public readonly lvOfComplexity;
  public readonly lvFeatured;

  constructor(name: string, arr_urlStr: string[], arr_pathStr_img: ImgInfo[], arr_pathStr_vid: string[], seqAddedDate: number, lvOfComplexity: number, lvFeatured = 0) {
    this.name = name;
    this.arr_urlStr = [...arr_urlStr];
    this.arr_imgInfo = [...arr_pathStr_img];
    this.arr_pathStr_vid = [...arr_pathStr_vid];
    this.seqAddedDate = seqAddedDate;
    this.lvOfComplexity = lvOfComplexity;
    this.lvFeatured = lvFeatured;
  }
}

class ImgInfo {
  constructor(
    //
    public readonly pathStr: string,
    public readonly ncol: number = 1,
    public readonly nrow: number = 1,
    public readonly alt?: string
  ) {}
}

let seqAddedDate = 0;
const arr_ProjectInfo_ori: readonly ProjectInfo[] = [
  new ProjectInfo(
    'NttDrawAndChat',
    [
      //
      'https://github.com/Norlandz/NttDrawAndChat',
      'https://norlandz.github.io/NttDrawAndChat/DrawAndChatApp_Instruction/html/outhwp.html',
    ],
    [
      //
      new ImgInfo((await import('./assets/images_ori_copy/NttDrawAndChat/DrawAndChatApp Demo frame85.png')).default, 2, 2),
      new ImgInfo((await import('./assets/images_ori_copy/NttDrawAndChat/DrawAndChatApp 20230519_1047_30182 LoadSaveFile Procedure .png')).default),
      new ImgInfo((await import('./assets/images_ori_copy/NttDrawAndChat/plantuml pkg drc note 20230519_133347Z .png')).default, 2, 2),
      new ImgInfo((await import('./assets/images_ori_copy/NttDrawAndChat/DrawAndChatApp_CodeFlow.png')).default, 2, 2),
    ],
    [
      //
      (await import('./assets/images_ori_copy/NttDrawAndChat/DrawAndChatApp 20230518_2259_15767 NewUseSend (Plain) .mp4')).default,
      (await import('./assets/images_ori_copy/NttDrawAndChat/DrawAndChatApp 20230518_2309_00326 ReceiveNetworkMsg .mp4')).default,
      (await import('./assets/images_ori_copy/NttDrawAndChat/DrawAndChatApp 20230518_2322_26418 LoadSaveFile .mp4')).default,
    ],
    ++seqAddedDate,
    48, // lvOfComplexity
    2.5
  ),
  new ProjectInfo(
    'TrafficSystem',
    [
      //
      'https://github.com/Norlandz/TrafficSystem',
    ],
    [
      //
      new ImgInfo((await import('./assets/images_ori_copy/TrafficSystem/TrafficSystem Demo.png')).default),
    ],
    [
      //
      (await import('./assets/images_ori_copy/TrafficSystem/TrafficSystem 20230609_003641 demo01_CrossBlock_Complex.mp4')).default,
      (await import('./assets/images_ori_copy/TrafficSystem/TrafficSystem 20230609_004856 demo02_AlignedCube_ComplexMoving_TrafficLight.mp4')).default,
    ],
    ++seqAddedDate,
    42, // lvOfComplexity
    1
  ),
  new ProjectInfo(
    'TrafficSystemMock',
    [
      //
      'https://github.com/Norlandz/TrafficSystemMockJs',
      'https://github.com/Norlandz/TrafficSystemMock',
    ],
    [
      //
      new ImgInfo((await import('./assets/images_ori_copy/TrafficSystemMock/TrafficSystemMock Demo 20230714_230239Z Intro .png')).default, 2, 2),
    ],
    [
      //
      (await import('./assets/images_ori_copy/TrafficSystemMock/TrafficSystemMock Demo 20230714_225153 Intro .mp4')).default,
    ],
    ++seqAddedDate,
    55, // lvOfComplexity
    1.5
  ),
  new ProjectInfo(
    'TextHighlighter',
    [
      //
      'https://github.com/Norlandz/TextHighlighter',
    ],
    [
      //
      new ImgInfo((await import('./assets/images_ori_copy/TextHighlighter/TextHighlighter_Cev 20230528 demo.png')).default),
    ],
    [
      //
    ],
    ++seqAddedDate,
    35 // lvOfComplexity
  ),
  new ProjectInfo(
    'DrawOnWebpage',
    [
      //
      'https://github.com/Norlandz/DrawOnWebpage',
    ],
    [
      //
      new ImgInfo((await import('./assets/images_ori_copy/DrawOnWebpage/DrawOnWebpage 20230529_2347_41692 demo.png')).default),
    ],
    [
      //
    ],
    ++seqAddedDate,
    2 // lvOfComplexity
  ),
  new ProjectInfo(
    'code_comment_remover-ui',
    [
      //
      'https://github.com/Norlandz/code_comment_remover-ui',
      'https://github.com/Norlandz/JavaParserSub',
      'https://github.com/Norlandz/JsParserSub',
    ],
    [
      //
      new ImgInfo((await import('./assets/images_ori_copy/code_comment_remover-ui/code_comment_remover-ui demo.png')).default, 2, 2),
      new ImgInfo((await import('./assets/images_ori_copy/code_comment_remover-ui/aws_Server_Jenkins_Docker_PrivateSubnet_ApiGateway - 20231116_2001 .template.png')).default),
    ],
    [
      //
    ],
    ++seqAddedDate,
    57, // lvOfComplexity
    2
  ),
  new ProjectInfo(
    'virtualfoldervsc',
    [
      //
      'https://marketplace.visualstudio.com/items?itemName=norlz.virtualfoldervsc',
      'https://github.com/Norlandz/virtualfoldervsc',
    ],
    [
      //
      new ImgInfo((await import('./assets/images_ori_copy/virtualfoldervsc/virtualfoldervsc demo 20230930 .png')).default),
    ],
    [
      //
    ],
    ++seqAddedDate,
    22 // lvOfComplexity
  ),
  new ProjectInfo(
    'TLightChat',
    [
      //
      'https://tlightchat.netlify.app',
      'https://tlightchat-offline.netlify.app',
      'https://github.com/Norlandz/tlightchat-main-preview',
    ],
    [
      //
      new ImgInfo((await import('./assets/images_ori_copy/TLightChat/TLightChat demo - 20231227_170152C .jpg')).default, 2, 2),
      new ImgInfo((await import('./assets/images_ori_copy/TLightChat/tlightchat xstate 20231124_0230_11488.png')).default, 2, 2),
      new ImgInfo((await import('./assets/images_ori_copy/TLightChat/tlightchat xstate 20231227_161601C P1.png')).default),
      new ImgInfo((await import('./assets/images_ori_copy/TLightChat/tlightchat xstate 20231227_161601C P2.png')).default),
      new ImgInfo((await import('./assets/images_ori_copy/TLightChat/TLightChat src_diagram 20231230_205627C manual_org.webp')).default, 2, 2),
    ],
    [
      //
      (await import('./assets/images_ori_copy/TLightChat/TLightChat demo - 20231226_222723 speedup .mp4')).default,
    ],
    ++seqAddedDate,
    62, // lvOfComplexity
    3
  ),
  new ProjectInfo(
    'infection_data_cov_it',
    [
      //
      'https://github.com/Norlandz/infection_data_cov_it',
    ],
    [
      //
      new ImgInfo((await import('./assets/images_ori_copy/infection_data_cov_it/demo - covid19_introTryTest - 20231215_2331_56491 .png')).default, 2, 2),
    ],
    [
      //
    ],
    ++seqAddedDate,
    9 // lvOfComplexity
  ),
];

// const columns: GridColDef<ProjectInfo>[] = [ // not_sure_Api
const columns: GridColDef[] = [
  { field: 'name', type: 'string', width: 250 },
  { field: 'seqAddedDate', headerName: 'default seq', type: 'number', width: 180 },
  { field: 'lvOfComplexity', type: 'number', width: 180 },
  { field: 'arr_urlStr', width: 500, sortable: false }, // width drag resize need ProPlan
  // {
  //   field: 'fullName',
  //   headerName: 'Full name',
  //   description: 'This column has a value getter and is not sortable.',
  //   sortable: false,
  //   width: 160,
  //   valueGetter: (params: GridValueGetterParams) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  // },
];

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
            <Typography variant="h1">Profolio</Typography>
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
        <BoxGn
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
          {/* <MiniMapCanvas elt_MinimapOn_ref={elt_MinimapOn_ref} /> */}
          <MiniMapSvgForeignObject elt_MinimapOn_ref={elt_MinimapOn_ref} />
          {/* {elt_MinimapOn_rst == null ? <div>null, so no minimap</div> : <MiniMapNormal elt_MinimapOn_rst={elt_MinimapOn_rst} />} */}
        </BoxGn>
        {/* <div id="scrollPastEnd" className={styles.scrollPastEnd}></div> */}
        <BoxGn
          sx={{
            '::before': {
              height: '400px',
              // height: '2400px',
              content: '""',
              display: 'block',
            },
          }}
        ></BoxGn>
      </BoxGn>
    </>
  );
}

const muitheme_TreeItem = createTheme({
  components: {
    // @ts-ignore
    MuiTreeItem: {
      styleOverrides: {
        root: {
          margin: '0.5em',
        },
      },
    },
  },
});

type RouterLinkProps = React.ComponentProps<typeof RouterLink>;
const RouterLinkStyled = (props: RouterLinkProps) => {
  return (
    <BoxGn
      sx={{
        whiteSpace: 'nowrap',
      }}
    >
      <RouterLink
        // ref={ref}
        {...props}
        style={({ isActive }) => ({
          fontFamily: 'Roboto',
          color: 'inherit',
          textDecoration: 'inherit',
          fontWeight: isActive ? 700 : 'inherit',
        })}
      />
    </BoxGn>
  );
};

const drawerWidth = 350;

const NavigationPanel = React.memo(() => {
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

const muitheme_DataGrid = createTheme({
  components: {
    // @ts-ignore
    MuiDataGrid: {
      styleOverrides: {
        // not base on role ... (and this force use is ok ... )
        virtualScroller: {
          // minHeight: '2000px !important',
          overflow: 'visible !important',
        },
        main: {
          overflow: 'visible',
        },
        virtualScrollerContent: {
          // ;not_working; []
          // ;not_working; If you're using the Material-UI library and specifically the Data Grid component, and you're experiencing issues with the scrolling behavior, there are a few things you can try to resolve the problem:
          // ;not_working; 1.  Make sure the container of the Data Grid has a fixed height: The Data Grid component requires a fixed height on its container element for proper scrolling behavior. Without a fixed height, the container may not scroll correctly. You can set the height using CSS, for example: `height: 400px;`.
          // ;not_working; 2.  Enable virtualization: The Data Grid component supports virtualization, which improves performance by rendering only the visible rows. This can help with smooth scrolling, especially when dealing with large datasets. You can enable virtualization by setting the `autoHeight` and `checkboxSelection` props to `true`.
          // ;not_working; <>
          // ;not_working; https://codeium.com/live/general
          // just set row height too hard to control the internal behaviour is screwing up a lot
          // disableVirtualization={true}
          // minHeight: '2000px !important',
          // css-1ohiuy-MuiDataGrid-virtualScrollerRenderZone {
          //   position: absolute;
          // ~~~// as saying suspect but why put time too much on others ...
          height: 'max-content !important', // need for scroll view height
          // overflow: 'visible'
        },
        virtualScrollerRenderZone: {
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row',
          // minHeight: '2000px !important',
          position: 'static', // need for scroll view height
          padding: '1em',
          // padding: '6em',
          // overflow: 'visible'
        },

        // []
        // ## CSS[](https://mui.com/x/api/data-grid/data-grid/#css)
        //
        // The following class names are useful for styling with CSS (the [state classes](https://mui.com/material-ui/customization/how-to-customize/#state-classes) are marked).
        // To learn more, visit the [component customization](https://mui.com/material-ui/customization/theme-components/) page.
        // <>
        // https://mui.com/x/api/data-grid/data-grid/

        withBorderColor: {
          borderColor: 'rgba(133, 176, 90, 0.5)',
        },
        columnHeadersInner: {
          backgroundColor: 'rgba(95, 158, 160, 0.03)',
        },
        // 'columnHeader--withRightBorder': {
        // }
        iconSeparator: {
          // can see anything reflected when action, only toggle css to try and find .... dk how ..
          visibility: 'visible',
        },
      },
    },
  },
});

const ProjectInfoRcompDataGrid: React.FC<{
  arr_ProjectInfo: ProjectInfo[];
  set_arr_ProjectInfo: React.Dispatch<React.SetStateAction<ProjectInfo[]>>;
}> = ({ arr_ProjectInfo, set_arr_ProjectInfo }) => {
  // []
  // transform is only a visual effect, it doesn't affect the layout
  // <>
  // https://stackoverflow.com/questions/51288769/scaling-a-flexbox-child-with-transform-leaves-empty-space
  // css - Zoom Vs. Scale in CSS3 - Stack Overflow
  // https://stackoverflow.com/questions/26488960/zoom-vs-scale-in-css3
  // ~~~// saying why noone tell ..
  const [scale_Proj_rst, set_scale_Proj_rst] = React.useState(1);

  return (
    <Paper
      sx={{
        margin: 6,
        padding: 1,
        position: 'relative',
        // overflow: 'visible'
      }}
    >
      <BoxGn
        sx={{
          position: 'absolute',
          top: '1.3em',
          right: '3.3em',
          zIndex: 1,
        }}
      >
        <IconButton onClick={() => set_arr_ProjectInfo(arr_ProjectInfo_ori.slice())}>
          <RefreshOutlined />
        </IconButton>
        <Slider
          sx={{ display: 'inline-block', width: '100px', verticalAlign: 'middle' }}
          min={0.1}
          max={1.5}
          step={0.1}
          value={scale_Proj_rst}
          onChange={(ev, num) => set_scale_Proj_rst(num as number)}
          marks
          valueLabelDisplay="auto"
        />
      </BoxGn>
      <ThemeProvider theme={muitheme_DataGrid}>
        <DataGrid
          rows={arr_ProjectInfo}
          columns={columns}
          getRowId={(row) => row.name}
          // columns={columns.map((column) => ({
          //   ...column,
          //   // renderCell: (params) => <ProjectInfoRcomp projectInfo={params} />,
          //   renderCell: (params) => <div>8888888{params.value}</div>,
          // }))}
          // slots={{ row: GridRow }}
          slots={{ row: ProjectInfoRcompDto }}
          slotProps={{ row: { scale_Proj_rst } }}
          sx={{
            margin: 2,
            // minHeight: ''
            // overflow: 'visible'
          }}
          // seems wont work cuz that row height is customized now ...
          // autoHeight={true}
          disableVirtualization={true} // need for scroll view height
          columnVisibilityModel={{ arr_urlStr: false, seqAddedDate: false }}
          // initialState={{
          //   pagination: {
          //     paginationModel: { page: 0, pageSize: 5 },
          //   },
          // }}
          // pageSizeOptions={[5, 10]}
          // checkboxSelection
          // showColumnVerticalBorder={true}
          // hideFooter={true}
        />
      </ThemeProvider>
    </Paper>
  );
};

// no_knowlres // check the jsdoc found default GridRow -> GridRowProps
const ProjectInfoRcompDto: React.FC<GridRowProps> = (props) => {
  // console.log(props);
  // console.log(props.row);
  if (!(props.row instanceof ProjectInfo)) {
    const msg = 'not_sure_Api - (happens in vite hmr) - refresh this component to reload';
    // console.log(msg);
    // throw new TypeError(msg);
    return <div>{msg}</div>;
  }
  return <ProjectInfoRcomp projectInfo={props.row} scale_Proj_rst={props.scale_Proj_rst} />;
};

// DataGrid API - MUI X
// https://mui.com/x/api/data-grid/data-grid/#DataGrid-prop-slots
//
// Data Grid - Column definition - MUI X
// https://mui.com/x/react-data-grid/column-definition/#rendering-cells
//
// Data Grid - Custom subcomponents - MUI X
// https://mui.com/x/react-data-grid/components/#row
//
// reactjs - How to add extra components to DataGrid row MUI - Stack Overflow
// https://stackoverflow.com/questions/73391275/how-to-add-extra-components-to-datagrid-row-mui
//
// Data Grid - Styling - MUI X
// https://mui.com/x/react-data-grid/style/#custom-theme
//
// mui datagrid custom row component - Google Search
// https://www.google.ca/search?q=mui+datagrid+custom+row+component&newwindow=1&sca_esv=594643722&sxsrf=AM9HkKmjtvdxjT48ND9dL2Jln3sOl9ltpw%3A1703974599672&ei=x5aQZYrQKOmb0PEP0KaX6AM&oq=mui+DataGrid+customize+each+row&gs_lp=Egxnd3Mtd2l6LXNlcnAiH211aSBEYXRhR3JpZCBjdXN0b21pemUgZWFjaCByb3cqAggAMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADMgoQABhHGNYEGLADSOUTUABYAHABeAGQAQCYAQCgAQCqAQC4AQHIAQDiAwQYACBBiAYBkAYI&sclient=gws-wiz-serp
//
// [DataGrid] Add possibility to pass in component for row and cell · Issue #2138 · mui/mui-x
// https://github.com/mui/mui-x/issues/2138
//
// [DataGrid] Add row and cell slots by m4theushw · Pull Request #2753 · mui/mui-x
// https://github.com/mui/mui-x/pull/2753
//
// Data Grid - Components - MUI
// https://deploy-preview-2753--material-ui-x.netlify.app/components/data-grid/components/#row

// ;~~~~//;  function App() {
// ;~~~~//;    const [arr_ProjectInfo_sorted, set_arr_ProjectInfo_sorted] = React.useState(arr_ProjectInfo.slice());
// ;~~~~//;
// ;~~~~//;    return (
// ;~~~~//;      <>
// ;~~~~//;        <Box>Full Stack Developer / Data Analyst</Box>
// ;~~~~//;        <Button onClick={() => set_arr_ProjectInfo_sorted(arr_ProjectInfo.slice().sort((a, b) => a.seqAddedDate - b.seqAddedDate))}>sortby default</Button>
// ;~~~~//;        <Button onClick={() => set_arr_ProjectInfo_sorted(arr_ProjectInfo.slice().sort((a, b) => a.lvOfComplexity - b.lvOfComplexity))}>sortby lvOfComplexity</Button>
// ;~~~~//;        <Paper elevation={3}>
// ;~~~~//;          {arr_ProjectInfo_sorted.map((projectInfo, index) => (
// ;~~~~//;            <ProjectInfoRcomp key={index} projectInfo={projectInfo} />
// ;~~~~//;          ))}
// ;~~~~//;        </Paper>

// ;~~~~//;   const [arrSort_ProjectInfo, set_arrSort_ProjectInfo] = React.useState({ arr_ProjectInfo: arr_ProjectInfo.slice(), toggle: false });
// ;~~~~//;
// ;~~~~//;   return (
// ;~~~~//;     <>
// ;~~~~//;       <Box>Full Stack Developer / Data Analyst</Box>
// ;~~~~//;       <Button
// ;~~~~//;         onClick={() =>
// ;~~~~//;           set_arrSort_ProjectInfo({
// ;~~~~//;             arr_ProjectInfo: arrSort_ProjectInfo.arr_ProjectInfo.slice().sort((a, b) => (a.seqAddedDate - b.seqAddedDate) * (arrSort_ProjectInfo.toggle ? 1 : -1)),
// ;~~~~//;             toggle: !arrSort_ProjectInfo.toggle,
// ;~~~~//;           })
// ;~~~~//;         }
// ;~~~~//;       >
// ;~~~~//;         sortby default
// ;~~~~//;       </Button>
// ;~~~~//;       <Button onClick={() => set_arrSort_ProjectInfo(arrSort_ProjectInfo.arr_ProjectInfo.slice().sort((a, b) => a.lvOfComplexity - b.lvOfComplexity))}>sortby lvOfComplexity</Button>

const muitheme_ImageList = createTheme({
  components: {
    MuiImageListItem: {
      styleOverrides: {
        root: {
          margin: '2px',
          padding: '2px',
          boxShadow: '0 0 2px 2px rgb(200, 200, 200, 0.5)',
          // height: 'fit-content !important',
          // better just put on the image ...
          // em the design just messy...
          // its the // rowHeight={50} ....
          // gap is not good after all the hack...
        },
      },
    },
  },
});

// How to Recreate the Ripple Effect of Material Design Buttons | CSS-Tricks - CSS-Tricks
// https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/
function createRipple(elt: HTMLElement, ev: MouseEvent) {
  // if (elt.getElementsByClassName('ripple').length > 0) {
  //   elt.removeChild(elt.childNodes[1]);
  // }

  const circle = document.createElement('div');
  elt.appendChild(circle);

  const rect = elt.getBoundingClientRect();
  // if (ev.target == null) throw new TypeError();
  // if (!(ev.target instanceof HTMLElement)) throw new TypeError();
  // const rect = ev.target.getBoundingClientRect();

  // const d = Math.max(elt.clientWidth, elt.clientHeight);
  // const d = Math.max(rect.width, rect.height); // better .. dk why some go off w
  const d = 100;
  circle.style.width = circle.style.height = d + 'px';

  // []
  //       var rect = e.target.getBoundingClientRect();
  //       var x = e.clientX - rect.left; //x position within the element.
  //       var y = e.clientY - rect.top;  //y position within the element.
  // <>
  // https://stackoverflow.com/questions/3234256/find-mouse-position-relative-to-element
  // ~~~//old ...

  // circle.style.left = ev.clientX - elt.offsetLeft - d / 2 + 'px';
  // circle.style.top = ev.clientY - elt.offsetTop - d / 2 + 'px';
  circle.style.left = ev.clientX - rect.left - d / 2 + 'px';
  circle.style.top = ev.clientY - rect.top - d / 2 + 'px';

  // console.log(ev.clientX, ev.clientX);
  // console.log(rect.left, rect.top);
  // console.log('circle.style.left', circle.style.left, 'circle.style.top', circle.style.top);
  circle.classList.add('ripple');
}
// ; []
// ; With materialize-css, you're able to add the "wave" effect to seemingly any element
// ; <>
// ; https://stackoverflow.com/questions/35581478/how-to-add-ripple-effect-when-clicking-card-in-material-ui

const ProjectInfoRcomp: React.FC<{ projectInfo: ProjectInfo; scale_Proj_rst: number }> = (props) => {
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
            backgroundColor: 'rgba(240, 250, 255, 0.5)',
            // backgroundColor: 'radial-gradient(rgba(255, 255, 255, 0.8) 0%, transparent 20%, rgba(255, 255, 255, 0.8) 40%)',
            position: 'absolute',
            transform: 'scale(0)',
            animation: 'ripple 0.6s linear',
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
              transform: 'scale(1)',
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

const ProjectTitlePart: React.FC<{ projectInfo: ProjectInfo }> = (props) => (
  <BoxGn>
    <BoxGn
      component={'pre'}
      sx={{
        fontSize: '20px',
        padding: 0,
        margin: 0,
      }}
    >
      {props.projectInfo.name}
    </BoxGn>
    <BoxGn>{props.projectInfo.lvOfComplexity}</BoxGn>
    <Rating defaultValue={props.projectInfo.lvFeatured} precision={0.5} />
  </BoxGn>
);

const ProjectLinkPart: React.FC<{ projectInfo: ProjectInfo }> = (props) => (
  <BoxGn>
    {props.projectInfo.arr_urlStr.map((urlStr) => (
      <BoxGn
        key={urlStr}
        sx={{
          maxWidth: '100%',
          overflow: 'visible',
        }}
      >
        <MuiLink
          component={RouterLink}
          to={urlStr}
          sx={{
            fontFamily: 'Consolas, monospace',
            fontSize: '0.8em',
            whiteSpace: 'nowrap',
          }}
        >
          {/* <BoxFitText>{urlStr}</BoxFitText> */}
          {urlStr}
        </MuiLink>
      </BoxGn>
    ))}
  </BoxGn>
);

const ProjectImgPart: React.FC<{ projectInfo: ProjectInfo }> = (props) => {
  // @tp @stael_state_pb
  const det_SmallSize = props.projectInfo.arr_imgInfo.length <= 1;
  const ncol_final = det_SmallSize ? props.projectInfo.arr_imgInfo.reduce((max_ncol, imgInfo) => (imgInfo.ncol > max_ncol ? imgInfo.ncol : max_ncol), 2) : 4;

  const refFunc_ShrinkHeight = React.useCallback((eltImg: HTMLImageElement | null) => {
    if (eltImg instanceof HTMLImageElement) {
      // const elt_parent = eltImg.parentElement ?? (() => { throw new TypeError(); })(); // prettier-ignore
      // console.log('eltImg.src', eltImg.src); // eltImg.src http://localhost:5173/src/assets/images_ori_copy/NttDrawAndChat/plantuml%20pkg%20drc%20note%2020230519_133347Z%20.png
      // console.log('get_Size_afterObjectFit', get_Size_afterObjectFit(eltImg)); // App.tsx:258 get_Size_afterObjectFit (2) [239, 154.42091152815013]
      // console.log('eltImg.width', eltImg.width, eltImg.height); // App.tsx:259 eltImg.width 239 239
      // console.log('eltImg.style.width', eltImg.style.width, eltImg.style.height); // App.tsx:260 eltImg.style.width
      // console.log('eltImg.naturalWidth', eltImg.naturalWidth, eltImg.naturalHeight); // App.tsx:261 eltImg.naturalWidth 373 241
      // console.log('eltImg.clientWidth', eltImg.clientWidth, eltImg.clientHeight); // App.tsx:262 eltImg.clientWidth 239 239
      // console.log('eltImg.offsetWidth', eltImg.offsetWidth, eltImg.offsetHeight); // App.tsx:263 eltImg.offsetWidth 239 239
      // console.log('elt_parent.style', elt_parent.style.width, elt_parent.style.height); // App.tsx:264 elt_parent.style  auto
      // console.log('elt_parent.clientWidth', elt_parent.clientWidth, elt_parent.clientHeight); // App.tsx:265 elt_parent.clientWidth 239 239
      // console.log('elt_parent.offsetWidth', elt_parent.offsetWidth, elt_parent.offsetHeight); // App.tsx:266 elt_parent.offsetWidth 239 239
      // console.log('elt_parent.scrollWidth', elt_parent.scrollWidth, elt_parent.scrollHeight); // App.tsx:267 elt_parent.scrollWidth 239 239
      // // console.log(elt_parent.width, elt_parent.height);
      // // console.log(elt_parent.naturalWidth, elt_parent.naturalHeight);

      const [width_afterObjectFit, height_afterObjectFit, boundedBy] = get_Size_afterObjectFit(eltImg);
      // if (width_afterObjectFit.toFixed(2) === eltImg.width.toFixed(2)) {
      // console.log('width_afterObjectFit', width_afterObjectFit, height_afterObjectFit, boundedBy);
      if (boundedBy === 'width') {
        // console.log(elt_parent.style.height)
        // elt_parent.style.height = height_afterObjectFit + 'px';
        // yeah this is .. why did i do with the parent element ... // butthe first elemnt here is ; em dk
        // seems yeah cuz already grided in that why ; os the auto height of li just take the height anyways ...
        // height: 450 ; yeah this was the pb in that case .. always expand to this height, need use maxHeight
        eltImg.style.height = height_afterObjectFit + 'px';
      }
    }
  }, []);

  return (
    <BoxGn
      sx={{
        // still dont understand slice ...
        border: '2px solid rgba(200, 200, 200, 0.9)',
        // borderImage: 'linear-gradient(90deg, rgba(180, 180, 180, 0.9) 1%, rgba(240, 240, 240, 0.9) 50%, rgba(180, 180, 180, 0.9) 99%) 1 / 2px',
        // borderImage: 'linear-gradient(20deg, rgba(180, 180, 180, 0.9) 1%, rgba(240, 240, 240, 0.9) 30%, rgba(240, 240, 240, 0.9) 70%, rgba(180, 180, 180, 0.9) 99%) 1 / 2px',
        padding: '2px',
        // borderRadius: '5%',
        // overflow: 'hidden',
      }}
    >
      <ImageList
        sx={{
          width: 125 * ncol_final,
          // height: 450
          maxHeight: 450,
          overflow: 'visible',
          // overflow: 'auto',
          // ':hover': {
          //   overflow: 'visible',
          // },
        }}
        cols={ncol_final}
        // rowHeight={50}
        gap={5}
        variant="standard"
      >
        {props.projectInfo.arr_imgInfo.map((imgInfo) => (
          <ImageListItem
            key={imgInfo.pathStr}
            cols={imgInfo.ncol}
            rows={imgInfo.nrow}
            // component={Paper}
            sx={{
              transition: 'transform 0.3s ease-in-out',
              ':hover': {
                // not jquery pb nor zoom lost resolution -- it does not ...
                transform: 'scale(2)',
                zIndex: 1,
              },
            }}
          >
            <img
              src={imgInfo.pathStr}
              alt={imgInfo.pathStr}
              loading="lazy"
              style={{
                objectFit: 'scale-down',
                aspectRatio: 1,
              }}
              ref={refFunc_ShrinkHeight}
            />
          </ImageListItem>
        ))}
      </ImageList>
    </BoxGn>
  );
};

const ProjectVidPart: React.FC<{ projectInfo: ProjectInfo }> = (props) => (
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

export default App;


