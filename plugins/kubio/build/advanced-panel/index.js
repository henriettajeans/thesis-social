(()=>{"use strict";var e={n:t=>{var n=t&&t.__esModule?()=>t.default:()=>t;return e.d(n,{a:n}),n},d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};function n(){return n=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},n.apply(this,arguments)}e.r(t),e.d(t,{AdvancedInspectorPanel:()=>T,StatesControl:()=>_,withInspectorControlsAdvancedPanel:()=>R});const o=window.wp.element,l=(window.kubio.adminPanel,window.kubio.constants),r=window.kubio.controls,a=window.kubio.core,s=window.kubio.inspectors,i=window.kubio.styleManager,u=window.wp.components,c=window.wp.compose,d=window.wp.data,p=window.wp.i18n,m=window.lodash;var E=e.n(m);const S=window.kubio.log,y={[i.StylesEnum.TYPOGRAPHY]:{control:r.TypographyForTextAdvanced,mapsToStyle:!1,title:(0,p.__)("Typography","kubio")},[i.StylesEnum.TYPOGRAPHY_FOR_HEADING]:{control:r.TypographyForHeading,mapsToStyle:!1,title:(0,p.__)("Typography","kubio")},[i.StylesEnum.TYPOGRAPHY_FOR_CONTAINER]:{control:r.TypographyForContainer,mapsToStyle:!1,title:(0,p.__)("Typography","kubio")},[i.StylesEnum.TYPOGRAPHY_FOR_CONTAINER_ADVANCED]:{control:r.TypographyForContainerAdvanced,mapsToStyle:!1,title:(0,p.__)("Typography","kubio")},[i.StylesEnum.SPACING]:{control:r.SpacingControl,mapsToStyle:!1,title:(0,p.__)("Spacing","kubio")},[i.StylesEnum.BORDER]:{control:r.BorderAndShadowControl,mapsToStyle:!1,title:e=>{let{filters:t}=e;const{supportsBorder:n=!0,supportsBoxShadow:o=!0}=t;return n&&o?(0,p.__)("Border and Shadows","kubio"):n&&!o?(0,p.__)("Border","kubio"):!n&&o?(0,p.__)("Box shadow","kubio"):void 0}},[i.StylesEnum.BACKGROUND]:{control:r.BackgroundControl,title:(0,p.__)("Background","kubio"),options:{mergeArrays:!0}},[i.StylesEnum.TEXT_SHADOW]:{control:r.TextShadowControl,title:(0,p.__)("Text shadow","kubio")},[i.StylesEnum.RESPONSIVE]:{shouldRender:e=>{let{filters:t}=e;return!(null!=t&&t.isDisabled)},control:r.ResponsiveControl,mapsToStyle:!1,title:(0,p.__)("Responsive","kubio")},[i.StylesEnum.SEPARATORS]:{control:r.SeparatorsControl,title:(0,p.__)("Dividers","kubio")},[i.StylesEnum.TRANSFORM]:{control:r.TransformControl,title:(0,p.__)("Transform","kubio"),options:{mergeData:!0}},[i.StylesEnum.APPEARANCE]:{shouldRender:e=>{let{filters:t}=e;return!(null!=t&&t.isDisabled)},control:r.AppearanceControl,title:(0,p.__)("Entrance animation","kubio")},[i.StylesEnum.TRANSITION]:{control:r.TransitionControlOnHover,shouldRender:e=>"hover"===e.state,title:(0,p.__)("Transition","kubio")},[i.StylesEnum.MISC]:{shouldRender:e=>{let{filters:t}=e;return!(null!=t&&t.isDisabled)},control:r.MiscControl,title:(0,p.__)("Miscellaneous","kubio")}},b=[i.StylesEnum.TRANSITION,i.StylesEnum.BACKGROUND,i.StylesEnum.SEPARATORS,i.StylesEnum.SPACING,i.StylesEnum.BORDER,i.StylesEnum.BOX_SHADOW,i.StylesEnum.TYPOGRAPHY,i.StylesEnum.TYPOGRAPHY_FOR_CONTAINER,i.StylesEnum.TYPOGRAPHY_FOR_CONTAINER_ADVANCED,i.StylesEnum.TYPOGRAPHY_FOR_HEADING,i.StylesEnum.TEXT_SHADOW,i.StylesEnum.TRANSFORM,i.StylesEnum.APPEARANCE,i.StylesEnum.RESPONSIVE,i.StylesEnum.MISC],k=e=>{let{selectedElement:t}=e,n=[];return t&&(n=(0,m.get)(t,"supports.states",["normal","hover"])),n},_=e=>{var t;let{activeState:n,setActiveState:l,availableStates:r=[],selectedElement:a=null,label:s=null}=e;const c=(0,m.isEmpty)(r)?k({selectedElement:a}):r,d=null===(t=(0,m.find)(i.statesById,{value:n}))||void 0===t?void 0:t.id;return!(c.length<=1)&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)("div",{className:"kubio-states-control-label"},s),(0,o.createElement)(u.__experimentalRadioGroup,{id:"kubio-states-control",className:"kubio-states-control-radio-group",defaultChecked:n,checked:d,onChange:e=>{var t;return l(null===(t=i.statesById[e])||void 0===t?void 0:t.value)}},c.map((e=>{var t,n;return(0,o.createElement)(u.__experimentalRadio,{key:e,value:null===(t=i.statesById[e])||void 0===t?void 0:t.id},null===(n=i.statesById[e])||void 0===n?void 0:n.label)}))))},v=window.wp.blocks,g=e=>{const{styles:t,selectedStyledElement:n,dataHelper:l}=e;return b.filter((e=>t.includes(e))).filter(Boolean).map((e=>(0,o.createElement)(A,{key:e,style:e,selectedStyledElement:n,dataHelper:l})))},A=e=>{let{style:t,selectedStyledElement:n,dataHelper:l}=e;const{defaultOptions:r}=(0,a.useDataHelperDefaultOptionsContext)(),s=y[t];if(!s)return S.Log.error(`Advanced panel: "${t}" does not exists`),(0,o.createElement)(o.Fragment,null);const{control:i,mapsToStyle:c=!0,shouldRender:d=(()=>!0),options:p={}}=s,m=c?l.useStylePath(t,{...r,...p},{}):{dataHelper:l},b=E().get(n,["supports","filters",t],{});let k="";k="function"==typeof y[t].title?y[t].title({filters:b}):y[t].title;const _={dataHelper:l,property:t,state:E().get(r,"state"),...m,filters:b,styledElement:n.name};return d(_)&&(0,o.createElement)(u.PanelBody,{key:`panel-${t}`,classname:"kubio-advanced-panel-panelbody",title:k,initialOpen:!1},(0,o.createElement)(i,_))},O=e=>{const{name:t,clientId:l}=e,{blockDefinition:s,getBlock:u}=(0,d.useSelect)((e=>({blockDefinition:e("core/blocks").getBlockType(t),getBlock:e("core/block-editor").getBlock}))),{displayAdvancedPanelFor:c}=s,m=c?c(l,d.select):null,S=m?u(m).name:t,y=(0,a.getBlockElements)(S,!1,!0),b=(0,a.getBlockDefaultElement)(S)||y[0],[A,O]=(0,o.useState)(""),[T,R]=(0,o.useState)(b),w=E().get(T,"supports.styles",[]),C=(0,o.useMemo)((()=>y.reduce(((e,t)=>{const{items:n}=t;return n?[...e,...n]:[...e,t]}),[])),[y]),h=null==T?void 0:T.name,P=(0,d.useSelect)((e=>e("core/block-editor").getBlock(m||l)),[m,l]),{dataHelper:f}=(0,a.useKubioDataHelper)(P),N={state:A,styledComponent:h},D=(0,a.useDataHelperDefaultOptionsContext)({defaultOptions:N});if(!w.length)return(0,o.createElement)("div",{className:"kubio-editing-header"},(0,o.createElement)(r.ControlNotice,{content:(0,p.__)("Current block does not support advanced styling","kubio")}));const B=C.filter((e=>!e.internal)).length;f.kubioSupports("advanced.responsive",!0)&&(T.wrapper||B<=1)&&w.push(i.StylesEnum.RESPONSIVE),f.kubioSupports("advanced.misc",!0)&&(T.wrapper||B<=1)&&w.push(i.StylesEnum.MISC),(0,v.hasBlockSupport)(null==f?void 0:f.blockName,"kubio.appearanceEffect",!1)&&w.push(i.StylesEnum.APPEARANCE);const H=k({selectedElement:T});return(0,o.createElement)(a.DataHelperDefaultOptionsContext.Provider,{value:D},(0,o.createElement)(a.KubioBlockContext.Provider,{value:{dataHelper:f}},(y.length>1||H.length>1)&&(0,o.createElement)("div",{className:"kubio-editing-header"},y.length>1&&(0,o.createElement)(r.GutentagSelectControl,{className:"kubio-editing-select",label:(0,p.__)("Editing","kubio"),value:null==T?void 0:T.name,onChange:e=>{R(C.find((t=>t.name===e))),O("")},options:y}),(0,o.createElement)(_,{label:(0,p.__)("State","kubio"),activeState:A,setActiveState:e=>{O("normal"===e?"":e)},selectedElement:T,availableStates:H})),(0,o.createElement)(g,n({},e,{styles:w,selectedStyledElement:T,dataHelper:f}))))},T=e=>((0,d.useSelect)((e=>!!e(l.STORE_KEY)&&e(l.STORE_KEY).isGutentagDebug()),[]),(0,o.createElement)(s.AdvancedInspectorControls,{clientId:e.clientId},(0,o.createElement)(O,e))),R=(0,c.createHigherOrderComponent)((e=>t=>{const n=(0,a.getBlockAncestor)(null==t?void 0:t.name),{ancestor:l}=(0,a.useAncestorContext)();let i={};n&&l===n&&(i={ancestor:l}),n&&(i.inheritedAncestor=n);const u={defaultOptions:i},c=(0,a.useDataHelperDefaultOptionsContext)(u);return(0,o.createElement)(a.DataHelperDefaultOptionsContext.Provider,{value:c},(0,o.createElement)(e,t),t.isSelected&&(0,o.createElement)(o.Fragment,null,(0,o.createElement)(T,t),(0,o.createElement)(s.BlockInspectorTopControls,null,(0,o.createElement)(r.LinkedNotice,t),(0,o.createElement)(r.AncestorNotice,null))))}),"withInspectorControlsAdvancedPanel");(window.kubio=window.kubio||{}).advancedPanel=t})();
