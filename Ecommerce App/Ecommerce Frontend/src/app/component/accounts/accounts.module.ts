import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountsRoutingModule } from './accounts-routing.module';
import { MaterialModule } from 'src/app/material/material.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AccountsRoutingModule,
    MaterialModule
  ]
})
export class AccountsModule { }
