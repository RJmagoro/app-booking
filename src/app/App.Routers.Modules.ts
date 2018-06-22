import { ViewComponent } from './component/view/view.component';
import { Router, Routes } from '@angular/router';

import { BookingComponent } from './component/booking/booking.component';
import { Component } from '@angular/core';

import { ExploreComponent } from './component/explore/explore.component';
import { AboutComponent } from './component/about/about.component';



export const appRoutes: Routes = [
    {path:'', component: ExploreComponent}, 
          {path: 'booking', component: BookingComponent},
          {path: 'about', component: AboutComponent},        
          {path: 'view', component: ViewComponent},
          
]