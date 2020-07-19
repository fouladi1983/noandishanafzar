import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'نواندیشان افزار';
  stickyHeader: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) 
  scroll = (event) => {
    if(window.pageYOffset > 300){
      this.stickyHeader = true;
      console.log(`it's fixed`);
      console.log(this.stickyHeader);
    }else{
      this.stickyHeader = false;
      console.log(this.stickyHeader);
    }
      
  }
}
