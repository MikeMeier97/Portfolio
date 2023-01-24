import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit{
  ngOnInit(): void {}
  numberOfBubbles = 10;
  bubbles = Array(this.numberOfBubbles).fill(0);
}
