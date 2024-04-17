import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule,CarouselModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    margin:0,
    autoWidth:true,
    navText: ['<', '>'],
    responsive: {
      0: {
        items: 1,
        nav: false,
        dots: true,

      },
      576: {
        items: 1,
        nav: false,
        dots: true,

      },
      768: {
        items: 2,
        nav: true

      },
      992: {
        items: 2,
        nav: true
      },
    },
    // nav: true
  }

}
