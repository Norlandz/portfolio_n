import { BoxGn } from '../utilComponent/BoxGn';
import { Link as MuiLink, Paper } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { ProjectInfo } from './ProjectInfo';
import { fontFamily } from '@mui/system';

export const ProjectTechStackPart: React.FC<{ projectInfo: ProjectInfo }> = (props) => (
  <BoxGn>
    <Paper
      sx={{
        maxWidth: '100%',
        overflow: 'visible',
        fontFamily: 'monospace',
        margin: '0.2em',
        padding: '1em',
        color: '#2196f3',
      }}
    >
      {props.projectInfo.techStackTag}
    </Paper>
    <Paper
      sx={{
        maxWidth: '100%',
        overflow: 'visible',
        whiteSpace: 'pre',
        margin: '0.2em',
        padding: '1em',
      }}
    >
      {props.projectInfo.tachStackDesc}
    </Paper>
  </BoxGn>
);
