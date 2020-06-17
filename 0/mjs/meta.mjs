
import { html, Component, render, useState} from '../common/standalone.mjs';
//import { html, Component, render, useState} from './0/common/standalone.module.js';

import {Feedback, Edit} from '../svgs/0/basicIcons.mjs';


new ClipboardJS('.btn');



/*
return html`
   <div id="divMessage">
   ❕<a href="https://api.heroesprofile.com/upload" > Please Upload Replays </a>❕
   </div>
`;
*/


const infoDate = "2020. 5. 3. (UTC +9)";
const infoVerHM = "v2.50.0.79155";
const infoVerHH = "v2.50";

function Message() {
return html`
   <div id="divMessage">
   No More Updates, Thank You
   </div>
`;
}



const versionEntireMap = ""; /*  (new version) */
const versionEachMap = ""; /*  (old version) */
const widthMap = 240; /* 240 or 270 */


const sourceDataText = "Heroes Profile API";
const sourceDataLink = "https://api.heroesprofile.com";

const sourceImgText = "Heroes of the Storm Wiki";
const sourceImgLink = "https://heroesofthestorm.gamepedia.com/Heroes_of_the_Storm_Wiki";


const sourceSvgText = "SVG REPO";
const sourceSvgLink ="https://svgrepo.com";




const numHero = Object.keys(objHeroBasic).length;
const numTop = 13;
const adjustBarWidth = 75/5;
const adjustBarHeight = 44/7;

const allRoles = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support'];
var cRolesGlobal = ['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support'];

var cRoleButtonsGlobal = {'Tank':"on", 'Bruiser':"on",  'Melee Assassin':"on", 'Ranged Assassin':"on",  'Healer':"on", 'Support':"on"};

/* first make of point */
var listObjHeroPoint = [];
for (var iHero = 0; iHero < numHero; iHero++) {
       listObjHeroPoint.push({
         "HeroID": objHeroBasic[Object.keys(objHeroBasic)[iHero]]["HeroID"],
         "Point": 0
       })
   }
   

/* components */

function partStatic({changeRGW, cRatioGW, changeRED, cRatioED, changeRoles, cRoles, changeMap, cMap, point, numRerender}) {
   
   
   /*
   not smooth
   const [iMessage, setMessage] = useState(0);
   
   function changeMessage() {
      if (iMessage == messages.length -1) {k = 0;} else {k+=1;}
      setMessage(k);
   }
   */
   

   
   

   function changeRGW1(event) {
      changeRGW(event.target.value);
   }
   function changeRED1(event) {
      changeRED(event.target.value);
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
   
   
   
   function changeMap1(event) {
      changeMap(event.target.value);
   }
   
   
   /*setInterval(changeMessage, 10000);*/
   
return html`
   <div id="Header"> 
      <div id="titleWebsite">
         STORMSCAPE
      </div>
      
   <${Message}/>
      
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
   
   
   <div id="Setting" >
      
      <div>SORT: What is more important?</div>
      
      <div>
      <div>Number <br/> of Games</div>
      <div><input type="range" value=${cRatioGW} onChange=${changeRGW1}/></div>
      <div> WinRate</div>
      </div>
          
      <div>
      <div> difficulty: <br /> Easy </div>
      <div><input type="range" value=${cRatioED} onChange=${changeRED1}/></div>
      <div>Hard</div>
      </div>
         
   </div>
      

   <div id="divRole" >
      <div
         data-role="All"
         class="buttonRole"
         onClick=${changeRoles1}
         > All </div>
      
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
   
      
   <div id="divMap">
      <select id="selectMap" value=${cMap} onChange=${changeMap1}
      style="width:${widthMap}px;"
      
      >
      <option value="All" selected >All Battlegrounds ${versionEntireMap} </option>
      <option value="Alterac Pass"> Alterac Pass ${versionEachMap}</option>
      <option value="Battlefield of Eternity">Battlefield of Eternity ${versionEachMap}</option>
      <option value="Braxis Holdout">Braxis Holdout ${versionEachMap}</option>
      <option value="Cursed Hollow">Cursed Hollow ${versionEachMap}</option>
      <option value="Dragon Shire">Dragon Shire ${versionEachMap}</option>
      <option value="Hanamura Temple">Hanamura Temple ${versionEachMap}</option>
      <option value="Infernal Shrines">Infernal Shrines ${versionEachMap}</option>
      <option value="Sky Temple">Sky Temple ${versionEachMap}</option>
      <option value="Tomb of the Spider Queen">Tomb of the Spider Queen ${versionEachMap}</option>
      <option value="Towers of Doom">Towers of Doom ${versionEachMap}</option>
      <option value="Volskaya Foundry">Volskaya Foundry ${versionEachMap}</option>
      </select>
   </div>
`;
}


function hero1({heroId, cMap, focusHero, cRoles}) {

if ( cRoles.includes(objHeroBasic[heroId]['Role']) ) { var onoff = "on";}
else { var onoff = "off";}

var numWidth = (objHeroMap[cMap][heroId]['zWin'] + 2) * adjustBarWidth;
var numHeight = (objHeroMap[cMap][heroId]['zGame'] + 2) * adjustBarHeight;

if (numWidth < 2) {numWidth = 2;}
if (numHeight < 2) {numHeight = 2;}

var widthBar50 = 2;
var numLeft50 = 2 * adjustBarWidth - widthBar50 / 2;

var numWinRate = objHeroMap[cMap][heroId]['WinRate']
var numTryRate = objHeroMap[cMap][heroId]['GameRate']



function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'));
};

return html`
         
   <div data-onoff="${onoff}">
      <div class="first divRank"> 1st </div>
      
      <div 
      class="first backHero"
      data-role="${objHeroBasic[heroId]['Role']}">
      <img
      data-heroId="${heroId}"
      
      class="imgHero" 
      src="0/images/heroes/${heroId}.png" 
      onClick=${focusHero1} 
      />
         </div>
         
      <div class="first groupBar">
         <div style="width:${numWidth}px; height:${numHeight}px;" class="barMain"> </div>
         <div style="left:${numLeft50}px;" class="bar50"></div>
      </div>
      
      
      <div class="first groupLabel">
         <div> ↔ WinRate: </div>
         <div> ↕ Popularity: </div>
      </div>
      
      <div class="first groupNumber">
         <div> ${numWinRate}% </div>
         <div> ${numTryRate}% </div>
      </div>
         
   </div>
`;
}


function heroTop({heroId, cMap,focusHero, cRoles}) {

var onoff;
if ( cRoles.includes(objHeroBasic[heroId]['Role']) ) { onoff = "on";}
else { onoff = "off";}

/* 허용된총너비가 6*std(1 여유해서 7), 중앙이 평균점 */

var numWidth = (objHeroMap[cMap][heroId]['zWin'] + 2) * adjustBarWidth;
var numHeight = (objHeroMap[cMap][heroId]['zGame'] + 2) * adjustBarHeight;

var widthBar50 = 2;
var numLeft50 = 2 * adjustBarWidth - widthBar50 / 2;

var numWinRate = objHeroMap[cMap][heroId]['WinRate']
var numTryRate = objHeroMap[cMap][heroId]['GameRate']

if (numWidth < 2) {numWidth = 2;}
if (numHeight < 2) {numHeight = 2;}



function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'));
};

return html`
         
   <div data-onoff="${onoff}">
      <div 
      class="backHero"
      data-role="${objHeroBasic[heroId]['Role']}">
      <img
      data-heroId="${heroId}"
      data-role="${objHeroBasic[heroId]['Role']}"
      
      class="imgHero" 
      src="0/images/heroes/${heroId}.png" 
      onClick=${focusHero1} 
      />
         </div>
         
      <div class="groupBar">
         <div style="width:${numWidth}px; height:${numHeight}px;" class="barMain"> </div>
         <div style="left:${numLeft50}px;" class="bar50"></div>
      </div>
         
      <div class="groupNumber">
         <div> ${numWinRate}% </div>
         <div> ${numTryRate}% </div>
      </div>
         
   </div>
`;
}


function heroOthers({heroId,focusHero, cRoles}) {

var onoff;
if ( cRoles.includes(objHeroBasic[heroId]['Role']) ) { onoff = "on";}
else { onoff = "off";}



function focusHero1(event) {
   focusHero(event.target.getAttribute('data-heroId'));
};
return html`
         
   <div data-onoff="${onoff}">
      <div 
      class="backHero"
      data-role="${objHeroBasic[heroId]['Role']}">
      <img
      data-heroId="${heroId}"
      data-role="${objHeroBasic[heroId]['Role']}"
      
      class="imgHero" 
      src="0/images/heroes/${heroId}.png" 
      onClick=${focusHero1} 
      />
         </div>
         
   </div>
`;
}


function Heroes({point, cMap, focusHero, cRoles, numRerender}) {
var pointTop = point.slice(1, numTop);
var pointOthers = point.slice(numTop,);



return html`
   <div id="Heroes">
      
      <div id="heroes1">
      <${hero1} heroId=${point[0]['HeroID']} cMap=${cMap} focusHero=${focusHero} cRoles=${cRoles}/>
      </div>
      
       
      <div id="heroesTop"> 
      
${pointTop.map((objHero, index)=> html`
   <${heroTop} heroId=${objHero['HeroID']} cMap=${cMap} focusHero=${focusHero} cRoles=${cRoles}/>
`)}
      </div>
      
      <div id="heroesOthers"> 
         ${pointOthers.map((objHero, index)=> html`
   <${heroOthers} heroId=${objHero['HeroID']} focusHero=${focusHero} cRoles=${cRoles}/>
`)}
      </div>
   </div>
`;
}

function Card({focusHero, fHeroId, cMap, point, visibleF}) {

var numWinRate = objHeroMap[cMap][fHeroId]['WinRate'];
var numTryRate = objHeroMap[cMap][fHeroId]['GameRate'];
var numTrys = Math.round(objHeroMap[cMap][fHeroId]['Trys']);

var numRank = point.findIndex(x => x['HeroID'] == fHeroId) + 1;

function closeCard() {
   focusHero("None");
};

if (visibleF) {
   return html`
   <div id="cardFocus">
      
      <div id="cardLeft"> 
      
      <div id="closeCard" onClick=${closeCard} > close </div>
      
      <div>
      <img id="imgHeroCard" src="0/images/heroes/${fHeroId}.png" /> 
      <div> #${numRank} </div>
      </div>
      
      </div>
      
      <div id="cardMid"> 
      <div> ${objHeroBasic[fHeroId]['HeroName']} </div>
      <div data-role="${objHeroBasic[fHeroId]['Role']}">  ${objHeroBasic[fHeroId]['Role']} </div>
      <div>  ${objHeroBasic[fHeroId]['DiffText']}  </div>   
      <div> WinRate: ${numWinRate}% </div> 
      <div> Play+Ban: ${numTryRate}% (${numTrys}) </div> 
      </div>

      
      <div id="cardRight"> 
         
         <div><a href="heroes/${fHeroId}/talents.html">Talents</a></div>
         <div><a href="heroes/${fHeroId}/builds.html">Builds</a></div>
         
         <div><a href="heroes/${fHeroId}/matchups.html">Match-Ups</a></div>
         <div><a href="heroes/${fHeroId}/maps.html">Maps</a></div>
         
      </div>
      
   </div>
   `;
   }

else {return html``;}
}


function Data() {
   return html`
   
   <div id="divInfo" >
      <div>
      <div> update:  </div> 
      <div> data: </div>
      <div> version: </div>
      <div>  (partially) </div>
      <div> images: </div>
      <div> svgs: </div>
      </div> 
   
      <div>
      <div> ${infoDate} </div> 
      <div> <a href="${sourceDataLink}">${sourceDataText}</a></div>
      <div> ${infoVerHM} </div>
      <div> ${infoVerHH}</div>
      <div> <a href="${sourceImgLink}">${sourceImgText}</a></div>
      
      <div> <a href="${sourceSvgLink}">${sourceSvgText}</a></div> 
      
      </div>
   </div>
   
   `

}

function All() {

const [numRerender, setRerender] = useState(0);
function forceRerender() {
   setRerender(numRerender + 1);
}


const [visibleF, setVisibleF] = useState(false);

const [cRatioGW, setRGW] = useState(50);
const [cRatioED, setRED] = useState(50);

const [cMap, setMap] = useState('All');

const [cRoles, setRoles] = useState(['Tank', 'Bruiser', 'Melee Assassin', 'Ranged Assassin', 'Healer', 'Support']);


const [point, setPoint] = useState(listObjHeroPoint);


function updatePoint() {
   
   
   for (var iHero = 0; iHero < numHero; iHero++) {
       var cHero = listObjHeroPoint[iHero]['HeroID']
       
       listObjHeroPoint[iHero]['Point'] =
           (100 - cRatioGW) * objHeroMap[cMap][cHero]['zGame']
           + cRatioGW * objHeroMap[cMap][cHero]['zWin']
           + (cRatioED - 50) * objHeroBasic[cHero]["DiffZ"]
   }
   
   listObjHeroPoint = listObjHeroPoint.sort((a, b) => (a.Point > b.Point) ? -1 : 1);
   
   setPoint(listObjHeroPoint);
   
};



function changeMap(x){
   setMap(x); updatePoint();}
   
function changeRoles(x) {
   setRoles(x);
   forceRerender();
}

   
function changeRGW(x){setRGW(x); updatePoint();}
function changeRED(x){setRED(x); updatePoint();}

updatePoint();

const [fHeroId, setFocus] = useState("Alarak");

function focusHero(x) {   
   if (x == "None") {
      setVisibleF(false);
   } else {
      setFocus(x);
      setVisibleF(true);
   }
}


return html`

<${partStatic} 
changeMap=${changeMap} cMap=${cMap} 
changeRGW=${changeRGW} cRatioGW=${cRatioGW}
changeRED=${changeRED} cRatioED=${cRatioED}
point=${point} 
changeRoles=${changeRoles}
cRoles=${cRoles}
numRerender=${numRerender}
/>

<div id="divContent">
<${Heroes} 
point=${point} 
cMap=${cMap}  
focusHero=${focusHero} 
cRoles=${cRoles}
numRerender=${numRerender}
/>

<${Data} />
</div>

<${Card} focusHero=${focusHero} fHeroId=${fHeroId} point=${point} cMap=${cMap} visibleF=${visibleF} />

`;   
}

render(html`<${All}/>`, document.body);


