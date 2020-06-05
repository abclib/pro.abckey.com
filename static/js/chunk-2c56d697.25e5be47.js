(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-2c56d697"],{"5b0c":function(e,t,s){"use strict";s.r(t);var r=(s("cb29"),s("a15b"),s("fb6a"),s("b0c0"),s("d3b7"),s("25f0"),s("96cf"),s("1da1")),a=s("5530"),d=s("c9c7"),n=s.n(d),c=s("c947"),i=s("d044"),o=s.n(i),l=s("5880"),_=s("48b8"),f={name:"Receive",mixins:[s("7ca6").a],data:function(){return{d_maxReceiveAddress:20,d_tab:null,d_overlay:!1,d_snackbar:!1,d_receiveList:[],d_addressList:[],d_selectedId:-1,d_currentInex:0,d_currentAddress:"0",d_alertShow:!1,d_errorText:""}},computed:Object(a.a)(Object(a.a)({},Object(l.mapState)(["usb","pageLoading"])),{},{c_coinInfo:function(e){return e.$store.__s("coinInfo")},c_chooseType:function(e){return e.$store.__s("dialog.chooseType")},c_protocol:function(e){return e.$store.__s("coinProtocol")}}),watch:{c_chooseType:function(e){e&&this._hideOverlay()}},created:function(){this.getUsedTokens()},methods:{receiveCoin:function(e){return n()(e,"sat_".concat(this.c_coinInfo.symbol)).toString()},clickAddress:function(e,t){this.d_overlay||this._showOverlay(e,t)},_showOverlay:function(e,t){var s=this;return Object(r.a)(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return s.d_selectedId=e,s._qrcode(s.d_addressList[s.d_selectedId].newAddress),a=Object(_.b)(t),s.d_overlay=!0,document.getElementsByClassName("qr")[0].style.top=a.y-80+"px",r.next=7,s.$usb.cmd("GetAddress",{coin_name:s.c_coinInfo.name,address_n:[(2147483648|s.c_protocol)>>>0,(2147483648|s.coinInfo.slip44)>>>0,2147483648,0,s.d_addressList[s.d_selectedId].index],script_type:49===s.c_protocol?"SPENDP2SHWITNESS":"SPENDADDRESS",show_display:!0});case 7:s._hideOverlay();case 8:case"end":return r.stop()}}),r)})))()},_hideOverlay:function(){this.d_selectedId=-1,this.d_overlay=!1},_qrcode:function(e){return document.getElementById("qrcode").innerHTML="",new o.a("qrcode",{width:132,height:132,text:e,colorDark:"#000",colorLight:"#fff"})},copyAddress:function(){if(this.d_overlay)try{Object(_.a)(this.d_addressList[this.d_selectedId].newAddress),this.showAlert(this.$t("Address has been copied to clipboard"))}catch(e){this.showAlert(this.$t("Copy failed!"))}},getUsedTokens:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var s;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.$store.__s("pageLoading",!0),s=null,t.prev=2,t.next=5,c.b.HistoryByXpub({coinName:e.c_coinInfo.symbol,xpub:e.usb.xpub});case 5:s=t.sent,t.next=12;break;case 8:t.prev=8,t.t0=t.catch(2),e.$store.__s("pageLoading",!1),e.$message.error(e.$t("Network Error!"));case 12:e.d_receiveList=s.tokens?s.tokens:[],e.d_currentInex=s.usedTokens?s.usedTokens:"0",e.d_currentAddress=e.d_currentInex,e.getAddr(),e.$store.__s("pageLoading",!1);case 17:case"end":return t.stop()}}),t,null,[[2,8]])})))()},getAddr:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var s,r,a,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(e.d_addressList.length>e.d_maxReceiveAddress)){t.next=4;break}return e.showAlert(e.$t("Payment address cannot exceed 20 Each")),e.$store.__s("pageLoading",!1),t.abrupt("return");case 4:return t.prev=4,t.next=7,e.$usb.cmd("GetAddress",{coin_name:e.c_coinInfo.name,address_n:[(2147483648|e.c_protocol)>>>0,(2147483648|e.coinInfo.slip44)>>>0,2147483648,0,e.d_currentInex],script_type:49===e.c_protocol?"SPENDP2SHWITNESS":"SPENDADDRESS",show_display:!1});case 7:s=t.sent,e.d_currentAddress=s.data.address,r=e.d_currentAddress.length,a=e.d_currentAddress.slice(0,4)+new Array(r-8).fill("#").join("")+e.d_currentAddress.slice(r-8+4),d={index:e.d_currentInex++,newAddress:e.d_currentAddress,hideAddress:a},e.d_addressList.push(d),t.next=18;break;case 15:t.prev=15,t.t0=t.catch(4),e.showAlert(e.$t("Get device address error"));case 18:case"end":return t.stop()}}),t,null,[[4,15]])})))()},showAlert:function(e){var t=this;this.d_alertShow=!0,this.d_errorText=e,setTimeout((function(){t.d_alertShow=!1}),2e3)}},i18n:{messages:{zhCN:{"Copy failed!":"复制失败","Payment address cannot exceed 20 Each":"收款地址不能超过20个","Address has been copied to clipboard":"地址已经复制到剪贴板","New Address":"新地址","Old Address":"旧地址",Index:"索引",Address:"地址","More Address":"更多地址","Total Receive":"累积接收","No Record":"暂无记录","Get device address error":"获取设备地址错误","Please check the address in your device":"请在设备上核对地址"}}}},u=(s("82e2"),s("2877")),p=s("6544"),h=s.n(p),v=s("8336"),b=s("b0af"),x=s("a797"),m=s("1f4f"),y=s("2db4"),g=s("71a3"),w=s("c671"),k=s("fe57"),A=s("aac8"),I=Object(u.a)(f,(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"receive-wrap"},[s("div",{directives:[{name:"show",rawName:"v-show",value:this.d_selectedId>-1,expression:"this.d_selectedId > -1"}],staticClass:"qr"},[s("div",{attrs:{id:"qrcode"}}),e.d_selectedId>-1?s("div",[e._v(e._s("m/"+this.c_protocol+"'/"+this.c_coinInfo.slip44+"'/0'/0/"+e.d_addressList[this.d_selectedId].index))]):e._e()]),s("v-snackbar",{attrs:{top:""},model:{value:e.d_alertShow,callback:function(t){e.d_alertShow=t},expression:"d_alertShow"}},[e._v(e._s(e.d_errorText))]),s("v-overlay",{model:{value:e.d_overlay,callback:function(t){e.d_overlay=t},expression:"d_overlay"}}),s("v-card",[s("v-tabs",{staticClass:"pa-6 pb-3",model:{value:e.d_tab,callback:function(t){e.d_tab=t},expression:"d_tab"}},[s("v-tab",[e._v(e._s(e.$t("New Address")))]),s("v-tab",[e._v(e._s(e.$t("Old Address")))])],1),s("v-tabs-items",{model:{value:e.d_tab,callback:function(t){e.d_tab=t},expression:"d_tab"}},[s("v-tab-item",[s("v-card",{staticClass:"pa-6 pt-0 d-flex flex-column justify-start",attrs:{flat:""}},[s("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[e._v(e._s(e.$t("Index")))]),s("th",{staticClass:"text-left"},[e._v(e._s(e.$t("Address")))])])]),s("tbody",e._l(e.d_addressList,(function(t,r){return s("tr",{key:r,staticStyle:{position:"relative"},on:{click:function(t){return e.clickAddress(r,t)}}},[s("td",{staticClass:"text-left"},[e._v(e._s(t.index))]),s("td",{staticClass:"text-left d-flex flex-row justify-start align-center",staticStyle:{cursor:"pointer"}},[s("span",{staticClass:"s-address caption pl-2 pr-2",class:e.d_selectedId===r?"highlight":""},[s("i",{staticClass:"icon mr-2",staticStyle:{"font-size":"18px"},domProps:{innerHTML:e._s(e.d_selectedId===r?"&#xe804;":"&#xe9cf;")},on:{click:function(t){return e.copyAddress(r)}}}),s("span",{domProps:{textContent:e._s(e.d_selectedId===r?t.newAddress:t.hideAddress)}})])]),e.d_selectedId===r?s("div",{staticClass:"d-flex justify-start align-center"},[s("span",{staticClass:"pr-2 pl-2 caption highlight-2"},[e._v(e._s(e.$t("Please check the address in your device")))])]):e._e()])})),0)]},proxy:!0}])}),s("v-btn",{staticClass:"d-flex mt-4",staticStyle:{width:"auto","max-width":"180px"},attrs:{medium:"",rounded:"",color:"primary"},on:{click:e.getAddr}},[s("i",{staticClass:"icon",staticStyle:{"font-size":"20px"}},[e._v("")]),s("span",[e._v(e._s(e.$t("More Address")))])])],1)],1),s("v-tab-item",[s("v-card",{staticClass:"pa-6 pt-0",attrs:{flat:""}},[s("v-simple-table",{scopedSlots:e._u([{key:"default",fn:function(){return[s("thead",[s("tr",[s("th",{staticClass:"text-left"},[e._v(e._s(e.$t("Index")))]),s("th",{staticClass:"text-left"},[e._v(e._s(e.$t("Address")))]),s("th",{staticClass:"text-left"},[e._v(e._s(e.$t("Total Receive")))])])]),e.d_receiveList.length?s("tbody",e._l(e.d_receiveList,(function(t,r){return s("tr",{key:r},[s("td",{staticClass:"text-left"},[e._v(e._s(r))]),s("td",{staticClass:"text-left d-flex flex-row justify-start align-center"},[s("span",{staticClass:"old-address body-2 pl-2 pr-2"},[e._v(e._s(t.name))])]),s("td",{staticClass:"text-left"},[s("span",{staticClass:"old-address body-2 pl-2 pr-2"},[e._v(e._s(e.receiveCoin(t.totalReceived)))])])])})),0):e._e()]},proxy:!0}])}),e.d_receiveList.length?e._e():s("div",{staticClass:"d-flex justify-center align-center body-2 mt-4 grey--text"},[e._v(e._s(e.$t("No Record")))])],1)],1)],1)],1)],1)}),[],!1,null,"7ff31ce9",null);t.default=I.exports,h()(I,{VBtn:v.a,VCard:b.a,VOverlay:x.a,VSimpleTable:m.a,VSnackbar:y.a,VTab:g.a,VTabItem:w.a,VTabs:k.a,VTabsItems:A.a})},"7a52":function(e,t,s){(t=s("24fb")(!1)).push([e.i,".receive-wrap[data-v-7ff31ce9]{position:relative;width:960px;margin:20px auto}.s-address[data-v-7ff31ce9]{width:300px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center;color:rgba(0,0,0,.2);border-radius:2px;border:1px dashed rgba(0,0,0,.2)}.old-address[data-v-7ff31ce9]{color:rgba(0,0,0,.6)}.highlight[data-v-7ff31ce9]{border:1px dashed red;background:#fff;color:red}.highlight[data-v-7ff31ce9],.highlight-2[data-v-7ff31ce9]{position:relative;z-index:99999}.highlight-2[data-v-7ff31ce9]{border-radius:4px;top:-5px;left:15px;background:rgba(0,0,0,.8);color:#fff}#qrcode[data-v-7ff31ce9]{display:inline-block}#qrcode img[data-v-7ff31ce9]{width:132px;height:132px}.qr[data-v-7ff31ce9]{position:fixed;z-index:99999;padding:6px;background:#fff;right:20%;top:30%}",""]),e.exports=t},"82e2":function(e,t,s){"use strict";var r=s("ac4d");s.n(r).a},ac4d:function(e,t,s){var r=s("7a52");"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals),(0,s("499e").default)("211b5192",r,!0,{sourceMap:!1,shadowMode:!1})}}]);