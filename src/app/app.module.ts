import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PriceInputComponent } from './price-input/price-input.component';
import { AppComponent } from './app.component';
import { NzTableModule } from 'ng-zorro-antd/table';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    NzTableModule,

  ],
  declarations: [
    AppComponent,
    PriceInputComponent
]
})
export class AppModule {}
