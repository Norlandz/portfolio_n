// javascript - how can we get new image size dimension after giving object-fit:contain property to the image tag? - Stack Overflow
// https://stackoverflow.com/questions/52186493/how-can-we-get-new-image-size-dimension-after-giving-object-fitcontain-property
/**
 * @param eltImg an HTMLImageElement with object-fit:contain / scale-down
 * @returns [width_afterObjectFit, height_afterObjectFit, boundedBy]
 */
export function get_Size_afterObjectFit(eltImg: HTMLImageElement): [number, number, 'nothing' | 'width' | 'height'] {
  // #>> case* eltImg is not bounded -- original size
  if (eltImg.naturalWidth <= eltImg.width && eltImg.naturalHeight <= eltImg.height) {
    return [eltImg.naturalWidth, eltImg.naturalHeight, 'nothing'];
  }

  //
  const ratio_w2h = eltImg.naturalWidth / eltImg.naturalHeight;

  let width_afterObjectFit;
  let height_afterObjectFit;
  // const ratio_w2h_shouldsame = width_afterObjectFit / height_afterObjectFit;
  // @number_precision_pb

  // #>> case* eltImg is bounded by both -- exactly, unlikely...

  // #>> case1 eltImg is bounded by width -- height_afterObjectFit will be smaller than eltImg.height
  width_afterObjectFit = eltImg.width;
  height_afterObjectFit = eltImg.width / ratio_w2h;
  if (height_afterObjectFit <= eltImg.height) {
    return [width_afterObjectFit, height_afterObjectFit, 'width'];
  }

  // #>> case2 eltImg is bounded by height -- width_afterObjectFit will be smaller than eltImg.width
  height_afterObjectFit = eltImg.height;
  width_afterObjectFit = eltImg.height * ratio_w2h;
  if (width_afterObjectFit <= eltImg.width) {
    return [width_afterObjectFit, height_afterObjectFit, 'height'];
  }

  throw new Error('logically impossible, unless you are not using object-fit:contain / scale-down ; or some weird number_precision_pb');
}