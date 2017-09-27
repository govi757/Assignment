import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-picdiv',
  templateUrl: './picdiv.component.html',
  styleUrls: ['./picdiv.component.css']
})
export class PicdivComponent implements OnInit {
  pth:string;

  constructor() {
    this.pth='/assets/dicaprio.jpg';
   }
changepath(i)
{
if(i==1)
{
  this.pth = '/assets/mathew.jpg';
}
  else if(i==2)
  {
    this.pth='/assets/dicaprio.jpg';
  }
  
}

  ngOnInit() {
  }

}
