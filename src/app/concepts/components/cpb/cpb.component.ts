import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cpb',
  templateUrl: './cpb.component.html',
  styles: [
  ]
})
export class CpbComponent implements OnInit {

  @Input() age = '20'; // @Input() makes age as custom prporty
  constructor() { }

  ngOnInit(): void {
  }

}
