webpackJsonp([1],{"1XxD":function(t,e){},"36PI":function(t,e){},"5v7E":function(t,e){},"83G7":function(t,e){},"9M+g":function(t,e){},Jmt5:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("b-container",{attrs:{fluid:"",id:"content"}},[e("b-row",[e("b-col",[e("b-navbar",{attrs:{toggleable:"lg",fixed:"bottom",type:"dark",variant:"dark"}},[e("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),this._v(" "),e("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[e("b-navbar-nav",[e("b-nav-item",{staticClass:"navigationItem",attrs:{to:"/"}},[this._v("🏠 Home")]),this._v(" "),e("b-nav-item",{staticClass:"navigationItem",attrs:{to:"/clutter"}},[this._v("🎮 Game")]),this._v(" "),e("b-nav-item",{staticClass:"navigationItem",attrs:{to:"/highscore"}},[this._v("🏆 Highscores")])],1)],1)],1)],1)],1),this._v(" "),e("b-row",[e("b-col",[e("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var s=r("VU/8")({name:"App"},a,!1,function(t){r("5v7E")},"data-v-11341c3e",null).exports,o=r("/ocq"),i={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-row",{attrs:{id:"title"}},[r("b-col",[t._v("Clutter")])],1),t._v(" "),r("b-row",{attrs:{id:"subtitle"}},[r("b-col",[t._v("\n      🤠\n      "),r("a",{attrs:{href:"https://www.instagram.com/this.oliver/"}},[t._v("Olivier Manzi")])])],1),t._v(" "),r("b-row",{attrs:{id:"button-groups"}},[r("b-col",[r("b-button-group",[r("b-button",{attrs:{to:"/clutter",variant:"dark"}},[t._v("Start Game")])],1)],1)],1),t._v(" "),r("b-row",{attrs:{id:"howto","align-v":"center"}},[r("b-col",[t._v("\n      📓 How to play:\n      "),r("ol",[r("li",[r("p",[t._v("Guess which country the cluttered™ word represents")])]),t._v(" "),r("li",[r("p",[t._v("60 Seconds to answer anagrams")])]),t._v(" "),r("li",[r("p",[t._v("Correct guess is 1+ point")])])])])],1)],1)},staticRenderFns:[]};var c=r("VU/8")({},i,!1,function(t){r("36PI")},"data-v-5ad84ada",null).exports,u=r("mtWM"),h="https://restcountries.eu/rest/v2/region/",l=function(t){switch(t){case"africa":return u.get(h+"africa").then(function(t){return t.data});case"americas":return u.get(h+"americas").then(function(t){return t.data});case"asia":return u.get(h+"asia").then(function(t){return t.data});case"europe":return u.get(h+"europe").then(function(t){return t.data});case"oceania":return u.get(h+"oceania").then(function(t){return t.data});default:return u.get("https://restcountries.eu/rest/v2/all").then(function(t){return t.data})}},d=r("pFYg"),g=r.n(d),m=function(t){if("string"!=typeof t)return console.log(void 0===t?"undefined":g()(t)),null;var e=t.length,r=t.split(""),n=new Array(e);return r.forEach(function(t){var r,a=!1;do{r=v(0,e),void 0===n[r]&&(n[r]=t,a=!0)}while(0==a)}),n.join("")},v=function(t,e){return Math.round(Math.random()*e)+t},f={clutter:function(t){var e="",r=t.split(" ");return r.forEach(function(t,n){var a="",s="";"("==t[0]&&")"==t[t.length-1]?(a=t.slice(1,t.length-1),s+="("+m(a)+")"):"("==t[0]?(a=t.slice(1,t.length),s+="("+m(a)):")"==t[t.length-1]?(a=t.slice(0,t.length-1),s+=m(a)+")"):s+=a=m(t),n==r.length-1?e+=s:e+=s+" "}),e},removeBrackets:function(t){for(var e="",r=!1,n=0;n<t.length;n++)"("==t[n]?(r=!0,e=e.slice(0,e.length-1)):")"==t[n]?r=!1:0==r&&(e+=t[n]);return e.trim()},randomNumber:v},b={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-row",{attrs:{id:"word"}},[r("b-col",[1==t.gameState.started?r("div",{attrs:{id:"output"}},[r("b-row",{attrs:{id:"clutter"}},[r("b-col",[t._v(t._s(t.words.clutteredCountry))])],1),t._v(" "),t.gameState.hint?r("b-row",{attrs:{id:"hint"}},[r("b-col",[r("b-col",[t._v(t._s(t.gameState.hintText))])],1)],1):t._e()],1):t._e(),t._v(" "),r("div",{attrs:{id:"input"}},[t.gameState.started?r("b-row",[r("b-col",[r("b-form-group",[r("b-input-group",[r("b-form-input",{attrs:{size:t.screenSize,disabled:t.gameState.finished},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.checkAnswer(e)}},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}}),t._v(" "),"lg"==this.screenSize?r("b-input-group-append",[r("b-button",{attrs:{size:t.screenSize,text:"Button",variant:"success",disabled:t.gameState.finished},on:{click:t.checkAnswer}},[t._v("Take a Guess")])],1):t._e(),t._v(" "),"lg"==t.screenSize?r("b-input-group-append",[r("b-button",{attrs:{size:this.screenSize,text:"Button",variant:"warning",disabled:t.gameState.finished},on:{click:t.skipAnswer}},[t._v("Skip")])],1):t._e()],1),t._v(" "),"lg"!=t.screenSize?r("b-form-group",{attrs:{"label-cols-sm":"12"}},[r("b-button-group",[r("b-button",{attrs:{size:t.screenSize,text:"Button",variant:"success",disabled:t.gameState.finished},on:{click:t.checkAnswer}},[t._v("Guess")]),t._v(" "),r("b-button",{attrs:{size:t.screenSize,text:"Button",variant:"warning",disabled:t.gameState.finished},on:{click:t.skipAnswer}},[t._v("Skip")])],1)],1):t._e()],1)],1)],1):t._e()],1)])],1)],1)},staticRenderFns:[]};var p=r("VU/8")({name:"wordboard",data:function(){return{input:""}},props:["words","gameState","rules","screenSize"],methods:{checkAnswer:function(){this.input.toLowerCase().toString()==this.words.country.toLowerCase().toString()?(this.input="",this.$emit("increaseScore")):(this.input="",this.$emit("increaseMistake"),this.gameState.mistakes%this.rules.maxMistakes==0&&this.$emit("skipAnswer"))},skipAnswer:function(){this.input="",this.$emit("skipAnswer")}}},b,!1,function(t){r("83G7")},null,null).exports,S=r("mtWM"),w="https://clutter-api.herokuapp.com/highscores",_=function(){return console.log({url:w}),S.get(w).then(function(t){return console.log({res:t.data}),t.data})},y=function(t,e,r,n){var a={username:t,score:e,accuracy:r,created:n};S.post(w,a).then(function(t){return console.log("posted!"),console.log({res:t}),t}).catch(function(t){console.log({error:t})})},k={name:"scoreboard",data:function(){return{highscores:[],postHighscore:!1,username:"",invalidUsername:!1,headerBgVariant:"dark",headerTextVariant:"light",bodyBgVariant:"dark",bodyTextVariant:"light",footerBgVariant:"dark",footerTextVariant:"light",screenSize:{width:screen.width,height:screen.height}}},props:["totalScore","totalWords","totalCorrectWords","totalIncorrectWords","gameFinished"],computed:{getHighScores:function(){var t=[];return this.highscores.forEach(function(e){var r={username:e.username,score:e.score,accuracy:e.accuracy};t.push(r)}),t.sort(function(t,e){return e.score-t.score}),t.slice(0,5)},getUserAccuracy:function(){return Math.ceil(this.totalScore/this.totalWords*100)},getScreenSize:function(){var t=this.screenSize.width;return t<=350?"sm":350<t&&t<=450?"md":"lg"}},methods:{fetchHighScores:function(){var t=this;_().then(function(e){t.highscores=e})},uploadHighscore:function(){var t=new Date;this.verifyName()&&(y(this.username,this.totalScore,this.getUserAccuracy,t),this.$router.push("highscore"))},verifyName:function(){var t=this.username.replace(/ /g,""),e=!0;return this.highscores.forEach(function(r){r.username==t&&(e=!1)}),this.invalidUsername=!0,e},fetchScreenSize:function(){this.screenSize={width:screen.width,height:screen.height}}},beforeMount:function(){this.fetchScreenSize(),this.fetchHighScores()}},x={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",[r("b-modal",{ref:"scoreboard",attrs:{title:"Scoreboard",size:this.getScreenSize,"header-bg-variant":t.headerBgVariant,"header-text-variant":t.headerTextVariant,"body-bg-variant":t.bodyBgVariant,"body-text-variant":t.bodyTextVariant,"footer-bg-variant":t.footerBgVariant,"footer-text-variant":t.footerTextVariant,visible:t.gameFinished},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;var n=e.cancel;return e.hide,[r("b-button",{attrs:{variant:"warning"},on:{click:function(t){return n()}}},[t._v("Cancel")]),t._v(" "),r("b-button",{attrs:{variant:"success"},on:{click:function(e){t.postHighscore=!0}}},[t._v("Post Score")])]}}])},[r("b-media-body",[r("b-container",{attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{cols:"3",id:"totalCorrectWords"}},[t._v("\n                  Total\n                  "),r("hr"),t._v("\n                  "+t._s(t.totalScore)+"/"+t._s(t.totalWords)+"\n                ")]),t._v(" "),r("b-col",{attrs:{cols:"3",id:"totalWords"}},[t._v("\n                  Accuracy\n                  "),r("hr"),t._v("\n                  "+t._s(t.getUserAccuracy)+"%\n                ")]),t._v(" "),r("b-col",{attrs:{cols:"6",id:"totalIncorrectWords"}},[t._v("\n                  Missed words\n                  "),r("hr"),t._v(" "),r("ol",t._l(t.totalIncorrectWords,function(e){return r("li",{key:e},[t._v(t._s(e))])}),0)])],1)],1)],1)],1)],1)],1),t._v(" "),r("b-row",[r("b-col",[r("b-modal",{ref:"postHighScore",attrs:{title:"Post Highscore","header-bg-variant":t.headerBgVariant,"header-text-variant":t.headerTextVariant,visible:t.postHighscore},scopedSlots:t._u([{key:"modal-footer",fn:function(e){e.ok;var n=e.cancel;return[r("b-button",{attrs:{variant:"warning"},on:{click:function(t){return n()}}},[t._v("Cancel")]),t._v(" "),r("b-button",{attrs:{variant:"success"},on:{click:t.uploadHighscore}},[t._v("Post Score")])]}}])},[r("b-form-group",{attrs:{description:"This is the username that will be shown near your highscore. (ps: it'd be cool if you used your ig tag 🤠)"}},[r("b-form-input",{attrs:{placeholder:"Enter your username"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),t.invalidUsername?r("p",{staticStyle:{color:"red"}},[t._v("the username you picked has already been chosen by another player")]):t._e()],1)],1)],1)],1)],1)},staticRenderFns:[]};var z={name:"clutter",components:{WordBoard:p,Scoreboard:r("VU/8")(k,x,!1,function(t){r("1XxD")},"data-v-9b83d058",null).exports},data:function(){return{words:{country:"clutter",clutteredCountry:"clutter",totalWords:[],totalCorrectWords:[],totalIncorrectWords:[]},gameState:{started:!1,finished:!1,hint:!1,hintsLeft:3,hintText:"",timer:60,countdown:3,timerObject:null,score:0,mistakes:0},rules:{maxTime:60,maxHintTime:3e3,maxCountdown:3e3,maxMistakes:3},screenSize:{width:screen.width,height:screen.height}}},computed:{showTime:function(){return this.gameState.timer},getScreenSize:function(){var t=this.screenSize.width;return t<=350?"sm":350<t&&t<=450?"md":"lg"}},methods:{startCountdown:function(){var t=this;this.gameState.timerObject=setInterval(function(){t.gameState.countdown--,0==t.gameState.countdown&&(clearInterval(t.gameState.timerObject),t.countdown=t.maxCountdown,t.startGame())},1e3)},startGame:function(){this.gameState.started=!0,this.fetchRandomCountry(),this.startTimer()},startTimer:function(){var t=this;this.gameState.timerObject=setInterval(function(){t.gameState.timer--,0==t.gameState.timer&&(clearInterval(t.gameState.timerObject),t.gameState.finished=!0)},1e3)},fetchRandomCountry:function(){var t=this;l().then(function(e){var r=f.removeBrackets(e[f.randomNumber(0,e.length)].name),n=f.removeBrackets(f.clutter(r));t.words.country=r,t.words.clutteredCountry=n,t.words.totalWords.push(r)})},increaseScore:function(){this.gameState.score++,this.words.totalCorrectWords.push(this.words.country),this.fetchRandomCountry()},increaseMistake:function(){this.gameState.mistakes++},restart:function(){this.words.country="clutter",this.words.clutteredCountry="clutter",this.words.totalWords=[],this.gameState.score=0,this.gameState.mistake=0,this.words.totalWords=[],this.words.totalCorrectWords=[],this.words.totalIncorrectWords=[],this.gameState.started=!1,this.gameState.finished=!1,this.gameState.timer=this.rules.maxTime,clearInterval(this.gameState.timerObject),this.gameState.countdown=3,this.startCountdown()},skipAnswer:function(){this.words.totalIncorrectWords.push(this.words.country),this.fetchRandomCountry()},giveHint:function(){if(0==this.gameState.hint){if(0==this.gameState.hintsLeft)return;this.gameState.hintsLeft--,this.gameState.hint=!0,this.gameState.hintText="";for(var t=0;t<this.words.country.length;t++){var e=this.words.country[t].toLowerCase();this.gameState.hintText+="a"==e||"e"==e||"i"==e||"o"==e||"u"==e?"*":e}setTimeout(this.giveHint,this.rules.maxHintTime)}else this.gameState.hint=!1},fetchScreenSize:function(){this.screenSize={width:screen.width,height:screen.height}}},mounted:function(){this.startCountdown()},beforeMount:function(){this.fetchScreenSize()},beforeDestroy:function(){this.restart()}},C={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("b-container",{attrs:{fluid:""}},[t.gameState.started?r("b-row",{attrs:{id:"scoreboard"}},[r("b-col",{attrs:{cols:"8",id:"timer"}},[r("p",[t._v("⏱ "+t._s(t.showTime))])]),t._v(" "),r("b-col",{attrs:{cols:"4",id:"score"}},[r("p",[t._v(t._s(t.gameState.score)+" 🏅")])])],1):r("b-row",{attrs:{id:"countdown"}},[r("b-col",[r("p",[t._v(t._s(t.gameState.countdown))])])],1),t._v(" "),r("b-row",[r("b-col",[r("WordBoard",{attrs:{words:t.words,rules:t.rules,gameState:t.gameState,screenSize:t.getScreenSize},on:{skipAnswer:t.skipAnswer,increaseScore:t.increaseScore,increaseMistake:t.increaseMistake}})],1)],1),t._v(" "),r("b-row",{staticClass:"justify-content-md-center",attrs:{id:"buttons"}},[r("b-col",[r("b-button-toolbar",[r("b-button-group",[t.gameState.started?r("b-button",{attrs:{variant:"warning",size:this.getScreenSize},on:{click:t.giveHint}},[t._v("\n              Hint\n              "),r("b-badge",{attrs:{variant:"light"}},[t._v(t._s(t.gameState.hintsLeft))])],1):t._e(),t._v(" "),t.gameState.started?r("b-button",{attrs:{variant:"danger",size:this.getScreenSize},on:{click:t.restart}},[t._v("Restart")]):t._e()],1)],1)],1)],1),t._v(" "),r("b-row",{staticClass:"justify-content-md-center",attrs:{id:"scoreboard"}},[r("b-col",[r("Scoreboard",{attrs:{totalScore:this.gameState.score,totalWords:this.words.totalWords.length,totalCorrectWords:this.words.totalCorrectWords,totalIncorrectWords:this.words.totalIncorrectWords,gameFinished:t.gameState.finished},on:{reset:t.restart}})],1)],1)],1)],1)},staticRenderFns:[]};var W=r("VU/8")(z,C,!1,function(t){r("VWGb")},"data-v-4e2e25b1",null).exports,H={name:"highscore",data:function(){return{highscores:[],highscoreFields:[{key:"username",label:"🌍",sortable:!0},{key:"score",label:"🎖",sortable:!0},{key:"accuracy",label:"🎯",sortable:!0},{key:"created",label:"⏳",sortable:!0}]}},methods:{fetchHighScores:function(){var t=this;_().then(function(e){t.highscores=t.sortHighscore(e)})},sortHighscore:function(t){var e=this,r=[];return t.forEach(function(t){var n={username:t.username,score:t.score,accuracy:t.accuracy,created:e.readISO(t.created)};r.push(n)}),r.sort(function(t,e){return e.score-t.score}),r},readISO:function(t){var e=new Date(t).getTime(),r=(new Date).getTime(),n=Math.abs(r-e)/36e5;return Math.ceil(n)}},beforeMount:function(){this.fetchHighScores()},mounted:function(){this.fetchHighScores()}},T={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("b-container",{attrs:{fluid:""}},[r("b-row",{attrs:{id:"title"}},[r("b-col",[t._v("Highscores")])],1),t._v(" "),r("b-row",{attrs:{id:"highscores"}},[r("b-col",[r("b-table",{attrs:{id:"highscores",items:t.highscores,fields:t.highscoreFields,striped:"","sticky-header":"500px","head-variant":"dark","table-variant":"light","show-empty":""},scopedSlots:t._u([{key:"cell(username)",fn:function(e){return[r("b",[t._v("@"+t._s(e.value))])]}},{key:"cell(score)",fn:function(e){return[t._v("\n          "+t._s(e.value)+"\n          "),r("b",[t._v("pts")])]}},{key:"cell(accuracy)",fn:function(e){return[t._v("\n          "+t._s(e.value)+"\n          "),r("b",[t._v("%")])]}},{key:"cell(created)",fn:function(e){return[t._v("\n          "+t._s(e.value)+"\n          "),r("b",[t._v("hrs")])]}}])})],1)],1)],1)},staticRenderFns:[]};var V=r("VU/8")(H,T,!1,function(t){r("Ppgp")},"data-v-0d7aa2ca",null).exports;n.default.use(o.a);var M=new o.a({routes:[{path:"/",name:"home",component:c},{path:"/clutter",name:"clutter",component:W},{path:"/highscore",name:"highscore",component:V}]}),A=r("Tqaz");r("Jmt5"),r("9M+g");n.default.config.productionTip=!1,n.default.use(A.a),new n.default({el:"#app",router:M,components:{App:s},template:"<App/>"})},Ppgp:function(t,e){},VWGb:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e7cebe7bf5b7b79f83c2.js.map