import{j as r}from"./jsx-runtime-u17CrQMm.js";import{M as l,b as N}from"./utils-COpjxeGT.js";import{H as h,l as g}from"./simple.stories-C14XS0Ua.js";import{c as n}from"./emotion-css.esm-D51XB6Mv.js";import{r as o}from"./iframe-6NWa3uRH.js";import"./preload-helper-PPVm8Dsz.js";const k={scrollable:n({width:300,height:300,"--thumb-size":"10px","--thumb-background":"cyan","--thumb-border-radius":"5px","--scrollbar-border":"1px solid cyan","--scrollbar-border-radius":"5px"})};function w({children:e}){return r.jsx(l,{classNames:k,children:e})}w.__docgenInfo={description:"",methods:[],displayName:"ScrollableExample",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const T=`import Scrollable, { type ClassNamesType } from '@shinvik/react-scrollable';
import { css } from '@emotion/css';
import type { ReactNode } from 'react';

const classNames: ClassNamesType = {
  scrollable: css({
    width: 300,
    height: 300,
    '--thumb-size': '10px',
    '--thumb-background': 'cyan',
    '--thumb-border-radius': '5px',
    '--scrollbar-border': '1px solid cyan',
    '--scrollbar-border-radius': '5px',
  }),
};

export type ScrollableExampleType = {
  children: ReactNode;
}

export default function ScrollableExample({
  children,
}: ScrollableExampleType) {
  return (
    <Scrollable classNames={classNames}>
      {children}
    </Scrollable>
  )
}`,V={scrollable:n({width:300,height:300,"--thumb-size":"10px","--thumb-background":"cyan","--thumb-border-radius":"5px","--scrollbar-background":"#C7CED480","--scrollbar-border-radius":"5px"})};function S({children:e}){return r.jsx(l,{classNames:V,children:e})}S.__docgenInfo={description:"",methods:[],displayName:"ScrollableExample",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const z=`import Scrollable, { type ClassNamesType } from '@shinvik/react-scrollable';
import { css } from '@emotion/css';
import type { ReactNode } from 'react';

const classNames: ClassNamesType = {
  scrollable: css({
    width: 300,
    height: 300,
    '--thumb-size': '10px',
    '--thumb-background': 'cyan',
    '--thumb-border-radius': '5px',
    '--scrollbar-background': '#C7CED480',
    '--scrollbar-border-radius': '5px',
  }),
};

export type ScrollableExampleType = {
  children: ReactNode;
}

export default function ScrollableExample({
  children,
}: ScrollableExampleType) {
  return (
    <Scrollable classNames={classNames}>
      {children}
    </Scrollable>
  )
}`,I="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%3e%3cpath%20fill='%23333'%20d='M2%2011h16v2H2zm0-4h16v2H2zm8%2011l3-3H7l3%203zm0-16L7%205h6l-3-3z'/%3e%3c/svg%3e",B="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%2020%2020'%20width='20'%20height='20'%3e%3cg%20xmlns='http://www.w3.org/2000/svg'%20transform='matrix(0%201%20-1%200%2020%20-0)'%3e%3cpath%20fill='%23333'%20d='M2%2011h16v2H2zm0-4h16v2H2zm8%2011l3-3H7l3%203zm0-16L7%205h6l-3-3z'%20/%3e%3c/g%3e%3c/svg%3e",j={scrollable:n({width:300,height:300}),scrollbar:({isVertical:e})=>{const t=n({position:"relative","&::before":{content:'""',position:"absolute",backgroundColor:"rgba(0, 0, 0, 0.1)",zIndex:-1,borderRadius:5},"&:hover":{"&::before":{backgroundColor:"rgba(0, 0, 0, 0.16)"}}});return e?[t,n({"&::before":{top:0,bottom:0,left:5,right:5}})]:[t,n({"&::before":{top:5,bottom:5,left:0,right:0}})]},thumb:({isVertical:e})=>{const t=n({borderRadius:8,backgroundColor:"#efb436",backgroundPosition:"center",backgroundRepeat:"no-repeat",backgroundSize:14,"&:hover":{backgroundColor:"#e6a722"}});return e?[t,n({width:16,backgroundImage:`url("${I}")`})]:[t,n({height:16,backgroundImage:`url("${B}")`})]}};function R({children:e}){return r.jsx(l,{classNames:j,children:e})}R.__docgenInfo={description:"",methods:[],displayName:"ScrollableExample",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const H=`import Scrollable, { type ClassNamesType } from '@shinvik/react-scrollable';
import { css } from '@emotion/css';
import vDragUrl from '@/stories/assets/v-drag.svg?url';
import hDragUrl from '@/stories/assets/h-drag.svg?url';
import type { ReactNode } from 'react';

const classNames: ClassNamesType = {
  scrollable: css({
    width: 300,
    height: 300,
  }),
  scrollbar: ({
    isVertical,
  }) => {
    const baseCls = css({
      position: 'relative',
      '&::before': {
        content: '""',
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        zIndex: -1,
        borderRadius: 5,
      },
      '&:hover': {
        '&::before': {
          backgroundColor: 'rgba(0, 0, 0, 0.16)',
        },
      }
    })
    if (isVertical) {
      return [
        baseCls,
        css({
          '&::before': {
            top: 0,
            bottom: 0,
            left: 5,
            right: 5,
          }
        }),
      ];
    }
    return [
      baseCls,
      css({
        '&::before': {
          top: 5,
          bottom: 5,
          left: 0,
          right: 0,
        }
      }),
    ];
  },
  thumb: ({
    isVertical,
  }) => {
    const baseCls = css({
      borderRadius: 8,
      backgroundColor: '#efb436',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 14,
      '&:hover': {
        backgroundColor: '#e6a722',
      }
    })
    if (isVertical) {
      return [
        baseCls,
        css({
          width: 16,
          backgroundImage: \`url("\${vDragUrl}")\`,
        }),
      ]
    }
    return [
      baseCls,
      css({
        height: 16,
        backgroundImage: \`url("\${hDragUrl}")\`,
      }),
    ]
  },
};

export type ScrollableExampleType = {
  children: ReactNode;
}

export default function ScrollableExample({
  children,
}: ScrollableExampleType) {
  return (
    <Scrollable classNames={classNames}>
      {children}
    </Scrollable>
  )
}`,_=n({border:"none",cursor:"pointer",background:"#FFFFFF",padding:0,width:30,height:30,borderRadius:15});function v({children:e,position:t,className:f,...x}){const C=o.useMemo(()=>{switch(t){case"left-center":return n({position:"absolute",top:"50%",transform:"translateY(-50%)",left:10});case"right-center":return n({position:"absolute",top:"50%",transform:"translateY(-50%)",right:10});case"top-center":return n({position:"absolute",left:"50%",transform:"translateX(-50%)",top:10});case"bottom-center":return n({position:"absolute",left:"50%",transform:"translateX(-50%)",bottom:10});default:return}},[t]);return r.jsx("button",{className:N(_,C,f),...x,children:e})}const c=o.memo(v);v.__docgenInfo={description:"",methods:[],displayName:"IconButton",props:{position:{required:!0,tsType:{name:"union",raw:`| 'left-center'
| 'right-center'
| 'top-center'
| 'bottom-center'`,elements:[{name:"literal",value:"'left-center'"},{name:"literal",value:"'right-center'"},{name:"literal",value:"'top-center'"},{name:"literal",value:"'bottom-center'"}]},description:""}}};const L=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e},o.createElement("path",{d:"M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm11.3-387.3l104 104c4.6 4.6 5.9 11.5 3.5 17.4S366.5 256 360 256l-56 0 0 96c0 17.7-14.3 32-32 32l-32 0c-17.7 0-32-14.3-32-32l0-96-56 0c-6.5 0-12.3-3.9-14.8-9.9s-1.1-12.9 3.5-17.4l104-104c6.2-6.2 16.4-6.2 22.6 0z"})),M=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e},o.createElement("path",{d:"M256 0a256 256 0 1 0 0 512 256 256 0 1 0 0-512zM244.7 387.3l-104-104c-4.6-4.6-5.9-11.5-3.5-17.4s8.3-9.9 14.8-9.9l56 0 0-96c0-17.7 14.3-32 32-32l32 0c17.7 0 32 14.3 32 32l0 96 56 0c6.5 0 12.3 3.9 14.8 9.9s1.1 12.9-3.5 17.4l-104 104c-6.2 6.2-16.4 6.2-22.6 0z"})),D=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e},o.createElement("path",{d:"M512 256a256 256 0 1 0 -512 0 256 256 0 1 0 512 0zM124.7 244.7l104-104c4.6-4.6 11.5-5.9 17.4-3.5s9.9 8.3 9.9 14.8l0 56 96 0c17.7 0 32 14.3 32 32l0 32c0 17.7-14.3 32-32 32l-96 0 0 56c0 6.5-3.9 12.3-9.9 14.8s-12.9 1.1-17.4-3.5l-104-104c-6.2-6.2-6.2-16.4 0-22.6z"})),$=e=>o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",...e},o.createElement("path",{d:"M0 256a256 256 0 1 0 512 0 256 256 0 1 0 -512 0zm387.3 11.3l-104 104c-4.6 4.6-11.5 5.9-17.4 3.5S256 366.5 256 360l0-56-96 0c-17.7 0-32-14.3-32-32l0-32c0-17.7 14.3-32 32-32l96 0 0-56c0-6.5 3.9-12.3 9.9-14.8s12.9-1.1 17.4 3.5l104 104c6.2 6.2 6.2 16.4 0 22.6z"})),F={scrollable:n({width:300,height:300}),contentWrapper:n({position:"relative"})},i=n({width:30,height:30,fill:"#8CAFBF"});function y({children:e}){const t=o.useRef(null),f=o.useCallback(()=>{t.current&&(t.current.scrollTop=0)},[]),x=o.useCallback(()=>{t.current&&(t.current.scrollTop=t.current.scrollHeight-t.current.offsetHeight)},[]),C=o.useCallback(()=>{t.current&&(t.current.scrollLeft=0)},[]),E=o.useCallback(()=>{t.current&&(t.current.scrollLeft=t.current.scrollWidth-t.current.offsetWidth)},[]),a=s=>s===!1;return r.jsx(l,{classNames:F,ref:t,children:s=>r.jsxs(r.Fragment,{children:[e,a(s?.isTopEdgeReached)&&r.jsx(c,{position:"top-center",onClick:f,children:r.jsx(L,{className:i})}),a(s?.isBottomEdgeReached)&&r.jsx(c,{position:"bottom-center",onClick:x,children:r.jsx(M,{className:i})}),a(s?.isLeftEdgeReached)&&r.jsx(c,{position:"left-center",onClick:C,children:r.jsx(D,{className:i})}),a(s?.isRightEdgeReached)&&r.jsx(c,{position:"right-center",onClick:E,children:r.jsx($,{className:i})})]})})}y.__docgenInfo={description:"",methods:[],displayName:"ScrollableExample",props:{children:{required:!0,tsType:{name:"ReactNode"},description:""}}};const U=`import Scrollable, { type ClassNamesType } from '@shinvik/react-scrollable';
import { css } from '@emotion/css';
import { type ReactNode, useCallback, useRef } from 'react';
import IconButton from '../components/icon-button';
import CircleUp from '@/stories/assets/circle-up.svg?react';
import CircleDown from '@/stories/assets/circle-down.svg?react';
import CircleLeft from '@/stories/assets/circle-left.svg?react';
import CircleRight from '@/stories/assets/circle-right.svg?react';

const classNames: ClassNamesType = {
  scrollable: css({
    width: 300,
    height: 300,
  }),
  contentWrapper: css({
    position: 'relative',
  })
};

const arrowCls = css({
  width: 30,
  height: 30,
  fill: '#8CAFBF',
});

export type ScrollableExampleType = {
  children: ReactNode;
}

export default function ScrollableExample({
  children,
}: ScrollableExampleType) {
  const scrollableRef = useRef<HTMLElement>(null);
  const scrollTop = useCallback(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = 0;
    }
  }, []);
  const scrollBottom = useCallback(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollTop = scrollableRef.current.scrollHeight - scrollableRef.current.offsetHeight;
    }
  }, []);
  const scrollLeft = useCallback(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollLeft = 0;
    }
  }, []);
  const scrollRight = useCallback(() => {
    if (scrollableRef.current) {
      scrollableRef.current.scrollLeft = scrollableRef.current.scrollWidth - scrollableRef.current.offsetWidth;
    }
  }, []);

  const isIntermediate = (value: boolean | undefined) => value === false;

  return (
    <Scrollable
      classNames={classNames}
      ref={scrollableRef}
    >
      {
        (scrollableState) => (
          <>
            {children}
            {
              isIntermediate(scrollableState?.isTopEdgeReached) && (
                <IconButton
                  position="top-center"
                  onClick={scrollTop}
                >
                  <CircleUp className={arrowCls} />
                </IconButton>
              )
            }
            {
              isIntermediate(scrollableState?.isBottomEdgeReached) && (
                <IconButton
                  position="bottom-center"
                  onClick={scrollBottom}
                >
                  <CircleDown className={arrowCls} />
                </IconButton>
              )
            }
            {
              isIntermediate(scrollableState?.isLeftEdgeReached) && (
                <IconButton
                  position="left-center"
                  onClick={scrollLeft}
                >
                  <CircleLeft className={arrowCls} />
                </IconButton>
              )
            }
            {
              isIntermediate(scrollableState?.isRightEdgeReached) && (
                <IconButton
                  position="right-center"
                  onClick={scrollRight}
                >
                  <CircleRight className={arrowCls} />
                </IconButton>
              )
            }
          </>
        )
      }
    </Scrollable>
  )
}`,{fn:m}=__STORYBOOK_MODULE_TEST__,X={title:"Examples/Styled",component:l,args:{showThumbOnHover:!1,onLeftEdgeReached:m(),onRightEdgeReached:m(),onTopEdgeReached:m(),onBottomEdgeReached:m()},argTypes:{showThumbOnHover:{options:[!1,!0],control:{type:"radio"}}},parameters:{controls:{exclude:["children","className","style"]},docs:{source:{language:"tsx"}}}},d={args:h.args,parameters:{docs:{source:{transform:()=>T}}},render:function(){return r.jsx(w,{children:r.jsx("div",{style:{width:800},children:g})})}},p={args:h.args,parameters:{docs:{source:{transform:()=>z}}},render:function(){return r.jsx(S,{children:r.jsx("div",{style:{width:800},children:g})})}},u={args:h.args,parameters:{docs:{source:{transform:()=>H}}},render:function(){return r.jsx(R,{children:r.jsx("div",{style:{width:800},children:g})})}},b={args:h.args,parameters:{docs:{source:{transform:()=>U}}},render:function(){return r.jsx(y,{children:r.jsx("div",{style:{width:800},children:g})})}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: HorizontallyAndVerticallyScrollable.args,
  parameters: {
    docs: {
      source: {
        transform: () => RawCustomScrollbarsVariant1Example
      }
    }
  },
  render: function Render() {
    return <CustomScrollbarsVariant1Example>
        <div style={{
        width: 800
      }}>
          {longText}
        </div>
      </CustomScrollbarsVariant1Example>;
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  args: HorizontallyAndVerticallyScrollable.args,
  parameters: {
    docs: {
      source: {
        transform: () => RawCustomScrollbarsVariant2Example
      }
    }
  },
  render: function Render() {
    return <CustomScrollbarsVariant2Example>
        <div style={{
        width: 800
      }}>
          {longText}
        </div>
      </CustomScrollbarsVariant2Example>;
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: HorizontallyAndVerticallyScrollable.args,
  parameters: {
    docs: {
      source: {
        transform: () => RawCustomScrollbarsVariant3Example
      }
    }
  },
  render: function Render() {
    return <CustomScrollbarsVariant3Example>
        <div style={{
        width: 800
      }}>
          {longText}
        </div>
      </CustomScrollbarsVariant3Example>;
  }
}`,...u.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  args: HorizontallyAndVerticallyScrollable.args,
  parameters: {
    docs: {
      source: {
        transform: () => RawCustomScrollbarsVariant4Example
      }
    }
  },
  render: function Render() {
    return <CustomScrollbarsVariant4Example>
        <div style={{
        width: 800
      }}>
          {longText}
        </div>
      </CustomScrollbarsVariant4Example>;
  }
}`,...b.parameters?.docs?.source}}};const K=["CustomScrollbarsVariant1","CustomScrollbarsVariant2","CustomScrollbarsVariant3","CustomScrollbarsVariant4"];export{d as CustomScrollbarsVariant1,p as CustomScrollbarsVariant2,u as CustomScrollbarsVariant3,b as CustomScrollbarsVariant4,K as __namedExportsOrder,X as default};
