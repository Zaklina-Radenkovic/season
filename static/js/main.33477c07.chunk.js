(this.webpackJsonpseason=this.webpackJsonpseason||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n(4),r=n(7),c=n(6),o=n(1),i=n.n(o),l=n(5),u=n.n(l),m=(n(12),n(0)),d={summer:{text:"Let`s get to the beach",iconName:"sun"},winter:{text:"Brrr, it`s chilly!",iconName:"snowflake"}},j=function(e){var t=function(e,t){return t>2&&t<9?e>0?"summer":"winter":e>0?"winter":"summer"}(e.lat,(new Date).getMonth()),n=d[t],a=n.text,s=n.iconName;return Object(m.jsxs)("div",{className:"season-display ".concat(t),children:[Object(m.jsx)("i",{className:"icon-left massive ".concat(s," icon")}),Object(m.jsx)("h1",{children:a}),Object(m.jsx)("i",{className:"icon-right massive ".concat(s," icon")})]})},h=function(e){return Object(m.jsx)("div",{className:"ui active dimmer",children:Object(m.jsx)("div",{className:"ui big text loader",children:e.message||"Loading..."})})},b=function(e){Object(r.a)(n,e);var t=Object(c.a)(n);function n(){var e;Object(a.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={lat:null,errorMessage:""},e.contentDisplay=function(){return e.state.errorMessage&&!e.state.lat?Object(m.jsxs)("div",{className:"",children:["Error: ",e.state.errorMessage]}):!e.state.errorMessage&&e.state.lat?Object(m.jsx)(j,{lat:e.state.lat}):Object(m.jsx)(h,{message:"Please, accept location request"})},e}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var e=this;window.navigator.geolocation.getCurrentPosition((function(t){return e.setState({lat:t.coords.latitude})}),(function(t){return e.setState({errorMessage:t.message})}))}},{key:"componentDidUpdate",value:function(){console.log("Component was just updated - rendered")}},{key:"render",value:function(){return Object(m.jsx)(m.Fragment,{children:this.contentDisplay()})}}]),n}(i.a.Component);u.a.render(Object(m.jsx)(b,{}),document.querySelector("#root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.33477c07.chunk.js.map