import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';
import { Person } from '../person';
@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {
  persons:Person[]=[];
  selPersons:number=0;
  constructor ( private backendService: BackendService) {
   }
  ngOnInit(): void {
    // this.persons=this.backendService.getPersons();
  }
  personcountHanfled($event: any){
    // alert("Hello" +$event)
    this.selPersons ++;
  }

}
