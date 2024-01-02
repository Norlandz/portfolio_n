import React from 'react';
import Draggable from 'react-draggable';
// import { Box } from '@mui/system';
import { OpenWith } from '@mui/icons-material';
// import html2canvas from 'html2canvas';
import * as htmlToImage from 'html-to-image';
import { BoxGn } from './BoxGn';

// jquery - How to take screenshot of a div with JavaScript? - Stack Overflow
// https://stackoverflow.com/questions/6887183/how-to-take-screenshot-of-a-div-with-javascript
//
// How can I convert an HTML element to a canvas element? - Stack Overflow
// https://stackoverflow.com/questions/2732488/how-can-i-convert-an-html-element-to-a-canvas-element

export const MiniMapCanvas: React.FC<{
  elt_MinimapOn_ref: React.RefObject<HTMLElement>;
}> = (props) => {
  // const eltCanvas_Minimap_ref = React.useRef<HTMLCanvasElement>(null);
  const eltCanvas_Minimap_parent_ref = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    if (true) throw new TypeError('slow'); // cannot put inside those ref detection wont work ... 

    const timerId = setInterval(async () => {
      // if (eltCanvas_Minimap_parent_ref.current == null) throw new TypeError();
      // if (props.elt_MinimapOn_ref.current == null) throw new TypeError();
      // const eltCanvas_Minimap = await html2canvas(props.elt_MinimapOn_ref.current);
      // // @ts-ignore
      // eltCanvas_Minimap.style.zoom = 0.1;
      // eltCanvas_Minimap_parent_ref.current.replaceChildren(eltCanvas_Minimap);
      // // ;worse; width dont expand...; if (props.elt_MinimapOn_ref.current == null) throw new TypeError();
      // // ;worse; width dont expand...; if (eltCanvas_Minimap_ref.current == null) throw new TypeError();
      // // ;worse; width dont expand...; const eltCanvas_Minimap = await html2canvas(props.elt_MinimapOn_ref.current, {
      // // ;worse; width dont expand...;   canvas: eltCanvas_Minimap_ref.current,
      // // ;worse; width dont expand...; });
      // // ;worse; width dont expand...; const ctx = eltCanvas_Minimap.getContext('2d', { willReadFrequently: true });
      // // ;worse; width dont expand...; // @ts-ignore
      // // ;worse; width dont expand...; eltCanvas_Minimap.style.zoom = 0.1;

      // []
      // The average difference in performance was 86.3985 ms. This means that on average, html-to-image was almost 71 times faster than html2canvas!
      // <>
      // https://freedium.cfd/https://betterprogramming.pub/heres-why-i-m-replacing-html2canvas-with-html-to-image-in-our-react-app-d8da0b85eadf
      // []
      // converting HTML to a canvas directly in the browser may be slower for complex or dynamic content but can provide more real-time interactivity
      //  In general, converting HTML to PNG is typically faster because it involves rendering the HTML and then encoding it as an image, while converting HTML to SVG involves generating vector-based markup.
      // <>
      // https://codeium.com/live/general
      // dk dont wannt benchmark

      // same slow ....
      // if (eltCanvas_Minimap_parent_ref.current == null) throw new TypeError();
      // if (props.elt_MinimapOn_ref.current == null) throw new TypeError();
      // const dataUrl = await htmlToImage.toPng(props.elt_MinimapOn_ref.current);
      // const img = new Image();
      // img.src = dataUrl;
      // // @ts-ignore
      // img.style.zoom = 0.1;
      // eltCanvas_Minimap_parent_ref.current.replaceChildren(img);

      if (eltCanvas_Minimap_parent_ref.current == null) throw new TypeError();
      if (props.elt_MinimapOn_ref.current == null) throw new TypeError();
      const dataUrl = await htmlToImage.toSvg(props.elt_MinimapOn_ref.current);
      const img = new Image();
      img.src = dataUrl;
      // @ts-ignore
      img.style.zoom = 0.1;
      eltCanvas_Minimap_parent_ref.current.replaceChildren(img);
    }, 5000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const draggable_MiniMap = React.useRef<HTMLElement>(null);

  const cssId_dragHandler_MiniMap = 'cssId_dragHandler_MiniMap';
  return (
    <>
      <Draggable handle={`#${cssId_dragHandler_MiniMap}`} nodeRef={draggable_MiniMap}>
        <BoxGn ref={draggable_MiniMap}>
          <BoxGn id={cssId_dragHandler_MiniMap}>
            <OpenWith
              sx={{
                fontSize: 'small',
                color: 'rgba(200, 200, 200, 0.9)',
                zIndex: 1205,
                '&:hover': {
                  cursor: 'grab',
                },
              }}
            />
          </BoxGn>
          <BoxGn
            sx={{
              width: '10vw',
              // width: '192px',
              // height: '200px',
              border: '1px solid rgba(200, 200, 200, 0.9)',
              backgroundColor: 'rgba(200, 200, 200, 0.9)',
              resize: 'both',
              overflow: 'auto',
              // position: 'relative',
            }}
            ref={eltCanvas_Minimap_parent_ref}
          >
            No minimap yet
            {/* <canvas ref={eltCanvas_Minimap_ref} width={'100%'} height={'100%'} /> */}
          </BoxGn>
        </BoxGn>
      </Draggable>
    </>
  );
};
