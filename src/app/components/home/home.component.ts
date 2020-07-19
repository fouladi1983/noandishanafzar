import { Component, OnInit, HostListener } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  title = 'نواندیشان افزار';
  stickyHeader: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event']) 
  scroll = (event) => {
    if(window.pageYOffset > 300){
      this.stickyHeader = true;
    }else{
      this.stickyHeader = false;
    }
      
  }

  goToFinancialTools() {
    this.router.navigate([])
    .then(result => { window.open('/financial-tools', '_blank'); });
  }

  goToFRankingTools() {
    this.router.navigate([])
    .then(result => { window.open('/ranking-tools', '_blank'); });
  }

  goToMarketTools() {
    this.router.navigate([])
    .then(result => { window.open('/market-tools', '_blank'); });
  }
}
