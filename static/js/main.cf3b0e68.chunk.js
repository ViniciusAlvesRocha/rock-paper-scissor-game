(this["webpackJsonprock-paper-scissors-master"]=this["webpackJsonprock-paper-scissors-master"]||[]).push([[0],{34:function(n,e,t){},40:function(n,e,t){},43:function(n,e,t){"use strict";t.r(e);var c,r,i,s,o,a,l,d,p=t(0),b=t.n(p),u=t(16),j=t.n(u),x=(t(34),function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,44)).then((function(e){var t=e.getCLS,c=e.getFID,r=e.getFCP,i=e.getLCP,s=e.getTTFB;t(n),c(n),r(n),i(n),s(n)}))}),h=t(4),g=t(5),m=g.b.header(c||(c=Object(h.a)(["\n  margin: 30px 7% 0;\n  color: rgb(255, 255, 255);\n  border: solid 3px rgb(255, 255, 255, .5);\n  border-radius: 7px;\n  text-transform: uppercase;\n  font-weight: 700;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  line-height: 13px;\n\n  ul {\n    margin: 30px 0 30px 30px;\n  }\n\n  @media (min-width: 800px) {\n    width: 50%;\n    margin: 0 auto;\n    margin-top: 40px;\n  }\n"]))),O=g.b.div(r||(r=Object(h.a)(["\n  margin-right: 12px;\n  background-color: rgb(255, 255, 255);\n  width: 90px;\n  height: 90px;\n  border-radius: 8px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  p.text-score {\n    color: #282c34;\n    position: relative;\n    top: -15px;\n    font-size: 13px;\n  }\n\n  p.number-score {\n    color: #282c34;\n    font-size: 50px;\n    letter-spacing: -8px;\n  }\n"]))),f=t(11),v=t(1),k=Object(f.b)((function(n){return{score:n.score}}))((function(n){var e=n.score;return Object(v.jsxs)(m,{children:[Object(v.jsxs)("ul",{children:[Object(v.jsx)("li",{children:"Rock"}),Object(v.jsx)("li",{children:"Paper"}),Object(v.jsx)("li",{children:"Scissors"}),Object(v.jsx)("li",{children:"Lizard"}),Object(v.jsx)("li",{children:"Spock"})]}),Object(v.jsxs)(O,{children:[Object(v.jsx)("p",{className:"text-score",children:"Score"}),Object(v.jsx)("p",{className:"number-score",children:e})]})]})})),y=g.b.div(i||(i=Object(h.a)(["\n  background-color: rgb(255, 255, 255);\n  width: 80px;\n  height: 80px;\n  display: flex;\n  border: solid 13px rgb(235, 168, 33);\n  border-radius: 70px;\n  justify-content: center;\n  align-items: center;\n\n  & img{\n    width: 45%;\n  }\n"]))),w=t.p+"static/media/icon-scissors.3b1a5d7e.svg",N=function(){return Object(v.jsx)(y,{children:Object(v.jsx)("img",{name:"scissor",src:w,alt:"scissor icon"})})},E=g.b.div(s||(s=Object(h.a)(["\n  background-color: rgb(255, 255, 255);\n  width: 80px;\n  height: 80px;\n  border: solid 13px rgb(72, 109, 244);\n  border-radius: 60px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & img {\n    width: 45%;\n  }\n"]))),_=t.p+"static/media/icon-paper.8b57a6b1.svg",S=function(){return Object(v.jsx)(E,{children:Object(v.jsx)("img",{name:"paper",src:_,alt:"icon paper"})})},R=g.b.div(o||(o=Object(h.a)(["\n  background-color: rgb(255, 255, 255);\n  width: 80px;\n  height: 80px;\n  border: solid 13px rgb(81, 190, 209);\n  border-radius: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & img{\n    width: 40%;\n  }\n"]))),z=t.p+"static/media/icon-spock.f4d7eee8.svg",L=function(){return Object(v.jsx)(R,{children:Object(v.jsx)("img",{name:"spock",src:z,alt:"icon spock"})})},C=g.b.div(a||(a=Object(h.a)(["\n  background-color: rgb(255, 255, 255);\n  width: 80px;\n  height: 80px;\n  border: solid 13px rgb(144, 107, 227);\n  border-radius: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & img {\n    width: 50%;\n  }\n"]))),I=t.p+"static/media/icon-lizard.0f83914c.svg",M=function(){return Object(v.jsx)(C,{children:Object(v.jsx)("img",{name:"lizard",src:I,alt:"icon spock"})})},T=g.b.div(l||(l=Object(h.a)(["\n  background-color: rgb(255, 255, 255);\n  width: 80px;\n  height: 80px;\n  border: solid 13px rgb(222, 80, 90);\n  border-radius: 70px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  & img {\n    width: 45%;\n  }\n"]))),A=t.p+"static/media/icon-rock.476e90a9.svg",D=function(){return Object(v.jsx)(T,{children:Object(v.jsx)("img",{name:"rock",src:A,alt:"icon spock"})})},F=g.b.button(d||(d=Object(h.a)(["\n  align-self: center;\n  font-size: 20px;\n  text-transform: uppercase;\n  color: rgb(255, 255, 255);\n  border: solid 2px rgb(255, 255, 255);\n  border-radius: 10px;\n  background-color: rgb(24, 33, 66);\n  font-weight: 700;\n  padding: 13px 45px;\n"]))),B=(t(40),t(7));var U,H,P=Object(f.b)((function(n){return{matchs:n.matchs,stateRules:n.stateRules}}),(function(n){return{newGame:function(e){return n({type:"NEW_GAME",payload:e})},viewRules:function(){return n({type:"VISIBLE_RULES"})}}}))((function(n){console.log(n.matchs);var e=n.newGame;return Object(v.jsxs)("div",{className:"App",children:[Object(v.jsx)(k,{}),Object(v.jsx)("form",{children:Object(v.jsxs)("div",{className:"background-image",children:[Object(v.jsx)(B.b,{className:"scissor-main-screen",to:"/match",onClick:function(n){console.log(n.target.name),e(n.target.name)},children:Object(v.jsx)(N,{})}),Object(v.jsxs)("div",{className:"spock-paper",children:[Object(v.jsx)(B.b,{to:"/match",onClick:function(n){console.log(n.target.name),e(n.target.name)},children:Object(v.jsx)(L,{})}),Object(v.jsx)(B.b,{to:"/match",onClick:function(n){console.log(n.target.name),e(n.target.name)},children:Object(v.jsx)(S,{})})]}),Object(v.jsxs)("div",{className:"lizard-rock",children:[Object(v.jsx)(B.b,{to:"/match",onClick:function(n){console.log(n.target.name),e(n.target.name)},children:Object(v.jsx)(M,{})}),Object(v.jsx)(B.b,{to:"/match",onClick:function(n){console.log(n.target.name),e(n.target.name)},children:Object(v.jsx)(D,{})})]})]})}),Object(v.jsx)(B.b,{className:"link-rules",to:"/rules",children:Object(v.jsx)(F,{children:"Rules"})})]})})),V=t(3),W=t(18),G=t(29),X=t(25),Y={matchsOlded:[{user:"rock",computer:"scissor",result:"win"},{user:"paper",computer:"scissor",result:"lose"}],current:{user:"",computer:"",result:""}},J=["scissor","paper","rock","lizard","spock"],q=function(n,e){return("scissor"!==n||"paper"!==e&&"lizard"!==e)&&("paper"!==n||"rock"!==e&&"spock"!==e)&&("rock"!==n||"lizard"!==e&&"scissor"!==e)&&("lizard"!==n||"spock"!==e&&"paper"!==e)&&("spock"!==n||"scissor"!==e&&"rock"!==e)?"lose":"win"},K=function(n){var e=J.filter((function(e){return e!==n})),t=Math.trunc(4*Math.random());return console.log(e[t]),e[t]},Q=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Y,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"NEW_GAME":var t=K(e.payload);console.log("dentro do matchsReducer:",e.payload);var c=q(e.payload,t);return Object(X.a)(Object(X.a)({},n),{},{matchsOlded:[].concat(Object(G.a)(n.matchsOlded),[{user:e.payload,computer:t,result:c}]),current:{user:e.payload,computer:t,result:c}});default:return n}},Z=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"WIN_MATCH":return n+1;case"LOSE_MATCH":return n-1;default:return n}},$=function(){var n=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"VISIBLE_RULES":return!0;case"HIDDEN_RULES":return!1;default:return n}},nn=Object(W.a)({matchs:Q,score:Z,stateRules:$}),en=Object(W.b)(nn,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),tn=t(23),cn=g.b.div(U||(U=Object(h.a)(["\n  background-color: rgb(255, 255, 255);\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-evenly;\n"]))),rn=t.p+"static/media/image-rules-bonus.513320fb.svg",sn=t.p+"static/media/icon-close.bde602ec.svg",on=Object(f.b)(null,(function(n){return{hiddenRules:function(){return n({type:"HIDDEN_RULES"})}}}))((function(n){var e=Object(V.f)();return console.log(e),Object(v.jsxs)(cn,{children:[Object(v.jsx)("h2",{children:"Rules"}),Object(v.jsx)("img",{src:rn,alt:"rules"}),Object(v.jsx)("button",{className:"btn-close-rules",onClick:function(){return e.push(e.goBack())},children:Object(v.jsx)("img",{src:sn,alt:"icon close"})})]})})),an=Object(f.b)((function(n){return{score:n.score,current:n.matchs.current,stateRules:n.stateRules}}),(function(n){return{winMatch:function(){return n({type:"WIN_MATCH"})},loseMatch:function(){return n({type:"LOSE_MATCH"})},visibleRules:function(){return n({type:"VISIBLE_RULES"})}}}))((function(n){var e=n.score,t=n.current,c=n.winMatch,r=n.loseMatch,i=Object(p.useState)(!1),s=Object(tn.a)(i,2),o=s[0],a=s[1],l=Object(p.useState)(null),d=Object(tn.a)(l,2),b=d[0],u=d[1];Object(p.useEffect)((function(){setTimeout((function(){"win"===t.result?(c(),u("win")):(r(),u("lose")),console.log(t,e),a(!0)}),1500)}),[t]);var j=function(){var n=t.user;return"scissor"===n?Object(v.jsx)(N,{}):"paper"===n?Object(v.jsx)(S,{}):"rock"===n?Object(v.jsx)(D,{}):"lizard"===n?Object(v.jsx)(M,{}):Object(v.jsx)(L,{})};return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(k,{}),Object(v.jsxs)("div",{className:"match",children:[Object(v.jsxs)("div",{className:"user-vs-computer",children:[Object(v.jsxs)("div",{children:[o&&"win"===t.result?Object(v.jsx)("div",{className:"effect",children:Object(v.jsx)("div",{children:Object(v.jsx)("div",{children:j()})})}):j(),o&&"win"===t.result?Object(v.jsx)("p",{className:"you-picked-effect",children:"You picked"}):Object(v.jsx)("p",{className:"you-picked",children:"You picked"})]}),Object(v.jsxs)("div",{children:[o?Object(v.jsx)("div",{className:"choice-computer",children:function(){var n=t.computer;return"scissor"===n?Object(v.jsx)(N,{}):"paper"===n?Object(v.jsx)(S,{}):"rock"===n?Object(v.jsx)(D,{}):"lizard"===n?Object(v.jsx)(M,{}):Object(v.jsx)(L,{})}()}):Object(v.jsx)("div",{className:"bg-the-house-picked"}),Object(v.jsx)("p",{className:"the-house-picked",children:"The house picked"})]})]}),Object(v.jsx)("div",{className:"play-again",children:function(){n.current;return"win"===b?Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:"You Win"}),Object(v.jsx)(B.b,{to:"/",children:"Play Again"})]}):"lose"===b&&Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("p",{children:"You Lose"}),Object(v.jsx)(B.b,{to:"/",children:"Play Again"})]})}()})]})]})})),ln=Object(g.a)(H||(H=Object(h.a)(["\n@import url('https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@600&display=swap');\n* {\n  margin: 0;\n  padding: 0;\n}\n\nul {\n  list-style: none;\n}\n\nbody { \n  background-color: rgb(22, 28, 62);\n}\n\n.background-color {\n  background-color: rgb(22, 28, 62);\n}\n\n.user-vs-computer {\n  margin-top: 130px;\n  display: flex;\n  /* background-color: red;\n  justify-content: space-between; */\n}\n\n.user-vs-computer p {\n  text-transform: uppercase;\n  color: rgb(255, 255, 255);\n  font-weight: 700;\n}\n\n.bg-the-house-picked {\n  background-color: rgb(25, 40, 69);\n  width: 106px;\n  height: 106px;\n  border-radius: 60px;\n  position: relative;\n  left: 40px;\n}\n\n.choice-computer {\n  z-index: 10;\n  position: relative;\n  right: -35px;\n}\n\n.match {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n/* .match button {\n  margin-top: 200px;\n} */\n\n.effect {\n  position: absolute;\n  top: 213px;\n  left: -20px;\n  z-index: -1;\n  width: 210px;\n  height: 210px;\n  border: solid 26px rgb(255, 255, 255, .04);\n  border-radius: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.effect > div {\n  width: 158px;\n  height: 158px;\n  border: solid 26px rgb(255, 255, 255, .06);\n  border-radius: 200px;\n}\n\n.effect > div > div{\n  width: 106px;\n  height: 106px;\n  border: solid 26px rgb(255, 255, 255, .1);\n  border-radius: 100px;\n}\n\n.you-picked-effect {\n  position: relative;\n  top: 127px;\n  left: -15px;\n}\n\n.you-picked {\n  position: relative;\n  top: 20px;\n}\n\n.the-house-picked {\n  position: relative;\n  top: 20px;\n  left: 20px;\n}\n\n.play-again {\n  margin-top: 30px;\n  position: relative;\n  top: 60px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  text-transform: uppercase;\n  p {\n    color: rgb(255, 255, 255);\n    font-size: 40px;\n    font-weight: 900;\n  }\n  a {\n    text-decoration: none;\n    color: rgb(22, 28, 62);\n    margin-top: 15px;\n    border-radius: 10px;\n    padding: 17px 70px;\n    background-color: rgb(255, 255, 255);\n  }\n}\n\n.rules-match {\n  margin-top: 180px\n}\n\n.btn-close-rules {\n  background-color: rgb(255, 255, 255);\n  border: none;\n}\n\n.link-rules {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n@media (min-width: 800px) {\n\n  .effect {\n  position: absolute;\n  top: 225px;\n  left: 33%;\n  z-index: 10;\n  width: 210px;\n  height: 210px;\n  border: solid 26px rgb(255, 255, 255, .04);\n  border-radius: 200px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n}\n"]))),dn=function(){return Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)(ln,{}),Object(v.jsx)(B.a,{children:Object(v.jsx)(f.a,{store:en,children:Object(v.jsxs)(V.c,{children:[Object(v.jsx)(V.a,{path:"/",exact:!0,component:P}),Object(v.jsx)(V.a,{path:"/match",component:an}),Object(v.jsx)(V.a,{path:"/rules",component:on})]})})})]})};j.a.render(Object(v.jsx)(b.a.StrictMode,{children:Object(v.jsx)(dn,{})}),document.getElementById("root")),x()}},[[43,1,2]]]);
//# sourceMappingURL=main.cf3b0e68.chunk.js.map