import { Person } from './person';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackendService {

  constructor() { }
  // getPersons():Array<Person>{
  //   const persons:Person[]=[];
  //   persons.push(new Person(1,"Haider",40));
  //   persons.push(new Person(2,"Ali ",30));
  //   persons.push(new Person(3,"Bukhari",20));
  //   persons.push(new Person(4,"Kazmi",22));
  // }
  validateUser(username:string, password:string):boolean{
    if(username=='admin' && password=='admin'){
      return true;
    }else{
      return false;
    }


  }
 
}
