(function(e){function t(t){for(var r,o,s=t[0],c=t[1],u=t[2],d=0,g=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&g.push(i[o][0]),i[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(g.length)g.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,s=1;s<n.length;s++){var c=n[s];0!==i[c]&&(r=!1)}r&&(a.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},i={app:0},a=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var l=c;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1d5e":function(e,t,n){},"46cf":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23");function i(e,t,n,i,a,o){var s=Object(r["n"])("main-page");return Object(r["j"])(),Object(r["c"])(s)}Object(r["l"])("data-v-5dccbf11");var a={class:"inputs"},o=Object(r["f"])("label",{for:"countryName"},"Country:",-1),s=["value"],c=Object(r["f"])("br",null,null,-1),u=Object(r["f"])("label",{for:"industryName"},"Industry:",-1),l=["value"],d={key:0,class:"top-skills"},g={key:0},h=Object(r["f"])("div",{class:"list-container"},[Object(r["f"])("p",null,"The Industry Skills Needs metric captures which skills are most likely to be added to a member's profile in one industry compared to other industries. It's calculated using an adapted version of a text mining technique called Term Frequency - Inverse Document Frequency (TF-IDF). This method gives more weight to a skill for an industry if more members in the industry list the skill on their profiles and the skill is more unique to the industry. The skills included are those added while a member holds a particular occupation (the skill flow approach). While the skill flow approach creates a trade-off whereby long-held basic skills, such as Microsoft Office being given a lesser weight, the approach is shown to be stronger at identifying the latest emerging skills in a specific industry than including all historical skills that are added during prior occupations. On balance, since the objective of this metric is to detect the latest skills needs, a skill flow approach is adopted.")],-1),p={class:"list-container"},y={key:0},b={key:1,class:"growth-rate"},f=Object(r["f"])("div",{class:"list-container"},[Object(r["f"])("p",null,"The Growth from Industry Transitions metric looks at how LinkedIn members are moving across industries (based on net transition: in minus out). For example, if a net of 50 members joined a Biotech industry with 1,000 members in a particular country after leaving jobs in other industries, that Biotech industry would have grown by 5% due to transitions in that year. We calculate these rates across all industries on an annual basis, and report an average of the last three years. The metric above is built entirely on a sample of LinkedIn members that have a company registered on LinkedIn on their profile. Since white-collar workers in knowledge-intensive services sectors are more likely to be on LinkedIn, the growth rate above may not accurately represent sectors like manufacturing and mining that tend to have more blue-collar workers.")],-1),m={key:0,class:"chart-container"},j={key:1,class:"list-container"},O=Object(r["f"])("caption",{class:"caption-text"},[Object(r["f"])("a",{href:"https://documents1.worldbank.org/curated/en/827991542143093021/pdf/World-Bank-Group-LinkedIn-Data-Insights-Jobs-Skills-and-Migration-Trends-Methodology-and-Validation-Results.pdf"},'"World Bank LinkedIn Digital Data for Development"'),Object(r["g"])(" by World Bank Group & LinkedIn Corporation, licensed under CC BY 3.0.")],-1),v=[O],k={key:2},w=Object(r["f"])("h4",null,"No Data Available",-1),S=[w];function I(e,t,n,i,O,w){var I=Object(r["n"])("area-chart");return Object(r["j"])(),Object(r["e"])(r["a"],null,[Object(r["f"])("div",a,[o,Object(r["q"])(Object(r["f"])("select",{name:"countryName",id:"countryName","onUpdate:modelValue":t[0]||(t[0]=function(e){return O.selectedCountryName=e}),onChange:t[1]||(t[1]=function(e){return w.getIndustryGrowth(O.selectedCountryName,O.selectedIndustryName)})},[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["m"])(O.countryNames,(function(e){return Object(r["j"])(),Object(r["e"])("option",{key:e,value:e},Object(r["o"])(e),9,s)})),128))],544),[[r["p"],O.selectedCountryName]]),c,Object(r["f"])("div",null,[u,Object(r["q"])(Object(r["f"])("select",{name:"industryName",id:"industryName","onUpdate:modelValue":t[2]||(t[2]=function(e){return O.selectedIndustryName=e}),onChange:t[3]||(t[3]=function(e){return w.getIndustrySkills(O.selectedIndustryName)})},[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["m"])(O.industryNames,(function(e){return Object(r["j"])(),Object(r["e"])("option",{key:e,value:e},Object(r["o"])(e),9,l)})),128))],544),[[r["p"],O.selectedIndustryName]])])]),w.shouldDisplay?(Object(r["j"])(),Object(r["e"])("div",d,[O.topSkills.length>0?(Object(r["j"])(),Object(r["e"])("h3",g,Object(r["o"])(O.industryHeadingString),1)):Object(r["d"])("",!0),h,Object(r["f"])("div",p,[O.topSkills.length>0?(Object(r["j"])(),Object(r["e"])("ul",y,[(Object(r["j"])(!0),Object(r["e"])(r["a"],null,Object(r["m"])(O.topSkills,(function(e){return Object(r["j"])(),Object(r["e"])("li",{key:e},Object(r["o"])(e),1)})),128))])):Object(r["d"])("",!0)])])):Object(r["d"])("",!0),""!=O.selectedCountryName&&e.sholdDisplay?(Object(r["j"])(),Object(r["e"])("div",b,[Object(r["f"])("h3",null,Object(r["o"])(O.growthHeadingString),1),f,O.industryGrowth?(Object(r["j"])(),Object(r["e"])("div",m,[Object(r["h"])(I,{width:"100%",suffix:"%",xtitle:"Year",ytitle:"%",data:{2015:O.industryGrowth[0].rate,2016:O.industryGrowth[1].rate,2017:O.industryGrowth[2].rate,2018:O.industryGrowth[3].rate,2019:O.industryGrowth[4].rate}},null,8,["data"])])):Object(r["d"])("",!0),O.industryGrowth?(Object(r["j"])(),Object(r["e"])("div",j,v)):(Object(r["j"])(),Object(r["e"])("div",k,S))])):Object(r["d"])("",!0)],64)}Object(r["k"])();var P=n("1da1"),A=(n("96cf"),n("caad"),n("2532"),n("ac1f"),n("5319"),n("d3b7"),n("25f0"),n("99af"),n("bc3a")),C={name:"IndustrySkillsComponent",data:function(){return{industryNames:["Mining & Metals","Oil & Energy","Pharmaceuticals","Food Production","Aviation & Aerospace","Automotive","Chemicals","Machinery","Textiles","Paper & Forest Products","Printing","Electrical & Electronic Manufacturing","Plastics","Renewables & Environment","Packaging & Containers","Industrial Automation","Computer Hardware","Computer Software","Computer Networking","Internet","Semiconductors","Telecommunications","Motion Pictures & Film","Broadcast Media","Newspapers","Publishing","Information Technology & Services","Writing & Editing","Computer Games","Online Media","Computer & Network Security","Media Production","Banking","Insurance","Financial Services","Investment Banking","Investment Management","Venture Capital & Private Equity","Law Practice","Legal Services","Management Consulting","Biotechnology","Veterinary","Accounting","Architecture & Planning","Research","Executive Office","Marketing & Advertising","Information Services","Environmental Services","Market Research","Public Relations & Communications","Design","Professional Training & Coaching","Translation & Localization","Events Services","Outsourcing/Offshoring","Mechanical Or Industrial Engineering","Photography","Graphic Design","Entertainment","Gambling & Casinos","Sports","Museums & Institutions","Fine Art","Performing Arts","Arts & Crafts","Music","Health, Wellness & Fitness","Animation"],countryNames:["Australia","Brazil","Canada","Costa Rica","Denmark","France","Georgia","Germany","Greece","Hong Kong SAR, China","Ireland","Italy","Japan","Korea, Rep.","Lebanon","Mexico","Malaysia","New Zealand","United Kingdom","Philippines","Puerto Rico","Portugal","Singapore","South Africa","Spain","Switzerland","Thailand","United States","Vietnam"],selectedIndustryName:"",selectedCountryName:"",industryAPIString:"",countryAPIString:"",industryHeadingString:"",growthHeadingString:"",topSkills:[],industryGrowth:[0,0,0,0,0],isLoading:!1}},computed:{shouldDisplay:function(){return!this.isLoading&&0!==this.topSkills.length}},methods:{getIndustrySkills:function(e){var t=this;return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.isLoading=!0,t.selectedIndustryName=e,e.includes(" & ")?t.industryAPIString=e.replace(" & ","%20%26%20"):e.includes(" ")?t.industryAPIString=e.replace(" ","%20"):t.industryAPIString=e,n.prev=3,""===t.countryAPIString||""===t.industryAPIString){n.next=8;break}return t.isLoading=!1,t.getIndustryGrowth(t.countryAPIString,t.industryAPIString),n.abrupt("return");case 8:return n.next=10,A.get("api/top-skills?ind=".concat(t.industryAPIString));case 10:return r=n.sent,i=r.data,t.topSkills=i,t.industryHeadingString="Top Skill Groups for "+t.selectedIndustryName+":",t.isLoading=!1,n.abrupt("return");case 18:return n.prev=18,n.t0=n["catch"](3),console.log(n.t0),n.abrupt("return",n.t0);case 22:case"end":return n.stop()}}),n,null,[[3,18]])})))()},getIndustryGrowth:function(){var e=arguments,t=this;return Object(P["a"])(regeneratorRuntime.mark((function n(){var r,i,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r=e.length>0&&void 0!==e[0]?e[0]:"Canada",i=e.length>1?e[1]:void 0,t.isLoading=!0,r&&null!==i){n.next=6;break}return t.isLoading=!1,n.abrupt("return");case 6:return t.selectedCountryName=r,t.countryAPIString=r.toString(),t.countryAPIString.includes(",")&&(t.countryAPIString=i.replace(",","%2C"),t.countryAPIString.includes(" ")&&(t.countryAPIString=t.countryAPIString.replace(" ","%20"),t.countryAPIString.includes(".")&&(t.countryAPIString=t.countryAPIString.replace(".","%2E"),t.countryAPIString.includes("'")&&(t.countryAPIString=t.countryAPIString.replace("'","%27"))))),t.countryAPIString=r,n.prev=10,n.next=13,A.get("api/ind-growth?industry=".concat(t.industryAPIString,"&country=").concat(t.countryAPIString));case 13:return a=n.sent,o=a.data,o||(t.industryGrowth=null),o&&(t.industryGrowth=[{year:2015,rate:o.growth_rate_2015},{year:2016,rate:o.growth_rate_2016},{year:2017,rate:o.growth_rate_2017},{year:2018,rate:o.growth_rate_2018},{year:2019,rate:o.growth_rate_2019}]),t.growthHeadingString="Growth from Transitions to "+t.selectedIndustryName+" in "+t.selectedCountryName,t.isLoading=!1,n.abrupt("return");case 22:return n.prev=22,n.t0=n["catch"](10),console.log(n.t0),n.abrupt("return",n.t0);case 26:case"end":return n.stop()}}),n,null,[[10,22]])})))()}}};n("eb50");C.render=I,C.__scopeId="data-v-5dccbf11";var N=C,M={name:"App",components:{MainPage:N}};n("7cfb");M.render=i;var G=M,x=n("d842"),L=(n("3c0b"),Object(r["b"])(G));L.use(x["a"]),L.mount("#app")},"7cfb":function(e,t,n){"use strict";n("1d5e")},eb50:function(e,t,n){"use strict";n("46cf")}});
//# sourceMappingURL=app.90315532.js.map