import { BackendService } from './../backend.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ligin',
  templateUrl: './ligin.component.html',
  styleUrls: ['./ligin.component.css']
})
export class LiginComponent implements OnInit {
  username:string="";
  password: string="";
  message:string="";
  constructor( private backendService:BackendService) { }

  ngOnInit(): void {
  }
  onLoginClicked(){
    var result = this.backendService.validateUser(this.username, this.password);
    if(result){
      this.message="Valid User";
    }
    else{
      this.message=" invalid User!!!";
    }
    // if(this.username=="admin" && this.password=="admin"){
    //   this.message="Valid User!";
    // }
    // else{
    //   this.message="Invalid User!"
    // }
  }
  onClear(){
    this.username="";
    this.password="";
    this.message="";
  }

}
