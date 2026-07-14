import{j as l}from"./jsx-runtime-u17CrQMm.js";import{r as y}from"./iframe-6NWa3uRH.js";import{c as w}from"./emotion-css.esm-D51XB6Mv.js";import{M as B,c as I,u as f,l as E}from"./utils-COpjxeGT.js";import"./preload-helper-PPVm8Dsz.js";const{expect:a,waitFor:s,fireEvent:u,fn:p}=__STORYBOOK_MODULE_TEST__,N={title:"Examples/LazyLoading",component:B,args:{showThumbOnHover:!1,children:null},argTypes:{showThumbOnHover:{options:[!1,!0],control:{type:"radio"}}},parameters:{controls:{exclude:["children","className","style"]}}},T=w`
  display: flex;
  flex-direction: column;
  gap: 10px;
`,x=w`
  height: 100px;
  line-height: 100px;
  width: 100%;
  text-align: center;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  flex-shrink: 0;
`,L=w`
  display: flex;
  gap: 10px;
`,R=w`
  height: 100px;
  line-height: 100px;
  width: 200px;
  text-align: center;
  border: 1px solid #cccccc;
  flex-shrink: 0;
`,m={args:{styles:{scrollable:{width:1e3,margin:"0 auto"}},onLeftEdgeReached:p(),onRightEdgeReached:p()},render:function({onRightEdgeReached:n,...t}){const[e,r]=y.useState(()=>I(1,10)),[i,d]=y.useState(!1),v=f(async o=>{n?.(o),d(!0);const g=e.at(-1)??0,b=await E(g+1,g+10);r([...e,...b]),d(!1)});return l.jsx(B,{...t,onRightEdgeReached:v,suppressHandlers:i,children:l.jsxs("div",{className:L,children:[e.map(o=>l.jsx("div",{className:R,children:o},o)),i&&l.jsx("div",{className:R,children:"loading..."})]})})},async play({step:c}){await c("has horizontal scrollbars",async({canvas:n})=>{await s(()=>{a(n.queryByRole("scrollbar",{name:"vertical scrollbar"})).not.toBeInTheDocument(),a(n.queryByRole("scrollbar",{name:"horizontal scrollbar"})).toBeInTheDocument()})}),await c("scroll content horizontally using mouse wheel",async({canvas:n,args:t})=>{const e=n.getByTestId("scrollable");await a(e).toBeInTheDocument();const r=e.scrollWidth-e.offsetWidth;await u.scroll(e,{target:{scrollLeft:r}}),await s(async()=>{await a(t.onRightEdgeReached).toHaveBeenCalled()}),await a(n.queryByText("loading...")).toBeInTheDocument(),await s(async()=>{await a(n.queryByText("loading...")).not.toBeInTheDocument()}),await u.scroll(e,{target:{scrollLeft:0}}),await s(async()=>{await a(t.onLeftEdgeReached).toHaveBeenCalled()})})}},h={args:{...m.args,styles:{scrollable:{width:300,height:300}},onTopEdgeReached:p(),onBottomEdgeReached:p()},render:function({onBottomEdgeReached:n,...t}){const[e,r]=y.useState(()=>I(1,10)),[i,d]=y.useState(!1),v=f(async o=>{n?.(o),d(!0);const g=e.at(-1)??0,b=await E(g+1,g+10);r([...e,...b]),d(!1)});return l.jsx(B,{...t,onBottomEdgeReached:v,suppressHandlers:i,children:l.jsxs("div",{className:T,children:[e.map(o=>l.jsx("div",{className:x,children:o},o)),i&&l.jsx("div",{className:x,children:"loading..."})]})})},async play({step:c}){await c("has vertical scrollbar",async({canvas:n})=>{await s(()=>{a(n.queryByRole("scrollbar",{name:"vertical scrollbar"})).toBeInTheDocument(),a(n.queryByRole("scrollbar",{name:"horizontal scrollbar"})).not.toBeInTheDocument()})}),await c("scrolls content vertically using mouse wheel",async({canvas:n,args:t})=>{const e=n.getByTestId("scrollable"),r=n.getByRole("scrollbar",{name:"vertical scrollbar"});await a(e).toBeInTheDocument(),await a(r).toBeInTheDocument();const i=e.scrollHeight-e.offsetHeight;await u.scroll(e,{target:{scrollTop:i}}),await s(async()=>{await a(t.onBottomEdgeReached).toHaveBeenCalled()}),await a(n.queryByText("loading...")).toBeInTheDocument(),await s(async()=>{await a(n.queryByText("loading...")).not.toBeInTheDocument()}),await u.scroll(e,{target:{scrollTop:0}}),await s(async()=>{await a(t.onTopEdgeReached).toHaveBeenCalled()})})}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  args: {
    styles: {
      scrollable: {
        width: 1000,
        margin: '0 auto'
      }
    },
    onLeftEdgeReached: fn(),
    onRightEdgeReached: fn()
  },
  render: function Render({
    onRightEdgeReached,
    ...args
  }) {
    const [items, setItems] = useState<number[]>(() => createRange(1, 10));
    const [isLoading, setIsLoading] = useState(false);
    const onRightEdgeReachedEvent = useEvent(async (event: UIEvent) => {
      onRightEdgeReached?.(event);
      setIsLoading(true);
      const lastItem = items.at(-1) ?? 0;
      const nextItems = await loadRange(lastItem + 1, lastItem + 10);
      setItems([...items, ...nextItems]);
      setIsLoading(false);
    });
    return <Scrollable {...args} onRightEdgeReached={onRightEdgeReachedEvent} suppressHandlers={isLoading}>
        <div className={horizontalScrolling}>
          {items.map(item => <div key={item} className={horizontalScrollingItem}>
                {item}
              </div>)}
          {isLoading && <div className={horizontalScrollingItem}>
                loading...
              </div>}
        </div>
      </Scrollable>;
  },
  async play({
    step
  }) {
    await step('has horizontal scrollbars', async ({
      canvas
    }) => {
      await waitFor(() => {
        expect(canvas.queryByRole('scrollbar', {
          name: 'vertical scrollbar'
        })).not.toBeInTheDocument();
        expect(canvas.queryByRole('scrollbar', {
          name: 'horizontal scrollbar'
        })).toBeInTheDocument();
      });
    });
    await step('scroll content horizontally using mouse wheel', async ({
      canvas,
      args
    }) => {
      const scrollable = canvas.getByTestId('scrollable');
      await expect(scrollable).toBeInTheDocument();
      const scrollLeft = scrollable.scrollWidth - scrollable.offsetWidth;
      await fireEvent.scroll(scrollable, {
        target: {
          scrollLeft
        }
      });
      await waitFor(async () => {
        await expect(args.onRightEdgeReached).toHaveBeenCalled();
      });
      await expect(canvas.queryByText('loading...')).toBeInTheDocument();

      // waiting for the next items to load
      await waitFor(async () => {
        await expect(canvas.queryByText('loading...')).not.toBeInTheDocument();
      });
      await fireEvent.scroll(scrollable, {
        target: {
          scrollLeft: 0
        }
      });
      await waitFor(async () => {
        await expect(args.onLeftEdgeReached).toHaveBeenCalled();
      });
    });
  }
}`,...m.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  args: {
    ...LazyHorizontalScrollable.args,
    styles: {
      scrollable: {
        width: 300,
        height: 300
      }
    },
    onTopEdgeReached: fn(),
    onBottomEdgeReached: fn()
  },
  render: function Render({
    onBottomEdgeReached,
    ...args
  }) {
    const [items, setItems] = useState(() => createRange(1, 10));
    const [isLoading, setIsLoading] = useState(false);
    const onBottomEdgeReachedEvent = useEvent(async (event: UIEvent) => {
      onBottomEdgeReached?.(event);
      setIsLoading(true);
      const lastItem = items.at(-1) ?? 0;
      const nextItems = await loadRange(lastItem + 1, lastItem + 10);
      setItems([...items, ...nextItems]);
      setIsLoading(false);
    });
    return <Scrollable {...args} onBottomEdgeReached={onBottomEdgeReachedEvent} suppressHandlers={isLoading}>
        <div className={verticalScrolling}>
          {items.map(item => <div key={item} className={verticalScrollingItem}>
                {item}
              </div>)}
          {isLoading && <div className={verticalScrollingItem}>
                loading...
              </div>}
        </div>
      </Scrollable>;
  },
  async play({
    step
  }) {
    await step('has vertical scrollbar', async ({
      canvas
    }) => {
      await waitFor(() => {
        expect(canvas.queryByRole('scrollbar', {
          name: 'vertical scrollbar'
        })).toBeInTheDocument();
        expect(canvas.queryByRole('scrollbar', {
          name: 'horizontal scrollbar'
        })).not.toBeInTheDocument();
      });
    });
    await step('scrolls content vertically using mouse wheel', async ({
      canvas,
      args
    }) => {
      const scrollable = canvas.getByTestId('scrollable');
      const scrollbarByY = canvas.getByRole('scrollbar', {
        name: 'vertical scrollbar'
      })!;
      await expect(scrollable).toBeInTheDocument();
      await expect(scrollbarByY).toBeInTheDocument();
      const scrollTop = scrollable.scrollHeight - scrollable.offsetHeight;
      await fireEvent.scroll(scrollable, {
        target: {
          scrollTop
        }
      });
      await waitFor(async () => {
        await expect(args.onBottomEdgeReached).toHaveBeenCalled();
      });
      await expect(canvas.queryByText('loading...')).toBeInTheDocument();

      // waiting for the next items to load
      await waitFor(async () => {
        await expect(canvas.queryByText('loading...')).not.toBeInTheDocument();
      });
      await fireEvent.scroll(scrollable, {
        target: {
          scrollTop: 0
        }
      });
      await waitFor(async () => {
        await expect(args.onTopEdgeReached).toHaveBeenCalled();
      });
    });
  }
}`,...h.parameters?.docs?.source}}};const j=["LazyHorizontalScrollable","LazyVerticalScrollable"];export{m as LazyHorizontalScrollable,h as LazyVerticalScrollable,j as __namedExportsOrder,N as default};
