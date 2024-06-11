document.addEventListener("DOMContentLoaded", () => {
    const mainImage = document.querySelector(".main_image");
    const img = mainImage.querySelector("img");
    const video = mainImage.querySelector("video");

    function resetStyles() {
        img.style.filter = "";
        video.style.filter = "";
        img.style.opacity = 1;
        video.style.opacity = 0;
    }

    mainImage.addEventListener("mouseenter", () => {
        video.play();
        video.style.opacity = 1;
    });

    mainImage.addEventListener("mouseleave", () => {
        video.pause();
        video.currentTime = 0;
        video.style.opacity = 0;
    });

    window.addEventListener("scroll", () => {
        const scrollY = window.scrollY;
        const blurValue = Math.min(scrollY / 200, 5); // 블러 값은 최대 5px로 제한, 변화 속도 줄임
        const opacityValue = Math.max(1 - scrollY / 500, 0); // 투명도는 최소 0으로 제한, 변화 속도 줄임

        img.style.filter = `blur(${blurValue}px)`;
        video.style.filter = `blur(${blurValue}px)`;
        img.style.opacity = opacityValue;
        video.style.opacity = opacityValue;

        // 스크롤 위치가 0일 때 이미지와 비디오의 스타일을 초기화
        if (scrollY === 0) {
            resetStyles();
        }
    });

    // 초기화 스타일 설정
    resetStyles();
});
