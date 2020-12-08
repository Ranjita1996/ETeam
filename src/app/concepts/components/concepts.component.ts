import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { CebComponent } from './ceb/ceb.component';

@Component({
  selector: 'app-concepts',
  templateUrl: './concepts.component.html',
  styles: [
    `
    .brownText{
      color: brown;
    }
    `
  ]
})
export class ConceptsComponent implements OnInit, AfterViewInit {

  // string interpolation related
  appName = 'Contact Manager App!';
  noOfDeveloper = 10;

  // proprty binding
  averageExp = 2;

  // for ngStyle
  myStyles: any = {
    backgroundColor: 'yellow',
    color: 'black'
  };

  // two way binding
  courseName = 'Angular';

  dataReceivedFromChildComp: string;

  // if static true -- the data would be available in ngOnInit lifecycle hook
  @ViewChild(CebComponent, { static: true }) cebData: CebComponent;
  // if static false -- the data would be available in ngAfterViewInit lifecycle hook
  // @ViewChild(CebComponent, { static: false }) cebData: CebComponent;

  // *ngIf related
  isLoggedIn: boolean;

  // *ngFor related
  skillList: string[] = [
    'HTML', 'CSS', 'JS'
  ];

  constructor() {
    console.log('Inside Constructor');
  }

  ngOnInit(): void {
    console.log('Inside ngOnInit');
    console.log(this.cebData);
  }

  ngAfterViewInit(): void {
    console.log('Inside ngAfterViewInit');
    console.log(this.cebData);
  }

  // event binding
  clickMeHandler(): void {
    alert('clicked');
  }

  clickMeHandler1(event, label): void {
    event.target.innerText = label;
  }

  clickMeHandler2(event): void {
    event.target.disabled = true;
  }

  profileLoadedHandler(event): void {
    // Step 5: Display it somewhere in parent comp
    alert('inside parent comp');
    console.log(event);
    this.dataReceivedFromChildComp = event;
  }

}
