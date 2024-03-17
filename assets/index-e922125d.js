import{u as n,L as a,j as i}from"./index-c9306e62.js";import{R as d}from"./ResponsiveBackground-48615df7.js";import{D as s}from"./DynamicElementBoxes-57f621a0.js";import{s as x}from"./sprite-5cc2aa60.js";import"./hero-2x-a29277f3.js";const c=n.div`
  text-align: left;

  padding-top: 66px;

  @media screen and (min-width: 768px) {
    width: 598px;
    height: 234px;

    padding-top: 157px;
  }
  @media screen and (min-width: 1024px) {
    padding-top: 200px;
  }
`,h=n.h1`
  color: ${e=>e.theme.colors.white};
  font-size: 38px;
  font-weight: 500;
  line-height: 1.05;
  letter-spacing: 0.01em;
  text-align: left;

  @media screen and (min-width: 768px) {
    font-size: 70px;
    line-height: 1.1;
    letter-spacing: 0.01em;
  }
  @media screen and (min-width: 1024px) {
  }
`,l=n.span`
  position: relative;
`,g=n.div`
  display: flex;
  margin-top: 52px;
  gap: 14px;
  padding: 0px;
  @media screen and (min-width: 768px) {
    gap: 20px;
  }
`,m=n.svg`
  fill: transparent;
  position: absolute;
  z-index: -1;
  width: 98px;
  height: 35px;
  top: 5px;
  left: -8px;
  @media screen and (min-width: 768px) {
    width: 185px;
    height: 67px;
  }
  @media screen and (min-width: 1024px) {
    width: 185px;
    height: 67px;
  }
`,u=n(a)`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 42px;
  width: ${({$size:e})=>e==="signup"?"140px":"135px"};
  background-color: ${e=>e.$type==="signup"?e.theme.colors.primary:"transparent"};
  border: ${e=>e.$type==="signup"?`1px solid ${e.theme.colors.primary}`:`1px solid ${e.theme.colors.formBorder}`};
  border-radius: 12px;
  padding: 12px 40px;
  color: ${({theme:e})=>e.colors.white};
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  transition: ${e=>e.$type==="transparent"?"border":"background-color"}
    350ms ease;
  &:hover {
    ${e=>e.$type==="signup"?`background-color: ${e.theme.colors.secondary};`:"border: 1px solid rgba(239, 237, 232, 0.3)"}
  }

  @media screen and (min-width: 768px) {
    height: 56px;
    width: ${({$size:e})=>e==="signup"?"190px":"182px"};

    font-size: 20px;

    line-height: 1.2;
    letter-spacing: 0em;
  }
`,r=({children:e,variant:t="signup",size:o="signup"})=>{const p=t==="signup"?"/signup":"/signin";return i.jsx(u,{to:p,$size:o,$type:t,children:e})},f=()=>i.jsxs(i.Fragment,{children:[i.jsxs(c,{children:[i.jsxs(h,{children:["Transforming your"," ",i.jsxs(l,{children:["body",i.jsx(m,{children:i.jsx("use",{href:`${x}#icon-circle`})})]})," ","shape with Power Pulse"]}),i.jsxs(g,{children:[i.jsx(r,{size:"signup",variant:"signup",children:"Sign Up"}),i.jsx(r,{size:"signin",variant:"",children:"Sign In"})]})]}),i.jsxs(d,{children:[i.jsx(s,{type:"videoTutorial"}),i.jsx(s,{type:"calories"})]})]}),v=f;export{v as default};
