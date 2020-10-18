var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

const alerta = () => {
    alert('Su mensaje ha sido enviada!!!')
}

const btn = document.getElementById('button1')
btn.onclick = alerta;

const skills = [
    {
        label: 'HTML',
        data: 10,
    },
    {
        label: 'JavaScript',
        data: 10,
    },
    {
        label: 'Python',
        data: 10,
    },
    {
        label: 'CSS',
        data: 10,
    }
];

const secSkills = document.getElementById('skills');

skills.forEach(({label, data}) => {
    secSkills.innerHTML += `
    <div class="barra${data}" 
    <p>${label}</p>
    <p>${data*10}</p>
    </div>`
});