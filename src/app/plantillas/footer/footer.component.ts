import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    showFooter: boolean = true;
    lastScrollPosition: number = 0;
  
    @HostListener('window:scroll', ['$event'])
    onWindowScroll(event: any) {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
  
      if (scrollPosition > this.lastScrollPosition) {
        this.showFooter = false; // Oculta el pie de página cuando se desplaza hacia abajo
      } else {
        this.showFooter = true; // Muestra el pie de página cuando se desplaza hacia arriba
      }
  
      this.lastScrollPosition = scrollPosition;
    }
  }

