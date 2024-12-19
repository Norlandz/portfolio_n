import { ThemeProvider } from '@emotion/react';
import { RefreshOutlined } from '@mui/icons-material';
import { Paper, IconButton, Slider } from '@mui/material';
import { DataGrid, GridColDef, GridRowProps } from '@mui/x-data-grid';
import React from 'react';
import { BoxGn } from '../utilComponent/BoxGn';
import { ProjectInfoRcomp } from './ProjectInfoRcomp';
import { arr_ProjectInfo_ori } from '../config/projInfo';
import { ProjectInfo } from './ProjectInfo';
import { muitheme_DataGrid } from './style';

// const columns: GridColDef<ProjectInfo>[] = [ // not_sure_Api
const columns: GridColDef[] = [
  { field: 'name', type: 'string', width: 250 },
  { field: 'seqAddedDate', headerName: 'Date Added', type: 'number', width: 180 },
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

export const ProjectInfoRcompDataGrid: React.FC<{
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
          onChange={(ev: any, num: number) => set_scale_Proj_rst(num)}
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
          columnVisibilityModel={{ arr_urlStr: false, seqAddedDate: true }}
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
