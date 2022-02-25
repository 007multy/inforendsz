import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  @Output()
  majorVersionIncremented: EventEmitter<any> = new EventEmitter();

  @Output()
  minorVersionIncremented: EventEmitter<any> = new EventEmitter();

  @Output()
  patchVersionIncremented: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}