import{j as R}from"./jsx-runtime-u17CrQMm.js";import{r as i}from"./iframe-6NWa3uRH.js";const H=1;function k(e,t){return Math.floor(e*10**t)/10**t}const pe=(e,t)=>e-t>=-H&&e-t<=H,P=(e,t)=>e-t>=H,U=(e,t,n)=>k(e*t/n,2),A=(e,t,n)=>k(e*n/t,2),M=e=>typeof e=="number";function $({children:e}){return e}function N(...e){const t=[];for(const n of e)n instanceof Array?t.push(N(...n)):typeof n=="string"?t.push(n):typeof n=="object"&&n!==null&&t.push(...Object.keys(n).reduce((a,o)=>n[o]?[...a,o]:a,[]));return t.join(" ")}function O(e,t){return typeof e=="function"?e(t):e}function x(e,t){return typeof e=="function"?e(t):e}function ee({isVertical:e=!1,classNames:t,styles:n,...a},o){const s=e?"vertical scrollbar":"horizontal scrollbar",r=e?"vertical":"horizontal";return R.jsx("div",{className:N("scrollable__scrollbar",{scrollable__scrollbar_horizontal:!e,scrollable__scrollbar_vertical:e},O(t?.scrollbar,{isVertical:e})),style:x(n?.scrollbar,{isVertical:e}),children:R.jsx("div",{className:N("scrollable__scrollbar__track"),children:R.jsx("div",{...a,ref:o,className:N("scrollable__scrollbar__thumb",{scrollable__scrollbar__thumb_horizontal:!e,scrollable__scrollbar__thumb_vertical:e},O(t?.thumb,{isVertical:e})),style:x(n?.thumb,{isVertical:e}),role:"scrollbar","aria-orientation":r,"aria-label":s,"aria-valuenow":0,"aria-hidden":!0})})})}const z=i.memo(i.forwardRef(ee)),te=()=>Math.random().toString(16).slice(2)+new Date().getTime()+Math.random().toString(16).slice(2);function ne(...e){return e.length===2?W(e[0],e[1])||null:e.slice(1).reduce((n,a)=>W(n,a),e[0])||null}const j=new WeakMap;function W(e,t){if(e&&t){const n=j.get(e)||new WeakMap;j.set(e,n);const a=n.get(t)||(o=>{V(e,o),V(t,o)});return n.set(t,a),a}return e||t}function V(e,t){typeof e=="function"?e(t):e.current=t}const I=e=>`${e}px`,B=(e,t)=>{Object.entries(t).forEach(([n,a])=>{e.setAttribute(n,a)})},C=(e,{value:t,scrollableElement:n,isVertical:a})=>{const o=n.getBoundingClientRect();if(a){const s=A(t,n.scrollHeight,o.height);e.style.transform=`translateY(${I(s)})`;const r=!P(n.scrollHeight,o.height);B(e,{"aria-valuenow":t.toString(),"aria-hidden":r.toString(),"data-scroll-top":s.toString()})}else{const s=A(t,n.scrollWidth,o.width);e.style.transform=`translateX(${I(s)})`;const r=!P(n.scrollWidth,o.width);B(e,{"aria-valuenow":t.toString(),"aria-hidden":r.toString(),"data-scroll-left":s.toString()})}},S=e=>{const t=i.useRef(e);return i.useLayoutEffect(()=>{t.current=e}),i.useCallback((...n)=>t.current(...n),[])},L=()=>{const e=i.useRef(null);return S(t=>{e.current&&(cancelAnimationFrame(e.current),e.current=null),e.current=requestAnimationFrame(n=>{t(n),e.current=null})})},re=({scrollbarRef:e,scrollableRef:t,ignoresScrollEvents:n})=>{const a=i.useRef(!1),o=i.useRef(0),s=i.useRef(0),r=L(),f=S(l=>{if((l.pointerType==="mouse"||l.pointerType==="touch")&&l.isPrimary){a.current=!0,l.currentTarget.setPointerCapture(l.pointerId),o.current=l.clientX;const d=l.currentTarget.getBoundingClientRect();s.current=l.clientX-d.left}}),u=S(l=>{const d=t.current,g=l.currentTarget,p=g.parentElement;if(!d||!p)return;const m=p.getBoundingClientRect(),c=g.getBoundingClientRect();if(a.current&&(l.pointerType==="mouse"||l.pointerType==="touch")&&l.isPrimary&&P(m.width,c.width)){const w=c.left-m.left;let b;if(l.clientX<m.left+Math.floor(s.current)?b=0:l.clientX>m.left+m.width-Math.ceil(c.width-s.current)?b=m.width-c.width:b=Math.min(Math.max(w+l.clientX-o.current,0),m.width-c.width),b!==w){o.current=l.clientX;const y=e.current;if(y){const v=d.getBoundingClientRect(),T=U(b,d.scrollWidth,v.width);n.current=!0,C(y,{scrollableElement:d,value:T,isVertical:!1}),r(()=>{d.scrollLeft=T})}}}}),h=S(()=>{a.current=!1,o.current=0,s.current=0});return{onPointerDown:f,onPointerMove:u,onPointerUp:h}},le=({scrollableRef:e,scrollbarRef:t,ignoresScrollEvents:n})=>{const a=i.useRef(!1),o=i.useRef(0),s=i.useRef(0),r=L(),f=S(l=>{if((l.pointerType==="mouse"||l.pointerType==="touch")&&l.isPrimary){a.current=!0,l.currentTarget.setPointerCapture(l.pointerId),o.current=l.clientY;const d=l.currentTarget.getBoundingClientRect();s.current=l.clientY-d.top}}),u=S(l=>{const d=e.current,g=l.currentTarget,p=g.parentElement;if(!d||!p)return;const m=p.getBoundingClientRect(),c=g.getBoundingClientRect();if(a.current&&(l.pointerType==="mouse"||l.pointerType==="touch")&&l.isPrimary&&P(m.height,c.height)){const w=c.top-m.top;let b;if(l.clientY<m.top+Math.floor(s.current)?b=0:l.clientY>m.top+m.height-Math.ceil(c.height-s.current)?b=m.height-c.height:b=Math.min(Math.max(w+l.clientY-o.current,0),m.height-c.height),b!==w){o.current=l.clientY;const y=t.current;if(y){const v=d.getBoundingClientRect(),T=U(b,d.scrollHeight,v.height);n.current=!0,C(y,{scrollableElement:d,value:T,isVertical:!0}),r(()=>{d.scrollTop=T})}}}}),h=S(()=>{a.current=!1,o.current=0,s.current=0});return{onPointerDown:f,onPointerMove:u,onPointerUp:h}},ae=({scrollableRef:e,hScrollbarRef:t,vScrollbarRef:n,onResize:a})=>{const o=S(a),s=i.useMemo(()=>new ResizeObserver(()=>{const r=e.current;if(r){const f=P(r.scrollWidth,r.offsetWidth)?k(r.offsetWidth/(r.scrollWidth/r.offsetWidth),1):0,u=P(r.scrollHeight,r.offsetHeight)?k(r.offsetHeight/(r.scrollHeight/r.offsetHeight),1):0,h=n.current,l=t.current;h&&(h.style.height=I(u),C(h,{scrollableElement:r,value:r.scrollTop,isVertical:!0})),l&&(l.style.width=I(f),C(l,{scrollableElement:r,value:r.scrollLeft,isVertical:!1})),o({hThumbSize:f,vThumbSize:u})}}),[e,n,t,o]);i.useLayoutEffect(()=>{const r=e.current,f=r?.firstElementChild;return r&&s.observe(r),f&&s.observe(f),()=>{r&&s.unobserve(r),f&&s.unobserve(f)}},[s,e])},oe=({hScrollbarRef:e,vScrollbarRef:t,onScroll:n,onLeftEdgeReached:a,onRightEdgeReached:o,onTopEdgeReached:s,onBottomEdgeReached:r,suppressHandlers:f,ignoresScrollEvents:u})=>{const h=i.useRef(0),l=i.useRef(0),d=i.useRef(!1),g=L();return{onScroll:S(m=>{const{currentTarget:c}=m,w=t.current,b=e.current;if(!w||!b)return;!u.current&&!d.current&&(d.current=!0,g(()=>{C(w,{scrollableElement:c,value:c.scrollTop,isVertical:!0}),C(b,{scrollableElement:c,value:c.scrollLeft,isVertical:!1}),d.current=!1})),u.current=!1;const y=c.getBoundingClientRect();f||(h.current!==c.scrollTop&&(c.scrollTop===0&&s?.(m),c.scrollTop===c.scrollHeight-y.height&&r?.(m)),l.current!==c.scrollLeft&&(c.scrollLeft===0&&a?.(m),c.scrollLeft===c.scrollWidth-y.width&&o?.(m))),h.current=c.scrollTop,l.current=c.scrollLeft,n?.(m)})}},se=({vScrollbarRef:e,hScrollbarRef:t,ignoresScrollEvents:n})=>{const a=i.useRef(0),o=i.useRef(0),s=L(),r=S(u=>{u.pointerType==="touch"&&u.isPrimary&&(u.currentTarget.setPointerCapture(u.pointerId),a.current=u.clientX,o.current=u.clientY)}),f=S(u=>{if(u.pointerType==="touch"&&u.isPrimary){const h=u.currentTarget,l=u.currentTarget.getBoundingClientRect();let d,g;if(P(h.scrollHeight,l.height)){const p=Math.min(Math.max(h.scrollTop-(u.clientY-o.current),0),h.scrollHeight-l.height);e.current&&h.scrollTop!==p&&(o.current=u.clientY,n.current=!0,d=p,h.scrollTop=p)}if(P(h.scrollWidth,l.width)){const p=Math.min(Math.max(h.scrollLeft-(u.clientX-a.current),0),h.scrollWidth-l.width);t.current&&h.scrollLeft!==p&&(a.current=u.clientX,n.current=!0,g=p,h.scrollLeft=p)}s(()=>{let p=e.current;p&&M(d)&&C(p,{scrollableElement:h,value:d,isVertical:!0}),p=t.current,p&&M(g)&&C(p,{scrollableElement:h,value:g,isVertical:!1})})}});return{onPointerDown:r,onPointerMove:f}},ie=(e,t)=>Object.keys(e).length===Object.keys(t).length&&!Object.entries(e).find(([n,a])=>a!==t[n]),ce=({scrollableRef:e,onScrollableStateChange:t=void 0})=>{const[n,a]=i.useState(void 0);i.useLayoutEffect(()=>{const r=e.current;r&&a({isLeftEdgeReached:r.scrollLeft===0,isRightEdgeReached:r.scrollLeft===r.scrollWidth-r.offsetWidth,isTopEdgeReached:r.scrollTop===0,isBottomEdgeReached:r.scrollTop===r.scrollHeight-r.offsetHeight})},[e]);const o=S(r=>{const f={isLeftEdgeReached:r.scrollLeft===0,isRightEdgeReached:r.scrollLeft===r.scrollWidth-r.offsetWidth,isTopEdgeReached:r.scrollTop===0,isBottomEdgeReached:r.scrollTop===r.scrollHeight-r.offsetHeight};(!n||!ie(n,f))&&a(f)}),s=S(r=>t?.(r));return i.useEffect(()=>{s(n)},[n,s]),[n,o]};function ue({children:e,showThumbOnHover:t=!1,className:n=void 0,classNames:a=void 0,style:o=void 0,styles:s=void 0,onLeftEdgeReached:r=void 0,onRightEdgeReached:f=void 0,onTopEdgeReached:u=void 0,onBottomEdgeReached:h=void 0,onScrollableStateChange:l=void 0,suppressHandlers:d=!1,...g},p){const[m,c]=i.useState([!1,!1]),[w,b]=m,y=i.useRef(null),v=i.useRef(null),T=i.useRef(null),q=i.useMemo(()=>g.id??te(),[g.id]),[Y,D]=ce({scrollableRef:T,onScrollableStateChange:l});ae({scrollableRef:T,hScrollbarRef:v,vScrollbarRef:y,onResize(_){c([_.hThumbSize!==0,_.vThumbSize!==0])}});const F=i.useRef(!1),G=S(_=>{d||i.startTransition(()=>{D(_.currentTarget)}),g.onScroll?.(_)}),J=oe({hScrollbarRef:v,vScrollbarRef:y,onScroll:G,onLeftEdgeReached:r,onRightEdgeReached:f,onTopEdgeReached:u,onBottomEdgeReached:h,suppressHandlers:d,ignoresScrollEvents:F}),K=se({hScrollbarRef:v,vScrollbarRef:y,ignoresScrollEvents:F}),Q=re({scrollbarRef:v,scrollableRef:T,ignoresScrollEvents:F}),Z=le({scrollbarRef:y,scrollableRef:T,ignoresScrollEvents:F}),E={hasHorizontalScrollbar:w,hasVerticalScrollbar:b,showThumbOnHover:t,...Y};return R.jsx($,{children:R.jsxs("div",{className:N("scrollable",{"scrollable_has-horizontal-scrollbar":w,"scrollable_has-vertical-scrollbar":b,"scrollable_show-mouse-on-hover":t},O(a?.scrollable,E)),style:x(s?.scrollable,E),children:[R.jsx("div",{className:N("scrollable__content-wrapper",O(a?.contentWrapper,E)),style:x(s?.contentWrapper,E),children:R.jsx("div",{...g,id:q,className:N("scrollable__content",O(a?.content,E),n),style:{...o,...x(s?.content,E)},ref:ne(p,T),"data-testid":"scrollable",...J,...K,children:R.jsx("div",{className:"scrollable__content-inner",children:typeof e=="function"?e(E):e})})}),R.jsx(z,{ref:y,isVertical:!0,"aria-controls":q,classNames:a,...Z}),R.jsx(z,{ref:v,"aria-controls":q,classNames:a,...Q}),R.jsx("div",{"data-testid":"extreme-point"})]})})}const X=i.memo(i.forwardRef(ue));X.displayName="Scrollable";X.__docgenInfo={description:"Scrollable is a custom component made to handle scrolling with a custom scrollbar.\nThe scrolling functionality relies on the browser's native implementation, while the scrollbars are hidden (`scrollbar-width: none;` `::-webkit-scrollbar { width: 0; }`).\nScrollbars are implemented as separate programmatically controlled elements.\n\nThe component supports all properties of the HTML element that are passed to the inner element with the CSS overflow rule. For example, this allows configuring scrolling rules.\n\nUsing [additional properties](#on-left-edge-reached-props-anchor), the component can intercept events when the scrollable area reaches its top, bottom, left, or right edge.\n\nThe component supports multiple styling techniques:\n1. using CSS variables to support simple scrollbar styling. See available variables and default values below:\n - thumb variables:\n     - `--thumb-border: none;`\n     - `--thumb-border-radius: 3px;`\n     - `--thumb-background: #C7CED480;`\n     - `--thumb-size: 6px;`\n - scrollbar variables:\n     - `--scrollbar-background: none;`\n     - `--scrollbar-border: none;`\n     - `--scrollbar-border-radius: 0;`\n\n2. using [classNames api](#classnames-props-anchor) to support more complex styling\n\n3. using [styles api](#styles-props-anchor) to support more complex styling\n\n4. using component's internal classes to support more complex styling\n - `scrollable` - the wrapper element class containing the scrollable area and scrollbars, implemented as a dynamic grid.\n - `scrollable__content` - scrollable element class - uses CSS overflow property\n - `scrollable__scrollbar` - scrollbar element class\n - `scrollable__scrollbar_vertical` - vertical scrollbar modifier class\n - `scrollable__scrollbar_horizontal` - horizontal scrollbar modifier class\n - `scrollable__scrollbar__thumb` - thumb element class",methods:[],displayName:"Scrollable",props:{showThumbOnHover:{required:!1,tsType:{name:"boolean"},description:"show thumbs on mouse hover, effects only for pointing devices like a mouse",defaultValue:{value:"false",computed:!1}},onLeftEdgeReached:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: UIEvent) => void",signature:{arguments:[{type:{name:"UIEvent"},name:"event"}],return:{name:"void"}}},description:`<a name="on-left-edge-reached-props-anchor"></a>
called when the scrollable area reaches its left edge`,defaultValue:{value:"undefined",computed:!0}},onRightEdgeReached:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: UIEvent) => void",signature:{arguments:[{type:{name:"UIEvent"},name:"event"}],return:{name:"void"}}},description:"called when the scrollable area reaches its right edge",defaultValue:{value:"undefined",computed:!0}},onTopEdgeReached:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: UIEvent) => void",signature:{arguments:[{type:{name:"UIEvent"},name:"event"}],return:{name:"void"}}},description:"called when the scrollable area reaches its top edge",defaultValue:{value:"undefined",computed:!0}},onBottomEdgeReached:{required:!1,tsType:{name:"signature",type:"function",raw:"(event: UIEvent) => void",signature:{arguments:[{type:{name:"UIEvent"},name:"event"}],return:{name:"void"}}},description:"called when the scrollable area reaches its bottom edge",defaultValue:{value:"undefined",computed:!0}},onScrollableStateChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(scrollableState: ScrollableStateType | undefined) => void",signature:{arguments:[{type:{name:"union",raw:"ScrollableStateType | undefined",elements:[{name:"signature",type:"object",raw:`{
  /**
   * Is the element scrolled to the top?
   * @type {?boolean} null - no vertical overflow, true - scrolled to the top edge
   */
  isTopEdgeReached: boolean;
  /**
   * Is the element scrolled to the bottom?
   * @type {?boolean} null - no vertical overflow, true - scrolled to the bottom edge
   */
  isBottomEdgeReached: boolean;
  /**
   * Is the element scrolled to the left?
   * @type {?boolean} null - no horizontal overflow, true - scrolled to the left edge
   */
  isLeftEdgeReached: boolean;
  /**
   * Is the element scrolled to the right?
   * @type {?boolean} null - no horizontal overflow, true - scrolled to the right edge
   */
  isRightEdgeReached: boolean;
}`,signature:{properties:[{key:"isTopEdgeReached",value:{name:"boolean",required:!0},description:`Is the element scrolled to the top?
@type {?boolean} null - no vertical overflow, true - scrolled to the top edge`},{key:"isBottomEdgeReached",value:{name:"boolean",required:!0},description:`Is the element scrolled to the bottom?
@type {?boolean} null - no vertical overflow, true - scrolled to the bottom edge`},{key:"isLeftEdgeReached",value:{name:"boolean",required:!0},description:`Is the element scrolled to the left?
@type {?boolean} null - no horizontal overflow, true - scrolled to the left edge`},{key:"isRightEdgeReached",value:{name:"boolean",required:!0},description:`Is the element scrolled to the right?
@type {?boolean} null - no horizontal overflow, true - scrolled to the right edge`}]}},{name:"undefined"}]},name:"scrollableState"}],return:{name:"void"}}},description:`called when component is mounted or its inner state is changed
@param {Object} scrollableState - component inner state
@param {boolean} scrollableState.isTopEdgeReached - Is the element scrolled to the top?
@param {boolean} scrollableState.isBottomEdgeReached - Is the element scrolled to the bottom?
@param {boolean} scrollableState.isLeftEdgeReached - Is the element scrolled to the left?
@param {boolean} scrollableState.isRightEdgeReached - Is the element scrolled to the right?`,defaultValue:{value:"undefined",computed:!0}},suppressHandlers:{required:!1,tsType:{name:"boolean"},description:"suppress handlers: `onLeftEdgeReached`, `onRightEdgeReached`, `onTopEdgeReached`, `onBottomEdgeReached`, `onScrollableStateChange`\n\nThis is useful, for instance, for temporarily disabling event handlers while dynamic content loads and a splash screen is displayed.\nIn this case, the splash screen's dimensions must not affect the scrolling behavior of the element content.\nThis property does not suppress native handlers (e.g., onScroll).",defaultValue:{value:"false",computed:!1}},className:{required:!1,tsType:{name:"string"},description:"used to add class name to the HTML element with `overflow: auto`",defaultValue:{value:"undefined",computed:!0}},style:{required:!1,tsType:{name:"CSSProperties"},description:"used to add style to the HTML element with `overflow: auto`",defaultValue:{value:"undefined",computed:!0}},classNames:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  /**
   * the wrapper element class containing the scrollable area and scrollbars, implemented as a dynamic grid.
   */
  scrollable: ClassNameStringOrFnType<ScrollablePayloadType>;
  /**
   * className for the container element that wraps the element with \`overflow: auto\`;
   * the element is designed to position child elements relative to the content area, excluding the scrollbars.
   */
  contentWrapper: ClassNameStringOrFnType<ScrollablePayloadType>;
  /**
   * className for element with \`overflow: auto\`
   */
  content: ClassNameStringOrFnType<ScrollablePayloadType>;
  /**
   * scrollbar element class
   */
  scrollbar: ClassNameStringOrFnType<{
    isVertical: boolean;
  }>;
  /**
   * thumb element class
   */
  thumb: ClassNameStringOrFnType<{
    isVertical: boolean;
  }>;
}`,signature:{properties:[{key:"scrollable",value:{name:"union",raw:`| ClassNameStringOrFnReturnType
| (
Payload extends undefined
  ? () => ClassNameStringOrFnReturnType
  : (payload: Payload) => ClassNameStringOrFnReturnType
)`,elements:[{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},{name:"unknown"}],required:!0},description:"the wrapper element class containing the scrollable area and scrollbars, implemented as a dynamic grid."},{key:"contentWrapper",value:{name:"union",raw:`| ClassNameStringOrFnReturnType
| (
Payload extends undefined
  ? () => ClassNameStringOrFnReturnType
  : (payload: Payload) => ClassNameStringOrFnReturnType
)`,elements:[{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},{name:"unknown"}],required:!0},description:"className for the container element that wraps the element with `overflow: auto`;\nthe element is designed to position child elements relative to the content area, excluding the scrollbars."},{key:"content",value:{name:"union",raw:`| ClassNameStringOrFnReturnType
| (
Payload extends undefined
  ? () => ClassNameStringOrFnReturnType
  : (payload: Payload) => ClassNameStringOrFnReturnType
)`,elements:[{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},{name:"unknown"}],required:!0},description:"className for element with `overflow: auto`"},{key:"scrollbar",value:{name:"union",raw:`| ClassNameStringOrFnReturnType
| (
Payload extends undefined
  ? () => ClassNameStringOrFnReturnType
  : (payload: Payload) => ClassNameStringOrFnReturnType
)`,elements:[{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},{name:"unknown"}],required:!0},description:"scrollbar element class"},{key:"thumb",value:{name:"union",raw:`| ClassNameStringOrFnReturnType
| (
Payload extends undefined
  ? () => ClassNameStringOrFnReturnType
  : (payload: Payload) => ClassNameStringOrFnReturnType
)`,elements:[{name:"union",raw:"string | string[]",elements:[{name:"string"},{name:"Array",elements:[{name:"string"}],raw:"string[]"}]},{name:"unknown"}],required:!0},description:"thumb element class"}]}}],raw:`Partial<{
  /**
   * the wrapper element class containing the scrollable area and scrollbars, implemented as a dynamic grid.
   */
  scrollable: ClassNameStringOrFnType<ScrollablePayloadType>;
  /**
   * className for the container element that wraps the element with \`overflow: auto\`;
   * the element is designed to position child elements relative to the content area, excluding the scrollbars.
   */
  contentWrapper: ClassNameStringOrFnType<ScrollablePayloadType>;
  /**
   * className for element with \`overflow: auto\`
   */
  content: ClassNameStringOrFnType<ScrollablePayloadType>;
  /**
   * scrollbar element class
   */
  scrollbar: ClassNameStringOrFnType<{
    isVertical: boolean;
  }>;
  /**
   * thumb element class
   */
  thumb: ClassNameStringOrFnType<{
    isVertical: boolean;
  }>;
}>`},description:`<a name="classnames-props-anchor"></a>
A set of classes for styling the scrollbar area. The values for the classes can be a string or a function that takes the appropriate argument and returns a string.
@param {Object} classNames - classnames set
@param {string|Array<string>} classNames.scrollable the wrapper element classname containing the scrollable area and scrollbars, implemented as a dynamic grid.
@param {string|Array<string>} classNames.contentWrapper className for the container element that wraps the element with \`overflow: auto\`
@param {string|Array<string>} classNames.content className for element with \`overflow: auto\`
@param {string|Array<string>} classNames.scrollbar scrollbar element classname
@param {string|Array<string>} classNames.thumb thumb element classname`,defaultValue:{value:"undefined",computed:!0}},styles:{required:!1,tsType:{name:"Partial",elements:[{name:"signature",type:"object",raw:`{
  /**
   * the wrapper element styles containing the scrollable area and scrollbars, implemented as a dynamic grid.
   */
  scrollable: StylesOrFnType<ScrollablePayloadType>;
  /**
   * styles for the container element that wraps the element with \`overflow: auto\`;
   * the element is designed to position child elements relative to the content area, excluding the scrollbars.
   */
  contentWrapper: StylesOrFnType<ScrollablePayloadType>;
  /**
   * styles for element with \`overflow: auto\`
   */
  content: StylesOrFnType<ScrollablePayloadType>;
  /**
   * scrollbar element styles
   */
  scrollbar: StylesOrFnType<{
    isVertical: boolean;
  }>;
  /**
   * thumb element styles
   */
  thumb: StylesOrFnType<{
    isVertical: boolean;
  }>;
}`,signature:{properties:[{key:"scrollable",value:{name:"union",raw:`| CSSProperties
| (
Payload extends undefined
  ? () => CSSProperties
  : (payload: Payload) => CSSProperties
)`,elements:[{name:"CSSProperties"},{name:"unknown"}],required:!0},description:"the wrapper element styles containing the scrollable area and scrollbars, implemented as a dynamic grid."},{key:"contentWrapper",value:{name:"union",raw:`| CSSProperties
| (
Payload extends undefined
  ? () => CSSProperties
  : (payload: Payload) => CSSProperties
)`,elements:[{name:"CSSProperties"},{name:"unknown"}],required:!0},description:"styles for the container element that wraps the element with `overflow: auto`;\nthe element is designed to position child elements relative to the content area, excluding the scrollbars."},{key:"content",value:{name:"union",raw:`| CSSProperties
| (
Payload extends undefined
  ? () => CSSProperties
  : (payload: Payload) => CSSProperties
)`,elements:[{name:"CSSProperties"},{name:"unknown"}],required:!0},description:"styles for element with `overflow: auto`"},{key:"scrollbar",value:{name:"union",raw:`| CSSProperties
| (
Payload extends undefined
  ? () => CSSProperties
  : (payload: Payload) => CSSProperties
)`,elements:[{name:"CSSProperties"},{name:"unknown"}],required:!0},description:"scrollbar element styles"},{key:"thumb",value:{name:"union",raw:`| CSSProperties
| (
Payload extends undefined
  ? () => CSSProperties
  : (payload: Payload) => CSSProperties
)`,elements:[{name:"CSSProperties"},{name:"unknown"}],required:!0},description:"thumb element styles"}]}}],raw:`Partial<{
  /**
   * the wrapper element styles containing the scrollable area and scrollbars, implemented as a dynamic grid.
   */
  scrollable: StylesOrFnType<ScrollablePayloadType>;
  /**
   * styles for the container element that wraps the element with \`overflow: auto\`;
   * the element is designed to position child elements relative to the content area, excluding the scrollbars.
   */
  contentWrapper: StylesOrFnType<ScrollablePayloadType>;
  /**
   * styles for element with \`overflow: auto\`
   */
  content: StylesOrFnType<ScrollablePayloadType>;
  /**
   * scrollbar element styles
   */
  scrollbar: StylesOrFnType<{
    isVertical: boolean;
  }>;
  /**
   * thumb element styles
   */
  thumb: StylesOrFnType<{
    isVertical: boolean;
  }>;
}>`},description:`<a name="styles-props-anchor"></a>
A set of styles for styling scrollable component. The values for the classes can be a string or a function that takes the appropriate argument and returns a string.
@param {Object} styles - styles set
@param {string|Array<string>} styles.scrollable the wrapper element styles containing the scrollable area and scrollbars, implemented as a dynamic grid.
@param {string|Array<string>} styles.contentWrapper styles for the container element that wraps the element with \`overflow: auto\`
@param {string|Array<string>} styles.content styles for element with \`overflow: auto\`
@param {string|Array<string>} styles.scrollbar scrollbar element styles
@param {string|Array<string>} styles.thumb thumb element styles`,defaultValue:{value:"undefined",computed:!0}},children:{required:!0,tsType:{name:"union",raw:"ReactNode | ((payload: ScrollablePayloadType | undefined) => ReactNode)",elements:[{name:"ReactNode"},{name:"unknown"}]},description:`The content of the scrollable area.
@param {Object} payload - scrollable payload
@param {boolean} payload.isTopEdgeReached Is the element scrolled to the top?
@param {boolean} payload.isBottomEdgeReached Is the element scrolled to the bottom?
@param {boolean} payload.isLeftEdgeReached Is the element scrolled to the left?
@param {boolean} payload.isRightEdgeReached Is the element scrolled to the right?
@param {boolean} payload.hasHorizontalScrollbar Is there a horizontal scrollbar?
@param {boolean} payload.hasVerticalScrollbar Is there a vertical scrollbar?
@param {boolean} payload.showThumbOnHover show scrollbar on hover?`}}};function de(e,t,n=1){const a=Math.floor((t-e)/n)+1;return Array.from({length:a},(o,s)=>e+s*n)}const fe=(e,t,n=1)=>new Promise(a=>{setTimeout(()=>{a(de(e,t,n))},1e3)}),be=(e,t)=>{const n=e.getAttribute(t);return n?parseFloat(n):0};export{X as M,A as a,N as b,de as c,be as g,pe as i,fe as l,U as t,S as u};
