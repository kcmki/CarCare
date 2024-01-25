//menu + ajax cont
class menu {
    constructor(){
        this.selected(document.querySelectorAll(".block"))
    
    }

    //changement div block selectionné
    selected(blocks){
        blocks.forEach(block => {
            block.addEventListener("click",function(){
                blocks.forEach(block => {
                  if(block.classList.contains('selected')){
                    block.classList.remove("selected")
                  }
                });
                this.classList.add('selected');
            })
        });
    }
}

let c = new menu()

// update form anim 

    document.querySelector("div#Content .Mainc .myprofile .container .info .text .update").addEventListener("click",function(){
        document.querySelector("div#Content .Mainc .myprofile .container .info .text").classList.remove("show")
        document.querySelector("div#Content .Mainc .myprofile .container .info .updateform").classList.add("show")
    })


    document.querySelector("div#Content .Mainc .myprofile .container .info .updateform .CancelUpdate").addEventListener("click",function(){
        document.querySelector("div#Content .Mainc .myprofile .container .info .updateform").classList.remove("show")
        document.querySelector("div#Content .Mainc .myprofile .container .info .text").classList.add("show")
    })
