
let alert = document.querySelector(".alert-primary");
let alertd = document.querySelector(".alert-danger");
let alertdd = document.querySelector(".alin");
let alertddd = document.querySelector(".alert-danger");

window.onscroll = function() {
    if (pageYOffset > 5000) {
        alert.classList.add("add")
        if (pageYOffset > 10000)
        {
            alert.classList.remove("add");
            alertd.classList.add("add")
            if  (pageYOffset > 15000)
            {
                alertd.classList.remove("add");
                alertdd.classList.add("add")
                if (pageYOffset > 20000)
                {
                    alertdd.classList.remove("add");
                    alertddd.classList.add("add")
                    jopa()

                }
                else
                {
                    alertddd.classList.remove("add")
                    alertdd.classList.add("add");
                }
            }
            else{
                alertdd.classList.remove("add")
                alertd.classList.add("add");
            }

        }
        else{
            alertd.classList.remove("add")
            alert.classList.add("add");
        }

    }
    else{
        alert.classList.remove("add");
    }
}

function jopa(){
    var ele = document.getElementsByClassName('al')
    document.body.remove(ele)
    setTimeout(timer, 1000);

}
function timer(){
    let sc = document.querySelector('head')
    let d = document.createElement('body');
    d.innerHTML = `
    <div class="new_dr div_block row">Насамом деле от этого ничего не зависит, и мы не путешественники во времени, однако нужно ценить момент! Хотелось как то поздравить с др и попрактиковаться! вообщем еще раз тебя поздравляю с днем рождения!!!!, всего самого самого, если что, то тебе осталось праздновать вот столько:</div> 
      <br>
     <div class="row blk">
     
     <div class="col">Часов:
        <span class="hr"></span>
     </div>
     <div class="col">Минут: 
        <span class="mi"></span>
     </div>
      <div class="col ">Секунд: 
        <span class="se"></span>
       </div>
    </div>
     <br>
    <div class="div_block btm">не теряй ни секунды!</div>`
    sc.after(d);
    let date=new Date('march 18 2022 00:00:00')
    function counts(){
        let now= new Date();
        gap = date-now;
        let hours = Math.floor(gap/1000/60/60)%24;
        let min = Math.floor(gap/1000/60)%60;
        let sec = Math.floor(gap/1000)%60;

        document.querySelector('.hr').innerText = hours;
        document.querySelector('.mi').innerText = min;
        document.querySelector('.se').innerText = sec;

    }
    setInterval(counts,1000);
}
