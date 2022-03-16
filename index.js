const button = document.querySelector('.one');
if(button){
    const button2 = document.querySelector(".two");
    button.addEventListener("click", function (e){
        button2.classList.toggle("novis");
    });
};