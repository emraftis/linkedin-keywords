(function(e){function t(t){for(var r,c,o=t[0],u=t[1],s=t[2],d=0,g=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&g.push(i[c][0]),i[c]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(g.length)g.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==i[u]&&(r=!1)}r&&(a.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},i={app:0},a=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],u=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=u;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d5e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function i(e,t,n,i,a,c){var o=Object(r["m"])("main-page");return Object(r["i"])(),Object(r["c"])(o)}Object(r["k"])("data-v-5ff38ffc");var a={class:"inputs"},c=Object(r["f"])("label",{for:"countryName"},"Country:",-1),o=["value"],u=Object(r["f"])("br",null,null,-1),s={key:0},l=Object(r["f"])("label",{for:"industryName"},"Industry:",-1),d=["value"],g=Object(r["f"])("br",null,null,-1),y={key:0,class:"top-skills"},p={key:0},f={class:"list-container"},b={key:0},m={key:1,class:"growth-rate"},h={class:"chart-container"};function O(e,t,n,i,O,j){var S=Object(r["m"])("area-chart");return Object(r["i"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",a,[c,Object(r["p"])(Object(r["f"])("select",{name:"countryName",id:"countryName","onUpdate:modelValue":t[0]||(t[0]=function(e){return O.selectedCountryName=e}),onBlur:t[1]||(t[1]=function(e){return j.getIndustryGrowth(O.selectedCountryName,O.selectedIndustryName)})},[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(O.countryNames,(function(e){return Object(r["i"])(),Object(r["e"])("option",{key:e,value:e},Object(r["n"])(e),9,o)})),128))],544),[[r["o"],O.selectedCountryName]]),u,O.selectedCountryName?(Object(r["i"])(),Object(r["e"])("div",s,[l,Object(r["p"])(Object(r["f"])("select",{name:"industryName",id:"industryName","onUpdate:modelValue":t[2]||(t[2]=function(e){return O.selectedIndustryName=e}),onBlur:t[3]||(t[3]=function(e){return j.getIndustrySkills(O.selectedIndustryName)})},[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(O.industryNames,(function(e){return Object(r["i"])(),Object(r["e"])("option",{key:e,value:e},Object(r["n"])(e),9,d)})),128))],544),[[r["o"],O.selectedIndustryName]])])):Object(r["d"])("",!0),g,Object(r["f"])("button",{onClick:t[4]||(t[4]=function(e){return j.getIndustrySkills(O.selectedIndustryName)})},"Search")]),j.shouldDisplay?(Object(r["i"])(),Object(r["e"])("div",y,[O.topSkills.length>0?(Object(r["i"])(),Object(r["e"])("h3",p,Object(r["n"])(O.industryHeadingString),1)):Object(r["d"])("",!0),Object(r["f"])("div",f,[O.topSkills.length>0?(Object(r["i"])(),Object(r["e"])("ul",b,[(Object(r["i"])(!0),Object(r["e"])(r["a"],null,Object(r["l"])(O.topSkills,(function(e){return Object(r["i"])(),Object(r["e"])("li",{key:e},Object(r["n"])(e),1)})),128))])):Object(r["d"])("",!0)])])):Object(r["d"])("",!0),j.shouldDisplay?(Object(r["i"])(),Object(r["e"])("div",m,[Object(r["f"])("h3",null,Object(r["n"])(O.growthHeadingString),1),Object(r["f"])("div",h,[Object(r["g"])(S,{width:"100%",suffix:"%",xtitle:"Year",ytitle:"%",data:{2015:O.industryGrowth[0].rate,2016:O.industryGrowth[1].rate,2017:O.industryGrowth[2].rate,2018:O.industryGrowth[3].rate,2019:O.industryGrowth[4].rate}},null,8,["data"])])])):Object(r["d"])("",!0)],64)}Object(r["j"])();var j=n("1da1"),S=(n("96cf"),n("caad"),n("2532"),n("ac1f"),n("5319"),n("d3b7"),n("25f0"),n("99af"),n("bc3a")),v={name:"IndustrySkillsComponent",components:{},data:function(){return{industryNames:["Mining & Metals","Oil & Energy","Pharmaceuticals","Food Production","Aviation & Aerospace","Automotive","Chemicals","Machinery","Textiles","Paper & Forest Products","Printing","Electrical & Electronic Manufacturing","Plastics","Renewables & Environment","Packaging & Containers","Industrial Automation","Computer Hardware","Computer Software","Computer Networking","Internet","Semiconductors","Telecommunications","Motion Pictures & Film","Broadcast Media","Newspapers","Publishing","Information Technology & Services","Writing & Editing","Computer Games","Online Media","Computer & Network Security","Media Production","Banking","Insurance","Financial Services","Investment Banking","Investment Management","Venture Capital & Private Equity","Law Practice","Legal Services","Management Consulting","Biotechnology","Veterinary","Accounting","Architecture & Planning","Research","Executive Office","Marketing & Advertising","Information Services","Environmental Services","Market Research","Public Relations & Communications","Design","Professional Training & Coaching","Translation & Localization","Events Services","Outsourcing/Offshoring","Mechanical Or Industrial Engineering","Photography","Graphic Design","Entertainment","Gambling & Casinos","Sports","Museums & Institutions","Fine Art","Performing Arts","Arts & Crafts","Music","Health, Wellness & Fitness","Animation"],countryNames:["Canada","United States","Australia","Brazil","Switzerland","Costa Rica","Cuba","Germany","Denmark","Spain","France","United Kingdom","Georgia","Greece","Hong Kong SAR, China","Ireland","Italy","Japan","Korea, Rep.","Lebanon","Mexico","Malaysia","New Zealand","Philippines","Puerto Rico","Portugal","Singapore","Thailand","Vietnam","South Africa"],selectedIndustryName:"",selectedCountryName:"",industryAPIString:"",countryAPIString:"",industryHeadingString:"",growthHeadingString:"",topSkills:[],industryGrowth:[],isLoading:!1}},computed:{shouldDisplay:function(){return!this.isLoading&&0!==this.topSkills.length}},methods:{getIndustrySkills:function(e){var t=this;return Object(j["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.isLoading=!0,t.selectedIndustryName=e,e.includes(" & ")?t.industryAPIString=e.replace(" & ","%20%26%20"):e.includes(" ")?t.industryAPIString=e.replace(" ","%20"):t.industryAPIString=e,t.industryAPIString&&t.countryAPIString&&t.getIndustryGrowth(t.countryAPIString,t.industryAPIString),n.prev=4,n.next=7,S.get("api/top-skills?ind=".concat(t.industryAPIString));case 7:return r=n.sent,i=r.data,t.topSkills=i,t.industryHeadingString="Top Skill Groups for "+t.selectedIndustryName+":",t.isLoading=!1,n.abrupt("return");case 15:return n.prev=15,n.t0=n["catch"](4),console.log(n.t0),n.abrupt("return",n.t0);case 19:case"end":return n.stop()}}),n,null,[[4,15]])})))()},getIndustryGrowth:function(e,t){var n=this;return Object(j["a"])(regeneratorRuntime.mark((function r(){var i,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(n.isLoading=!0,e&&null!==t){r.next=4;break}return n.isLoading=!1,r.abrupt("return");case 4:return n.selectedCountryName=e,n.countryAPIString=e.toString(),n.countryAPIString.includes(",")&&(n.countryAPIString=t.replace(",","%2C"),n.countryAPIString.includes(" ")&&(n.countryAPIString=n.countryAPIString.replace(" ","%20"),n.countryAPIString.includes(".")&&(n.countryAPIString=n.countryAPIString.replace(".","%2E"),n.countryAPIString.includes("'")&&(n.countryAPIString=n.countryAPIString.replace("'","%27"))))),n.countryAPIString=e,r.prev=8,r.next=11,S.get("api/ind-growth?industry=".concat(n.industryAPIString,"&country=").concat(n.countryAPIString));case 11:return i=r.sent,a=i.data,a||(n.industryGrowth=null),a&&(n.industryGrowth=[{year:2015,rate:a.growth_rate_2015},{year:2016,rate:a.growth_rate_2016},{year:2017,rate:a.growth_rate_2017},{year:2018,rate:a.growth_rate_2018},{year:2019,rate:a.growth_rate_2019}]),n.growthHeadingString="Growth for "+n.selectedIndustryName+" in "+n.selectedCountryName,n.isLoading=!1,r.abrupt("return");case 20:return r.prev=20,r.t0=r["catch"](8),console.log(r.t0),r.abrupt("return",r.t0);case 24:case"end":return r.stop()}}),r,null,[[8,20]])})))()}}};n("ec88");v.render=O,v.__scopeId="data-v-5ff38ffc";var I=v,P={name:"App",components:{MainPage:I}};n("7cfb");P.render=i;var w=P,A=n("d842"),k=(n("3c0b"),Object(r["b"])(w));k.use(A["a"]),k.mount("#app")},"7cfb":function(e,t,n){"use strict";n("1d5e")},"915c":function(e,t,n){},ec88:function(e,t,n){"use strict";n("915c")}});
//# sourceMappingURL=app.aaf151a7.js.map