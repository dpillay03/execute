(this.webpackJsonpexecute=this.webpackJsonpexecute||[]).push([[0],{11:function(e,t,n){e.exports=n(16)},16:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),l=n(8),s=n.n(l),u=n(2),c=n(3),r=n(5),m=n(4),o=n(9),d=n(1),h=n(10);n(7);function f(e){var t=e.items.map((function(t){return i.a.createElement("div",{className:"list",key:t.key},i.a.createElement("input",{className:"updateField",type:"text",id:t.key,value:t.text,onChange:function(n){e.updateItem(n.target.value,t.key)}}),i.a.createElement(h.a,{size:40,id:"check-mark",onClick:function(){e.finishItem(t.key)}}))}));return i.a.createElement("div",null,t)}var p=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(e){var a;return Object(u.a)(this,n),(a=t.call(this,e)).handleSubmit=function(e){e.preventDefault(),document.getElementById("input-form").reset();var t=a.state.listItems;if(" "!==t.text){var n=[].concat(Object(o.a)(a.state.items),[t]);a.setState({items:n,listItems:{text:" ",key:" "}}),console.log("Goal: ",t)}},a.handleChange=function(e){e.preventDefault(),a.setState({listItems:{text:e.target.value,key:Date.now()}})},a.finishItem=function(e){var t=a.state.items.filter((function(t){return t.key!==e}));setTimeout((function(){a.setState({items:t})}),500)},a.updateItem=function(e,t){console.log("items:"+a.state.items);var n=a.state.items;n.map((function(n){n.key===t&&(console.log(n.key+"    "+t),n.text=e)})),a.setState({items:n})},a.state={items:[],listItems:{text:" ",key:" "}},a.handleChange=a.handleChange.bind(Object(d.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(d.a)(a)),a.finishItem=a.finishItem.bind(Object(d.a)(a)),a.updateItem=a.updateItem.bind(Object(d.a)(a)),a}return Object(c.a)(n,[{key:"render",value:function(){var e=i.a.createElement("li",null,this.state.listItems.text).item;return i.a.createElement("div",null,i.a.createElement("form",{id:"input-form",onSubmit:this.handleSubmit},i.a.createElement("input",{type:"text",placeholder:"Input Goal",name:"item",id:"input",value:e,onChange:this.handleChange}),i.a.createElement("button",{id:"add",onClick:this.handleArray},"Add")),i.a.createElement(f,{items:this.state.items,finishItem:this.finishItem,updateItem:this.updateItem}))}}]),n}(i.a.Component),b=function(e){Object(r.a)(n,e);var t=Object(m.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(c.a)(n,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"Execute"),i.a.createElement("h2",null,"Track Your Goals"),i.a.createElement(p,null))}}]),n}(i.a.Component);s.a.render(i.a.createElement(i.a.Fragment,null,i.a.createElement(b,null)),document.getElementById("root"))},7:function(e,t,n){}},[[11,1,2]]]);
//# sourceMappingURL=main.5c572083.chunk.js.map