/* https://github.com/developit/htm */

import { html, Component, render, useState} from '../common/standalone.mjs';

import {Basic, Dynamite, Knife, Shield} from '../svgs/style/scoreIcons.mjs';

import {Feedback, Edit} from '../svgs/0/basicIcons.mjs';


const infoDate = "2020. 4. 14. (UTC +9)";
const infoVerHM = "2.49.4.78725";
const infoVerHH = "2.49";


const sourceDataText = "Heroes Profile API";
const sourceDataLink = "https://api.heroesprofile.com";

const sourceImgText = "Heroes of the Storm Wiki";
const sourceImgLink = "https://heroesofthestorm.gamepedia.com/Heroes_of_the_Storm_Wiki";

const sourceDiffText = "Heroes of the Storm Wiki";
const sourceDiffLink ="https://heroesofthestorm.gamepedia.com/Heroes_of_the_Storm_Wiki";

const numHero = Object.keys(objHeroBasic).length;

const numTop = 13;
const adjustBarWidth = 75/5;
const adjustBarHeight = 44/7;


let cFactorSubScoresGlobal = [];

const allAttackRanges = ['Melee', 'Ranged'];
var cAttackRangesGlobal = ['Melee', 'Ranged'];
var cArButtonsGlobal = {'Melee':"on", 'Ranged':"on"};


const allRoles = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support'];
var cRolesGlobal = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support'];

var cRoleButtonsGlobal = {'Tank':"on", 'Bruiser':"on",  'Melee Assassin':"on", 'Ranged Assassin':"on",  'Healer':"on", 'Support':"on"};


const allDiffTexts = ['Very Easy', 'Easy', 'Medium', 'Hard', 'Very Hard'];
var cDiffTextsGlobal = ['Very Easy', 'Easy', 'Medium', 'Hard', 'Very Hard'];
var cDtButtonsGlobal = {'Very Easy':"on", 'Easy':"on", 'Medium':"on", 'Hard':"on", 'Very Hard':"on"
};



/* first make of point */
var listObjHeroPoint = [];
for (var iHero = 0; iHero < numHero; iHero++) {
       listObjHeroPoint.push({
         "HeroID": objHeroBasic[Object.keys(objHeroBasic)[iHero]]["HeroID"],
         "Point": 0
       })
   }

/* 모든 서브 스코어 목록 만들기 */   
let listSubScoreAll = [];
for (let iOtherScore = 1; iOtherScore < Object.keys(objHeroOtherScoreZ['Abathur']).length; iOtherScore++) {
   
   let cOtherScoreName = Object.keys(objHeroOtherScoreZ['Abathur'])[iOtherScore]
      
listSubScoreAll.push(cOtherScoreName)
}
for (let iManualScore = 1; iManualScore < Object.keys(objHeroManualScoreZ['Abathur']).length; iManualScore++) {
   
   let cManualScoreName = Object.keys(objHeroManualScoreZ['Abathur'])[iManualScore]
      
listSubScoreAll.push(cManualScoreName)
}

/* 서브스코어 수동으로 체크 (현재 17개)
console.log(listSubScoreAll.length)
console.log(listSubScoreAll)
*/

const listSsGroup1 = ["Heal", "Protect", "Assists"];

const listSsGroup2 = ["Blind", "Slow", "Silence", "Push", "Root", "Pull", "Stun"];

const listSsGroup3 = ["Unstoppable", "Transform", "Stealth", "Agility"];

/* "Go Around", "Stay Around" 
const listSsGroup4= ["Early Game", "Late Game"];
*/

const listSsGroup4 = ["Aggro", "Physical Dmg", "Global", "Camp"];



/* components */


function partStatic({cFactorSubScores, changeFss, cAttackRanges, changeAttackRanges, cRoles, changeRoles, cDiffTexts, changeDiffTexts, numRerender}) {

   function clearSubScore() {
      cFactorSubScoresGlobal=[];
      changeFss(cFactorSubScoresGlobal);
      
      let listBtnFs = document.getElementsByClassName("btnFactorScore");
      let listBtnSs = document.getElementsByClassName("btnSubScore");
      
      for (var iBtnFs=0; iBtnFs < listBtnFs.length; iBtnFs++) {
         let cBtn = listBtnFs[iBtnFs];
         cBtn.setAttribute("data-onoff", "off");
      }
      
      for (var iBtnSs=0; iBtnSs < listBtnSs.length; iBtnSs++) {
         let cBtn = listBtnSs[iBtnSs];
         cBtn.setAttribute("data-onoff", "off");
      }
   }
   

   function changeFss1(event) {
   
      var cFssEach = event.target.getAttribute('data-Score');

         var index = cFactorSubScoresGlobal.indexOf(cFssEach);
         if (index > -1) {cFactorSubScoresGlobal.splice(index, 1);}
         else { cFactorSubScoresGlobal.push(cFssEach); }
      
      changeFss(cFactorSubScoresGlobal);
      
      var cBtnOnoff = event.target.getAttribute('data-onoff');
      if (cBtnOnoff == "off") {
          event.target.setAttribute('data-onoff', "on");
      } else if (cBtnOnoff == "on") {
          event.target.setAttribute('data-onoff', "off");
      }
      
      /*
      console.log(cFactorSubScoresGlobal)
      */
   }
   
   function changeAttackRanges1(event) {
   
      var cArEach = event.target.getAttribute('data-Ar');

         var index = cAttackRangesGlobal.indexOf(cArEach);
         if (index > -1) { cAttackRangesGlobal.splice(index, 1);}
         else { cAttackRangesGlobal.push(cArEach); }
      
      changeAttackRanges(cAttackRangesGlobal);
      
      /* for button's data-onoff */
      if (cAttackRangesGlobal.includes('Melee')) {
         cArButtonsGlobal['Melee'] = "on";
      } else {
         cArButtonsGlobal['Melee'] = "off";
      }
      
      if (cAttackRangesGlobal.includes('Ranged')) {
            cArButtonsGlobal['Ranged'] = "on";
      } else {
            cArButtonsGlobal['Ranged'] = "off";
      } 
      
      
   }
   
   
   function changeRoles1(event) {
      var cRoleEach = event.target.getAttribute('data-role');
      if (cRoleEach == "All") {
         cRolesGlobal = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support']
      } else if (cRoleEach == "None") {
         cRolesGlobal = [];
      } else {
         var index = cRolesGlobal.indexOf(cRoleEach);
         if (index > -1) { cRolesGlobal.splice(index, 1);}
         else { cRolesGlobal.push(cRoleEach); }
      }
      
      
      changeRoles(cRolesGlobal);
      
      /* for button's data-onoff */
      for (var iRole = 0; iRole < allRoles.length; iRole++) {
         var cRole = allRoles[iRole];
         if (cRolesGlobal.includes(cRole)) {
            cRoleButtonsGlobal[cRole] = "on";
         } else {
            cRoleButtonsGlobal[cRole] = "off";
         }
      }

   }
   
   
   
   function changeDiffTexts1(event) {
      var cDiffTextEach = event.target.getAttribute('data-Dt');
      if (cDiffTextEach == "All") {
         cDiffTextsGlobal = allDiffTexts;
      } else if (cDiffTextEach == "None") {
         cDiffTextsGlobal = [];
      } else {
         var index = cDiffTextsGlobal.indexOf(cDiffTextEach);
         if (index > -1) { cDiffTextsGlobal.splice(index, 1);}
         else { cDiffTextsGlobal.push(cDiffTextEach); }
      }
      
      changeDiffTexts(cDiffTextsGlobal);
      
      /* for button's data-onoff */
      for (var iDiffText= 0; iDiffText < allDiffTexts.length; iDiffText++) {
         var cDiffText = allDiffTexts[iDiffText];
         if (cDiffTextsGlobal.includes(cDiffText)) {
            cDtButtonsGlobal[cDiffText] = "on";
         } else {
            cDtButtonsGlobal[cDiffText] = "off";
         }
      }

   }
   
   
   /*setInterval(changeMessage, 10000);*/
   
return html`
   <div id="Header"> 
      <div id="titleWebsite">
         STORMSCAPE
      </div>
      
   </div>
   
   <div id="Tab" >
      <div id="TabFront" >
      
      <div id="tabFeedback"> <a href="https://forms.gle/iYcMrUcJ52f8my5n6" >  
   <${Feedback} />
    </a> </div>
      
      
       <div id="tabStyle"> <a href="style.html" >  STYLE </a> </div>
       
      <div id="tabMeta"> <a href="index.html" >  META </a> </div>
      
      <div id="tabEdit"><a href="https://docs.google.com/spreadsheets/d/1B72Lrb1vVU3SjRe4f2AUbFTPdXPdRgHkMAiA_7EEXYw" >  
   <${Edit} />
    </a> </div>
      
      </div>
   </div>
   
   
<div id="SettingScore" >

<div id="setFactorScore">

   <div
   data-onoff="off"   
   data-Score="Avoid Damage"
   class="btnFactorScore"
   onClick=${changeFss1}
      > Fragile </div>
      
   <div
   data-onoff="off"   
   data-Score="Bear Damage"
   class="btnFactorScore"
   onClick=${changeFss1}
   > Tough </div>
   
   <div
   data-onoff="off"   
   data-Score="Clear Minions"
   class="btnFactorScore"
   onClick=${changeFss1}
   > Clear Minions </div>
   
   <div
   data-onoff="off"   
   data-Score="Kill Heroes"
   class="btnFactorScore"
   onClick=${changeFss1}
   > Kill Heroes </div>
   
   
</div>

<div id="setClearSubScore">

<div 
   class="clearSubScore"
   onClick=${clearSubScore}
   >
CLEAR </div>
      
<div id="setSubScore">

<div id="groupBtnSubScore1">

${listSsGroup1.map((nameScore) => html`
   <div
      data-onoff="off"   
      data-Score="${nameScore}"
      class="btnSubScore btnSubScore1"
      onClick=${changeFss1}
           
   >
      ${nameScore}
   </div>
   `)}
   
</div>

<div id="groupBtnSubScore2">
${listSsGroup2.map((nameScore) => html`
   <div
      data-onoff="off"   
      data-Score="${nameScore}"
      class="btnSubScore btnSubScore2"
      onClick=${changeFss1}
   >
      ${nameScore}
   </div>
   `)}
</div>

<div id="groupBtnSubScore3">
${listSsGroup3.map((nameScore) => html`
   <div
      data-onoff="off"   
      data-Score="${nameScore}"
      class="btnSubScore btnSubScore3"
      onClick=${changeFss1}
   >
      ${nameScore}
   </div>
   `)}
</div>

<div id="groupBtnSubScore4">
${listSsGroup4.map((nameScore) => html`
   <div
      data-onoff="off"   
      data-Score="${nameScore}"
      class="btnSubScore btnSubScore4"
      onClick=${changeFss1}
   >
      ${nameScore}
   </div>
   `)}
</div>


   
</div>

<div 
   class="clearSubScore"
   onClick=${clearSubScore}
   >
CLEAR </div>

</div>

</div>
               


<div id="SettingGroup" >


<div id="divAttackRange" >
      <div
         data-onoff="${cArButtonsGlobal['Melee']}"
         data-Ar="Melee"
         class="buttonAr"
         onClick=${changeAttackRanges1}
         > Melee </div>
      
      <div
         data-onoff="${cArButtonsGlobal['Ranged']}"
         data-Ar="Ranged"
         class="buttonAr"
         onClick=${changeAttackRanges1}
         > Ranged </div>
           
   </div>
   
   
   
<div id="divRole" >
      <div
         data-role="All"
         class="buttonRole"
         onClick=${changeRoles1}
         > All Roles </div>
      
      <div
         data-onoff="${cRoleButtonsGlobal['Tank']}"
         data-role="Tank"
         class="buttonRole"
         onClick=${changeRoles1}
         > T </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Bruiser']}"
         data-role="Bruiser"
         class="buttonRole"
         onClick=${changeRoles1}
         > B </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Melee Assassin']}"
         data-role="Melee Assassin"
         class="buttonRole"
         onClick=${changeRoles1}
         > M </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Ranged Assassin']}"
         data-role="Ranged Assassin"
         class="buttonRole"
         onClick=${changeRoles1}
         > R </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Healer']}"
         data-role="Healer"
         class="buttonRole"
         onClick=${changeRoles1}
         > H </div>
         
      <div
         data-onoff="${cRoleButtonsGlobal['Support']}"
         data-role="Support"
         class="buttonRole"
         onClick=${changeRoles1}
         > S </div>
         
      <div
         data-role="None"
         class="buttonRole"
         onClick=${changeRoles1}
      > None </div>
   </div>
   
   

<div id="divDiffText" >
      <div
         data-Dt="All"
         class="buttonDt"
         onClick=${changeDiffTexts1}
         > All Diff</div>
      
      <div
      data-onoff="${cDtButtonsGlobal['Very Easy']}"
      data-Dt="Very Easy"
      class="buttonDt"
      onClick=${changeDiffTexts1}
      > Very Easy </div>
         
      <div
      data-onoff="${cDtButtonsGlobal['Easy']}"
      data-Dt="Easy"
      class="buttonDt"
      onClick=${changeDiffTexts1}
      > E </div>
      
      <div
      data-onoff="${cDtButtonsGlobal['Medium']}"
      data-Dt="Medium"
      class="buttonDt"
      onClick=${changeDiffTexts1}
      > M </div>
   
   <div
      data-onoff="${cDtButtonsGlobal['Hard']}"
      data-Dt="Hard"
      class="buttonDt"
      onClick=${changeDiffTexts1}
   > H </div>
   
   <div
      data-onoff="${cDtButtonsGlobal['Very Hard']}"
      data-Dt="Very Hard"
      class="buttonDt"
      onClick=${changeDiffTexts1}
      > Very Hard </div>
      
         
      <div
         data-Dt="None"
         class="buttonDt"
         onClick=${changeDiffTexts1}
      > None </div>
   </div>
   
      
</div>
   
   `;}
   



function hero1({heroId, cFactorSubScores, cAttackRanges, cRoles, cDiffTexts}) {

var onoff = "on";


var cAr = objHeroBasic[heroId]['Attack Range'];

if ( cAttackRanges.includes(cAr) ) { }
else if (cAr == 'Both' && cAttackRanges == []) { 

    onoff = "off";
   }
else { onoff = "off";}


if ( cRoles.includes(objHeroBasic[heroId]['Role']) ) {}
else { onoff = "off";}

if ( cDiffTexts.includes(objHeroBasic[heroId]['DiffText']) ) {}
else { onoff = "off";}



let listSubScore2 = [];
let listSubScore1 = [];
let listSubScore0 = [];

for (let iOtherScore = 1; iOtherScore < Object.keys(objHeroOtherScoreZ[heroId]).length; iOtherScore++) {
   
   let cOtherScoreName = Object.keys(objHeroOtherScoreZ[heroId])[iOtherScore]
   let cOtherScore = objHeroOtherScoreZ[heroId][cOtherScoreName]
   
   if (cOtherScore >= 2) {
listSubScore2.push(cOtherScoreName)
      
   }
   
   else if (cOtherScore >= 1) {
listSubScore1.push(cOtherScoreName)
   } 
   
   else if (cOtherScore > 0) {
listSubScore0.push(cOtherScoreName)
   }
}


for (let iManualScore = 1; iManualScore < Object.keys(objHeroManualScoreZ[heroId]).length; iManualScore++) {
   
   let cManualScoreName = Object.keys(objHeroManualScoreZ[heroId])[iManualScore]
   let cManualScore = objHeroManualScoreZ[heroId][cManualScoreName]
   
   if (cManualScore >= 2) {
listSubScore2.push(cManualScoreName)
      
   }
   
   else if (cManualScore >= 1) {
listSubScore1.push(cManualScoreName)
      
   }
   else if (cManualScore > 0) {
listSubScore0.push(cManualScoreName)
      
   }
}
/* TT
let cTimer = objHeroFactorScoreZ[heroId]['LengthWinner']
if (cTimer <= -2) {
    listSubScore2.push("Very Early game");
}
else if (cTimer <= -1) {
    listSubScore1.push("Early Game");
}
else if (cTimer >= 2) {
    listSubScore2.push("Very Late Game");
}
else if (cTimer >= 1) {
    listSubScore1.push("Late Game");
}
*/
/*
let cShoes = objHeroFactorScoreZ[heroId]['Shoes']
if (cShoes <= -2) {
    listSubScore2.push("Stay Around Well");
}
else if (cShoes <= -1) {
    listSubScore1.push("Stay Around");
}
else if (cShoes >= 2) {
    listSubScore2.push("Go Around Well");
}
else if (cShoes >= 1) {
    listSubScore1.push("Go Around");
}
*/



for (var iFss=0; iFss < cFactorSubScores.length; iFss++) {
   var cFss = cFactorSubScores[iFss];
   if (!listSubScore1.includes(cFss) && !listSubScore2.includes(cFss)&& !listSubScore0.includes(cFss)) {
      if (cFss == "Avoid Damage") {
          if (objHeroFactorScoreZ[heroId]["Shield"] > 0) {
              onoff = "off";
          } 
      } else if (cFss == "Bear Damage") {
          if (objHeroFactorScoreZ[heroId]["Shield"] < 0.5) {
             onoff = "off";
          } 
      } else if (cFss == "Clear Minions") {
          if (objHeroFactorScoreZ[heroId]["Dynamite"] <= 0) {
             onoff = "off";
          }
      } else if (cFss == "Kill Heroes") {
          if (objHeroFactorScoreZ[heroId]["Knife"] <= 0) {
             onoff = "off";
          }
      } 
      /*
      else if (cFss == "Stay Around") {
          if (objHeroFactorScoreZ[heroId]["Shoes"] > -1) {
             onoff = "off";
          }
      } else if (cFss == "Go Around") {
          if (objHeroFactorScoreZ[heroId]["Shoes"] < 1) {
             onoff = "off";
          }
      } */
      
      /*
      else if (cFss == "Early Game") {
          if (cTimer> -1) {
             onoff = "off";
          }
      } else if (cFss == "Late Game") {
          if (cTimer < 1) {
             onoff = "off";
          }
      } 
      */
      
      else {
          onoff = "off";
      }
      
   }
}




function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'));
};

return html`
         
   <div class="divEachHero" data-onoff="${onoff}">
      
      <div 
         class="leftEachHero"
         data-role="${objHeroBasic[heroId]['Role']}"
         >
      <div 
      class="backHero"
      data-role="${objHeroBasic[heroId]['Role']}">
      
      <a href="heroes/${heroId}/talents.html">
         <img
         data-heroId="${heroId}"
         class="imgHero" 
         src="0/images/heroes/${heroId}.png"  
         />
      </a>
      
      </div>
      </div>
      
      
      
      <div class="rightEachHero">
      
      <div class="rightTopEachHero">
      
      
      
      <div class="groupScoreIcon">
      
      <${Basic} 
         cAttackRange=${objHeroBasic[heroId]["Attack Range"]}
         cDiffText=${objHeroBasic[heroId]["DiffText"]}
         />
      
         <${Shield} 
            x=${objHeroFactorScoreZ[heroId]["Shield"]}
         />
         
         <${Dynamite}
            x=${objHeroFactorScoreZ[heroId]["Dynamite"]}
         />
         <${Knife} 
            x=${objHeroFactorScoreZ[heroId]["Knife"]}
         />
         
      </div>
         
      
      
      </div>
   
   <div class="rightBottomEachHero">
   <div class="groupSubScoreIcon">
      
      ${listSubScore2.map((nameScore) => html`
   <div
      data-score="${nameScore}"
      class="divSubScore divSubScore2"
   >
      ${nameScore}
   </div>
   `)}

${listSubScore1.map((nameScore) => html`
   <div
      data-score="${nameScore}"
      class="divSubScore divSubScore1"
   >
      ${nameScore}
   </div>
   `)}
   
${listSubScore0.map((nameScore) => html`
   <div
      data-score="${nameScore}"
      class="divSubScore divSubScore0"
   >
      ${nameScore}
   </div>
   `)}
      
   </div>
   </div>
   </div>
   
   </div>
`;
}
   

function All() {

const [numRerender, setRerender] = useState(0);
function forceRerender() {
   setRerender(numRerender + 1);
}

const [point, setPoint] = useState(listObjHeroPoint);


const [cFactorSubScores, setFss] = useState([]);

function changeFss(x) {
   setFss(x);
   forceRerender();
}


const [cAttackRanges, setAttackRanges] = useState(allAttackRanges);

function changeAttackRanges(x) {
   setAttackRanges(x);
   forceRerender();
}


const [cRoles, setRoles] = useState(allRoles);

function changeRoles(x) {
   setRoles(x);
   forceRerender();
}


const [cDiffTexts, setDiffTexts] = useState(allDiffTexts);

function changeDiffTexts(x) {
   setDiffTexts(x);
   forceRerender();
}



return html`

<${partStatic}  

changeFss=${changeFss}
cFactorSubScores=${cFactorSubScores}

changeAttackRanges=${changeAttackRanges}
cAttackRanges=${cAttackRanges}

changeRoles=${changeRoles}
cRoles=${cRoles}

changeDiffTexts=${changeDiffTexts}
cDiffTexts=${cDiffTexts}

numRerender=${numRerender}
/>


<div id="divContent">
   <div id="Heroes">
   
   ${point.map((objHero, index)=> html`
   <${hero1} 
   heroId=${objHero['HeroID']} 
   
   cFactorSubScores=${cFactorSubScores}
   cAttackRanges=${cAttackRanges}
   cRoles=${cRoles}
   cDiffTexts=${cDiffTexts}
   />
   `)}
   
   </div>
</div>


`;   
}

render(html`<${All}/>`, document.body);
