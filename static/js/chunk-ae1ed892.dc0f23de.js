(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-ae1ed892"],{"0be0":function(t,e,n){"use strict";n.r(e);var a=(n("99af"),n("caad"),n("d81d"),n("a434"),n("b0c0"),n("d3b7"),n("ac1f"),n("25f0"),n("2532"),n("466d"),n("b85c")),s=(n("96cf"),n("1da1")),i=n("5530"),o=n("cebe"),r=n.n(o),c=n("2af7"),l=n("c9c7"),d=n.n(l),u=n("90f7"),h=n.n(u),f={name:"Send",data:function(){var t=this;return{d_error:!1,d_errorReason:"",d_transactionHash:"",d_snackbar:!1,d_feeUrl:"https://bitcoinfees.earn.com/api/v1/fees/recommended",d_utxoList:[],d_txidList:[],d_maxPaidIndex:0,d_needFee:!1,d_endUtxo:!1,UnitHelper:d.a,d_clickAll:!1,d_extraFee:0,d_signHash:"",d_bordercastShow:!1,d_txOut:[{address:"",amount:"0"}],d_addressRules:[function(e){return h.a.test(e,"btc","testnet")||t.$t("Invalid address")}],d_amountRules:[function(e){return/^[+]{0,1}[1-9]\d*$|^[+]{0,1}(0\.\d*[1-9])$|^[+]{0,1}([1-9]\d*\.\d*[0-9])$/.test(e)||t.$t("Invalid amount")}],d_fee:"4",d_feeRule:[function(e){return!!/^[1-9][0-9]?/.test(e)||t.$t("Invalid fee")}],d_feeList:[19,15,1],d_feeHelpList:{}}},computed:{c_totalAmounts:function(){var t=d()("0");for(var e in this.d_txOut)t=t.plus(this.d_txOut[e].amount);return t.times(1e8)},c_utxoTotal:function(){for(var t=d()("0"),e=this.d_utxoList.length,n=0;n<e;n++)t=t.plus(this.d_utxoList[n].value);return t},c_totalFees:function(){var t=d()(this.d_maxPaidIndex+1).times(148),e=d()(this.d_txOut.length).times(34);return d()(t).plus(e).plus(10).times(this.d_fee).plus(this.d_extraFee)},c_total:function(t){return t.c_totalAmounts.plus(t.c_totalFees)},c_xpub:function(t){return t.$store.__s("usb.xpub")},c_coinInfo:function(t){return t.$store.__s("coinInfo")},c_coinProtocol:function(t){return t.$store.__s("coinProtocol")},c_pageLoading:function(t){return t.$store.__s("pageLoading")},c_usb:function(t){return t.$store.__s("usb")}},created:function(){var t=this;this.$nextTick((function(){t.getUtxoList(),t.getFeePerSatoshis()}))},methods:{transferTxid:function(t){var e={};return e.version=t.version,e.lock_time=t.locktime,e.hash=t.txid,e.inputs=t.vin.map((function(t){var e={};return e.prev_index=t.vout,e.sequence=t.sequence,e.prev_hash=t.txid,e.script_sig=t.scriptSig.hex,e})),e.bin_outputs=t.vout.map((function(t){var e={};return e.amount=d()(t.value,"btc_sat").toString(),e.script_pubkey=t.scriptPubKey.hex,e})),e},showAllIcon:function(){this.d_clickAll=!1},errorBroadcast:function(t){this.d_error=!0,this.d_errorReason=t},sendAllBalance:function(t){for(var e=d()("0"),n=0;n<this.d_txOut.length;n++)t!==n&&(e=e.plus(this.d_txOut[n].amount));e=e.times(1e8),this.d_maxPaidIndex=this.d_utxoList.length-1,this.d_txOut.splice(t,1,Object(i.a)(Object(i.a)({},this.d_txOut[t]),{},{amount:d()(this.c_utxoTotal.minus(this.c_totalFees.plus(e)).toNumber(),"sat_btc")})),this.d_clickAll=!0},getFeePerSatoshis:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get(t.d_feeUrl);case 2:if(200===(a=e.sent).status){e.next=5;break}return e.abrupt("return");case 5:if(null==a||null===(n=a.data)||void 0===n?void 0:n.fastestFee){e.next=7;break}return e.abrupt("return");case 7:a.data.fastestFee===a.data.halfHourFee&&a.data.halfHourFee--,t.d_feeList=[a.data.fastestFee,a.data.halfHourFee,a.data.hourFee],t.d_fee=t.d_feeList[0],t.d_feeHelpList[t.d_feeList[0]]={text:t.$t("high")},t.d_feeHelpList[t.d_feeList[1]]={text:t.$t("middle")},t.d_feeHelpList[t.d_feeList[2]]={text:t.$t("low")};case 13:case"end":return e.stop()}}),e)})))()},getUtxoList:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,r.a.get("https://api.abckey.com/".concat(t.c_coinInfo.symbol,"/utxo/").concat(t.c_xpub,"?confirme=true"));case 2:200===(n=e.sent).status?t.d_utxoList=n.data:t.$message.error(t.$t("The network breakdown!"));case 4:case"end":return e.stop()}}),e)})))()},checkTxOutRules:function(){for(var t=/^[+]{0,1}[1-9]\d*$|^[+]{0,1}(0\.\d*[1-9])$|^[+]{0,1}([1-9]\d*\.\d*[0-9])$/,e=this.d_txOut.length,n=0;n<e;n++){var a=this.d_txOut[n];if(!t.test(a.amount)||!a.amount)return this.$message.error({message:this.$t("Please enter a valid quantity"),duration:-1}),!1;if(!h.a.test(a.address,"btc","testnet"))return this.$message.error({message:this.$t("Please enter a valid Address"),duration:-1}),!1}return!0},closeBordercast:function(t,e){"auto"===t&&(this.d_snackbar=!0,this.d_transactionHash=e,this.d_txOut=[],this.d_txOut.push({address:"",amount:0})),this.d_bordercastShow=!1},getMaxPaidIndex:function(){for(var t=d()("0"),e=this.d_utxoList.length,n=0;n<e;n++)if((t=t.plus(this.d_utxoList[n].value)).gte(this.c_totalAmounts.plus(this.c_totalFees))){this.d_maxPaidIndex=n;break}},delTxOut:function(t){1!==this.d_txOut.length?this.d_txOut.splice(t,1):this.$message.warning(this.$t("The last one can't be delete!"))},paste:function(t){return Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.readText();case 2:t.address=e.sent;case 3:case"end":return e.stop()}}),e)})))()},addRecipient:function(){this.d_txOut.push({address:"",amount:0})},handleFeeInput:function(t){this.d_fee=t},getAddressN:function(t){var e,n=[],s=t.match(/\/[0-9]+('|H)?/g),i=Object(a.a)(s);try{for(i.s();!(e=i.n()).done;){var o=e.value,r=parseInt(o.match(/[0-9]+/g)[0]);o.match(/('|H)/g)&&(r=(2147483648|r)>>>0),n.push(r)}}catch(t){i.e(t)}finally{i.f()}return n},checkAndSend:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.$store.__s("pageLoading",!0),t.checkTxOutRules()){e.next=4;break}return t.$store.__s("pageLoading",!1),e.abrupt("return");case 4:return e.prev=4,e.next=7,t.signTx();case 7:e.next=13;break;case 9:e.prev=9,e.t0=e.catch(4),t.$message.error({message:t.$t("The transfer is aUnitHelperormal, please check the data before sending."),duration:-1});case 13:t.$store.__s("pageLoading",!1);case 14:case"end":return e.stop()}}),e,null,[[4,9]])})))()},signTx:function(){var t=this;return Object(s.a)(regeneratorRuntime.mark((function e(){var n,a,s,i,o,c,l,u,h,f,p,m,b,x,v,_,g,I,S,y,k;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=[],s=t.d_txOut.length,i=0;i<s;i++)o={},c=t.d_txOut[i],o.amount=d()(c.amount).times(1e8).toNumber(),o.script_type="PAYTOADDRESS",o.address=c.address,a.push(o);l=[],u=d()(0),h=d()(0),f=0;case 7:if(!(f<=t.d_maxPaidIndex)){e.next=23;break}return(p={}).address_n=t.getAddressN(t.d_utxoList[f].path),p.amount=t.d_utxoList[f].value,p.prev_hash=t.d_utxoList[f].txid,p.prev_index=t.d_utxoList[f].vout,p.script_type=t.d_utxoList[f].path.includes("49")?"SPENDP2SHWITNESS":"SPENDADDRESS",e.next=16,r.a.get("https://api.abckey.com/".concat(t.c_coinInfo.symbol,"/tx/").concat(t.d_utxoList[f].txid));case 16:m=e.sent,p.sequence=m.data.vin[0].sequence,u=u.plus(t.d_utxoList[f].value),l.push(p);case 20:f++,e.next=7;break;case 23:return h=u.minus(t.c_totalAmounts.plus(t.c_totalFees)),e.next=26,r.a.get("https://api.abckey.com/".concat(t.c_coinInfo.symbol,"/xpub/").concat(t.c_usb.xpub,"?details=txs&tokens=used&t=").concat((new Date).getTime()));case 26:if(b=e.sent,x=b.data.usedTokens?b.data.usedTokens:"0",(v={address_n:t.getAddressN("m/".concat(t.c_coinProtocol,"'/").concat(t.c_coinInfo.slip44,"'/0'/1/").concat(x)),amount:h.toNumber(),script_type:49===t.c_coinProtocol?"PAYTOP2SHWITNESS":"PAYTOADDRESS"}).amount&&a.push(v),_={coin_name:t.c_coinInfo.name,inputs:l,outputs:a},44!==t.c_coinProtocol){e.next=44;break}t.d_txidList=[],g=0;case 34:if(!(g<=t.d_maxPaidIndex)){e.next=43;break}return e.next=37,r.a.get("https://api.abckey.com/".concat(t.c_coinInfo.symbol,"/tx-specific/").concat(t.d_utxoList[g].txid));case 37:I=e.sent,S=I.data,t.d_txidList.push(t.transferTxid(S));case 40:g++,e.next=34;break;case 43:_.utxo=t.d_txidList;case 44:return e.next=46,t.$usb.signBTC(_);case 46:y=e.sent,(k=null==y||null===(n=y.data)||void 0===n?void 0:n.serialized_tx)?(t.d_signHash=k,t.d_bordercastShow=!0):t.$message.error({message:t.$t("Transaction signature failed!"),duration:-1});case 49:case"end":return e.stop()}}),e)})))()}},watch:{d_txOut:{handler:function(){this.getMaxPaidIndex()},deep:!0}},i18n:{messages:{zhCN:{"The transfer is aUnitHelperormal, please check the data before sending.":"转账异常，请检查数据后再发送","All Balances":"发送所有余额","Transaction signature failed":"签名交易失败","Transaction signature success":"签名交易成功","Please enter a valid Address":"请输入有效的地址","The network breakdown!":"网络异常","Please enter a valid quantity":"请输入有效的金额","The available balance is insufficient for payment!":"可用余额不够支付,可能导致签名失败","The amount or address you entered is invalid!":"你输入的金额或者地址无效","If the payment is too fragmentary, additional 0.0001 currency handling fee will be paid":"过于零碎的支付，额外支付0.0001币种手续费",Address:"接收地址",Amount:"发送金额",Delete:"删除",Paste:"粘贴",Most:"最多","Add recipient":"添加接收者","Check and send":"检查并发送","Are you sure to delete?":"你确定要删除吗?",Yes:"是",No:"否","Invalid address":"地址无效","Invalid amount":"金额无效","Invalid fee":"费率无效","Please input address":"请输入地址","Please input amount":"请输入金额",high:"高",middle:"中",low:"低",Amounts:"发送总额",Fees:"手续费",Total:"合计",Fee:"费率",Review:"核对","Unknown Error!":"未知错误","Transaction Hash":"交易哈希"}}}},p=(n("cfa3"),n("2877")),m=n("6544"),b=n.n(m),x=n("8336"),v=n("b0af"),_=n("cc20"),g=n("62ad"),I=n("2b5d"),S=n("a523"),y=n("132d"),k=n("0fd9"),w=n("8654"),C=n("3a2f"),$=Object(p.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"pa-0 send-wrap",attrs:{fluid:""}},[n("broadcast-dialog",{attrs:{show:t.d_bordercastShow,signHash:t.d_signHash},on:{"close-dialog":t.closeBordercast,"error-broadcast":t.errorBroadcast}}),n("broadcast-success",{attrs:{show:t.d_snackbar,transactionHash:t.d_transactionHash,coinType:t.c_coinInfo.symbol},on:{close:function(e){t.d_snackbar=!1}}}),n("broadcast-error",{attrs:{show:t.d_error,reason:this.d_errorReason},on:{close:function(e){t.d_error=!1}}}),n("v-card",{staticClass:"pa-3"},[n("div",{staticClass:"table"},[n("div",{staticClass:"table-header px-3 app-secondary-bg"},[n("div",{staticClass:"table-c address-c subtitle-2"},[t._v(t._s(t.$t("Address")))]),n("div",{staticClass:"table-c amount-c subtitle-2"},[t._v(t._s(t.$t("Amount")))]),n("div",{staticClass:"table-c action-c subtitle-2"},[t._v(t._s(t.$t("Delete")))])]),n("div",{staticClass:"table-body"},t._l(t.d_txOut,(function(e,a){return n("div",{key:a,staticClass:"table-r px-3"},[n("div",{staticClass:"table-c address-c subtitle-2"},[n("v-text-field",{attrs:{rules:t.d_addressRules,label:t.$t("Address"),hint:t.$t("Please input address")},model:{value:e.address,callback:function(n){t.$set(e,"address",n)},expression:"item.address"}},[n("v-tooltip",{attrs:{slot:"append",top:""},slot:"append",scopedSlots:t._u([{key:"activator",fn:function(a){var s=a.on;return[n("v-icon",t._g({attrs:{color:"primary",size:"16"},on:{click:function(n){return t.paste(e)}}},s),[t._v("mdi-content-paste")])]}}],null,!0)},[n("span",{staticClass:"subtitle-2"},[t._v(t._s(t.$t("Paste")))])])],1)],1),n("div",{staticClass:"table-c amount-c"},[n("v-text-field",{attrs:{rules:t.d_amountRules,label:t.$t("Amount"),hint:t.$t("Please input amount")},on:{input:t.showAllIcon},model:{value:e.amount,callback:function(n){t.$set(e,"amount",n)},expression:"item.amount"}},[n("div",{staticClass:"primary--text",attrs:{slot:"append"},slot:"append"},[t._v(t._s(t.c_coinInfo.symbol.toUpperCase()))])]),t.d_clickAll?t._e():n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[n("v-icon",t._g({staticClass:"ml-4",on:{click:function(e){return t.sendAllBalance(a)}}},s),[t._v("mdi-publish")])]}}],null,!0)},[n("span",[t._v(t._s(t.$t("All Balances")))])])],1),n("div",{staticClass:"table-c action-c"},[n("v-tooltip",{attrs:{top:""},scopedSlots:t._u([{key:"activator",fn:function(e){var s=e.on;return[n("v-icon",t._g({staticClass:"close-icon",attrs:{disabled:t.d_txOut.length<=1},on:{click:function(e){return t.delTxOut(a)}}},s),[t._v("mdi-close")])]}}],null,!0)},[n("span",[t._v(t._s(t.$t("Delete")))])])],1)])})),0)]),n("div",{staticClass:"form"},[n("div",{staticClass:"left"},[n("v-btn",{staticClass:"plus-btn mt-4",attrs:{rounded:"",color:"primary"},on:{click:function(e){return t.addRecipient()}}},[n("v-icon",{attrs:{size:"16"}},[t._v("mdi-plus")]),t._v(" "+t._s(t.$t("Add recipient"))+" ")],1)],1),n("div",{staticClass:"right body-2"},[n("v-chip",{staticClass:"chip body-2",attrs:{outlined:""}},[t._v(t._s(t.$t("Amounts"))+" "+t._s(t.UnitHelper(t.c_totalAmounts,"sat_btc").decimalPlaces(8).toString(10))+" "+t._s(t.c_coinInfo.symbol.toUpperCase()))]),n("v-chip",{staticClass:"chip body-2",attrs:{outlined:""}},[t._v(t._s(t.$t("Fees"))+" "+t._s(t.UnitHelper(t.c_totalFees,"sat_btc").format(8).toString(10))+" "+t._s(t.c_coinInfo.symbol.toUpperCase()))]),n("v-chip",{staticClass:"chip",attrs:{outlined:"",color:"primary"}},[t._v(t._s(t.$t("Total"))+" "+t._s(t.UnitHelper(t.c_total,"sat_btc").format(8).toString(10))+" "+t._s(t.c_coinInfo.symbol.toUpperCase()))])],1)]),n("div",{staticClass:"d-flex flex-row justify-end align-center"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{staticClass:"offset-5",attrs:{cols:"4"}},[n("v-combobox",{attrs:{value:t.d_fee,items:t.d_feeList,label:t.$t("Fee"),dense:"",rules:t.d_feeRule,outlined:""},on:{input:function(e){return t.handleFeeInput(e)}},scopedSlots:t._u([{key:"item",fn:function(e){var a=e.item;return[n("div",{staticClass:"d-flex justify-space-between",staticStyle:{width:"100%"}},[n("span",[t._v(t._s(t.d_feeHelpList[a].text)+":")]),n("span",[t._v(t._s(a)+" Sat/b")])])]}}])},[n("div",{staticClass:"primary--text",attrs:{slot:"append"},slot:"append"},[t._v("Sat/b")])])],1),n("v-col",{staticClass:"text-sm-right pa-0 mt-3",attrs:{cols:"3"}},[n("v-btn",{attrs:{color:"success",rounded:""},on:{click:function(e){return t.checkAndSend()}}},[t._v(t._s(t.$t("Check and send")))])],1)],1)],1)])],1)}),[],!1,null,"4b319caf",null);e.default=$.exports,b()($,{VBtn:x.a,VCard:v.a,VChip:_.a,VCol:g.a,VCombobox:I.a,VContainer:S.a,VIcon:y.a,VRow:k.a,VTextField:w.a,VTooltip:C.a})},2142:function(t,e,n){(e=n("24fb")(!1)).push([t.i,".send-wrap[data-v-4b319caf]{max-width:960px;margin:20px auto}.table[data-v-4b319caf]{margin-bottom:12px;border:1px solid rgba(44,115,210,.6)}.table .table-header[data-v-4b319caf]{text-transform:capitalize}.table .table-r[data-v-4b319caf]{font-size:14px}.table .table-header[data-v-4b319caf],.table .table-r[data-v-4b319caf]{min-height:80px;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;border-bottom:1px solid rgba(0,0,0,.12)}.table .table-header[data-v-4b319caf],.table .table-header .table-c[data-v-4b319caf],.table .table-r[data-v-4b319caf],.table .table-r .table-c[data-v-4b319caf]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.table .table-header .table-c[data-v-4b319caf],.table .table-r .table-c[data-v-4b319caf]{position:relative;padding:0 10px;color:#fff}.table .table-header .table-c.action-c[data-v-4b319caf],.table .table-r .table-c.action-c[data-v-4b319caf]{width:120px;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.table .table-header .table-c.address-c[data-v-4b319caf],.table .table-r .table-c.address-c[data-v-4b319caf]{-webkit-box-flex:3;-ms-flex:3;flex:3}.table .table-header .table-c.amount-c[data-v-4b319caf],.table .table-r .table-c.amount-c[data-v-4b319caf]{-webkit-box-flex:1;-ms-flex:1;flex:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;cursor:pointer}.table .close-icon[data-v-4b319caf]{cursor:pointer}.table .close-icon[data-v-4b319caf]:hover{color:#ef5350}.table .table-r[data-v-4b319caf]:hover{background-color:#e3f2fd}.form[data-v-4b319caf]{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;padding:10px 0}.form[data-v-4b319caf],.form .right[data-v-4b319caf]{display:-webkit-box;display:-ms-flexbox;display:flex}.form .right[data-v-4b319caf]{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;-webkit-box-flex:1;-ms-flex:1;flex:1}.form .right .chip[data-v-4b319caf]{margin-bottom:5px;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;max-width:-webkit-fit-content;max-width:-moz-fit-content;max-width:fit-content}",""]),t.exports=e},2739:function(t,e,n){(e=n("24fb")(!1)).push([t.i,".v-autocomplete.v-input>.v-input__control>.v-input__slot{cursor:text}.v-autocomplete input{-ms-flex-item-align:center;align-self:center}.v-autocomplete.v-select.v-input--is-focused input{min-width:64px}.v-autocomplete:not(.v-input--is-focused).v-select--chips input{max-height:0;padding:0}.v-autocomplete--is-selecting-index input{opacity:0}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined) .v-select__slot>input{margin-top:24px}.v-autocomplete.v-text-field--enclosed:not(.v-text-field--solo):not(.v-text-field--single-line):not(.v-text-field--outlined).v-input--dense .v-select__slot>input{margin-top:20px}.v-autocomplete:not(.v-input--is-disabled).v-select.v-text-field input{pointer-events:inherit}.v-autocomplete__content.v-menu__content,.v-autocomplete__content.v-menu__content .v-card{border-radius:0}",""]),t.exports=e},"2b5d":function(t,e,n){"use strict";n("7db0"),n("c975"),n("fb6a"),n("a434"),n("b0c0"),n("d3b7"),n("25f0"),n("8a79");var a=n("5530"),s=(n("2bfd"),n("b974")),i=(n("4de4"),n("d81d"),n("45fc"),n("498a"),n("8654")),o=n("d9f7"),r=n("80d2"),c=Object(a.a)(Object(a.a)({},s.b),{},{offsetY:!0,offsetOverflow:!0,transition:!1}),l=s.a.extend({name:"v-autocomplete",props:{allowOverflow:{type:Boolean,default:!0},autoSelectFirst:{type:Boolean,default:!1},filter:{type:Function,default:function(t,e,n){return n.toLocaleLowerCase().indexOf(e.toLocaleLowerCase())>-1}},hideNoData:Boolean,menuProps:{type:s.a.options.props.menuProps.type,default:function(){return c}},noFilter:Boolean,searchInput:{type:String,default:void 0}},data:function(){return{lazySearch:this.searchInput}},computed:{classes:function(){return Object(a.a)(Object(a.a)({},s.a.options.computed.classes.call(this)),{},{"v-autocomplete":!0,"v-autocomplete--is-selecting-index":this.selectedIndex>-1})},computedItems:function(){return this.filteredItems},selectedValues:function(){var t=this;return this.selectedItems.map((function(e){return t.getValue(e)}))},hasDisplayedItems:function(){var t=this;return this.hideSelected?this.filteredItems.some((function(e){return!t.hasItem(e)})):this.filteredItems.length>0},currentRange:function(){return null==this.selectedItem?0:String(this.getText(this.selectedItem)).length},filteredItems:function(){var t=this;return!this.isSearching||this.noFilter||null==this.internalSearch?this.allItems:this.allItems.filter((function(e){var n=Object(r.m)(e,t.itemText,void 0),a=null!=n?String(n):"";return t.filter(e,String(t.internalSearch),a)}))},internalSearch:{get:function(){return this.lazySearch},set:function(t){this.lazySearch=t,this.$emit("update:search-input",t)}},isAnyValueAllowed:function(){return!1},isDirty:function(){return this.searchIsDirty||this.selectedItems.length>0},isSearching:function(){return this.multiple&&this.searchIsDirty||this.searchIsDirty&&this.internalSearch!==this.getText(this.selectedItem)},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!this.hideNoData)},$_menuProps:function(){var t=s.a.options.computed.$_menuProps.call(this);return t.contentClass="v-autocomplete__content ".concat(t.contentClass||"").trim(),Object(a.a)(Object(a.a)({},c),t)},searchIsDirty:function(){return null!=this.internalSearch&&""!==this.internalSearch},selectedItem:function(){var t=this;return this.multiple?null:this.selectedItems.find((function(e){return t.valueComparator(t.getValue(e),t.getValue(t.internalValue))}))},listData:function(){var t=s.a.options.computed.listData.call(this);return t.props=Object(a.a)(Object(a.a)({},t.props),{},{items:this.virtualizedItems,noFilter:this.noFilter||!this.isSearching||!this.filteredItems.length,searchInput:this.internalSearch}),t}},watch:{filteredItems:"onFilteredItemsChanged",internalValue:"setSearch",isFocused:function(t){t?(document.addEventListener("copy",this.onCopy),this.$refs.input&&this.$refs.input.select()):(document.removeEventListener("copy",this.onCopy),this.updateSelf())},isMenuActive:function(t){!t&&this.hasSlot&&(this.lazySearch=void 0)},items:function(t,e){e&&e.length||!this.hideNoData||!this.isFocused||this.isMenuActive||!t.length||this.activateMenu()},searchInput:function(t){this.lazySearch=t},internalSearch:"onInternalSearchChanged",itemText:"updateSelf"},created:function(){this.setSearch()},methods:{onFilteredItemsChanged:function(t,e){var n=this;t!==e&&(this.setMenuIndex(-1),this.$nextTick((function(){n.internalSearch&&(1===t.length||n.autoSelectFirst)&&(n.$refs.menu.getTiles(),n.setMenuIndex(0))})))},onInternalSearchChanged:function(){this.updateMenuDimensions()},updateMenuDimensions:function(){this.isMenuActive&&this.$refs.menu&&this.$refs.menu.updateDimensions()},changeSelectedIndex:function(t){this.searchIsDirty||(this.multiple&&t===r.r.left?-1===this.selectedIndex?this.selectedIndex=this.selectedItems.length-1:this.selectedIndex--:this.multiple&&t===r.r.right?this.selectedIndex>=this.selectedItems.length-1?this.selectedIndex=-1:this.selectedIndex++:t!==r.r.backspace&&t!==r.r.delete||this.deleteCurrentItem())},deleteCurrentItem:function(){if(!this.readonly){var t=this.selectedItems.length-1;if(-1!==this.selectedIndex||0===t){var e=this.selectedItems[this.selectedIndex];if(!this.getDisabled(e)){var n=this.selectedIndex===t?this.selectedIndex-1:this.selectedItems[this.selectedIndex+1]?this.selectedIndex:-1;-1===n?this.setValue(this.multiple?[]:void 0):this.selectItem(e),this.selectedIndex=n}}else this.selectedIndex=t}},clearableCallback:function(){this.internalSearch=void 0,s.a.options.methods.clearableCallback.call(this)},genInput:function(){var t=i.a.options.methods.genInput.call(this);return t.data=Object(o.a)(t.data,{attrs:{"aria-activedescendant":Object(r.l)(this.$refs.menu,"activeTile.id"),autocomplete:Object(r.l)(t.data,"attrs.autocomplete","off")},domProps:{value:this.internalSearch}}),t},genInputSlot:function(){var t=s.a.options.methods.genInputSlot.call(this);return t.data.attrs.role="combobox",t},genSelections:function(){return this.hasSlot||this.multiple?s.a.options.methods.genSelections.call(this):[]},onClick:function(t){this.isDisabled||(this.selectedIndex>-1?this.selectedIndex=-1:this.onFocus(),this.isAppendInner(t.target)||this.activateMenu())},onInput:function(t){if(!(this.selectedIndex>-1)&&t.target){var e=t.target,n=e.value;e.value&&this.activateMenu(),this.internalSearch=n,this.badInput=e.validity&&e.validity.badInput}},onKeyDown:function(t){var e=t.keyCode;s.a.options.methods.onKeyDown.call(this,t),this.changeSelectedIndex(e)},onSpaceDown:function(t){},onTabDown:function(t){s.a.options.methods.onTabDown.call(this,t),this.updateSelf()},onUpDown:function(t){t.preventDefault(),this.activateMenu()},selectItem:function(t){s.a.options.methods.selectItem.call(this,t),this.setSearch()},setSelectedItems:function(){s.a.options.methods.setSelectedItems.call(this),this.isFocused||this.setSearch()},setSearch:function(){var t=this;this.$nextTick((function(){t.multiple&&t.internalSearch&&t.isMenuActive||(t.internalSearch=!t.selectedItems.length||t.multiple||t.hasSlot?null:t.getText(t.selectedItem))}))},updateSelf:function(){(this.searchIsDirty||this.internalValue)&&(this.valueComparator(this.internalSearch,this.getValue(this.internalValue))||this.setSearch())},hasItem:function(t){return this.selectedValues.indexOf(this.getValue(t))>-1},onCopy:function(t){if(-1!==this.selectedIndex){var e=this.selectedItems[this.selectedIndex],n=this.getText(e);t.clipboardData.setData("text/plain",n),t.clipboardData.setData("text/vnd.vuetify.autocomplete.item+plain",n),t.preventDefault()}}}});e.a=l.extend({name:"v-combobox",props:{delimiters:{type:Array,default:function(){return[]}},returnObject:{type:Boolean,default:!0}},data:function(){return{editingIndex:-1}},computed:{computedCounterValue:function(){return this.multiple?this.selectedItems.length:(this.internalSearch||"").toString().length},hasSlot:function(){return s.a.options.computed.hasSlot.call(this)||this.multiple},isAnyValueAllowed:function(){return!0},menuCanShow:function(){return!!this.isFocused&&(this.hasDisplayedItems||!!this.$slots["no-data"]&&!this.hideNoData)}},methods:{onInternalSearchChanged:function(t){if(t&&this.multiple&&this.delimiters.length){var e=this.delimiters.find((function(e){return t.endsWith(e)}));null!=e&&(this.internalSearch=t.slice(0,t.length-e.length),this.updateTags())}this.updateMenuDimensions()},genInput:function(){var t=l.options.methods.genInput.call(this);return delete t.data.attrs.name,t.data.on.paste=this.onPaste,t},genChipSelection:function(t,e){var n=this,i=s.a.options.methods.genChipSelection.call(this,t,e);return this.multiple&&(i.componentOptions.listeners=Object(a.a)(Object(a.a)({},i.componentOptions.listeners),{},{dblclick:function(){n.editingIndex=e,n.internalSearch=n.getText(t),n.selectedIndex=-1}})),i},onChipInput:function(t){s.a.options.methods.onChipInput.call(this,t),this.editingIndex=-1},onEnterDown:function(t){t.preventDefault(),this.getMenuIndex()>-1||this.$nextTick(this.updateSelf)},onFilteredItemsChanged:function(t,e){this.autoSelectFirst&&l.options.methods.onFilteredItemsChanged.call(this,t,e)},onKeyDown:function(t){var e=t.keyCode;s.a.options.methods.onKeyDown.call(this,t),this.multiple&&e===r.r.left&&0===this.$refs.input.selectionStart?this.updateSelf():e===r.r.enter&&this.onEnterDown(t),this.changeSelectedIndex(e)},onTabDown:function(t){if(this.multiple&&this.internalSearch&&-1===this.getMenuIndex())return t.preventDefault(),t.stopPropagation(),this.updateTags();l.options.methods.onTabDown.call(this,t)},selectItem:function(t){this.editingIndex>-1?this.updateEditing():l.options.methods.selectItem.call(this,t)},setSelectedItems:function(){null==this.internalValue||""===this.internalValue?this.selectedItems=[]:this.selectedItems=this.multiple?this.internalValue:[this.internalValue]},setValue:function(t){s.a.options.methods.setValue.call(this,null!=t?t:this.internalSearch)},updateEditing:function(){var t=this.internalValue.slice();t[this.editingIndex]=this.internalSearch,this.setValue(t),this.editingIndex=-1},updateCombobox:function(){var t=Boolean(this.$scopedSlots.selection)||this.hasChips;t&&!this.searchIsDirty||(this.internalSearch!==this.getText(this.internalValue)&&this.setValue(),t&&(this.internalSearch=void 0))},updateSelf:function(){this.multiple?this.updateTags():this.updateCombobox()},updateTags:function(){var t=this.getMenuIndex();if(!(t<0)||this.searchIsDirty){if(this.editingIndex>-1)return this.updateEditing();var e=this.selectedItems.indexOf(this.internalSearch);if(e>-1){var n=this.internalValue.slice();n.splice(e,1),this.setValue(n)}if(t>-1)return this.internalSearch=null;this.selectItem(this.internalSearch),this.internalSearch=null}},onPaste:function(t){if(this.multiple&&!this.searchIsDirty){var e=t.clipboardData.getData("text/vnd.vuetify.autocomplete.item+plain");e&&-1===this.findExistingIndex(e)&&(t.preventDefault(),s.a.options.methods.selectItem.call(this,e))}}}})},"2bfd":function(t,e,n){var a=n("2739");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,n("499e").default)("45ef5b0a",a,!0,{sourceMap:!1,shadowMode:!1})},"8a79":function(t,e,n){"use strict";var a=n("23e7"),s=n("06cf").f,i=n("50c4"),o=n("5a34"),r=n("1d80"),c=n("ab13"),l=n("c430"),d="".endsWith,u=Math.min,h=c("endsWith");a({target:"String",proto:!0,forced:!(!l&&!h&&!!function(){var t=s(String.prototype,"endsWith");return t&&!t.writable}())&&!h},{endsWith:function(t){var e=String(r(this));o(t);var n=arguments.length>1?arguments[1]:void 0,a=i(e.length),s=void 0===n?a:u(i(n),a),c=String(t);return d?d.call(e,c,s):e.slice(s-c.length,s)===c}})},"8db0":function(t,e,n){var a=n("2142");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals),(0,n("499e").default)("bdbe4760",a,!0,{sourceMap:!1,shadowMode:!1})},cfa3:function(t,e,n){"use strict";var a=n("8db0");n.n(a).a}}]);