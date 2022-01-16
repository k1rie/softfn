const wooting = document.querySelector("#wooting")

const wootingexplain = document.querySelector("#wootingexplain")

const wootingimgcont = document.querySelector("#wootingimgcont")

const wootingcardtext = document.querySelector("#wootingcardtext")

const filterkeyz = document.querySelector("#filterkeyz")

const timerresolution= document.querySelector("#timerresolution")

const timerresolutionimgcont = document.querySelector("#timerresolutionimgcont")

const timerresolutionexplain = document.querySelector("#timerresolutionexplain")

const timerresolutioncardtext = document.querySelector("#timerresolutioncardtext")

const slideritem = document.querySelectorAll(".slider__item")

localStorage.setItem("darkmode",true)

localStorage.setItem("lightmode",false)



var focus = false

wootingexplain.addEventListener("click",()=>{
    if (focus == false){
        focus = true
        var quit = document.createElement("img")
        var example = document.createElement("video")
        var video = document.createElement("source")
        wootingexplain.style.display = "none"
        quit.src = "https://cdn3.iconfinder.com/data/icons/basic-user-interface-5/64/close_cancel_exit_quit_delete-512.png"
        quit.style.width = "50px"
        quit.style.height = "50px"
        quit.style.zIndex = "2000"
        example.style.width = "20vw"
        example.style.height = "50vh"
        example.autoplay = "true"
        example.loop = "true"
        example.muted = "true"
        video.src = "img/Mi video8.mp4"
        video.type = "video/mp4"
        example.append(video)
        example.style.zIndex = "100"
        wootingimgcont.append(example)
        wootingcardtext.append(quit)
        wooting.style.position = "fixed"
        wooting.style.width = "70vw"
        wooting.style.height = "70vh"
        wooting.style.flexDirection = "row"
        wooting.style.border = "1px solid white"
        wootingimgcont.style.flexDirection = "column"
        console.log("hola")
        wooting.style.zIndex = "10000"
        quit.addEventListener("click",()=>{
                focus = false
                wooting.style.position = "relative"
                wooting.style.width = "300px"
                wooting.style.height = "400px"
                wooting.style.flexDirection = "column"
                wootingimgcont.style.flexDirection = "row"
                wootingexplain.style.display = "block"
                wootingimgcont.removeChild(example)
                wootingcardtext.removeChild(quit)
                wooting.style.zIndex = "0"
                wooting.style.border = "none"
        })
    }else{
    }

})

timerresolutionexplain.addEventListener("click",()=>{
    if (focus == false){
        focus = true
        var quit = document.createElement("img")
        var example = document.createElement("video")
        var video = document.createElement("source")
        timerresolutionexplain.style.display = "none"
        quit.src = "https://cdn3.iconfinder.com/data/icons/basic-user-interface-5/64/close_cancel_exit_quit_delete-512.png"
        quit.style.width = "50px"
        quit.style.height = "50px"
        quit.style.zIndex = "2000"
        example.style.width = "20vw"
        example.style.height = "50vh"
        example.autoplay = "true"
        example.loop = "true"
        example.muted = "true"
        video.src = "img/Mi video9.mp4"
        video.type = "video/mp4"
        example.append(video)
        example.style.zIndex = "100"
        timerresolutionimgcont.append(example)
        timerresolutioncardtext.append(quit)
        timerresolution.style.position = "fixed"
        timerresolution.style.width = "70vw"
        timerresolution.style.height = "70vh"
        timerresolution.style.flexDirection = "row"
        timerresolutionimgcont.style.flexDirection = "column"
        timerresolution.style.border = "1px solid white"
        console.log("hola")
        timerresolution.style.zIndex = "10000"
        
        quit.addEventListener("click",()=>{
                focus = false
                timerresolution.style.position = "relative"
                timerresolution.style.width = "300px"
                timerresolution.style.height = "400px"
                timerresolution.style.flexDirection = "column"
                timerresolutionimgcont.style.flexDirection = "row"
                timerresolutionexplain.style.display = "block"
                timerresolutionimgcont.removeChild(example)
                timerresolutioncardtext.removeChild(quit)
                timerresolution.style.zIndex = "0"
                timerresolution.style.border = "none"
        })
    }else{
    }

})


const slidercont = document.querySelector(".slider__cont")

var contador = 0;

setInterval(()=>{
 contador++
slidercont.style.transform = `translateY(-${contador*30}vh)`
slidercont.style.transition = "1s all"
if (contador == 4){
contador = 0
slidercont.style.transition = "none"
slidercont.style.transform = `translateY(0)`
}
},4000)

const darkmode = document.querySelector(".mode__dark")

const lightmode = document.querySelector(".mode__light")

darkmode.addEventListener("click",()=>{
if(localStorage.getItem("darkmode") === "true"){
    document.querySelector(".main").style.backgroundColor = "white"
    slideritem.forEach((item)=>{
item.style.backgroundColor = "white"
document.querySelectorAll(".slider__img").forEach((item)=>{
    item.style.opacity = "1"
})
darkmode.style.transform = "translateX(-100%)"
lightmode.style.transform = "translateX(0)"
    })

    document.querySelectorAll(".slider__title").forEach((item)=>{
        item.style.color = "black"
    })

    document.querySelectorAll(".slider__desc").forEach((item)=>{
        item.style.color = "black"
    })

    document.querySelectorAll(".card").forEach((item)=>{
        item.style.backgroundColor = "gray"
    })
    localStorage.setItem("darkmode",false)
    localStorage.setItem("lightmode",true)
}
})

lightmode.addEventListener("click",()=>{
   if(localStorage.getItem("lightmode") === "true"){
    document.querySelector(".main").style.backgroundColor = "black"
    slideritem.forEach((item)=>{
item.style.backgroundColor = "#242424"
document.querySelectorAll(".slider__img").forEach((item)=>{
    item.style.opacity = "0.2"
})
darkmode.style.transform = "translateX(0)"
lightmode.style.transform = "translateX(-100%)"
    })

    document.querySelectorAll(".slider__title").forEach((item)=>{
        item.style.color = "white"
    })

    document.querySelectorAll(".slider__desc").forEach((item)=>{
        item.style.color = "white"
    })

    document.querySelectorAll(".card").forEach((item)=>{
        item.style.backgroundColor = "#242424"
    })
    localStorage.setItem("darkmode",true)
    localStorage.setItem("lightmode",false)
   }
})