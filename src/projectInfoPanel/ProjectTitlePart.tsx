import { Rating } from '@mui/material';
import { BoxGn } from '../utilComponent/BoxGn';
import { ProjectInfo } from './ProjectInfo';

export const ProjectTitlePart: React.FC<{ projectInfo: ProjectInfo }> = (props) => (
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
