import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public message: string;
  public messageIni: string;
  constructor(){}
  ngOnInit(): void {
    if(localStorage.getItem('message')){

      setTimeout(()=> this.message = localStorage.getItem('message'),600);

      setTimeout(()=>{
        this.message = null;
        localStorage.removeItem('message');
      },8000)
    }
  }

  public closeMessage(){
    localStorage.removeItem('message');
    this.message = null;
  }

  public change(e: any){
    console.log(e);
  }
}
