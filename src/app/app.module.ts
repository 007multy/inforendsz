import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductlistComponent } from './product/productlist/productlist.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ProductComponent } from './product/product.component';
import {HttpClientModule} from "@angular/common/http"

@NgModule({
  imports:      [ BrowserModule, HttpClientModule ],
  declarations: [ AppComponent, ProductlistComponent, ShoppingCartComponent, ProductComponent],
  providers: [],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
