var w=Object.defineProperty;var C=(o,t,e)=>t in o?w(o,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[t]=e;var l=(o,t,e)=>(C(o,typeof t!="symbol"?t+"":t,e),e);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const n of i)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function e(i){const n={};return i.integrity&&(n.integrity=i.integrity),i.referrerPolicy&&(n.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?n.credentials="include":i.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(i){if(i.ep)return;i.ep=!0;const n=e(i);fetch(i.href,n)}})();class p{constructor(t){this.linkArray=[],this.mainLink=document.createElement("a"),this.mainLink.classList.add("main_link"),this.mainLink.textContent="Main",this.mainLink.href="/Hangman_Game/main",this.linkArray.push(this.mainLink),this.recordsLink=document.createElement("a"),this.recordsLink.classList.add("records_link"),this.recordsLink.textContent="Records",this.recordsLink.href="/Hangman_Game/records",this.linkArray.push(this.recordsLink),this.gameLink=document.createElement("a"),this.gameLink.classList.add("game_link"),this.gameLink.textContent="Game",this.gameLink.href="/Hangman_Game/",this.linkArray.push(this.gameLink),this.list=document.createElement("ul"),this.list.classList.add("nav"),this.headerContainer=document.createElement("div"),this.headerContainer.classList.add("header_container"),this.header=document.createElement("header"),this.header.classList.add("header"),this.list.appendChild(this.gameLink),this.list.appendChild(this.recordsLink),this.list.appendChild(this.mainLink),this.headerContainer.appendChild(this.list),this.header.appendChild(this.headerContainer),t.appendChild(this.header)}linkInit(){this.gameLink.addEventListener("click",()=>{console.log("game")}),this.mainLink.addEventListener("click",()=>{console.log("main")}),this.recordsLink.addEventListener("click",()=>{console.log("records")})}}class L{constructor(t){this.logo=document.createElement("div"),this.logo.classList.add("logo"),this.logo.textContent="LOGO",this.year=document.createElement("div"),this.year.classList.add("year"),this.year.textContent="2024",this.footer=document.createElement("footer"),this.footer.classList.add("footer"),this.footerContainer=document.createElement("div"),this.footerContainer.classList.add("footer_container"),this.footerContainer.appendChild(this.year),this.footerContainer.appendChild(this.logo),this.footer.appendChild(this.footerContainer),t.appendChild(this.footer)}}class d{constructor(t){this.canvas=document.createElement("canvas"),this.context=this.canvas.getContext("2d"),t.appendChild(this.canvas),this.fitToContainer(this.canvas),this.count=0,this.img=new Image,this.img.src="./assets/1.svg",this.img_2=new Image,this.img_2.src="./assets/2.svg",this.img_3=new Image,this.img_3.src="./assets/3.svg",this.img_4=new Image,this.img_4.src="./assets/4.svg",this.img_5=new Image,this.img_5.src="./assets/5.svg",this.img_6=new Image,this.img_6.src="./assets/6.svg"}fitToContainer(t){t.width=t.offsetWidth,t.height=t.offsetHeight}init(){this.context.beginPath(),this.context.fillStyle="black",this.context.rect(10,390,80,10),this.context.rect(45,30,10,390),this.context.rect(45,30,180,10),this.context.rect(225,30,10,40),this.context.fill(),this.context.closePath()}drow(){switch(this.count++,this.count){case 1:this.drowHead();break;case 2:this.drowBody();break;case 3:this.drowLeftHand();break;case 4:this.drowRightHand();break;case 5:this.drowLeftFoot();break;case 6:this.drowRightFoot();break}}drowHead(){this.context.beginPath(),this.context.drawImage(this.img,200,70,60,60),this.context.stroke(),this.context.closePath()}drowBody(){this.context.beginPath(),this.context.fillStyle="white",this.context.rect(200,70,60,60),this.context.fill(),this.context.drawImage(this.img_2,200,70,60,60),this.context.fillStyle="black",this.context.fillRect(228,130,5,130),this.context.closePath()}drowLeftHand(){this.context.beginPath(),this.context.fillStyle="white",this.context.rect(200,70,60,60),this.context.fill(),this.context.drawImage(this.img_3,200,70,60,60),this.context.fillStyle="black",this.context.translate(228,145),this.context.rotate(45*Math.PI/180),this.context.translate(-228,-145),this.context.fillRect(228,145,5,100),this.context.closePath(),this.context.setTransform(1,0,0,1,0,0)}drowRightHand(){this.context.beginPath(),this.context.fillStyle="white",this.context.rect(200,70,60,60),this.context.fill(),this.context.drawImage(this.img_4,200,70,60,60),this.context.fillStyle="black",this.context.translate(228,145),this.context.rotate(310*Math.PI/180),this.context.translate(-228,-145),this.context.fillRect(228,145,5,100),this.context.closePath(),this.context.setTransform(1,0,0,1,0,0)}drowLeftFoot(){this.context.beginPath(),this.context.fillStyle="white",this.context.rect(200,70,60,60),this.context.fill(),this.context.drawImage(this.img_5,200,70,60,60),this.context.fillStyle="black",this.context.translate(228,260),this.context.rotate(45*Math.PI/180),this.context.translate(-228,-260),this.context.fillRect(228,260,5,100),this.context.closePath(),this.context.setTransform(1,0,0,1,0,0)}drowRightFoot(){this.context.beginPath(),this.context.fillStyle="white",this.context.rect(200,70,60,60),this.context.fill(),this.context.drawImage(this.img_6,200,70,60,60),this.context.fillStyle="black",this.context.translate(228,260),this.context.rotate(310*Math.PI/180),this.context.translate(-228,-260),this.context.fillRect(228,260,5,100),this.context.closePath()}}let y={history:{0:{question:"The United States bought Alaska from which country?",answer:"RUSSIA",isAnswered:!1},1:{question:"What was the name of the Ukrainian nuclear power plant that was the site of a nuclear disaster in April 1986?",answer:"CHERNOBYL",isAnswered:!1},2:{question:"Which country hosted the 2016 Olympics?",answer:"BRAZIL",isAnswered:!1},3:{question:"Who is the king of the Olympian gods in Greek mythology?",answer:"ZEUS",isAnswered:!1},4:{question:"The Maya Empire was centered in what is now which country?",answer:"GUATEMALA",isAnswered:!1},5:{question:"During World War II, Allied troops stormed the beaches of Normandy. Which country is Normandy in?",answer:"FRANCE",isAnswered:!1},6:{question:"Greenland was a colony of which country until 1981?",answer:"DENMARK",isAnswered:!1},7:{question:"The Ptolemy dynasty ruled which ancient kingdom?",answer:"EGYPT",isAnswered:!1},8:{question:"What was the family name of the Russian rulers from the 17th century until the 1917 revolution?",answer:"ROMANOV",isAnswered:!1},9:{question:"What is the modern name for Van Diemen’s Land?",answer:"TASMANIA",isAnswered:!1}}};class x{constructor(t,e,s){this.questionContainer=document.createElement("div"),this.questionContainer.classList.add("question_container"),this.answerContainer=document.createElement("div"),this.answerContainer.classList.add("answer_container"),this.questions=y[e],t.appendChild(this.questionContainer),t.appendChild(this.answerContainer),this.countQuestions=0,this.answersLettersNodes=[],this.pushedKeys=[],this.correctLetters=0,this.currentQuestion,this.countQuestions=s}askQuestion(){if(this.countQuestions<11){this.pushedKeys=[],this.correctLetters=0;let t=this.getRandomQuestion();this.currentQuestion=t,this.questions[t].isAnswered=!0,this.questionContainer.textContent=this.countQuestions+". "+this.questions[t].question,this.countQuestions++,this.createAnswer(t)}}getRandomQuestion(){let t=Math.floor(Math.random()*10);return this.questions[t].isAnswered?this.getRandomQuestion():t}createAnswer(t){this.answersLettersNodes.forEach(e=>{this.answerContainer.removeChild(e)}),this.answersLettersNodes=[];for(let e=0;e<this.questions[t].answer.length;e++){let s=document.createElement("div");s.classList.add("letter"),s.textContent="_",s.dataset.correctAnswer=this.questions[t].answer[e],this.answersLettersNodes.push(s),this.answerContainer.appendChild(s)}}checkAnswer(t){let e=!1,s=!1,i=!1;return this.pushedKeys.includes(t)?s=!0:(this.pushedKeys.push(t),this.answersLettersNodes.forEach(n=>{t===n.dataset.correctAnswer.toLowerCase()&&(n.textContent=n.dataset.correctAnswer,n.classList.add("passed_question_element"),e=!0,this.correctLetters++,this.correctLetters===this.questions[this.currentQuestion].answer.length&&(i=!0))})),{isCorrect:e,alreadyPushed:s,isQuestionDone:i}}wrongAnswerAnimation(){this.answerContainer.classList.add("incorrect-answer"),setTimeout(()=>{this.answerContainer.classList.remove("incorrect-answer")},1e3)}}class k{constructor(t,e,s,i,n){this.questions=e,this.timer=s,this.livesCount=i,t.appendChild(Object.assign(this.gameInfoContainer=document.createElement("div"),{classList:["game_info"]})),this.gameInfoContainer.appendChild(Object.assign(this.questionsContainer=document.createElement("div"),{classList:["current_question"]})),this.gameInfoContainer.appendChild(Object.assign(this.timerElement=document.createElement("div"),{classList:["timer"]})),this.gameInfoContainer.appendChild(Object.assign(this.lives=document.createElement("div"),{classList:["lives"]})),this.gameInfoContainer.appendChild(Object.assign(this.muteButton=document.createElement("div"),{classList:["muteButton"]})),this.muteButton.addEventListener("click",()=>{n(),this.muteButton.classList.toggle("muted")}),this.lives.textContent=this.livesCount,this.currentQuestionArray=Array.from({length:10}).map((a,h)=>{const r=document.createElement("div");return h===this.questions&&r.classList.add("current_question_element"),h<this.questions&&h!==this.questions&&r.classList.add("passed_question_element"),h>this.questions&&r.classList.add("future_question_element"),h<this.questions?r.textContent="o":r.textContent=`${h+1}`,this.questionsContainer.appendChild(r),r}),this.timerElement.textContent=`${~~(this.timer/60)<10?"0"+~~(this.timer/60):~~(this.timer/60)} : ${this.timer%60<10?"0"+this.timer%60:this.timer%60}`,this.startTimer()}fillGameInfoContainer(){}addAnswerQuestion(){this.currentQuestionArray[this.questions].textContent="X",this.currentQuestionArray[this.questions].classList.remove("current_question_element"),this.currentQuestionArray[this.questions].classList.add("passed_question_element"),this.currentQuestionArray[this.questions+1].classList.remove("future_question_element"),this.currentQuestionArray[this.questions+1].classList.add("current_question_element"),this.questions<10?this.questions++:this.questions=0}decreaseLives(){this.livesCount--,this.lives.textContent=this.livesCount}startTimer(){setInterval(()=>{this.timerElement.textContent=`${~~(this.timer/60)<10?"0"+~~(this.timer/60):~~(this.timer/60)} : ${this.timer%60<10?"0"+this.timer%60:this.timer%60}`,this.timer++},1e3)}}class v{constructor(){l(this,"mute",()=>{this.muteSounds===!1?this.muteSounds=!0:this.muteSounds=!1});this.trueSound=new Audio("./assets/mixkit-small-win.wav"),this.falseSound=new Audio("./assets/mixkit-retro-arcade-lose.wav"),this.currentSound=null,this.muteSounds=!1}playTrueSound(){this.stopCurrentSound(),this.currentSound=this.trueSound,this.trueSound.paused&&!this.muteSounds&&this.trueSound.play()}playFalseSound(){this.stopCurrentSound(),this.currentSound=this.falseSound,this.falseSound.paused&&!this.muteSounds&&this.falseSound.play()}stopCurrentSound(){this.currentSound&&(this.currentSound.pause(),this.currentSound.currentTime=0)}}function A(){let o=document.querySelector(".main");o.innerHTML="";let t=new v,e=document.createElement("div");e.classList.add("convas_container"),o.appendChild(e);let s=new d(e);s.init();let i=1,n=document.createElement("div");n.classList.add("uestions_container");let a=new k(n,0,30,3,t.mute),h=new x(n,"history",i);o.appendChild(n),h.askQuestion(),window.addEventListener("keydown",async r=>{if(r.keyCode>=65&&r.keyCode<=90||r.keyCode>=97&&r.keyCode<=122){let c=h.checkAnswer(r.key.toLowerCase());if(c.isCorrect&&t.playTrueSound(),c.alreadyPushed)console.log("alredy pushed");else if(c.isQuestionDone){for(;e.firstChild;)e.removeChild(e.firstChild);i++,h.askQuestion(),a.addAnswerQuestion(),s=new d(e),s.init()}else c.isCorrect||(t.playFalseSound(),h.wrongAnswerAnimation(),s.drow(),s.count===6&&a.decreaseLives(),s.count===6&&a.livesCount>0&&setTimeout(()=>{for(;e.firstChild;)e.removeChild(e.firstChild);s=new d(e),s.init()},1e3),a.livesCount===0&&alert("Game over"))}})}class q{constructor(t,e,s,i){l(this,"registerNavLinks",()=>{this.linkArray.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),console.log(e.target.href);const{href:s}=e.target.href;history.pushState({},"",s),this.renderContent(e.target.pathname);const i=e.target.pathname;history.pushState({},"",i)})})});l(this,"registerBrowserBackAndForth",()=>{window.onpopstate=()=>{const t=location.pathname;this.renderContent(t)}});this.routes={"/Hangman_Game/main":{linkLabel:"/Hangman_Game/main",content:i},"/Hangman_Game/":{linkLabel:"Game",content:e},"/Hangman_Game/records":{linkLabel:"Records",content:s}},this.linkArray=t,this.registerBrowserBackAndForth(),console.log(this.linkArray)}renderInitialPage(t){console.log(t),this.renderContent(t)}renderContent(t){this.routes[t].content()}}function S(){let o=document.querySelector(".main");return o.innerHTML="Records page",!0}function _(){let o=document.querySelector(".main");return o.innerHTML="Main page",!0}document.addEventListener("DOMContentLoaded",function(){console.log("ASDASD")});let u=document.getElementById("body"),m=new p(u);m.linkInit();new L(u);let f=document.createElement("main");f.classList.add("main");u.appendChild(f);let g=new q(m.linkArray,A,S,_);g.registerNavLinks();console.log(window.location.search);g.renderInitialPage(window.location.pathname);
