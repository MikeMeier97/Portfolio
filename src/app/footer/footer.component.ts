import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit{
  ngOnInit(): void {this.innerWidth = window.innerWidth;}
  date: number = new Date().getFullYear(); 
  numberOfBubbles = 10;
  bubbles = Array(this.numberOfBubbles).fill(0);
  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
  goToLink(url: any) {
    window.open(url);
  }
  mailMe() {
    window.location.href = "mailto:contact@mike-meier.info";
  }
}
