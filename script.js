// const slider = document.getElementsByClassName('slider');

let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
}

const showSlide = (n) => {
  const slides = document.getElementsByClassName("slide");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlide(slideIndex);

// modal
const modal1 = document.getElementById("myModal1");
const modal2 = document.getElementById("myModal2");
const modal3 = document.getElementById("myModal3");

const openButton1 = document.getElementById("openModalButton1");
const openButton2 = document.getElementById("openModalButton2");
const openButton3 = document.getElementById("openModalButton3");

const closeIcon1 = document.getElementById("closeModalIcon1");
const closeIcon2 = document.getElementById("closeModalIcon2");
const closeIcon3 = document.getElementById("closeModalIcon3");

// Ketika tombol openButton ditekan
openButton1.addEventListener('click', () => {
  modal1.style.display = "block";
});

openButton2.addEventListener('click', () => {
  modal2.style.display = "block";
});

openButton3.addEventListener('click', () => {
  modal3.style.display = "block";
});

// Ketika tombol closeButton ditekan
closeIcon1.addEventListener('click', () => {
  modal1.style.display = "none";
});

closeIcon2.addEventListener('click', () => {
  modal2.style.display = "none";
});

closeIcon3.addEventListener('click', () => {
  modal3.style.display = "none";
});

// FAQ

const accordion = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      const panel = this.nextElementSibling;

      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

  //Verifikasi input Email
  const emaiInput = document.getElementById("emailInput");
  const emailError = document.getElementById("emailError");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  emailInput.addEventListener("input", ()=>{
    const email = emailInput.value;
    if (!emailRegex.test(email)){
      emailError.textContent = "Masukan alamat email yang valid. | Conton Email : ninjaken@gmail.com";
      emailInput.classList.add("invalid");

    } else {
      emailError.textContent = "";
      emaiInput.classList.remove("invalid");
    }
  });