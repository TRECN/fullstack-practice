const box = document.querySelector(".box");
const defaultBtn = document.querySelector("#default-btn");
const img = document.getElementById("#image").style.background;
         
function btnActive(){
    defaultBtn.click();
}
defaultBtn.addEventListener("change", function(){
    const file = this.files[0];
    if(file){
        const reader = new FileReader();
        reader.onload = function(){
            const result = reader.result;
               img='url('+result+')';
               box.classList.add("active");
        }
        reader.readAsDataURL(file);
    }
    

});
