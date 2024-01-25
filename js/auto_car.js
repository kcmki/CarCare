class auto_car{

    //
    constructor(caroussel){
        
        let max = caroussel.children.length - 1
        
        
        
        for (let index = 0; index < 3; index++) {
            caroussel.append(caroussel.children[index].cloneNode(true)) 
        }
        for (let index = 0; index < 3; index++) {
            caroussel.prepend(caroussel.children[max].cloneNode(true)) 
        }


        this.scrollto = -3
        this.divpercent = 33
        document.querySelector(".auto-caroussel").style.transform="translate3d("+ this.scrollto*this.divpercent+"vw,0,0)"
        
        window.setInterval(this.auto.bind(this),2500)
        caroussel.addEventListener("transitionend",this.infinite.bind(this))
    }
    
    
    //functions
    auto(){
            this.scrollto--;
            document.querySelector(".auto-caroussel").style.transition="" 
            document.querySelector(".auto-caroussel").style.transform="translate3d("+ this.scrollto*this.divpercent+"vw,0,0)"
    }
    infinite(){
        if( this.scrollto <= -  (document.querySelector(".auto-caroussel").children.length - 6 ) ){
            document.querySelector(".auto-caroussel").style.transition="none" 
            this.scrollto = 0
            document.querySelector(".auto-caroussel").style.transform="translate3d("+ this.scrollto*this.divpercent+"vw,0,0)"
            return
        }

        if( this.scrollto >= 0){

            this.scrollto = -6
            document.querySelector(".auto-caroussel").style.transition="none" 
            document.querySelector(".auto-caroussel").style.transform="translate3d("+ this.scrollto*this.divpercent +"vw,0,0)"
        }

    }
}
C = new auto_car(document.querySelector(".auto-caroussel"))