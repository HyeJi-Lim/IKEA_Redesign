const menuTag = document.querySelector(".toggle-menu")
const asideTag = document.querySelector("aside")
const wrapTag = document.querySelector("div.wrap")

menuTag.addEventListener("click", function(){
    asideTag.classList.toggle("open")
    wrapTag.classList.toggle("open")
    
    if(asideTag.classList.contains("open")){
        console.log("open")
        menuTag.innerHTML = '<img src="close.png">'
    }else{
        console.log("close")
        menuTag.innerHTML = '<img src="menu.png">'
    }
})

let observer = new IntersectionObserver((e)=>{
    e.forEach((T)=>{
        if(T.isIntersecting){
            T.target.style.opacity = 1;
        }else{
            T.target.style.opacity = 0;
        }
    })
})

const title = document.querySelectorAll('.title')
observer.observe(title[0])

let ob = new IntersectionObserver((e) =>{
    e.forEach((I)=>{
        if(I.isIntersecting){
            I.target.style.opacity = 1;
        }else{
            I.target.style.opacity = 0;
        }
    })
})

const info2 = document.querySelectorAll(".info2 p")
ob.observe(info2[0])

const title2 = document.querySelectorAll('.title2')
observer.observe(title2[0])

const photoinfo = document.querySelectorAll('.photos-info')
observer.observe(photoinfo[0])

const sofaImg1Tag = document.querySelector(".photowrap > img:nth-child(1)");
const sofaImg2Tag = document.querySelector(".photowrap > img:nth-child(2)");
const sofaImg3Tag = document.querySelector(".photowrap > img:nth-child(3)");
const sofaImg4Tag = document.querySelector(".photowrap > img:nth-child(4)");
const sofaImg5Tag = document.querySelector(".photowrap > img:nth-child(5)");

sofaImg1Tag.addEventListener("mouseover", function(){
    sofaImg2Tag.style.right = "60%";
    sofaImg2Tag.style.opacity = "1";
    sofaImg3Tag.style.right = "75%";
    sofaImg3Tag.style.opacity = "1";
    sofaImg4Tag.style.right = "30%";
    sofaImg4Tag.style.opacity = "1";
    sofaImg5Tag.style.right = "15%";
    sofaImg5Tag.style.opacity = "1";
})

sofaImg1Tag.addEventListener("mouseleave", function(){
    sofaImg2Tag.style.opacity = "0";
    sofaImg3Tag.style.opacity = "0";
    sofaImg4Tag.style.opacity = "0";
    sofaImg5Tag.style.opacity = "0";
})

const photoWrap = document.querySelector("div.photo-wrap");
const photos = document.querySelectorAll("div.photo-wrap img");

photoWrap.addEventListener("mouseover", function(){
  
    photos.forEach(photo => {
  
      let randomX = Math.round(Math.random()*20)- 10; 
      let randomY = Math.round(Math.random()*20)- 10; 
  
      photo.style.transform = `translate(${randomX}px, ${randomX}px) scale(0.95)`;
    })
  
  })
  
  photoWrap.addEventListener("mouseout", function(){
  
    photos.forEach(photo =>{
      photo.style.transform = "translate(0, 0)";
    })
  })
  
let clickNum = 0

photoWrap.addEventListener("click", function(){
    clickNum++
    photos[clickNum%photos.length].style.zIndex = clickNum
})

const sofaImg = document.querySelector(".sofa img");
const circles1Tag = document.querySelector(".btn1");
const circles2Tag = document.querySelector(".btn2");
const circles3Tag = document.querySelector(".btn3");
const circles4Tag = document.querySelector(".btn4");
const circles5Tag = document.querySelector(".btn5");

const yellowcircleTag = document.querySelector(".yellow");

circles1Tag.addEventListener("click", function(){
    console.log("click")
    sofaImg.src = "sofa1.png";
    yellowcircleTag.style.backgroundcolor = "yellow"
})

circles2Tag.addEventListener("click", function(){
    console.log("click")
    sofaImg.src = "sofa2.png";
    yellowcircleTag.style.color = "red"
})

circles3Tag.addEventListener("click", function(){
    console.log("click")
    sofaImg.src = "sofa3.png";
})

circles4Tag.addEventListener("click", function(){
    console.log("click")
    sofaImg.src = "sofa4.png";
})

circles5Tag.addEventListener("click", function(){
    console.log("click")
    sofaImg.src = "sofa5.png";
})

sofaImg.addEventListener("mouseover", function(){
    sofaImg.src = "sofaB.png";
})

sofaImg.addEventListener("mouseout", function(){
    sofaImg.src = "sofa1.png";
})

const containerTag = document.querySelector("div.container");
const pTag = document.querySelector(".add-text");
const AddcircleTag = document.querySelector(".circle");

containerTag.addEventListener("click", function(){
  containerTag.classList.toggle("clicked");
  pTag.classList.toggle("clicked");
  AddcircleTag.classList.toggle("clicked");
})