import { DOCUMENT } from '@angular/common';
import { Component, Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
@Component({
  selector: 'app-example',
  template: ''
})

export class HeroService {
  mobileMenuHidden: boolean = true; //change
  menuToggle() {
    if (!this.mobileMenuHidden) { 
      document.getElementById('menuMobile')?.classList.remove('open_animation-slide');
      setTimeout(() => {
        document.getElementById('menuMobile')?.classList.add('d-none');
        this.document.body.classList.remove('overflow_hidden');
      }, 1000);
      this.mobileMenuHidden = true;
    } else {
      this.document.body.classList.add('overflow_hidden');
      this.mobileMenuHidden = false;
      document.getElementById('menuMobile')?.classList.remove('d-none');
      document.getElementById('menuMobile')?.classList.add('open_animation-slide');
    }
  }
  constructor(@Inject(DOCUMENT) private document: Document) {}
}
