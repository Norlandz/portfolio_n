import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material';
// import { lime } from '@mui/material/colors';

// const { palette } = createTheme();
const uu_Select_PaddingTop = '0.2em';
const MuiTheme = createTheme({
  palette: {
    mode: 'light',
  },
  typography: {
    // fontSize: 14,
    body1: {
      fontFamily: 'Times New Roman',
      fontSize: 14,
      lineHeight: 1.25,
      letterSpacing: 0,
    },
    // button: {
    //   textTransform: 'none',
    //   // ;not_working; variant: 'contained',
    // },
    h1: {
      margin: 0,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h4: {
      margin: 0,
      fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
      fontWeight: 500,
      fontSize: '1.15rem',
      // lineHeight: 1.6,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          padding: '0.3em',
          lineHeight: 1.25,
          color: 'inherit', // ... idk ..
          fontSize: '0.9em',
        },
      },
      defaultProps: {
        variant: 'outlined',
      },
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          // '&.MuiFormControlLabel-root:not(.dummyNotExist)': {
          margin: 0,
          // padding: '0.3em',
          // lineHeight: 1.25,
        },
        label: {
          // margin: 0,
          // padding: '0.3em',
          // lineHeight: 1.25,
          fontFamily: 'Consolas',
          fontSize: '0.8em',
        },
      },
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 0,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        // root: {
        //   fontFamily: 'Consolas',
        //   fontSize: '0.8em',
        // }, // this affects the label & have a strike effect - bad
        input: {
          fontFamily: 'Consolas',
          fontSize: '0.8em',
          // padding: 0,
        },
      },
    },
    // MuiInput: {
    //   styleOverrides: {
    //     root: {
    //       padding: 0,
    //     },
    //     input: {
    //       padding: 0,
    //     }
    //   }
    // },
    MuiOutlinedInput: {
      styleOverrides: {
        // root: {
        //   padding: 0,
        // },
        input: {
          padding: '0.5em',
          // padding: uu_0d5em_MuiOutlinedInput_styleOverrides_root_padding,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          margin: '0.5em',
          verticalAlign: 'middle',
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          // @messy
          '&:not(.MuiInputLabel-shrink)': {
            transform: `translate(14px, ${uu_Select_PaddingTop}) scale(1)`,
          },
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          height: '1em',
          padding: `${uu_Select_PaddingTop} 0.5em 0.5em 0.5em`,
        },
      },
    },
    // MuiStepper: {
    //   styleOverrides: {
    //     root: {
    //       fontSize: '0.5em',
    //     },
    //   }
    // },
    MuiStepLabel: {
      styleOverrides: {
        // root: {
        //   fontSize: '0.5em',
        // },
        label: {
          fontSize: '0.8em',
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          minHeight: '2em',
          '@media (min-width: 600px)': {
            minHeight: '3em',
          },
        },
      },
    },
    MuiTooltip: {
      defaultProps: {
        placement: 'top',
        arrow: true,
        PopperProps: {
          modifiers: [
            {
              name: 'offset',
              options: {
                offset: [0, -10], // Adjust the values to change the distance
              },
            },
          ],
        },
      },
      styleOverrides: {
      },
    },
  },
});

export { MuiTheme };
