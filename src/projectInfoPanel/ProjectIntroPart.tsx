import { BoxGn } from '../utilComponent/BoxGn';
import { Link as MuiLink, Paper } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { ProjectInfo } from './ProjectInfo';
import { fontFamily } from '@mui/system';

export const ProjectIntroPart: React.FC<{ projectInfo: ProjectInfo }> = (props) => (
  <BoxGn
    sx={{
      whiteSpace: 'pre',
    }}
  >
    {/* <Paper
      sx={{
        maxWidth: '100%',
        overflow: 'visible',
        margin: '0.2em',
        padding: '1em',
      }}
    >
    </Paper> */}
    {props.projectInfo.intro}
  </BoxGn>
);
