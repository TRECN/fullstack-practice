const box = document.querySelector(".box");
const defaultBtn = document.querySelector("#default-btn");  
const imgD=document.getElementById("imgD")
var a;  
function btnActive(){
    defaultBtn.click();
}
function btnActiveDownload(){
    imgD.href=a;
    imgD.click();
    
}
defaultBtn.addEventListener("change", function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
            document.getElementById("image").style.cssText+=`background-image:url(${result})`;
            a=result;
            console.log(result)
            box.classList.add("active");
        }
        reader.readAsDataURL(file);
    }
    
});
