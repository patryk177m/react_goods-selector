(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(3),s=c.n(n),a=c(4),o=c(5),l=c(7),r=c(6),d=c(1),i=c.n(d),u=(c(12),c(13),c(0)),b=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(l.a)(c,e);var t=Object(r.a)(c);function c(){var e;Object(a.a)(this,c);for(var n=arguments.length,s=new Array(n),o=0;o<n;o++)s[o]=arguments[o];return(e=t.call.apply(t,[this].concat(s))).state={selectedGood:"Jam"},e.handleClearButton=function(){e.setState({selectedGood:""})},e}return Object(o.a)(c,[{key:"render",value:function(){var e=this,t=this.state.selectedGood;return Object(u.jsxs)("main",{className:"section container",children:[""===t?Object(u.jsx)("h1",{className:"title",children:"No goods selected"}):Object(u.jsxs)("h1",{className:"title is-flex is-align-items-center",children:["".concat(t," is selected"),Object(u.jsx)("button",{onClick:this.handleClearButton,"data-cy":"ClearButton",type:"button",className:"delete ml-3"})]}),Object(u.jsx)("table",{className:"table",children:Object(u.jsx)("tbody",{children:b.map((function(c){return Object(u.jsxs)("tr",{"data-cy":"Good",className:t===c?"has-background-success-light":void 0,children:[t!==c?Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:function(){return e.setState({selectedGood:c})},"data-cy":"AddButton",type:"button",className:"button",children:"+"})}):Object(u.jsx)("td",{children:Object(u.jsx)("button",{onClick:e.handleClearButton,"data-cy":"RemoveButton",type:"button",className:"button is-info",children:"-"})}),Object(u.jsx)("td",{"data-cy":"GoodTitle",className:"is-vcentered",children:c})]},c)}))})})]})}}]),c}(i.a.Component);s.a.render(Object(u.jsx)(j,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f43c11d7.chunk.js.map