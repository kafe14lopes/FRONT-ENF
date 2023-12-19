
$(document).ready(function () {
    $('#baixo_cab').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        speed: 1400,
        cssEase: 'linear',
        infinite: true,
        arrows: false
    });
});

const inputIcon = document.querySelector(".input__icon");
const inputPassword = document.querySelector(".input__field");

inputIcon.addEventListener("click", () => {
  inputIcon.classList.toggle("ri-eye-off-line");
  inputIcon.classList.toggle("ri-eye-line");
  inputPassword.type = inputPassword.type === "password" ? "text" : "password";
});


