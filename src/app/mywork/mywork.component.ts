import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit{
  ngOnInit(): void {this.innerWidth = window.innerWidth;}
  numberOfBubbles = 10;
  bubbles = Array(this.numberOfBubbles).fill(0);
  public innerWidth: any;
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.innerWidth = window.innerWidth;
  }
}
