import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { MaterialUiModule } from '../material-ui/material-ui.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { AuthModule } from '../auth/auth.module';
import { OperatorsComponent } from './components/operators/operators.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    OperatorsComponent
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MaterialUiModule,
    AuthModule,
  ]
})
export class LayoutModule { }
