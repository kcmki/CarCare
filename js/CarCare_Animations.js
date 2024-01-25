//TOPBAR LOGO
    window.onscroll = function(){
        if(window.scrollY > 10){document.querySelector("#topbar").style.transform = "translate(0,0)"
                                document.querySelector(".log").classList.add("invisible")
                                document.querySelector(".logtext").classList.add("op-0")
                                document.querySelector("div#topbar .logo img").classList.remove("op-0")}
        if(window.scrollY < 10){document.querySelector("#topbar").style.transform = "translate(0,-8vh)";
                                document.querySelector(".log").classList.remove("invisible")
                                document.querySelector(".logtext").classList.remove("op-0")
                                document.querySelector("div#topbar .logo img").classList.add("op-0")
        }
        }  
//HOVERED

    var button = document.querySelector(".hovered")
    var x = 0
    button.addEventListener("mouseover",function(){
        window.clearInterval(button.anim)
        button.anim = window.setInterval(function(){
            x++
            button.style.backgroundImage="linear-gradient("+x+"deg,rgb(133,0,0), rgba(48,50,111))"
        },5)
    })
    button.addEventListener("mouseout",function(){
        window.clearInterval(button.anim)
        button.anim = window.setInterval(function(){
            x--
            button.style.backgroundImage="linear-gradient("+x+"deg,rgb(133,0,0), rgba(48,50,111))"
            if((x % 360) === 90)
            {
                window.clearInterval(button.anim)
            }
        },5)
    })


//SignIn 
    document.querySelector("#logaccount img").addEventListener("click",function(){
        document.querySelector(".bean").classList.add("beanBG")
        document.querySelector("#login").classList.remove("invisible");
        })
    document.querySelector("#login").addEventListener("click",function(){
        document.querySelector("#login").classList.add("invisible")
        document.querySelector(".bean").classList.remove("beanBG")
        })

    document.querySelector("#login .loginform").addEventListener("click",function(e){
        e.stopPropagation();
        }) 
         