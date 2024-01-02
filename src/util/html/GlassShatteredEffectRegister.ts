// import gsap from 'gsap';
import { TweenMax, TimelineMax, Cubic } from 'gsap';
// import { Delaunay } from "d3";
// import { Fragment } from "react";
import Delaunay from './delaunay'; // seems need allow js?...
// import './delaunay'; // seems need allow js?...
// import './TweenMax'

// Broken glass effect on image - GSAP - GreenSock
// https://gsap.com/community/forums/topic/18290-broken-glass-effect-on-image/

// triangulation using https://github.com/ironwallaby/delaunay

const TWO_PI = Math.PI * 2;

// window.onload = function () {
//   TweenMax.set(container, { perspective: 500 });
//
//   // images from reddit/r/wallpapers
//   const urls = [
//     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/crayon.jpg',
//     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/spaceship.jpg',
//     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/dj.jpg',
//     'https://s3-us-west-2.amazonaws.com/s.cdpn.io/175711/chicken.jpg',
//   ];
//   let image;
//   let loaded = 0;
//   // very quick and dirty hack to load and display the first image asap
//   images[0] = image = new Image();
//   image.onload = function () {
//     if (++loaded === 1) {
//       imagesLoaded();
//       for (let i = 1; i < 4; i++) {
//         images[i] = image = new Image();
//
//         image.src = urls[i];
//       }
//     }
//   };
//   image.src = urls[0];
// };
//
// function imagesLoaded() {
//   placeImage(false);
//   triangulate();
//   shatter();
// }
//
// function placeImage(transitionIn: boolean) {
//   image = images[imageIndex];
//
//   if (++imageIndex === images.length) imageIndex = 0;
//
//   image.addEventListener('click', imageClickHandler);
//   container.appendChild(image);
//
//   if (transitionIn !== false) {
//     TweenMax.fromTo(image, 0.75, { y: -1000 }, { y: 0, ease: Back.easeOut });
//   }
// }

// const imageWidth = 768;
// const imageHeight = 485;

export class GlassShatteredEffectRegister {
  // ... idk whats wrong with detect ...

  public readonly images: HTMLImageElement[] = [];

  public readonly vertices: number[][] = [];
  public indices: ({ i: any; j: any; k: any; x: number; y: number; r: number } | number)[] = [];
  public readonly fragments: Fragment[] = [];
  // public readonly clickPosition = [imageWidth * 0.5, imageHeight * 0.5];

  public readonly image: HTMLImageElement;
  public readonly container: HTMLElement;

  // public readonly imageWidth: number | null = null;
  // public readonly imageHeight: number | null = null;
  public readonly clickPosition: [number, number] | [null, null] = [null, null];

public readonly image_style_opacity_ori;

  /**
   *
   * @param image
   * @param container parent container of the image
   */
  constructor(image: HTMLImageElement, container: HTMLElement) {
    if (image == null) throw new TypeError();
    if (container == null) throw new TypeError();
    this.image = image;
    this.container = container;
    // const rect = this.image.getBoundingClientRect();
    // this.imageWidth = rect.width;
    // this.imageHeight = rect.height;
    // // console.log('imageWidth', this.imageWidth, 'imageHeight', this.imageHeight);
    // this.clickPosition = [this.imageWidth * 0.5, this.imageHeight * 0.5];
    this.image_style_opacity_ori = image.style.opacity;
    //
    TweenMax.set(container, { perspective: 500 });
    // image.addEventListener('click', this.imageClickHandler);
    image.addEventListener('click', this.imageClickHandler.bind(this)); // its at the time of calling .. or well just js thing bad...
  }
  // constructor(public readonly image: HTMLImageElement, public readonly container: HTMLElement) {

  imageClickHandler(event: MouseEvent) {
    const box = this.image.getBoundingClientRect();
    const top = box.top;
    const left = box.left;

    this.clickPosition[0] = event.clientX - left;
    this.clickPosition[1] = event.clientY - top;

    this.triangulate.apply(this);
    this.shatter.apply(this);
  }

  triangulate() {
    const rings = [
      { r: 50, c: 12 },
      { r: 150, c: 12 },
      { r: 300, c: 12 },
      { r: 1200, c: 12 }, // very large in case of corner clicks
    ];
    let x;
    let y;
    if (this.clickPosition[0] === null || this.clickPosition[1] === null) throw new TypeError();
    const centerX = this.clickPosition[0];
    const centerY = this.clickPosition[1];

    this.vertices.push([centerX, centerY]);

    for (const ring of rings) {
      const radius = ring.r;
      const count = ring.c;
      const constiance = radius * 0.25;

      for (let i = 0; i < count; i++) {
        x = Math.cos((i / count) * TWO_PI) * radius + centerX + randomRange(-constiance, constiance);
        y = Math.sin((i / count) * TWO_PI) * radius + centerY + randomRange(-constiance, constiance);
        this.vertices.push([x, y]);
      }
    }

    const rect = this.image.getBoundingClientRect();
    const imageWidth = rect.width;
    const imageHeight = rect.height;
    for (const v of this.vertices) {
      v[0] = clamp(v[0], 0, imageWidth);
      v[1] = clamp(v[1], 0, imageHeight);
    }

    this.indices = Delaunay.triangulate(this.vertices);
  }

  shatter() {
    let fragment: Fragment;

    const tl0 = new TimelineMax({ onComplete: this.shatterCompleteHandler.bind(this) });

    for (let i = 0; i < this.indices.length; i += 3) {
      fragment = new Fragment(
        //
        this.vertices[this.indices[i + 0] as number], // seems taking i
        this.vertices[this.indices[i + 1] as number], // seems taking j
        this.vertices[this.indices[i + 2] as number], // seems taking k
        this.image
      );

      if (this.clickPosition[0] === null || this.clickPosition[1] === null) throw new TypeError();
      const dx = fragment.centroid[0] - this.clickPosition[0];
      const dy = fragment.centroid[1] - this.clickPosition[1];
      const d = Math.sqrt(dx * dx + dy * dy);
      const rx = 30 * sign(dy);
      const ry = 90 * -sign(dx);
      const delay = d * 0.003 * randomRange(0.9, 1.1);
      fragment.canvas.style.zIndex = Math.floor(d).toString();

      const tl1 = new TimelineMax();

      tl1.to(fragment.canvas, 1, {
        z: -500,
        rotationX: rx,
        rotationY: ry,
        ease: Cubic.easeIn,
      });
      tl1.to(fragment.canvas, 0.4, { alpha: 0 }, 0.6);

      // tl0.insert(tl1, delay);
      tl0.add(tl1, delay);

      this.fragments.push(fragment);
      this.container.appendChild(fragment.canvas);
    }

    //
    {
      // this.container.removeChild(this.image);
      // this.image.removeEventListener('click', this.imageClickHandler.bind(this));
    }
    {
      // this.image.style.visibility = 'hidden';
      this.image.style.opacity = '0';
    }
  }

  shatterCompleteHandler() {
    // add pooling?
    for (const f of this.fragments) {
      this.container.removeChild(f.canvas);
    }
    this.fragments.length = 0;
    this.vertices.length = 0;
    this.indices.length = 0;

    //
    {
      // []
      // If you're using the animate method to animate CSS properties on an element, the changes made by the animation might not be reflected in the element's inline styles or the style attribute of the HTML element.
      //
      // The animate method applies the animation by modifying the element's CSS properties using CSS animations. These changes are not directly reflected in the inline styles or the style attribute of the element. Instead, the changes are applied by modifying the element's computed styles.
      // []
      // I apologize for the confusion. If you have used the fill option with a value of 'forwards' in the animate method, the styles applied by the last keyframe will be persisted after the animation has completed. This means that any subsequent changes to the same properties via the style attribute will not have any effect because the persisted styles take precedence.
      //
      // To modify the styles after the animation has completed, you can either remove the animation fill or modify the animation itself. Here are two approaches you can consider:
      // <>
      // https://codeium.com/live/general

      // this.image.style.visibility = 'visible';
      const animation = this.image.animate(
        [
          {
            // visibility: 'visible',
            // opacity: '1',
            opacity: this.image_style_opacity_ori,
          },
        ],
        {
          duration: 1000,
          easing: 'ease-in-out',
          delay: 1500,
          // iterations: 2,
          // direction: 'alternate',
          // fill: 'forwards', // just on finish ...
        }
      );
      animation.onfinish = () => {
        // this.image.style.opacity = '1';
        this.image.style.opacity = this.image_style_opacity_ori;
      };
    }
  }
}

//////////////
// MATH UTILS
//////////////

function randomRange(min: number, max: number) {
  return min + (max - min) * Math.random();
}

function clamp(x: number, min: number, max: number) {
  return x < min ? min : x > max ? max : x;
}

function sign(x: number) {
  return x < 0 ? -1 : 1;
}

//////////////
// FRAGMENT
//////////////

// Fragment = function (v0, v1, v2) {
//   this.v0 = v0;
//   this.v1 = v1;
//   this.v2 = v2;
//
//   this.computeBoundingBox();
//   this.computeCentroid();
//   this.createCanvas();
//   this.clip();
// }
// Fragment.prototype = {

class Fragment {
  private box: { x: number; y: number; w: number; h: number };
  public centroid: number[];
  public canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  constructor(
    //
    public readonly v0: number[],
    public readonly v1: number[],
    public readonly v2: number[],
    image: HTMLImageElement
  ) {
    // computeBoundingBox()
    {
      const xMin = Math.min(this.v0[0], this.v1[0], this.v2[0]);
      const xMax = Math.max(this.v0[0], this.v1[0], this.v2[0]);
      const yMin = Math.min(this.v0[1], this.v1[1], this.v2[1]);
      const yMax = Math.max(this.v0[1], this.v1[1], this.v2[1]);

      this.box = {
        x: xMin,
        y: yMin,
        w: xMax - xMin,
        h: yMax - yMin,
      };
      // const rect = image.getBoundingClientRect();
      // const imageWidth = rect.width;
      // const imageHeight = rect.height;
      // this.box = {
      //   x: 0,
      //   y: 0,
      //   w: imageWidth,
      //   h: imageHeight,
      // };
    }
    // computeCentroid()
    {
      const x = (this.v0[0] + this.v1[0] + this.v2[0]) / 3;
      const y = (this.v0[1] + this.v1[1] + this.v2[1]) / 3;

      this.centroid = [x, y];
    }
    // createCanvas()
    {
      this.canvas = document.createElement('canvas');
      this.canvas.width = this.box.w;
      this.canvas.height = this.box.h;
      this.canvas.style.width = this.box.w + 'px';
      this.canvas.style.height = this.box.h + 'px';
      this.canvas.style.left = this.box.x + 'px';
      this.canvas.style.top = this.box.y + 'px';
      // css needed
      this.canvas.style.position = 'absolute';
      this.canvas.style.backfaceVisibility = 'hidden';
      this.ctx = this.canvas.getContext('2d') ?? (() => { throw new TypeError(); })(); // prettier-ignore
      // this.canvas.style.opacity = '0.5' 
      // image.style.opacity
      this.ctx.globalAlpha = 0.5; // @messy // REVIEW
    }
    // clip()
    {
      this.ctx.translate(-this.box.x, -this.box.y);
      this.ctx.beginPath();
      this.ctx.moveTo(this.v0[0], this.v0[1]);
      this.ctx.lineTo(this.v1[0], this.v1[1]);
      this.ctx.lineTo(this.v2[0], this.v2[1]);
      this.ctx.closePath();
      this.ctx.clip();
      this.ctx.drawImage(image, 0, 0);
    }
  }
}
