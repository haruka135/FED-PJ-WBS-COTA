window.addEventListener("DOMContentLoaded",loadFn);

function loadFn() {

    const mediabtn = document.querySelectorAll(".media-btn");
    const mslide = document.querySelector(".media-slide1");

    let mlist = document.querySelectorAll(".media-slide01 > li");

    mlist.forEach((ele,idx) => {
        ele.setAttribute("slide-data",idx);
    });

    const mediaSlide = (seq) => {
        let plist = mslide.querySelectorAll("li");

        if(seq) {
            mslide.style.left = "-100%";
            mslide.style.transition = "left .4s ease-in-out";

            setTimeout(()=>{
                mslide.appendChild(plist[0]);
                mslide.style.left = "0";
                mslide.style.transition = "none";
            },400);
        } else {
            mslide.insertBefore(plist[plist.length - 1],plist[0]);
            mslide.style.left = "-100%";
            mslide.style.transition = "none";

            setTimeout(()=>{
                mslide.style.left = "0";
                mslide.style.transition = "left .4s ease-in-out";
            },0);
        }
    };

    mediabtn.forEach((ele,idx)=>{
        ele.onclick = ()=>{
            event.preventDefault();
            console.log("버튼 눌렀어");
            mediaSlide(idx);
        };
    });

    const bbtn = document.querySelectorAll(".bbtn");
    const bslide = document.querySelector(".business-slide");
    const bl = document.querySelectorAll(".bullet > li");

    let bulist = document.querySelectorAll(".business-slide li");

    bulist.forEach((ele,idx) => {
        ele.setAttribute("data-seq",idx);
    });

    const infoSlide = (seq) => {
        let commonlist = bslide.querySelectorAll("li");

        if(seq) {
            bslide.style.left= "-100%";
            bslide.style.transition = "left .4s ease-in-out";

            setTimeout(()=>{
                bslide.appendChild(commonlist[0]);
                bslide.style.left = "0";
                bslide.style.transition = "none";
            },400);
        } else {
            bslide.insertBefore(commonlist[commonlist.length - 1],commonlist[0]);
            bslide.style.left = "-100%";
            bslide.style.transition = "none";

            setTimeout(()=>{
                bslide.style.left = "0";
                bslide.style.transition = "left .4s ease-in-out";
            },0);
        }

        bulist = bslide.querySelectorAll("li");

        let comseq = bulist[seq].getAttribute("data-seq");

        for(let x of bl) x.classList.remove("act");

        bl[comseq].classList.add("act");
    };

    bbtn.forEach((ele,idx)=>{
        ele.onclick = ()=>{
            event.preventDefault();
            console.log("버튼 눌렀어")
            infoSlide(idx);
        };
    });
}