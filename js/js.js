// Obtén el contenedor de la imagen y la posición donde debería aparecer
let logo = document.getElementById('logo');
let triggerHeight = 150; // Ajusto este valor para que aparezca el logo chiquito cuando yo quiero

// Agrega un evento de scroll
window.addEventListener('scroll', function() {
  // Obtengo la posición actual de desplazamiento vertical
  let scrollPosition = window.scrollY || window.pageYOffset;

  // Verifica si la posición de desplazamiento alcanza el punto de activación
  if (scrollPosition > triggerHeight) {
    // Agrega la clase 'visible' para hacer visible la imagen
    logo.classList.add('pequeño');
  } else {
    // Remueve la clase 'visible' si la posición de desplazamiento está por debajo del punto de activación
    logo.classList.remove('pequeño');
  }
});

//Movimiento mas lento que la velocidad del scroll del duende verde

window.addEventListener('scroll', function () {
  // Calcula la posición de desplazamiento
  var scrollPosition = window.scrollY;

  // Ajusta la posición del duende verde
  var duendeCalabaza = document.querySelector('.duendeCalabaza');
  duendeCalabaza.style.top = 20 + 0.05 * scrollPosition - 70 + 'px';  /* El 0.05 varia la velocidad del duende*/ 
});


 // Función para manejar el efecto parallax
 function parallax() {
  var scrolled = window.scrollY;

  // Efecto parallax para Spidermans
  document.querySelector('.spideyBlanco').style.left = -(scrolled * 0.1) +40 + 'px';
  document.querySelector('.spideyBlanco').style.top = -(scrolled * 0.3) - 890 + 'px';

  document.querySelector('.spideyNormal').style.top = -(scrolled * 0.3) -870 + 'px';
  
  document.querySelector('.spideyNegro').style.left = (scrolled * 0.1) -150 + 'px';
  document.querySelector('.spideyNegro').style.top = -(scrolled * 0.3) -930 + 'px';

  // Efecto parallax para telarañas
  document.querySelector('.telaIzquierda').style.top = -(scrolled * 0.3) - 1367 + 'px';

  document.querySelector('.telaDerecha').style.left = (scrolled * 0.1) +230 + 'px';
  document.querySelector('.telaDerecha').style.top = -(scrolled * 0.3) - 1350 + 'px';
  
    // Efecto parallax para edificios

    //Edificio izquierdo
    document.querySelectorAll('.edificios .edifIzquierdo').forEach(function (edificio, index) {
      var transformValue = 'translateX(' + -(scrolled * 0.04 * (index + 1)) + 'px)';
      edificio.style.transform = transformValue;
  });

    //Edificio derecho
    document.querySelectorAll('.edificios .edifDerecho').forEach(function (edificio, index) {
      var transformValue = 'translateX(' + (scrolled * 0.04 * (index + 1)) + 'px)';
      edificio.style.transform = transformValue;
  });

  
    // Efecto parallax para nubes
    var nubesTransformValue = 'translateY(' + -(scrolled * 0.05) + 'px)';
    document.querySelector('.fondoNubes img').style.transform = nubesTransformValue;

}

// Función para manejar la animación de entrada
function animateOnScroll() {
  var windowHeight = window.innerHeight;
  var scrollPosition = window.scrollY;

  // Agrega clase 'visible' cuando el elemento está en la pantalla
  document.querySelectorAll('.spidermansPortada, .telarañas').forEach(function (element) {
      var offset = element.getBoundingClientRect().top + scrollPosition;

      if (scrollPosition + windowHeight > offset) {
          element.classList.add('visible');
      }
  });
}

// Llama a las funciones al cargar la página y al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
  parallax();
  animateOnScroll();
});

window.addEventListener('scroll', function () {
  parallax();
  animateOnScroll();
});
