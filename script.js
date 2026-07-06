/*======================================
      PERIOD LOVE WEBSITE
      SCRIPT.JS - PART 1
======================================*/


/* ---------- FLOATING HEARTS ---------- */

function createHeart(){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.fontSize=(16+Math.random()*20)+"px";

heart.style.animationDuration=(5+Math.random()*4)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},9000);

}

setInterval(createHeart,700);



/* ---------- SAKURA PETALS ---------- */

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(7+Math.random()*5)+"s";

petal.style.fontSize=(18+Math.random()*8)+"px";

document.body.appendChild(petal);

setTimeout(()=>{

petal.remove();

},12000);

}

setInterval(createPetal,900);



/* ---------- FLOATING BUBBLES ---------- */

function createBubble(){

const bubble=document.createElement("div");

bubble.className="bubble";

let size=10+Math.random()*20;

bubble.style.width=size+"px";

bubble.style.height=size+"px";

bubble.style.left=Math.random()*100+"vw";

bubble.style.animationDuration=(10+Math.random()*6)+"s";

document.body.appendChild(bubble);

setTimeout(()=>{

bubble.remove();

},15000);

}

setInterval(createBubble,1400);



/* ---------- CLICK SPARKLES ---------- */

document.addEventListener("click",function(e){

for(let i=0;i<8;i++){

const sparkle=document.createElement("div");

sparkle.className="sparkle";

sparkle.style.left=(e.clientX+(Math.random()*40-20))+"px";

sparkle.style.top=(e.clientY+(Math.random()*40-20))+"px";

document.body.appendChild(sparkle);

setTimeout(()=>{

sparkle.remove();

},1000);

}

});



/* ---------- PAGE FADE ---------- */

window.addEventListener("load",()=>{

document.body.style.opacity="1";

});



/* ---------- NEXT PAGE ---------- */

function next(page){

document.body.style.transition=".5s";

document.body.style.opacity="0";

setTimeout(()=>{

window.location.href=page;

},500);

}
/*======================================
      SCRIPT.JS - PART 2
======================================*/


/* ---------- PAIN SLIDER ---------- */

const painMessages={

1:"😊 That's a relief! Teddy is happy you're feeling okay today. ❤️",

2:"🌸 Just a tiny bit. Remember to drink some water!",

3:"💖 Hopefully it stays this low. Sending you gentle hugs!",

4:"🧸 Teddy thinks you deserve a cozy blanket today.",

5:"🥹 Right in the middle... Please don't overwork yourself.",

6:"❤️ Your body is working hard. Take lots of rest today.",

7:"🌷 Teddy wishes he could bring you hot chocolate and hugs.",

8:"🥺 That's really painful... I'm sending you the biggest cuddle.",

9:"😭 Oh no... Juzer would definitely tell you to rest and let him spoil you today.",

10:"💞 Maximum teddy hugs activated! You're so strong, and Juzer is incredibly proud of you. ❤️"

};



function updatePain(value){

const number=document.getElementById("painValue");

const text=document.getElementById("painText");

if(!number || !text) return;

number.innerHTML=value;

text.innerHTML=painMessages[value];

}



/* ---------- HEART BURST ---------- */

function heartBurst(){

for(let i=0;i<40;i++){

const heart=document.createElement("div");

heart.innerHTML="💖";

heart.style.position="fixed";

heart.style.left="50%";

heart.style.top="55%";

heart.style.fontSize=(18+Math.random()*20)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

const x=(Math.random()*500)-250;

const y=(Math.random()*500)-250;

heart.animate([

{

transform:"translate(0,0) scale(.5)",

opacity:1

},

{

transform:`translate(${x}px,${y}px) scale(1.5)`,

opacity:0

}

],{

duration:1500,

easing:"ease-out"

});

document.body.appendChild(heart);

setTimeout(()=>heart.remove(),1500);

}

}



/* ---------- HUG ---------- */

function sendHug(){

const msg=document.getElementById("hugMessage");

if(msg){

msg.innerHTML="🧸❤️ Teddy gave you the warmest hug!<br><br>Juzer loves you more than words can say. 💖";

}

heartBurst();

}



/* ---------- LETTER EFFECT ---------- */

function revealLetter(){

const lines=document.querySelectorAll(".letter p");

if(lines.length===0) return;

lines.forEach(line=>{

line.style.opacity="0";

});

lines.forEach((line,index)=>{

setTimeout(()=>{

line.style.transition=".8s";

line.style.opacity="1";

},index*700);

});

}
