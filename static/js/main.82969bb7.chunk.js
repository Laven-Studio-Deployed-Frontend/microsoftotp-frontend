(this.webpackJsonpwebadmin=this.webpackJsonpwebadmin||[]).push([[0],{106:function(t,e,n){"use strict";n.r(e);var a=n(0),c=n.n(a),o=n(17),r=n.n(o),i=(n(53),n.p,n(54),n(55),n(48)),d="".concat("https://server.nghi-otp.lavenes.com",":9008"),s="".concat(d,"/lavenes_api/v1");function h(t){var e=Math.floor((new Date-t)/1e3),n=Math.floor(e/31536e3);return n>1?n+" n\u0103m tr\u01b0\u1edbc":(n=Math.floor(e/2592e3))>1?n+" th\xe1ng tr\u01b0\u1edbc":(n=Math.floor(e/86400))>1?n+" ng\xe0y tr\u01b0\u1edbc":(n=Math.floor(e/3600))>1?n+" gi\u1edd tr\u01b0\u1edbc":(n=Math.floor(e/60))>1?n+" ph\xfat tr\u01b0\u1edbc":Math.floor(e)<=0?"M\u1edbi \u0111\xe2y":Math.floor(e)+" gi\xe2y tr\u01b0\u1edbc"}var u=n(18),l=n(24),j=n(9),b=n.n(j),p=n(47),f=n(8);function g(t){var e,n=Object(a.useState)(null),c=Object(l.a)(n,2),o=c[0],r=c[1],i=Object(p.io)(d),h=Object(a.useState)(localStorage.getItem("token")),j=Object(l.a)(h,2),g=j[0],O=j[1];Object(a.useEffect)((function(){var t=g||prompt("Nh\u1eadp token c\u1ee7a b\u1ea1n");localStorage.setItem("token",t),O(t),b.a.get("".concat(s,"/get_phones/").concat(t)).then((function(t){var e=t.data.sort((function(t,e){return!!t.dateUpdate&&(!!e.dateUpdate&&new Date(e.dateUpdate)-new Date(t.dateUpdate))}));r(e)})),i.on("@server-update-otp",(function(e){b.a.get("".concat(s,"/get_phones/").concat(t)).then((function(t){r(null);var e=t.data.sort((function(t,e){return!!t.dateUpdate&&(!!e.dateUpdate&&new Date(e.dateUpdate)-new Date(t.dateUpdate))}));r(e)})),f.b.success("\u0110\xe3 th\xeam m\xe3 otp m\u1edbi")})),setInterval((function(){b.a.get("".concat(s,"/get_phones/").concat(t)).then((function(t){var e=t.data.sort((function(t,e){return!!t.dateUpdate&&(!!e.dateUpdate&&new Date(e.dateUpdate)-new Date(t.dateUpdate))}));r(e)}))}),6e5),i.on("@server-renew-phone",(function(e){b.a.get("".concat(s,"/get_phones/").concat(t)).then((function(t){r(null);var e=t.data.sort((function(t,e){return!!t.dateRenew&&(!!e.dateRenew&&new Date(e.dateRenew)-new Date(t.dateRenew))}));r(e)})),f.b.warn("C\xf3 thi\u1ebft b\u1ecb m\u1edbi v\u1eeba \u0111\u01b0\u1ee3c renew")}))}),[]);var x=function(){var t=0;return function(e,n){clearTimeout(t),t=setTimeout(e,n)}}();return e={data:o,setData:r,handleSearch:function(t){var e=t.target.value.toLowerCase();x((function(){b.a.get("".concat(s,"/get_phones/").concat(g)).then((function(t){var n=t.data.filter((function(t){return t.phoneId.indexOf(e)>-1||t.number.indexOf(e)>-1}));n=n.sort((function(t,e){return new Date(e.dateUpdate)-new Date(t.dateUpdate)})),r(n)}))}),1e3)},handleSave:function(){b.a.post("".concat(s,"/update_phones"),o).then((function(){f.b.success("L\u01b0u th\xe0nh c\xf4ng!"),i.emit("@client-update-phones")})).catch((function(t){return alert(t)}))}},Object(u.a)(e,"setData",r),Object(u.a)(e,"handleRestoreToken",(function(){localStorage.clear(),window.location.reload()})),Object(u.a)(e,"handleSystemAppUpdate",(function(){i.emit("@app-update"),f.b.success("\u0110\xe3 g\u1eedi c\u1eadp nh\u1eadt xu\u1ed1ng to\xe0n b\u1ed9 thi\u1ebft b\u1ecb")})),e}n(104);var O=n(1),x=function(t){var e=new g(t),n=e.data,a=e.handleSearch,c=e.handleSave,o=e.setData,r=e.handleRestoreToken,d=e.handleSystemAppUpdate;return n?Object(O.jsxs)("div",{children:[Object(O.jsx)(f.a,{autoClose:2e3,hideProgressBar:!0,draggable:!0}),Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("h1",{children:"Qu\u1ea3n l\xfd OTP"}),Object(O.jsx)("button",{onClick:d,children:"C\u1eadp nh\u1eadt app"}),Object(O.jsx)("button",{onClick:r,children:"\u0110\u1ed5i token"}),Object(O.jsx)("button",{onClick:c,children:"L\u01b0u"}),Object(O.jsxs)("div",{className:"search-bar",children:[Object(O.jsx)(i.a,{className:"icon"}),Object(O.jsx)("input",{onChange:a,type:"text",placeholder:"T\xecm ki\u1ebfm"})]})]}),Object(O.jsxs)("table",{children:[Object(O.jsxs)("tr",{children:[Object(O.jsx)("th",{children:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i"}),Object(O.jsx)("th",{children:"T\xean thi\u1ebft b\u1ecb"}),Object(O.jsx)("th",{children:"Note"}),Object(O.jsx)("th",{children:"Id thi\u1ebft b\u1ecb"}),Object(O.jsx)("th",{children:"Tr\u1ea1ng th\xe1i"}),Object(O.jsx)("th",{children:"Th\u1eddi gian th\xeam \u0111i\u1ec7n tho\u1ea1i"}),Object(O.jsx)("th",{children:"Gi\u1edd t\u1ea1o OTP"}),Object(O.jsx)("th",{children:"M\xe3 OTP"})]}),n.map((function(t,e){var a=new Date(t.dateRenew);return Object(O.jsxs)("tr",{children:[Object(O.jsxs)("td",{children:[Object(O.jsx)("input",{type:"text",className:"textbox",defaultValue:t.number,onChange:function(t){n[e].number=t.target.value,o(n)}})," "]}),Object(O.jsxs)("td",{children:[Object(O.jsx)("input",{type:"text",className:"textbox",defaultValue:t.name,onChange:function(t){n[e].name=t.target.value,o(n)}})," "]}),Object(O.jsx)("td",{children:Object(O.jsx)("textarea",{onChange:function(t){n[e].note=t.target.value,o(n)},children:t.note})}),Object(O.jsx)("td",{children:t.phoneId}),Object(O.jsx)("td",{children:t.status}),Object(O.jsxs)("td",{children:[a.getDate()<=9?"0"+a.getDate():a.getDate(),"/",a.getMonth()+1<=9?"0"+(a.getMonth()+1):a.getMonth()+1,"/",a.getFullYear()," l\xfac ",a.getHours()<=9?"0"+a.getHours():a.getHours(),":",a.getMinutes()<=9?"0"+a.getMinutes():a.getMinutes()]}),Object(O.jsx)("td",{children:t.dateUpdate?h(new Date(t.dateUpdate)):""}),Object(O.jsx)("td",{onClick:function(){navigator.clipboard.writeText(t.otp),f.b.success("\u0110\xe3 copy m\xe3 ".concat(t.number," v\xe0o clipboard!"))},children:Object(O.jsx)("b",{children:t.otp})})]},"phone-item-".concat(e))}))]})]}):Object(O.jsx)("div",{})};var v=function(){return Object(O.jsx)(x,{})},m=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,107)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,o=e.getLCP,r=e.getTTFB;n(t),a(t),c(t),o(t),r(t)}))};r.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(v,{})}),document.getElementById("root")),m()},53:function(t,e,n){},54:function(t,e,n){},55:function(t,e,n){}},[[106,1,2]]]);
//# sourceMappingURL=main.82969bb7.chunk.js.map