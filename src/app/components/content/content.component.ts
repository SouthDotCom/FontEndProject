import { Component,HostListener  } from '@angular/core';
import { SectionService } from 'src/app/section.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  formData: any = {};
  sections = ['intro', 'about', 'services', 'portfolio', 'team', 'contact'];

  constructor(
    private sectionservice: SectionService) {}

  @HostListener('window:scroll', [])
  onScroll(): void {
    const scrollPosition = window.pageYOffset;

    for (const section of this.sections) {
      const element = document.getElementById(section);
      if (element) {
        const rect = element.getBoundingClientRect();
        const offsetTop = rect.top + window.pageYOffset-200;

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + rect.height) {
          this.sectionservice.setActiveSection(section);
          break;
        }
      }
    }
  }
  ngOnInit(): void {
    var elementos = [
      {
        imagen: 'assets/img/portfolio/app1.jpg',
        enlace: '#',
        nombre: 'App 1'
      },
      {
        imagen: 'assets/img/portfolio/web3.jpg',
        enlace: '#',
        nombre: 'Web 3'
      },
      {
        imagen: 'assets/img/portfolio/app2.jpg',
        enlace: '#',
        nombre: 'App 2'
      },
      {
        imagen: 'assets/img/portfolio/card2.jpg',
        enlace: '#',
        nombre: 'Card 2'
      },
      {
        imagen: 'assets/img/portfolio/web2.jpg',
        enlace: '#',
        nombre: 'Web 2'
      },
      {
        imagen: 'assets/img/portfolio/app3.jpg',
        enlace: '#',
        nombre: 'App 3'
      },
    
      {
        imagen: 'assets/img/portfolio/card1.jpg',
        enlace: '#',
        nombre: 'Card 1'
      },
    
      {
        imagen: 'assets/img/portfolio/card3.jpg',
        enlace: '#',
        nombre: 'Card 3'
      },
      {
        imagen: 'assets/img/portfolio/web1.jpg',
        enlace: '#',
        nombre: 'Web 1'
      }
    ];
    
    var lista = document.getElementById('lista');
    var contenedorElementos = document.getElementById('elementos-lista');
    elementos.forEach(function(elemento) {
      // Obtener el nombre del elemento
    
      if (lista && contenedorElementos) {
      
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
      
      }
      
    });

  }
}
