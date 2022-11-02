import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingRoutingModule } from './dashboard-routing-routing.module';
import {MatStepperModule} from '@angular/material/stepper';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CodersRoutingModule } from './coders/coders-routing.module';
import { CreatePartnerComponent } from './components/create-partner/create-partner.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DashboardRoutingRoutingModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DashboardRoutingModule { }
