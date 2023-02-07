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
    window.location.href = "mailto:contact@mike-meier.info";
  }
  goToLink(url: any) {
    window.open(url);
  }
}
