// Obtén el contenedor de la imagen y la posición donde debería aparecer
let logo = document.getElementById('logo');
let triggerHeight = 400; // Ajusto este valor para que aparezca el logo chiquito cuando yo quiero

// Agrega un evento de scroll
window.addEventListener('scroll', function() {
  // Obtengo la posición actual de desplazamiento vertical
  let scrollPosition = window.scrollY || window.pageYOffset;

  // Verifica si la posición de desplazamiento alcanza el punto de activación
  if (scrollPosition > triggerHeight) {
    // Agrega la clase 'visible' para hacer visible la imagen
    logo.classList.add('visible');
  } else {
    // Remueve la clase 'visible' si la posición de desplazamiento está por debajo del punto de activación
    logo.classList.remove('visible');
  }
});
