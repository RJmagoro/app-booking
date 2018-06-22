import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  firstname = ''
  lastname = ''
  email = ''
  departure = ''  
  arrival = ''
 

  constructor( private router: ActivatedRoute) { }

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



}

  


