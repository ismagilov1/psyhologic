const myModal = new HystModal({
  linkAttributeName: "data-hystmodal",
  // настройки (не обязательно), см. API
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

new Accordion(".accordion-container");

let check = 0;

const openMenu = () => {
  document.body.style.overflow = "hidden";
  const burger = document.querySelector(".burger_menu");
  if (burger.style.display === "flex") {
    document.body.style.overflow = "scroll";
    return (burger.style.display = "none");
  }
  return (burger.style.display = "flex");
};
