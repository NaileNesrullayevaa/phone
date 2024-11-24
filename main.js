'use strict'
const sound=new Audio('podcast-4-2.mp3')
const zaryatka=document.querySelector('.zaryatka')
const ildirim=document.querySelector('.ildirim')
const battery=document.querySelector('.bateryCount')
let alertShow=false
let count=0
zaryatka.addEventListener('click',function(){
    this.classList.toggle('active')
    setTimeout(()=>{
        ildirim.classList.add('active')
        sound.play()
    },1000)
    setTimeout(()=>{
        ildirim.classList.remove('active')
        sound.pause()
        setInterval(()=>{
            if(count<101){
                battery.textContent=count
                count++
            }
            else{
                zaryatka.classList.remove("active")
                if(!alertShow){
                    alert("Doldu")
                    alertShow=true
                }
            }
        },100)
    },2000)
})