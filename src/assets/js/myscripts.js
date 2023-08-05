// Datos de los elementos
var elementos = [
  {
    imagen: 'img/portfolio/app1.jpg',
    enlace: '#',
    nombre: 'App 1'
  },
  {
    imagen: 'img/portfolio/web3.jpg',
    enlace: '#',
    nombre: 'Web 3'
  },
  {
    imagen: 'img/portfolio/app2.jpg',
    enlace: '#',
    nombre: 'App 2'
  },
  {
    imagen: 'img/portfolio/card2.jpg',
    enlace: '#',
    nombre: 'Card 2'
  },
  {
    imagen: 'img/portfolio/web2.jpg',
    enlace: '#',
    nombre: 'Web 2'
  },
  {
    imagen: 'img/portfolio/app3.jpg',
    enlace: '#',
    nombre: 'App 3'
  },

  {
    imagen: 'img/portfolio/card1.jpg',
    enlace: '#',
    nombre: 'Card 1'
  },

  {
    imagen: 'img/portfolio/card3.jpg',
    enlace: '#',
    nombre: 'Card 3'
  },
  {
    imagen: 'img/portfolio/web1.jpg',
    enlace: '#',
    nombre: 'Web 1'
  }
];

var lista = document.getElementById('lista');

console.log("hola mundo!");

var contenedorElementos = document.getElementById('elementos-lista');

// Recorrer los datos de los elementos y agregarlos al contenedor
elementos.forEach(function(elemento) {

  // Obtener el nombre del elemento
  var nombre = elemento.nombre;

  // Crear un elemento de lista <li>
  var li = document.createElement('li');

  // Establecer el contenido del elemento de lista como el nombre
  li.textContent = nombre;
  
  // Agregar el elemento de lista a la lista principal
  lista.appendChild(li);

  // Crear el elemento de div con las clases especificadas
  var divElemento = document.createElement('div');
  divElemento.className = 'col-lg-4 col-md-6 portfolio-item filter-app';

  // Crear el contenido interno del div
  var divWrap = document.createElement('div');
  divWrap.className = 'portfolio-wrap';

  // Crear la imagen
  var imagen = document.createElement('img');
  imagen.src = elemento.imagen;
  imagen.className = 'img-fluid';
  imagen.alt = '';

  // Crear el enlace
  var enlace = document.createElement('a');
  enlace.href = elemento.enlace;
  enlace.textContent = elemento.nombre;

  // Agregar la imagen y el enlace al contenido interno del div
  divWrap.appendChild(imagen);
  divWrap.appendChild(enlace);

  // Agregar el contenido interno del div al div principal
  divElemento.appendChild(divWrap);

  // Agregar el div principal al contenedor
  contenedorElementos.appendChild(divElemento);
});

