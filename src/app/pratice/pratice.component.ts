import { Component } from '@angular/core';

@Component({
  selector: 'app-pratice',
  template:
  `<h1 *ngIf="required; then trueBlock else elseBlock"></h1>

  <ng-template #trueBlock>
  <h2>heelo {{name}}</h2>
  </ng-template>

  <ng-template #elseBlock>
  <h2>Bye {{lname}}</h2>
  </ng-template>
  `,
  styles: [`
  h2{
    color:green;
    text-align:center;
    background-color:pink;
  }

  `]
})
export class PraticeComponent {
  public required=true;
  public name='prasanna';
  public lname='lakshmi';

}
