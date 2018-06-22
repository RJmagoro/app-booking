import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  firstname = ""
  lastname = ""
  departure = ""
  arrival = ""
  email = ""

  constructor( private router: Router) { }

  ngOnInit() {

      }
      onlogin(){
        this.router.navigate(['view'],{queryParams:{firstname:this.firstname, lastname:this.lastname, departure:this.departure,  arrival:this.arrival, email: this.email}})
      }

    }
