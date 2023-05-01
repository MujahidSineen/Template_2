let art = document.querySelectorAll(".contain .container article");

function artToggle() {

    let index = Math.floor(Math.random() * art.length);

    art.forEach( a => {
        
        a.classList.remove("landingarticle");

    });

    art[index].classList.add("landingarticle");
 
}


    setInterval(artToggle, 5000);
    