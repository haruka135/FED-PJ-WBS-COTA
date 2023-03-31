document.addEventListener("DOMContentLoaded", function () {
    const ham = document.querySelector(".ham");
    const hamspan = document.querySelectorAll(".ham span");
    const hmenu = document.querySelector(".hidden-menu");

    ham.onclick = () => {
        hmenu.classList.toggle("on");
        ham.classList.toggle("on");
    };

    let bar_seq = 0;
    const bar = document.querySelectorAll(".bar");

    // 비디오순서
    let vseq = 0;

    // 인터발변수
    let autoI;

    // 인터발 실행함수
    const actVid = () => {
        autoI = setInterval(() => {
            bar[bar_seq].classList.remove("on");
            bar_seq++;
            if (bar_seq === 3) bar_seq = 0;
            bar[bar_seq].classList.add("on");

            // 비디오 파트
            vseq++;
            if (vseq === 3) vseq = 0;
            console.log(vseq);
            // 현재 비디오 보이기
            vid.eq(vseq).fadeIn(300).siblings().fadeOut(300);
        }, 3000);
    }; ///////////////// actVid 함수 ///////////

    // 최초호출
    actVid();

    // 제이쿼리 코딩 구역 ///////////////////

    // 탑영역
    let topA = $(".main-header");
    // 비디오
    let vid = $(".vidbx video");

    /// 스크롤 이벤트 발생시 ////////////
    $(window).scroll(function () {
        let scTop = $(this).scrollTop();
        console.log(scTop);

        // 처음 스크롤 스타트시 상단 메뉴 변경하기
        if (scTop >= 100) {
            topA.css({ backgroundColor: "rgba(0, 0, 0, 0.4)" });
        } else {
            topA.css({ backgroundColor: "rgba(0, 0, 0, 0)" });
        }
    }); ////////// scroll ///////////////

    // 서브메뉴 슬라이드

    $(".sub-menu").hide();

    $(".center-menu > .menu-list > li").hover(
        function () {
            $(".sub-menu", this).stop().slideDown(400);
        },
        function () {
            $(".sub-menu", this).stop().slideUp(400);
        }
    );

    // 비디오 멈춤상태변수
    let vidSts = 1; //1-재생중,0-멈춤

    // 멈춤버튼 클릭시 .progressive 의 애니메이션 멈추기 및 동영상넘어가기 멈춤
    // 이벤트대상: .stop
    // 변경대상: .bar.on .progressive
    $(".stop").click(function () {
        // console.log("요기!", $(".bar.on"));

        if (vidSts) {
            // 재생중일때

            // $(".bar.on .progressive").css({ animationPlayState: "paused" }).parents(".bar").siblings().find(".progressive").attr("style", "");

            // console.log($(".vidbx video").eq(0));

            // $(".vidbx video").eq(vseq).get(0).pause();
            // $(".vidbx video").eq(vseq).siblings().get(0).play();

            // 인터발 멈추기
            clearInterval(autoI);
        } /////////// if /////////////////
        else {
            // 재생중이 아닐때 ////
            // $(".bar.on .progressive").css({ animationPlayState: "running" }).parents(".bar").siblings().find(".progressive").attr("style", "");

            // console.log($(".vidbx video").eq(0));

            // $(".vidbx video").eq(vseq).get(0).play();
            // $(".vidbx video").eq(vseq).siblings().get(0).pause();

            // 인터발 재개
            actVid();
        } //////////// else /////////////////

        // 상태값 토글변경하기
        vidSts === 1 ? (vidSts = 0) : (vidSts = 1);
    });
}); /////////////////////// load //////////////////////////////
