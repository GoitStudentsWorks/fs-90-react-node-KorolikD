import{u as d,r as i,j as c}from"./index-c9306e62.js";import{p as g}from"./hero-2x-a29277f3.js";const p=d.div`
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right bottom;
  z-index: -1;
  top: 241px;
  left: 107px;
  right: 0;
  bottom: 0;
  background-image: url(${o=>o.$image}),
    linear-gradient(73.21deg, #040404 6.11%, rgba(4, 4, 4, 0) 66.68%),
    linear-gradient(170.48deg, #040404 3.66%, rgba(4, 4, 4, 0) 19.15%);

  @media (min-width: 768px) {
    top: 131px;
    left: 331px;
  }

  @media (min-width: 1024px) {
    top: -152px;
    left: 770px;
  }
`,x="/fs-90-react-node-KorolikD/assets/hero-1x-71f27de9.jpg",b="/fs-90-react-node-KorolikD/assets/hero-mob-2x-29ca5e9d.jpg",m="/fs-90-react-node-KorolikD/assets/hero-mob-1x-d4b8c906.jpg",l="/fs-90-react-node-KorolikD/assets/hero-tab-2x-41d238e0.jpg",u="/fs-90-react-node-KorolikD/assets/hero-tab-1x-b3fdce1e.jpg",h=({children:o})=>{const[n,t]=i.useState(""),e={desktop:x,desktop2x:g,tablet:u,tablet2x:l,mobile:m,mobile2x:b};return i.useEffect(()=>{const r=()=>{const a=window.devicePixelRatio||1,s=window.innerWidth;s>=1024?t(a>=2?e.desktop2x:e.desktop):s>=768?t(a>=2?e.tablet2x:e.tablet):t(a>=2?e.mobile2x:e.mobile)};return r(),window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[e]),c.jsx(p,{$image:n,children:o})};export{h as R};
