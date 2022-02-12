function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML='💜';
    heart.style.left = Math.random()*100+"vw";
    document.body.appendChild(heart);
}
setInterval(createHeart,100);

setTimeout(()=>{
    heart.remove();
},5)