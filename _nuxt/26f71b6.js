(window.webpackJsonp=window.webpackJsonp||[]).push([[49,14,15,19],{316:function(t,e,r){"use strict";r.r(e);var n=r(3),l=(r(14),r(310)),c=r(311),o={props:{id:{type:String,default:""}},components:{ReloadIcon:l.default,ReOrder:c.default},data:function(){return{status:"IDLE",order:null,error:"",reorderStatus:"IDLE",showActions:!1}},mounted:function(){this.fetchOrder()},methods:{fetchOrder:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.status=t.API_STATUS.LOADING,e.next=4,t.$axios.get("/order/".concat(t.id));case 4:r=e.sent,console.log(r),t.order=r.data,t.status=t.API_STATUS.SUCCESS,e.next=15;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0),t.error=(null===e.t0||void 0===e.t0||null===(n=e.t0.response)||void 0===n||null===(l=n.data)||void 0===l?void 0:l.message)||"Something went wrong",t.status=t.API_STATUS.ERROR;case 15:case"end":return e.stop()}}),e,null,[[0,10]])})))()},reorderItems:function(){var t=arguments,e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n,l,c,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=t.length>0&&void 0!==t[0]&&t[0],r.prev=1,e.reorderStatus=e.API_STATUS.LOADING,r.next=5,e.$axios.post("/order/reorder",{order_id:1,replace:n});case 5:l=r.sent,console.log(l.data.data),e.order=l.data,e.reorderStatus=e.API_STATUS.SUCCESS,e.$emit("close-modal"),e.$store.commit("add_to_cart",l.data.data),e.$notify.success({message:"Success"}),r.next=19;break;case 14:r.prev=14,r.t0=r.catch(1),console.log(r.t0),e.$notify.error({message:(null===(c=r.t0.response)||void 0===c||null===(o=c.data)||void 0===o?void 0:o.error)||"Something went wrong"}),e.reorderStatus=e.API_STATUS.ERROR;case 19:case"end":return r.stop()}}),r,null,[[1,14]])})))()}}},d=r(0),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"fixed top-0 left-0 z-50 bg-gray-50 w-screen h-screen flex items-center justify-center p-3 sm:p-5"},[r("div",{staticClass:"bg-white p-4 md:p-12 rounded-xl w-full md:w-190 flex flex-col max-h-full relative overflow-x-auto overflow-y-auto"},[r("div",{staticClass:"absolute cursor-pointer -top-11 right-0 bg-gray-222 p-3 rounded-full",on:{click:function(e){return t.$emit("close-modal")}}},[r("cancel")],1),t._v(" "),t.status===t.API_STATUS.SUCCESS?[r("div",[r("div",{staticClass:"flex items-center justify-between"},[r("div",{staticClass:"flex"},[r("h6",{staticClass:"font-semibold"},[t._v("Order ID: ")]),t._v(" "),r("span",[t._v(t._s(t.order.id))])]),t._v(" "),r("button",{staticClass:"text-sm flex items-center border border-gray-200 text-red-600 trounded-md bg-white px-3 py-2 mr-2 my-3",on:{click:function(e){t.showActions=!0}}},[r("reload-icon",{staticClass:"fill-current mr-2 w-4 h-4"}),t._v(" "),r("span",{staticClass:"ext-sm font-medium"},[t._v("Reorder")])],1)]),t._v(" "),r("div",{staticClass:"flex flex-wrap"},[r("div",{staticClass:"pr-12 md:border-r border-gray-200"},[r("h5",{staticClass:"mb-3 text-gray-222 font-semibold"},[t._v("ORDER DETAILS")]),t._v(" "),r("div",{staticClass:"flex"},[r("p",{staticClass:"font-semibold text-gray-900"},[t._v("Qty:")]),t._v(" "),r("span",{staticClass:"font-normal"},[t._v(" "+t._s(t.order.items.reduce((function(t,e){return t+parseInt(e.qty)}),0))+"\n                items")])]),t._v(" "),r("div",{staticClass:"flex"},[r("p",{staticClass:"font-semibold text-gray-900"},[t._v("Subtotal:")]),t._v(" "),r("span",{staticClass:"font-normal"},[t._v(" "+t._s(t._f("formatCurrency")(t.order.amount/100)))])]),t._v(" "),r("div",{staticClass:"flex"},[r("p",{staticClass:"font-semibold text-gray-900"},[t._v("Date:")]),t._v(" "),r("span",{staticClass:"font-normal"},[t._v(" "+t._s(t.formatDate(t.order.created_at)))])]),t._v(" "),r("div",{staticClass:"flex"},[r("p",{staticClass:"font-semibold text-gray-900"},[t._v("Time:")]),t._v(" "),r("span",{staticClass:"font-normal"},[t._v(" "+t._s(t.order.created_at.split("T")[1].split(".")[0]))])])]),t._v(" "),r("div",{staticClass:"max-w-sm md:pl-12"},[r("h5",{staticClass:"mb-3 text-gray-222 font-semibold uppercase"},[t._v("\n              SHIPPING address\n            ")]),t._v(" "),r("span",{staticClass:"font-normal"},[t._v(t._s(t.order.address))])])])]),t._v(" "),r("div",{staticClass:"flex flex-col max-w-full overflow-y-auto flex-grow"},[r("div",{staticClass:"overflow-x-auto overflow-y-auto w-full"},[r("div",{staticClass:"py-2 align-middle overflow-y-auto inline-block min-w-full"},[r("div",{staticClass:"overflow-y-auto border-b border-gray-200 overflow-x-auto"},[r("table",{staticClass:"min-w-full overflow-y-auto divide-y divide-gray-200 overflow-x-auto"},[t._m(0),t._v(" "),r("tbody",{staticClass:"bg-white divide-y divide-gray-200"},t._l(t.order.items,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"pr-6 py-4 whitespace-nowrap"},[r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"flex-shrink-0"},[r("InitCard",{attrs:{title:e.product.name}})],1),t._v(" "),r("div",{staticClass:"ml-4"},[r("div",{staticClass:"text-sm font-medium text-gray-900"},[t._v("\n                            "+t._s(e.product.name)+"\n                          ")]),t._v(" "),r("div",{staticClass:"text-sm text-red-600"},[t._v("\n                            "+t._s(e.manufacture_date)+"\n                          ")])])])]),t._v(" "),r("td",{staticClass:"pr-6 py-4 whitespace-nowrap"},[r("div",{staticClass:"font-semibold text-gray-600 text-xl"},[t._v("\n                        "+t._s(t._f("formatCurrency")(e.price))+"\n                        ")])]),t._v(" "),r("td",{staticClass:"pr-6 py-4"},[r("div",{staticClass:"flex items-center"},[r("div",[r("div",{staticClass:"px-3"},[r("input",{directives:[{name:"model",rawName:"v-model",value:e.qty,expression:"orderItem.qty"}],staticClass:"w-6 shadow-light1 text-center text-sm",attrs:{disabled:"",type:"text"},domProps:{value:e.qty},on:{input:function(r){r.target.composing||t.$set(e,"qty",r.target.value)}}})])])])]),t._v(" "),r("td",{staticClass:"pr-6 py-4 whitespace-nowrap text-sm text-gray-500"},[r("div",{staticClass:"font-semibold text-xl text-gray-600"},[t._v("\n                        "+t._s(t._f("formatCurrency")(e.price))+"\n                      ")])])])})),0)])])])])])]:t._e(),t._v(" "),t.status===t.API_STATUS.LOADING?r("div",{staticClass:"w-full h-64 flex items-center justify-center"},[r("div",{staticClass:"flex flex-col items-center"},[r("SpinnerBg"),t._v(" "),r("span",{staticClass:"mt-2 font-medium text-black1"},[t._v("Fetching order...")])],1)]):t._e(),t._v(" "),t.status===t.API_STATUS.ERROR?r("div",{staticClass:"w-full flex items-center justify-center h-64"},[r("p",{staticClass:"text-black1"},[t._v(t._s(t.error))])]):t._e()],2),t._v(" "),t.showActions?r("div",{staticClass:"fixed top-0 left-0 z-50 bg-gray-50 w-screen h-screen flex items-center justify-center p-3 sm:p-5"},[r("div",{staticClass:"bg-white p-4 md:p-12 rounded-xl w-full md:w-96 flex flex-col max-h-full relative"},[r("div",{staticClass:"absolute -top-11 right-0 bg-gray-222 p-3 rounded-full",on:{click:function(e){t.showActions=!1}}},[r("cancel")],1),t._v(" "),r("div",{staticClass:"text-red-600 bg-pink-400 flex items-center justify-center p-6 rounded-full w-max mx-auto"},[r("reload-icon",{staticClass:"fill-current w-11 h-11 block"})],1),t._v(" "),r("h3",{staticClass:"text-2xl text-center my-4 font-medium"},[t._v("Buy again")]),t._v(" "),r("div",{staticClass:" text-center "},[t._v("\n        Do you want to clear the items on your cart or replace them totally?\n      ")]),t._v(" "),r("div",{staticClass:"flex justify-between mt-7"},[r("button",{staticClass:"text-sm flex items-center bg-gray-901 text-black rounded-md bg-white px-3 py-2 mr-2 my-3",on:{click:function(e){return t.reorderItems(!0)}}},[r("span",{staticClass:"ext-sm font-medium"},[t._v("Clear cart")]),t._v(" "),t.reorderStatus===t.API_STATUS.LOADING?r("spinner",{staticClass:"ml-2"}):t._e()],1),t._v(" "),r("button",{staticClass:"text-sm flex items-center bg-red-600 text-white  text-red-600 rounded-md bg-white px-3 py-2 mr-2 my-3",on:{click:t.reorderItems}},[r("span",{staticClass:"ext-sm font-medium"},[t._v("Keep items")]),t._v(" "),t.reorderStatus===t.API_STATUS.LOADING?r("spinner",{staticClass:"ml-2"}):t._e()],1)])])]):t._e()])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{},[r("tr",[r("th",{staticClass:"pr-6 py-3 text-left font-semibold text-xs whitespace-nowrap text-gray-400 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                      PRODUCT\n                    ")]),t._v(" "),r("th",{staticClass:"pr-6 py-3 text-left font-semibold text-xs whitespace-nowrap text-gray-400 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                      UNIT Price\n                    ")]),t._v(" "),r("th",{staticClass:"pr-6 py-3 text-left font-semibold text-xs whitespace-nowrap text-gray-400 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                      QTY\n                    ")]),t._v(" "),r("th",{staticClass:"pr-6 py-3 text-left font-semibold text-xs whitespace-nowrap text-gray-400 uppercase tracking-wider",attrs:{scope:"col"}},[t._v("\n                      TOTAL PRICE\n                    ")]),t._v(" "),r("th",{staticClass:"relative px-6 py-3",attrs:{scope:"col"}},[r("span",{staticClass:"sr-only"},[t._v("Edit")])])])])}],!1,null,"1695306a",null);e.default=component.exports},319:function(t,e,r){"use strict";r.r(e);var n=r(0),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{attrs:{"enable-background":"new 0 0 24 24",height:"16",viewBox:"0 0 24 24",width:"16",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{d:"m5 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"}}),t._v(" "),r("path",{attrs:{d:"m5 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"}}),t._v(" "),r("path",{attrs:{d:"m5 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"}}),t._v(" "),r("path",{attrs:{d:"m14 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"}}),t._v(" "),r("path",{attrs:{d:"m14 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"}}),t._v(" "),r("path",{attrs:{d:"m14 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"}}),t._v(" "),r("path",{attrs:{d:"m23 0h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"}}),t._v(" "),r("path",{attrs:{d:"m23 9h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"}}),t._v(" "),r("path",{attrs:{d:"m23 18h-4c-.552 0-1 .448-1 1v4c0 .552.448 1 1 1h4c.552 0 1-.448 1-1v-4c0-.552-.448-1-1-1z"}})])}),[],!1,null,null,null);e.default=component.exports},320:function(t,e,r){"use strict";r.r(e);var n=r(0),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticStyle:{"enable-background":"new 0 0 60.123 60.123"},attrs:{height:"16",width:"16",version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60.123 60.123","xml:space":"preserve"}},[r("g",[r("path",{attrs:{d:"M57.124,51.893H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,51.893,57.124,51.893z"}}),t._v(" "),r("path",{attrs:{d:"M57.124,33.062H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3\n\t\tC60.124,31.719,58.781,33.062,57.124,33.062z"}}),t._v(" "),r("path",{attrs:{d:"M57.124,14.231H16.92c-1.657,0-3-1.343-3-3s1.343-3,3-3h40.203c1.657,0,3,1.343,3,3S58.781,14.231,57.124,14.231z"}}),t._v(" "),r("circle",{attrs:{cx:"4.029",cy:"11.463",r:"4.029"}}),t._v(" "),r("circle",{attrs:{cx:"4.029",cy:"30.062",r:"4.029"}}),t._v(" "),r("circle",{attrs:{cx:"4.029",cy:"48.661",r:"4.029"}})]),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g")])}),[],!1,null,null,null);e.default=component.exports},321:function(t,e,r){"use strict";r.r(e);var n=r(0),component=Object(n.a)({},(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("svg",{staticStyle:{"enable-background":"new 0 0 971.986 971.986"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",width:"16",height:"16",viewBox:"0 0 971.986 971.986","xml:space":"preserve"}},[r("g",[r("path",{attrs:{d:"M370.216,459.3c10.2,11.1,15.8,25.6,15.8,40.6v442c0,26.601,32.1,40.101,51.1,21.4l123.3-141.3\n\t\tc16.5-19.8,25.6-29.601,25.6-49.2V500c0-15,5.7-29.5,15.8-40.601L955.615,75.5c26.5-28.8,6.101-75.5-33.1-75.5h-873\n\t\tc-39.2,0-59.7,46.6-33.1,75.5L370.216,459.3z"}})]),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g"),t._v(" "),r("g")])}),[],!1,null,null,null);e.default=component.exports},361:function(t,e,r){"use strict";r.r(e);var n=r(73),l=r(316),c={props:{orders:{type:Array,default:[]}},data:function(){return{selected:""}},components:{OrderView:l.default,SearchIcon:n.default}},o=r(0),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"flex flex-col"},[r("div",{staticClass:"-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"},[r("div",{staticClass:"py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"},[r("div",{staticClass:"overflow-x-auto overflow-hidden"},[r("table",{staticClass:"min-w-full overflow-x-auto  shadow-light2  rounded-md overflow-hidden"},[t._m(0),t._v(" "),r("tbody",{staticClass:"bg-white divide-y divide-gray-200"},t._l(t.orders,(function(e){return r("tr",{key:e.id},[r("td",{staticClass:"px-6 py-3 whitespace-nowrap"},[r("div",{staticClass:"flex items-center"},[r("div",{},[r("div",{staticClass:" "},[t._v("#"+t._s(e.id))])])])]),t._v(" "),r("td",{staticClass:"px-6 py-3 whitespace-nowrap"},[r("div",{},[t._v("\n                    "+t._s(e.items.reduce((function(t,e){return t+parseInt(e.qty)}),0))+"\n                    items\n                  ")])]),t._v(" "),r("td",{staticClass:"px-6 py-3 whitespace-nowrap"},[r("div",{},[t._v(t._s(t._f("formatCurrency")(e.amount/100)))])]),t._v(" "),r("td",{staticClass:"px-6 py-3 whitespace-nowrap"},[r("div",{},[t._v("\n                    "+t._s(t.returnDate(e.created_at))+"\n                  ")])]),t._v(" "),r("td",{staticClass:"px-6 py-3 whitespace-nowrap"},[r("div",{},[r("button",{staticClass:"text-sm mr-3 flex items-center text-white rounded-md bg-red-600 px-3 py-2 my-3",on:{click:function(r){t.selected=e.id}}},[r("search-icon",{staticClass:"fill-current mr-2 w-4 h-4"}),t._v(" "),r("span",{staticClass:"text-sm font-medium"},[t._v("View")])],1)])])])})),0)])])])])]),t._v(" "),r("transition",{attrs:{name:"fade"}},[t.selected?r("order-history-view",{attrs:{id:t.selected},on:{"close-modal":function(e){t.selected=!1}}}):t._e()],1)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("thead",{staticClass:"bg-gray-111 border-b border-gray-200"},[r("tr",[r("th",{staticClass:"uppercase whitespace-nowrap px-6 py-4 text-left text-sm font-medium text-gray-200 tracking-wider",attrs:{scope:"col"}},[t._v("\n                  ORDER ID\n                ")]),t._v(" "),r("th",{staticClass:"uppercase whitespace-nowrap px-6 py-4 text-left text-sm font-medium text-gray-200 tracking-wider",attrs:{scope:"col"}},[t._v("\n                  QUANTITY\n                ")]),t._v(" "),r("th",{staticClass:"uppercase whitespace-nowrap px-6 py-4 text-left text-sm font-medium text-gray-200 tracking-wider",attrs:{scope:"col"}},[t._v("\n                  Amount\n                ")]),t._v(" "),r("th",{staticClass:"uppercase whitespace-nowrap px-6 py-4 text-left text-sm font-medium text-gray-200 tracking-wider",attrs:{scope:"col"}},[t._v("\n                  DATE\n                ")]),t._v(" "),r("th")])])}],!1,null,"1f3b9a5d",null);e.default=component.exports;installComponents(component,{OrderHistoryView:r(318).default})},395:function(t,e,r){"use strict";r.r(e);var n=r(3),l=(r(14),r(355)),c=r(361),o=r(319),d=r(320),filter=r(321),v={layout:"authenticated",data:function(){return{view:"table",status:"IDLE",orders:null,sort:"",statusParam:""}},components:{HistoryCard:l.default,GridIcon:o.default,ListIcon:d.default,FilterIcon:filter.default,OrderTable:c.default},mounted:function(){this.fetchHistory()},methods:{fetchHistory:function(){var t=arguments,e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var param,n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return param=t.length>0&&void 0!==t[0]?t[0]:"",r.prev=1,e.status=e.API_STATUS.LOADING,r.next=5,e.$axios.get("/my/orders/all?".concat(param));case 5:n=r.sent,console.log(n),e.orders=n.data.data,e.status=e.API_STATUS.SUCCESS,r.next=15;break;case 11:r.prev=11,r.t0=r.catch(1),console.log(r.t0),e.status=e.API_STATUS.ERROR;case 15:case"end":return r.stop()}}),r,null,[[1,11]])})))()},close:function(){this.selected=null}},watch:{sort:function(){this.fetchHistory("sort=".concat(this.sort))},statusParam:function(){this.fetchHistory("status=".concat(this.statusParam))}}},m=r(0),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("h2",{staticClass:"header-text"},[t._v("Order history")]),t._v(" "),t.status===t.API_STATUS.SUCCESS&&t.orders.length>0?[r("div",{staticClass:"flex my-4 items-center justify-between flex-wrap"},[r("p",{staticClass:"text-2xl block my-6 text-gray-900"},[t._v("\n        You have "+t._s(t.orders?t.orders.length:0)+" Orders\n      ")]),t._v(" "),r("div",{staticClass:"flex items-center overflow-x-auto flex-grow blg:justify-end pr-5"},[r("div",{staticClass:"font-semibold text-gray-900 hidden sm:flex items-center mr-3 whitespace-nowrap"},[t._v("\n          Change view\n          "),r("button",{staticClass:"px-3 border-r border-gray-200",on:{click:function(e){t.view="grid"}}},[r("grid-icon",{class:"grid"===t.view?"fill-red-600":"fill-gray-400"})],1),t._v(" "),r("button",{staticClass:"px-3",on:{click:function(e){t.view="list"}}},[r("list-icon",{class:"grid"!==t.view?"fill-red-600":"fill-gray-400"})],1)]),t._v(" "),r("div",{staticClass:"font-semibold mr-3 flex items-center"},[t._v("\n          Sort\n          "),r("div",{staticClass:"relative select-box small"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.sort,expression:"sort"}],staticClass:"ml-3 form-input appearance-none relative select",attrs:{id:"sort"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.sort=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("---sort---")]),t._v(" "),r("option",{attrs:{value:"newest"}},[t._v("Newest")])])])]),t._v(" "),r("div",{staticClass:"font-semibold ml-3 flex items-center"},[r("div",{staticClass:"flex items-center"},[r("filter-icon",{staticClass:"fill-gray-200 mr-1"}),t._v("\n            Filter\n          ")],1),t._v(" "),r("div",{staticClass:"relative select-box small"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.statusParam,expression:"statusParam"}],staticClass:"ml-3 form-input appearance-none relative select",attrs:{id:"sort"},on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.statusParam=e.target.multiple?r:r[0]}}},[r("option",{attrs:{value:""}},[t._v("---status---")]),t._v(" "),r("option",{attrs:{value:""}},[t._v("Status")])])])])])]),t._v(" "),"grid"===t.view?r("div",{staticClass:"grid 2xl:grid-cols-2 gap-6"},t._l(t.orders,(function(t){return r("HistoryCard",{key:t.id,attrs:{order:t}})})),1):r("OrderTable",{attrs:{orders:t.orders}})]:t._e(),t._v(" "),t.status===t.API_STATUS.LOADING?r("div",{staticClass:"w-full h-64 flex items-center justify-center"},[r("div",{staticClass:"flex flex-col items-center"},[r("SpinnerBg"),t._v(" "),r("span",{staticClass:"mt-2 font-medium text-black1"},[t._v("Fetching orders history...")])],1)]):t._e(),t._v(" "),t.status===t.API_STATUS.SUCCESS&&t.orders.length<1?r("div",{staticClass:"w-full flex items-center justify-center h-64"},[r("p",{staticClass:"text-black1"},[t._v("No orders found")])]):t._e()],2)}),[],!1,null,"2d92fab0",null);e.default=component.exports;installComponents(component,{OrderTable:r(361).default})}}]);