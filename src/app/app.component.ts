import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    major = 0;
    minor = 0;
    patch = 1;

  handleMajorVersionIncremented() {
    this.major++;
    this.minor = 0;
    this.patch = 0;
  }
  handleMinorVersionIncremented() {
    this.minor++;
    this.patch = 0;
  }

  handlePatchVersionIncremented() {
    this.patch++;
  }

}
