"use strict";(self["webpackChunkjd"]=self["webpackChunkjd"]||[]).push([[730],{8179:function(t,c,s){s.d(c,{Z:function(){return w}});var a=s(3396),e=s(7139);const n=["src"],r={class:"nearby__content"},o={class:"nearby__content__title"},i={class:"nearby__content__tags"},_={class:"nearby__content__tag"},l={class:"nearby__content__tag"},d={class:"nearby__content__tag"},p={class:"nearby__content__highlight"};function u(t,c,s,u,m,h){return(0,a.wg)(),(0,a.iD)("div",{class:(0,e.C_)(["nearby__item",{"nearby__content--border":!s.hideBorder}])},[s.item.imgUrl?((0,a.wg)(),(0,a.iD)("img",{key:0,src:s.item.imgUrl,class:"nearby__item__img"},null,8,n)):(0,a.kq)("",!0),(0,a._)("div",r,[(0,a._)("div",o,(0,e.zw)(s.item.name),1),(0,a._)("div",i,[(0,a._)("span",_,"月销"+(0,e.zw)(s.item.sales),1),(0,a._)("span",l,"起送:"+(0,e.zw)(s.item.expressLimit),1),(0,a._)("span",d,"配送费:"+(0,e.zw)(s.item.expressPrice),1)]),(0,a._)("p",p,(0,e.zw)(s.item.slogan),1)])],2)}var m={props:["item","hideBorder"]},h=s(89);const g=(0,h.Z)(m,[["render",u]]);var w=g},1730:function(t,c,s){s.r(c),s.d(c,{default:function(){return bt}});var a=s(3396);const e=t=>((0,a.dD)("data-v-6f786f35"),t=t(),(0,a.Cn)(),t),n={class:"wrapper"},r={class:"search"},o=e((()=>(0,a._)("div",{class:"search__back iconfont"},"  ",-1))),i=e((()=>(0,a._)("div",{class:"search__content"},[(0,a._)("span",{class:"search__content__icon iconfont"},""),(0,a._)("input",{class:"search__content__input",placeholder:"请输入商品名称搜索"})],-1)));function _(t,c,s,e,_,l){const d=(0,a.up)("router-link"),p=(0,a.up)("Shop"),u=(0,a.up)("Content"),m=(0,a.up)("Cart");return(0,a.wg)(),(0,a.iD)("div",n,[(0,a._)("div",r,[(0,a.Wm)(d,{to:{path:"/"}},{default:(0,a.w5)((()=>[o])),_:1}),i]),(0,a.Wm)(p,{item:e.item,hideBorder:!0},null,8,["item"]),(0,a.Wm)(u),(0,a.Wm)(m)])}var l=s(4870),d=s(8179),p=s(2483),u=s(60),m=s(7139);const h=t=>((0,a.dD)("data-v-c8a117dc"),t=t(),(0,a.Cn)(),t),g={class:"content"},w={class:"category"},v=["onClick"],C={class:"product"},k=h((()=>(0,a._)("img",{src:"https://img.zcool.cn/community/0311d035682a5e40000018b8e50fb19.jpg?x-oss-process=image/resize,m_fill,w_260,h_195,limit_1/auto-orient,1/sharpen,100/quality,q_80/format,webp",class:"product__one__img"},null,-1))),f={class:"product__one__details"},y={class:"product__title"},b={class:"product__sales"},I={class:"product__price"},L={class:"product__price__now"},z={class:"product__price__now__number"},D={class:"product__price__origin"},j={class:"product__amounts"},T=["onClick"],A={class:"product__amounts__number"},q=["onClick"];function H(t,c,s,e,n,r){return(0,a.wg)(),(0,a.iD)("div",g,[(0,a._)("div",w,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.categoryList,(t=>((0,a.wg)(),(0,a.iD)("div",{class:(0,m.C_)({category__tag:!0,"category__tag--active":e.currentTab===t.tab}),key:t.name,onClick:()=>e.categoryClick(t.tab)},(0,m.zw)(t.name),11,v)))),128))]),(0,a._)("div",C,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.productItem,(t=>((0,a.wg)(),(0,a.iD)("div",{class:"product__one",key:t.title},[k,(0,a._)("div",f,[(0,a._)("h4",y,(0,m.zw)(t.title),1),(0,a._)("div",b,"月售"+(0,m.zw)(t.sells)+"件",1),(0,a._)("div",I,[(0,a._)("div",L,[(0,a.Uk)("¥"),(0,a._)("span",z,(0,m.zw)(t.nowprice),1)]),(0,a._)("div",D,"¥"+(0,m.zw)(t.oldprice),1)]),(0,a._)("div",j,[(0,a._)("span",{class:"product__amounts__mins",onClick:()=>e.changgeItemCounts(e.shopId,t,-1)},"-",8,T),(0,a._)("span",A,(0,m.zw)(e.cartList?.[e.shopId]?.[t.id]?.cnt||0),1),(0,a._)("span",{class:"product__amounts__plus",onClick:()=>e.changgeItemCounts(e.shopId,t,1)},"+",8,q)])])])))),128))])])}var S=s(65);const U=()=>{const t=(0,S.oR)(),{cartList:c}=(0,l.BK)(t.state),s=(c,s,a)=>{t.commit("changePdtCnt",{shopId:c,item:s,changePara:a})},a=(c,s)=>{s=!s,t.commit("shiftSelectAll",{shopId:c,selectAllOr:s})},e=c=>{t.commit("clearCart",{shopId:c})};return{cartList:c,changgeItemCounts:s,shiftSelectAll:a,clearCart:e}},x=()=>{const t=[{name:"全部商品",tab:"all"},{name:"秒杀",tab:"seckill"},{name:"新鲜水果",tab:"fruit"}];return{categoryList:t}},F=t=>{const c=(0,l.qj)({currentTab:t[0].tab,productItem:[]}),s=async t=>{const s=await(0,u.U)("/api/usr/shop/1/products",{tab:t});c.productItem=s.data,c.currentTab=t};s("all");const{productItem:a,currentTab:e}=(0,l.BK)(c);return{categoryClick:s,productItem:a,currentTab:e}};var B={name:"content",setup(){const t=(0,p.yj)(),c=t.params.id,{categoryList:s}=x(),{categoryClick:a,productItem:e,currentTab:n}=F(s),{cartList:r,changgeItemCounts:o,shiftSelectAll:i}=U();return{categoryList:s,categoryClick:a,productItem:e,currentTab:n,shopId:c,cartList:r,changgeItemCounts:o,shiftSelectAll:i}}},K=s(89);const Z=(0,K.Z)(B,[["render",H],["__scopeId","data-v-c8a117dc"]]);var O=Z;const R=t=>((0,a.dD)("data-v-0ac089ac"),t=t(),(0,a.Cn)(),t),W={key:1,class:"product"},M={class:"product__header"},Y={class:"product__header__right"},P=["innerHTML"],$=R((()=>(0,a._)("span",{class:"fontsize:.14rem;"},"全选",-1))),E={class:"product__header__left"},G={class:"product__one__checkbox iconfont"},J=["innerHTML","onClick"],N=R((()=>(0,a._)("img",{src:"https://img.zcool.cn/community/0311d035682a5e40000018b8e50fb19.jpg?x-oss-process=image/resize,m_fill,w_260,h_195,limit_1/auto-orient,1/sharpen,100/quality,q_80/format,webp",class:"product__one__img"},null,-1))),Q={class:"product__one__details"},V={class:"product__title"},X={class:"product__price"},tt={class:"product__price__now"},ct={class:"product__price__now__number"},st={class:"product__price__origin"},at={class:"product__amounts"},et=["onClick"],nt={class:"product__amounts__number"},rt=["onClick"],ot={class:"cart iconfont"},it={class:"cart__amount"},_t={class:"price"},lt={class:"price__number"},dt={class:"commit"};function pt(t,c,s,e,n,r){const o=(0,a.up)("router-link");return(0,a.wg)(),(0,a.iD)(a.HY,null,[e.showCartList?((0,a.wg)(),(0,a.iD)("div",{key:0,class:"mask",onClick:c[0]||(c[0]=()=>e.showCartList=!e.showCartList)})):(0,a.kq)("",!0),e.showCartList?((0,a.wg)(),(0,a.iD)("div",W,[(0,a._)("div",M,[(0,a._)("div",Y,[(0,a._)("span",{class:"selectall iconfont",innerHTML:e.selectAllOr?"":"",onClick:c[1]||(c[1]=()=>e.shiftSelectAll(e.shopId,e.selectAllOr))},null,8,P),$]),(0,a._)("div",E,[(0,a._)("span",{class:"text1",onClick:c[2]||(c[2]=()=>e.clearCart(e.shopId,e.selectAllOr))},"清空购物车")])]),((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.productItem,((t,c)=>((0,a.wg)(),(0,a.iD)("div",{class:"product__one",key:c},[(0,a._)("div",G,[(0,a._)("span",{class:"iconfont checkicon",innerHTML:t.check?"":"",onClick:()=>t.check=!t.check},null,8,J)]),N,(0,a._)("div",Q,[(0,a._)("h4",V,(0,m.zw)(t.title),1),(0,a._)("div",X,[(0,a._)("div",tt,[(0,a.Uk)("¥"),(0,a._)("span",ct,(0,m.zw)(t.nowprice),1)]),(0,a._)("div",st,"¥"+(0,m.zw)(t.oldprice),1)]),(0,a._)("div",at,[(0,a._)("span",{class:"product__amounts__mins",onClick:()=>e.changgeItemCounts(e.shopId,t,-1)},"-",8,et),(0,a._)("span",nt,(0,m.zw)(t.cnt||0),1),(0,a._)("span",{class:"product__amounts__plus",onClick:()=>e.changgeItemCounts(e.shopId,t,1)},"+",8,rt)])])])))),128))])):(0,a.kq)("",!0),(0,a._)("div",{class:"cart__wrapper",onClick:c[3]||(c[3]=()=>e.showCartList=!e.showCartList)},[(0,a._)("div",ot,[(0,a.Uk)("  "),(0,a._)("div",it,(0,m.zw)(e.accounts),1)]),(0,a._)("div",_t,[(0,a.Uk)(" 总计： "),(0,a._)("span",lt,"¥ "+(0,m.zw)(e.itemTotal),1)]),(0,a._)("div",dt,[(0,a.Wm)(o,{to:{path:`/orderConfirmation/${e.shopId}`},style:{"text-decoration":"none",color:"#FFF"}},{default:(0,a.w5)((()=>[(0,a.Uk)(" 去结算 ")])),_:1},8,["to"])])])],64)}const ut=(0,a.Fl)((()=>{const t=(0,S.oR)(),c=(0,p.yj)(),s=t.state.cartList;let a=0;if(s?.[c.params.id])for(const e in s[c.params.id])s[c.params.id][e].check&&(a+=s[c.params.id][e].cnt*s[c.params.id][e].nowprice);return a.toFixed(2)})),mt=(0,a.Fl)((()=>{const t=(0,S.oR)(),c=(0,p.yj)();for(const s in t.state.cartList[c.params.id])if(!t.state.cartList[c.params.id][s].check)return!1;return!0})),ht=(0,a.Fl)((()=>{const t=(0,S.oR)(),c=(0,p.yj)(),s=t.state?.cartList?.[c.params.id];let a=0;if(s)for(const e in s)a+=s[e].cnt;return a})),gt=()=>{const t=(0,S.oR)(),c=(0,p.yj)(),s=(0,a.Fl)((()=>{const s=t.state.cartList,a=s?.[c.params.id]||{},e={};for(const t in a)0!==a[t].cnt&&(e[t]=a[t]);return e}));return{productItem:s}};var wt={name:"Cart",setup(){const t=(0,p.yj)().params.id,c=(0,l.iH)(!1),{productItem:s}=gt(),{cartList:a,changgeItemCounts:e,shiftSelectAll:n,clearCart:r}=U();return{itemTotal:ut,accounts:ht,productItem:s,cartList:a,changgeItemCounts:e,shiftSelectAll:n,clearCart:r,shopId:t,selectAllOr:mt,showCartList:c}}};const vt=(0,K.Z)(wt,[["render",pt],["__scopeId","data-v-0ac089ac"]]);var Ct=vt;const kt=()=>{const t=(0,p.yj)(),c=(0,l.qj)({item:{}}),s=async()=>{const s=await(0,u.U)(`/api/shop/${t.params.id}`);0===s?.errno&&s?.data&&(c.item=s.data)},{item:a}=(0,l.BK)(c);return{item:a,getItemsData:s}};var ft={name:"shop-info",components:{Shop:d.Z,Content:O,Cart:Ct},setup(){const{item:t,getItemsData:c}=kt();return c(),{item:t}}};const yt=(0,K.Z)(ft,[["render",_],["__scopeId","data-v-6f786f35"]]);var bt=yt}}]);
//# sourceMappingURL=730.6662cf07.js.map