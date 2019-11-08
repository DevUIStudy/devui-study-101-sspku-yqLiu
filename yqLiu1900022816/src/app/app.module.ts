import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DevUIModule } from 'ng-devui';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevUIModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
