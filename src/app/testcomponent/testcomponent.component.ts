import { Component } from '@angular/core';

@Component({
  selector: 'app-testcomponent',
  template: `
<h2>Normal Blinding  :{{name}}</h2>
<h2>LowerCase Using :{{name | lowercase}}</h2>
<h2>UpperCase Using :{{name | uppercase}}</h2>
<h2>TitleCase Using :{{suraname | titlecase}}</h2>
<h2>SliceCase Using :{{suraname | slice:3:8}}</h2>
<h2>JSONCase Using :{{details | json}} </h2>
<h1>{{0.25 | percent}}</h1>
<h1>{{date}}</h1>
<h1>{{date | date:'short'}}</h1>
<h1>{{date | date:'shortDate'}}</h1>
<h1>{{date | date:'shortTime'}}</h1>
<h1>{{date | date:'medium'}}</h1>
<h1>{{date | date:'mediumDate'}}</h1>
<h1>{{date | date:'mediumTime'}}</h1>
<h1>{{date | date:'long'}}</h1>
<h1>{{date | date:'longDate'}}</h1>
<h1>{{date | date:'longTime'}}</h1>


`,
  styleUrls: ['./testcomponent.component.css']
})
export class TestcomponentComponent {
public name = "prasanna";
public suraname = "Mushini  from andhara pradesh"
public details = {
   "city":"Mandapeta",
   "pincode":"533308"
}
public date =new Date();
}
