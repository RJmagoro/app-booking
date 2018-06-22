import { appRoutes} from './App.Routers.Modules';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';


import { AppComponent } from './app.component';

import { BookingComponent } from './component/booking/booking.component';
import { ViewComponent } from './component/view/view.component';
import { ExploreComponent } from './component/explore/explore.component';

import { ComponentComponent } from './component/component.component';
import { Router, RouterModule } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { FrameComponent } from './component/frame/frame.component';



@NgModule({
  declarations: [
    AppComponent,
    
    BookingComponent,
    ViewComponent,
    ExploreComponent,
    ComponentComponent,
    AboutComponent,
    FrameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
