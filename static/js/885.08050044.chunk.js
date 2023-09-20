"use strict";(self.webpackChunkyour_rent_car=self.webpackChunkyour_rent_car||[]).push([[885],{302:function(n,e,t){t.d(e,{O:function(){return sn}});var r,o,i,c,s,a,u,l,f,d,h,p,x,g,m=t(439),j=t(433),v=t(791),Z=t(164),b=t(168),w=t(202),y=w.Z.div(r||(r=(0,b.Z)(["\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-color: rgba(0, 0, 0, 0.8);\n  z-index: 1200;\n  overflow-y: scroll;\n"]))),k=w.Z.div(o||(o=(0,b.Z)(["\n  width: 541px;\n  padding: 40px;\n\n  position: absolute;\n  top: 5%;\n  left: 50%;\n\n  transform: translateX(-50%);\n  border-radius: 24px;\n  background-color: #ffffff;\n\n  z-index: 3;\n"]))),z=w.Z.button(i||(i=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background-color: transparent;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  top: 5px;\n  right: 5px;\n"]))),S=t(820),C=t(184),P=document.getElementById("modal-root");function F(n){var e=n.closeModal,t=n.children;(0,v.useEffect)((function(){var n=function(n){"Escape"===n.code&&e()};return window.addEventListener("keydown",n),function(){window.removeEventListener("keydown",n)}}),[e]);return(0,Z.createPortal)((0,C.jsx)(y,{onClick:function(n){n.currentTarget===n.target&&e()},children:(0,C.jsxs)(k,{children:[(0,C.jsx)(z,{onClick:e,children:(0,C.jsx)(S.oHP,{size:18,style:{color:"#3470FF"}})}),t]})}),P)}var E,A,B,L,M,O,R,_,I=w.Z.div(c||(c=(0,b.Z)(["\n  width: 100%;\n\n  & img {\n    width: 100%;\n    border-radius: 14px;\n  }\n"]))),W=w.Z.div(s||(s=(0,b.Z)(["\n  margin-top: 14px;\n  text-align: left;\n"]))),H=w.Z.h3(a||(a=(0,b.Z)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 500;\n  color: ",";\n  text-align: left;\n\n  & span {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.fontSizes[5]}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),J=w.Z.p(u||(u=(0,b.Z)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n  color: ",";\n  text-align: left;\n\n  &:first-of-type {\n    padding-top: 8px;\n  }\n"])),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.colors.grey})),N=w.Z.p(l||(l=(0,b.Z)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n  color: ",";\n  text-align: left;\n  padding-top: 14px;\n"])),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.colors.black})),T=w.Z.div(f||(f=(0,b.Z)(["\n  margin-top: 24px;\n"]))),D=w.Z.h4(d||(d=(0,b.Z)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 500;\n  color: ",";\n  text-align: left;\n"])),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.colors.black})),X=w.Z.div(h||(h=(0,b.Z)(["\n  display: flex;\n  gap: 36px;\n  margin-top: 15px;\n  padding-left: 14px;\n"]))),Y=w.Z.b(p||(p=(0,b.Z)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 600;\n  color: ",";\n\n  & span {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),$=w.Z.div(x||(x=(0,b.Z)(["\n  display: flex;\n  justify-content: flex-start;\n  margin-top: 24px;\n"]))),q=w.Z.a(g||(g=(0,b.Z)(["\n  dispay: inline;\n  font-size: ",";\n  line-height: ",";\n  font-weight: 600;\n  color: ",";\n  padding: 12px 50px 12px 50px;\n  background-color: ",";\n  transition: background-color 0.5s ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n  border-radius: 12px;\n"])),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.darkBlue})),G=function(n){var e,t=n.data,r=n.city,o=n.contry,i=t.rentalConditions.split("\n"),c=(0,m.Z)(i,3),s=c[0],a=c[1],u=c[2],l=s.split(": ");return(0,C.jsxs)(I,{children:[(0,C.jsx)("img",{src:t.img,alt:"car-card"}),(0,C.jsxs)(W,{children:[(0,C.jsxs)(H,{children:[t.make," ",(0,C.jsx)("span",{children:t.model}),", ",t.year]}),(0,C.jsx)(J,{children:[r,o,"id: ".concat(t.id),"Year: ".concat(t.year),"Type: ".concat(t.type)].join(" | ")}),(0,C.jsx)(J,{children:["Fuel Consumption: ".concat(t.fuelConsumption),"Engine Size: ".concat(t.engineSize)].join(" | ")}),(0,C.jsx)(N,{children:t.description})]}),(0,C.jsxs)(T,{children:[(0,C.jsx)(D,{children:"Accessories and functionalities:"}),(0,C.jsx)(J,{children:t.accessories.join(" | ")}),(0,C.jsx)(J,{children:t.functionalities.join(" | ")})]}),(0,C.jsxs)(T,{children:[(0,C.jsx)(D,{children:"Rental Conditions: "}),(0,C.jsxs)(X,{children:[(0,C.jsxs)(Y,{children:[l[0],": ",(0,C.jsx)("span",{children:l[1]})]}),(0,C.jsx)(Y,{children:a})]}),(0,C.jsxs)(X,{children:[(0,C.jsx)(Y,{children:u}),(0,C.jsxs)(Y,{children:["Mileage: ",(0,C.jsx)("span",{children:(e=t.mileage,e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","))})]}),(0,C.jsxs)(Y,{children:["Price: ",(0,C.jsx)("span",{children:t.rentalPrice})]})]})]}),(0,C.jsx)($,{children:(0,C.jsx)(q,{href:"tel:+380730000000",children:"Rental car"})})]})},K=w.Z.li(E||(E=(0,b.Z)(["\n  width: 274px;\n  position: relative;\n\n  & img {\n    width: 274;\n    height: 268px;\n    object-fit: cover;\n    object-position: center;\n    border-radius: 14px;\n  }\n"]))),Q=w.Z.div(A||(A=(0,b.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding-top: 14px;\n"]))),U=w.Z.h3(B||(B=(0,b.Z)(["\n  &:first-of-type {\n    white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;\n  }\n\n  font-size: ",";\n  line-height: ",";\n  font-weight: 500;\n  color: ",";\n\n  & span {\n    color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.fontSizes[5]}),(function(n){return n.theme.colors.black}),(function(n){return n.theme.colors.blue})),V=w.Z.div(L||(L=(0,b.Z)(["\n  display: flex;\n  flex-flow: row wrap;\n  padding-top: 8px;\n  padding-bottom: 28px;\n"]))),nn=w.Z.p(M||(M=(0,b.Z)(["\n  font-size: ",";\n  line-height: ",";\n  font-weight: 400;\n  color: ",";\n  text-align: left;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 37px;\n"])),(function(n){return n.theme.fontSizes[0]}),(function(n){return n.theme.fontSizes[3]}),(function(n){return n.theme.colors.grey})),en=w.Z.button(O||(O=(0,b.Z)(["\n  display: block;\n  width: 100%;\n  font-size: ",";\n  line-height: ",";\n  background-color: ",";\n  color: ",";\n  font-weight: 600;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  border-radius: 12px;\n  transition: background-color 0.5s ease-in-out;\n\n  &:hover,\n  &:focus {\n    background-color: ",";\n  }\n"])),(function(n){return n.theme.fontSizes[1]}),(function(n){return n.theme.fontSizes[4]}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.mainWhite}),(function(n){return n.theme.colors.darkBlue})),tn=w.Z.button(R||(R=(0,b.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: absolute;\n  background-color: transparent;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  top: 5px;\n  right: 5px;\n"]))),rn=t(355),on=function(n){var e=n.data,t=n.setFavoriteArr,r=n.favoriteArr,o=e.address.split(", ").map((function(n){return n.trim()})),i=(0,m.Z)(o,3),c=i[0],s=i[1],a=i[2],u=(0,v.useState)(!1),l=(0,m.Z)(u,2),f=l[0],d=l[1],h=(0,v.useState)(!1),p=(0,m.Z)(h,2),x=p[0],g=p[1];(0,v.useEffect)((function(){r.includes(e.id)&&d(!0)}),[f,e.id,r]);return(0,C.jsxs)(K,{children:[(0,C.jsx)(tn,{type:"button",onClick:function(){if(r.includes(e.id)){var n=r.filter((function(n){return n!==e.id}));return t(n),void d(!1)}var o=[].concat((0,j.Z)(r),[e.id]);t(o),d(!0)},children:f?(0,C.jsx)(rn.$0H,{size:18,style:{color:"#3470FF"}}):(0,C.jsx)(rn.BgW,{size:18,style:{color:"#F3F3F2"}})}),(0,C.jsx)("img",{src:e.img,alt:"car-card"}),(0,C.jsxs)(Q,{children:[(0,C.jsxs)(U,{children:[e.make,(0,C.jsxs)("span",{children:[" ",e.model]}),", ",e.year]}),(0,C.jsx)(U,{children:e.rentalPrice})]}),(0,C.jsx)(V,{children:(0,C.jsx)(nn,{children:[s,a,e.rentalCompany,"Premium",e.type,e.model,e.id,e.functionalities[0]].join(" | ")})}),(0,C.jsx)(en,{onClick:function(){g(!0)},children:"Learn more"}),x&&(0,C.jsx)(F,{closeModal:function(){g(!1)},children:(0,C.jsx)(G,{data:e,city:s,contry:a,street:c})})]})},cn=w.Z.ul(_||(_=(0,b.Z)(["\n  display: flex;\n  flex-flow: row wrap;\n  padding-left: 29px;\n  padding-right: 29px;\n  padding-bottom: 100px;\n  padding-top: 50px;\n  gap: 50px 29px;\n  width: 100%;\n"]))),sn=function(n){var e=n.data,t=n.setFavoriteData,r=void 0===t?null:t,o=(0,v.useState)(JSON.parse(localStorage.getItem("favorite"))),i=(0,m.Z)(o,2),c=i[0],s=i[1];return(0,v.useEffect)((function(){localStorage.setItem("favorite",JSON.stringify(c)),null!==r&&r(c)}),[c,r]),(0,C.jsx)("div",{children:(0,C.jsx)(cn,{children:e.map((function(n){return(0,C.jsx)(on,{data:n,setFavoriteArr:s,favoriteArr:c},e.id+Math.random().toString())}))})})}},885:function(n,e,t){t.r(e),t.d(e,{default:function(){return g}});var r,o=t(433),i=t(861),c=t(439),s=t(687),a=t.n(s),u=t(791),l=t(59),f=t(302),d=t(168),h=t(202).Z.button(r||(r=(0,d.Z)(["\n  display: block;\n  font-size: ",";\n  line-height: ",";\n  background-color: transparent;\n  color: ",";\n  text-decoration: underline;\n  font-weight: 500;\n  border-radius: 12px;\n  transition: background-color 0.5s ease-in-out;\n  margin: 0 auto;\n  padding: 10px 15px 10px 15px;\n\n  &:hover,\n  &:focus {\n    color: ",";\n  }\n\n"])),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.fontSizes[2]}),(function(n){return n.theme.colors.blue}),(function(n){return n.theme.colors.darkBlue})),p=t(184),x=function(n){var e=n.page,t=n.setPage,r=n.dataLength,o=(0,u.useState)(!0),s=(0,c.Z)(o,2),f=s[0],d=s[1],x=function(){var n=(0,i.Z)(a().mark((function n(e){var t;return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e+2,n.prev=1,n.next=4,l.Z.fetchCarPerPage(t,8).then((function(n){0===n.length&&(console.log("no more"),d(!1))}));case 4:n.next=9;break;case 6:n.prev=6,n.t0=n.catch(1),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[1,6]])})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,i.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t((function(n){return n+1})),n.next=3,x(e);case 3:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return r<8||!f?null:(0,p.jsx)(h,{onClick:g,children:"Load more"})},g=function(){var n=(0,u.useState)([]),e=(0,c.Z)(n,2),t=e[0],r=e[1],s=(0,u.useState)(1),d=(0,c.Z)(s,2),h=d[0],g=d[1];if((0,u.useEffect)((function(){var n=function(){var n=(0,i.Z)(a().mark((function n(){return a().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,l.Z.fetchCarPerPage(h,8).then((function(n){r(1!==h?function(e){return[].concat((0,o.Z)(e),(0,o.Z)(n))}:n)}));case 3:n.next=7;break;case 5:n.prev=5,n.t0=n.catch(0);case 7:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();n()}),[h]),t.length>0)return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(f.O,{data:t}),(0,p.jsx)(x,{page:h,setPage:g,dataLength:t.length})]})}},59:function(n,e,t){var r=t(861),o=t(687),i=t.n(o),c="https://6508310a56db83a34d9be61b.mockapi.io/api",s=function(){var n=(0,r.Z)(i().mark((function n(e,t){var r,o;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/carRent?page=").concat(e,"&limit=").concat(t));case 2:return r=n.sent,n.next=5,r.json();case 5:return o=n.sent,n.abrupt("return",o);case 7:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),a=function(){var n=(0,r.Z)(i().mark((function n(){var e,t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("".concat(c,"/carRent"));case 2:return e=n.sent,n.next=5,e.json();case 5:return t=n.sent,n.abrupt("return",t);case 7:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u={fetchCarPerPage:s,fetchAllCar:a};e.Z=u}}]);
//# sourceMappingURL=885.08050044.chunk.js.map