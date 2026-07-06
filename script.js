// ===========================
// Typing Effect
// ===========================

function typeWriter(id, text, speed = 45) {
    let i = 0;
    const element = document.getElementById(id);

    if (!element) return;

    element.innerHTML = "";

    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, speed);
        }
    }

    typing();
}

// ===========================
// Floating Hearts
// ===========================

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "❤";

    heart.classList.add("heart");

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (15 + Math.random() * 18) + "px";

    heart.style.animationDuration = (5 + Math.random() * 5) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 9000);

}

setInterval(createHeart, 500);

// ===========================
// Sakura Petals
// ===========================

function createPetal(){

    const petal = document.createElement("div");

    petal.innerHTML = "🌸";

    petal.classList.add("petal");

    petal.style.left = Math.random()*100+"vw";

    petal.style.animationDuration = (8+Math.random()*5)+"s";

    petal.style.fontSize = (18+Math.random()*10)+"px";

    document.body.appendChild(petal);

    setTimeout(()=>{

        petal.remove();

    },13000);

}

setInterval(createPetal,900);

// ===========================
// Sparkles
// ===========================

document.addEventListener("click", function(e){

    for(let i=0;i<10;i++){

        const sparkle=document.createElement("div");

        sparkle.classList.add("sparkle");

        sparkle.style.left=e.clientX+"px";

        sparkle.style.top=e.clientY+"px";

        sparkle.style.animationDelay=(Math.random()*0.2)+"s";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },1200);

    }

});
