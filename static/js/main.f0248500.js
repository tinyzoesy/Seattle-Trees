/*! For license information please see main.f0248500.js.LICENSE.txt */
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Be=Te(ze||(ze=Re`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),Fe=Te(Pe||(Pe=Re`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),Ne=(0,ue.ZP)("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),Ue=(0,ue.ZP)(Se,{name:"MuiTouchRipple",slot:"Ripple"})(De||(De=Re`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),Ie.rippleVisible,Oe,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),Ie.ripplePulsate,(e=>{let{theme:t}=e;return t.transitions.duration.shorter}),Ie.child,Ie.childLeaving,Be,550,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut}),Ie.childPulsate,Fe,(e=>{let{theme:t}=e;return t.transitions.easing.easeInOut})),je=t.forwardRef((function(e,n){const r=(0,he.Z)({props:e,name:"MuiTouchRipple"}),{center:i=!1,classes:o={},className:a}=r,s=(0,ae.Z)(r,Ae),[C,l]=t.useState([]),c=t.useRef(0),u=t.useRef(null);t.useEffect((()=>{u.current&&(u.current(),u.current=null)}),[C]);const h=t.useRef(!1),d=t.useRef(null),p=t.useRef(null),f=t.useRef(null);t.useEffect((()=>()=>{clearTimeout(d.current)}),[]);const m=t.useCallback((e=>{const{pulsate:t,rippleX:n,rippleY:r,rippleSize:i,cb:a}=e;l((e=>[...e,(0,ne.jsx)(Ue,{classes:{ripple:(0,Ce.Z)(o.ripple,Ie.ripple),rippleVisible:(0,Ce.Z)(o.rippleVisible,Ie.rippleVisible),ripplePulsate:(0,Ce.Z)(o.ripplePulsate,Ie.ripplePulsate),child:(0,Ce.Z)(o.child,Ie.child),childLeaving:(0,Ce.Z)(o.childLeaving,Ie.childLeaving),childPulsate:(0,Ce.Z)(o.childPulsate,Ie.childPulsate)},timeout:550,pulsate:t,rippleX:n,rippleY:r,rippleSize:i},c.current)])),c.current+=1,u.current=a}),[o]),_=t.useCallback((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:()=>{};const{pulsate:r=!1,center:o=i||t.pulsate,fakeElement:a=!1}=t;if("mousedown"===(null==e?void 0:e.type)&&h.current)return void(h.current=!1);"touchstart"===(null==e?void 0:e.type)&&(h.current=!0);const s=a?null:f.current,C=s?s.getBoundingClientRect():{width:0,height:0,left:0,top:0};let l,c,u;if(o||void 0===e||0===e.clientX&&0===e.clientY||!e.clientX&&!e.touches)l=Math.round(C.width/2),c=Math.round(C.height/2);else{const{clientX:t,clientY:n}=e.touches&&e.touches.length>0?e.touches[0]:e;l=Math.round(t-C.left),c=Math.round(n-C.top)}if(o)u=Math.sqrt((2*C.width**2+C.height**2)/3),u%2===0&&(u+=1);else{const e=2*Math.max(Math.abs((s?s.clientWidth:0)-l),l)+2,t=2*Math.max(Math.abs((s?s.clientHeight:0)-c),c)+2;u=Math.sqrt(e**2+t**2)}null!=e&&e.touches?null===p.current&&(p.current=()=>{m({pulsate:r,rippleX:l,rippleY:c,rippleSize:u,cb:n})},d.current=setTimeout((()=>{p.current&&(p.current(),p.current=null)}),80)):m({pulsate:r,rippleX:l,rippleY:c,rippleSize:u,cb:n})}),[i,m]),g=t.useCallback((()=>{_({},{pulsate:!0})}),[_]),y=t.useCallback(((e,t)=>{if(clearTimeout(d.current),"touchend"===(null==e?void 0:e.type)&&p.current)return p.current(),p.current=null,void(d.current=setTimeout((()=>{y(e,t)})));p.current=null,l((e=>e.length>0?e.slice(1):e)),u.current=t}),[]);return t.useImperativeHandle(n,(()=>({pulsate:g,start:_,stop:y})),[g,_,y]),(0,ne.jsx)(Ne,(0,se.Z)({className:(0,Ce.Z)(Ie.root,o.root,a),ref:f},s,{children:(0,ne.jsx)(we,{component:null,exit:!0,children:C})}))}));var Ve=je,Ge=n(1217);function Ze(e){return(0,Ge.Z)("MuiButtonBase",e)}var $e=(0,ke.Z)("MuiButtonBase",["root","disabled","focusVisible"]);const qe=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],We=(0,ue.ZP)("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,t)=>t.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${$e.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),Xe=t.forwardRef((function(e,n){const r=(0,he.Z)({props:e,name:"MuiButtonBase"}),{action:i,centerRipple:o=!1,children:a,className:s,component:C="button",disabled:l=!1,disableRipple:c=!1,disableTouchRipple:u=!1,focusRipple:h=!1,LinkComponent:d="a",onBlur:p,onClick:f,onContextMenu:m,onDragLeave:_,onFocus:g,onFocusVisible:y,onKeyDown:v,onKeyUp:x,onMouseDown:b,onMouseLeave:w,onMouseUp:M,onTouchEnd:E,onTouchMove:T,onTouchStart:S,tabIndex:k=0,TouchRippleProps:I,touchRippleRef:A,type:L}=r,z=(0,ae.Z)(r,qe),P=t.useRef(null),D=t.useRef(null),R=(0,de.Z)(D,A),{isFocusVisibleRef:O,onFocus:B,onBlur:F,ref:N}=(0,fe.Z)(),[U,j]=t.useState(!1);l&&U&&j(!1),t.useImperativeHandle(i,(()=>({focusVisible:()=>{j(!0),P.current.focus()}})),[]);const[V,G]=t.useState(!1);t.useEffect((()=>{G(!0)}),[]);const Z=V&&!c&&!l;function $(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:u;return(0,pe.Z)((r=>{t&&t(r);return!n&&D.current&&D.current[e](r),!0}))}t.useEffect((()=>{U&&h&&!c&&V&&D.current.pulsate()}),[c,h,U,V]);const q=$("start",b),W=$("stop",m),X=$("stop",_),H=$("stop",M),K=$("stop",(e=>{U&&e.preventDefault(),w&&w(e)})),Y=$("start",S),J=$("stop",E),Q=$("stop",T),ee=$("stop",(e=>{F(e),!1===O.current&&j(!1),p&&p(e)}),!1),te=(0,pe.Z)((e=>{P.current||(P.current=e.currentTarget),B(e),!0===O.current&&(j(!0),y&&y(e)),g&&g(e)})),re=()=>{const e=P.current;return C&&"button"!==C&&!("A"===e.tagName&&e.href)},ie=t.useRef(!1),oe=(0,pe.Z)((e=>{h&&!ie.current&&U&&D.current&&" "===e.key&&(ie.current=!0,D.current.stop(e,(()=>{D.current.start(e)}))),e.target===e.currentTarget&&re()&&" "===e.key&&e.preventDefault(),v&&v(e),e.target===e.currentTarget&&re()&&"Enter"===e.key&&!l&&(e.preventDefault(),f&&f(e))})),ce=(0,pe.Z)((e=>{h&&" "===e.key&&D.current&&U&&!e.defaultPrevented&&(ie.current=!1,D.current.stop(e,(()=>{D.current.pulsate(e)}))),x&&x(e),f&&e.target===e.currentTarget&&re()&&" "===e.key&&!e.defaultPrevented&&f(e)}));let ue=C;"button"===ue&&(z.href||z.to)&&(ue=d);const me={};"button"===ue?(me.type=void 0===L?"button":L,me.disabled=l):(z.href||z.to||(me.role="button"),l&&(me["aria-disabled"]=l));const _e=(0,de.Z)(n,N,P);const ge=(0,se.Z)({},r,{centerRipple:o,component:C,disabled:l,disableRipple:c,disableTouchRipple:u,focusRipple:h,tabIndex:k,focusVisible:U}),ye=(e=>{const{disabled:t,focusVisible:n,focusVisibleClassName:r,classes:i}=e,o={root:["root",t&&"disabled",n&&"focusVisible"]},a=(0,le.Z)(o,Ze,i);return n&&r&&(a.root+=` ${r}`),a})(ge);return(0,ne.jsxs)(We,(0,se.Z)({as:ue,className:(0,Ce.Z)(ye.root,s),ownerState:ge,onBlur:ee,onClick:f,onContextMenu:W,onFocus:te,onKeyDown:oe,onKeyUp:ce,onMouseDown:q,onMouseLeave:K,onMouseUp:H,onDragLeave:X,onTouchEnd:J,onTouchMove:Q,onTouchStart:Y,ref:_e,tabIndex:l?-1:k,type:L},me,z,{children:[a,Z?(0,ne.jsx)(Ve,(0,se.Z)({ref:R,center:o},I)):null]}))}));var He=Xe,Ke=n(4036);function Ye(e){return(0,Ge.Z)("MuiIconButton",e)}var Je=(0,ke.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);const Qe=["edge","children","className","color","disabled","disableFocusRipple","size"],et=(0,ue.ZP)(He,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,"default"!==n.color&&t[`color${(0,Ke.Z)(n.color)}`],n.edge&&t[`edge${(0,Ke.Z)(n.edge)}`],t[`size${(0,Ke.Z)(n.size)}`]]}})((e=>{let{theme:t,ownerState:n}=e;return(0,se.Z)({textAlign:"center",flex:"0 0 auto",fontSize:t.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(t.vars||t).palette.action.active,transition:t.transitions.create("background-color",{duration:t.transitions.duration.shortest})},!n.disableRipple&&{"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.action.activeChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,ce.Fq)(t.palette.action.active,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===n.edge&&{marginLeft:"small"===n.size?-3:-12},"end"===n.edge&&{marginRight:"small"===n.size?-3:-12})}),(e=>{let{theme:t,ownerState:n}=e;var r;const i=null==(r=(t.vars||t).palette)?void 0:r[n.color];return(0,se.Z)({},"inherit"===n.color&&{color:"inherit"},"inherit"!==n.color&&"default"!==n.color&&(0,se.Z)({color:null==i?void 0:i.main},!n.disableRipple&&{"&:hover":(0,se.Z)({},i&&{backgroundColor:t.vars?`rgba(${i.mainChannel} / ${t.vars.palette.action.hoverOpacity})`:(0,ce.Fq)(i.main,t.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===n.size&&{padding:5,fontSize:t.typography.pxToRem(18)},"large"===n.size&&{padding:12,fontSize:t.typography.pxToRem(28)},{[`&.${Je.disabled}`]:{backgroundColor:"transparent",color:(t.vars||t).palette.action.disabled}})}));var tt=t.forwardRef((function(e,t){const n=(0,he.Z)({props:e,name:"MuiIconButton"}),{edge:r=!1,children:i,className:o,color:a="default",disabled:s=!1,disableFocusRipple:C=!1,size:l="medium"}=n,c=(0,ae.Z)(n,Qe),u=(0,se.Z)({},n,{edge:r,color:a,disabled:s,disableFocusRipple:C,size:l}),h=(e=>{const{classes:t,disabled:n,color:r,edge:i,size:o}=e,a={root:["root",n&&"disabled","default"!==r&&`color${(0,Ke.Z)(r)}`,i&&`edge${(0,Ke.Z)(i)}`,`size${(0,Ke.Z)(o)}`]};return(0,le.Z)(a,Ye,t)})(u);return(0,ne.jsx)(et,(0,se.Z)({className:(0,Ce.Z)(h.root,o),centerRipple:!0,focusRipple:!C,disabled:s,ref:t,ownerState:u},c,{children:i}))}));function nt(e){let{map:n,tree:r}=e;console.log(r);const[i,o]=(0,t.useState)(null!==r);console.log("visible",i),(0,t.useEffect)((()=>{o(!0)}),[r]);const a=r.features;if(null===a||void 0===a||0===r.features.size)return null;const s=r.features[0].properties,C=s.PLANTED_DATE,l=(new Date(C).toISOString(),C.substring(0,10));console.log(l);const c=s.UNITDESC.toLowerCase().split(" ").map((e=>e.charAt(0).toUpperCase()+e.slice(1))).join(" ");return i&&(0,ne.jsx)("div",{className:"filter-wrapper",children:(0,ne.jsxs)("div",{className:"filter-container",children:[(0,ne.jsx)("div",{className:"close-button",children:(0,ne.jsx)(tt,{color:"#6f924b","aria-label":"close",component:"label",size:"small",onClick:(e,t)=>{o(!1)},children:(0,ne.jsx)(oe.Z,{fontSize:"inherit",sx:{color:"#6f924b"}})})}),(0,ne.jsxs)("div",{className:"filter-body",children:[(0,ne.jsx)("div",{className:"filter-title",children:s.COMMON_NAME}),(0,ne.jsxs)("div",{children:[(0,ne.jsx)("div",{className:"scientific-name-title",children:"Scientific name: "}),(0,ne.jsx)("div",{className:"scientific-name",children:s.SCIENTIFIC_NAME})]}),(0,ne.jsxs)("div",{children:[(0,ne.jsx)("div",{className:"scientific-name-title",children:"Planted date: "}),(0,ne.jsx)("div",{className:"scientific-name",children:l})]}),(0,ne.jsxs)("div",{children:[(0,ne.jsx)("div",{className:"scientific-name-title",children:"Address: "}),(0,ne.jsx)("div",{className:"scientific-name",children:c})]})]})]})})}function rt(){const e=(0,t.useRef)(null),n=(0,t.useRef)(null),[r,i]=(0,t.useState)(-122.33),[o,a]=(0,t.useState)(47.61),[s,C]=(0,t.useState)(10),[l,c]=(0,t.useState)(null);(0,t.useEffect)((()=>{n.current||(n.current=new(ie().Map)({container:e.current,style:"mapbox://styles/verazou/clh1ho71h007301q11ylf0rfr",center:[r,o],zoom:s,maxBounds:[[-124.763068,45.543541],[-116.915989,48.946]],minZoom:9}),n.current.addControl(new(ie().GeolocateControl)({positionOptions:{enableHighAccuracy:!0},trackUserLocation:!0,showUserHeading:!0})))})),(0,t.useEffect)((()=>{n.current&&(n.current.on("move",(()=>{i(n.current.getCenter().lng.toFixed(4)),a(n.current.getCenter().lat.toFixed(4)),C(n.current.getZoom().toFixed(2))})),n.current.on("click","trees",(e=>{c(e)})))}));return(0,ne.jsxs)("div",{children:[(0,ne.jsx)("div",{ref:e,className:"map-container"}),null!==l&&(0,ne.jsx)(nt,{map:n.current,tree:l})]})}ie().accessToken="pk.eyJ1IjoidmVyYXpvdSIsImEiOiJjbGdhMDkyZHMwOThiM2RwZ256bWR0dm9hIn0.f-631-O5UNmKOOF1svxxzQ";var it=n(7107);var ot=t.createContext(null);function at(){return t.useContext(ot)}var st="function"===typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var Ct=function(e){const{children:n,theme:r}=e,i=at(),o=t.useMemo((()=>{const e=null===i?r:function(e,t){if("function"===typeof t)return t(e);return(0,se.Z)({},e,t)}(i,r);return null!=e&&(e[st]=null!==i),e}),[r,i]);return(0,ne.jsx)(ot.Provider,{value:o,children:n})},lt=n(9886),ct=n(9120);const ut={};function ht(e,n,r){let i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return t.useMemo((()=>{const t=e&&n[e]||n;if("function"===typeof r){const o=r(t),a=e?(0,se.Z)({},n,{[e]:o}):o;return i?()=>a:a}return e?(0,se.Z)({},n,{[e]:r}):(0,se.Z)({},n,r)}),[e,n,r,i])}var dt=function(e){const{children:t,theme:n,themeId:r}=e,i=(0,ct.Z)(ut),o=at()||ut,a=ht(r,i,n),s=ht(r,o,n,!0);return(0,ne.jsx)(Ct,{theme:s,children:(0,ne.jsx)(lt.T.Provider,{value:a,children:t})})},pt=n(988);const ft=["theme"];function mt(e){let{theme:t}=e,n=(0,ae.Z)(e,ft);const r=t[pt.Z];return(0,ne.jsx)(dt,(0,se.Z)({},n,{themeId:r?pt.Z:void 0,theme:r||t}))}const _t=(0,it.Z)({typography:{fontFamily:"Dosis"},components:{}});r.render((0,ne.jsx)(t.StrictMode,{children:(0,ne.jsx)(mt,{theme:_t,children:(0,ne.jsx)(rt,{})})}),document.getElementById("root"))}()}();
//# sourceMappingURL=main.f0248500.js.map