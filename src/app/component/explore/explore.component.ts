import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css']
})
export class ExploreComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }
  onlogin(){
    this.router.navigate(['booking'],{queryParams:{}})
  }
  
    
  }


