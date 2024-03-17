import{u as e,j as t}from"./index-c9306e62.js";import{A as o}from"./AuthForm-4b39e117.js";import{R as p}from"./ResponsiveBackground-48615df7.js";import{D as n}from"./DynamicElementBoxes-57f621a0.js";import"./formik.esm-0ffd1009.js";import"./index.esm-00725151.js";import"./motion-94c00156.js";import"./index-e79e05d4.js";import"./ResizeObserver.es-f4289e8a.js";import"./zoom-5c08e777.js";import"./hero-2x-a29277f3.js";const r=e.div`
  display: flex;
  flex-direction: column;
  padding-top: 58px;
  width: 335px;
  height: 368px;

  @media screen and (min-width: 768px) {
    width: 496px;
    height: 336px;
    padding-top: 108px;
  }

  @media screen and (min-width: 1200px) {
    width: 496px;
    height: 336px;
    padding-top: 119px;
  }
`,x=e.h1`
  color: ${i=>i.theme.colors.white};
  font-weight: 700px;
  font-size: 24px;

  @media screen and (min-width: 768px) {
    padding: 0px;
    margin: 0px;
    font-size: 32px;
    font-weight: 700;
    line-height: 44px;
    letter-spacing: 0em;
    text-align: left;
  }
`,a=e.p`
  color: ${i=>i.theme.colors.formBorder};
  font-size: 14px;
  font-weight: 400px;
  line-height: 18px;
  margin-top: 14px;
  margin-bottom: 28px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0px;
    text-align: left;
    margin-top: 16px;
    margin-bottom: 18px;
  }
`,m=()=>t.jsxs(t.Fragment,{children:[t.jsxs(r,{children:[t.jsx(x,{children:"Sign In"}),t.jsx(a,{children:"Welcome! Please enter your credentials to login to the platform:"}),t.jsx(o,{type:"SignIn"})]}),t.jsxs(p,{children:[t.jsx(n,{type:"videoTutorial"}),t.jsx(n,{type:"calories"})]})]}),z=m;export{z as default};
