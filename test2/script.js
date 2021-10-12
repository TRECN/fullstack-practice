const boxes = document.querySelector(".box");
const defaultBtn = document.querySelector("#default-btn");
const img = document.querySelector("img");
function btnActive(){
    defaultBtn.click();
}
defaultBtn.addEventListener("change",function(){
    const file = this.file[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
               img.src = result;
               boxes.classList.add("active");
        }
        reader.readAsDataURL(file)
    }
    

});