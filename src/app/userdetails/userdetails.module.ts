import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserdetailsRoutingModule } from './userdetails-routing.module';
import { UserdetailsComponent } from './userdetails.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { EncrserviceService } from '../encrservice.service';
import { AppComponent } from '../app.component';


@NgModule({
  declarations: [
    UserdetailsComponent
  ],
  imports: [
    CommonModule,
    UserdetailsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  // providers:[EncrserviceService],
  bootstrap:[AppComponent]
})
export class UserdetailsModule { }
