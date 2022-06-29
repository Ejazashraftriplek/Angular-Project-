import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  templateUrl: './binding-practice.component.html',
  styleUrls: ['./binding-practice.component.css']
})
export class BindingPracticeComponent implements OnInit {
  // itemImageUrl: string="./../../assets/71.jpg";
  // testClasses: string="abc- xyz";
  // applyTestClasses: boolean=true;
  // applyRedStyle: boolean=true;
  // testObj: object={id: 1, name:"Ejaz", age:25};
  // clickCounter:number=0;
  // login1:string="test1";
  // login2:string="test2";
  // login3:string="test3";
  // fontSizePx1:number=16;
  // fontSizePx2:number=18;
  constructor() { }

  ngOnInit(): void {
  }
  // getcolor(){
  //   return 'yellow';
  // }
  // onSaveClick( $event)
  //   {
  //     debugger;
  //     if($event){
  //       alert('Button Clicked' + $event.target.textContent)
  //     }
  //     else{
  //       alert('Button Clicked')
  //     }
  //     this.clickCounter++;
  //   }
  // show(v: any){
  //   alert(v);
  //   console.log( "my name is:" +v);
  //     }
 
}

