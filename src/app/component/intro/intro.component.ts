import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import Typed from 'typed.js';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { timeout } from 'rxjs';


@Component({
  selector: 'app-intro',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss'],
  animations: [
    trigger('fadeIntro', [
      state('closed', style({
        opacity: 0,
      })),
      transition("* => closed", [
        animate('1000ms')
      ]),
    ]),
    trigger("slideUp",[
      state('slide',style({transform:"translateY(-100%)"})),
      transition("*=>slide",[
        animate("1000ms")
      ])
    ])
  ]
})
export class IntroComponent {

    fadeIntro:Boolean=false
    slide:boolean=false
    slideUp():void{
      setTimeout(() => {this.slide = true}, 1200);
    }

    ngAfterViewInit() {
    let typed = new Typed('#element', {
      strings:['ohamed Essam' ,'ohamed Kamash'],
      backSpeed:40,
      backDelay:70,
      startDelay:1640,
      typeSpeed: 44,
      showCursor:false
    });


    setTimeout(() => {
      this.fadeIntro = true
      this.slideUp()
    }, 5100);

  }

}
