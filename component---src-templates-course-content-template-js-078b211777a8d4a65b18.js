(self.webpackChunkohjelmoinnin_mooc=self.webpackChunkohjelmoinnin_mooc||[]).push([[280],{21530:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return z}});var o=n(92137),r=n(41788),a=n(87757),i=n.n(a),l=n(67294),c=n(84119),u=n(24555),m=n.n(u),s=n(25444),p=n(35414),d=n(3772),f=n(39735),h=n(64663),g=n(13578),w=c.ZP.footer.withConfig({displayName:"CoursePageFooter__CoursePageFooterWrapper",componentId:"sc-1wp274x-0"})(["background-color:white;color:black;padding:3rem;"]),C=c.ZP.div.withConfig({displayName:"CoursePageFooter__CoursePageFooterContent",componentId:"sc-1wp274x-1"})(["display:flex;justify-content:center;max-width:960px;margin:0 auto;"]),v=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){return l.createElement(w,null,l.createElement(C,null,l.createElement(h.Z,{style:{width:"400px",fontSize:"0.8rem",margin:0}})))},t}(l.Component),y=(0,g.Z)(v),E=n(52311),b=n(27611),Z=n(54021),P=n(86810),k=n(47065),_=n(77606),x=n(88014),I=n(50238),S=(0,c.ZP)(s.Link).withConfig({displayName:"EndOfSubSection__StyledLink",componentId:"ees48a-0"})(["color:black;text-decoration:none;padding:1rem;border-radius:0.25rem;margin:1rem 0;display:inline-block;width:100%;border-radius:10px;transition:background-color 0.2s;&:hover{text-decoration:none;color:black;background-color:#eeeeee;}"]),N=(0,c.ZP)(_.G).withConfig({displayName:"EndOfSubSection__StyledIcon",componentId:"ees48a-1"})(["vertical-align:middle;margin-right:1rem;margin-left:0.5rem;color:var(--color);font-size:1.5em;"]),T=c.ZP.div.withConfig({displayName:"EndOfSubSection__ButtonWrapper",componentId:"ees48a-2"})(["display:flex;align-items:center;"]),F=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this;return l.createElement(b.Z.Consumer,null,(function(t){var n=t.current.frontmatter.path,o=n,r=(0,k.Nk)(n,"/",2);-1!==r&&(o=n.substr(0,r));var a=t.all.filter((function(e){return e.path.startsWith(o+"/")})).sort((function(e,t){return(e=e.path.toLowerCase())>(t=t.path.toLowerCase())?1:t>e?-1:0})),i=null;a.forEach((function(e,t){e.path===n&&(i=t)}));var c=null;return null!==i&&i!==a.length-1&&(c=a[i+1]),l.createElement("div",null,e.props.t("endReached")," ",c&&l.createElement(l.Fragment,null,e.props.t("continueToNext")," ",l.createElement(T,null,l.createElement(S,{to:c.path},l.createElement(N,{icon:x.eFW}),i+2,". ",c.title))),l.createElement("p",null,e.props.t("rememberToCheckPoints")))}))},t}(l.Component),L=(0,I.Z)("common")((0,g.Z)(F));function O(e){if("undefined"!=typeof window)try{var t=document.querySelector(e);if(!t)return void console.warn("Could not find the element to scroll to.");t.scrollIntoView()}catch(n){console.warn("Could not scroll element into view",n)}}var W=(0,c.ZP)(_.G).withConfig({displayName:"CourseContentTemplate__StyledIcon",componentId:"sc-1m06ow0-0"})(["margin-right:0.25rem;font-size:1em;"]),A=c.ZP.article.withConfig({displayName:"CourseContentTemplate__ContentWrapper",componentId:"sc-1m06ow0-1"})([""]),j=(0,c.ZP)(s.Link).withConfig({displayName:"CourseContentTemplate__UpLink",componentId:"sc-1m06ow0-2"})(["color:#332c2cb3 !important;font-weight:bold;margin-bottom:1rem !important;display:block;:hover{text-decoration:none;color:#805050b3 !important;}"]),z=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=(0,o.Z)(i().mark((function e(){var t,n,o;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("undefined"!=typeof window&&window.location.hash&&(n=window.location.hash,setTimeout((function(){O(n)}),100),setTimeout((function(){O(n)}),500),setTimeout((function(){O(n)}),1e3),setTimeout((function(){O(n)}),2e3)),(0,E.Pl)()){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,E.gb)();case 5:o=e.sent,void 0===(null==o||null===(t=o.extra_fields)||void 0===t?void 0:t.research)&&(0,s.navigate)("/missing-info");case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n.render=function(){var e=this.props.data,t=e.page,n=t.frontmatter,o=t.htmlAst,r=e.allPages.edges.map((function(e){var t;return null===(t=e.node)||void 0===t?void 0:t.frontmatter})),a=(0,f.Z)(),i=new(m())({createElement:l.createElement,components:a}).Compiler,c=(0,k.fm)(""+n.path.split(/\//g)[1].replace(/-/g," ")),u="/"+n.path.split(/\//g)[1],s=e.page.fileAbsolutePath.substring(e.page.fileAbsolutePath.lastIndexOf("/data/"),e.page.fileAbsolutePath.length);return l.createElement(l.Fragment,null,l.createElement(p.q,{title:n.title}),l.createElement(b.Z.Provider,{value:{all:r,current:{frontmatter:n,filePath:s}}},l.createElement(Z.Oo,null,l.createElement(d.Z,null,l.createElement(l.Fragment,null,l.createElement(P.Z,null,l.createElement(A,null,l.createElement(j,{to:u},l.createElement(W,{icon:x.M3_}),c),l.createElement("h1",null,n.title),i(o),l.createElement(L,null))),l.createElement(y,null))))))},t}(l.Component);z.contextType=Z.ZP}}]);
//# sourceMappingURL=component---src-templates-course-content-template-js-078b211777a8d4a65b18.js.map