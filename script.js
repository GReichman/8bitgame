let hp=10;
let pic = $("#8bit");
let timer;


pic.on("click", function(){
    console.log("hit");
    pic.attr("src","pictures/ouch.png");
    hp--;
    $("#hp").html(hp);

    timer = setTimeout(changePic,800);

    

});

let changePic=function(){
console.log("hi");
    if(hp===0){
        pic.attr("src","pictures/ded.png")
        pic.unbind();
    }
    
    else{
        pic.attr("src","pictures/default.png")
 
    }


}