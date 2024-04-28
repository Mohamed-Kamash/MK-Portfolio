import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-id',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './id.component.html',
  styleUrls: ['./id.component.scss'],
  
})
export class IdComponent {

  coppied:boolean = false

  @ViewChild('mytext') text!:ElementRef

  copy(){
    let coppiedText = this.text.nativeElement.innerHTML
    navigator.clipboard.writeText(coppiedText).then(() => {
      console.log('Content copied to clipboard ' + coppiedText);
    })
    this.coppied=true
    this.hideCoppiedEle()
  }

  hideCoppiedEle():void{
    setTimeout(() => {
      this.coppied = false
    }, 1000);
  }


}
