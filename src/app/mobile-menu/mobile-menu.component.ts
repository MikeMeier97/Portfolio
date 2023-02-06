import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';



@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit{
  ngOnInit(): void {
  }
  constructor(public heroService: HeroService){}
}
