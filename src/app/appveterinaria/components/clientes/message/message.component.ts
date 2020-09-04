import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() messageDate: string;
  @Output('close') closeMessage = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  close(){
    this.closeMessage.emit(true);
  }
}
