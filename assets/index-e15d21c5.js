import{u as t,L as n,j as o}from"./index-c9306e62.js";import{R as p}from"./ResponsiveBackground-48615df7.js";import{C as r}from"./Container-4a988d24.js";import"./hero-2x-a29277f3.js";const x=t.div`
  width: 240px;
  height: 100%;
  background-color: ${i=>i.theme.colors.primary};
  color: ${i=>i.theme.colors.white};
  padding: 20px 24px;
  position: absolute;
  z-index: 2;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: left;

  @media (min-width: 768px) {
    width: 420px;
    min-height: 800px;
    padding: 32px;
  }

  @media (min-width: 1024px) {
    width: 669px;
    min-height: px;
    padding: 32px 96px;
  }
`,d=t.h1`
  padding: 0;
  margin: 0;
  font-size: 66px;
  font-weight: 500;

  letter-spacing: 0.01em;

  margin-top: 213px;

  @media (min-width: 768px) {
    font-size: 160px;
    margin-top: 260px;
  }

  @media (min-width: 1024px) {
    margin-top: 172px;
  }
`,s=t.p`
  font-size: 14px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: 0px;
  width: 200px;
  height: 162px;

  @media (min-width: 768px) {
    font-size: 16px;
    width: 356px;
    height: 144px;
    line-height: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 16px;
    width: 447px;
    height: 96px;
    margin-top: 0px;
    margin-bottom: 28px;
    line-height: 24px;
  }
`,a=t(n)`
  padding: 12px 40px;
  font-size: 16px;
  font-weight: 500;
  margin-top: 28px;

  text-align: center;

  color: ${i=>i.theme.colors.white};

  background-color: transparent;
  border: 1px solid ${i=>i.theme.colors.formBorder};
  width: 155px;
  height: 45px;
  border-radius: 12px;

  gap: 10px;

  @media (min-width: 768px) {
    font-size: 20px;
    width: 208px;
    height: 56px;
    padding: 16px 60px;
  }

  @media (min-width: 1024px) {
    font-size: 20px;
    width: 208px;
    height: 56px;
    padding: 16px 60px;
    margin-top: 28px;
  }
`,h="/fs-90-react-node-KorolikD/logo/404-mobile-Logo.png",g="/fs-90-react-node-KorolikD/logo/404-mobile-Logo2x.png",e="/fs-90-react-node-KorolikD/logo/404-desktopLogo.png",m="/fs-90-react-node-KorolikD/logo/404-desktopLogo2x.png",c=()=>o.jsx(n,{to:"diary",children:o.jsxs("picture",{children:[o.jsx("source",{media:"(max-width: 768px)",srcSet:`${h} 1x,${g} 2x`}),o.jsx("source",{media:"(min-width: 768px)",srcSet:`${e} 1x,${m} 2x`}),o.jsx("img",{src:e,alt:"Logo"})]})}),l=()=>o.jsxs(r,{children:[o.jsxs(x,{children:[o.jsx(c,{}),o.jsx(d,{children:"404"}),o.jsx(s,{children:"Sorry, you have reached a page that we could not find. It seems that you are lost among the numbers and letters of our virtual space. Perhaps this page went on vacation or decided to disappear into another dimension. We apologize for this inconvenience."}),o.jsx(a,{to:"/",children:"Go Home"})]}),o.jsx(p,{})]}),b=l;export{b as default};
