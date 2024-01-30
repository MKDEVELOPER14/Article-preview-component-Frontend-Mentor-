readyState();

function readyState(){
    document.addEventListener("readystatechange",(event)=>{
        if(event.target.readyState==="complete"){
            console.log("Everything is perfect");
            initAPP();
        }
        else{
            readyState();
        }
    })
}

function initAPP(){
    const shareDiv = document.getElementById("shareDiv");
    console.log(shareDiv);
    shareDiv.addEventListener("click",()=>{
        sharepopUp();
    })
}


function sharepopUp(){
    const popup = document.getElementById("sharePopUp");
    if(popup.style.display === "block"){
        popup.style.display="none";
    }
    else{
        popup.style.display="block";
    }
}
