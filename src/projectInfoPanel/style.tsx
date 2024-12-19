import { createTheme, ThemeProvider } from '@mui/material';

export const muitheme_DataGrid = createTheme({
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
export const muitheme_ImageList = createTheme({
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

