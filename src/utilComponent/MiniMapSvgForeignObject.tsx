import React from 'react';
import Draggable from 'react-draggable';
// import { Box } from '@mui/system';
import { OpenWith } from '@mui/icons-material';
import styles from '../scss/index.module.css';
import { BoxGn } from './BoxGn';
// import * as d3 from 'd3';

// const initialNodes = [
//   { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
//   { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
// ];
//
// const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
//
// const MiniMapNormal: React.FC = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
//   const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
//
//   const onConnect = React.useCallback((params: Connection) => setEdges((eds) => addEdge(params, eds)), [setEdges]);
//
//   return (
//     <Box
//       sx={{
//         width: '300px',
//         height: '300px',
//         border: '1px solid rgba(200, 200, 200, 0.9)',
//       }}
//     >
//       <ReactFlow nodes={nodes} edges={edges} onNodesChange={onNodesChange} onEdgesChange={onEdgesChange} onConnect={onConnect}>
//         <MiniMap />
//         <Controls />
//         <Background />
//       </ReactFlow>
//     </Box>
//   );
// };

// javascript - How do I create a minimap of an SVG using D3 v5 and show the current viewport dimensions? - Stack Overflow
// https://stackoverflow.com/questions/52430288/how-do-i-create-a-minimap-of-an-svg-using-d3-v5-and-show-the-current-viewport-di
// https://codeium.com/live/general
//
// Using the Little-Known CSS element() Function to Create a Minimap Navigator | CSS-Tricks - CSS-Tricks
// https://css-tricks.com/using-the-little-known-css-element-function-to-create-a-minimap-navigator/
//
// jquery - How to take screenshot of a div with JavaScript? - Stack Overflow
// https://stackoverflow.com/questions/6887183/how-to-take-screenshot-of-a-div-with-javascript
export const MiniMapSvgForeignObject: React.FC<{
  // elt_MinimapOn_rst: HTMLElement;
  elt_MinimapOn_ref: React.RefObject<HTMLElement>;
}> = (props) => {
  // so was ok to not say null?...
  // const elt_MinimapOn_ref = React.useRef<HTMLDivElement>(null);
  // const eltSvg_Minimap_ref = React.useRef<SVGSVGElement>(null);
  const eltSvgFoBody_Minimap_ref = React.useRef<HTMLDivElement>(null);

  //   function updateMinimap(minimap_prev?: d3.Selection<d3.BaseType, unknown, null, undefined>) {
  //     minimap_prev?.remove();
  //
  //     if (props.elt_MinimapOn_rst == null) throw new TypeError();
  //     if (eltSvg_Minimap_ref.current == null) throw new TypeError();
  //     const minimapSvg = d3.select(eltSvg_Minimap_ref.current);
  //     // const mainContent = d3.select(props.elt_MinimapOn_rst);
  //
  //     // const minimapWidth = 200;
  //     // const minimapHeight = 150;
  //     // // const xScale = d3.scaleLinear().domain([0, mainContent.node().scrollWidth]).range([0, minimapWidth]);
  //     // // const yScale = d3.scaleLinear().domain([0, mainContent.node().scrollHeight]).range([0, minimapHeight]);
  //     // const xScale = d3.scaleLinear().domain([0, props.elt_MinimapOn_rst.scrollWidth]).range([0, minimapWidth]);
  //     // const yScale = d3.scaleLinear().domain([0, props.elt_MinimapOn_rst.scrollHeight]).range([0, minimapHeight]);
  //
  //     const minimap = minimapSvg
  //       // <strike> .append('g')
  //       // .attr('transform', `scale(${minimapWidth / mainContent.node().scrollWidth}, ${minimapHeight / mainContent.node().scrollHeight})`)
  //       // .attr('transform', `scale(2.5)`)
  //       .append('foreignObject')
  //       .attr('width', '100%')
  //       .attr('height', '100%')
  //       // .style('resize', 'both')
  //       .append('xhtml:body')
  //       // .style('margin', '0')
  //       // .style('padding', '0')
  //       // .style('border', '1px solid rgba(200, 200, 200, 0.9)')
  //       .style('width', '1920px')
  //       // .style('transform', 'scale(0.1)')
  //       .style('zoom', '0.1')
  //       // .html(mainContent.html());
  //       .html(props.elt_MinimapOn_rst.outerHTML);
  //     return minimap;
  //   }

  // ? why need d3?...
  //   function updateMinimap(d3_Minimap_svg_foreignObject_prev?: d3.Selection<SVGForeignObjectElement, unknown, null, undefined>) {
  //     d3_Minimap_svg_foreignObject_prev?.remove();
  //
  //     if (props.elt_MinimapOn_ref.current == null) throw new TypeError();
  //     if (eltSvg_Minimap_ref.current == null) throw new TypeError();
  //     const d3_Minimap_svg = d3.select(eltSvg_Minimap_ref.current);
  //
  //     const d3_Minimap_svg_foreignObject = d3_Minimap_svg.append('foreignObject').attr('width', '100%').attr('height', '100%');
  //     d3_Minimap_svg_foreignObject.append('xhtml:body').style('width', '1920px').style('zoom', '0.1').html(props.elt_MinimapOn_ref.current.outerHTML);
  //
  //     //     const elt_foreignObject_body = minimapSvg.select('foreignObject > body');
  //     //     elt_foreignObject_body.html(props.elt_MinimapOn_ref.current.outerHTML);
  //
  //     return d3_Minimap_svg_foreignObject;
  //   }

  //   function updateMinimap(elt_Minimap_svg_foreignObject_prev?: SVGForeignObjectElement) {
  //     elt_Minimap_svg_foreignObject_prev?.remove();
  //
  //     if (props.elt_MinimapOn_ref.current == null) throw new TypeError();
  //     if (eltSvg_Minimap_ref.current == null) throw new TypeError();
  //
  //     const elt_Minimap_svg_foreignObject = document.createElement('foreignObject');
  //     elt_Minimap_svg_foreignObject.setAttribute('width', '100%');
  //     elt_Minimap_svg_foreignObject.setAttribute('height', '100%');
  //     eltSvg_Minimap_ref.current.append(elt_Minimap_svg_foreignObject);
  //
  //     const elt_Minimap_svg_foreignObject_body = document.createElement('body');
  //     elt_Minimap_svg_foreignObject_body.style.width = '1920px';
  //     elt_Minimap_svg_foreignObject_body.style.zoom = '0.1';
  //     elt_Minimap_svg_foreignObject_body.innerHTML = props.elt_MinimapOn_ref.current.outerHTML;
  //     elt_Minimap_svg_foreignObject.append(elt_Minimap_svg_foreignObject_body); // append render javafx handler ok those em
  //
  //     return elt_Minimap_svg_foreignObject;
  //   }

  React.useEffect(() => {
    // let elt_Minimap_svg_foreignObject_prev: SVGForeignObjectElement | undefined = undefined;
    // const timerId = setInterval(() => {
    //   const elt_Minimap_svg_foreignObject = updateMinimap(elt_Minimap_svg_foreignObject_prev);
    //   elt_Minimap_svg_foreignObject_prev = elt_Minimap_svg_foreignObject;
    // }, 1000);

    const timerId = setInterval(() => {
      if (eltSvgFoBody_Minimap_ref.current == null) throw new TypeError();
      if (props.elt_MinimapOn_ref.current == null) throw new TypeError();
      // eltSvgFoBody_Minimap_ref.current.innerHTML = props.elt_MinimapOn_ref.current.outerHTML;
      const elt_MinimapOn_copy = props.elt_MinimapOn_ref.current.cloneNode(true) as HTMLElement;
      const arr_eltIframe = elt_MinimapOn_copy.getElementsByTagName('iframe');
      for (const eltIframe of arr_eltIframe) {
        eltIframe.remove();
      }
      eltSvgFoBody_Minimap_ref.current.replaceChildren(elt_MinimapOn_copy);
    }, 3000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const draggable_MiniMap = React.useRef<HTMLElement>(null);

  const cssId_dragHandler_MiniMap = 'cssId_dragHandler_MiniMap';
  return (
    <>
      {/* <div>aa</div> */}
      <Draggable
        handle={`#${cssId_dragHandler_MiniMap}`}
        nodeRef={draggable_MiniMap} // this is buggy drag... // nvm need use both // https://github.com/react-grid-layout/react-draggable/issues/738
        // seems must wrap with box too?...
      >
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
              width: '192px',
              // height: '200px',
              border: '1px solid rgba(200, 200, 200, 0.9)',
              backgroundColor: 'rgba(200, 200, 200, 0.9)',
              resize: 'both',
              overflow: 'auto',
            }}
          >
            {/* <svg ref={eltSvg_Minimap_ref} width={'100%'} height={'100%'} /> */}
            <svg width={'100%'} height={'100%'}>
              <foreignObject width="100%" height="100%">
                <div
                  id={`${styles.cssId_eltSvgFoBody_Minimap}`}
                  // <body> cannot appear as a child of <foreignObject>.
                  ref={eltSvgFoBody_Minimap_ref}
                  style={{ width: '1920px', zoom: '0.1' }}
                >
                  No minimap yet
                </div>
              </foreignObject>
            </svg>
          </BoxGn>
        </BoxGn>
      </Draggable>
    </>
  );
};
