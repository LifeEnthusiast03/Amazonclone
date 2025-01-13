

function changeproductpage(){
    const cloths=document.querySelectorAll(".cloths .procduct-imege");
    cloths[0].style.backgroundImage='url("clo2.jpg")';

}

let page=document.querySelectorAll(".box-contain");

page.forEach((pg)=>{
    
    pg.addEventListener("click",(evt)=>{
            if(evt.target.id==='1'){
                console.log("img");
                
                changeproductpage()
            }
        
    })
})



