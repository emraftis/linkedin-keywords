(function(e){function t(t){for(var r,o,s=t[0],c=t[1],l=t[2],d=0,g=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&g.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(t);while(g.length)g.shift()();return a.push.apply(a,l||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d5e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function i(e,t,n,i,a,o){var s=Object(r["n"])("main-page");return Object(r["j"])(),Object(r["c"])(s)}Object(r["l"])("data-v-0c94d32b");var a={class:"inputs"},o=Object(r["f"])("div",null,[Object(r["f"])("p",null,'Please enter your Country and an Industry to see data from, "World Bank LinkedIn Digital Data for Development" by World Bank Group & LinkedIn Corporation')],-1),s=Object(r["f"])("label",{for:"industryName"},"Industry:",-1),c=["value"],l=Object(r["f"])("br",null,null,-1),u={key:0,for:"countryName"},d=["value"],g={key:0,class:"top-skills"},y={key:0},h=Object(r["f"])("div",{class:"list-container"},[Object(r["f"])("p",null,"The Industry Skills Needs metric captures which skills are most likely to be added to a member's profile in one industry compared to other industries. It's calculated using an adapted version of a text mining technique called Term Frequency - Inverse Document Frequency (TF-IDF). This method gives more weight to a skill for an industry if more members in the industry list the skill on their profiles and the skill is more unique to the industry. The skills included are those added while a member holds a particular occupation (the skill flow approach). While the skill flow approach creates a trade-off whereby long-held basic skills, such as Microsoft Office being given a lesser weight, the approach is shown to be stronger at identifying the latest emerging skills in a specific industry than including all historical skills that are added during prior occupations. On balance, since the objective of this metric is to detect the latest skills needs, a skill flow approach is adopted.")],-1),p={class:"list-container"},b={key:0},f={key:1,class:"growth-rate"},m=Object(r["f"])("div",{class:"list-container"},[Object(r["f"])("p",null,"The Growth from Industry Transitions metric looks at how LinkedIn members are moving across industries (based on net transition: in minus out). For example, if a net of 50 members joined a Biotech industry with 1,000 members in a particular country after leaving jobs in other industries, that Biotech industry would have grown by 5% due to transitions in that year. We calculate these rates across all industries on an annual basis, and report an average of the last three years. The metric above is built entirely on a sample of LinkedIn members that have a company registered on LinkedIn on their profile. Since white-collar workers in knowledge-intensive services sectors are more likely to be on LinkedIn, the growth rate above may not accurately represent sectors like manufacturing and mining that tend to have more blue-collar workers.")],-1),j={key:0,class:"chart-container"},O={key:1},v=Object(r["f"])("h4",null,"No Data Available",-1),k=[v],I=Object(r["f"])("footer",{class:"footer-container"},[Object(r["f"])("caption",{class:"caption-text"},[Object(r["g"])("All data is sourced from "),Object(r["f"])("a",{href:"https://documents1.worldbank.org/curated/en/827991542143093021/pdf/World-Bank-Group-LinkedIn-Data-Insights-Jobs-Skills-and-Migration-Trends-Methodology-and-Validation-Results.pdf"},'"World Bank LinkedIn Digital Data for Development"'),Object(r["g"])(" by World Bank Group & LinkedIn Corporation, licensed under CC BY 3.0.")])],-1);function S(e,t,n,i,v,S){var w=Object(r["n"])("area-chart");return Object(r["j"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",a,[o,Object(r["f"])("div",null,[s,Object(r["q"])(Object(r["f"])("select",{name:"industryName",id:"industryName","onUpdate:modelValue":t[0]||(t[0]=function(e){return v.selectedIndustryName=e}),onChange:t[1]||(t[1]=function(e){return S.getIndustrySkills(v.selectedIndustryName)})},[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["m"])(v.industryNames,(function(e){return Object(r["j"])(),Object(r["e"])("option",{key:e,value:e},Object(r["o"])(e),9,c)})),128))],544),[[r["p"],v.selectedIndustryName]])]),l,v.selectedIndustryName?(Object(r["j"])(),Object(r["e"])("label",u,"Country:")):Object(r["d"])("",!0),Object(r["q"])(Object(r["f"])("select",{name:"countryName",id:"countryName","onUpdate:modelValue":t[2]||(t[2]=function(e){return v.selectedCountryName=e}),onChange:t[3]||(t[3]=function(e){return S.getIndustryGrowth(v.selectedCountryName,v.selectedIndustryName)})},[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["m"])(v.countryNames,(function(e){return Object(r["j"])(),Object(r["e"])("option",{key:e,value:e},Object(r["o"])(e),9,d)})),128))],544),[[r["p"],v.selectedCountryName]])]),S.shouldDisplay?(Object(r["j"])(),Object(r["e"])("div",g,[v.topSkills.length>0?(Object(r["j"])(),Object(r["e"])("h3",y,Object(r["o"])(v.industryHeadingString),1)):Object(r["d"])("",!0),h,Object(r["f"])("div",p,[v.topSkills.length>0?(Object(r["j"])(),Object(r["e"])("ul",b,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["m"])(v.topSkills,(function(e){return Object(r["j"])(),Object(r["e"])("li",{key:e},Object(r["o"])(e),1)})),128))])):Object(r["d"])("",!0)])])):Object(r["d"])("",!0),""!=v.selectedCountryName&&S.shouldDisplay?(Object(r["j"])(),Object(r["e"])("div",f,[Object(r["f"])("h3",null,Object(r["o"])(v.growthHeadingString),1),m,v.industryGrowth?(Object(r["j"])(),Object(r["e"])("div",j,[Object(r["h"])(w,{width:"100%",suffix:"%",xtitle:"Year",ytitle:"%",data:{2015:v.industryGrowth[0].rate,2016:v.industryGrowth[1].rate,2017:v.industryGrowth[2].rate,2018:v.industryGrowth[3].rate,2019:v.industryGrowth[4].rate}},null,8,["data"])])):(Object(r["j"])(),Object(r["e"])("div",O,k))])):Object(r["d"])("",!0),I],64)}Object(r["k"])();var w=n("1da1"),P=(n("96cf"),n("d3b7"),n("25f0"),n("caad"),n("2532"),n("ac1f"),n("5319"),n("99af"),n("bc3a")),A={name:"IndustrySkillsComponent",data:function(){return{industryNames:["Mining & Metals","Oil & Energy","Pharmaceuticals","Food Production","Aviation & Aerospace","Automotive","Chemicals","Machinery","Textiles","Paper & Forest Products","Printing","Electrical & Electronic Manufacturing","Plastics","Renewables & Environment","Packaging & Containers","Industrial Automation","Computer Hardware","Computer Software","Computer Networking","Internet","Semiconductors","Telecommunications","Motion Pictures & Film","Broadcast Media","Newspapers","Publishing","Information Technology & Services","Writing & Editing","Computer Games","Online Media","Computer & Network Security","Media Production","Banking","Insurance","Financial Services","Investment Banking","Investment Management","Venture Capital & Private Equity","Law Practice","Legal Services","Management Consulting","Biotechnology","Veterinary","Accounting","Architecture & Planning","Research","Executive Office","Marketing & Advertising","Information Services","Environmental Services","Market Research","Public Relations & Communications","Design","Professional Training & Coaching","Translation & Localization","Events Services","Outsourcing/Offshoring","Mechanical Or Industrial Engineering","Photography","Graphic Design","Entertainment","Gambling & Casinos","Sports","Museums & Institutions","Fine Art","Performing Arts","Arts & Crafts","Music","Health, Wellness & Fitness","Animation"],countryNames:["Australia","Brazil","Canada","Costa Rica","Denmark","France","Georgia","Germany","Greece","Hong Kong SAR, China","Ireland","Italy","Japan","Korea, Rep.","Lebanon","Mexico","Malaysia","New Zealand","United Kingdom","Philippines","Puerto Rico","Portugal","Singapore","South Africa","Spain","Switzerland","Thailand","United States","Vietnam"],selectedIndustryName:"",selectedCountryName:"",industryAPIString:"",countryAPIString:"",industryHeadingString:"",growthHeadingString:"",topSkills:[],industryGrowth:[0,0,0,0,0],isLoading:!1}},computed:{shouldDisplay:function(){return!this.isLoading&&0!==this.topSkills.length}},methods:{getIndustrySkills:function(e){var t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.isLoading=!0,t.selectedIndustryName=e,t.industryAPIString=e.toString(),t.industryAPIString.includes(" & ")&&(t.industryAPIString=t.industryAPIString.replace(" & ","%20%26%20"),t.industryAPIString.includes(" ")&&(t.industryAPIString=t.industryAPIString.replace(" ","%20"))),t.industryAPIString=e,n.prev=5,t.getIndustryGrowth(t.countryAPIString,t.industryAPIString),n.next=9,P.get("api/top-skills?ind=".concat(t.industryAPIString));case 9:return r=n.sent,i=r.data,t.topSkills=i,t.industryHeadingString="Top Skill Groups for "+t.selectedIndustryName+":",t.isLoading=!1,n.abrupt("return");case 17:return n.prev=17,n.t0=n["catch"](5),console.log(n.t0),n.abrupt("return",n.t0);case 21:case"end":return n.stop()}}),n,null,[[5,17]])})))()},getIndustryGrowth:function(){var e=arguments,t=this;return Object(w["a"])(regeneratorRuntime.mark((function n(){var r,i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.length>0&&void 0!==e[0]?e[0]:"Canada",i=e.length>1?e[1]:void 0,t.isLoading=!0,t.selectedCountryName=r,t.countryAPIString=r.toString(),t.countryAPIString.includes(",")&&(t.countryAPIString=i.replace(",","%2C"),t.countryAPIString.includes(" ")&&(t.countryAPIString=t.countryAPIString.replace(" ","%20"),t.countryAPIString.includes(".")&&(t.countryAPIString=t.countryAPIString.replace(".","%2E"),t.countryAPIString.includes("'")&&(t.countryAPIString=t.countryAPIString.replace("'","%27"))))),t.countryAPIString=r,n.prev=7,n.next=10,P.get("api/ind-growth?industry=".concat(t.industryAPIString,"&country=").concat(t.countryAPIString));case 10:return a=n.sent,o=a.data,o||(t.industryGrowth=null),o&&(t.industryGrowth=[{year:2015,rate:o.growth_rate_2015},{year:2016,rate:o.growth_rate_2016},{year:2017,rate:o.growth_rate_2017},{year:2018,rate:o.growth_rate_2018},{year:2019,rate:o.growth_rate_2019}]),t.growthHeadingString="Growth from Transitions to "+t.selectedIndustryName+" in "+t.selectedCountryName,t.isLoading=!1,n.abrupt("return");case 19:return n.prev=19,n.t0=n["catch"](7),console.log(n.t0),n.abrupt("return",n.t0);case 23:case"end":return n.stop()}}),n,null,[[7,19]])})))()}}};n("5999");A.render=S,A.__scopeId="data-v-0c94d32b";var C=A,N={name:"App",components:{MainPage:C}};n("7cfb");N.render=i;var M=N,G=n("d842"),L=(n("3c0b"),Object(r["b"])(M));L.use(G["a"]),L.mount("#app")},5999:function(e,t,n){"use strict";n("6e8f")},"6e8f":function(e,t,n){},"7cfb":function(e,t,n){"use strict";n("1d5e")}});
//# sourceMappingURL=app.b2eb7075.js.map