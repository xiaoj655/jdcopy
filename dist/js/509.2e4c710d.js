"use strict";(self["webpackChunkjd"]=self["webpackChunkjd"]||[]).push([[509],{1196:function(s,t,a){a.d(t,{Z:function(){return m},S:function(){return _}});var o=a(3396),e=a(7139);const n={class:"toast"};function c(s,t,a,c,r,i){return(0,o.wg)(),(0,o.iD)("div",n,(0,e.zw)(a.message),1)}var r=a(4870),i={props:["message"]};const _=()=>{const s=(0,r.qj)({show:!1,toastMessage:""}),t=t=>{s.show=!0,s.toastMessage=t,setTimeout((()=>{s.show=!1,s.toastMessage=""}),2e3)},{show:a,toastMessage:o}=(0,r.BK)(s);return{show:a,toastMessage:o,showToast:t}};var d=a(89);const l=(0,d.Z)(i,[["render",c],["__scopeId","data-v-22d0921a"]]);var m=l},9509:function(s,t,a){a.r(t),a.d(t,{default:function(){return U}});var o=a(3396),e=a(7139),n=a(9242);const c=s=>((0,o.dD)("data-v-2385821f"),s=s(),(0,o.Cn)(),s),r={class:"wrapper"},i={class:"top"},_={class:"top__header"},d=c((()=>(0,o._)("div",{class:"top__back iconfont"},"",-1))),l=c((()=>(0,o._)("div",{class:"top__back__text"},"确认订单",-1))),m=(0,o.uE)('<div class="usrinfo" data-v-2385821f><span style="font-size:.16rem;line-height:.22rem;display:block;" data-v-2385821f>收货地址</span><span class="usrinfo__receipt" data-v-2385821f>北京理工大学国防科技园2号楼10层</span><span class="usrinfo__name" data-v-2385821f>王（先生）</span><span class="usrinfo__phone" data-v-2385821f>18911024266</span><span class="usrinfo__back iconfont" data-v-2385821f></span></div>',1),p={class:"products"},u={class:"products__title"},v=["src"],f={class:"products__cart__info"},h={class:"products__cart__name"},w={class:"products__cart__price"},k={class:"total"},g={class:"commit"},I=c((()=>(0,o._)("div",{class:"commit__num"},[(0,o.Uk)("实付金额 "),(0,o._)("span",{style:{"margin-left":".12rem","font-weight":"350","font-size":".18rem"}},"¥62")],-1))),O={class:"mask"},M={class:"mask__content"},b=c((()=>(0,o._)("div",{class:"mask__content--1"},"确认要离开收银台？",-1))),z=c((()=>(0,o._)("div",{class:"mask__content--2"},"请尽快完成支付，否则将被取消",-1))),y={class:"mask__content--3"};function C(s,t,a,c,C,T){const j=(0,o.up)("router-link"),D=(0,o.up)("Toast");return(0,o.wg)(),(0,o.iD)(o.HY,null,[(0,o._)("div",r,[(0,o._)("div",i,[(0,o._)("div",_,[(0,o.Wm)(j,{to:{path:`/shopinfo/${c.shopId}`}},{default:(0,o.w5)((()=>[d])),_:1},8,["to"]),l]),m]),(0,o._)("div",p,[(0,o._)("div",u,(0,e.zw)(c.shopName),1),((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(c.cartItems,((s,t)=>((0,o.wg)(),(0,o.iD)("div",{class:"products__cart",key:t},[(0,o._)("img",{src:s.imgUrl,class:"products__cart__img"},null,8,v),(0,o._)("div",f,[(0,o._)("div",h,(0,e.zw)(s.title),1),(0,o._)("div",w,[(0,o.Uk)("¥ "+(0,e.zw)(s.nowprice)+" x "+(0,e.zw)(s.cnt)+" ",1),(0,o._)("span",k,"¥ "+(0,e.zw)((s.nowprice*s.cnt).toFixed(2)),1)])])])))),128))])]),(0,o._)("div",g,[I,(0,o._)("div",{class:"commit__btn",onClick:t[0]||(t[0]=()=>c.showMask=!0)},"提交订单")]),(0,o.wy)((0,o._)("div",O,[(0,o._)("div",M,[b,z,(0,o._)("div",y,[(0,o._)("div",{class:"mask__content__btn1",onClick:t[1]||(t[1]=(...s)=>c.cancelOrder&&c.cancelOrder(...s))},"取消订单"),(0,o._)("div",{class:"mask__content__btn2",onClick:t[2]||(t[2]=(...s)=>c.confirmOrder&&c.confirmOrder(...s))},"确认支付")])])],512),[[n.F8,c.showMask]]),c.show?((0,o.wg)(),(0,o.j4)(D,{key:0,message:c.toastMessage},null,8,["message"])):(0,o.kq)("",!0)],64)}a(7658);var T=a(4870),j=a(2483),D=a(65),H=a(1196);const N=()=>{const s=(0,j.yj)().params.id,t=(0,D.oR)().state.cartList[s],a=(0,o.Fl)((()=>{const t=(0,D.oR)().state.shopName[s]||"";return console.log(t),t}));return{cartItems:t,shopId:s,shopName:a}},Z=(s,t,a,o)=>{const e=()=>{s.commit("cancelOrder",{shopId:t}),a("订单已取消"),setTimeout((()=>{o.push({name:"Home"})}),1500)},n=()=>{s.commit("confirmOrder",{shopId:t}),setTimeout((()=>{a("订单已完成")}),1500),o.push({name:"Home"})};return{confirmOrder:n,cancelOrder:e}};var x={name:"orderConfirmation",components:{Toast:H.Z},setup(){const s=(0,T.iH)(!1),t=(0,D.oR)(),a=(0,j.tv)(),{show:o,toastMessage:e,showToast:n}=(0,H.S)(),{cartItems:c,shopId:r,shopName:i}=N(),{confirmOrder:_,cancelOrder:d}=Z(t,r,n,a);return{cartItems:c,shopId:r,shopName:i,showMask:s,confirmOrder:_,cancelOrder:d,show:o,toastMessage:e}}},F=a(89);const R=(0,F.Z)(x,[["render",C],["__scopeId","data-v-2385821f"]]);var U=R}}]);
//# sourceMappingURL=509.2e4c710d.js.map