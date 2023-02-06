import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  mobileMenu: boolean = true; //change
  menuToggle() {
    if (!this.mobileMenu) {
      this.mobileMenu = true;
    } else {
      this.mobileMenu = false;
    }
  }
  constructor() {}
}
