import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import{ MatDividerModule} from '@angular/material/divider';
import{ MatToolbarModule} from '@angular/material/toolbar';
import{ MatIconModule}from'@angular/material/icon';
import{MatButtonModule}  from'@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule, 
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
  
  ], 
  exports:[
     HeaderComponent,
    SidebarComponent,
    FooterComponent

  ]
})
export class SharedModule { }
