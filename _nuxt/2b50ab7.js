(window.webpackJsonp=window.webpackJsonp||[]).push([[46,8,39],{382:function(t,e,r){"use strict";var n=r(4),o=r(92).find,c=r(156),l="find",d=!0;l in[]&&Array(1)[l]((function(){d=!1})),n({target:"Array",proto:!0,forced:d},{find:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),c(l)},383:function(t,e,r){"use strict";r.r(e);r(23),r(44),r(38),r(32),r(26),r(53),r(36),r(54);var n=r(20),o=r(3),c=(r(382),r(12),r(18),r(157));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={props:{product:{type:Object,default:{}}},components:{EmptyView:c.default},data:function(){return{isAdding:!1,selected:"",showOrder:!1}},methods:{addToCart:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t.isAdding=!0,e.next=4,t.$store.dispatch("addToCart",d(d({},t.product),{},{qty:1}));case 4:t.isAdding=!1,t.$notify.success({message:"Successfully added to cart"}),e.next=13;break;case 8:e.prev=8,e.t0=e.catch(0),t.isAdding=!1,t.$notify.error({message:(null===(r=e.t0.response)||void 0===r||null===(n=r.data)||void 0===n?void 0:n.message)||"Something went wrong"}),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,8]])})))()},viewProduct:function(){var t=this,e=this.$store.state.cart.find((function(e){return Number(e.product_id)===Number(t.product.id)}));console.log(e,"theFound"),this.$store.commit("set_product",e?{product:e,found:!0}:{product:this.product,found:!1})},zeroQty:function(){var t=this,e=this.$store.state.cart.find((function(e){return Number(e.product_id)===Number(t.product.id)}));console.log(e,"theFound"),this.$store.commit("set_products",e?{product:e,found:!0}:{product:this.product,found:!1})}}},v=r(0),component=Object(v.a)(f,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"rounded-lg overflow-hidden"},[e("div",{staticClass:"bg-white shadow-light flex flex-col items-center rounded-lg product_card transform duration-150"},[t.product.qty<=0?e("button",{staticClass:"w-full focus:outline-none",on:{click:t.zeroQty}},[e("init-card",{attrs:{large:!0,title:t.product.name}}),t._v(" "),e("div",{staticClass:"mt-6 text-center text-grey-400"},[t._v("\n        "+t._s(t.product.name)+"\n      ")]),t._v(" "),e("div",{staticClass:"mt-2 text-center text-grey-200",staticStyle:{"font-size":"11px"}},[t._v("\n        "+t._s(t.product.generic_name)+"\n      ")]),t._v(" "),e("div",{staticClass:"mt-2 text-center text-grey-200",staticStyle:{"font-size":"11px"}},[t._v("\n        "+t._s(t.product.pack_size)+"\n      ")]),t._v(" "),e("b",{staticClass:"my-3 text-center inline-block w-full text-lg"},[t._v(t._s(t._f("formatCurrency")(Number(t.product.price)/100)))])],1):e("button",{staticClass:"w-full focus:outline-none",on:{click:t.viewProduct}},[e("init-card",{attrs:{large:!0,title:t.product.name}}),t._v(" "),e("div",{staticClass:"mt-6 text-center text-grey-400"},[t._v("\n        "+t._s(t.product.name)+"\n      ")]),t._v(" "),e("div",{staticClass:"mt-2 text-center text-grey-200",staticStyle:{"font-size":"11px"}},[t._v("\n        "+t._s(t.product.generic_name)+"\n      ")]),t._v(" "),e("div",{staticClass:"mt-2 text-center text-grey-200",staticStyle:{"font-size":"11px"}},[t._v("\n        "+t._s(t.product.pack_size)+"\n      ")]),t._v(" "),e("b",{staticClass:"my-3 text-center inline-block w-full text-lg"},[t._v(t._s(t._f("formatCurrency")(Number(t.product.price)/100)))])],1),t._v(" "),e("div",{staticClass:"pb-8 pt-2 px-6 w-full"},[t.product.qty<=0?e("button",{staticClass:"bg-red-600 w-full rounded-md py-3 px-7 text-white flex items-center justify-center text-sm",on:{click:t.zeroQty}},[[e("cart",{staticClass:"fill-current mr-2"}),t._v(" "),e("span",{staticClass:"font-semibold"},[t._v(" Add to cart ")])]],2):e("button",{staticClass:"bg-red-600 w-full rounded-md py-3 px-7 text-white flex items-center justify-center text-sm",on:{click:t.addToCart}},[!1===t.isAdding?[e("cart",{staticClass:"fill-current mr-2"}),t._v(" "),e("span",{staticClass:"font-semibold"},[t._v(" Add to cart ")])]:e("spinner")],2)])]),t._v(" "),e("transition",{attrs:{name:"fade"}},[t.showOrder?e("EmptyView",{on:{"close-modal":function(e){t.showOrder=!1}}}):t._e()],1)],1)}),[],!1,null,null,null);e.default=component.exports},385:function(t,e,r){var content=r(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(28).default)("6d62109a",content,!0,{sourceMap:!1})},419:function(t,e,r){"use strict";r(385)},420:function(t,e,r){var n=r(27)((function(i){return i[1]}));n.push([t.i,"@import url(https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css);"]),n.push([t.i,"",""]),n.locals={},t.exports=n},423:function(t,e,r){"use strict";r.r(e);var n=r(383),o={props:{title:{type:String,default:"Products"},products:{type:Array,default:function(){return[]}},state:{type:String,default:"IDLE"}},components:{ProductCard:n.default},data:function(){return{sliderSettings:{dots:!1,infinite:!1,speed:500,slidesToShow:6,slidesToScroll:1,initialSlide:0,responsive:[{breakpoint:2100,settings:{slidesToShow:5}},{breakpoint:1800,settings:{slidesToShow:4}},{breakpoint:1300,settings:{slidesToShow:3}},{breakpoint:1250,settings:{slidesToShow:3}},{breakpoint:1024,settings:{slidesToShow:2.4}},{breakpoint:600,settings:{slidesToShow:2.05}},{breakpoint:560,settings:{slidesToShow:1.3}},{breakpoint:425,settings:{slidesToShow:1.05}}]}}}},c=(r(419),r(0)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"mb-7 flex items-center justify-between max-w-[1324px] mx-auto"},[e("h3",{staticClass:"font-semibold text-xl"},[t._v("\n        "+t._s(t.title)+"\n      ")])]),t._v(" "),e("div",{staticClass:"products"},[(t.state===t.API_STATUS.LOADING||t.state===t.API_STATUS.IDLE)&&t.products.length<1?e("div",{staticClass:"min-h-32 flex flex-col items-center justify-center"},[e("spinner-bg"),t._v(" "),e("span",{staticClass:"text-center block mt-3 text-sm"},[t._v("\n          Fetching products...\n        ")])],1):t._e(),t._v(" "),e("div",{staticClass:"columns is-variable is-multiline is-centered is-4"},t._l(t.products,(function(t){return e("ProductCard",{key:t.id,staticClass:"column is-3",attrs:{product:t}})})),1)])])}),[],!1,null,"37f39957",null);e.default=component.exports},480:function(t,e,r){"use strict";r.r(e);r(23);var n=r(3),o=(r(18),r(75),{layout:"authenticated",data:function(){return{status:"IDLE",products:[],nextPageNumber:null,prevPageNumber:null,nextPageUrl:null,prevPageUrl:null}},mounted:function(){this.fetchNewProducts()},methods:{fetchNewProducts:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log("in method"),t.status=t.API_STATUS.LOADING,r=1,t.$route.query.page&&(r=t.$route.query.page),e.next=7,t.$axios.get("/product/customer/all?category=".concat(t.$route.params.id,"&page=").concat(r));case 7:n=e.sent,t.products=n.data.data.data,t.status=t.API_STATUS.SUCCESS,t.nextPageNumber=Math.ceil((n.data.data.to+1)/n.data.data.per_page),t.prevPageNumber=Math.ceil((n.data.data.from-1)/n.data.data.per_page),t.nextPageUrl=n.data.data.next_page_url,t.prevPageUrl=n.data.data.prev_page_url,e.next=20;break;case 16:e.prev=16,e.t0=e.catch(0),console.log(e.t0),t.status=t.API_STATUS.ERROR;case 20:case"end":return e.stop()}}),e,null,[[0,16]])})))()},nextPage:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.nextPageUrl&&t.$router.push({query:{page:t.nextPageNumber}},void 0,{shallow:!1})}catch(e){console.log(e),t.status=t.API_STATUS.ERROR}case 1:case"end":return e.stop()}}),e)})))()},prevPage:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.prevPageUrl&&t.$router.push({query:{page:t.prevPageNumber}},void 0,{shallow:!1})}catch(e){console.log(e),t.status=t.API_STATUS.ERROR}case 1:case"end":return e.stop()}}),e)})))()}},watch:{"$route.query":"$fetch"},fetch:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.fetchNewProducts();case 1:case"end":return e.stop()}}),e)})))()}}),c=r(0),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",[e("div",{},[e("ProductCategoryGrid",{attrs:{title:t.jsUcfirst(t.$route.params.name),state:t.status,products:t.products}})],1),t._v(" "),e("br"),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"buttons",staticStyle:{width:"100%","text-align":"center",display:"block"}},[e("button",{staticClass:"button is-warning",on:{click:t.prevPage}},[t._v("Prev")]),t._v(" "),e("button",{staticClass:"button is-danger",on:{click:t.nextPage}},[t._v("Next")])]),t._v(" "),e("br"),t._v(" "),t.status===t.API_STATUS.SUCCESS&&t.products.length<1?e("div",{staticClass:"min-h-32 flex flex-col items-center justify-center"},[e("img",{staticClass:"w-16 h-16",attrs:{src:"/empty.svg",alt:""}}),t._v(" "),e("span",{staticClass:"text-center block mt-3 text-base"},[t._v("\n      No products under this category")])]):t._e()])}),[],!1,null,"e4982a10",null);e.default=component.exports;installComponents(component,{ProductCategoryGrid:r(423).default})}}]);