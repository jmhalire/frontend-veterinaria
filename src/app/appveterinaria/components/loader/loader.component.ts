import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {

  @Input('size') size: string;
  @ViewChild('loader') loader: ElementRef;
  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.loader.nativeElement.style.width = this.size;
      this.loader.nativeElement.style.height = this.size;
    }, 0.2);
    
    
  }

}
