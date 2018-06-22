import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frame',
  templateUrl: './frame.component.html',
  styleUrls: ['./frame.component.css']
})
export class FrameComponent implements OnInit {
  firstname = ''
  lastname = ''
  email = ''
  departure = ''  
  arrival = ''

  constructor( private router: ActivatedRoute) { 
   
  }

  ngOnInit() {
    this.router.queryParams.subscribe(params =>{this.firstname = params['firstname'];
    this.lastname = params['lastname'];
    this.departure = params['departure'];
    this.email = params['email'];
    this.arrival = params['arrival'];
    
    
   

    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.email);
    console.log(this.arrival);
    console.log(this.departure);
    
  })
  }
  onlogin(){
    alert("Your booking has been confirmed: "+this.firstname)
    this.router.navigate(['/view'],{queryParams:{firstname:this.firstname, lastname:this.lastname, departure:this.departure,  arrival:this.arrival, email: this.email}})
 

}}
