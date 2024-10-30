document.addEventListener("DOMContentLoaded", function () {
  // 슬라이드 기능
  const slideControl = document.querySelector(".slideControl");
  const slides = slideControl.querySelectorAll("img");
  const slideCount = slides.length;

  const mainMenu = document.querySelectorAll(".main-menu li");
  const subMenu = document.querySelectorAll(".sub-menu");
  let currentSlide = 0;

  mainMenu.forEach((main) => {
    const targetSub = main.querySelector(".sub-menu");
    main.addEventListener("mouseenter", () => {
      main.style.height = "190px";
      main.style.transition = "all 0.5s ease-in-out";
      if (targetSub) {
        targetSub.style.opacity = 1;
      }
    });
    main.addEventListener("mouseleave", () => {
      main.style.height = "50px";
      main.style.transition = "all 0.5s ease-in-out";
      if (targetSub) {
        targetSub.style.opacity = 0;
      }
    });
  });

  // 첫 번째 이미지 복제하여 마지막에 추가
  const firstSlideClone = slides[0].cloneNode(true);
  slideControl.appendChild(firstSlideClone);

  // 슬라이드 전환 함수
  function moveSlide() {
    currentSlide++;
    slideControl.style.transition = "transform 0.5s ease-in-out";
    slideControl.style.transform = `translateX(-${currentSlide * 100}%)`;

    // 마지막 슬라이드(복제된 첫 번째 슬라이드)에 도달했을 때
    if (currentSlide === slideCount) {
      // 트랜지션이 끝난 후 첫 번째 슬라이드로 즉시 이동
      setTimeout(() => {
        slideControl.style.transition = "none";
        currentSlide = 0;
        slideControl.style.transform = `translateX(0)`;
      }, 500);
    }
  }

  // 2.8초마다 슬라이드 전환
  setInterval(moveSlide, 2800);

  // 팝업 기능
  const noticeLinks = document.querySelectorAll(".notice a");
  const popup = document.getElementById("popup");
  const closeButton = document.querySelector(".close-popup");

  noticeLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      popup.classList.add("active");
    });
  });

  closeButton.addEventListener("click", function () {
    popup.classList.remove("active");
  });

  // 팝업 외부 클릭 시 닫기
  popup.addEventListener("click", function (e) {
    if (e.target === popup) {
      popup.classList.remove("active");
    }
  });
});
