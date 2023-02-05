import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent{
  mobileMenu: boolean = true; //change
  menuToggle() {
    this.mobileMenu = true;
  } 
}
