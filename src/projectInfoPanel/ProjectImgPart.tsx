import { ImageList, ImageListItem } from '@mui/material';
import React from 'react';
import { get_Size_afterObjectFit } from '../util/html/HtmlUtil';
import { BoxGn } from '../utilComponent/BoxGn';
import { ProjectInfo } from './ProjectInfo';

export const ProjectImgPart: React.FC<{ projectInfo: ProjectInfo }> = (props) => {
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
