(this.webpackJsonptestwork=this.webpackJsonptestwork||[]).push([[0],{105:function(e,t,r){},133:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r(47),c=r.n(a),s=(r(105),r(78)),o=r.n(s),i=r(39),l=r.n(i),u=r(79),p=r.n(u),j=r(2),b=function(e){return Object(j.jsx)("div",{className:p.a.avatar,children:Object(j.jsx)("img",{alt:"avatar",src:e.avatar_url})})},f=r(53),d=r.n(f),O=r(80),h=r.n(O),_=r(86),x=r.n(_),v=function(e){return Object(j.jsxs)("div",{className:d.a.subscriptions,children:[Object(j.jsx)(h.a,{style:{color:"grey"}}),Object(j.jsxs)("span",{className:d.a.followers,children:[e.followers," followers"]}),Object(j.jsx)(x.a,{style:{color:"grey"}}),Object(j.jsxs)("span",{className:d.a.following,children:[e.following," following"]})]})},g=r(87),m=r.n(g),w=r(65),S=r.n(w),N=r(165),E=function(e){return Object(j.jsx)(N.a,{elevation:1,children:Object(j.jsxs)("div",{className:S.a.repo_block,children:[Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat(e.profile.login,"/").concat(e.repo.name),children:e.repo.name}),Object(j.jsx)("div",{className:S.a.repo_description,children:e.repo.description})]})})},k=function(e){return Object(j.jsx)("div",{className:m.a.repo_container,children:void 0!==e.profile.repositories?e.profile.repositories.map((function(t){return Object(j.jsx)(E,{profile:e.profile,repo:t},t.id)})):null})},R=r(9),y=r(22),P=r.n(y),T=r(36),A=r(32),U=r(88),C=r.n(U).a.create({baseURL:"https://api.github.com/users/"}),I=function(e){return Object(T.a)(P.a.mark((function t(){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get("".concat(e));case 2:return r=t.sent,t.abrupt("return",r);case 4:case"end":return t.stop()}}),t)})))()},J=function(e){return Object(T.a)(P.a.mark((function t(){var r;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,C.get("".concat(e,"/repos?per_page=4"));case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})))()},F=function(e,t){return Object(T.a)(P.a.mark((function r(){var n;return P.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,C.get("".concat(e,"/repos?per_page=4&page=").concat(t));case 2:return n=r.sent,r.abrupt("return",n.data);case 4:case"end":return r.stop()}}),r)})))()},G={status:"idle",error:""},H=function(e){return{type:"CHANGE-LOADING-STATUS",status:e}},L={},D=function(e){return{type:"SET_USER_PROFILE",data:e}},B=function(e){return{type:"SET_USER_REPOS",repos:e}},M=r(29),W=r(163),Q=function(e){for(var t=Object(M.b)(),r=Object(n.useState)(1),a=Object(R.a)(r,2),c=a[0],s=a[1],o=Math.ceil(e.repos/4),i=[],l=1;l<=o;l++)i.push(l);var u=function(e){s(e),t(function(e){return function(){var t=Object(T.a)(P.a.mark((function t(r,n){var a,c;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=n().profile.login,t.prev=1,t.next=4,F(a,e);case 4:c=t.sent,r(B(c)),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),console.log(t.t0);case 11:case"end":return t.stop()}}),t,null,[[1,8]])})));return function(e,r){return t.apply(this,arguments)}}()}(e))};return Object(j.jsx)(W.a,{shape:"rounded",count:o,page:c,onChange:function(e,t){u(t)}})},V=r(162),X=r(90),q=r.n(X),z=function(){return Object(j.jsx)("h1",{className:q.a.precept,children:"Please, find user in base!"})},K=function(e){var t=e.profile;return"loading"===e.appState.status?Object(j.jsx)(V.a,{color:"primary",className:l.a.preloader}):void 0===t.id?Object(j.jsx)(z,{}):Object(j.jsxs)("div",{className:l.a.container,children:[Object(j.jsxs)("div",{className:l.a.left_part,children:[Object(j.jsx)(b,{avatar_url:t.avatar_url}),Object(j.jsx)("h1",{className:l.a.name,children:t.name}),Object(j.jsx)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/".concat(t.login),children:t.login}),Object(j.jsx)(v,{followers:t.followers,following:t.following})]}),Object(j.jsxs)("div",{className:l.a.right_part,children:[Object(j.jsxs)("h1",{children:["Repositories (",t.public_repos,")"]}),Object(j.jsx)(k,{profile:t},t.id),Object(j.jsx)(Q,{repos:Number(t.public_repos)})]})]})},Y=r(93),Z=r.n(Y),$=r(66),ee=r.n($),te=r(95),re=r(4),ne=function(){var e=Object(M.b)(),t=Object(re.f)(),r=Object(te.a)({initialValues:{login:""},onSubmit:function(n){var a;e((a=n.login.trim(),function(){var e=Object(T.a)(P.a.mark((function e(t){var r,n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(H("loading")),e.prev=1,e.next=4,I(a);case 4:return r=e.sent,t(D(r.data)),e.next=8,J(a);case 8:n=e.sent,t(B(n)),t(H("success")),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(1),e.t0&&(t({type:"SET-ERROR",error:"User not found"}),t(H("failed")));case 16:case"end":return e.stop()}}),e,null,[[1,13]])})));return function(t){return e.apply(this,arguments)}}())),t("profile/".concat(r.values.login))}});return Object(j.jsx)("form",{onSubmit:r.handleSubmit,children:Object(j.jsxs)("div",{className:ee.a.search,children:[Object(j.jsx)(Z.a,{className:ee.a.icon}),Object(j.jsx)("input",{name:"login",onChange:r.handleChange,value:r.values.login})]})})},ae=r.p+"static/media/github_icon.3b23ef3c.png",ce=r(67),se=r.n(ce);var oe=function(){return Object(j.jsx)("div",{className:se.a.header,children:Object(j.jsxs)("div",{className:se.a.container,children:[Object(j.jsx)("a",{href:"https://github.com/",children:Object(j.jsx)("img",{src:ae,alt:"logo"})}),Object(j.jsx)(ne,{})]})})};var ie=function(){var e=Object(re.f)(),t=Object(M.c)((function(e){return e.profile})),r=Object(M.c)((function(e){return e.app}));return Object(n.useEffect)((function(){"failed"===r.status&&e("404")}),[r.status]),Object(j.jsxs)("div",{className:o.a.app,children:[Object(j.jsx)(oe,{}),Object(j.jsxs)(re.c,{children:[Object(j.jsx)(re.a,{path:"/",element:Object(j.jsx)(z,{})}),Object(j.jsx)(re.a,{path:"404",element:Object(j.jsx)("h1",{style:{padding:"100px"},children:"Page not found!"})}),Object(j.jsx)(re.a,{path:"/profile/".concat(t.login),element:Object(j.jsx)(K,{profile:t,appState:r})})]})]})},le=r(55),ue=r(94),pe=Object(le.b)({profile:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_USER_PROFILE":Object(A.a)({},e);return t.data;case"SET_USER_REPOS":return Object(A.a)(Object(A.a)({},e),{},{repositories:t.repos});default:return e}},app:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-LOADING-STATUS":return Object(A.a)(Object(A.a)({},e),{},{status:t.status});case"SET-ERROR":return Object(A.a)(Object(A.a)({},e),{},{error:t.error});default:return e}}}),je=Object(le.c)(pe,Object(le.a)(ue.a));window.store=je;var be=r(48);c.a.render(Object(j.jsx)(M.a,{store:je,children:Object(j.jsx)(be.a,{children:Object(j.jsx)(ie,{})})}),document.getElementById("root"))},39:function(e,t,r){e.exports={container:"Profile_container__10Mec",left_part:"Profile_left_part__1kU3T",subscriptions:"Profile_subscriptions__skPko",precept:"Profile_precept__m-JcG",preloader:"Profile_preloader__1rSIi"}},53:function(e,t,r){e.exports={subscriptions:"Subscriptions_subscriptions__3JPCf"}},65:function(e,t,r){e.exports={repo_block:"Repo_repo_block__I1tWQ"}},66:function(e,t,r){e.exports={search:"SearchField_search__1DJF_",icon:"SearchField_icon__1s_-J"}},67:function(e,t,r){e.exports={header:"Header_header__2x9_2",container:"Header_container__5mBbH"}},78:function(e,t,r){e.exports={app:"App_app__2CeAX"}},79:function(e,t,r){e.exports={avatar:"Avatar_avatar__14O9o"}},87:function(e,t,r){e.exports={repo_container:"Repositories_repo_container__304Wd"}},90:function(e,t,r){e.exports={precept:"StartPage_precept__2Ofi0"}}},[[133,1,2]]]);
//# sourceMappingURL=main.1d55280d.chunk.js.map