/* https://github.com/developit/htm */

import { html, Component, render, useState} from 'https://beforestorm.avantwing.com/0/common/standalone.module.js';



function Basic({cAttackRange, cDiffText}) {

const widthIcon=58;
const heightIcon=24;

let descriptionAr;
let descriptionDt;

let gradientWhichAr;
let gradientWhichDt;

let colorFillAr;
let colorFillDt;

let colorFontAr ="#f8f8f8";
let colorFontOutlineAr ="#333";

let colorFontDt ="#f8f8f8";
let colorFontOutlineDt ="#333";

let sizeText = 0.9;

let cDiffStage;
if (cDiffText == "Very Hard") {
    cDiffStage = 5;
}
else if (cDiffText == "Hard") {
    cDiffStage = 4;
}
else if (cDiffText == "Medium") {
    cDiffStage = 3;
}
else if (cDiffText == "Easy") {
    cDiffStage = 2;
}
else if (cDiffText == "Very Easy") {
    cDiffStage = 1;
}


let listDiff = Array(cDiffStage).fill("0");
/* map 을 사용하기 위해! */



if (cAttackRange == "Melee") {
    descriptionAr = "Melee";
    gradientWhichAr = "#gradientMelee";
    colorFillAr = "#a02";
} 
else if (cAttackRange == "Ranged") {
    descriptionAr = "Ranged";
    gradientWhichAr = "#gradientRanged";
    colorFillAr = "#85f";
} 
else if (cAttackRange == "Both") {
    descriptionAr = "Both";
    gradientWhichAr = "#gradientBoth";
    colorFillAr = "#939";
} 



if (cDiffText == "Very Hard") {
    descriptionDt = "Very Hard";
    colorFontOutlineDt = "#444";
    gradientWhichDt = "#gradientDt5";
    colorFillDt= "#444";
} 
else if (cDiffText == "Hard") {
    descriptionDt = "Hard";
    
    colorFontOutlineDt = "#b31313";
    gradientWhichDt = "#gradientDt4";
    colorFillDt= "#c32929";
    
} 
else if (cDiffText == "Medium") {
    descriptionDt = "Medium";
    
    colorFontOutlineDt = "#e60";
    gradientWhichDt = "#gradientDt3";
    colorFillDt= "#e72";
} 
else if (cDiffText == "Easy") {
    descriptionDt = "Easy";
    
    colorFontOutlineDt = "#cb0";
    gradientWhichDt = "#gradientDt2";
    colorFillDt= "#dc0";
    
} 
else if (cDiffText == "Very Easy") {
    descriptionDt = "Very Easy";
    
    colorFontOutlineDt = "#3c0";
    gradientWhichDt ="#gradientDt1";
    colorFillDt= "#6c0";
} 
 


return html`
<div class="divBasicIcon">

<div class="divArIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 240" 

class="basicIcon"
style="height: ${heightIcon}px; width: ${widthIcon}px;">

<defs>
<linearGradient id="gradientMelee" gradientTransform="rotate(30)" >
    <stop offset="10%" stop-color="#ff0066" />
    <stop offset="90%" stop-color="#7a0000" />
</linearGradient>

<linearGradient id="gradientRanged" gradientTransform="rotate(30)" >
    <stop offset="10%" stop-color="#aa35ff" />
    <stop offset="90%" stop-color="#6666ff" />
</linearGradient>

<linearGradient id="gradientBoth" gradientTransform="rotate(30)" >
    <stop offset="20%" stop-color="#ff0066" />
    <stop offset="60%" stop-color="#7a0000" />
    
    <stop offset="70%" stop-color="#6666ff" />
    <stop offset="90%" stop-color="#aa35ff" />
</linearGradient>

</defs>

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="${colorFillAr}" stroke="" 
    d="
      M 0,120
      C 0,0 0,0 300,0
        600,0 600,0 600,120
        600,240 600,240 300,240
        0,240 0,240 0,120
    "
></path>    
    
</g></svg>

    <div
    class="textIconBasic"
    style="
    z-index:5;
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem;
    color: ${colorFontAr};
    "
    >
        ${descriptionAr}
    </div>
    </div>




<div class="divDtIcon">

    <div class="divDtIconShapes">
    
    ${listDiff.map((element) => html`

   <div
   class="shapeDtIcon"
   >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 200" 
style="height: 20px; width: 9px;">

<defs>

<linearGradient id="gradientDt1" gradientTransform="rotate(30)" >
    <stop offset="10%" stop-color="#9c0" />
    <stop offset="90%" stop-color="#3c0" />
</linearGradient>

<linearGradient id="gradientDt2" gradientTransform="rotate(30)" >
    <stop offset="10%" stop-color="#dc0" />
    <stop offset="90%" stop-color="#ea5" />
</linearGradient>

<linearGradient id="gradientDt3" gradientTransform="rotate(30)" >
    <stop offset="10%" stop-color="#e84" />
    <stop offset="90%" stop-color="#e60" />
</linearGradient>

<linearGradient id="gradientDt4" gradientTransform="rotate(30)" >
    <stop offset="10%" stop-color="#d33e3e" />
    <stop offset="90%" stop-color="#b31313" />
</linearGradient>

<linearGradient id="gradientDt5" gradientTransform="rotate(30)" >
    <stop offset="10%" stop-color="#555" />
    <stop offset="90%" stop-color="#333" />
</linearGradient>

</defs>

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="${colorFillDt}" stroke="" 
    d="
      M 0,100
      C 0,0 0,0 45,0
        90,0 90,0 90,100
        90,200 90,200 45,200
        0,200 0,200 0,100
    "
></path>    
    
</g></svg>
   </div>
   
   `)}

    </div>
    
    <div
    class="textIconBasic"
    style="
    z-index:5;
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem;
    color: ${colorFontDt};
    text-shadow: 
    1px 1px 0 ${colorFontOutlineDt},
    -1px 1px 0 ${colorFontOutlineDt},
    1px -1px 0 ${colorFontOutlineDt},
    -1px -1px 0 ${colorFontOutlineDt},
    0px 1px 0 ${colorFontOutlineDt},
    0px -1px 0 ${colorFontOutlineDt},
    -1px 0px 0 ${colorFontOutlineDt},
    1px 0px 0 ${colorFontOutlineDt};
    "
    >
        ${descriptionDt}
    </div>
    
    
    </div>


</div>
`  
}




function Dynamite({x}) {


let descriptionScore;
let gradientWhich;
let sizeIcon;
const sizeIconMax=48;

let colorFont;
let colorFontOutline;
let sizeText = 0.9;


if (x > 2.5) {
    sizeIcon = 48;
}
else if (x < -2.5) {
    sizeIcon = 0;   
}
else if (x >= -2.5 && x <=2.5) {
    sizeIcon = (x+2.5) / 5 * 48;
}


if (x >= 2) {
    descriptionScore = "clear minions best";
} 
else if (x >= 1) {
    descriptionScore = "clear minions well";
} 
else if (x > 0) {
    descriptionScore = "clear minions";
} 
else {
    descriptionScore = "";
}
    
if (x >= 0) {
    colorFont ="#f8f8f8";
    colorFontOutline ="#53b";
}    
else {
    colorFont ="";
    colorFontOutline ="";
}

gradientWhich = "#gradientDynamite";


return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIcon}px; width: ${sizeIcon}px; z-index:3;">

<defs>
<linearGradient id="gradientDynamite" gradientTransform="rotate(30)" >
    <stop offset="10%" stop-color="#75d" />
    <stop offset="90%" stop-color="#42a" />
</linearGradient>
</defs>

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<!-- fill="url("#gradientKnife")" -->
<path fill="#53b" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>

    <div
    class="textIcon"
    
    style="
    z-index:5;
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem;
    color: ${colorFont};
    text-shadow: 
    1px 1px 0 ${colorFontOutline},
    -1px 1px 0 ${colorFontOutline},
    1px -1px 0 ${colorFontOutline},
    -1px -1px 0 ${colorFontOutline},
    0px 1px 0 ${colorFontOutline},
    0px -1px 0 ${colorFontOutline},
    -1px 0px 0 ${colorFontOutline},
    1px 0px 0 ${colorFontOutline};
    "
    >
        ${descriptionScore}
    </div>
    
<!--
<svg xmlns="http://www.w3.org/2000/svg" 
viewBox="0 0 500 500"
class="scoreIcon"
style="height: ${sizeIconMax-4}px; width: ${sizeIconMax-4}px; z-index:0;">
 
<g class="" transform="scale(0.94, 0.94) translate(15,15)" style="touch-action: none;">

<path  
    fill="#f8f8f8"
    stroke="#64c" 
    stroke-width="20" 
    
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>
-->


    
</div>
`  
}



function Knife({x}) {

let descriptionScore;
let gradientWhich;
let sizeIcon;
const sizeIconMax=48;

let colorFont;
let colorFontOutline;
let sizeText = 0.9;


if (x > 2.5) {
    sizeIcon = 48;
}
else if (x < -2.5) {
    sizeIcon = 0;   
}
else if (x >= -2.5 && x <=2.5) {
    sizeIcon = (x+2.5) / 5 * 48;
}


if (x >= 2) {
    descriptionScore = "kill heroes best";
} 
else if (x >= 1) {
    descriptionScore = "kill heroes well";
} 
else if (x > 0) {
    descriptionScore = "kill heroes";
} 
else {
    descriptionScore = "";
}
    
if (x >= 0) {
    colorFont ="#f8f8f8";
    colorFontOutline ="#c22";
}    
else {
    colorFont ="";
    colorFontOutline ="";
}



return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIcon}px; width: ${sizeIcon}pxpx;">

<defs>
<linearGradient id="gradientKnife" gradientTransform="rotate(30)" >
    <stop offset="10%" stop-color="#e33" />
    <stop offset="90%" stop-color="#b00" />
</linearGradient>
</defs>

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<!-- fill="url("#gradientKnife")" -->

<path fill="#c22" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>

    <div
    class="textIcon"
    style="
    z-index:5;
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem;
    color: ${colorFont};
        text-shadow: 
    1px 1px 0 ${colorFontOutline},
    -1px 1px 0 ${colorFontOutline},
    1px -1px 0 ${colorFontOutline},
    -1px -1px 0 ${colorFontOutline},
    0px 1px 0 ${colorFontOutline},
    0px -1px 0 ${colorFontOutline},
    -1px 0px 0 ${colorFontOutline},
    1px 0px 0 ${colorFontOutline};
    "
    >
        ${descriptionScore}
    </div>

</div>
`  
}




function Shield({x}) {

let descriptionScore;
let gradientWhich;
let sizeIcon;
const sizeIconMax=48;

let colorFont;
let colorFontOutline;

let sizeText = 0.9;

if (x > 2.5) {
    sizeIcon = 0;
}
else if (x < -2.5) {
    sizeIcon = 48;
}
else if (x <= 2.5 && x >= -2.5) {
    sizeIcon = (2.5-x) / 5 * 48;
}



if (x <= -1) {
    descriptionScore = "very fragile body";
}
else if (x <= 0) {
    descriptionScore = "fragile body";
}
else if (x >= 1.5) {
    descriptionScore = "very tough body";
}
else if (x >= 0.5) {
    descriptionScore = "tough body";
}
else if (x<0.5 && x>0) {
    descriptionScore = "";
}


if (x >= 0) {
    colorFont = "#f8f8f8";
    colorFontOutline = "#446";
} 
else if (x<0) {
    colorFont = "#446";
    colorFontOutline = "#f8f8f8";
}


gradientWhich = "#gradientShield";

return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIcon}px; width: ${sizeIcon}px; z-index:1;">

<defs>
<linearGradient id="gradientShield" gradientTransform="rotate(30)" >
    <stop offset="10%" stop-color="#aab" />
    <stop offset="90%" stop-color="#334" />
</linearGradient>
</defs>


<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="#f8f8f8" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIconMax}px; width: ${sizeIconMax}px; z-index:0;">


<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<!-- fill="url("${gradientWhich}")" -->

<path fill="#446" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>
    <div
    class="textIcon"
    style="
    z-index:5;
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem;
    color: ${colorFont};
        text-shadow: 
    1px 1px 0 ${colorFontOutline},
    -1px 1px 0 ${colorFontOutline},
    1px -1px 0 ${colorFontOutline},
    -1px -1px 0 ${colorFontOutline},
    0px 1px 0 ${colorFontOutline},
    0px -1px 0 ${colorFontOutline},
    -1px 0px 0 ${colorFontOutline},
    1px 0px 0 ${colorFontOutline};
    "
    >
        ${descriptionScore}
    </div>

</div>
`  
}



function Timer({x}) {

let descriptionScore;
let gradientWhich;
let positionIcon;
const sizeIconMax=48;

let colorFont = "#333";
let colorFontOutline ="#f8f8f8";
let sizeText = 0.9;


if (x > 2.5) {
    positionIcon = 33;
}
else if (x < -2.5) {
    positionIcon = 3;
}
else if (x >= -2.5 && x <=2.5) {
    positionIcon = 3 + (x+2.5) / 5 * 33;
}


if (x >= 2) {
    descriptionScore = "clear minions best";
} 
else if (x >= 1) {
    descriptionScore = "clear minions well";
} 
else if (x > 0) {
    descriptionScore = "clear minions";
} 
else {
    descriptionScore = "";
}




if (x <= -1.5) {
    descriptionScore = "very early game";
}
else if (x <= -0.5) {
    descriptionScore = "early game";
}
else if (x >= 1.5) {
    descriptionScore = "very late game";
}
else if (x >= 0.5) {
    descriptionScore = "late game";
}
else if (x<0.5 && x>-0.5) {
    descriptionScore = "";
}

gradientWhich = "#gradientTimer";

return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 125 500" 

class=""
style="height: 44px; width: 11px; z-index:2;
position: absolute;
left:${positionIcon}px;
 ">
 
 <defs>
 <linearGradient id="gradientTimer">
    <stop offset="10%" stop-color="#567" />
    <stop offset="90%" stop-color="#444" />
</linearGradient>
 </defs>
 
 

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="url("${gradientWhich}")" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 62.5,0
        125,0 125,0 125,250
        125,500 125,500 62.5,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIconMax -4}px; width: ${sizeIconMax -4}px; z-index:1;">

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="#f8f8f8" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>


<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIconMax}px; width: ${sizeIconMax}px; z-index:0;">


<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="url("${gradientWhich}")" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>


    <div
        class="textIcon"
        style="
    font-size: ${sizeText}rem; 
    line-height: ${sizeText*0.9}rem; 
    z-index:5;
    color: ${colorFont};
    text-shadow: 
    1px 1px 0 ${colorFontOutline},
    -1px 1px 0 ${colorFontOutline},
    1px -1px 0 ${colorFontOutline},
    -1px -1px 0 ${colorFontOutline},
    0px 1px 0 ${colorFontOutline},
    0px -1px 0 ${colorFontOutline},
    -1px 0px 0 ${colorFontOutline},
    1px 0px 0 ${colorFontOutline};
    "
    >
        ${descriptionScore}
    </div>

</div>
`  
}


function Shoes({x}) {

let descriptionScore;
let gradientWhich;
let sizeIcon;
const sizeIconMax=48;

let colorFont;
let colorFontOutline;
let sizeText = 0.9;

if (x > 2.5) {
    sizeIcon = 48;
}
else if (x < -2.5) {
    sizeIcon = 0;   
}
else if (x >= -2.5 && x <=2.5) {
    sizeIcon = (x+2.5) / 5 * 48;
}


if (x <= -1.5) {
    descriptionScore = "stay around well";
}
else if (x <= -0.5) {
    descriptionScore = "stay around";
}
else if (x >= 1.5) {
    descriptionScore = "go around well";
}
else if (x >= 0.5) {
    descriptionScore = "go around";
}
else if (x<0.5 && x>-0.5) {
    descriptionScore = "";
}

if (x >= 0) {
    colorFont ="#f8f8f8";
    colorFontOutline ="#333";
} 
else if (x<0) {
    colorFont ="#333";
    colorFontOutline ="#f8f8f8";
}

gradientWhich = "#gradientShoes";

return html`
<div class="divScoreIcon">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" 

class="scoreIcon"
style="height: ${sizeIcon}px; width: ${sizeIcon}pxpx;">

<defs>
<linearGradient id="gradientShoes">
    <stop offset="10%" stop-color="#567" />
    <stop offset="90%" stop-color="#444" />
</linearGradient>
</defs>

<g class="" transform="scale(1,1) translate(0,0)" style="touch-action: none;">

<path fill="url("${gradientWhich}")" stroke="" 
    d="
      M 0,250
      C 0,0 0,0 250,0
        500,0 500,0 500,250
        500,500 500,500 250,500
        0,500 0,500 0,250
    "
></path>    
    
</g></svg>

    <div
        class="textIcon"
        style="
        font-size: ${sizeText}rem; 
        line-height: ${sizeText*0.9}rem;
        color: ${colorFont};
        text-shadow: 
    1px 1px 0 ${colorFontOutline},
    -1px 1px 0 ${colorFontOutline},
    1px -1px 0 ${colorFontOutline},
    -1px -1px 0 ${colorFontOutline},
    0px 1px 0 ${colorFontOutline},
    0px -1px 0 ${colorFontOutline},
    -1px 0px 0 ${colorFontOutline},
    1px 0px 0 ${colorFontOutline};
    "
    >
        ${descriptionScore}
    </div>

</div>
`  
}





export {Basic, Dynamite, Knife, Shield};
