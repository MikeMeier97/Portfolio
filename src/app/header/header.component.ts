import { Component, OnInit, ViewChild } from '@angular/core';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  ngOnInit(): void {}
  constructor(public heroService: HeroService){}
  mailMe() {
    window.location.href = "mailto:user@example.com?subject=Subject&body=message%20goes%20here"; // Todo Mail 
  }
  goToLink(url: any) {
    window.open(url);
  }
}
