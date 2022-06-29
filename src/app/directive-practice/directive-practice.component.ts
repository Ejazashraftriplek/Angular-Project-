import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-practice',
  templateUrl: './directive-practice.component.html',
  styleUrls: ['./directive-practice.component.css']
})
export class DirectivePracticeComponent implements OnInit {
  // testObj={id:6,name:"testing",price:600};
  selectCountry:string="";

  persons=[
    {id:1,name:"Ejaz"},
    {id:2, name:"Sajid"},
    {id:3, name:"Mukhtar"}
  ]
  constructor() { }

  ngOnInit(): void {
  }
  // changeCountry(v){
  //   this.selectCountry=v.target.value
  // }
 
  // getColor(){
  //   if(this.testObj.id>5)
  //   return "green";
  //   else
  //   return "grey";
  // }
  // getColorObj():Object{
  //   if(this.testObj.id>5)
  //   return {"background-color":'blue'};
  //   else
  //   return {"background-color":'yellow'}
  //     }
  //     changeColor():Object{
  //       if(this.testObj.name ="testing"){
  //         return{"background-color":"orange"};
  //         }
  //       else
  //       return {"background-color":'yellow'}
  //     }

}
