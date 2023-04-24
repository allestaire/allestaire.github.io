(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[873],{7931:function(e,t,r){"use strict";r.d(t,{Z:function(){return C}});var o=r(6750),a=r(431),n=r(6006),i=r(9791),l=r(4552),s=r(7562),d=r(3343),c=r(3207),u=r(2971),p=r(9150),v=r(6210),m=r(8539),g=r(3809);function h(e){return(0,g.Z)("MuiButton",e)}let f=(0,m.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]),x=n.createContext({});var b=r(9268);let Z=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=e=>{let{color:t,disableElevation:r,fullWidth:o,size:n,variant:i,classes:l}=e,d={root:["root",i,`${i}${(0,v.Z)(t)}`,`size${(0,v.Z)(n)}`,`${i}Size${(0,v.Z)(n)}`,"inherit"===t&&"colorInherit",r&&"disableElevation",o&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,v.Z)(n)}`],endIcon:["endIcon",`iconSize${(0,v.Z)(n)}`]},c=(0,s.Z)(d,h,l);return(0,a.Z)({},l,c)},S=e=>(0,a.Z)({},"small"===e.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===e.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===e.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),w=(0,c.ZP)(p.Z,{shouldForwardProp:e=>(0,c.FO)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`${r.variant}${(0,v.Z)(r.color)}`],t[`size${(0,v.Z)(r.size)}`],t[`${r.variant}Size${(0,v.Z)(r.size)}`],"inherit"===r.color&&t.colorInherit,r.disableElevation&&t.disableElevation,r.fullWidth&&t.fullWidth]}})(({theme:e,ownerState:t})=>{var r,o;let n="light"===e.palette.mode?e.palette.grey[300]:e.palette.grey[800],i="light"===e.palette.mode?e.palette.grey.A100:e.palette.grey[700];return(0,a.Z)({},e.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(e.vars||e).shape.borderRadius,transition:e.transitions.create(["background-color","box-shadow","border-color","color"],{duration:e.transitions.duration.short}),"&:hover":(0,a.Z)({textDecoration:"none",backgroundColor:e.vars?`rgba(${e.vars.palette.text.primaryChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette.text.primary,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===t.variant&&"inherit"!==t.color&&{backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===t.variant&&"inherit"!==t.color&&{border:`1px solid ${(e.vars||e).palette[t.color].main}`,backgroundColor:e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,d.Fq)(e.palette[t.color].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===t.variant&&{backgroundColor:e.vars?e.vars.palette.Button.inheritContainedHoverBg:i,boxShadow:(e.vars||e).shadows[4],"@media (hover: none)":{boxShadow:(e.vars||e).shadows[2],backgroundColor:(e.vars||e).palette.grey[300]}},"contained"===t.variant&&"inherit"!==t.color&&{backgroundColor:(e.vars||e).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(e.vars||e).palette[t.color].main}}),"&:active":(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[8]}),[`&.${f.focusVisible}`]:(0,a.Z)({},"contained"===t.variant&&{boxShadow:(e.vars||e).shadows[6]}),[`&.${f.disabled}`]:(0,a.Z)({color:(e.vars||e).palette.action.disabled},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.action.disabledBackground}`},"contained"===t.variant&&{color:(e.vars||e).palette.action.disabled,boxShadow:(e.vars||e).shadows[0],backgroundColor:(e.vars||e).palette.action.disabledBackground})},"text"===t.variant&&{padding:"6px 8px"},"text"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main},"outlined"===t.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].main,border:e.vars?`1px solid rgba(${e.vars.palette[t.color].mainChannel} / 0.5)`:`1px solid ${(0,d.Fq)(e.palette[t.color].main,.5)}`},"contained"===t.variant&&{color:e.vars?e.vars.palette.text.primary:null==(r=(o=e.palette).getContrastText)?void 0:r.call(o,e.palette.grey[300]),backgroundColor:e.vars?e.vars.palette.Button.inheritContainedBg:n,boxShadow:(e.vars||e).shadows[2]},"contained"===t.variant&&"inherit"!==t.color&&{color:(e.vars||e).palette[t.color].contrastText,backgroundColor:(e.vars||e).palette[t.color].main},"inherit"===t.color&&{color:"inherit",borderColor:"currentColor"},"small"===t.size&&"text"===t.variant&&{padding:"4px 5px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"text"===t.variant&&{padding:"8px 11px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"outlined"===t.variant&&{padding:"3px 9px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"outlined"===t.variant&&{padding:"7px 21px",fontSize:e.typography.pxToRem(15)},"small"===t.size&&"contained"===t.variant&&{padding:"4px 10px",fontSize:e.typography.pxToRem(13)},"large"===t.size&&"contained"===t.variant&&{padding:"8px 22px",fontSize:e.typography.pxToRem(15)},t.fullWidth&&{width:"100%"})},({ownerState:e})=>e.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${f.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${f.disabled}`]:{boxShadow:"none"}}),$=(0,c.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.startIcon,t[`iconSize${(0,v.Z)(r.size)}`]]}})(({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},S(e))),z=(0,c.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.endIcon,t[`iconSize${(0,v.Z)(r.size)}`]]}})(({ownerState:e})=>(0,a.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},S(e))),k=n.forwardRef(function(e,t){let r=n.useContext(x),s=(0,l.Z)(r,e),d=(0,u.Z)({props:s,name:"MuiButton"}),{children:c,color:p="primary",component:v="button",className:m,disabled:g=!1,disableElevation:h=!1,disableFocusRipple:f=!1,endIcon:S,focusVisibleClassName:k,fullWidth:C=!1,size:M="medium",startIcon:R,type:N,variant:P="text"}=d,W=(0,o.Z)(d,Z),I=(0,a.Z)({},d,{color:p,component:v,disabled:g,disableElevation:h,disableFocusRipple:f,fullWidth:C,size:M,type:N,variant:P}),B=y(I),E=R&&(0,b.jsx)($,{className:B.startIcon,ownerState:I,children:R}),j=S&&(0,b.jsx)(z,{className:B.endIcon,ownerState:I,children:S});return(0,b.jsxs)(w,(0,a.Z)({ownerState:I,className:(0,i.Z)(r.className,B.root,m),component:v,disabled:g,focusRipple:!f,focusVisibleClassName:(0,i.Z)(B.focusVisible,k),ref:t,type:N},W,{classes:B,children:[E,c,j]}))});var C=k},7095:function(e,t,r){"use strict";r.d(t,{Z:function(){return b}});var o=r(431),a=r(6750),n=r(6006),i=r(9791),l=r(7562),s=r(3207),d=r(2971),c=r(5991),u=r(8539),p=r(3809);function v(e){return(0,p.Z)("MuiCard",e)}(0,u.Z)("MuiCard",["root"]);var m=r(9268);let g=["className","raised"],h=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},v,t)},f=(0,s.ZP)(c.Z,{name:"MuiCard",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({overflow:"hidden"})),x=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCard"}),{className:n,raised:l=!1}=r,s=(0,a.Z)(r,g),c=(0,o.Z)({},r,{raised:l}),u=h(c);return(0,m.jsx)(f,(0,o.Z)({className:(0,i.Z)(u.root,n),elevation:l?8:void 0,ref:t,ownerState:c},s))});var b=x},8181:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var o=r(6750),a=r(431),n=r(6006),i=r(9791),l=r(7562),s=r(3207),d=r(2971),c=r(8539),u=r(3809);function p(e){return(0,u.Z)("MuiCardActions",e)}(0,c.Z)("MuiCardActions",["root","spacing"]);var v=r(9268);let m=["disableSpacing","className"],g=e=>{let{classes:t,disableSpacing:r}=e;return(0,l.Z)({root:["root",!r&&"spacing"]},p,t)},h=(0,s.ZP)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})(({ownerState:e})=>(0,a.Z)({display:"flex",alignItems:"center",padding:8},!e.disableSpacing&&{"& > :not(:first-of-type)":{marginLeft:8}})),f=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCardActions"}),{disableSpacing:n=!1,className:l}=r,s=(0,o.Z)(r,m),c=(0,a.Z)({},r,{disableSpacing:n}),u=g(c);return(0,v.jsx)(h,(0,a.Z)({className:(0,i.Z)(u.root,l),ownerState:c,ref:t},s))});var x=f},8235:function(e,t,r){"use strict";r.d(t,{Z:function(){return x}});var o=r(431),a=r(6750),n=r(6006),i=r(9791),l=r(7562),s=r(3207),d=r(2971),c=r(8539),u=r(3809);function p(e){return(0,u.Z)("MuiCardContent",e)}(0,c.Z)("MuiCardContent",["root"]);var v=r(9268);let m=["className","component"],g=e=>{let{classes:t}=e;return(0,l.Z)({root:["root"]},p,t)},h=(0,s.ZP)("div",{name:"MuiCardContent",slot:"Root",overridesResolver:(e,t)=>t.root})(()=>({padding:16,"&:last-child":{paddingBottom:24}})),f=n.forwardRef(function(e,t){let r=(0,d.Z)({props:e,name:"MuiCardContent"}),{className:n,component:l="div"}=r,s=(0,a.Z)(r,m),c=(0,o.Z)({},r,{component:l}),u=g(c);return(0,v.jsx)(h,(0,o.Z)({as:l,className:(0,i.Z)(u.root,n),ownerState:c,ref:t},s))});var x=f},4066:function(e,t,r){"use strict";r.d(t,{ZP:function(){return C}});var o=r(6750),a=r(431),n=r(6006),i=r(9791),l=r(1559),s=r(6601),d=r(7562),c=r(3207),u=r(2971),p=r(4957);let v=n.createContext();var m=r(8539),g=r(3809);function h(e){return(0,g.Z)("MuiGrid",e)}let f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12],x=(0,m.Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map(e=>`spacing-xs-${e}`),...["column-reverse","column","row-reverse","row"].map(e=>`direction-xs-${e}`),...["nowrap","wrap-reverse","wrap"].map(e=>`wrap-xs-${e}`),...f.map(e=>`grid-xs-${e}`),...f.map(e=>`grid-sm-${e}`),...f.map(e=>`grid-md-${e}`),...f.map(e=>`grid-lg-${e}`),...f.map(e=>`grid-xl-${e}`)]);var b=x,Z=r(9268);let y=["className","columns","columnSpacing","component","container","direction","item","rowSpacing","spacing","wrap","zeroMinWidth"];function S(e){let t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function w({breakpoints:e,values:t}){let r="";Object.keys(t).forEach(e=>{""===r&&0!==t[e]&&(r=e)});let o=Object.keys(e).sort((t,r)=>e[t]-e[r]);return o.slice(0,o.indexOf(r))}let $=(0,c.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e,{container:o,direction:a,item:n,spacing:i,wrap:l,zeroMinWidth:s,breakpoints:d}=r,c=[];o&&(c=function(e,t,r={}){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[r[`spacing-xs-${String(e)}`]];let o=[];return t.forEach(t=>{let a=e[t];Number(a)>0&&o.push(r[`spacing-${t}-${String(a)}`])}),o}(i,d,t));let u=[];return d.forEach(e=>{let o=r[e];o&&u.push(t[`grid-${e}-${String(o)}`])}),[t.root,o&&t.container,n&&t.item,s&&t.zeroMinWidth,...c,"row"!==a&&t[`direction-xs-${String(a)}`],"wrap"!==l&&t[`wrap-xs-${String(l)}`],...u]}})(({ownerState:e})=>(0,a.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap}),function({theme:e,ownerState:t}){let r=(0,l.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,l.k9)({theme:e},r,e=>{let t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${b.item}`]={maxWidth:"none"}),t})},function({theme:e,ownerState:t}){let{container:r,rowSpacing:o}=t,a={};if(r&&0!==o){let t;let r=(0,l.P$)({values:o,breakpoints:e.breakpoints.values});"object"==typeof r&&(t=w({breakpoints:e.breakpoints.values,values:r})),a=(0,l.k9)({theme:e},r,(r,o)=>{var a;let n=e.spacing(r);return"0px"!==n?{marginTop:`-${S(n)}`,[`& > .${b.item}`]:{paddingTop:S(n)}}:null!=(a=t)&&a.includes(o)?{}:{marginTop:0,[`& > .${b.item}`]:{paddingTop:0}}})}return a},function({theme:e,ownerState:t}){let{container:r,columnSpacing:o}=t,a={};if(r&&0!==o){let t;let r=(0,l.P$)({values:o,breakpoints:e.breakpoints.values});"object"==typeof r&&(t=w({breakpoints:e.breakpoints.values,values:r})),a=(0,l.k9)({theme:e},r,(r,o)=>{var a;let n=e.spacing(r);return"0px"!==n?{width:`calc(100% + ${S(n)})`,marginLeft:`-${S(n)}`,[`& > .${b.item}`]:{paddingLeft:S(n)}}:null!=(a=t)&&a.includes(o)?{}:{width:"100%",marginLeft:0,[`& > .${b.item}`]:{paddingLeft:0}}})}return a},function({theme:e,ownerState:t}){let r;return e.breakpoints.keys.reduce((o,n)=>{let i={};if(t[n]&&(r=t[n]),!r)return o;if(!0===r)i={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===r)i={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{let s=(0,l.P$)({values:t.columns,breakpoints:e.breakpoints.values}),d="object"==typeof s?s[n]:s;if(null==d)return o;let c=`${Math.round(r/d*1e8)/1e6}%`,u={};if(t.container&&t.item&&0!==t.columnSpacing){let r=e.spacing(t.columnSpacing);if("0px"!==r){let e=`calc(${c} + ${S(r)})`;u={flexBasis:e,maxWidth:e}}}i=(0,a.Z)({flexBasis:c,flexGrow:0,maxWidth:c},u)}return 0===e.breakpoints.values[n]?Object.assign(o,i):o[e.breakpoints.up(n)]=i,o},{})}),z=e=>{let{classes:t,container:r,direction:o,item:a,spacing:n,wrap:i,zeroMinWidth:l,breakpoints:s}=e,c=[];r&&(c=function(e,t){if(!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[`spacing-xs-${String(e)}`];let r=[];return t.forEach(t=>{let o=e[t];if(Number(o)>0){let e=`spacing-${t}-${String(o)}`;r.push(e)}}),r}(n,s));let u=[];s.forEach(t=>{let r=e[t];r&&u.push(`grid-${t}-${String(r)}`)});let p={root:["root",r&&"container",a&&"item",l&&"zeroMinWidth",...c,"row"!==o&&`direction-xs-${String(o)}`,"wrap"!==i&&`wrap-xs-${String(i)}`,...u]};return(0,d.Z)(p,h,t)},k=n.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiGrid"}),{breakpoints:l}=(0,p.Z)(),d=(0,s.Z)(r),{className:c,columns:m,columnSpacing:g,component:h="div",container:f=!1,direction:x="row",item:b=!1,rowSpacing:S,spacing:w=0,wrap:k="wrap",zeroMinWidth:C=!1}=d,M=(0,o.Z)(d,y),R=n.useContext(v),N=f?m||12:R,P={},W=(0,a.Z)({},M);l.keys.forEach(e=>{null!=M[e]&&(P[e]=M[e],delete W[e])});let I=(0,a.Z)({},d,{columns:N,container:f,direction:x,item:b,rowSpacing:S||w,columnSpacing:g||w,wrap:k,zeroMinWidth:C,spacing:w},P,{breakpoints:l.keys}),B=z(I);return(0,Z.jsx)(v.Provider,{value:N,children:(0,Z.jsx)($,(0,a.Z)({ownerState:I,className:(0,i.Z)(B.root,c),as:h,ref:t},W))})});var C=k},5991:function(e,t,r){"use strict";r.d(t,{Z:function(){return Z}});var o=r(6750),a=r(431),n=r(6006),i=r(9791),l=r(7562),s=r(3343),d=r(3207);let c=e=>((e<1?5.11916*e**2:4.5*Math.log(e+1)+2)/100).toFixed(2);var u=r(2971),p=r(8539),v=r(3809);function m(e){return(0,v.Z)("MuiPaper",e)}(0,p.Z)("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);var g=r(9268);let h=["className","component","elevation","square","variant"],f=e=>{let{square:t,elevation:r,variant:o,classes:a}=e,n={root:["root",o,!t&&"rounded","elevation"===o&&`elevation${r}`]};return(0,l.Z)(n,m,a)},x=(0,d.ZP)("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],!r.square&&t.rounded,"elevation"===r.variant&&t[`elevation${r.elevation}`]]}})(({theme:e,ownerState:t})=>{var r;return(0,a.Z)({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},"outlined"===t.variant&&{border:`1px solid ${(e.vars||e).palette.divider}`},"elevation"===t.variant&&(0,a.Z)({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&"dark"===e.palette.mode&&{backgroundImage:`linear-gradient(${(0,s.Fq)("#fff",c(t.elevation))}, ${(0,s.Fq)("#fff",c(t.elevation))})`},e.vars&&{backgroundImage:null==(r=e.vars.overlays)?void 0:r[t.elevation]}))}),b=n.forwardRef(function(e,t){let r=(0,u.Z)({props:e,name:"MuiPaper"}),{className:n,component:l="div",elevation:s=1,square:d=!1,variant:c="elevation"}=r,p=(0,o.Z)(r,h),v=(0,a.Z)({},r,{component:l,elevation:s,square:d,variant:c}),m=f(v);return(0,g.jsx)(x,(0,a.Z)({as:l,ownerState:v,className:(0,i.Z)(m.root,n),ref:t},p))});var Z=b},4240:function(e,t,r){"use strict";r.d(t,{Z:function(){return w}});var o=r(6750),a=r(431),n=r(6006),i=r(9791),l=r(6601),s=r(7562),d=r(3207),c=r(2971),u=r(6210),p=r(8539),v=r(3809);function m(e){return(0,v.Z)("MuiTypography",e)}(0,p.Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(9268);let h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=e=>{let{align:t,gutterBottom:r,noWrap:o,paragraph:a,variant:n,classes:i}=e,l={root:["root",n,"inherit"!==e.align&&`align${(0,u.Z)(t)}`,r&&"gutterBottom",o&&"noWrap",a&&"paragraph"]};return(0,s.Z)(l,m,i)},x=(0,d.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,u.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})(({theme:e,ownerState:t})=>(0,a.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),b={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},Z={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},y=e=>Z[e]||e,S=n.forwardRef(function(e,t){let r=(0,c.Z)({props:e,name:"MuiTypography"}),n=y(r.color),s=(0,l.Z)((0,a.Z)({},r,{color:n})),{align:d="inherit",className:u,component:p,gutterBottom:v=!1,noWrap:m=!1,paragraph:Z=!1,variant:S="body1",variantMapping:w=b}=s,$=(0,o.Z)(s,h),z=(0,a.Z)({},s,{align:d,color:n,className:u,component:p,gutterBottom:v,noWrap:m,paragraph:Z,variant:S,variantMapping:w}),k=p||(Z?"p":w[S]||b[S])||"span",C=f(z);return(0,g.jsx)(x,(0,a.Z)({as:k,ref:t,ownerState:z,className:(0,i.Z)(C.root,u)},$))});var w=S},6601:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var o=r(431),a=r(6750),n=r(5135),i=r(2272);let l=["sx"],s=e=>{var t,r;let o={systemProps:{},otherProps:{}},a=null!=(t=null==e?void 0:null==(r=e.theme)?void 0:r.unstable_sxConfig)?t:i.Z;return Object.keys(e).forEach(t=>{a[t]?o.systemProps[t]=e[t]:o.otherProps[t]=e[t]}),o};function d(e){let t;let{sx:r}=e,i=(0,a.Z)(e,l),{systemProps:d,otherProps:c}=s(i);return t=Array.isArray(r)?[d,...r]:"function"==typeof r?(...e)=>{let t=r(...e);return(0,n.P)(t)?(0,o.Z)({},d,t):d}:(0,o.Z)({},d,r),(0,o.Z)({},c,{sx:t})}},6008:function(e,t,r){e.exports=r(167)}}]);