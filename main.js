var indexSlide = 1; // se inicializa el índice
showSlides(indexSlide);

function moveSlide(n) {
  showSlides((indexSlide += n)); // función para moverse en slides on-click
}

function current(n) {
  showSlides((indexSlide = n)); // slide en la que se encuentra el usuario
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {
    indexSlide = 1; // se reinicia el conteo
  }
  if (n < 1) {
    indexSlide = slides.length; // si es menor que 1 se reinicia el conteo en max (slides.length)
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // style.display compara el style que tiene el objeto, se colocan todos como none
  }
  slides[indexSlide - 1].style.display = "block"; // se visualiza el slide actual ya que se cambia a "block"
}

const form = document.getElementById("formcontact");
const a = document.getElementById("firstname");
const b = document.getElementById("lastname");
const c = document.getElementById("email");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  var z = a.value;
  var x = b.value;
  var y = c.value;
  console.log(z);
  console.log(x);
  console.log(y);
  if (z == "" || x == "" || y == "") {
    alert("Error. Some fields are empty.");
    return false;
  } else {
    alert("Form was submitted successfully");
    return true;
  }
});

$(".skill-bar").each(function () {
  $(this).animate(
    {
      width: $(this).attr("data-bar"),
    },
    "fast"
  );
});
