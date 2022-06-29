import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from '../person';
@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  // name : string="Khawar Abbas ";
  @Input()
  per!: Person;
  iscounted:boolean=false;
  @Output() counterEvent= new EventEmitter<number>();
  constructor() {
    // this.per=new Person(1," Ejaz ",100)
   }
  ngOnInit(): void {
  }
  onCountClicked(){
    this.iscounted=true;
    // this.isCounted=true;
    this.counterEvent.emit(this.per.id);
  }
}
