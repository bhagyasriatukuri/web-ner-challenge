import { Component, OnInit } from '@angular/core';
import {EntityService} from '../entity.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  response:any=[];
  message;
  // entitypresent=false;
  ini=false
  constructor(private EntityService: EntityService) { }
  ngOnInit(): void {
  }
  public sendMessage(): void {
    this.ini=true
    this.EntityService.getResponse(this.message).subscribe(res => {this.response=res})
    console.log(this.response)
    // if (this.response.length==0){
    //   this.entitypresent=false
    // }
    // else{
    //   this.entitypresent=true
    // }
    };

    
  
  

}
