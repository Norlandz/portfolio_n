import { BoxGn } from '../utilComponent/BoxGn';
import { Link as MuiLink } from '@mui/material';
import { NavLink as RouterLink } from 'react-router-dom';
import { ProjectInfo } from './ProjectInfo';

export const ProjectLinkPart: React.FC<{ projectInfo: ProjectInfo }> = (props) => (
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
