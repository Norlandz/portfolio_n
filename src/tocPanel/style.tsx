import { NavLink as RouterLink } from 'react-router-dom';
import { BoxGn } from '../utilComponent/BoxGn';
import { createTheme, ThemeProvider } from '@mui/material';

export const muitheme_TreeItem = createTheme({
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

export type RouterLinkProps = React.ComponentProps<typeof RouterLink>;

export const RouterLinkStyled = (props: RouterLinkProps) => {
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
