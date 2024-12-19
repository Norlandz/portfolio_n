// How to Recreate the Ripple Effect of Material Design Buttons | CSS-Tricks - CSS-Tricks
// https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/
export function createRipple(elt: HTMLElement, ev: MouseEvent) {
  // if (elt.getElementsByClassName('ripple').length > 0) {
  //   elt.removeChild(elt.childNodes[1]);
  // }

  const circle = document.createElement('div');
  elt.appendChild(circle);

  const rect = elt.getBoundingClientRect();
  // if (ev.target == null) throw new TypeError();
  // if (!(ev.target instanceof HTMLElement)) throw new TypeError();
  // const rect = ev.target.getBoundingClientRect();

  // const d = Math.max(elt.clientWidth, elt.clientHeight);
  // const d = Math.max(rect.width, rect.height); // better .. dk why some go off w
  const d = 100;
  circle.style.width = circle.style.height = d + 'px';

  // []
  //       var rect = e.target.getBoundingClientRect();
  //       var x = e.clientX - rect.left; //x position within the element.
  //       var y = e.clientY - rect.top;  //y position within the element.
  // <>
  // https://stackoverflow.com/questions/3234256/find-mouse-position-relative-to-element
  // ~~~//old ...

  // circle.style.left = ev.clientX - elt.offsetLeft - d / 2 + 'px';
  // circle.style.top = ev.clientY - elt.offsetTop - d / 2 + 'px';
  circle.style.left = ev.clientX - rect.left - d / 2 + 'px';
  circle.style.top = ev.clientY - rect.top - d / 2 + 'px';

  // console.log(ev.clientX, ev.clientX);
  // console.log(rect.left, rect.top);
  // console.log('circle.style.left', circle.style.left, 'circle.style.top', circle.style.top);
  circle.classList.add('ripple');
}
// ; []
// ; With materialize-css, you're able to add the "wave" effect to seemingly any element
// ; <>
// ; https://stackoverflow.com/questions/35581478/how-to-add-ripple-effect-when-clicking-card-in-material-ui
